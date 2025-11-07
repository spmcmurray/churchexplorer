// Bible History Learning Path (Lessons 1-8)
// From Mouth to Manuscript: How the Bible came to be

// Interactive Lesson 1: From Mouth to Manuscript

export const lesson1Data = {
  id: 1,
  title: "From Mouth to Manuscript",
  subtitle: "How oral tradition became written text",
  duration: "6 min",
  cards: [
    // Card 1: Introduction
    {
      type: 'content',
      title: 'From Mouth to Manuscript',
      subtitle: '⏱️ About 6 minutes',
      content: [
        '**Learning Objective:** By the end of this lesson, you will understand how oral traditions became the written Scriptures we read today.',
        'Long before the printing press, before paper, even before parchment was common, the stories that would become the Bible were passed down by word of mouth.',
        'Imagine sitting around a campfire as an elder recounts the story of Moses parting the Red Sea, or Jesus feeding the 5,000. These weren\'t just stories—they were sacred memories, carefully preserved and passed from generation to generation.'
      ],
      highlight: '💭 Quick reflection: Have you ever memorized a Bible verse or passage? Think about how you did it as we explore ancient memorization techniques.',
      requireAcknowledgment: true
    },

    // Card 2: Oral Tradition Content
    {
      type: 'content',
      title: 'The Power of Oral Tradition',
      content: [
        'In the ancient Near East, oral tradition wasn\'t like the "telephone game" we played as children. It was a carefully practiced discipline.',
        'Professional memorizers and storytellers trained for years to preserve sacred texts with remarkable accuracy. Jewish rabbis could recite the entire Torah from memory.',
        'Early Christian communities passed down Jesus\'s teachings orally for decades before they were written down. This oral period wasn\'t a weakness—it was a feature of ancient culture where memorization was prized.'
      ],
      highlight: '💡 Fun Fact: Professional memorizers could recall thousands of lines with 99%+ accuracy.'
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
      highlight: 'The codex format was revolutionary — you could flip directly to John\'s Gospel instead of unrolling through Matthew, Mark, and Luke first.'
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
      highlight: '💪 Strength, not weakness: The abundance of manuscripts actually makes it easier to reconstruct the original.'
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

    // Card 10: Reflection
    {
      type: 'reflection',
      question: 'How does learning about the Bible\'s journey from oral tradition to manuscript change your view of Scripture?',
      prompts: [
        'What surprised you most about how the Bible was preserved?',
        'How does knowing about manuscript variants affect your confidence in the Bible?',
        'What would you tell someone who says "the Bible has been changed over time"?'
      ]
    },

    // Card 11: Completion
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You\'ve mastered "From Mouth to Manuscript"! You now understand how the Bible transitioned from oral tradition to written text.',
      keyTakeaways: [
        'Oral tradition was highly reliable—professional memorizers preserved texts with 99%+ accuracy',
        'Biblical manuscripts were copied on papyrus, parchment, and eventually the revolutionary codex format',
        'Manuscript variants exist, but most are minor and don\'t affect any core Christian doctrine'
      ],
      badge: {
        icon: '📜',
        name: 'Scroll Scholar',
        description: 'Completed Lesson 1: From Mouth to Manuscript'
      }
    }
  ]
};

// Interactive Lesson 2: The Manuscript Detective Story

export const lesson2Data = {
  id: 2,
  title: "The Manuscript Detective Story",
  subtitle: "Recovering the original text from thousands of copies",
  duration: "7 min",
  cards: [
    // Card 1: Introduction
    {
      type: 'content',
      title: 'Welcome, Detective!',
      subtitle: '⏱️ About 7 minutes',
      content: [
        '**Learning Objective:** By the end of this lesson, you will understand how scholars reconstruct the original biblical text from thousands of ancient manuscript copies.',
        'Imagine you\'re a detective, but instead of solving crimes, you\'re solving a textual mystery: What did the original biblical authors actually write?',
        'We don\'t have Paul\'s original letter to the Romans or Matthew\'s first draft of his Gospel. What we have are copies of copies of copies—thousands of them.',
        'Welcome to the fascinating world of **textual criticism**, where scholars piece together the original text like assembling a jigsaw puzzle.'
      ],
      highlight: '🕵️ Quick thought: How confident can we be in the Bible if we don\'t have the originals?',
      requireAcknowledgment: true
    },

    // Card 2: Where Are the Originals?
    {
      type: 'content',
      title: 'The Mystery: Where Are the Originals?',
      content: [
        'Here\'s a surprising fact: Not a single original biblical manuscript exists today. Why?',
        '📜 **Papyrus and parchment decay over time**, especially in humid climates.',
        '🙏 Once a manuscript became worn from use, it was **reverently buried or destroyed** (to prevent misuse of God\'s name) and replaced with a fresh copy.',
        'The earliest New Testament fragment we have (John 18:31-33) dates to around **125 AD**—just 30-40 years after John wrote his Gospel.',
        '🏆 That\'s incredibly close compared to other ancient texts. Most classical works have 1,000+ year gaps between composition and earliest copies.'
      ]
    },

    // Card 3: Quiz on Originals
    {
      type: 'quiz',
      question: 'Why don\'t we have any original biblical manuscripts today?',
      options: [
        'They were all destroyed in early Christian persecutions',
        'Ancient writing materials decayed over time, and worn copies were replaced',
        'The Catholic Church deliberately destroyed them',
        'They were lost during the fall of Rome'
      ],
      correctAnswer: 1,
      explanation: 'Papyrus and parchment naturally decay, especially in humid climates. Worn manuscripts were reverently replaced with fresh copies. This was normal practice for ancient texts.'
    },

    // Card 4: Textual Criticism Explained
    {
      type: 'content',
      title: 'Textual Criticism: The Science of Recovery',
      content: [
        'Textual criticism sounds destructive, but **"criticism" here means "careful evaluation"**, not "finding fault."',
        'Scholars compare thousands of manuscripts to determine the most likely original wording.',
        '🔬 **The Method**:',
        '1. Collect all manuscript evidence',
        '2. Identify where manuscripts differ',
        '3. Apply principles to determine which reading is original',
        '📏 **Key Principles**:',
        '• **Prefer the harder reading** (scribes tended to simplify difficulties)',
        '• **Prefer the shorter reading** (scribes added explanations)',
        '• **Prefer the reading that explains the others** (the variant that best explains how other variants arose is likely original)'
      ],
      highlight: '💡 It\'s like solving a puzzle where you have all the pieces, but some pieces are slightly different!'
    },

    // Card 5: Manuscript Families
    {
      type: 'content',
      title: 'Manuscript Families: Three Main Lines',
      content: [
        'Manuscripts cluster into "families" based on shared characteristics—like genetic family trees.',
        '🏛️ **Alexandrian text** (Egypt, 2nd-4th centuries): Generally shorter and considered more accurate. Egypt\'s dry climate preserved early manuscripts beautifully.',
        '🌍 **Western text** (North Africa, Europe, 3rd-9th centuries): Has more paraphrasing and explanatory additions.',
        '⛪ **Byzantine text** (Constantinople, 5th-15th centuries): Represents the majority of manuscripts and became the basis for the King James Version.',
        'Modern translations like NIV and ESV primarily follow **Alexandrian texts** while noting significant Byzantine variants.'
      ]
    },

    // Card 6: Matching Game - Manuscript Families
    {
      type: 'matching',
      title: 'Match the Manuscript Family',
      pairs: [
        {
          term: 'Alexandrian',
          definition: 'Egypt, generally shorter and more accurate'
        },
        {
          term: 'Western',
          definition: 'North Africa/Europe, more paraphrasing'
        },
        {
          term: 'Byzantine',
          definition: 'Constantinople, basis for King James Version'
        },
        {
          term: 'Textual Criticism',
          definition: 'Careful evaluation to determine original text'
        }
      ]
    },

    // Card 7: Dead Sea Scrolls
    {
      type: 'content',
      title: 'Dead Sea Scrolls: Game-Changing Discovery',
      content: [
        'In **1947**, a Bedouin shepherd threw a rock into a cave near Qumran and heard pottery shatter. Inside were jars containing scrolls over **2,000 years old**!',
        '🎯 **Why This Matters**:',
        'Before this, our earliest complete Hebrew Old Testament dated to **1008 AD**. The Dead Sea Scrolls pushed that back to **200 BC** for some books.',
        '✨ **The Shocking Result**:',
        'The text had been preserved with **remarkable accuracy**. Isaiah scrolls from 125 BC match medieval manuscripts almost perfectly.',
        '🙌 This discovery silenced critics who claimed the Old Testament had been corrupted over centuries.'
      ],
      highlight: '🏆 The Dead Sea Scrolls proved the Bible was copied with incredible accuracy for over 1,000 years.'
    },

    // Card 8: Fill in the Blank
    {
      type: 'fillblank',
      prompt: 'The ________ ________ Scrolls, discovered in 1947, are the oldest biblical manuscripts ever found.',
      correctAnswer: 'Dead Sea',
      explanation: 'The Dead Sea Scrolls, discovered in caves near Qumran in 1947, date back to around 200 BC - 100 AD and confirmed the remarkable accuracy of biblical text transmission.'
    },

    // Card 9: Understanding Footnotes
    {
      type: 'content',
      title: 'Understanding Your Bible\'s Footnotes',
      content: [
        'Ever see notes like **"Some manuscripts add..."** or **"The earliest manuscripts do not include..."**? These show where ancient manuscripts differ.',
        '📖 **Example**: Mark 16:9-20 (the "longer ending" with snake handling and poison drinking) is absent from the earliest and best manuscripts.',
        '📝 **Another Example**: John 7:53-8:11 (woman caught in adultery) is beautiful and true to Jesus\'s character, but it\'s probably not originally part of John\'s Gospel.',
        'Modern Bibles include these passages but bracket them with notes.',
        '✨ This isn\'t hiding anything—**it\'s being honest about the textual evidence**.'
      ],
      highlight: '💪 Transparency increases trust. Modern Bibles show you where scholars have questions.'
    },

    // Card 10: Final Quiz
    {
      type: 'quiz',
      question: 'What was significant about the Dead Sea Scrolls discovery?',
      options: [
        'They contained lost books of the Bible',
        'They proved the Old Testament had been corrupted over time',
        'They pushed our manuscript evidence back 1,000 years and confirmed textual accuracy',
        'They revealed that Jesus was married'
      ],
      correctAnswer: 2,
      explanation: 'The Dead Sea Scrolls (dated around 200 BC - 100 AD) are about 1,000 years older than previously known Hebrew manuscripts. Remarkably, they match later manuscripts almost perfectly, confirming careful preservation.'
    },

    // Card 11: Completion
    {
      type: 'completion',
      title: 'Case Closed! 🎉',
      message: 'You\'ve solved "The Manuscript Detective Story"! You now understand how scholars reconstruct the original biblical text from thousands of ancient copies.',
      keyTakeaways: [
        'We don\'t have original biblical manuscripts, but we have thousands of early copies',
        'Textual criticism compares manuscripts to reconstruct the original text with >99% accuracy',
        'The Bible has better manuscript evidence than any other ancient document'
      ],
      badge: {
        icon: '🔍',
        name: 'Manuscript Detective',
        description: 'Completed Lesson 2: The Manuscript Detective Story'
      }
    }
  ]
};

// Add lessons 3-8 here (continuing with the same format...)
// [For brevity, I'll just add the exports - the full lessons are in the original file]

export { lesson3Data, lesson4Data, lesson5Data, lesson6Data, lesson7Data, lesson8Data } from '../interactiveLessonData.js';