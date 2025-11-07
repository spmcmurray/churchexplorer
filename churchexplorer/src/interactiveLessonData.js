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
      highlight: '� Quick thought: How confident can we be in the Bible if we don\'t have the originals?',
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

// Interactive Lesson 3: Lost in Translation?

export const lesson3Data = {
  id: 3,
  title: "Lost in Translation?",
  subtitle: "From Hebrew and Greek to your language",
  duration: "8 min",
  cards: [
    // Card 1: Introduction
    {
      type: 'content',
      title: 'Lost in Translation?',
      subtitle: '⏱️ About 8 minutes',
      content: [
        '**Learning Objective:** By the end of this lesson, you will understand how the Bible was translated from Hebrew and Greek into English and why different versions exist.',
        'Have you ever played the game "telephone," where a message gets whispered from person to person and becomes hilariously garbled by the end?',
        'Translation can feel like that—but biblical translation is far more careful.',
        'Every time the Bible moves from one language to another, translators face a fundamental tension: Do you translate **word-for-word** (formal equivalence) or **thought-for-thought** (dynamic equivalence)?',
        'Let\'s explore this fascinating journey from ancient languages to English!'
      ],
      highlight: '💭 Think about it: Have you noticed differences between Bible versions? Wonder why?',
      requireAcknowledgment: true
    },

    // Card 2: The Septuagint
    {
      type: 'content',
      title: 'The Septuagint: Judaism\'s Greek Bible',
      content: [
        'Around **250 BC**, Jewish scholars in Alexandria, Egypt translated the Hebrew Scriptures into Greek (called the **Septuagint** or **LXX**).',
        '🤔 **Why?** Many Jews in the diaspora spoke Greek, not Hebrew.',
        '⭐ **Why This Matters**:',
        '1️⃣ It\'s the version most quoted in the New Testament',
        '2️⃣ It included books (Tobit, Wisdom, Maccabees) that weren\'t in the Hebrew canon—fueling later debates about the Apocrypha',
        '3️⃣ It shows how Jews understood their Scriptures before Christianity emerged',
        'When you see Old Testament quotes in the New Testament that don\'t quite match your Old Testament, it\'s often because NT authors quoted the Septuagint!'
      ]
    },

    // Card 3: Quiz on Septuagint
    {
      type: 'quiz',
      question: 'What was significant about the Septuagint?',
      options: [
        'It was the first Bible ever written',
        'It translated Hebrew Scriptures to Greek and included books that became the Apocrypha',
        'It was written by Jesus\'s disciples',
        'It proved the Old Testament was corrupted'
      ],
      correctAnswer: 1,
      explanation: 'The Septuagint (LXX), created around 250 BC, translated Hebrew Scriptures into Greek for diaspora Jews. It included additional books (Deuterocanonical/Apocrypha) and became the version most quoted in the New Testament.'
    },

    // Card 4: Jerome's Vulgate
    {
      type: 'content',
      title: 'Jerome\'s Vulgate: The Latin Standard',
      content: [
        'By the **4th century**, Latin had replaced Greek as the common language of the Western Roman Empire.',
        'Pope Damasus commissioned **Jerome**—a brilliant but cranky scholar—to create a definitive Latin Bible.',
        '🔥 **Jerome did something radical**: Instead of translating from the Greek Septuagint (which most Christians used), he went back to the **Hebrew originals**!',
        'This controversial choice meant his **Vulgate** sometimes differed from the Greek Old Testament.',
        '📚 For over **1,000 years** (400-1500s AD), the Vulgate was THE Bible for Western Christianity.',
        'The Protestant Reformation challenged its authority, but it remained the Catholic Church\'s official version until the 20th century.'
      ],
      highlight: '💡 Fun Fact: Jerome was so grumpy that he once wrote, "I would rather face a lion than deal with critics!"'
    },

    // Card 5: Translation Philosophy
    {
      type: 'content',
      title: 'Translation Philosophy: The Spectrum',
      content: [
        'Every translation sits on a spectrum between two approaches:',
        '📏 **Formal Equivalence (word-for-word)**:',
        '• Translates each word as literally as possible',
        '• Examples: NASB, ESV, KJV',
        '• ✅ Great for study; maintains original ambiguities',
        '• ❌ Can sound wooden; Hebrew idioms don\'t always make sense in English',
        '💭 **Dynamic Equivalence (thought-for-thought)**:',
        '• Translates the meaning of phrases, not individual words',
        '• Examples: NIV, NLT, GNT',
        '• ✅ Readable, captures the author\'s intent',
        '• ❌ More translator interpretation; some nuance lost',
        '🎨 **Paraphrase**: Rewrites in contemporary language (Example: The Message)',
        '• ✅ Highly readable, fresh perspective',
        '• ❌ Even more interpretation, less precise'
      ]
    },

    // Card 6: Matching Game - Translations
    {
      type: 'matching',
      title: 'Match the Translation Type',
      pairs: [
        {
          term: 'Formal Equivalence',
          definition: 'Word-for-word (ESV, NASB, KJV)'
        },
        {
          term: 'Dynamic Equivalence',
          definition: 'Thought-for-thought (NIV, NLT)'
        },
        {
          term: 'Paraphrase',
          definition: 'Rewritten in contemporary language (The Message)'
        },
        {
          term: 'Septuagint',
          definition: 'Greek translation of Hebrew Scriptures (250 BC)'
        }
      ]
    },

    // Card 7: Why Bibles Differ
    {
      type: 'content',
      title: 'Why English Bibles Differ',
      content: [
        'Open five English Bibles to the same verse, and you might see five different wordings. Why?',
        '1️⃣ **Source texts differ**: KJV used later Byzantine manuscripts; modern versions use earlier Alexandrian texts',
        '2️⃣ **Translation philosophy**: ESV is formal; NIV is dynamic',
        '3️⃣ **English changes**: KJV\'s "thee/thou" sounded normal in 1611 but archaic today',
        '4️⃣ **Theological tradition**: Some translations lean toward specific traditions',
        '5️⃣ **Committee decisions**: Translation involves judgment calls—should "sarx" be "flesh" or "sinful nature"? Both are defensible!'
      ],
      highlight: '💪 This diversity is a strength! Comparing translations helps you see interpretive options.'
    },

    // Card 8: Fill in the Blank
    {
      type: 'fillblank',
      prompt: 'Jerome created the Latin ________, which became the Catholic Church\'s official Bible for over 1,000 years.',
      correctAnswer: 'Vulgate',
      explanation: 'Jerome\'s Vulgate (from Latin "vulgata" meaning "common") was the Latin translation that dominated Western Christianity from around 400 AD to the 1500s.'
    },

    // Card 9: Choosing Your Translation
    {
      type: 'content',
      title: 'Choosing Your Translation',
      content: [
        'There\'s no single "best" translation—it depends on your purpose!',
        '📚 **For word study and deep analysis**: ESV, NASB (formal equivalence)',
        '🙏 **For devotional reading**: NIV, NLT (dynamic equivalence)',
        '✨ **For literary beauty**: KJV, NRSV',
        '🎨 **For fresh perspective**: The Message (paraphrase)',
        '🤝 **For accuracy across traditions**: NRSV, CEB (ecumenical committees)',
        'Many scholars recommend reading **multiple translations**. Use a formal one for study, a dynamic one for reading through books quickly, and a paraphrase for seeing familiar texts with fresh eyes.'
      ],
      highlight: '💡 Pro Tip: Compare translations to see where they differ—those differences highlight interpretive questions!'
    },

    // Card 10: Final Quiz
    {
      type: 'quiz',
      question: 'For deep Bible word study, which type of translation is generally recommended?',
      options: [
        'Paraphrase like The Message',
        'Dynamic equivalence like NIV',
        'Formal equivalence like ESV or NASB',
        'Any translation works equally well'
      ],
      correctAnswer: 2,
      explanation: 'Formal equivalence translations (word-for-word like ESV, NASB) preserve the original language structure and are best for detailed study, even though they may sound less natural in English.'
    },

    // Card 11: Completion
    {
      type: 'completion',
      title: 'Translation Master! 🎉',
      message: 'You\'ve completed "Lost in Translation"! You now understand how the Bible was translated from Hebrew and Greek to English, and why different versions exist.',
      keyTakeaways: [
        'The Bible was originally written in Hebrew (OT) and Greek (NT), requiring careful translation',
        'Translation involves choosing between word-for-word (formal) and thought-for-thought (dynamic) approaches',
        'Different Bible versions serve different purposes—study Bibles vs. readable versions'
      ],
      badge: {
        icon: '🌐',
        name: 'Translation Scholar',
        description: 'Completed Lesson 3: Lost in Translation?'
      }
    }
  ]
};

// Interactive Lesson 4: The English Bible's Dramatic History

export const lesson4Data = {
  id: 4,
  title: "The English Bible's Dramatic History",
  subtitle: "Martyrs, kings, and the fight to read Scripture in English",
  duration: "9 min",
  cards: [
    // Card 1: Introduction
    {
      type: 'content',
      title: 'A Dangerous Book',
      subtitle: '⏱️ About 9 minutes',
      content: [
        '**Learning Objective:** By the end of this lesson, you will understand the dramatic story of how courageous people fought to bring the Bible into English.',
        'It\'s hard to imagine today, but for centuries, owning an English Bible could get you **killed**.',
        'The story of the English Bible is filled with smugglers, secret printings, political intrigue, and martyrs who believed ordinary people deserved to read God\'s Word in their own language.',
        'From illegal translations whispered in secret to a king\'s authorized version that shaped the English language itself, this is a story of **courage, controversy, and cultural transformation**.'
      ],
      highlight: '💭 Imagine: What would you risk to read the Bible in your own language?',
      requireAcknowledgment: true
    },

    // Card 2: Wycliffe
    {
      type: 'content',
      title: 'John Wycliffe: The Morning Star',
      content: [
        'In the **1380s**, John Wycliffe and his followers (derisively called "Lollards") produced the first complete English Bible.',
        '🚫 **This was revolutionary and illegal.** The Catholic Church insisted Scripture should remain in Latin, interpreted by clergy.',
        'Wycliffe believed every Christian should read the Bible directly. His followers hand-copied manuscripts and secretly distributed them.',
        '💀 When Wycliffe died (1384), his enemies **dug up his bones, burned them, and threw the ashes in a river**.',
        '💡 But his ideas couldn\'t be killed—they flowed through Europe like those ashes, influencing Jan Hus, Martin Luther, and ultimately the Reformation!'
      ],
      highlight: '⚡ "The Morning Star of the Reformation" - Wycliffe\'s ideas sparked change across Europe'
    },

    // Card 3: Quiz on Wycliffe
    {
      type: 'quiz',
      question: 'What was illegal about Wycliffe\'s Bible?',
      options: [
        'It was translated from Greek instead of Latin',
        'It translated the Bible into English without Church authorization',
        'It removed books from the Bible',
        'It added Wycliffe\'s own writings'
      ],
      correctAnswer: 1,
      explanation: 'In the 1380s, translating the Bible into English (or any vernacular language) without Church permission was illegal. The Church insisted Scripture remain in Latin, controlled and interpreted by clergy.'
    },

    // Card 4: Tyndale
    {
      type: 'content',
      title: 'William Tyndale: "If God Spare My Life..."',
      content: [
        'William Tyndale made a famous vow to a clergyman: **"If God spare my life, ere many years I will cause a boy that driveth the plough shall know more of the Scripture than thou dost!"**',
        'Unable to get permission in England, Tyndale fled to Europe. Using Erasmus\'s Greek New Testament (1516), he produced an English translation **directly from Greek**—a first!',
        '📦 He smuggled printed copies into England (1526) hidden in **bales of cloth and wine barrels**.',
        '🔥 Church authorities burned the Bibles publicly.',
        '💀 In **1536**, Tyndale was betrayed, strangled, and burned at the stake. His last words: **"Lord, open the King of England\'s eyes!"**',
        '✨ Within a year, King Henry VIII authorized an English Bible. **83% of the KJV New Testament comes directly from Tyndale\'s work**.'
      ]
    },

    // Card 5: Matching Game - English Bible Translators
    {
      type: 'matching',
      title: 'Match the Translator',
      pairs: [
        {
          term: 'John Wycliffe',
          definition: 'First complete English Bible (1380s), illegal translation'
        },
        {
          term: 'William Tyndale',
          definition: 'Translated from Greek, martyred in 1536'
        },
        {
          term: 'King James I',
          definition: 'Authorized the 1611 Bible translation'
        },
        {
          term: 'Erasmus',
          definition: 'Created Greek New Testament (1516) used by Tyndale'
        }
      ]
    },

    // Card 6: King James Version
    {
      type: 'content',
      title: 'The King James Version: Politics and Poetry',
      content: [
        'In **1604**, King James I authorized a new Bible translation. Why?',
        'The **Geneva Bible** (1560)—England\'s popular version—had marginal notes that **questioned royal authority**. James wanted a translation without anti-monarchy notes!',
        '📚 He assembled **47 scholars**, divided into six committees, working from Hebrew, Greek, and Aramaic.',
        '✨ Their instructions: **majestic, dignified language** suitable for public reading; no controversial notes.',
        'The **1611 King James Version** succeeded brilliantly—its phrases entered the English language:',
        '• "Thee/thy"',
        '• "Go the extra mile"',
        '• "The powers that be"',
        'It dominated for **350 years**.'
      ],
      highlight: '💡 The KJV shaped English literature and culture more than any other book except Shakespeare'
    },

    // Card 7: Fill in the Blank
    {
      type: 'fillblank',
      prompt: 'William Tyndale was martyred in 1536, but his last words were: "Lord, open the ________ of England\'s eyes!"',
      correctAnswer: 'King',
      explanation: 'Tyndale\'s dying prayer was "Lord, open the King of England\'s eyes!" Remarkably, within a year, King Henry VIII authorized an English Bible, fulfilling Tyndale\'s prayer.'
    },

    // Card 8: Modern Translations
    {
      type: 'content',
      title: 'The Modern Translation Explosion',
      content: [
        'Why so many modern translations? Several factors:',
        '1️⃣ **Earlier manuscripts discovered** (Dead Sea Scrolls, Alexandrian texts)',
        '2️⃣ **English language evolution** (KJV English sounds archaic)',
        '3️⃣ **Translation philosophy debates** (formal vs. dynamic)',
        '4️⃣ **Denominational preferences**',
        '5️⃣ **Target audiences** (study, devotional, children, etc.)',
        '📖 **Major modern translations**:',
        '• **NIV (1978)**: Dynamic, evangelical, best-selling',
        '• **NASB (1971)**: Very literal',
        '• **ESV (2001)**: Formal, evangelical',
        '• **NLT (1996)**: Thought-for-thought, highly readable',
        '• **NRSV (1989)**: Scholarly, ecumenical'
      ]
    },

    // Card 9: Final Quiz
    {
      type: 'quiz',
      question: 'What percentage of the KJV New Testament comes from Tyndale\'s translation?',
      options: [
        'About 25%',
        'About 50%',
        'About 83%',
        'None - they were completely different'
      ],
      correctAnswer: 2,
      explanation: 'Approximately 83% of the KJV New Testament comes directly from Tyndale\'s translation. His work was so excellent that later translators largely preserved his wording.'
    },

    // Card 10: Completion
    {
      type: 'completion',
      title: 'History Hero! 🎉',
      message: 'You\'ve completed "The English Bible\'s Dramatic History"! You now understand the courage and sacrifice behind the Bible you can freely read today.',
      keyTakeaways: [
        'Translating the Bible into English was once illegal and cost many people their lives',
        'William Tyndale\'s translation (1520s) forms the foundation of modern English Bibles',
        'The King James Version (1611) became the dominant English Bible for 400 years'
      ],
      badge: {
        icon: '📖',
        name: 'Bible History Scholar',
        description: 'Completed Lesson 4: The English Bible\'s Dramatic History'
      }
    }
  ]
};

// Interactive Lesson 5: The Books That Almost Made It

export const lesson5Data = {
  id: 5,
  title: "The Books That Almost Made It",
  subtitle: "Understanding the Apocrypha and 'lost gospels'",
  duration: "10 min",
  cards: [
    // Card 1: Introduction
    {
      type: 'content',
      title: 'The Missing Books Mystery',
      subtitle: '⏱️ About 10 minutes',
      content: [
        '**Learning Objective:** By the end of this lesson, you will understand what the Apocrypha is, why Catholic and Protestant Bibles differ, and how the biblical canon was formed.',
        'Walk into a Catholic bookstore and count the books in their Bible: **73**. Walk into a Protestant bookstore: **66 books**.',
        'What happened to those 7 books? And what about the "Gospel of Thomas" or "Gospel of Judas" that make headlines every few years?',
        'Welcome to the fascinating world of texts that were popular, influential, or nearly canonical—but ultimately didn\'t make the cut for most Christian Bibles.',
        'Get ready to uncover why some books made it in... and others didn\'t!'
      ],
      highlight: '💭 Ever wondered: Why do Catholic and Protestant Bibles have different books?',
      requireAcknowledgment: true
    },

    // Card 2: What is the Apocrypha?
    {
      type: 'content',
      title: 'The Apocrypha: What Are These Books?',
      content: [
        'The **Apocrypha** (Greek: "hidden things") or **Deuterocanonical** (second canon) books include:',
        '📚 **Tobit** - Story of faith and an angel',
        '⚔️ **Judith** - Brave woman saves her people',
        '🦉 **Wisdom of Solomon** - Philosophical wisdom literature',
        '📖 **Sirach (Ecclesiasticus)** - Practical life wisdom',
        '📜 **Baruch** - Prophecy attributed to Jeremiah\'s scribe',
        '🛡️ **1-2 Maccabees** - Jewish resistance to Greek oppression',
        '➕ **Additions to Esther and Daniel**',
        'These books were in the Greek Septuagint but not in the Hebrew Bible. That\'s where the debate begins!'
      ]
    },

    // Card 3: Quiz on Apocrypha
    {
      type: 'quiz',
      question: 'What are the Deuterocanonical books?',
      options: [
        'Books written after the New Testament',
        'Books in the Septuagint but not the Hebrew Bible, accepted by Catholics but not Protestants',
        'Books that were lost and recently discovered',
        'The Gnostic gospels'
      ],
      correctAnswer: 1,
      explanation: 'Deuterocanonical books (Tobit, Judith, Wisdom, etc.) were in the Greek Septuagint but not the Hebrew canon. Catholics and Orthodox accept them as Scripture; Protestants do not, though they may include them for historical reading.'
    },

    // Card 4: The Great Divide
    {
      type: 'content',
      title: 'Catholic vs. Protestant: The Great Divide',
      content: [
        'Why do Catholics and Protestants disagree on these books?',
        '✝️ **Catholic/Orthodox view**: These books ARE Scripture.',
        '• Used by the early church',
        '• Quoted by church fathers',
        '• Affirmed at councils (Hippo 393 AD, Carthage 397 AD, Trent 1546 AD)',
        '⛪ **Protestant view**: Useful for history and devotion but NOT Scripture.',
        '• Not in the Hebrew canon',
        '• Not quoted as Scripture in the New Testament',
        '• Contain theological ideas Protestants reject (prayers for the dead, purgatory implications)',
        'The Reformers said: **"Good to read, but not equal to Scripture."**'
      ],
      highlight: '💡 This isn\'t about one side being "right" and the other "wrong"—it\'s about different criteria for what counts as Scripture'
    },

    // Card 5: Matching Game - Apocrypha Books
    {
      type: 'matching',
      title: 'Match the Apocrypha Book',
      pairs: [
        {
          term: 'Tobit',
          definition: 'Story of faith featuring an angel'
        },
        {
          term: 'Wisdom of Solomon',
          definition: 'Philosophical wisdom literature'
        },
        {
          term: '1-2 Maccabees',
          definition: 'Jewish resistance to Greek oppression'
        },
        {
          term: 'Sirach',
          definition: 'Practical life wisdom (Ecclesiasticus)'
        }
      ]
    },

    // Card 6: Books That Were Close
    {
      type: 'content',
      title: 'So Close, Yet So Far',
      content: [
        'Several early Christian texts were beloved and **nearly** canonical:',
        '🐑 **Shepherd of Hermas** (2nd century): Apocalyptic visions and moral teachings. Included in some early Bibles! Why rejected? Too late to be apostolic.',
        '✉️ **1 Clement** (c. 96 AD): Letter from Rome to Corinth. Wise counsel, but lacked apostolic authority.',
        '📘 **Didache** (1st-2nd century): Early church manual on baptism, Eucharist, church order. Practical but not inspired.',
        '📝 **Epistle of Barnabas** (2nd century): Allegorical interpretation of the Old Testament. Interesting but speculative.',
        'These books show us early Christianity\'s diversity and piety but lacked the apostolic authority or universal acceptance to become Scripture.'
      ],
      highlight: '💫 These books are valuable for understanding early Christian thought, even if not canonical!'
    },

    // Card 7: Fill in the Blank
    {
      type: 'fillblank',
      prompt: 'Protestant Reformers rejected the Apocrypha as Scripture because these books weren\'t in the ________ canon.',
      correctAnswer: 'Hebrew',
      explanation: 'Protestants noted that the Apocryphal books weren\'t in the Hebrew Bible (the Old Testament used by Jesus and the apostles), which was a key reason for not including them as Scripture.'
    },

    // Card 8: The Gnostic Gospels
    {
      type: 'content',
      title: 'The Gnostic Gospels: A Different Religion',
      content: [
        'In **1945**, Egyptian farmers found a jar near Nag Hammadi containing 52 texts, including "gospels" attributed to Thomas, Philip, and Mary.',
        '❌ These weren\'t "lost gospels suppressed by the church"—they were **Gnostic texts** (2nd-3rd centuries), representing a different religion!',
        '🔮 **Gnosticism taught**:',
        '• Secret knowledge (gnosis) brings salvation',
        '• The material world is evil, created by a lesser god',
        '• Jesus didn\'t have a real body (Docetism)',
        '• Salvation is escaping the body, not bodily resurrection',
        '🚫 **Why they were rejected**:',
        '1. Written 100-200 years after Jesus by Gnostics, not apostles',
        '2. Contradicted apostolic teaching',
        '3. Focused on secret sayings, not Jesus\'s life, death, and resurrection',
        '4. No manuscript evidence from the 1st century'
      ]
    },

    // Card 9: Quiz on Gnostic Gospels
    {
      type: 'quiz',
      question: 'Why were the Nag Hammadi gospels (like Gospel of Thomas) rejected?',
      options: [
        'They were written too recently to be authentic',
        'They were written 100-200 years after Jesus, taught Gnostic theology, and contradicted apostolic teaching',
        'The church was afraid of their message',
        'They were poorly written'
      ],
      correctAnswer: 1,
      explanation: 'The Nag Hammadi texts were written in the 2nd-3rd centuries (long after the apostles), reflect Gnostic theology (which contradicts Christianity), and lack apostolic authority. They weren\'t "suppressed"—they were simply not apostolic.'
    },

    // Card 10: Debunking Sensationalism
    {
      type: 'content',
      title: 'Debunking "Lost Gospel" Sensationalism',
      content: [
        'Every few years, media headlines scream: **"Lost Gospel Discovered!"** or **"Ancient Text Challenges Christianity!"**',
        'Let\'s be clear: **No serious scholar claims these texts should be in the Bible.**',
        '📰 **Gospel of Judas** (National Geographic 2006): Gnostic text (3rd century) portraying Judas as hero. Centuries late, Gnostic perspective.',
        '📰 **"Secret Gospel of Mark"**: Claimed 1958, likely a modern forgery.',
        '📰 **"Jesus\'s Wife" papyrus** (2012): Tiny fragment, now widely considered a modern fake.',
        'The sensationalism sells books and gets clicks, but the scholarship is clear: **We have the right books in the New Testament.**',
        'These later texts help us understand competing versions of Christianity that died out, but they don\'t represent apostolic Christianity.'
      ],
      highlight: '🔍 Media hype ≠ Scholarly consensus. Always check what actual scholars say!'
    },

    // Card 11: Canon Criteria
    {
      type: 'content',
      title: 'Why Canon Boundaries Matter',
      content: [
        'Having a defined canon isn\'t about being narrow-minded—it\'s about having a stable foundation.',
        'Imagine if every generation could add new "gospels" based on new "revelations." Christianity would fracture endlessly!',
        '📋 **The canon criteria**:',
        '1️⃣ **Apostolicity**: Written by or connected to apostles',
        '2️⃣ **Orthodoxy**: Consistent with apostolic teaching',
        '3️⃣ **Antiquity**: From the first century',
        '4️⃣ **Usage**: Widely used in churches',
        '5️⃣ **Inspiration**: Recognized as bearing divine authority',
        'Books like Thomas, Shepherd of Hermas, or the Apocrypha might be edifying, but they don\'t meet all these criteria.',
        '🏛️ The canon gives us a foundation to stand on—a measuring stick for faith and practice.'
      ]
    },

    // Card 12: Matching Game - Canon Criteria
    {
      type: 'matching',
      title: 'Match the Canon Criterion',
      pairs: [
        {
          term: 'Apostolicity',
          definition: 'Written by or connected to apostles'
        },
        {
          term: 'Orthodoxy',
          definition: 'Consistent with apostolic teaching'
        },
        {
          term: 'Antiquity',
          definition: 'From the first century'
        },
        {
          term: 'Usage',
          definition: 'Widely used in early churches'
        }
      ]
    },

    // Card 13: Final Quiz
    {
      type: 'quiz',
      question: 'What criteria did the early church use to determine which books were canonical?',
      options: [
        'Popularity among modern readers',
        'Which books the Emperor preferred',
        'Apostolicity, orthodoxy, antiquity, widespread usage, and recognized inspiration',
        'Only books that were easy to understand'
      ],
      correctAnswer: 2,
      explanation: 'The canon wasn\'t arbitrary. Books needed to be: written by/connected to apostles, consistent with apostolic teaching, from the first century, widely used in churches, and recognized as divinely inspired.'
    },

    // Card 14: Completion
    {
      type: 'completion',
      title: 'Canon Expert! 🎉',
      message: 'You\'ve completed "The Books That Almost Made It"! You now understand the Apocrypha, the Gnostic gospels, and how the biblical canon was formed.',
      keyTakeaways: [
        'Catholic Bibles include 7 additional books (Apocrypha) that Protestants consider non-canonical',
        '"Lost gospels" (Gospel of Thomas, Judas) were Gnostic texts written later, not apostolic',
        'The biblical canon was determined by apostolicity, orthodoxy, antiquity, and widespread church usage'
      ],
      badge: {
        icon: '📚',
        name: 'Canon Scholar',
        description: 'Completed Lesson 5: The Books That Almost Made It'
      }
    }
  ]
};

// Interactive Lesson 6: How Christians Read the Bible Over Time

export const lesson6Data = {
  id: 6,
  title: "How Christians Read the Bible Over Time",
  subtitle: "From allegory to literal: changing interpretation methods",
  duration: "11 min",
  cards: [
    // Card 1: Introduction
    {
      type: 'content',
      title: 'One Bible, Many Readings',
      subtitle: '⏱️ About 11 minutes',
      content: [
        '**Learning Objective:** By the end of this lesson, you will understand how Christians have interpreted the Bible differently throughout history and why denominations disagree today.',
        'Open your Bible to Genesis 3, where Eve eats the forbidden fruit.',
        'Is this a literal historical event? An allegory about human free will? A mythological story teaching theological truth?',
        '🤔 How you answer depends partly on **when and where you lived**.',
        'Christians across history have read the same Bible but interpreted it very differently.',
        'Understanding these interpretation methods helps explain why denominations today disagree on the "plain meaning" of Scripture—and why your great-grandparents might have read passages differently than you do.'
      ],
      highlight: '💭 Consider: Have you ever heard two people interpret the same Bible verse differently?',
      requireAcknowledgment: true
    },

    // Card 2: Origen's Allegorical Method
    {
      type: 'content',
      title: 'Origen: Allegory Everywhere!',
      content: [
        'In the 3rd century, **Origen of Alexandria** pioneered allegorical interpretation.',
        'Influenced by Greek philosophy, he believed Scripture had **three senses** (like humans have body, soul, and spirit):',
        '📖 **Literal** - The plain events',
        '💭 **Moral** - Ethical lessons',
        '✨ **Spiritual** - Deeper mystical meanings',
        '🌊 **Example**: The crossing of the Red Sea wasn\'t just historical—it symbolized baptism, deliverance from sin, and the soul\'s journey to God!',
        '💕 Origen interpreted Song of Solomon entirely as allegory about Christ and the church—not a romantic love poem at all.',
        '⚠️ Critics said he was more interested in Plato than in what the biblical authors actually meant.'
      ],
      highlight: '💡 This approach solved problems (embarrassing Old Testament stories) but risked reading meanings into the text that weren\'t there'
    },

    // Card 3: Quiz on Origen
    {
      type: 'quiz',
      question: 'What was Origen\'s main interpretive approach?',
      options: [
        'Strict literal interpretation only',
        'Historical-critical method',
        'Allegorical interpretation finding spiritual meanings beyond the literal',
        'Ignoring the Old Testament'
      ],
      correctAnswer: 2,
      explanation: 'Origen pioneered allegorical interpretation, believing Scripture had literal, moral, and spiritual senses. He found deeper symbolic meanings throughout the Bible, especially in problematic or poetic texts.'
    },

    // Card 4: Medieval Four-Fold Sense
    {
      type: 'content',
      title: 'Medieval Four-Fold Sense: Layers of Meaning',
      content: [
        'Medieval theologians developed a **four-fold interpretive method**, summarized in a Latin couplet:',
        '"The letter teaches events, allegory what you believe, moral what you do, anagogy where you\'re going"',
        '🏛️ **Example using "Jerusalem"**:',
        '1️⃣ **Literal**: Historical city in Israel',
        '2️⃣ **Allegorical**: The Church',
        '3️⃣ **Moral**: The human soul',
        '4️⃣ **Anagogical**: Heaven',
        'This method found multiple valid meanings in every text. It made Scripture endlessly rich but also dangerously subjective.',
        '❓ How do you know which allegorical reading is correct?',
        'The system worked because Church tradition and authority guided interpretation. But it set the stage for Reformation debates.'
      ]
    },

    // Card 5: Matching Game - Medieval Senses
    {
      type: 'matching',
      title: 'Match the Medieval Sense',
      pairs: [
        {
          term: 'Literal',
          definition: 'What happened (historical events)'
        },
        {
          term: 'Allegorical',
          definition: 'What to believe (theological meaning)'
        },
        {
          term: 'Moral',
          definition: 'What to do (ethical application)'
        },
        {
          term: 'Anagogical',
          definition: 'Where you\'re going (heavenly destiny)'
        }
      ]
    },

    // Card 6: The Reformation Revolution
    {
      type: 'content',
      title: 'The Reformation: The "Plain Sense" Revolution',
      content: [
        '⚡ Martin Luther and other Reformers rejected allegorical excess.',
        'Luther said: **"The Holy Spirit is the plainest writer and speaker in heaven and earth, and therefore His words cannot have more than one, and that the very simplest, sense, which we call the literal, ordinary, natural sense."**',
        '📋 **The Reformers insisted**:',
        '1️⃣ **Grammatical-historical method**: Understand words in their historical context and original languages',
        '2️⃣ **Scripture interprets Scripture**: Compare clear passages with unclear ones',
        '3️⃣ **Priesthood of all believers**: You don\'t need Church authority to interpret—the Holy Spirit guides individual readers',
        '✅ This democratized Bible reading...',
        '❌ But also fragmented Christianity. Without Church authority, who decides what\'s "plain"?',
        'It\'s why Protestantism has so many denominations—disagreements over what Scripture "plainly" teaches!'
      ]
    },

    // Card 7: Fill in the Blank
    {
      type: 'fillblank',
      prompt: 'The Reformers emphasized the ________ sense of Scripture, rejecting excessive allegorical interpretation.',
      correctAnswer: 'plain',
      explanation: 'The Reformers championed the "plain sense" or literal-grammatical-historical interpretation of Scripture, insisting that God\'s Word is clear and accessible to ordinary believers, not requiring layers of allegorical interpretation.'
    },

    // Card 8: Historical-Critical Scholarship
    {
      type: 'content',
      title: 'Modern Historical-Critical Scholarship',
      content: [
        'Starting in the 18th-19th centuries, scholars applied historical methods to the Bible like any ancient text:',
        '📝 **Source criticism**: Who wrote this? When? What sources did they use? (e.g., the Documentary Hypothesis for the Torah)',
        '📖 **Form criticism**: What genre is this? (History, poetry, parable, apocalyptic)',
        '✂️ **Redaction criticism**: How did editors shape the final text?',
        '🔍 **Textual criticism**: What did the original manuscripts say?',
        '✅ These methods yielded insights (understanding ancient Near Eastern context, recognizing literary genres)',
        '⚠️ But also controversies (questioning Mosaic authorship of the Pentateuch, debating Gospel historicity)',
        'Conservative scholars use these tools while maintaining high views of biblical authority; liberal scholars sometimes conclude the Bible is purely human literature.',
        'The tools themselves are neutral; the conclusions depend on presuppositions about Scripture\'s nature.'
      ]
    },

    // Card 9: Quiz on Historical-Critical Method
    {
      type: 'quiz',
      question: 'What is historical-critical scholarship?',
      options: [
        'Criticizing the Bible\'s historical claims',
        'Applying historical methods to understand authorship, context, sources, and genre',
        'Proving the Bible is historically false',
        'Only reading the historical books of the Bible'
      ],
      correctAnswer: 1,
      explanation: 'Historical-critical method applies historical and literary analysis to Scripture: examining authorship, dating, sources, genres, and historical context. It\'s a tool that can be used with various views of biblical authority.'
    },

    // Card 10: Why Denominations Disagree
    {
      type: 'content',
      title: 'Why Denominations Read the Same Bible Differently',
      content: [
        'Here\'s why Christians disagree on "what the Bible clearly says":',
        '1️⃣ **Interpretive tradition**: Catholics read through Church tradition; Protestants through "Scripture alone" (though they have traditions too)',
        '2️⃣ **Theological framework**: Calvinists and Arminians both cite Scripture but reach different conclusions on predestination',
        '3️⃣ **Genre recognition**: Is Genesis 1 scientific? Poetic? Theological? Your answer affects interpretation',
        '4️⃣ **Cultural context**: Does 1 Timothy 2:12 ("I do not permit a woman to teach") apply universally or to a specific situation?',
        '5️⃣ **Role of reason/experience**: How much weight do you give to science, personal experience, or Church tradition alongside Scripture?',
        'These aren\'t "some Christians ignore the Bible" vs. "we follow it." **All are trying to faithfully interpret Scripture**—they just bring different tools and assumptions.'
      ],
      highlight: '💡 Understanding WHY Christians disagree helps us have more charitable conversations!'
    },

    // Card 11: Matching Game - Interpretive Approaches
    {
      type: 'matching',
      title: 'Match the Interpretive Approach',
      pairs: [
        {
          term: 'Allegorical',
          definition: 'Finding hidden spiritual meanings (Origen)'
        },
        {
          term: 'Four-Fold Sense',
          definition: 'Medieval: literal, allegorical, moral, anagogical'
        },
        {
          term: 'Plain Sense',
          definition: 'Reformation: grammatical-historical reading'
        },
        {
          term: 'Historical-Critical',
          definition: 'Modern: analyzing sources, genre, context'
        }
      ]
    },

    // Card 12: Final Quiz
    {
      type: 'quiz',
      question: 'Why do denominations interpret the same Bible verse differently?',
      options: [
        'Some denominations ignore parts of the Bible',
        'Different interpretive traditions, theological frameworks, genre recognition, and cultural contexts',
        'Only Catholics interpret correctly',
        'The Bible is too unclear to interpret'
      ],
      correctAnswer: 1,
      explanation: 'Christians disagree not because some ignore Scripture but because they bring different interpretive traditions, theological frameworks, understandings of genre and context, and views on the role of reason and experience. All are trying to interpret faithfully.'
    },

    // Card 13: Completion
    {
      type: 'completion',
      title: 'Interpretation Master! 🎉',
      message: 'You\'ve completed "How Christians Read the Bible Over Time"! You now understand how biblical interpretation has evolved and why Christians disagree on what Scripture means.',
      keyTakeaways: [
        'Biblical interpretation has evolved from allegorical (early church) to literal (Reformation) to critical (modern)',
        'The medieval "four-fold sense" saw literal, allegorical, moral, and anagogical meanings in every text',
        'Christians today disagree because of different interpretive traditions, not because some ignore Scripture'
      ],
      badge: {
        icon: '📖',
        name: 'Hermeneutics Scholar',
        description: 'Completed Lesson 6: How Christians Read the Bible Over Time'
      }
    }
  ]
};

// Interactive Lesson 7: Archaeology & the Bible

export const lesson7Data = {
  id: 7,
  title: "Archaeology & the Bible",
  subtitle: "How discoveries confirm, challenge, and illuminate Scripture",
  duration: "9 min",
  cards: [
    // Card 1: Introduction
    {
      type: 'content',
      title: 'Digging Into the Past',
      subtitle: '⏱️ About 9 minutes',
      content: [
        '**Learning Objective:** By the end of this lesson, you will understand how archaeological discoveries have confirmed, challenged, and illuminated biblical accounts.',
        'In **1947**, a shepherd threw a rock into a cave and **changed biblical scholarship forever**.',
        'In **1868**, a missionary found a stone that mentioned King David\'s dynasty—confirming a biblical king skeptics doubted existed.',
        'Archaeology doesn\'t "prove" the Bible in a simplistic way, but it provides an astonishing amount of confirmation for biblical people, places, and events.',
        'It also raises questions and challenges traditional interpretations.',
        'Let\'s explore how **digging in the dirt illuminates the book we hold in our hands**!'
      ],
      highlight: '💭 Curiosity check: What archaeological find would most strengthen your faith?',
      requireAcknowledgment: true
    },

    // Card 2: Dead Sea Scrolls Discovery
    {
      type: 'content',
      title: 'Dead Sea Scrolls: A Game-Changing Discovery',
      content: [
        'Before **1947**, critics claimed the Old Testament had been corrupted over centuries of copying.',
        'Our oldest complete Hebrew Bible was the Leningrad Codex (**1008 AD**)—over 1,000 years after the last OT book was written.',
        '🐑 Then came Qumran. Bedouin shepherds discovered caves containing hundreds of scrolls, including complete or partial copies of **every OT book except Esther**.',
        '📅 **Dates**: 200 BC - 100 AD',
        '📜 The Isaiah scroll from Cave 1 (125 BC) is **1,000 years older** than any previously known manuscript.',
        '✅ **Result?** Word-for-word match with medieval manuscripts, with only minor spelling variations!',
        'This discovery silenced claims of textual corruption and confirmed the careful preservation of Scripture.',
        'We also learned about Second Temple Judaism—the religious world Jesus grew up in.'
      ],
      highlight: '🏆 The Dead Sea Scrolls pushed manuscript evidence back 1,000 years and proved incredible textual accuracy!'
    },

    // Card 3: Quiz on Dead Sea Scrolls
    {
      type: 'quiz',
      question: 'What was the major significance of the Dead Sea Scrolls?',
      options: [
        'They contained new books of the Bible',
        'They proved the Old Testament had been corrupted',
        'They pushed manuscript evidence back 1,000 years and confirmed textual accuracy',
        'They revealed Jesus was married'
      ],
      correctAnswer: 2,
      explanation: 'The Dead Sea Scrolls (200 BC - 100 AD) are about 1,000 years older than previously known Hebrew manuscripts. They match later texts almost perfectly, confirming careful textual preservation over centuries.'
    },

    // Card 4: Nag Hammadi Library
    {
      type: 'content',
      title: 'Nag Hammadi: Understanding Early Heresies',
      content: [
        'In **1945**, Egyptian farmers near Nag Hammadi found a jar containing **52 texts** (4th century copies of 2nd-3rd century originals).',
        'These included Gnostic gospels (Thomas, Philip, Mary, Truth).',
        '📰 Sensational media claimed these were "suppressed gospels."',
        '✅ **Reality**: These texts confirm what church fathers said about Gnostic beliefs:',
        '• Secret knowledge for salvation',
        '• Material world as evil',
        '• Denial of Jesus\'s physical resurrection',
        'They\'re valuable for understanding **why early Christians rejected Gnosticism**, but they don\'t challenge the New Testament canon.',
        'No serious scholar argues they\'re apostolic.',
        'They show Christianity wasn\'t monolithic—there were competing visions, and orthodox Christianity won not by suppression but by better reflecting apostolic teaching and Jesus\'s actual life and mission.'
      ]
    },

    // Card 5: Matching Game - Major Discoveries
    {
      type: 'matching',
      title: 'Match the Archaeological Discovery',
      pairs: [
        {
          term: 'Dead Sea Scrolls',
          definition: '1947 discovery, confirmed OT textual accuracy'
        },
        {
          term: 'Nag Hammadi',
          definition: '1945 discovery, Gnostic texts from 2nd-3rd centuries'
        },
        {
          term: 'Tel Dan Stele',
          definition: '1993 discovery, mentions "House of David"'
        },
        {
          term: 'Pool of Siloam',
          definition: '2004 discovery, where Jesus healed blind man'
        }
      ]
    },

    // Card 6: Archaeological Confirmations
    {
      type: 'content',
      title: 'Archaeological Confirmations: The Hits',
      content: [
        'Archaeology has confirmed numerous biblical details critics once doubted:',
        '🏛️ **Hittites**: Once thought legendary, now extensively documented',
        '💧 **Pool of Siloam**: Where Jesus healed the blind man (John 9)—discovered in 2004',
        '👨 **Pontius Pilate**: Inscription found in 1961 confirms his existence and title',
        '👑 **House of David**: Tel Dan Stele (1993) mentions "House of David," confirming David as historical figure',
        '🏰 **Assyrian and Babylonian kings**: Sennacherib, Nebuchadnezzar, etc.—all confirmed',
        '✝️ **Crucifixion evidence**: Heel bone with nail from 1st century proves crucifixion methods matching Gospel descriptions',
        '🏘️ **Capernaum**: Peter\'s house excavated, matches Gospel descriptions',
        'These don\'t "prove" theological claims, but they confirm the Bible\'s historical reliability in details skeptics once mocked.'
      ]
    },

    // Card 7: Fill in the Blank
    {
      type: 'fillblank',
      prompt: 'The Tel Dan Stele, discovered in 1993, mentions the "House of ________," confirming his historical existence.',
      correctAnswer: 'David',
      explanation: 'The Tel Dan Stele is a stone inscription that mentions the "House of David," providing archaeological evidence that King David was a real historical figure, not just a legend.'
    },

    // Card 8: Archaeological Challenges
    {
      type: 'content',
      title: 'Archaeological Challenges: The Complications',
      content: [
        'Archaeology also raises questions:',
        '🏜️ **The Exodus**: No direct evidence for 2+ million Israelites wandering 40 years in Sinai. Some scholars suggest smaller numbers; others see theological history rather than documentary history.',
        '🧱 **Jericho\'s walls**: Joshua\'s conquest (c. 1400 BC) doesn\'t match archaeological evidence for Jericho\'s destruction. Possible explanations: dating debates, theological narrative vs. strict history.',
        '🏘️ **Nazareth**: Limited 1st century evidence (though recent finds confirm small village).',
        '⚔️ **Conquest vs. settlement**: Archaeological evidence suggests gradual settlement rather than sudden military conquest.',
        'These don\'t "disprove" the Bible but challenge simplistic readings.',
        'They remind us: **The Bible is ancient literature with complex relationships to history, not a modern documentary.**'
      ],
      highlight: '💡 Archaeological questions don\'t destroy faith—they invite us to read the Bible more carefully and thoughtfully'
    },

    // Card 9: Quiz on Archaeology
    {
      type: 'quiz',
      question: 'What is the relationship between archaeology and biblical faith?',
      options: [
        'Archaeology proves every biblical claim',
        'Archaeology disproves the Bible',
        'Archaeology confirms historical contexts and details but doesn\'t prove theological claims',
        'Archaeology is irrelevant to faith'
      ],
      correctAnswer: 2,
      explanation: 'Archaeology confirms the Bible\'s historical grounding—real people, places, and events—but doesn\'t "prove" theological claims like resurrection or miracles. It shows the Bible emerged from real history, not mythology, which strengthens (but doesn\'t replace) faith.'
    },

    // Card 10: Recent Discoveries
    {
      type: 'content',
      title: 'Recent Discoveries and Ongoing Work',
      content: [
        'Biblical archaeology continues with exciting finds:',
        '📜 **P52 (John Rylands Papyrus)**: Earliest NT fragment (John 18, c. 125 AD)',
        '📖 **P46 (Chester Beatty Papyrus)**: Paul\'s letters, c. 200 AD',
        '📕 **Codex Sinaiticus** (1844): 4th century complete NT, discovered in monastery',
        '⚠️ **Museum of the Bible controversies**: Fake Dead Sea Scroll fragments exposed (2018)—reminder to verify provenance',
        '🏛️ **Tel Gezer inscription**: Confirms biblical place names',
        '🏰 **Khirbet Qeiyafa**: Possible site of biblical Shaaraim',
        '💻 **Digital technology**: Multispectral imaging reveals text on burnt scrolls',
        'Archaeology won\'t answer every question—much ancient evidence is lost to time.',
        'But it consistently shows **the Bible emerged from real historical contexts, featuring real people and places**.'
      ]
    },

    // Card 11: Matching Game - Evidence Types
    {
      type: 'matching',
      title: 'Match the Evidence Type',
      pairs: [
        {
          term: 'Confirmations',
          definition: 'Pool of Siloam, Pontius Pilate inscription'
        },
        {
          term: 'Challenges',
          definition: 'Exodus evidence, Jericho conquest timing'
        },
        {
          term: 'Manuscripts',
          definition: 'Dead Sea Scrolls, P52 papyrus'
        },
        {
          term: 'Gnostic Texts',
          definition: 'Nag Hammadi library (2nd-3rd century)'
        }
      ]
    },

    // Card 12: Final Quiz
    {
      type: 'quiz',
      question: 'Which biblical figure\'s existence was confirmed by the Tel Dan Stele?',
      options: [
        'Moses',
        'Abraham',
        'King David',
        'Jesus'
      ],
      correctAnswer: 2,
      explanation: 'The Tel Dan Stele (1993 discovery) mentions the "House of David," confirming David as a historical figure. This was significant because some scholars had questioned David\'s existence.'
    },

    // Card 13: Completion
    {
      type: 'completion',
      title: 'Archaeology Expert! 🎉',
      message: 'You\'ve completed "Archaeology & the Bible"! You now understand how archaeological discoveries confirm, challenge, and illuminate Scripture.',
      keyTakeaways: [
        'The Dead Sea Scrolls (1947) showed the Old Testament was transmitted with remarkable accuracy',
        'Archaeology has confirmed many biblical people and places (David, Pontius Pilate, Pool of Siloam)',
        'Some archaeological evidence challenges traditional timelines (Exodus, Jericho) requiring nuanced interpretation'
      ],
      badge: {
        icon: '🏺',
        name: 'Biblical Archaeologist',
        description: 'Completed Lesson 7: Archaeology & the Bible'
      }
    }
  ]
};

// Interactive Lesson 8: Your Bible's Backstory

export const lesson8Data = {
  id: 8,
  title: "Your Bible's Backstory",
  subtitle: "Practical skills for informed Bible reading",
  duration: "10 min",
  cards: [
    // Card 1: Introduction
    {
      type: 'content',
      title: 'Your Journey Complete!',
      subtitle: '⏱️ About 10 minutes',
      content: [
        '**Learning Objective:** By the end of this lesson, you will have practical skills for informed Bible reading, including choosing translations, understanding footnotes, and using study resources.',
        'You\'ve journeyed through **2,000+ years** of biblical history:',
        '✅ From oral tradition to manuscript copying',
        '✅ From Latin Vulgate to English translations',
        '✅ From disputed canons to archaeological discoveries',
        'Now it\'s time to bring it all together with **practical skills**.',
        'This final lesson equips you to read your Bible with informed confidence:',
        '• Understanding footnotes',
        '• Choosing translations wisely',
        '• Recognizing textual issues',
        '• Selecting study resources that fit your needs',
        '**You\'re about to become a much more informed Bible reader!**'
      ],
      highlight: '💭 Reflect: How has learning the Bible\'s backstory changed how you read Scripture?',
      requireAcknowledgment: true
    },

    // Card 2: Decoding Manuscript Footnotes
    {
      type: 'content',
      title: 'Decoding Manuscript Footnotes',
      content: [
        'Open your Bible to almost any page and you\'ll see small letters (a, b, c) with footnotes at the bottom.',
        'These aren\'t distractions—they\'re **windows into textual history**!',
        '📝 **Common footnote types**:',
        '📌 **"Some manuscripts read..."**: Indicates a variant reading in ancient manuscripts. Example: Romans 8:28 might note different word order. Usually minor.',
        '📌 **"The earliest manuscripts do not include..."**: Signals significant textual questions. Example: Mark 16:9-20.',
        '📌 **"Or..."**: Alternative translations of the same Greek/Hebrew word. Example: "justify" or "declare righteous."',
        '📌 **"Greek: ..."**: Shows the original language when English doesn\'t capture nuance.',
        'These footnotes don\'t mean your Bible is unreliable—they mean **translators are being honest** about uncertainty and giving you full information.',
        '💪 Embrace them! They show scholarly integrity.'
      ]
    },

    // Card 3: Quiz on Footnotes
    {
      type: 'quiz',
      question: 'What does a footnote saying "Some manuscripts read..." indicate?',
      options: [
        'The Bible is unreliable',
        'There is a minor variation between ancient manuscripts',
        'You should stop reading that version',
        'The translators made a mistake'
      ],
      correctAnswer: 1,
      explanation: 'This footnote indicates a minor variation between ancient manuscript families. It shows transparency and honesty—translators are giving you full information about textual evidence. Most variants are insignificant spelling or word order differences.'
    },

    // Card 4: Know Your Translation's Approach
    {
      type: 'content',
      title: 'Know Your Translation\'s Approach',
      content: [
        'Every Bible includes an introduction or preface explaining the translation philosophy. **Read it!**',
        '🔍 **Look for**:',
        '📚 **Source texts**: Nestle-Aland/UBS for NT? Biblia Hebraica for OT?',
        '⚖️ **Translation philosophy**: Formal (word-for-word) or dynamic (thought-for-thought)?',
        '👥 **Committee composition**: Denominational? Ecumenical? Conservative? Liberal?',
        '🎯 **Target audience**: Scholars? New believers? Children?',
        '✝️ **Example - ESV**: Uses NA28 Greek text, formal equivalence, evangelical committee, aims for word-for-word accuracy.',
        '📖 **Example - NIV**: Uses eclectic Greek text, dynamic equivalence, evangelical committee, prioritizes clarity and readability.',
        '🎓 **Example - NRSV**: Ecumenical committee, formal equivalence, gender-inclusive language, scholarly.',
        'Knowing your translation\'s approach helps you understand its strengths and limitations!'
      ]
    },

    // Card 5: Matching Game - Translation Features
    {
      type: 'matching',
      title: 'Match the Translation Feature',
      pairs: [
        {
          term: 'Source Texts',
          definition: 'The original language manuscripts used (NA28, etc.)'
        },
        {
          term: 'Translation Philosophy',
          definition: 'Formal equivalence vs. dynamic equivalence'
        },
        {
          term: 'Committee Composition',
          definition: 'Who translated it (denominational, ecumenical, etc.)'
        },
        {
          term: 'Target Audience',
          definition: 'Who it\'s designed for (scholars, new believers, etc.)'
        }
      ]
    },

    // Card 6: Brackets and Textual Markers
    {
      type: 'content',
      title: 'Brackets, Italics, and Textual Markers',
      content: [
        'Your Bible uses typography to signal textual issues:',
        '📌 **Brackets [text]**: Indicates significant textual uncertainty.',
        '• **John 7:53-8:11** (woman caught in adultery) is bracketed in most modern Bibles because it\'s absent from earliest manuscripts. The story is likely historical tradition but wasn\'t originally in John\'s Gospel.',
        '• **Mark 16:9-20** (longer ending with snake-handling) similarly bracketed.',
        '📌 **Double brackets [[text]]**: Even more uncertain.',
        '📌 **Italics** (in KJV): Added words for English readability not in the original.',
        '📌 **Paragraph headings**: Added by publishers, not in the original text. Don\'t treat them as Scripture.',
        '📌 **Red letters** (Jesus\'s words): Helpful but interpretive—sometimes debated what counts as Jesus\'s words.',
        'Understanding these markers helps you read critically and recognize where uncertainty exists.'
      ],
      highlight: '💡 These markers aren\'t hiding anything—they\'re showing you exactly where scholars have questions!'
    },

    // Card 7: Fill in the Blank
    {
      type: 'fillblank',
      prompt: 'In modern Bibles, text enclosed in ________ indicates significant textual uncertainty, like John 7:53-8:11.',
      correctAnswer: 'brackets',
      explanation: 'Brackets [ ] in modern Bibles indicate passages with significant textual uncertainty—they\'re not found in the earliest or best manuscripts but are included because they\'re part of church tradition and may be historically authentic.'
    },

    // Card 8: Choosing a Study Bible
    {
      type: 'content',
      title: 'Choosing a Study Bible',
      content: [
        'Study Bibles add notes, maps, articles, and cross-references. But not all study Bibles are alike!',
        '🔬 **For deep word study**: ESV Study Bible, NASB Study Bible—formal translations with detailed notes',
        '⚖️ **For balanced evangelical perspective**: NIV Study Bible, CSB Study Bible—readable with solid scholarship',
        '🎓 **For ecumenical/academic**: NRSV Oxford Annotated, HarperCollins Study Bible—multiple viewpoints, scholarly',
        '✝️ **For Catholic readers**: Catholic Study Bible, Ignatius Catholic Study Bible—includes Deuterocanonical books, Catholic tradition',
        '🙏 **For devotional use**: Life Application Study Bible, NLT Study Bible—practical application focus',
        '🏛️ **For historical/cultural context**: IVP Bible Background Commentary, Zondervan Illustrated Bible Backgrounds',
        '🚩 **Red flags**: Study Bibles pushing fringe interpretations, claiming exclusive correctness, or ignoring mainstream scholarship'
      ]
    },

    // Card 9: Quiz on Study Resources
    {
      type: 'quiz',
      question: 'For devotional reading and practical application, which type of study Bible is best?',
      options: [
        'NRSV Oxford Annotated (academic)',
        'ESV Study Bible (deep word study)',
        'Life Application Study Bible (practical application)',
        'Catholic Study Bible (Catholic tradition)'
      ],
      correctAnswer: 2,
      explanation: 'For devotional use and practical application, study Bibles like the Life Application Study Bible or NLT Study Bible are designed to help you apply Scripture to daily life, rather than focusing on technical scholarly details.'
    },

    // Card 10: Becoming a Confident Reader
    {
      type: 'content',
      title: 'Becoming a Confident Bible Reader',
      content: [
        'You now have the tools to read Scripture with informed confidence! 🎉',
        '📋 **Practical habits**:',
        '1️⃣ **Compare translations**: Check 2-3 translations for important passages. Differences often reveal interpretive choices.',
        '2️⃣ **Read footnotes**: Don\'t skip them! They provide crucial context.',
        '3️⃣ **Use study helps wisely**: Commentaries and study Bibles are helpful but not infallible.',
        '4️⃣ **Understand genre**: Read poetry as poetry, apocalyptic as apocalyptic, history as ancient history.',
        '5️⃣ **Learn some Greek/Hebrew**: Even basic knowledge helps (free resources: Mounce\'s Greek, Pratico\'s Hebrew).',
        '6️⃣ **Join a Bible study**: Community guards against individualistic misinterpretation.',
        '7️⃣ **Pray for illumination**: The Holy Spirit guides understanding (1 Cor 2:10-14).'
      ],
      highlight: '💪 You don\'t need to be a scholar to read the Bible faithfully—but a little knowledge goes a long way!'
    },

    // Card 11: Matching Game - Reading Strategies
    {
      type: 'matching',
      title: 'Match the Reading Strategy',
      pairs: [
        {
          term: 'Compare Translations',
          definition: 'Check 2-3 versions to see interpretive choices'
        },
        {
          term: 'Read Footnotes',
          definition: 'Don\'t skip them—they provide crucial context'
        },
        {
          term: 'Understand Genre',
          definition: 'Read poetry as poetry, history as history'
        },
        {
          term: 'Join a Bible Study',
          definition: 'Community guards against misinterpretation'
        }
      ]
    },

    // Card 12: Final Quiz
    {
      type: 'quiz',
      question: 'What is the best practice for becoming a confident Bible reader?',
      options: [
        'Only read one translation and never question it',
        'Ignore footnotes because they just confuse things',
        'Memorize Greek and Hebrew before reading',
        'Compare translations, read footnotes, understand genre, and use study helps wisely'
      ],
      correctAnswer: 3,
      explanation: 'Confident Bible reading involves comparing translations, reading footnotes, understanding literary genres, using study resources wisely, and combining scholarship with prayer. It doesn\'t require expertise, just curiosity and willingness to learn.'
    },

    // Card 13: Course Completion
    {
      type: 'completion',
      title: 'Congratulations! 🎉🎊',
      message: 'You\'ve completed ALL 8 lessons of the Bible History Study Guide! You\'re now an informed, confident Bible reader equipped to understand Scripture\'s rich backstory. Share what you\'ve learned with others!',
      keyTakeaways: [
        'Manuscript footnotes reveal textual variants—don\'t skip them!',
        'Different Bible translations serve different purposes (study vs. readability)',
        'Informed Bible reading combines good study tools, genre awareness, and prayerful dependence on the Spirit'
      ],
      badge: {
        icon: '🏆',
        name: 'Bible History Master',
        description: 'Completed ALL 8 Lessons: From Mouth to Manuscript to Modern Reader'
      }
    }
  ]
};

// ============================================
// PATH 4: BIBLICAL CANON (Lessons 9-16)
// ============================================

// Lesson 9: What is the Canon?

export const lesson9Data = {
  id: 9,
  title: "What is the Canon?",
  subtitle: "Understanding how the Bible's boundaries were established",
  duration: "6 min",
  cards: [
    {
      type: 'content',
      title: 'What is the Canon?',
      subtitle: '⏱️ About 6 minutes',
      content: [
        '**Learning Objective:** By the end of this lesson, you will understand what "canon" means and why it matters for reading the Bible today.',
        'When you pick up a Bible, have you ever wondered: *Who decided which books belong in here?*',
        'The word **"canon"** comes from a Greek word (*kanōn*) meaning "measuring stick" or "rule." In Christian usage, it refers to the official list of books recognized as Scripture.',
        'But the canon didn\'t arrive overnight—it was a process involving communities, councils, and careful discernment over centuries.'
      ],
      highlight: '💭 Quick reflection: Have you ever heard of books like 1 Enoch or the Gospel of Thomas? Why aren\'t they in your Bible?',
      requireAcknowledgment: true
    },

    {
      type: 'content',
      title: 'The Canon as a "Measuring Stick"',
      content: [
        'Think of the canon as a boundary line: it separates books considered **divinely inspired Scripture** from other valuable but non-canonical writings.',
        '📏 The canon answers three key questions:',
        '1. **What books are authoritative?** (Which texts carry divine authority for teaching and doctrine?)',
        '2. **What books are publicly read in worship?** (Which texts should be read aloud in church gatherings?)',
        '3. **What books shape orthodox belief?** (Which texts define what Christians believe?)',
        'Without a canon, every community could claim different books as Scripture, leading to confusion and conflicting doctrines.'
      ],
      highlight: '🔑 Key Point: The canon provides a shared foundation for Christian faith and practice across time and cultures.'
    },

    {
      type: 'quiz',
      question: 'What does the term "canon" originally mean?',
      options: [
        'A collection of sacred books',
        'A measuring stick or rule',
        'A church council decision',
        'An ancient library catalog'
      ],
      correctAnswer: 1,
      explanation: 'Canon comes from the Greek "kanōn," meaning "measuring stick" or "rule." It was used metaphorically to describe the standard list of books that measure or define true Scripture.'
    },

    {
      type: 'content',
      title: 'Two Canons: Old and New Testament',
      content: [
        'The Christian Bible has **two main sections**, each with its own canonical history:',
        '📖 **Old Testament (Hebrew Bible):** The Jewish Scriptures that Jesus and the apostles read. The Hebrew canon was largely settled by the 1st century AD.',
        '✝️ **New Testament:** The 27 books written by apostles and their associates (Gospels, Acts, Letters, Revelation). These were recognized as Scripture by the early church over the first few centuries.',
        'Christians inherited the Old Testament from Judaism but also recognized new writings about Jesus as equally inspired Scripture.',
        'This dual-canon structure reflects Christianity\'s roots in Jewish faith while affirming the new revelation in Jesus Christ.'
      ]
    },

    {
      type: 'matching',
      title: 'Match the Testament',
      pairs: [
        {
          term: 'Old Testament',
          definition: 'Jewish Scriptures inherited by Christians'
        },
        {
          term: 'New Testament',
          definition: '27 books about Jesus and the early church'
        },
        {
          term: 'Hebrew Bible',
          definition: 'Jewish term for their Scriptures (Tanakh)'
        },
        {
          term: 'Canon',
          definition: 'Official list of inspired books'
        }
      ]
    },

    {
      type: 'content',
      title: 'How Were Books Chosen?',
      content: [
        'The canonization process wasn\'t arbitrary—early Christians used specific **criteria** to evaluate books:',
        '✅ **Apostolic origin:** Was it written by an apostle or close associate of Jesus?',
        '✅ **Orthodox content:** Did it align with the "rule of faith" (core Christian beliefs)?',
        '✅ **Widespread use:** Was it accepted and read in churches across different regions?',
        '✅ **Divine inspiration:** Did it demonstrate spiritual power and authority?',
        'Books that failed these tests—like the *Gospel of Thomas* or *Shepherd of Hermas*—were valued but not included in the canon.',
        'This process was *organic*, not dictated by a single council or authority.'
      ],
      highlight: '💡 Fun Fact: Some books (like 2 Peter and Revelation) were debated for a while before being universally accepted.'
    },

    {
      type: 'quiz',
      question: 'Which criterion was MOST important for a book to be included in the canon?',
      options: [
        'It had to be written in Greek',
        'It had to be approved by the Pope',
        'It had apostolic origin and orthodox content',
        'It had to be older than 100 AD'
      ],
      correctAnswer: 2,
      explanation: 'Apostolic origin (written by or connected to apostles) and orthodox content (aligned with core Christian teaching) were the primary criteria. The canon formed organically through church consensus, not papal decree.'
    },

    {
      type: 'content',
      title: 'The Canon Today',
      content: [
        'By the late 4th century (councils of Hippo 393 AD and Carthage 397 AD), the 27-book New Testament canon was formally recognized.',
        'The Old Testament canon, however, has some variation:',
        '📚 **Protestant Bibles:** 39 OT books (following the Hebrew Bible)',
        '📚 **Catholic Bibles:** 46 OT books (including the Deuterocanonical books/Apocrypha)',
        '📚 **Orthodox Bibles:** Even more books in some traditions',
        'We\'ll explore *why* these differences exist in the next lesson, but for now, know that **all Christians agree on the 27-book New Testament**.',
        'The canon isn\'t just a historical artifact—it remains the foundation for Christian doctrine, worship, and life today.'
      ]
    },

    {
      type: 'reflection',
      question: 'Why do you think it matters that Christians have a defined canon? What would be different without one?',
      placeholder: 'Think about how the canon provides unity, authority, and clarity...'
    },

    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You\'ve completed "What is the Canon?" You now understand what the canon is, why it was formed, and the criteria used to recognize Scripture.',
      keyTakeaways: [
        'The "canon" is the official list of books recognized as inspired Scripture',
        'Books were chosen based on apostolic origin, orthodox content, widespread use, and divine inspiration',
        'All Christians agree on the 27-book New Testament, but Old Testament canons vary slightly between traditions'
      ],
      badge: {
        icon: '📏',
        name: 'Canon Scholar',
        description: 'Completed Lesson 9: What is the Canon?'
      }
    }
  ]
};

// Lesson 10: The Old Testament Canon

export const lesson10Data = {
  id: 10,
  title: "The Old Testament Canon",
  subtitle: "How the Hebrew Bible was formed",
  duration: "7 min",
  cards: [
    {
      type: 'content',
      title: 'The Old Testament Canon',
      subtitle: '⏱️ About 7 minutes',
      content: [
        '**Learning Objective:** By the end of this lesson, you will understand how the Old Testament canon developed in Jewish tradition.',
        'Before there was a "Bible," there was the **Hebrew Bible**—the sacred Scriptures of Judaism.',
        'Jesus read from these scrolls in the synagogue. Paul quoted them in his letters. Early Christians treasured them as "the Scriptures."',
        'But how did these particular books come to be recognized as holy writ?'
      ],
      highlight: '💭 Quick reflection: Jesus frequently quoted from "the Law and the Prophets." What books do you think He meant?',
      requireAcknowledgment: true
    },

    {
      type: 'content',
      title: 'The Three-Part Structure: TaNaKh',
      content: [
        'The Hebrew Bible is traditionally divided into **three sections**, collectively called the **TaNaKh** (an acronym):',
        '📜 **Torah (Law):** The five books of Moses (Genesis, Exodus, Leviticus, Numbers, Deuteronomy)—the most sacred texts in Judaism.',
        '📖 **Nevi\'im (Prophets):** Historical books (Joshua, Judges, Samuel, Kings) and prophetic books (Isaiah, Jeremiah, Ezekiel, the Twelve Minor Prophets).',
        '✍️ **Ketuvim (Writings):** Poetry, wisdom literature, and other books (Psalms, Proverbs, Job, Ruth, Esther, Daniel, Chronicles, etc.).',
        'This three-part structure was well-established by Jesus\' time—He even refers to "the Law, the Prophets, and the Psalms" (Luke 24:44).'
      ],
      highlight: '🔑 Key Point: The Torah (Law) was recognized as Scripture first, followed by the Prophets, and finally the Writings.'
    },

    {
      type: 'quiz',
      question: 'What does "TaNaKh" stand for?',
      options: [
        'Temple, Nazareth, Kingdom',
        'Torah, Nevi\'im, Ketuvim',
        'Ten, Abraham, King',
        'Truth, Narrative, Knowledge'
      ],
      correctAnswer: 1,
      explanation: 'TaNaKh is an acronym for the three sections of the Hebrew Bible: Torah (Law), Nevi\'im (Prophets), and Ketuvim (Writings).'
    },

    {
      type: 'content',
      title: 'When Was the Canon "Closed"?',
      content: [
        'There\'s a common misconception that the Jewish canon was officially "closed" at the **Council of Jamnia** (c. 90 AD). Modern scholars largely reject this view.',
        'Instead, the Hebrew canon developed **gradually**:',
        '📅 **Torah (5th century BC):** Recognized as Scripture after the Babylonian exile.',
        '📅 **Prophets (3rd-2nd century BC):** Recognized by the time of Sirach (c. 180 BC), which refers to "the Law and the Prophets."',
        '📅 **Writings (1st century AD):** The final section was more fluid, with some debates over books like Esther and Song of Solomon.',
        'By Jesus\' time, the Torah and Prophets were universally accepted. The Writings were largely settled, though minor debates continued.',
        'There was no single "council" that decided the canon—it was a gradual consensus among Jewish communities.'
      ]
    },

    {
      type: 'matching',
      title: 'Match the Section with Its Books',
      pairs: [
        {
          term: 'Torah',
          definition: 'Genesis, Exodus, Leviticus, Numbers, Deuteronomy'
        },
        {
          term: 'Nevi\'im',
          definition: 'Isaiah, Jeremiah, Ezekiel, Joshua, Judges'
        },
        {
          term: 'Ketuvim',
          definition: 'Psalms, Proverbs, Job, Esther, Daniel'
        },
        {
          term: 'TaNaKh',
          definition: 'The complete Hebrew Bible'
        }
      ]
    },

    {
      type: 'content',
      title: 'Jesus and the Old Testament',
      content: [
        'Jesus clearly affirmed the authority of the Hebrew Scriptures:',
        '🗣️ "Do not think that I have come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them" (Matthew 5:17).',
        '🗣️ "These are my words that I spoke to you while I was still with you, that everything written about me in the Law of Moses and the Prophets and the Psalms must be fulfilled" (Luke 24:44).',
        'Jesus\' three-part reference (Law, Prophets, Psalms/Writings) aligns with the TaNaKh structure.',
        'He quoted from the Torah, Prophets, and Writings—treating them all as divinely authoritative.',
        'The New Testament quotes or alludes to the Old Testament over 300 times, demonstrating early Christian reverence for these texts.'
      ],
      highlight: '💡 Fun Fact: Jesus never quoted from the Apocrypha (Deuterocanonical books), though He may have been familiar with them.'
    },

    {
      type: 'quiz',
      question: 'How did Jesus refer to the Hebrew Scriptures in Luke 24:44?',
      options: [
        'The Old Testament',
        'The Holy Scriptures',
        'The Law, the Prophets, and the Psalms',
        'The TaNaKh'
      ],
      correctAnswer: 2,
      explanation: 'Jesus referred to "the Law of Moses, the Prophets, and the Psalms"—corresponding to the three sections of the Hebrew Bible (TaNaKh).'
    },

    {
      type: 'content',
      title: 'The Septuagint: A Greek Complication',
      content: [
        'Here\'s where things get interesting: **Most early Christians didn\'t read Hebrew—they read Greek.**',
        'The **Septuagint (LXX)** was a Greek translation of the Hebrew Bible, made in Egypt around 250-150 BC for Greek-speaking Jews.',
        'The Septuagint included not only the Hebrew Bible but also **additional books** (what Catholics call "Deuterocanonical" and Protestants call "Apocrypha"):',
        '📚 Tobit, Judith, Wisdom of Solomon, Sirach (Ecclesiasticus), Baruch, 1-2 Maccabees, and additions to Esther and Daniel.',
        'These books were written in Greek or existed only in Greek translation, and they weren\'t part of the Hebrew canon.',
        'But many early Christians, reading the Septuagint, treated these books as Scripture—leading to later debates about the Old Testament canon.'
      ],
      highlight: '🔍 Critical Insight: The Septuagint shaped early Christian Old Testament use, which is why Catholic and Orthodox Bibles include more books than Protestant Bibles.'
    },

    {
      type: 'reflection',
      question: 'Why do you think it matters that Jesus affirmed the Hebrew Scriptures as authoritative? What does this tell us about the Old Testament\'s importance for Christians?',
      placeholder: 'Consider how Jesus\' use of Scripture shapes Christian understanding...'
    },

    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You\'ve completed "The Old Testament Canon"! You now understand the TaNaKh structure, how the Hebrew canon developed, and the role of the Septuagint.',
      keyTakeaways: [
        'The Hebrew Bible (TaNaKh) has three sections: Torah, Prophets, and Writings',
        'The canon developed gradually over centuries, not at a single council',
        'Jesus affirmed the Hebrew Scriptures, but early Christians often used the Greek Septuagint, which included additional books'
      ],
      badge: {
        icon: '📜',
        name: 'Hebrew Bible Expert',
        description: 'Completed Lesson 10: The Old Testament Canon'
      }
    }
  ]
};

// Lesson 11: Catholic vs Protestant Canons

export const lesson11Data = {
  id: 11,
  title: "Catholic vs Protestant Canons",
  subtitle: "Why different Bibles have different books",
  duration: "7 min",
  cards: [
    {
      type: 'content',
      title: 'Catholic vs Protestant Canons',
      subtitle: '⏱️ About 7 minutes',
      content: [
        '**Learning Objective:** By the end of this lesson, you will understand why Catholic and Protestant Bibles have different numbers of Old Testament books.',
        'If you\'ve ever compared a Catholic and Protestant Bible, you may have noticed something curious:',
        '📖 **Protestant Old Testament:** 39 books',
        '📖 **Catholic Old Testament:** 46 books (7 additional books plus additions to Esther and Daniel)',
        'Both traditions agree on the **27-book New Testament**, but the Old Testament canon differs. Why?'
      ],
      highlight: '💭 Quick reflection: Does having more or fewer books make one Bible "better" than another?',
      requireAcknowledgment: true
    },

    {
      type: 'content',
      title: 'The Deuterocanonical Books',
      content: [
        'The seven additional books in Catholic Bibles are called **Deuterocanonical** ("second canon") by Catholics and **Apocrypha** ("hidden" or "non-canonical") by Protestants:',
        '📚 Tobit, Judith, Wisdom of Solomon, Sirach (Ecclesiasticus), Baruch, 1 Maccabees, 2 Maccabees',
        '📜 Plus additions to Esther and Daniel (Prayer of Azariah, Susanna, Bel and the Dragon)',
        'These books were written during the **intertestamental period** (between 400 BC and the time of Jesus).',
        'They were included in the **Septuagint** (Greek translation of the Hebrew Bible), which many early Christians used.',
        '**Key distinction:** These books were NOT part of the Hebrew Bible that Jesus and the apostles used.'
      ],
      highlight: '🔑 Key Point: The debate isn\'t about whether these books are valuable—it\'s about whether they\'re divinely inspired Scripture.'
    },

    {
      type: 'quiz',
      question: 'What does "Deuterocanonical" mean?',
      options: [
        'False books',
        'Second canon',
        'Hidden writings',
        'Greek translations'
      ],
      correctAnswer: 1,
      explanation: 'Deuterocanonical means "second canon," referring to books accepted by Catholics as Scripture but debated or rejected by Protestants and Jews.'
    },

    {
      type: 'content',
      title: 'The Early Church and the Apocrypha',
      content: [
        'Early Christians had **mixed views** on the Deuterocanonical books:',
        '✅ **Supporters:** Church fathers like Augustine argued these books were Scripture because they were in the Septuagint and used by the church.',
        '❌ **Skeptics:** Jerome (translator of the Latin Vulgate) distinguished between "canonical" books (the Hebrew Bible) and "ecclesiastical" books (useful but not Scripture).',
        'Many early Christians **quoted** these books and found them edifying, but debates existed about their **canonical status**.',
        'By the time of the Reformation, Western Christianity generally accepted the expanded canon, though Eastern Orthodox traditions included even more books.'
      ]
    },

    {
      type: 'content',
      title: 'The Reformation: A Canonical Split',
      content: [
        'The Protestant Reformation (16th century) brought this debate to the forefront:',
        '⚔️ **Martin Luther** translated the Bible into German (1534) and placed the Apocrypha in a separate section "between the Testaments," saying they were "useful and good to read" but not equal to Scripture.',
        '📜 Luther followed Jerome\'s distinction: only books in the **Hebrew Bible** should be considered canonical.',
        '⛪ **The Council of Trent (1546):** In response to the Reformation, the Catholic Church officially declared the Deuterocanonical books to be inspired Scripture.',
        'This solidified the divide: Protestants follow the Hebrew canon (39 books), Catholics include the Deuterocanonical books (46 books).',
        '🕊️ **Orthodox Christians** include even more books (like 1 Esdras, 3 Maccabees, Prayer of Manasseh) in their canon.'
      ],
      highlight: '💡 Historical Note: Many early Protestant Bibles (including the 1611 King James Version) included the Apocrypha, though not as Scripture.'
    },

    {
      type: 'matching',
      title: 'Match the Tradition with Its Canon',
      pairs: [
        {
          term: 'Protestant',
          definition: '39 Old Testament books (Hebrew Bible)'
        },
        {
          term: 'Catholic',
          definition: '46 Old Testament books (includes Deuterocanon)'
        },
        {
          term: 'Orthodox',
          definition: 'Even more OT books (varies by tradition)'
        },
        {
          term: 'All Christians',
          definition: 'Agree on 27 New Testament books'
        }
      ]
    },

    {
      type: 'quiz',
      question: 'What was Martin Luther\'s view on the Apocrypha?',
      options: [
        'They are inspired Scripture equal to the Bible',
        'They should be completely rejected and burned',
        'They are useful and good to read but not Scripture',
        'They were written by Moses'
      ],
      correctAnswer: 2,
      explanation: 'Luther said the Apocrypha were "useful and good to read" but not equal to Scripture. He placed them in a separate section in his German Bible.'
    },

    {
      type: 'content',
      title: 'Why the Difference Matters (and Doesn\'t)',
      content: [
        'Does this canonical difference affect core Christian doctrine? **No.**',
        '✅ **All major Christian doctrines** (Trinity, deity of Christ, salvation by grace, resurrection, etc.) are found in the 66 books that all Christians share.',
        '⚠️ **Minor differences:** Some Catholic doctrines (like prayers for the dead) find support in the Deuterocanonical books (e.g., 2 Maccabees 12:45-46).',
        'The Deuterocanonical books contain **valuable history** (especially 1-2 Maccabees) and **wisdom literature** (Wisdom of Solomon, Sirach).',
        'Even if you\'re Protestant, reading these books can enrich your understanding of the intertestamental period and Jewish thought in Jesus\' time.',
        '🤝 **Bottom line:** Christians can disagree on the canon\'s boundaries while affirming the same core faith.'
      ],
      highlight: '🔍 Critical Insight: The canonical debate is about boundaries, not about the essentials of Christian faith.'
    },

    {
      type: 'reflection',
      question: 'How does understanding this canonical difference help you engage respectfully with Christians from different traditions?',
      placeholder: 'Think about how this knowledge fosters unity despite differences...'
    },

    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You\'ve completed "Catholic vs Protestant Canons"! You now understand why different Christian traditions have different Old Testament canons.',
      keyTakeaways: [
        'Catholic Bibles include 7 additional OT books (Deuterocanon); Protestant Bibles follow the Hebrew canon',
        'The difference stems from debates about the Septuagint vs. Hebrew Bible in the early church',
        'All Christians agree on the 27-book New Testament and core Christian doctrines'
      ],
      badge: {
        icon: '⚖️',
        name: 'Canon Comparator',
        description: 'Completed Lesson 11: Catholic vs Protestant Canons'
      }
    }
  ]
};

// Lesson 12: The New Testament Canon Formation

export const lesson12Data = {
  id: 12,
  title: "The New Testament Canon Formation",
  subtitle: "How 27 books became Scripture",
  duration: "8 min",
  cards: [
    {
      type: 'content',
      title: 'The New Testament Canon Formation',
      subtitle: '⏱️ About 8 minutes',
      content: [
        '**Learning Objective:** By the end of this lesson, you will understand how the 27-book New Testament canon was formed.',
        'Unlike the Old Testament (which Christians inherited from Judaism), the **New Testament** was a uniquely Christian creation.',
        'In the decades after Jesus\' resurrection, apostles wrote letters, Gospels were composed, and the book of Revelation was penned.',
        'But how did these 27 books—and not others—become recognized as Scripture?'
      ],
      highlight: '💭 Quick reflection: The earliest Christians didn\'t have a "New Testament." What did they consider Scripture?',
      requireAcknowledgment: true
    },

    {
      type: 'content',
      title: 'The Earliest Christian Writings',
      content: [
        'The New Testament books were written over about **50 years** (c. AD 50-100):',
        '✉️ **Paul\'s letters** (c. AD 50-67): The earliest NT writings (1 Thessalonians is likely the first).',
        '📖 **The Gospels** (c. AD 65-100): Mark (earliest), Matthew and Luke (drawing on Mark and other sources), John (latest).',
        '📜 **Other letters** (c. AD 60-100): Hebrews, James, Peter, Jude.',
        '🔮 **Revelation** (c. AD 90-96): Written during persecution under Emperor Domitian.',
        'Early Christians didn\'t immediately recognize these as "Scripture"—that took time and discernment.'
      ],
      highlight: '💡 Fun Fact: Paul\'s letters were circulating and being read in churches before any Gospel was written down!'
    },

    {
      type: 'quiz',
      question: 'What were the earliest New Testament writings?',
      options: [
        'The four Gospels',
        'Paul\'s letters',
        'The book of Revelation',
        'The book of Acts'
      ],
      correctAnswer: 1,
      explanation: 'Paul\'s letters (like 1 Thessalonians, c. AD 50) were written before the Gospels. The earliest Gospel (Mark) was likely written around AD 65-70.'
    },

    {
      type: 'content',
      title: 'Why Not All Early Christian Writings Made It',
      content: [
        'Many other Christian writings circulated in the early centuries:',
        '📖 **The Didache** ("Teaching of the Twelve Apostles"): An early church manual (c. AD 100).',
        '✉️ **1 Clement** (c. AD 96): A letter from Rome to Corinth.',
        '📜 **The Shepherd of Hermas** (c. AD 140): A popular allegorical vision.',
        '📚 **Gnostic Gospels** (2nd-3rd century): Gospels of Thomas, Judas, Mary—reflecting Gnostic theology.',
        'These were valued by some Christians but **failed the canonical tests**:',
        '❌ **Not apostolic:** Written too late or by unknown authors.',
        '❌ **Not orthodox:** Contained teachings that contradicted the apostolic "rule of faith."',
        '❌ **Not widely used:** Accepted in some regions but not universally.'
      ]
    },

    {
      type: 'content',
      title: 'The Four Criteria for Canonicity',
      content: [
        'Early Christians used four main criteria to evaluate which books belonged in the canon:',
        '1️⃣ **Apostolic Origin:** Was it written by an apostle (like Paul or Peter) or a close associate (like Mark or Luke)?',
        '2️⃣ **Orthodox Content:** Did it align with the "rule of faith"—the core beliefs passed down from the apostles?',
        '3️⃣ **Widespread Use:** Was it read and accepted in churches across different regions (not just one local community)?',
        '4️⃣ **Spiritual Power:** Did it demonstrate divine inspiration and authority in transforming lives?',
        'Books that passed all four tests were recognized as Scripture. Books that failed were set aside.'
      ],
      highlight: '🔑 Key Point: The canon wasn\'t imposed by a single authority—it emerged through widespread church consensus.'
    },

    {
      type: 'matching',
      title: 'Match the Criterion',
      pairs: [
        {
          term: 'Apostolic Origin',
          definition: 'Written by or connected to an apostle'
        },
        {
          term: 'Orthodox Content',
          definition: 'Aligned with apostolic teaching'
        },
        {
          term: 'Widespread Use',
          definition: 'Accepted in churches across regions'
        },
        {
          term: 'Spiritual Power',
          definition: 'Demonstrated divine inspiration'
        }
      ]
    },

    {
      type: 'content',
      title: 'The Muratorian Fragment: An Early Canon List',
      content: [
        'The **Muratorian Fragment** (c. AD 170) is the earliest known list of New Testament books.',
        'It includes:',
        '✅ Four Gospels (Matthew, Mark, Luke, John)',
        '✅ Acts',
        '✅ 13 letters of Paul',
        '✅ Jude, 1-2 John, Revelation',
        '❌ But it **omits** Hebrews, James, 1-2 Peter',
        'This shows that by the late 2nd century, most of the NT canon was recognized, but debates continued about a few books.',
        'The Muratorian Fragment also **rejects** books like the Shepherd of Hermas and the Wisdom of Solomon, showing discernment.'
      ],
      highlight: '📜 Historical Note: The Muratorian Fragment is fragmentary and damaged, so we don\'t have the complete list.'
    },

    {
      type: 'quiz',
      question: 'What is the Muratorian Fragment?',
      options: [
        'A piece of the original Gospel of Mark',
        'The earliest known list of NT books (c. AD 170)',
        'A Roman decree about the Bible',
        'A fragment of the Dead Sea Scrolls'
      ],
      correctAnswer: 1,
      explanation: 'The Muratorian Fragment (c. AD 170) is the earliest known list of New Testament books, showing that much of the canon was recognized by the late 2nd century.'
    },

    {
      type: 'content',
      title: 'From Consensus to Council',
      content: [
        'By the late 4th century, the 27-book NT canon had achieved **broad consensus**:',
        '📜 **Council of Hippo (AD 393)** and **Council of Carthage (AD 397):** Formally affirmed the 27-book canon.',
        '📖 **Athanasius\' 39th Festal Letter (AD 367):** Listed the exact 27 books we have today as the only canonical NT books.',
        'These councils didn\'t *create* the canon—they **recognized** what the church had already been using for centuries.',
        'A few books were debated until the end (Hebrews, James, 2 Peter, 2-3 John, Jude, Revelation), but eventually achieved universal acceptance.',
        '🕊️ The canon reflects the Holy Spirit\'s guidance of the church over time, not arbitrary human decisions.'
      ]
    },

    {
      type: 'reflection',
      question: 'Why do you think it took centuries for the NT canon to be fully settled? What does this teach us about discernment and patience?',
      placeholder: 'Consider how the church carefully discerned Scripture over time...'
    },

    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You\'ve completed "The New Testament Canon Formation"! You now understand how the 27-book NT canon was recognized by the early church.',
      keyTakeaways: [
        'The NT canon formed gradually over 3-4 centuries through church consensus',
        'Four criteria guided canonicity: apostolic origin, orthodox content, widespread use, and spiritual power',
        'Councils like Carthage (397) recognized the canon—they didn\'t create it'
      ],
      badge: {
        icon: '✝️',
        name: 'NT Canon Expert',
        description: 'Completed Lesson 12: The New Testament Canon Formation'
      }
    }
  ]
};

// Continue with lessons 13-16...
// Due to length constraints, I'll create a condensed version of the remaining lessons

// Lesson 13: Apocryphal Gospels and Forgeries

export const lesson13Data = {
  id: 13,
  title: "Apocryphal Gospels and Forgeries",
  subtitle: "Why books like the Gospel of Thomas were rejected",
  duration: "7 min",
  cards: [
    {
      type: 'content',
      title: 'Apocryphal Gospels and Forgeries',
      subtitle: '⏱️ About 7 minutes',
      content: [
        '**Learning Objective:** Understand why certain "gospels" and writings were excluded from the New Testament canon.',
        'You may have heard of the **Gospel of Thomas**, **Gospel of Judas**, or **Gospel of Mary**. Headlines often claim these are "lost gospels" that challenge traditional Christianity.',
        'But early Christians rejected these writings. Why?',
        'Understanding the reasons helps us appreciate the wisdom and discernment of the early church.'
      ],
      highlight: '💭 Quick reflection: If you discovered a "lost gospel," how would you evaluate whether it\'s authentic?',
      requireAcknowledgment: true
    },

    {
      type: 'content',
      title: 'The Gnostic Gospels',
      content: [
        'Most "apocryphal gospels" reflect **Gnostic** theology—a 2nd-century movement that taught:',
        '🌌 **Secret knowledge (gnosis)** brings salvation, not faith in Christ',
        '🚫 **The material world is evil**, created by a lesser god',
        '👻 **Jesus was spirit, not truly human** (Docetism)',
        '📚 Key Gnostic texts: Gospel of Thomas, Gospel of Philip, Gospel of Judas, Gospel of Mary',
        'These texts were written **100-200+ years after Jesus**, often pseudonymously (falsely attributed to apostles).',
        'They contradict core apostolic teaching about Jesus\' incarnation, bodily resurrection, and salvation by grace.'
      ],
      highlight: '🔑 Key Point: Gnostic "gospels" teach a different Jesus and a different gospel than the apostles proclaimed.'
    },

    {
      type: 'quiz',
      question: 'What is the central problem with Gnostic gospels?',
      options: [
        'They were written in Greek',
        'They were too long',
        'They taught salvation through secret knowledge, not faith',
        'They were discovered too recently'
      ],
      correctAnswer: 2,
      explanation: 'Gnostic gospels teach salvation through secret knowledge (gnosis) rather than faith in Christ, contradicting apostolic teaching.'
    },

    {
      type: 'content',
      title: 'Why the Gospel of Thomas Was Rejected',
      content: [
        'The **Gospel of Thomas** (c. AD 140-180) is a collection of 114 "sayings of Jesus."',
        'Some sayings parallel canonical Gospels, but many are bizarre:',
        '🗣️ "If you bring forth what is within you, what you have will save you" (saying 70)—salvation by self-discovery, not Christ.',
        '🗣️ "Every woman who makes herself male will enter the kingdom" (saying 114)—reflects Gnostic denigration of the material/feminine.',
        '❌ **Failed apostolic origin:** Written generations after Thomas died.',
        '❌ **Failed orthodoxy:** Teaches Gnostic salvation, not the gospel.',
        '❌ **Failed widespread use:** Rejected by mainstream Christianity.',
        'Early church fathers like Irenaeus and Hippolytus explicitly warned against Gnostic texts like Thomas.'
      ]
    },

    {
      type: 'content',
      title: 'Other Rejected Writings',
      content: [
        'Beyond Gnostic gospels, other writings were rejected for different reasons:',
        '📖 **Infancy Gospels** (e.g., Infancy Gospel of Thomas): Contain fanciful childhood stories of Jesus (boy Jesus making clay birds come to life). Legendary, not historical.',
        '✉️ **Acts of Paul and Thecla** (c. AD 160): Promotes extreme asceticism and features a female apostle. Rejected for being pseudonymous and unorthodox.',
        '📜 **Epistle of Barnabas** (c. AD 130): Valued by some but not considered apostolic or universally accepted.',
        'These works might contain **some** historical kernels but were deemed unreliable or theologically problematic.'
      ],
      highlight: '💡 Historical Note: The early church distinguished between edifying writings and divinely inspired Scripture.'
    },

    {
      type: 'matching',
      title: 'Match the Apocryphal Text',
      pairs: [
        {
          term: 'Gospel of Thomas',
          definition: 'Gnostic saying collection, rejected for heresy'
        },
        {
          term: 'Gospel of Judas',
          definition: 'Portrays Judas as hero, Gnostic theology'
        },
        {
          term: 'Infancy Gospel',
          definition: 'Legendary childhood stories of Jesus'
        },
        {
          term: 'Epistle of Barnabas',
          definition: 'Valued but not apostolic or canonical'
        }
      ]
    },

    {
      type: 'quiz',
      question: 'What is "pseudepigraphy"?',
      options: [
        'Ancient handwriting style',
        'Falsely attributing authorship to gain credibility',
        'A type of papyrus manuscript',
        'Greek translation technique'
      ],
      correctAnswer: 1,
      explanation: 'Pseudepigraphy means falsely attributing a writing to a famous person (like an apostle) to gain credibility. Many apocryphal texts are pseudepigraphal.'
    },

    {
      type: 'content',
      title: 'The Da Vinci Code and Modern Myths',
      content: [
        'Modern media (like *The Da Vinci Code*) often promote myths about "suppressed gospels":',
        '❌ **Myth:** The canon was decided by Emperor Constantine at Nicaea (AD 325) to consolidate power.',
        '✅ **Reality:** The canon was recognized through church consensus over centuries. Nicaea dealt with the Trinity, not the canon.',
        '❌ **Myth:** Gnostic gospels present the "true" Jesus, suppressed by the church.',
        '✅ **Reality:** Gnostic texts were written generations later and reflect 2nd-century philosophy, not 1st-century apostolic witness.',
        'The canonical Gospels are far closer to the events they describe and pass rigorous historical tests.',
        'Apocryphal texts are valuable for understanding early Christian diversity but are not reliable sources for Jesus\' life and teaching.'
      ],
      highlight: '🔍 Critical Thinking: Always ask: When was this written? By whom? Does it align with apostolic teaching?'
    },

    {
      type: 'reflection',
      question: 'How does understanding the reasons for rejecting apocryphal texts strengthen your confidence in the New Testament canon?',
      placeholder: 'Think about the early church\'s careful discernment...'
    },

    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You\'ve completed "Apocryphal Gospels and Forgeries"! You can now evaluate claims about "lost gospels" with historical discernment.',
      keyTakeaways: [
        'Gnostic gospels reflect 2nd-century philosophy, not 1st-century apostolic witness',
        'Apocryphal texts were rejected for lacking apostolic origin, orthodox content, or widespread acceptance',
        'Modern myths about "suppressed gospels" don\'t hold up to historical scrutiny'
      ],
      badge: {
        icon: '🔍',
        name: 'Apocrypha Analyst',
        description: 'Completed Lesson 13: Apocryphal Gospels and Forgeries'
      }
    }
  ]
};

// Lessons 14-16 would continue here with topics like:
// - Lesson 14: The Canon and Church Authority
// - Lesson 15: Living with Canonical Boundaries
// - Lesson 16: Applying Canon Knowledge Today

// For now, I'll create abbreviated versions to complete the path

export const lesson14Data = {
  id: 14,
  title: "The Canon and Church Authority",
  subtitle: "Did the church create the canon or recognize it?",
  duration: "6 min",
  cards: [
    {
      type: 'content',
      title: 'The Canon and Church Authority',
      subtitle: '⏱️ About 6 minutes',
      content: [
        '**Learning Objective:** Understand the relationship between church authority and the biblical canon.',
        'A common question: **Did the church create the canon, or did the church recognize the canon?**',
        'This question has huge implications for how we view Scripture\'s authority.',
        'The answer shapes how Catholics, Orthodox, and Protestants think about church and Bible.'
      ],
      highlight: '💭 Quick reflection: What comes first—the church or the Bible? Can one exist without the other?',
      requireAcknowledgment: true
    },

    {
      type: 'content',
      title: 'The Catholic View: Church Authority',
      content: [
        '**Catholic teaching:** The church, guided by the Holy Spirit, **determined** which books are Scripture.',
        '🏛️ Since the church came before the complete NT, the church has authority to define the canon.',
        '📜 The Magisterium (teaching authority) and Tradition work alongside Scripture.',
        '✅ **Implication:** The church\'s authority validates Scripture, so church tradition carries authoritative weight.',
        'This is why the Council of Trent (1546) could officially declare the Deuterocanon as Scripture.',
        'For Catholics, you can\'t separate the Bible from the church that recognized it.'
      ],
      highlight: '🔑 Catholic perspective: "The church gave you the Bible, so trust the church."'
    },

    {
      type: 'content',
      title: 'The Protestant View: Self-Authenticating Scripture',
      content: [
        '**Protestant teaching:** The church **recognized** (not created) the canon because Scripture is self-authenticating.',
        '📖 The Holy Spirit bears witness to Scripture\'s divine origin—the church simply acknowledged what God had already inspired.',
        '🕊️ "My sheep hear my voice" (John 10:27)—believers recognize God\'s Word.',
        '✅ **Implication:** Scripture has authority *over* the church, not derived *from* the church.',
        'This is why Protestants could reject certain books (Deuterocanon) based on their assessment of divine inspiration.',
        'The church is the "pillar and ground of truth" (1 Tim 3:15) but remains under Scripture\'s authority.'
      ],
      highlight: '🔑 Protestant perspective: "The church recognized the Bible because it\'s God\'s Word."'
    },

    {
      type: 'quiz',
      question: 'What is the main difference between Catholic and Protestant views on the canon?',
      options: [
        'Catholics read Greek, Protestants read Hebrew',
        'Catholics say the church determined the canon; Protestants say the church recognized it',
        'Catholics reject the Old Testament',
        'Protestants don\'t believe in church authority'
      ],
      correctAnswer: 1,
      explanation: 'Catholics teach the church determined the canon through its authority; Protestants teach the church recognized the already-inspired canon.'
    },

    {
      type: 'content',
      title: 'Finding Common Ground',
      content: [
        'Despite differences, Catholics and Protestants agree on key points:',
        '🤝 **The Holy Spirit guided the process:** Both affirm divine guidance in canon formation.',
        '🤝 **The early church was involved:** Both recognize the church\'s role in discerning Scripture.',
        '🤝 **The 27-book NT:** Both fully agree on the New Testament canon.',
        '🤝 **Scripture is authoritative:** Both place the Bible at the center of Christian faith.',
        'The disagreement is about the **nature** of the church\'s role, not whether the church had a role.',
        'Understanding this helps Christians from different traditions dialogue respectfully.'
      ]
    },

    {
      type: 'reflection',
      question: 'How does this debate about church authority and canon shape how you read and apply Scripture today?',
      placeholder: 'Consider how your view affects your approach to the Bible...'
    },

    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You\'ve completed "The Canon and Church Authority"! You now understand the Catholic and Protestant perspectives on canon formation.',
      keyTakeaways: [
        'Catholics: church determined the canon through Spirit-guided authority',
        'Protestants: church recognized the self-authenticating canon',
        'Both agree the Holy Spirit guided the process and Scripture is authoritative'
      ],
      badge: {
        icon: '⛪',
        name: 'Church & Canon Scholar',
        description: 'Completed Lesson 14: The Canon and Church Authority'
      }
    }
  ]
};

export const lesson15Data = {
  id: 15,
  title: "Why the Canon Is Closed",
  subtitle: "Can new books be added to the Bible?",
  duration: "6 min",
  cards: [
    {
      type: 'content',
      title: 'Why the Canon Is Closed',
      subtitle: '⏱️ About 6 minutes',
      content: [
        '**Learning Objective:** Understand why Christians consider the biblical canon "closed" and complete.',
        'Every few years, someone claims to discover a "new gospel" or a modern prophet claims new revelation equal to Scripture.',
        '**Why don\'t Christians add these to the Bible?**',
        'The answer lies in understanding what makes Scripture unique and why the canon is considered closed.'
      ],
      highlight: '💭 Quick reflection: If someone wrote a "28th book of the New Testament" today, would you add it to your Bible? Why or why not?',
      requireAcknowledgment: true
    },

    {
      type: 'content',
      title: 'The Apostolic Foundation',
      content: [
        'The New Testament canon is tied to the **apostolic era**—the time when Jesus\' apostles and their immediate associates were alive.',
        '🏛️ Ephesians 2:20: The church is "built on the foundation of the apostles and prophets, Christ Jesus himself being the cornerstone."',
        '📜 The apostles were **eyewitnesses** (or recorded eyewitness testimony) of Jesus\' life, death, and resurrection.',
        '⏳ Once the apostolic generation passed (late 1st century), the foundational era ended.',
        'No one today can be an apostle in the same sense—an eyewitness commissioned directly by the risen Jesus.',
        'Therefore, no new writings can have the same apostolic authority as the NT books.'
      ],
      highlight: '🔑 Key Point: The canon is closed because the apostolic era is closed.'
    },

    {
      type: 'quiz',
      question: 'Why can\'t new books be added to the New Testament canon today?',
      options: [
        'The church forbids it',
        'No one writes as well as the apostles',
        'The apostolic era (eyewitness testimony) has ended',
        'We already have enough books'
      ],
      correctAnswer: 2,
      explanation: 'The canon is tied to the apostolic era. Since no one today can be an eyewitness of Jesus or directly commissioned by Him, no new books can have apostolic authority.'
    },

    {
      type: 'content',
      title: 'But God Still Speaks!',
      content: [
        'Saying the canon is closed does **not** mean God stopped speaking:',
        '🕊️ **The Holy Spirit still guides believers** (John 16:13) through prayer, preaching, and applying Scripture.',
        '🗣️ **Prophecy and spiritual gifts continue** in many Christian traditions (1 Cor 14:1).',
        '📖 **New insights and applications arise** as we read Scripture in new contexts.',
        '**However:**',
        '❌ No modern prophecy, vision, or teaching has the **same authority** as Scripture.',
        '❌ All prophecy and teaching must be **tested against Scripture** (1 John 4:1; Acts 17:11).',
        'Scripture remains the **norming norm**—the standard by which all other claims are evaluated.'
      ],
      highlight: '💡 Important: Closing the canon preserves Scripture\'s unique authority without limiting God\'s ongoing work.'
    },

    {
      type: 'content',
      title: 'Why a Closed Canon Matters',
      content: [
        'A closed canon provides:',
        '1️⃣ **Stability:** Christians worldwide share the same authoritative texts.',
        '2️⃣ **Protection:** Prevents false teachers from adding their own writings as "Scripture."',
        '3️⃣ **Clarity:** We know what God has revealed definitively about salvation and Christian life.',
        '4️⃣ **Unity:** All Christians can appeal to the same foundation.',
        '⚠️ **Without a closed canon:**',
        '• Anyone could claim their writings are "inspired" and equal to the Bible',
        '• Core doctrines would constantly be in flux',
        '• Christian unity would be impossible',
        'The closed canon is a gift that protects the church.'
      ]
    },

    {
      type: 'quiz',
      question: 'What is the "norming norm"?',
      options: [
        'A church law about behavior',
        'Scripture as the standard for evaluating all teachings',
        'A translation principle',
        'The Pope\'s teaching authority'
      ],
      correctAnswer: 1,
      explanation: 'Scripture is the "norming norm"—the standard that judges all other claims to authority. All teachings must align with Scripture.'
    },

    {
      type: 'content',
      title: 'Responding to New "Scriptures"',
      content: [
        'Various groups claim to have new "scriptures":',
        '📖 **Mormonism:** The Book of Mormon, Doctrine and Covenants (claims to be additional revelation)',
        '📖 **Islam:** The Quran (claims to supersede the Bible)',
        '📖 **Christian Science:** Science and Health with Key to the Scriptures',
        '**How to respond:**',
        '1️⃣ Affirm that God spoke definitively through the apostles',
        '2️⃣ Test new claims against apostolic teaching (Gal 1:8-9)',
        '3️⃣ Recognize the canon\'s unique historical and theological foundation',
        'These texts may have religious significance for their adherents but don\'t meet the criteria for biblical canonicity.'
      ],
      highlight: '⚠️ Warning: "If anyone is preaching to you a gospel contrary to the one you received, let him be accursed" (Galatians 1:9).'
    },

    {
      type: 'reflection',
      question: 'How does knowing the canon is closed help you evaluate modern religious movements or teachings?',
      placeholder: 'Think about how this knowledge protects you from false teaching...'
    },

    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You\'ve completed "Why the Canon Is Closed"! You can now explain why no new books can be added to the Bible.',
      keyTakeaways: [
        'The canon is closed because the apostolic era (eyewitness testimony) has ended',
        'A closed canon provides stability, protection, clarity, and unity',
        'God still speaks today, but Scripture remains the norming norm for all teaching'
      ],
      badge: {
        icon: '🔒',
        name: 'Canon Defender',
        description: 'Completed Lesson 15: Why the Canon Is Closed'
      }
    }
  ]
};

export const lesson16Data = {
  id: 16,
  title: "Applying Canon Knowledge Today",
  subtitle: "Putting your learning into practice",
  duration: "6 min",
  cards: [
    {
      type: 'content',
      title: 'Applying Canon Knowledge Today',
      subtitle: '⏱️ About 6 minutes',
      content: [
        '**Learning Objective:** Learn how to apply your understanding of the biblical canon in everyday Christian life.',
        'Congratulations! You\'ve journeyed through the history of the biblical canon—from the Hebrew Bible to the New Testament to denominational differences.',
        'But knowledge isn\'t just for trivia—it\'s for life.',
        'Let\'s explore how to apply what you\'ve learned.'
      ],
      highlight: '💭 Final reflection: How has learning about the canon changed how you read and trust the Bible?',
      requireAcknowledgment: true
    },

    {
      type: 'content',
      title: '1. Reading with Confidence',
      content: [
        'Understanding the canon helps you read the Bible with confidence:',
        '✅ You know **why** these 66 (or 73) books are in your Bible',
        '✅ You understand the **careful process** behind canon formation',
        '✅ You can **trust** that these books reflect apostolic teaching',
        'You don\'t have to wonder, "Did I get the right books?" The church, guided by the Spirit over centuries, has answered that question.',
        'This confidence doesn\'t eliminate questions, but it provides a foundation for study and faith.'
      ],
      highlight: '💡 Practical Tip: When reading Scripture, remember: "This book passed rigorous tests of apostolicity, orthodoxy, and acceptance."'
    },

    {
      type: 'content',
      title: '2. Engaging Different Traditions Respectfully',
      content: [
        'Your canon knowledge helps you dialogue with Christians from other traditions:',
        '🤝 **With Catholics:** Understand why they include the Deuterocanon; focus on shared beliefs in the 27-book NT.',
        '🤝 **With Orthodox:** Recognize their even broader canon reflects ancient traditions; major doctrines remain the same.',
        '🤝 **Within Protestantism:** Appreciate that all Protestant denominations share the same 66-book canon.',
        'You can disagree on canonical boundaries while affirming the same Lord, same gospel, same core faith.',
        'Don\'t let canonical differences create division where unity in Christ exists.'
      ],
      highlight: '🔑 Unity Principle: Affirm what you share (the gospel, the Trinity, the incarnation) before debating canon differences.'
    },

    {
      type: 'quiz',
      question: 'What should be your primary focus when dialoguing with Christians who have a different canon?',
      options: [
        'Proving your canon is correct',
        'Ignoring the differences',
        'Focusing on shared beliefs and the gospel',
        'Avoiding the topic entirely'
      ],
      correctAnswer: 2,
      explanation: 'Focus on what you share—the gospel, core doctrines, and the lordship of Christ—while respectfully understanding differences.'
    },

    {
      type: 'content',
      title: '3. Evaluating Modern Claims',
      content: [
        'Your canon knowledge equips you to evaluate new religious claims:',
        '🔍 **"Lost gospels":** You can assess whether they meet canonical criteria (apostolic origin, orthodox content, etc.).',
        '🔍 **New revelations:** You understand why the canon is closed and can test claims against Scripture.',
        '🔍 **Fringe teachings:** You can ask, "Does this align with apostolic teaching found in canonical books?"',
        'This doesn\'t make you arrogant—it makes you discerning (1 John 4:1).',
        'You\'re not dismissing God\'s ongoing work; you\'re protecting the foundational revelation.'
      ]
    },

    {
      type: 'content',
      title: '4. Diving Deeper into Scripture',
      content: [
        'Understanding the canon should inspire deeper Bible study:',
        '📖 **Read books in canonical order:** Understand how the Bible was arranged and why.',
        '📖 **Study disputed books:** Dig into Hebrews, James, 2 Peter, Revelation—why were they debated? What makes them canonical?',
        '📖 **Read the Apocrypha (if Protestant):** Understand the intertestamental period and Jewish thought in Jesus\' time.',
        '📖 **Explore church history:** Learn about the councils, early fathers, and debates that shaped the canon.',
        'The more you study, the more you appreciate the Bible\'s richness and the Spirit\'s guidance.'
      ],
      highlight: '📚 Challenge: Read one Deuterocanonical book (like 1 Maccabees) to understand why Catholics value it, even if you\'re Protestant.'
    },

    {
      type: 'quiz',
      question: 'How should your canon knowledge affect your Bible reading?',
      options: [
        'Make you skeptical of Scripture',
        'Cause you to question everything',
        'Give you confidence and inspire deeper study',
        'Make you feel superior to other Christians'
      ],
      correctAnswer: 2,
      explanation: 'Understanding the canon should give you confidence in Scripture\'s reliability and inspire you to study it more deeply.'
    },

    {
      type: 'content',
      title: '5. Living Under Scripture\'s Authority',
      content: [
        'Ultimately, knowing the canon matters because **Scripture shapes how we live**:',
        '✝️ The canon defines what Christians believe about God, salvation, and the Christian life.',
        '✝️ The canon calls us to obedience, worship, and mission.',
        '✝️ The canon reveals Jesus Christ—the Word made flesh.',
        'Don\'t just **know** the canon—**live** under its authority.',
        '📖 Read it prayerfully.',
        '📖 Study it carefully.',
        '📖 Obey it faithfully.',
        '📖 Share it boldly.',
        'The canon isn\'t an academic curiosity—it\'s the foundation for a life transformed by the gospel.'
      ],
      highlight: '🔥 Final Challenge: Choose one book of the Bible and commit to reading it this week. Let Scripture speak!'
    },

    {
      type: 'reflection',
      question: 'How will you apply what you\'ve learned about the canon in your Bible reading, church life, and faith conversations?',
      placeholder: 'Make a practical commitment based on this path...'
    },

    {
      type: 'completion',
      title: 'Path Complete! 🎉🏆',
      message: 'Congratulations! You\'ve completed the Biblical Canon learning path! You now have a deep understanding of how the Bible was formed, why it has the books it does, and how to apply this knowledge in your Christian life.',
      keyTakeaways: [
        'Read Scripture with confidence, knowing the careful process behind canon formation',
        'Engage different Christian traditions respectfully, focusing on shared beliefs',
        'Use your knowledge to evaluate modern claims and deepen your Bible study',
        'Live under Scripture\'s authority—read, study, obey, and share the Word'
      ],
      badge: {
        icon: '🏆',
        name: 'Biblical Canon Master',
        description: 'Completed ALL 8 Lessons: Biblical Canon Path'
      }
    }
  ]
};
