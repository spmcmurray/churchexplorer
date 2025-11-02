const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: '../churchexplorer/.env' });

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// OpenAI API endpoint proxy
app.post('/api/ai/generate-lesson', async (req, res) => {
  try {
    const { topic, additionalContext } = req.body;

    if (!process.env.REACT_APP_OPENAI_API_KEY) {
      return res.status(500).json({ error: 'OpenAI API key not configured on server' });
    }

    const systemPrompt = `You are an expert Christian educator and theologian. Your task is to create comprehensive, educational lessons about Christian topics using a specific lesson structure.

LESSON STRUCTURE TO FOLLOW:
1. Title & Subtitle (engaging and descriptive)
2. Introduction (2-3 paragraphs setting context)
3. Main Sections (3-4 sections, each with title, content paragraphs, and key points)
4. Quiz (5 multiple-choice questions)
5. Memory Verse (relevant scripture with reference)
6. Further Reading (3 recommended resources)
7. Reflection (thought-provoking question with prompt)

IMPORTANT FORMATTING RULES:
- Return ONLY valid JSON
- Use proper escaping for quotes and special characters
- Keep content theologically accurate and orthodox
- Make it engaging and educational

Return the lesson in this exact JSON structure:
{
  "title": "string",
  "subtitle": "string",
  "introduction": "string (2-3 paragraphs)",
  "sections": [
    {
      "title": "string",
      "content": "string (multiple paragraphs)",
      "keyPoints": ["string", "string", "string"]
    }
  ],
  "quiz": [
    {
      "question": "string",
      "options": ["string", "string", "string", "string"],
      "correctAnswer": 0
    }
  ],
  "memoryVerse": {
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

    const userPrompt = `Create a comprehensive Christian education lesson about: "${topic}"

    ${additionalContext ? `Additional context: ${additionalContext}` : ''}

    Please generate a complete lesson following the specified structure. Ensure the content is:
    - Theologically accurate according to historic Christian orthodoxy
    - Appropriate for adult learners with conservative Christian values
    - Balanced and neutral when presenting different denominational views
    - Engaging and educational
    - Well-structured with clear sections and key takeaways`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.7,
        max_tokens: 3000
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'OpenAI API request failed');
    }

    const data = await response.json();
    const lessonContent = data.choices[0].message.content;

    // Clean and parse the response
    let cleanedResponse = lessonContent.trim();
    if (cleanedResponse.startsWith('```json')) {
      cleanedResponse = cleanedResponse.replace(/```json\n?/g, '').replace(/```\n?$/g, '');
    } else if (cleanedResponse.startsWith('```')) {
      cleanedResponse = cleanedResponse.replace(/```\n?/g, '');
    }

    const lessonData = JSON.parse(cleanedResponse);

    res.json({
      lesson: {
        ...lessonData,
        generatedAt: new Date().toISOString(),
        topic: topic
      },
      usage: data.usage
    });

  } catch (error) {
    console.error('Error generating lesson:', error);
    res.status(500).json({ 
      error: 'Failed to generate lesson',
      message: error.message 
    });
  }
});

// Topic suggestions endpoint
app.post('/api/ai/suggest-topics', async (req, res) => {
  try {
    const { userInterests } = req.body;

    if (!process.env.REACT_APP_OPENAI_API_KEY) {
      return res.status(500).json({ error: 'OpenAI API key not configured on server' });
    }

    const prompt = `Based on these interests: ${userInterests || 'general Christian education'}, suggest 5 engaging Christian education topics that would make excellent lessons. Return ONLY a JSON array of topic strings, nothing else.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'You are a Christian education expert. Provide topic suggestions as a JSON array.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.8,
        max_tokens: 300
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'OpenAI API request failed');
    }

    const data = await response.json();
    let content = data.choices[0].message.content.trim();
    
    if (content.startsWith('```json')) {
      content = content.replace(/```json\n?/g, '').replace(/```\n?$/g, '');
    }

    const suggestions = JSON.parse(content);
    res.json({ suggestions });

  } catch (error) {
    console.error('Error suggesting topics:', error);
    res.status(500).json({ 
      error: 'Failed to suggest topics',
      message: error.message 
    });
  }
});

// Learning path outline endpoint
app.post('/api/ai/generate-path-outline', async (req, res) => {
  try {
    const { pathType, lessonCount } = req.body;

    if (!process.env.REACT_APP_OPENAI_API_KEY) {
      return res.status(500).json({ error: 'OpenAI API key not configured on server' });
    }

    const prompt = `Create a learning path outline for "${pathType}" with ${lessonCount} lessons. Return ONLY a JSON object with this structure:
{
  "title": "string",
  "description": "string",
  "lessons": [
    {
      "title": "string",
      "description": "string",
      "order": number
    }
  ]
}`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'You are a Christian education curriculum designer.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 1000
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'OpenAI API request failed');
    }

    const data = await response.json();
    let content = data.choices[0].message.content.trim();
    
    if (content.startsWith('```json')) {
      content = content.replace(/```json\n?/g, '').replace(/```\n?$/g, '');
    }

    const outline = JSON.parse(content);
    res.json({ outline });

  } catch (error) {
    console.error('Error generating path outline:', error);
    res.status(500).json({ 
      error: 'Failed to generate path outline',
      message: error.message 
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 AI Proxy Server running on port ${PORT}`);
  console.log(`✅ OpenAI API key configured: ${!!process.env.REACT_APP_OPENAI_API_KEY}`);
});
