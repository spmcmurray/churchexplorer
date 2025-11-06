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
 * Validate topic before generation using AI to analyze intent
 * Returns { valid: boolean, message: string, reason: string }
 */
const validateTopic = async (topic, additionalContext = '') => {
  const combinedText = `${topic} ${additionalContext}`.trim();
  
  // Check if topic is too short or generic
  if (combinedText.length < 3) {
    return {
      valid: false,
      message: 'Please enter a more specific topic for your lesson.',
      reason: 'Topic too short'
    };
  }

  // Check for obviously inappropriate keywords (quick client-side filter)
  const inappropriateKeywords = [
    // Explicit content
    'porn', 'xxx', 'sex', 'explicit', 'violence', 'drugs',
    // Politics
    'trump', 'biden', 'democrat', 'republican', 'election', 'political',
    // Finance
    'cryptocurrency', 'bitcoin', 'stock market', 'investment', 'forex', 'trading',
    // Cooking & Food (unless biblical context)
    'recipe', 'cooking', 'baking', 'cuisine', 'meal prep', 'food prep',
    // Entertainment
    'movie', 'film', 'tv show', 'television', 'netflix', 'celebrity',
    // Sports & Gaming
    'football', 'basketball', 'soccer', 'gaming', 'video game', 'esports',
    // Other non-Christian topics
    'exercise', 'workout', 'fitness', 'diet', 'weight loss',
    'fashion', 'makeup', 'style', 'shopping'
  ];
  
  const lowerTopic = combinedText.toLowerCase();
  const hasInappropriate = inappropriateKeywords.some(keyword => 
    lowerTopic.includes(keyword)
  );
  
  if (hasInappropriate) {
    return {
      valid: false,
      message: 'This topic is outside our educational scope. Church Explorer focuses on Bible study, church history, theology, apologetics, and Christian doctrine.',
      reason: 'Topic outside scope'
    };
  }

  // Use AI to validate the topic's alignment with our educational mission
  try {
    const response = await fetch(`${AI_API_ENDPOINT}/validate-topic`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        topic: combinedText
      })
    });

    if (!response.ok) {
      console.error('Topic validation API error:', response.status);
      // If validation fails, allow the topic (fail open to avoid blocking legitimate requests)
      return { valid: true, message: '', reason: 'Validation service unavailable' };
    }

    const data = await response.json();
    
    // Parse the AI response
    let result;
    if (data.validationResult) {
      try {
        // Parse the AI's JSON response
        const cleanedResponse = data.validationResult.trim();
        result = JSON.parse(cleanedResponse);
      } catch (e) {
        console.error('Failed to parse validation result:', e);
        console.error('Raw response:', data.validationResult);
        // If we can't parse, fail safe and allow
        return { valid: true, message: '', reason: 'Parse error' };
      }
    } else {
      console.error('No validation result in response');
      return { valid: true, message: '', reason: 'No result' }; // Fail open
    }

    if (!result.approved) {
      return {
        valid: false,
        message: 'This topic is outside our educational scope. Church Explorer focuses on Bible study, church history, Christian theology, apologetics, and denominational studies. Please try a topic related to these areas.',
        reason: result.reason || 'Topic not approved'
      };
    }

    return {
      valid: true,
      message: '',
      reason: result.reason || 'Approved'
    };

  } catch (error) {
    console.error('Topic validation error:', error);
    // On error, fail open (allow the topic) to avoid blocking legitimate requests
    return { 
      valid: true, 
      message: '', 
      reason: 'Validation error: ' + error.message 
    };
  }
};

/**
 * Generate AI lesson with usage tracking
 * Now requires userId to check subscription limits
 */
export const generateAILesson = async (topic, additionalContext = '', userId = null) => {
  // Check subscription limits if userId provided
  if (userId) {
    const { canCreateAILesson, incrementAILessonUsage } = await import('../firebase/subscriptionService');
    const eligibility = await canCreateAILesson(userId, 'lesson');
    
    if (!eligibility.allowed) {
      const error = new Error(eligibility.reason || 'You have reached your monthly AI lesson limit.');
      error.upgradeNeeded = eligibility.upgradeNeeded;
      error.tier = eligibility.tier;
      error.used = eligibility.used;
      error.limit = eligibility.limit;
      throw error;
    }
  }
  
  // Validate topic before making API call
  const validation = await validateTopic(topic, additionalContext);
  if (!validation.valid) {
    throw new Error(validation.message);
  }
  
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

    // Increment usage counter after successful generation
    if (userId) {
      const { incrementAILessonUsage } = await import('../firebase/subscriptionService');
      await incrementAILessonUsage(userId, 'lesson');
    }

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
 * Clean text content by replacing escaped newlines with actual newlines
 */
const cleanText = (text) => {
  if (typeof text !== 'string') return text;
  return text
    .replace(/\\n/g, '\n')  // Convert \n to actual newlines
    .replace(/\\t/g, '\t')  // Convert \t to actual tabs
    .replace(/\\"/g, '"')   // Convert \" to quotes
    .trim();
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
    title: cleanText(lesson.title) || `Learning About: ${originalTopic}`,
    subtitle: cleanText(lesson.subtitle) || 'AI-Generated Lesson',
    introduction: cleanText(lesson.introduction) || 'This lesson was generated to help you learn about this topic.',
    sections: [],
    quiz: [],
    practicalApplication: cleanText(lesson.practicalApplication) || 'Consider how this knowledge applies to your faith journey.',
    memorizeVerse: lesson.memorizeVerse ? {
      reference: cleanText(lesson.memorizeVerse.reference) || 'John 8:32',
      text: cleanText(lesson.memorizeVerse.text) || 'Then you will know the truth, and the truth will set you free.'
    } : {
      reference: 'John 8:32',
      text: 'Then you will know the truth, and the truth will set you free.'
    },
    furtherReading: Array.isArray(lesson.furtherReading) 
      ? lesson.furtherReading.map(item => cleanText(item))
      : [],
    reflection: lesson.reflection ? {
      question: cleanText(lesson.reflection.question) || 'How does this lesson deepen your understanding of Christian faith?',
      prompt: cleanText(lesson.reflection.prompt) || 'Take a moment to reflect on what you\'ve learned and how it applies to your life.'
    } : {
      question: 'How does this lesson deepen your understanding of Christian faith?',
      prompt: 'Take a moment to reflect on what you\'ve learned and how it applies to your life.'
    },
    xpReward: 50 // Standard XP for AI lessons
  };

  // Validate sections (preserve interleaved quiz structure)
  if (lesson.sections && Array.isArray(lesson.sections)) {
    enhancedLesson.sections = lesson.sections.map((section, index) => {
      const enhancedSection = {
        title: cleanText(section.title) || `Section ${index + 1}`,
        content: cleanText(section.content) || '',
        keyPoints: Array.isArray(section.keyPoints) 
          ? section.keyPoints.map(point => cleanText(point))
          : []
      };
      
      // Preserve the quiz if it exists in the section (new interleaved format)
      if (section.quiz) {
        enhancedSection.quiz = {
          question: cleanText(section.quiz.question) || `Question ${index + 1}`,
          options: Array.isArray(section.quiz.options) && section.quiz.options.length === 4 
            ? section.quiz.options.map(opt => cleanText(opt))
            : ['Option A', 'Option B', 'Option C', 'Option D'],
          correct: typeof section.quiz.correct === 'number' && section.quiz.correct >= 0 && section.quiz.correct <= 3 
            ? section.quiz.correct 
            : 0,
          explanation: cleanText(section.quiz.explanation) || 'This is the correct answer.'
        };
      }
      
      return enhancedSection;
    });
  }

  // Validate quiz questions (legacy format support - separate quiz array)
  if (lesson.quiz && Array.isArray(lesson.quiz)) {
    enhancedLesson.quiz = lesson.quiz.map((question, index) => ({
      question: cleanText(question.question) || `Question ${index + 1}`,
      options: Array.isArray(question.options) && question.options.length === 4 
        ? question.options.map(opt => cleanText(opt))
        : ['Option A', 'Option B', 'Option C', 'Option D'],
      correct: typeof question.correct === 'number' && question.correct >= 0 && question.correct <= 3 
        ? question.correct 
        : 0,
      explanation: cleanText(question.explanation) || 'This is the correct answer.'
    }));
  }

  return enhancedLesson;
};

/**
 * Generate topic suggestions based on user interests
 */
export const generateTopicSuggestions = async (userInterests = []) => {
  try {
    // Use the proxy server
    const response = await fetch(`${AI_API_ENDPOINT}/suggest-topics`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userInterests: userInterests.join(', ')
      })
    });

    if (!response.ok) {
      throw new Error(`AI API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    return {
      success: true,
      suggestions: data.suggestions || data.topics || []
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
/**
 * Generate a learning path outline (lesson titles and descriptions)
 * Now requires userId to check subscription limits
 */
export const generateLearningPathOutline = async (topic, pathType, additionalContext = '', userId = null) => {
  // Check subscription limits if userId provided
  if (userId) {
    const { canCreateAILesson, incrementAILessonUsage } = await import('../firebase/subscriptionService');
    
    // Determine lesson type for limit checking
    const lessonType = pathType === 'quick' ? 'quick' : 'lesson';
    const eligibility = await canCreateAILesson(userId, lessonType);
    
    if (!eligibility.allowed) {
      const error = new Error(eligibility.reason || 'You have reached your monthly AI lesson limit.');
      error.upgradeNeeded = eligibility.upgradeNeeded;
      error.tier = eligibility.tier;
      error.used = eligibility.used;
      error.limit = eligibility.limit;
      throw error;
    }
  }
  
  // Validate topic before making API call
  const validation = await validateTopic(topic, additionalContext);
  if (!validation.valid) {
    throw new Error(validation.message);
  }
  
  try {
    const lessonCounts = {
      'quick': 1,
      'deep-dive': 3,
      'complete': 8
    };

    const lessonCount = lessonCounts[pathType] || 1;

    // Use the proxy server
    const response = await fetch(`${AI_API_ENDPOINT}/generate-path-outline`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        topic,
        pathType,
        lessonCount,
        additionalContext
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`AI API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    const outline = data.outline || data;

    // Validate that we have the lessons array
    if (!outline || !outline.lessons || !Array.isArray(outline.lessons)) {
      console.error('Invalid outline received:', outline);
      throw new Error('Server returned invalid path outline (missing lessons array)');
    }

    // Increment usage counter after successful generation
    if (userId) {
      const { incrementAILessonUsage } = await import('../firebase/subscriptionService');
      const lessonType = pathType === 'quick' ? 'quick' : 'lesson';
      await incrementAILessonUsage(userId, lessonType);
    }

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
export const generatePathLesson = async (pathOutline, lessonNumber, userId = null) => {
  try {
    const lessonInfo = pathOutline.lessons[lessonNumber - 1];
    if (!lessonInfo) {
      throw new Error('Invalid lesson number');
    }

    // Build context from previous lessons
    const previousLessons = pathOutline.lessons.slice(0, lessonNumber - 1);
    const contextText = previousLessons.length > 0
      ? `This is lesson ${lessonNumber} of ${pathOutline.totalLessons} in the path "${pathOutline.pathTitle}".
         Previous lessons covered: ${previousLessons.map(l => l.title).join(', ')}.
         Build upon this foundation.`
      : `This is the first lesson in the path "${pathOutline.pathTitle}".`;

    // Build objectives text with fallback
    const objectivesText = lessonInfo.objectives && Array.isArray(lessonInfo.objectives) && lessonInfo.objectives.length > 0
      ? `Learning Objectives:\n${lessonInfo.objectives.map((obj, i) => `${i + 1}. ${obj}`).join('\n')}`
      : `Focus: ${lessonInfo.description || 'Cover the key concepts of this topic.'}`;

    const additionalContext = `${contextText}

${objectivesText}

${lessonNumber > 1 ? 'Build on concepts from previous lessons.' : 'Establish foundational understanding.'}
${lessonNumber < pathOutline.totalLessons ? 'Prepare for upcoming lessons.' : 'Provide comprehensive conclusion and application.'}`;

  // Use the existing generate-lesson endpoint
  const result = await generateAILesson(lessonInfo.title, additionalContext, userId);
    
    if (!result.success) {
      throw new Error(result.error);
    }

    // Add path metadata
    const lesson = result.lesson;
    lesson.pathId = pathOutline.pathId;
    lesson.pathTitle = pathOutline.pathTitle;
    lesson.lessonNumber = lessonNumber;
    lesson.totalLessonsInPath = pathOutline.totalLessons;

    return {
      success: true,
      lesson: lesson,
      usage: result.usage
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
export const generateCompleteLearningPath = async (pathOutline, onProgressUpdate, userId = null) => {
  const lessons = [];
  let totalUsage = { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 };

  try {
    // Validate pathOutline has the required structure
    if (!pathOutline || !pathOutline.lessons || !Array.isArray(pathOutline.lessons)) {
      throw new Error('Invalid path outline: missing lessons array');
    }

    for (let i = 1; i <= pathOutline.totalLessons; i++) {
      if (onProgressUpdate) {
        onProgressUpdate({
          current: i,
          total: pathOutline.totalLessons,
          status: 'generating',
          lessonTitle: pathOutline.lessons[i - 1]?.title || `Lesson ${i}`
        });
      }

  const result = await generatePathLesson(pathOutline, i, userId);
      
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
 * Save AI-generated learning path to Firestore
 * Paths are stored separately from individual lessons
 */
export const saveAIPathToLibrary = async (path, currentUser = null) => {
  try {
    // Save to Firestore if user is logged in
    if (currentUser?.uid) {
      const { saveAIPathToFirestore } = await import('../firebase/progressService');
      await saveAIPathToFirestore(currentUser.uid, path);
      return { success: true, path };
    } else {
      console.warn('Cannot save AI path - user not logged in');
      return { success: false, error: 'User not logged in' };
    }
  } catch (error) {
    console.error('Error saving AI path:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Get all saved AI paths from Firestore
 */
export const getSavedAIPaths = async (currentUser = null) => {
  try {
    // If user is logged in, load from Firestore
    if (currentUser?.uid) {
      const { getAIPathsFromFirestore, getAIPathProgressFromFirestore } = await import('../firebase/progressService');
      const result = await getAIPathsFromFirestore(currentUser.uid);
      if (result.success) {
        // Load progress for each AI path and merge it in
        const pathsWithProgress = await Promise.all(
          (result.paths || []).map(async (path) => {
            const progressResult = await getAIPathProgressFromFirestore(currentUser.uid, path.id);
            if (progressResult.success && progressResult.progress) {
              return {
                ...path,
                completedLessons: progressResult.progress.completedLessons || [],
                // Calculate if path is completed (all lessons done)
                completed: path.lessons && progressResult.progress.completedLessons 
                  ? progressResult.progress.completedLessons.length >= path.lessons.length
                  : false
              };
            }
            return {
              ...path,
              completedLessons: [],
              completed: false
            };
          })
        );
        return pathsWithProgress;
      }
    }
    
    // No paths if not logged in
    return [];
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
    // Delete from Firestore if user is logged in
    if (currentUser?.uid) {
      const { deleteAIPathFromFirestore } = await import('../firebase/progressService');
      await deleteAIPathFromFirestore(currentUser.uid, pathId);
      console.log('✅ AI path deleted from Firestore');
    } else {
      console.warn('⚠️ User not authenticated - cannot delete path');
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error deleting AI path:', error);
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
  saveAIPathToLibrary,
  getSavedAIPaths,
  deleteAIPath
};

export default aiLessonService;