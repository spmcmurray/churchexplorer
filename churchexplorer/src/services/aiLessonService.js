/**
 * AI-Assisted Lesson Creator Service
 * Uses OpenAI API to generate custom lessons via Vercel proxy
 */

// Always use the proxy endpoint (Vercel) in production
// The API key is stored securely on the Vercel backend
const AI_API_ENDPOINT = process.env.REACT_APP_AI_API_ENDPOINT || 'http://localhost:3001/api/ai';

// For local development only (not used in production)
const AI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

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

THEOLOGICAL GUARDRAILS - CRITICAL:
You MUST remain neutral and objective on theologically disputed topics. Your audience includes Orthodox, Catholic, and Protestant Christians with conservative beliefs.

REQUIRED NEUTRALITY on these topics:
- Women in ministry/ordination (present all views objectively without advocacy)
- Creation vs. evolution (respect literal interpretations)
- End times theology (present views without favoring one)
- Sacramental theology (respect differences between traditions)
- Church governance structures (episcopal, presbyterian, congregational)
- Charismatic gifts (tongues, prophecy, healing)
- Mary and the saints (Catholic vs. Protestant views)
- Salvation theology (faith alone, faith plus works, perseverance of saints)
- Biblical interpretation methods (literal vs. allegorical)
- Social and cultural issues (present traditional Christian perspectives)

REQUIRED POSITIONS - NO DEVIATION:
- Marriage and sexuality: Present only the historic Christian teaching that marriage is between one man and one woman
- Sexual ethics: Present only traditional Christian sexual ethics (celibacy outside of heterosexual marriage)
- Gender and identity: Present only the biblical teaching that God created humans male and female
- NEVER advocate for or normalize LGBT behavior, relationships, or identity
- Church leadership and gender roles: Present only historic Christian teaching on male headship and biblical gender roles
  * Orthodox, Catholic, and most Protestant traditions teach male-only ordination/eldership
  * Do NOT advocate for "gender equality" in church leadership
  * Do NOT promote women pastors, elders, or priests as normative
  * When discussing women in ministry, present only complementarian and traditional views
  * You may mention egalitarian views exist, but do not advocate for them
  * Focus on biblical teaching about distinct male and female roles
- When these topics arise, present the consistent historic Christian position held by Orthodox, Catholic, and traditional Protestant churches
- Do not present progressive Christian views on these topics as valid alternatives
- Focus on God's design for sexuality, marriage, and church order as taught in Scripture

BANNED TOPICS AND PHRASES:
- DO NOT generate lessons titled or focused on "gender equality in church leadership"
- DO NOT advocate for women's ordination or women as senior pastors/priests
- DO NOT use phrases like "breaking barriers" or "empowering women in ministry" in an advocacy context
- DO NOT frame complementarian theology as oppressive or outdated
- DO NOT suggest the church needs to "progress" on gender roles
- When discussing denominations that ordain women, present it factually without endorsement

APPROACH FOR DISPUTED TOPICS:
- State: "Christians hold different views on this topic"
- Present multiple perspectives fairly and objectively
- Cite which traditions hold which views (e.g., "Catholic teaching...", "Many Protestant denominations...", "Orthodox tradition...")
- Do NOT advocate for progressive or liberal theological positions
- Focus on historical orthodox Christian teaching as the baseline
- Respect traditional interpretations of Scripture
- When discussing denominations, present their official teachings accurately

CONTENT REQUIREMENTS:
- Theologically accurate according to historic Christian orthodoxy
- Appropriate for adult learners with conservative Christian values
- Rich with relevant Scripture references (use traditional translations)
- Present denominational differences objectively and respectfully
- Maintain an educational, not activist, tone
- Respect the authority of Scripture as held by all major traditions
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
    // Always use the proxy server for security
    const response = await fetch(`${AI_API_ENDPOINT}/generate-lesson`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        topic,
        additionalContext
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI API Error:', errorText);
      throw new Error(`AI API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    if (!data.lesson) {
      throw new Error('Invalid response format from AI API');
    }

    // Validate the generated lesson structure
    const validatedLesson = validateAndEnhanceLesson(data.lesson, topic);

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
 * Generate a learning path outline (lesson titles and descriptions)
 */
export const generateLearningPathOutline = async (topic, pathType, additionalContext = '') => {
  try {
    if (!AI_API_KEY) {
      throw new Error('AI API key not configured.');
    }

    const lessonCounts = {
      'quick': 1,
      'deep-dive': 3,
      'complete': 8
    };

    const lessonCount = lessonCounts[pathType] || 1;

    const userPrompt = `Create a structured learning path outline about: "${topic}"

    ${additionalContext ? `Additional context: ${additionalContext}` : ''}

    Generate ${lessonCount} lesson(s) that progressively build understanding of this topic.
    ${lessonCount > 1 ? `
    - Start with foundational concepts
    - Build complexity gradually
    - End with practical application or advanced topics
    - Ensure each lesson connects to the next
    ` : ''}

    For EACH lesson, provide:
    1. A clear, descriptive title
    2. A 2-3 sentence description of what the lesson covers
    3. Key learning objectives (3-4 bullet points)

    Return as a JSON object with this structure:
    {
      "pathTitle": "Overall path title",
      "pathDescription": "Brief description of the complete learning path",
      "totalLessons": ${lessonCount},
      "estimatedTime": "X-Y minutes per lesson",
      "lessons": [
        {
          "lessonNumber": 1,
          "title": "Lesson title",
          "description": "What this lesson covers",
          "objectives": ["objective 1", "objective 2", "objective 3"]
        }
      ]
    }`;

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
            role: 'system',
            content: 'You are an expert curriculum designer for Christian education. Create well-structured, progressive learning paths that respect historic Christian orthodoxy and present denominational differences objectively. Maintain neutrality on disputed theological topics.'
          },
          {
            role: 'user',
            content: userPrompt
          }
        ],
        temperature: 0.7,
        max_tokens: 1500
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`AI API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    const responseText = data.choices[0].message.content.trim();
    const cleanedResponse = responseText.replace(/```json\n?|\n?```/g, '');
    const outline = JSON.parse(cleanedResponse);

    return {
      success: true,
      outline: {
        ...outline,
        pathId: `path_${Date.now()}`,
        originalTopic: topic,
        pathType: pathType,
        createdAt: new Date().toISOString()
      },
      usage: data.usage
    };

  } catch (error) {
    console.error('Path outline generation error:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

/**
 * Generate full content for a specific lesson in a learning path
 */
export const generatePathLesson = async (pathOutline, lessonNumber) => {
  try {
    if (!AI_API_KEY) {
      throw new Error('AI API key not configured.');
    }

    const lessonInfo = pathOutline.lessons[lessonNumber - 1];
    if (!lessonInfo) {
      throw new Error('Invalid lesson number');
    }

    // Build context from previous lessons
    const previousLessons = pathOutline.lessons.slice(0, lessonNumber - 1);
    const contextText = previousLessons.length > 0
      ? `This is lesson ${lessonNumber} of ${pathOutline.totalLessons} in the path "${pathOutline.pathTitle}".
         Previous lessons covered: ${previousLessons.map(l => l.title).join(', ')}.
         Build upon this foundation while covering: ${lessonInfo.description}`
      : `This is the first lesson in the path "${pathOutline.pathTitle}".`;

    const userPrompt = `Create a comprehensive lesson for: "${lessonInfo.title}"

    Context: ${contextText}

    Learning Objectives:
    ${lessonInfo.objectives.map((obj, i) => `${i + 1}. ${obj}`).join('\n')}

    Please generate a complete lesson following the specified structure. Ensure the content:
    - Achieves the stated learning objectives
    - Is theologically accurate according to historic Christian orthodoxy
    - Appropriate for adult learners with conservative Christian values
    - Rich with relevant Scripture references
    - Neutral and objective on disputed theological topics
    - Respectful of traditional Scripture interpretations
    ${lessonNumber > 1 ? '- Builds on concepts from previous lessons' : '- Establishes foundational understanding'}
    ${lessonNumber < pathOutline.totalLessons ? '- Prepares for upcoming lessons' : '- Provides comprehensive conclusion and application'}

    IMPORTANT: Present denominational differences objectively. On disputed topics, state multiple views without advocacy.

    Return the lesson as a JSON object that matches the lesson template structure.`;

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
            role: 'system',
            content: generateSystemPrompt()
          },
          {
            role: 'user',
            content: userPrompt
          }
        ],
        temperature: 0.7,
        max_tokens: 2000
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`AI API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    const responseText = data.choices[0].message.content.trim();
    const cleanedResponse = responseText.replace(/```json\n?|\n?```/g, '');
    const lessonContent = JSON.parse(cleanedResponse);

    const validatedLesson = validateAndEnhanceLesson(lessonContent, lessonInfo.title);
    
    // Add path metadata
    validatedLesson.pathId = pathOutline.pathId;
    validatedLesson.pathTitle = pathOutline.pathTitle;
    validatedLesson.lessonNumber = lessonNumber;
    validatedLesson.totalLessonsInPath = pathOutline.totalLessons;

    return {
      success: true,
      lesson: validatedLesson,
      usage: data.usage
    };

  } catch (error) {
    console.error('Path lesson generation error:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

/**
 * Generate all lessons in a learning path sequentially
 */
export const generateCompleteLearningPath = async (pathOutline, onProgressUpdate) => {
  const lessons = [];
  let totalUsage = { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 };

  try {
    for (let i = 1; i <= pathOutline.totalLessons; i++) {
      if (onProgressUpdate) {
        onProgressUpdate({
          current: i,
          total: pathOutline.totalLessons,
          status: 'generating',
          lessonTitle: pathOutline.lessons[i - 1].title
        });
      }

      const result = await generatePathLesson(pathOutline, i);
      
      if (!result.success) {
        throw new Error(`Failed to generate lesson ${i}: ${result.error}`);
      }

      lessons.push(result.lesson);
      
      if (result.usage) {
        totalUsage.prompt_tokens += result.usage.prompt_tokens || 0;
        totalUsage.completion_tokens += result.usage.completion_tokens || 0;
        totalUsage.total_tokens += result.usage.total_tokens || 0;
      }

      // Small delay to avoid rate limiting
      if (i < pathOutline.totalLessons) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    if (onProgressUpdate) {
      onProgressUpdate({
        current: pathOutline.totalLessons,
        total: pathOutline.totalLessons,
        status: 'complete'
      });
    }

    return {
      success: true,
      path: {
        ...pathOutline,
        lessons: lessons,
        completedAt: new Date().toISOString(),
        usage: totalUsage
      }
    };

  } catch (error) {
    console.error('Complete path generation error:', error);
    return {
      success: false,
      error: error.message,
      partialLessons: lessons
    };
  }
};

/**
 * Save AI-generated learning path to localStorage and Firestore (if user logged in)
 * Paths are stored separately from individual lessons
 */
export const saveAIPathToLibrary = async (path, currentUser = null) => {
  try {
    // Save to localStorage (always)
    const savedPaths = getSavedAIPaths();
    
    // Check if path already exists (by ID)
    const existingIndex = savedPaths.findIndex(p => p.id === path.id);
    if (existingIndex >= 0) {
      // Update existing path
      savedPaths[existingIndex] = {
        ...path,
        updatedAt: new Date().toISOString()
      };
    } else {
      // Add new path
      savedPaths.push({
        ...path,
        savedAt: new Date().toISOString()
      });
    }
    
    localStorage.setItem('aiGeneratedPaths', JSON.stringify(savedPaths));
    
    // Also save to Firestore if user is logged in
    if (currentUser?.uid) {
      const { saveAIPathToFirestore } = await import('../firebase/progressService');
      await saveAIPathToFirestore(currentUser.uid, path);
    }
    
    return { success: true, path };
  } catch (error) {
    console.error('Error saving AI path:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Get all saved AI paths from localStorage and Firestore (if user logged in)
 */
export const getSavedAIPaths = async (currentUser = null) => {
  try {
    // If user is logged in, try Firestore first
    if (currentUser?.uid) {
      const { getAIPathsFromFirestore } = await import('../firebase/progressService');
      const result = await getAIPathsFromFirestore(currentUser.uid);
      if (result.success && result.paths.length > 0) {
        // Sync Firestore data to localStorage as backup
        localStorage.setItem('aiGeneratedPaths', JSON.stringify(result.paths));
        return result.paths;
      }
    }
    
    // Fallback to localStorage
    const saved = localStorage.getItem('aiGeneratedPaths');
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Error loading AI paths:', error);
    return [];
  }
};

/**
 * Delete an AI path from the library
 */
export const deleteAIPath = async (pathId, currentUser = null) => {
  try {
    const savedPaths = await getSavedAIPaths();
    const filtered = savedPaths.filter(p => p.id !== pathId);
    localStorage.setItem('aiGeneratedPaths', JSON.stringify(filtered));
    // Also clean up progress for this path
    localStorage.removeItem(`aiPathProgress_${pathId}`);
    
    // Also delete from Firestore if user is logged in
    if (currentUser?.uid) {
      const { deleteAIPathFromFirestore } = await import('../firebase/progressService');
      await deleteAIPathFromFirestore(currentUser.uid, pathId);
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error deleting AI path:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Save AI-generated lesson to localStorage for user's personal library
 * DEPRECATED: Use saveAIPathToLibrary instead for multi-lesson paths
 */
export const saveAILessonToLibrary = (lesson) => {
  try {
    const savedLessons = getSavedAILessons();
    
    // Check if lesson already exists (by ID)
    const existingIndex = savedLessons.findIndex(l => l.id === lesson.id);
    if (existingIndex >= 0) {
      // Update existing lesson
      savedLessons[existingIndex] = {
        ...lesson,
        updatedAt: new Date().toISOString()
      };
    } else {
      // Add new lesson
      savedLessons.push({
        ...lesson,
        savedAt: new Date().toISOString()
      });
    }
    
    localStorage.setItem('aiGeneratedLessons', JSON.stringify(savedLessons));
    return { success: true, lesson };
  } catch (error) {
    console.error('Error saving AI lesson:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Get all saved AI lessons from localStorage
 */
export const getSavedAILessons = () => {
  try {
    const saved = localStorage.getItem('aiGeneratedLessons');
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Error loading AI lessons:', error);
    return [];
  }
};

/**
 * Delete an AI lesson from the library
 */
export const deleteAILesson = (lessonId) => {
  try {
    const savedLessons = getSavedAILessons();
    const filtered = savedLessons.filter(l => l.id !== lessonId);
    localStorage.setItem('aiGeneratedLessons', JSON.stringify(filtered));
    return { success: true };
  } catch (error) {
    console.error('Error deleting AI lesson:', error);
    return { success: false, error: error.message };
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

const aiLessonService = {
  generateAILesson,
  generateTopicSuggestions,
  generateLearningPathOutline,
  generatePathLesson,
  generateCompleteLearningPath,
  saveAILessonForReview,
  saveAILessonToLibrary,
  getSavedAILessons,
  deleteAILesson,
  saveAIPathToLibrary,
  getSavedAIPaths,
  deleteAIPath
};

export default aiLessonService;