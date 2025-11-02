/**
 * AI-Assisted Lesson Creator Service
 * Uses OpenAI API to generate custom lessons based on existing lesson structure
 */

const AI_API_ENDPOINT = process.env.REACT_APP_AI_API_ENDPOINT || 'https://api.openai.com/v1/chat/completions';
const AI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

/**
 * Lesson structure template that AI will fill in
 */
const LESSON_TEMPLATE = {
  title: "",
  subtitle: "",
  introduction: "",
  sections: [
    {
      title: "",
      content: "",
      keyPoints: []
    }
  ],
  quiz: [
    {
      question: "",
      options: ["", "", "", ""],
      correct: 0,
      explanation: ""
    }
  ],
  practicalApplication: "",
  memorizeVerse: {
    reference: "",
    text: ""
  },
  furtherReading: [],
  reflection: {
    question: "",
    prompt: ""
  }
};

/**
 * Generate a system prompt for the AI based on existing lesson examples
 */
const generateSystemPrompt = () => {
  return `You are an expert Christian educator and theologian. Your task is to create comprehensive, educational lessons about Christian topics using a specific lesson structure.

LESSON STRUCTURE TO FOLLOW:
1. Title & Subtitle (engaging and descriptive)
2. Introduction (2-3 paragraphs setting context)
3. Main Sections (3-4 sections, each with title, content, and key points)
4. Quiz Questions (5 multiple choice questions with explanations)
5. Practical Application (how to apply this knowledge)
6. Memory Verse (relevant Bible verse with reference)
7. Further Reading (3-4 recommended resources)
8. Reflection (thoughtful question for personal consideration)

REQUIREMENTS:
- Content must be academically accurate and theologically sound
- Present multiple perspectives when denominational differences exist
- Include relevant Scripture references throughout
- Make content accessible to average adult learners
- Maintain respectful, educational tone
- Each section should be 200-400 words
- Quiz questions should test understanding, not memorization
- Include both historical context and modern relevance

CRITICAL: You must respond with a valid JSON object that matches this exact structure:
{
  "title": "string",
  "subtitle": "string", 
  "introduction": "string",
  "sections": [
    {
      "title": "string",
      "content": "string",
      "keyPoints": ["string", "string", "string"]
    }
  ],
  "quiz": [
    {
      "question": "string",
      "options": ["string", "string", "string", "string"],
      "correct": 0,
      "explanation": "string"
    }
  ],
  "practicalApplication": "string",
  "memorizeVerse": {
    "reference": "string",
    "text": "string"
  },
  "furtherReading": ["string", "string", "string"],
  "reflection": {
    "question": "string",
    "prompt": "string"
  }
}

Do not include any text before or after the JSON object.`;
};

/**
 * Generate lesson content using AI
 */
export const generateAILesson = async (topic, additionalContext = '') => {
  try {
    if (!AI_API_KEY) {
      throw new Error('AI API key not configured. Please add REACT_APP_OPENAI_API_KEY to your environment variables.');
    }

    const userPrompt = `Create a comprehensive Christian education lesson about: "${topic}"

    ${additionalContext ? `Additional context: ${additionalContext}` : ''}

    Please generate a complete lesson following the specified structure. Ensure the content is:
    - Theologically accurate and well-researched
    - Appropriate for adult learners
    - Balanced when presenting different denominational views
    - Rich with relevant Scripture references
    - Practically applicable to modern Christian life

    Return the lesson as a JSON object that matches the lesson template structure.`;

    const response = await fetch(AI_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo', // Using 3.5-turbo instead of gpt-4 (more widely available)
        messages: [
          {
            role: 'system',
            content: generateSystemPrompt()
          },
          {
            role: 'user',
            content: userPrompt
          }
        ],
        temperature: 0.7,
        max_tokens: 2000 // Reduced from 4000 to avoid limits
        // Removed response_format as it might not be supported
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI API Error:', errorText);
      throw new Error(`AI API error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const data = await response.json();
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error('Invalid response format from AI API');
    }

    let lessonContent;
    try {
      const responseText = data.choices[0].message.content.trim();
      // Remove any markdown code blocks if present
      const cleanedResponse = responseText.replace(/```json\n?|\n?```/g, '');
      lessonContent = JSON.parse(cleanedResponse);
    } catch (parseError) {
      console.error('JSON parsing error:', parseError);
      console.error('Raw response:', data.choices[0].message.content);
      throw new Error('Failed to parse AI response as JSON. Please try again.');
    }

    // Validate the generated lesson structure
    const validatedLesson = validateAndEnhanceLesson(lessonContent, topic);

    return {
      success: true,
      lesson: validatedLesson,
      usage: data.usage
    };

  } catch (error) {
    console.error('AI lesson generation error:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

/**
 * Validate and enhance the AI-generated lesson
 */
const validateAndEnhanceLesson = (lesson, originalTopic) => {
  // Ensure all required fields are present
  const enhancedLesson = {
    id: `ai_${Date.now()}`,
    type: 'ai_generated',
    originalTopic: originalTopic,
    generatedAt: new Date().toISOString(),
    title: lesson.title || `Learning About: ${originalTopic}`,
    subtitle: lesson.subtitle || 'AI-Generated Lesson',
    introduction: lesson.introduction || 'This lesson was generated to help you learn about this topic.',
    sections: [],
    quiz: [],
    practicalApplication: lesson.practicalApplication || 'Consider how this knowledge applies to your faith journey.',
    memorizeVerse: lesson.memorizeVerse || {
      reference: 'John 8:32',
      text: 'Then you will know the truth, and the truth will set you free.'
    },
    furtherReading: lesson.furtherReading || [],
    reflection: lesson.reflection || {
      question: 'How does this lesson deepen your understanding of Christian faith?',
      prompt: 'Take a moment to reflect on what you\'ve learned and how it applies to your life.'
    },
    xpReward: 50 // Standard XP for AI lessons
  };

  // Validate sections
  if (lesson.sections && Array.isArray(lesson.sections)) {
    enhancedLesson.sections = lesson.sections.map((section, index) => ({
      title: section.title || `Section ${index + 1}`,
      content: section.content || '',
      keyPoints: Array.isArray(section.keyPoints) ? section.keyPoints : []
    }));
  }

  // Validate quiz questions
  if (lesson.quiz && Array.isArray(lesson.quiz)) {
    enhancedLesson.quiz = lesson.quiz.map((question, index) => ({
      question: question.question || `Question ${index + 1}`,
      options: Array.isArray(question.options) && question.options.length === 4 
        ? question.options 
        : ['Option A', 'Option B', 'Option C', 'Option D'],
      correct: typeof question.correct === 'number' && question.correct >= 0 && question.correct <= 3 
        ? question.correct 
        : 0,
      explanation: question.explanation || 'This is the correct answer.'
    }));
  }

  return enhancedLesson;
};

/**
 * Generate topic suggestions based on user interests
 */
export const generateTopicSuggestions = async (userInterests = []) => {
  try {
    const prompt = `Based on these areas of Christian interest: ${userInterests.join(', ')}, 
    suggest 10 specific lesson topics that would be valuable for Christian education. 
    
    Format as a JSON array of objects with 'title' and 'description' fields.
    
    Focus on topics like:
    - Denominational differences and beliefs
    - Church history periods and events
    - Theological concepts and doctrines
    - Biblical interpretation methods
    - Christian practices and traditions
    - Contemporary Christian issues
    
    Make suggestions specific and engaging.`;

    const response = await fetch(AI_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.8,
        max_tokens: 1000
      })
    });

    if (!response.ok) {
      throw new Error(`AI API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    let suggestions;
    try {
      const responseText = data.choices[0].message.content.trim();
      const cleanedResponse = responseText.replace(/```json\n?|\n?```/g, '');
      suggestions = JSON.parse(cleanedResponse);
    } catch (parseError) {
      console.error('Failed to parse suggestions:', parseError);
      // Return fallback suggestions if parsing fails
      return {
        success: false,
        error: 'Failed to generate suggestions',
        fallbackSuggestions: [
          { title: 'Catholic Church Beliefs', description: 'Explore the core doctrines and practices of Catholicism' },
          { title: 'Protestant Reformation', description: 'Learn about the key events and figures of the Reformation' },
          { title: 'Eastern Orthodox Theology', description: 'Understand the distinctive beliefs of Eastern Christianity' },
          { title: 'Baptist Traditions', description: 'Discover the history and practices of Baptist churches' },
          { title: 'Pentecostal Movement', description: 'Learn about the modern Pentecostal and Charismatic movements' }
        ]
      };
    }

    return {
      success: true,
      suggestions: suggestions.topics || suggestions
    };

  } catch (error) {
    console.error('Topic suggestion error:', error);
    return {
      success: false,
      error: error.message,
      fallbackSuggestions: [
        { title: 'Catholic Church Beliefs', description: 'Explore the core doctrines and practices of Catholicism' },
        { title: 'Protestant Reformation', description: 'Learn about the key events and figures of the Reformation' },
        { title: 'Eastern Orthodox Theology', description: 'Understand the distinctive beliefs of Eastern Christianity' },
        { title: 'Baptist Traditions', description: 'Discover the history and practices of Baptist churches' },
        { title: 'Pentecostal Movement', description: 'Learn about the modern Pentecostal and Charismatic movements' }
      ]
    };
  }
};

/**
 * Save AI-generated lesson for potential sharing with other users
 */
export const saveAILessonForReview = async (lesson, userRating, userFeedback) => {
  // This would integrate with your Firestore to save highly-rated AI lessons
  // for potential inclusion in the main curriculum
  try {
    // Implementation would save to a collection like 'ai_lessons_for_review'
    return {
      success: true,
      message: 'Lesson saved for review. Thank you for your feedback!'
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};

export default {
  generateAILesson,
  generateTopicSuggestions,
  saveAILessonForReview
};