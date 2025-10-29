// Interactive Lesson 1: From Mouth to Manuscript

export const lesson1Data = {
  id: 1,
  title: "From Mouth to Manuscript",
  subtitle: "How oral tradition became written text",
  cards: [
    // Card 1: Introduction
    {
      type: 'content',
      title: 'Welcome to Your First Lesson!',
      subtitle: 'From Mouth to Manuscript',
      content: [
        'Long before the printing press, before paper, even before parchment was common, the stories that would become the Bible were passed down by word of mouth.',
        'Imagine sitting around a campfire as an elder recounts the story of Moses parting the Red Sea, or Jesus feeding the 5,000. These weren\'t just stories—they were sacred memories, carefully preserved and passed from generation to generation.',
        'In this lesson, you\'ll discover how these oral traditions became the written Scriptures we read today.'
      ],
      highlight: '🎯 Goal: Understand how the Bible transitioned from spoken word to written text'
    },

    // Card 2: Oral Tradition Content
    {
      type: 'content',
      title: 'The Power of Oral Tradition',
      content: [
        'In the ancient Near East, oral tradition wasn\'t like the "telephone game" we played as children. It was serious business!',
        'Professional memorizers and storytellers trained for years to preserve sacred texts with remarkable accuracy. Jewish rabbis could recite the entire Torah from memory.',
        'Early Christian communities passed down Jesus\'s teachings orally for decades before they were written down. This oral period wasn\'t a weakness—it was a feature of ancient culture where memorization was prized.'
      ],
      highlight: '💡 Fun Fact: Professional memorizers could recall thousands of lines with 99%+ accuracy!'
    },

    // Card 3: Mini Quiz on Oral Tradition
    {
      type: 'quiz',
      question: 'Why was oral tradition considered reliable in ancient cultures?',
      options: [
        'People had better memories than we do today',
        'Professional memorizers trained for years to preserve texts accurately',
        'There were no other options available',
        'Stories were shorter and easier to remember'
      ],
      correctAnswer: 1,
      explanation: 'Ancient cultures trained professional memorizers who could accurately preserve and transmit sacred texts. This wasn\'t casual storytelling—it was a skilled profession with rigorous standards.'
    },

    // Card 4: Writing Materials
    {
      type: 'content',
      title: 'Ancient Writing Materials',
      subtitle: 'From Stone to Skin',
      content: [
        'The earliest biblical texts were written on materials that seem foreign to us today.',
        '📜 **Papyrus**: Made from Egyptian reeds, lighter and cheaper but fragile—it crumbled in damp climates.',
        '🪨 **Stone tablets**: Durable but heavy (like the Ten Commandments!).',
        '📖 **Parchment**: Treated animal skin, expensive but lasted longer. This became the preferred material.',
        'Around the 2nd-4th centuries AD, Christians pioneered the "codex" format (pages bound together like a modern book) instead of scrolls.'
      ],
      highlight: 'Revolutionary! With a codex, you could flip directly to John\'s Gospel instead of unrolling through Matthew, Mark, and Luke first!'
    },

    // Card 5: Matching Game - Writing Materials
    {
      type: 'matching',
      title: 'Match the Writing Material',
      pairs: [
        {
          term: 'Papyrus',
          definition: 'Made from Egyptian reeds, cheap but fragile'
        },
        {
          term: 'Parchment',
          definition: 'Treated animal skin, expensive but durable'
        },
        {
          term: 'Codex',
          definition: 'Pages bound together like a modern book'
        },
        {
          term: 'Scroll',
          definition: 'Long sheet rolled up, had to unroll to read'
        }
      ]
    },

    // Card 6: The Scribes
    {
      type: 'content',
      title: 'The Scribes: Ancient Copy Machines',
      content: [
        'Before photocopiers and printing presses, every Bible had to be copied by hand—letter by letter, word by word.',
        '✍️ **Jewish scribes (sopherim)** followed strict rules:',
        '• They counted every letter to ensure accuracy',
        '• They washed before writing God\'s name',
        '• They destroyed any manuscript with errors',
        '📝 **Christian scribes** were similarly careful but not always as strict. They worked in scriptoriums (writing rooms), often copying from dictation.',
        'This meticulous work is why we have variants in manuscripts—a scribe might mishear a word, skip a line accidentally, or even "correct" what seemed like an error.'
      ]
    },

    // Card 7: Fill in the Blank
    {
      type: 'fillblank',
      prompt: 'Before printing presses, every Bible had to be copied by hand by professional ________.',
      correctAnswer: 'scribes',
      explanation: 'Scribes were the professionals who painstakingly copied biblical manuscripts by hand, following strict rules to maintain accuracy.'
    },

    // Card 8: Copying Errors
    {
      type: 'content',
      title: 'Why Copying Errors Matter (and Don\'t)',
      content: [
        'It sounds alarming: "There are thousands of variants in Bible manuscripts!" But context matters.',
        '✅ **Most variants are minor**:',
        '• Spelling differences',
        '• Word order changes',
        '• Missing articles like "the"',
        '🔍 **Scholars can usually determine the original wording** by comparing manuscripts.',
        '📌 **The major variants** (like the ending of Mark or the woman caught in adultery in John 8) are clearly marked in modern Bibles.',
        '✨ **No core Christian doctrine depends on a disputed text.**'
      ],
      highlight: '💪 Strength, not weakness: The abundance of manuscripts actually makes it EASIER to reconstruct the original!'
    },

    // Card 9: Final Quiz
    {
      type: 'quiz',
      question: 'What is true about the abundance of biblical manuscripts?',
      options: [
        'It makes it harder to know what the original said',
        'It shows the text is unreliable',
        'It actually helps scholars reconstruct the original text more accurately',
        'It proves there were many different versions of the Bible'
      ],
      correctAnswer: 2,
      explanation: 'Having thousands of manuscripts is a strength, not a weakness. The more copies we have, the easier it is to compare them and determine the original wording. The Bible has far more manuscript evidence than any other ancient text.'
    },

    // Card 10: Completion
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You\'ve mastered "From Mouth to Manuscript"! You now understand how the Bible transitioned from oral tradition to written text.',
      badge: {
        icon: '📜',
        name: 'Scroll Scholar',
        description: 'Completed Lesson 1: From Mouth to Manuscript'
      }
    }
  ]
};
