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

// ============================================
// Early Christianity Learning Path (Lessons 17-24)
// ============================================

// Lesson 17: Before Denominations Existed

export const lesson17Data = {
  id: 17,
  title: "Before Denominations Existed",
  subtitle: "What Christianity looked like in its first centuries",
  duration: "7 min",
  cards: [
    {
      type: 'content',
      title: 'Before Denominations Existed',
      subtitle: '⏱️ About 7 minutes',
      content: [
        '**Learning Objective:** By the end of this lesson, you will understand what Christianity looked like before denominational divisions.',
        'When you think of Christianity today, you probably think of Catholics, Protestants, Orthodox, Baptists, Methodists, Presbyterians...',
        'But for the first 1,000 years of Christian history, these divisions didn\'t exist.',
        'What did **early Christianity** look like? How did believers worship, organize, and understand their faith?',
        'Let\'s travel back to see Christianity in its original form—before the splits that would come later.'
      ],
      highlight: '💭 Quick reflection: If you could visit a church in 150 AD, what do you think would surprise you most?',
      requireAcknowledgment: true
    },

    {
      type: 'content',
      title: 'One Church, Many Locations',
      content: [
        'Early Christians saw themselves as **one church** scattered across many cities and regions.',
        '⛪ **Local Churches:** Each city had its own church community with elders/bishops, deacons, and members.',
        '📬 **Connected Network:** Churches corresponded through letters (many of which became New Testament books!).',
        '🤝 **Shared Faith:** They held the same core beliefs about Jesus, salvation, and Christian living.',
        '💰 **Mutual Support:** Churches sent financial aid to struggling communities (like Paul\'s collection for Jerusalem).',
        'Think of it like a family—many households, but one family name and shared values.',
        'There were no "denominations" as we know them, just the **Church** with a capital C, meeting in many places.'
      ],
      highlight: '🔑 Key Point: Early Christians emphasized unity, not uniformity. They had diversity in practices but unity in core beliefs.'
    },

    {
      type: 'quiz',
      question: 'How did early Christians view the church structure?',
      options: [
        'Many separate organizations competing with each other',
        'One church scattered across many locations',
        'Independent communities with no connection',
        'A centralized hierarchy controlled from Rome'
      ],
      correctAnswer: 1,
      explanation: 'Early Christians saw themselves as one church meeting in many places—local churches that were connected through shared faith, correspondence, and mutual support.'
    },

    {
      type: 'content',
      title: 'Simple Worship in Homes and Public Spaces',
      content: [
        'Early Christian worship was **simple and participatory**:',
        '🏠 **House Churches:** Most early churches met in homes (like Aquila and Priscilla in Romans 16:5).',
        '📖 **Scripture Reading:** They read from the Old Testament and circulated apostolic letters.',
        '🍞 **Breaking Bread:** The Lord\'s Supper was often part of a larger fellowship meal.',
        '🎵 **Singing:** They sang psalms, hymns, and spiritual songs (Ephesians 5:19).',
        '🙏 **Prayer:** Corporate and individual prayer was central to gathering.',
        '💬 **Teaching:** Elders taught, but there was also mutual edification (1 Corinthians 14:26).',
        'No elaborate buildings, complex liturgies, or professional clergy—just believers gathering to worship Jesus.'
      ]
    },

    {
      type: 'matching',
      title: 'Early Church Practices',
      pairs: [
        {
          term: 'House Churches',
          definition: 'Believers met in homes, not special buildings'
        },
        {
          term: 'Breaking Bread',
          definition: 'The Lord\'s Supper, often with a fellowship meal'
        },
        {
          term: 'Apostolic Letters',
          definition: 'Writings from apostles circulated among churches'
        },
        {
          term: 'Mutual Edification',
          definition: 'Members participated in teaching and encouraging'
        }
      ]
    },

    {
      type: 'content',
      title: 'Leadership: Elders, Bishops, and Deacons',
      content: [
        'Early church leadership was **simple and local**:',
        '👥 **Elders/Bishops:** The same office (Acts 20:17, 28)—mature believers who shepherded the local church.',
        '🤝 **Deacons:** Servants who handled practical needs so elders could focus on teaching and prayer.',
        '📚 **Apostles:** The original twelve plus Paul and a few others—they planted churches and wrote Scripture.',
        '🔥 **Evangelists/Prophets:** Traveled between churches, preaching and encouraging.',
        'Leadership was **plural** (multiple elders per church) and **local** (no distant hierarchy controlling individual congregations).',
        'The goal was **spiritual maturity**, not institutional control.',
        'This simple structure allowed rapid growth and adaptation to different cultures.'
      ]
    },

    {
      type: 'quiz',
      question: 'What was the relationship between "elders" and "bishops" in the early church?',
      options: [
        'Bishops were higher in rank than elders',
        'They were different offices with different functions',
        'They were the same office—different names for the same role',
        'Elders served bishops in administrative tasks'
      ],
      correctAnswer: 2,
      explanation: 'In the New Testament, "elder" and "bishop" refer to the same office. Acts 20:17,28 shows Paul calling the same people "elders" and "overseers" (bishops).'
    },

    {
      type: 'content',
      title: 'Core Beliefs: The "Rule of Faith"',
      content: [
        'While early Christians had **diversity in practices**, they shared **core beliefs**:',
        '✝️ **Jesus is Lord:** He is both fully God and fully human—the Son of God who died and rose again.',
        '📖 **Scripture is Authoritative:** The Old Testament plus emerging apostolic writings guided faith and practice.',
        '🕊️ **The Trinity:** Though not yet fully formulated, they worshipped Father, Son, and Holy Spirit as God.',
        '⛪ **The Church is God\'s People:** Believers are called out from the world to follow Jesus.',
        '🔄 **Jesus is Coming Back:** They lived with expectation of Christ\'s return and final judgment.',
        'This "rule of faith" (regula fidei) was **memorized, taught, and confessed** in baptism and worship.',
        'It provided unity amid diversity—churches could have different practices while holding the same essential faith.'
      ],
      highlight: '💡 Key Insight: The early church\'s unity was based on shared beliefs about Jesus, not identical practices or structures.'
    },

    {
      type: 'content',
      title: 'What Changed? Why Denominations Formed',
      content: [
        'So what happened? Why don\'t we have this simple, unified Christianity today?',
        '📈 **Growth and Institutionalization:** As Christianity spread and became legal (313 AD), it became more organized and hierarchical.',
        '🏛️ **Political Involvement:** When emperors became Christian, church and state became intertwined, creating power struggles.',
        '📚 **Theological Disputes:** Disagreements over doctrine (Trinity, nature of Christ, predestination) led to splits.',
        '🌍 **Cultural Differences:** Eastern and Western Christianity developed differently, leading to the Great Schism (1054 AD).',
        '⚡ **The Reformation:** In the 1500s, attempts to reform the Catholic Church led to Protestant denominations.',
        'Each split made more splits easier—Christianity fragmented into thousands of denominations.',
        'But the **core faith** remained: Jesus is Lord, Scripture is authoritative, and believers form God\'s church.'
      ]
    },

    {
      type: 'reflection',
      question: 'What aspects of early Christianity do you think modern churches should recover? What would that look like practically?',
      placeholder: 'Think about simplicity, unity, participation, local leadership...'
    },

    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You\'ve completed "Before Denominations Existed!" You now understand what Christianity looked like in its original, unified form.',
      keyTakeaways: [
        'Early Christians saw themselves as one church meeting in many places',
        'Worship was simple, participatory, and centered on Scripture and the Lord\'s Supper',
        'Leadership was plural and local, with elders/bishops shepherding individual congregations',
        'Unity was based on core beliefs about Jesus, not identical practices'
      ],
      badge: {
        icon: '⛪',
        name: 'Early Church Scholar',
        description: 'Completed Lesson 17: Before Denominations Existed'
      }
    }
  ]
};

// Lesson 18: The Apostolic Fathers

export const lesson18Data = {
  id: 18,
  title: "The Apostolic Fathers",
  subtitle: "The generation after the apostles who preserved and passed on the faith",
  duration: "7 min",
  cards: [
    {
      type: 'content',
      title: 'The Apostolic Fathers',
      subtitle: '⏱️ About 7 minutes',
      content: [
        '**Learning Objective:** By the end of this lesson, you will understand who the Apostolic Fathers were and why their writings matter.',
        'The last apostle, John, died around 100 AD. But Christianity didn\'t die with him.',
        'A new generation of leaders emerged—men who had **learned directly from the apostles** or their immediate disciples.',
        'These **Apostolic Fathers** became the bridge between the apostolic age and the later church.',
        'Their letters, sermons, and teachings help us understand how early Christians lived and what they believed.'
      ],
      highlight: '💭 Quick reflection: If you could sit down with someone who knew the apostle John personally, what would you ask them?',
      requireAcknowledgment: true
    },

    {
      type: 'content',
      title: 'Who Were the Apostolic Fathers?',
      content: [
        'The **Apostolic Fathers** were Christian leaders from roughly **70-150 AD** who had direct or close connections to the apostles:',
        '✍️ **Clement of Rome (d. 99 AD):** Bishop of Rome who wrote to the Corinthian church about unity and order.',
        '🔥 **Ignatius of Antioch (d. 108 AD):** Bishop who wrote seven letters while being taken to Rome for martyrdom.',
        '📚 **Polycarp of Smyrna (d. 155 AD):** Disciple of the apostle John, martyred at age 86.',
        '🏛️ **The Didache:** An early church manual (50-120 AD) teaching Christian practices and church order.',
        '🐑 **The Shepherd of Hermas:** Visions and parables about repentance and Christian living (100-160 AD).',
        'These men **lived the faith** the apostles taught—they weren\'t just scholars, but pastors and martyrs.'
      ],
      highlight: '🔑 Key Point: The Apostolic Fathers provide a direct link to apostolic Christianity—they show us how the first Christians understood and lived the gospel.'
    },

    {
      type: 'quiz',
      question: 'What makes the "Apostolic Fathers" unique in early church history?',
      options: [
        'They wrote the New Testament books',
        'They had direct or close connections to the original apostles',
        'They were all bishops of Rome',
        'They lived in Jerusalem'
      ],
      correctAnswer: 1,
      explanation: 'The Apostolic Fathers are unique because they had direct connections to the apostles or their immediate disciples, making them a bridge between the apostolic age and the later church.'
    },

    {
      type: 'content',
      title: 'Clement of Rome: Leadership and Unity',
      content: [
        '**Clement\'s Letter to the Corinthians** (96 AD) addresses **division in the church**:',
        '⚠️ **The Problem:** Young Corinthians had removed their elders from office, causing division.',
        '✅ **Clement\'s Solution:** Submit to properly appointed leadership and maintain church order.',
        '🕊️ **Key Themes:**',
        '• **Humility:** Follow Christ\'s example of selfless service',
        '• **Order:** God established proper authority structures in the church',
        '• **Peace:** Christians should pursue harmony, not strife',
        '• **Resurrection:** Christ\'s resurrection guarantees our future resurrection',
        'Clement shows early Christianity valued both **apostolic authority** and **church order**.',
        'His letter was so valued that some churches read it alongside Scripture for centuries.'
      ]
    },

    {
      type: 'content',
      title: 'Ignatius of Antioch: Martyrdom and Church Structure',
      content: [
        '**Ignatius wrote seven letters** while being transported to Rome for execution (108 AD):',
        '🦁 **Facing Death:** He eagerly anticipated martyrdom as a way to "imitate the passion of my God."',
        '⛪ **Church Leadership:** He emphasized the authority of bishops, priests, and deacons.',
        '✝️ **Against Heresy:** He warned against **Docetism** (the idea that Jesus wasn\'t truly human).',
        '🍞 **The Eucharist:** He called it "the medicine of immortality" and stressed its importance.',
        '**Key Quote:** "Let no one do anything pertaining to the church apart from the bishop."',
        'Ignatius shows early Christianity was developing **episcopal structure** (bishop-led churches).',
        'His courage in facing death demonstrates the **martyrdom spirit** of early Christians.'
      ]
    },

    {
      type: 'matching',
      title: 'Match the Apostolic Father',
      pairs: [
        {
          term: 'Clement of Rome',
          definition: 'Wrote to Corinthians about church unity and order'
        },
        {
          term: 'Ignatius of Antioch',
          definition: 'Wrote seven letters while being taken to martyrdom'
        },
        {
          term: 'Polycarp of Smyrna',
          definition: 'Disciple of John, martyred at age 86'
        },
        {
          term: 'The Didache',
          definition: 'Early church manual for Christian practices'
        }
      ]
    },

    {
      type: 'content',
      title: 'Polycarp of Smyrna: The Apostle\'s Disciple',
      content: [
        '**Polycarp** provides a direct link to the apostle John:',
        '👨‍🎓 **Apostolic Connection:** He learned directly from John and other apostles who had seen Jesus.',
        '📜 **Letter to Philippians:** He encouraged faithfulness and warned against false teachers.',
        '🔥 **Glorious Martyrdom:** At 86, he was burned alive but refused to deny Christ.',
        '**His Famous Words:** When urged to curse Christ, he replied: *"86 years I have served him, and he has done me no wrong. How can I blaspheme my King and Savior?"*',
        '🛡️ **Against Heresy:** He opposed **Marcion** (who rejected the Old Testament) and **Gnostic** teachers.',
        '📚 **Apostolic Tradition:** He preserved and passed on what he learned from the apostles.',
        'Polycarp demonstrates **faithfulness unto death** and the importance of **apostolic succession** in preserving truth.'
      ]
    },

    {
      type: 'quiz',
      question: 'What was Polycarp\'s famous response when urged to deny Christ?',
      options: [
        '"I am not afraid to die for my Lord"',
        '"86 years I have served him, how can I blaspheme my King?"',
        '"Christ is my only master and savior"',
        '"I would rather burn than betray the gospel"'
      ],
      correctAnswer: 1,
      explanation: 'Polycarp famously said "86 years I have served him, and he has done me no wrong. How can I blaspheme my King and Savior?" when pressured to deny Christ before his martyrdom.'
    },

    {
      type: 'content',
      title: 'The Didache: Early Church Manual',
      content: [
        'The **Didache** ("Teaching") is like an **early church handbook**:',
        '📋 **Two Ways:** It begins with the "Way of Life" vs. the "Way of Death"—moral instruction for new Christians.',
        '💧 **Baptism Instructions:** Preferably in running water, in the name of Father, Son, and Holy Spirit.',
        '🙏 **Prayer:** It includes the Lord\'s Prayer and instructions for fasting.',
        '🍞 **Eucharist:** Guidelines for celebrating the Lord\'s Supper in the church.',
        '👥 **Church Order:** How to recognize true apostles, prophets, and teachers.',
        '🔚 **End Times:** Teaching about Christ\'s second coming.',
        'The Didache shows early Christianity was **practical** and **organized**—they needed guidance for daily Christian living and church practices.'
      ]
    },

    {
      type: 'content',
      title: 'What the Apostolic Fathers Teach Us',
      content: [
        'The Apostolic Fathers reveal several important truths about early Christianity:',
        '✅ **Apostolic Continuity:** The faith was faithfully passed down from the apostles through their disciples.',
        '✅ **Core Doctrine:** Early Christians held firm beliefs about Christ\'s divinity, resurrection, and return.',
        '✅ **Church Structure:** Leadership patterns (bishops, elders, deacons) developed early for order and protection.',
        '✅ **Martyrdom Readiness:** Christians were prepared to die rather than deny Christ.',
        '✅ **Practical Faith:** Christianity involved both belief and behavior—doctrine and discipleship.',
        '✅ **Unity Emphasis:** Despite differences, early Christians prioritized church unity and peace.',
        'They bridge the gap between **Scripture** and **church history**, showing us authentic apostolic Christianity.'
      ],
      highlight: '💡 Key Insight: The Apostolic Fathers prove that essential Christian doctrine and practice didn\'t change after the apostles died—it was faithfully preserved.'
    },

    {
      type: 'reflection',
      question: 'If you faced martyrdom like Polycarp or Ignatius, what aspects of your faith would give you courage? How can their example strengthen your daily Christian life?',
      placeholder: 'Think about their devotion to Christ, church unity, and willingness to suffer...'
    },

    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You\'ve completed "The Apostolic Fathers!" You now understand the crucial generation that preserved apostolic Christianity.',
      keyTakeaways: [
        'The Apostolic Fathers provided continuity between the apostles and the later church',
        'They demonstrated faithfulness unto death and preserved essential Christian doctrine',
        'Their writings show early development of church structure and practices',
        'They emphasized unity, order, and practical Christian living'
      ],
      badge: {
        icon: '📜',
        name: 'Apostolic Scholar',
        description: 'Completed Lesson 18: The Apostolic Fathers'
      }
    }
  ]
};

// Lesson 19: How the Trinity Doctrine Formed

export const lesson19Data = {
  id: 19,
  title: "How the Trinity Doctrine Formed",
  subtitle: "The development of Christian understanding about God as Father, Son, and Holy Spirit",
  duration: "8 min",
  cards: [
    {
      type: 'content',
      title: 'How the Trinity Doctrine Formed',
      subtitle: '⏱️ About 8 minutes',
      content: [
        '**Learning Objective:** By the end of this lesson, you will understand how the doctrine of the Trinity developed in early Christianity.',
        'The **Trinity** is central to Christian faith: God exists as **Father, Son, and Holy Spirit**—three persons, one God.',
        'But this doctrine wasn\'t developed overnight. It took centuries of **biblical study, debate, and careful thinking**.',
        'Why did it take so long? How did early Christians work through this mystery?',
        'Let\'s trace the development of Trinitarian doctrine from the New Testament to the Council of Constantinople.'
      ],
      highlight: '💭 Quick reflection: How do you explain the Trinity to someone? What makes this doctrine challenging to understand?',
      requireAcknowledgment: true
    },

    {
      type: 'content',
      title: 'The Biblical Foundation',
      content: [
        'The **Trinity** isn\'t explicitly stated in Scripture, but the **biblical foundation** is clear:',
        '👨 **The Father is God:** Jesus prayed to the Father and called him "the only true God" (John 17:3).',
        '✝️ **Jesus is God:** "In the beginning was the Word, and the Word was with God, and the Word was God" (John 1:1).',
        '🕊️ **The Holy Spirit is God:** Ananias lied "to the Holy Spirit" and "to God" (Acts 5:3-4).',
        '3️⃣ **Three Distinct Persons:** At Jesus\' baptism, all three persons appear (Matthew 3:16-17).',
        '1️⃣ **One God:** "Hear, O Israel: The Lord our God, the Lord is one" (Deuteronomy 6:4).',
        'The challenge wasn\'t **finding the truth** in Scripture—it was **explaining how** three persons can be one God.',
        'Early Christians **experienced** the Trinity in worship before they could **explain** it doctrinally.'
      ],
      highlight: '🔑 Key Point: The Trinity doctrine wasn\'t invented by theologians—it was discovered in Scripture and experienced in Christian worship.'
    },

    {
      type: 'quiz',
      question: 'What was the main challenge early Christians faced regarding the Trinity?',
      options: [
        'Finding biblical support for three divine persons',
        'Explaining how three persons can be one God',
        'Deciding which person was most important',
        'Convincing people that Jesus existed'
      ],
      correctAnswer: 1,
      explanation: 'Early Christians clearly saw biblical evidence for Father, Son, and Holy Spirit as divine persons. The challenge was explaining how three persons could be one God without contradiction.'
    },

    {
      type: 'content',
      title: 'Early Attempts: The Modalists',
      content: [
        'The first major attempt to explain the Trinity was **Modalism** (200s AD):',
        '🎭 **The Theory:** God is **one person** who appears in **three modes**—sometimes as Father, sometimes as Son, sometimes as Spirit.',
        '👥 **Key Teachers:** Sabellius and others taught this "Sabellian" view.',
        '❌ **The Problem:** This denies that Father, Son, and Spirit are **distinct persons**.',
        '🚫 **Biblical Issues:**',
        '• If Jesus is just a "mode," who was he praying to in the Garden?',
        '• How can Jesus be "with God" if he IS God in the same way?',
        '• How can the Father send the Son if they\'re the same person?',
        'Modalism solved **one problem** (unity of God) but created **bigger problems** (denial of distinct persons).',
        'The church rejected Modalism because it contradicted **biblical revelation** and **Christian experience**.'
      ]
    },

    {
      type: 'content',
      title: 'The Arian Crisis: Denying Christ\'s Divinity',
      content: [
        'The most serious challenge came from **Arianism** (300s AD):',
        '👨‍🏫 **Arius of Alexandria:** A popular preacher who taught that **Jesus was created by the Father**.',
        '📢 **His Teaching:** "There was a time when the Son was not"—Jesus is divine but **subordinate** to the Father.',
        '🎵 **Popular Appeal:** Arians wrote catchy songs spreading their theology.',
        '⚔️ **The Controversy:** This split the church—was Jesus **fully God** or the **greatest creation**?',
        '**Why This Matters:** If Jesus isn\'t fully God, then:',
        '• He can\'t truly reveal God to us',
        '• He can\'t save us from sin (only God can forgive)',
        '• Christian worship of Jesus would be idolatry',
        'Arianism was attractive because it seemed **logical**, but it undermined the **gospel itself**.'
      ]
    },

    {
      type: 'matching',
      title: 'Early Trinity Views',
      pairs: [
        {
          term: 'Modalism',
          definition: 'God is one person appearing in three modes'
        },
        {
          term: 'Arianism',
          definition: 'Jesus was created by the Father, not fully God'
        },
        {
          term: 'Orthodox View',
          definition: 'Three persons, one essence—the Trinity'
        },
        {
          term: 'Sabellianism',
          definition: 'Another name for Modalist teaching'
        }
      ]
    },

    {
      type: 'content',
      title: 'The Council of Nicaea (325 AD)',
      content: [
        'Emperor **Constantine** called a council to resolve the Arian controversy:',
        '🏛️ **The Gathering:** 300+ bishops from across the empire met in Nicaea (modern Turkey).',
        '📜 **The Nicene Creed:** They affirmed that Jesus is "**true God and true man**"—fully divine.',
        '⚖️ **Key Language:** Jesus is "**homoousios**" (same essence/substance) as the Father.',
        '❌ **Arian Rejection:** They condemned the Arian teaching that Jesus was created.',
        '**The Creed Declares:**',
        '• Jesus is "God from God, Light from Light, true God from true God"',
        '• He was "begotten, not made"',
        '• He is "of one being with the Father"',
        'Nicaea settled the **divinity of Christ** but didn\'t fully address the **Trinity as a whole**.'
      ]
    },

    {
      type: 'quiz',
      question: 'What was the key term used at Nicaea to describe Jesus\' relationship to the Father?',
      options: [
        'Homoiousios (similar essence)',
        'Homoousios (same essence)',
        'Heteroousios (different essence)',
        'Monoousios (one essence)'
      ],
      correctAnswer: 1,
      explanation: 'The Council of Nicaea declared Jesus "homoousios" (same essence/substance) with the Father, affirming his full divinity against Arian teaching.'
    },

    {
      type: 'content',
      title: 'The Cappadocian Fathers: Three Persons, One Essence',
      content: [
        'The **Cappadocian Fathers** (350s-380s AD) provided the clearest **Trinitarian theology**:',
        '🧠 **Basil the Great:** Distinguished between "essence" (what God is) and "persons" (who God is).',
        '📚 **Gregory of Nazianzus:** Called "the Theologian"—defended both Christ\'s divinity and humanity.',
        '✍️ **Gregory of Nyssa:** Basil\'s brother who refined Trinitarian language and concepts.',
        '**Their Key Insights:**',
        '🔢 **One Essence, Three Persons:** God has one divine nature shared by three distinct persons.',
        '🔄 **Eternal Relations:** The Father begets the Son; the Spirit proceeds from the Father.',
        '⚖️ **Co-equal, Co-eternal:** All three persons are fully God, none subordinate to others.',
        'They provided the **theological vocabulary** that became standard in Christian doctrine.',
        'Their work bridged **biblical revelation** and **philosophical precision**.'
      ]
    },

    {
      type: 'content',
      title: 'Constantinople (381 AD): Completing the Doctrine',
      content: [
        'The **Council of Constantinople** (381 AD) **completed Trinitarian doctrine**:',
        '🕊️ **Holy Spirit\'s Divinity:** They affirmed the Spirit is "Lord and Giver of Life" who "proceeds from the Father."',
        '📝 **Expanded Creed:** They developed what we now call the "Nicene Creed" (though it\'s really the Niceno-Constantinopolitan Creed).',
        '⛪ **Trinitarian Worship:** They established patterns of prayer and liturgy honoring all three persons.',
        '✅ **Final Form:** The Trinity doctrine reached its classic formulation:',
        '• **Three Persons:** Father, Son, Holy Spirit',
        '• **One Essence:** Fully divine nature shared by all three',
        '• **Distinct Roles:** Father creates, Son redeems, Spirit sanctifies',
        '• **Co-equal Glory:** All three deserve equal worship and honor',
        'This became the **orthodox standard** for all Christian churches.'
      ]
    },

    {
      type: 'content',
      title: 'Why the Trinity Matters Today',
      content: [
        'The Trinity isn\'t just **ancient theology**—it shapes **Christian life** today:',
        '🙏 **Prayer:** We pray to the Father, through the Son, in the Spirit\'s power.',
        '💧 **Baptism:** We\'re baptized "in the name of the Father, Son, and Holy Spirit."',
        '⛪ **Worship:** We sing to Jesus, thank the Father, and depend on the Spirit.',
        '💕 **Salvation:** The Father sends the Son who saves us and gives us the Spirit.',
        '👥 **Community:** The Trinity models perfect relationship—unity in diversity.',
        '**Practical Applications:**',
        '• The Trinity shows us that **relationship** is at the heart of reality',
        '• **Diversity** and **unity** can coexist beautifully',
        '• **Love** requires both distinction and connection',
        'The Trinity isn\'t a **puzzle to solve** but a **mystery to worship**.'
      ],
      highlight: '💡 Key Insight: The Trinity doctrine protects the gospel—it ensures that Jesus can truly save us and that we worship the one true God revealed in Scripture.'
    },

    {
      type: 'reflection',
      question: 'How does understanding the Trinity\'s development help you appreciate both the mystery and the clarity of this doctrine? How might this shape your worship and prayer life?',
      placeholder: 'Think about the careful work of early Christians to preserve biblical truth...'
    },

    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You\'ve completed "How the Trinity Doctrine Formed!" You now understand this central Christian doctrine\'s development.',
      keyTakeaways: [
        'The Trinity doctrine emerged from biblical revelation and Christian worship experience',
        'Early heresies (Modalism, Arianism) forced the church to clarify Trinitarian truth',
        'The Councils of Nicaea and Constantinople established orthodox Trinitarian doctrine',
        'The Trinity shapes Christian prayer, worship, and understanding of salvation'
      ],
      badge: {
        icon: '☰',
        name: 'Trinity Scholar',
        description: 'Completed Lesson 19: How the Trinity Doctrine Formed'
      }
    }
  ]
};

// Lesson 20: The Nicene Creed

export const lesson20Data = {
  id: 20,
  title: "The Nicene Creed",
  subtitle: "Understanding Christianity's most important confession of faith",
  duration: "7 min",
  cards: [
    {
      type: 'content',
      title: 'The Nicene Creed',
      subtitle: '⏱️ About 7 minutes',
      content: [
        '**Learning Objective:** By the end of this lesson, you will understand the Nicene Creed and its significance for Christian faith.',
        'Walk into almost any Christian church—Catholic, Orthodox, Protestant—and you might hear these words:',
        '*"We believe in one God, the Father almighty, maker of heaven and earth..."*',
        'This is the **Nicene Creed**, the most widely accepted statement of Christian faith in history.',
        'Billions of Christians across 17 centuries have recited these same words. But what do they mean, and why do they matter?'
      ],
      highlight: '💭 Quick reflection: Have you ever recited the Nicene Creed? What stood out to you about its language or content?',
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'What Is a Creed?',
      content: [
        'A **creed** (from Latin "credo" = "I believe") is a **formal statement of essential beliefs**:',
        '📢 **Public Confession:** Creeds declare what Christians believe to the world.',
        '🛡️ **Defense Against Error:** They protect truth from false teaching.',
        '🎓 **Teaching Tool:** They summarize core doctrine for new believers.',
        '⛪ **Worship Element:** They unite congregations in common confession.',
        'The Nicene Creed addresses **three persons of the Trinity** and core **salvation truths**.',
        'It\'s not Scripture, but it **accurately summarizes biblical teaching**.'
      ]
    },
    {
      type: 'quiz',
      question: 'What is the primary purpose of the Nicene Creed?',
      options: [
        'To replace the Bible in worship',
        'To formally state essential Christian beliefs',
        'To create divisions between denominations',
        'To establish church hierarchy'
      ],
      correctAnswer: 1,
      explanation: 'The Nicene Creed serves to formally state essential Christian beliefs, defend against error, teach doctrine, and unite Christians in worship.'
    },
    {
      type: 'content',
      title: 'The Creed on God the Father',
      content: [
        '**"We believe in one God, the Father almighty, maker of heaven and earth, of all things visible and invisible."**',
        '☝️ **Monotheism:** Christians worship **one God**, not many.',
        '👨 **Father:** God is personal, relational—not just a force.',
        '💪 **Almighty:** God has all power—nothing is impossible for him.',
        '🌍 **Creator:** God made everything—material and spiritual realms.',
        'This section affirms **biblical theism** against:',
        '• **Polytheism:** (many gods)',
        '• **Pantheism:** (everything is god)',
        '• **Deism:** (distant, uninvolved god)',
        '• **Atheism:** (no god)'
      ]
    },
    {
      type: 'content',
      title: 'The Creed on Jesus Christ',
      content: [
        'The **longest section** addresses Jesus—the heart of Christian faith:',
        '**"We believe in one Lord Jesus Christ, the only-begotten Son of God, begotten from the Father before all ages, God from God, Light from Light, true God from true God, begotten, not made, of the same essence as the Father."**',
        '✝️ **Fully Divine:** Jesus is "true God"—not a lesser deity.',
        '👶 **Incarnation:** "For us and for our salvation he came down from heaven."',
        '🩸 **Crucifixion:** "He was crucified for us under Pontius Pilate."',
        '⚰️ **Death and Burial:** He "suffered death and was buried."',
        '🔴 **Resurrection:** "On the third day he rose again."',
        '☁️ **Ascension:** He "ascended into heaven and is seated at the right hand of the Father."',
        'This demolishes **Arianism**—Jesus isn\'t created but **eternally begotten**.'
      ]
    },
    {
      type: 'matching',
      title: 'Key Creedal Phrases',
      pairs: [
        { term: '"Begotten, not made"', definition: 'Jesus is eternally generated, not created' },
        { term: '"True God from true God"', definition: 'Jesus is fully divine' },
        { term: '"Of the same essence"', definition: 'Jesus shares the Father\'s divine nature' },
        { term: '"For us and our salvation"', definition: 'The incarnation\'s purpose' }
      ]
    },
    {
      type: 'content',
      title: 'The Creed on the Holy Spirit',
      content: [
        '**"We believe in the Holy Spirit, the Lord, the giver of life, who proceeds from the Father, who with the Father and the Son is worshiped and glorified."**',
        '🕊️ **Divine Person:** The Spirit is "Lord"—fully God, not just a force.',
        '💨 **Life-Giver:** The Spirit gives spiritual life and empowers believers.',
        '🔄 **Procession:** The Spirit "proceeds from the Father" (eternal relationship).',
        '🙏 **Worship:** The Spirit deserves equal honor with Father and Son.',
        '**Note:** Western churches added "**and the Son**" (filioque clause), while Eastern churches maintain "from the Father" only.',
        'This section was added at **Constantinople (381 AD)** to complete Trinitarian doctrine.'
      ]
    },
    {
      type: 'content',
      title: 'The Creed on Church and Salvation',
      content: [
        'The final section addresses **church, sacraments, and future hope**:',
        '**"We believe in one holy catholic and apostolic Church."**',
        '1️⃣ **One:** Unity despite diversity—all true believers are connected.',
        '✨ **Holy:** Set apart for God\'s purposes, growing in righteousness.',
        '🌍 **Catholic:** Universal—not limited to one culture or location.',
        '📜 **Apostolic:** Built on the foundation of apostolic teaching.',
        '**"We confess one baptism for the forgiveness of sins."**',
        '💧 **Baptism:** The sacrament of initiation into Christian community.',
        '**"We look forward to the resurrection of the dead and the life of the world to come."**',
        '⚰️ **Resurrection:** Christians will be raised bodily at Christ\'s return.',
        '♾️ **Eternal Life:** Believers will live forever with God.'
      ]
    },
    {
      type: 'quiz',
      question: 'What do the "four marks" of the church describe?',
      options: [
        'Different denominations of Christianity',
        'One, holy, catholic, and apostolic characteristics',
        'Four sacraments of the church',
        'Leadership positions in early Christianity'
      ],
      correctAnswer: 1,
      explanation: 'The four marks describe the church as one (unified), holy (set apart), catholic (universal), and apostolic (built on apostolic foundation).'
    },
    {
      type: 'content',
      title: 'Why the Nicene Creed Still Matters',
      content: [
        'After 1,600+ years, the Nicene Creed remains **relevant and powerful**:',
        '🤝 **Christian Unity:** It unites believers across denominations and centuries.',
        '📏 **Doctrinal Standard:** It provides a benchmark for orthodox Christian teaching.',
        '🛡️ **Defense Against Error:** It helps identify teachings that contradict biblical Christianity.',
        '🎓 **Discipleship Tool:** It teaches new believers essential Christian doctrine.',
        '🙏 **Worship Aid:** It focuses corporate worship on central truths.',
        '🌍 **Global Confession:** Christians worldwide recite these same truths.',
        'When you recite the Creed, you **join your voice** with countless believers across time and space.',
        'You\'re not just stating beliefs—you\'re **participating in the great tradition** of Christian faith.'
      ],
      highlight: '💡 Key Insight: The Nicene Creed proves that essential Christian doctrine has remained stable for centuries—the faith "once delivered to the saints" (Jude 3).'
    },
    {
      type: 'reflection',
      question: 'How might regularly reciting the Nicene Creed strengthen your faith and connect you with the global church? Which part of the Creed speaks most powerfully to you?',
      placeholder: 'Consider the unity, historical connection, and doctrinal clarity it provides...'
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You\'ve completed "The Nicene Creed!" You now understand Christianity\'s most important confession of faith.',
      keyTakeaways: [
        'The Nicene Creed summarizes essential Christian beliefs about the Trinity and salvation',
        'It defends orthodox doctrine against ancient heresies like Arianism',
        'The Creed unites Christians across denominations, cultures, and centuries',
        'Regular recitation connects believers to the historic Christian faith'
      ],
      badge: {
        icon: '📜',
        name: 'Creedal Scholar',
        description: 'Completed Lesson 20: The Nicene Creed'
      }
    }
  ]
};

// Lesson 21: Early Heresies and Why They Matter

export const lesson21Data = {
  id: 21,
  title: "Early Heresies and Why They Matter",
  subtitle: "How false teachings helped clarify true doctrine",
  duration: "7 min",
  cards: [
    {
      type: 'content',
      title: 'Early Heresies and Why They Matter',
      subtitle: '⏱️ About 7 minutes',
      content: [
        '**Learning Objective:** Understand major early heresies and how they helped clarify orthodox Christian doctrine.',
        'Nobody likes to think about **false teaching**, but early heresies played a crucial role in church history.',
        'They forced Christians to **think carefully** about what they believed and **articulate truth clearly**.',
        'Many core Christian doctrines were developed **in response to** heretical challenges.',
        'Let\'s explore the major heresies and see how God used even **opposition to truth** to strengthen the church.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Gnosticism: Secret Knowledge for the Elite',
      content: [
        '**Gnosticism** (100-300 AD) taught **secret spiritual knowledge** for salvation:',
        '🧠 **Secret Gnosis:** Only the enlightened possess true knowledge of God.',
        '😈 **Material is Evil:** The physical world, including the body, is inherently bad.',
        '👻 **Docetic Christ:** Jesus only appeared human—he couldn\'t have a real physical body.',
        '📚 **Alternative Gospels:** They wrote texts like the Gospel of Thomas and Gospel of Philip.',
        '**Why Christianity Rejected It:**',
        '• **Gospel of Grace:** Salvation is by faith, not secret knowledge',
        '• **Good Creation:** God made the physical world and called it good',
        '• **Incarnation:** Jesus was truly human—he had a real body',
        '• **Open Truth:** The gospel is for everyone, not an elite few'
      ]
    },
    {
      type: 'matching',
      title: 'Major Early Heresies',
      pairs: [
        { term: 'Gnosticism', definition: 'Salvation through secret knowledge; matter is evil' },
        { term: 'Arianism', definition: 'Jesus was created by the Father, not fully God' },
        { term: 'Docetism', definition: 'Jesus only appeared human, wasn\'t truly physical' },
        { term: 'Pelagianism', definition: 'Humans can achieve salvation through good works alone' }
      ]
    },
    {
      type: 'content',
      title: 'Montanism: Excessive Prophecy and New Revelation',
      content: [
        '**Montanism** (170-220 AD) emphasized **new prophecy** and **strict living**:',
        '🔥 **Montanus:** Claimed to receive new revelations from the Holy Spirit.',
        '👩 **Female Prophets:** Priscilla and Maximilla also claimed prophetic authority.',
        '📖 **New Scripture:** They treated their prophecies as equal to apostolic writings.',
        '⚖️ **Extreme Rigorism:** Very strict moral standards and harsh church discipline.',
        '**Christian Response:**',
        '• **Closed Canon:** Apostolic writings alone are authoritative Scripture',
        '• **Tested Prophecy:** All claimed revelations must align with apostolic teaching',
        '• **Balanced Discipline:** Church discipline should be restorative, not just punitive',
        'Montanism helped establish **canonical authority** and **proper church order**.'
      ]
    },
    {
      type: 'content',
      title: 'Manichaeism: Cosmic Dualism',
      content: [
        '**Manichaeism** (240-1400 AD) taught **cosmic dualism**—good vs. evil as equal forces:',
        '⚡ **Mani:** Persian teacher who claimed to be the final prophet after Jesus.',
        '☯️ **Dualistic Worldview:** Light (good) and Darkness (evil) are eternal, equal powers.',
        '👥 **Two Classes:** "Elect" (perfect) and "Hearers" (ordinary believers).',
        '🍃 **Extreme Asceticism:** Rejection of marriage, meat, wine, and property.',
        '**Christian Rejection:**',
        '• **Monotheism:** God alone is ultimate—evil is not an equal power',
        '• **Good Creation:** The material world is fundamentally good',
        '• **Marriage Blessing:** Marriage and family are gifts from God',
        'Augustine was a Manichean for 9 years before converting to Christianity.'
      ]
    },
    {
      type: 'quiz',
      question: 'Which heresy taught that Jesus only appeared to be human but wasn\'t truly physical?',
      options: ['Arianism', 'Gnosticism', 'Docetism', 'Montanism'],
      correctAnswer: 2,
      explanation: 'Docetism (from Greek "dokeo" = "to appear") taught that Jesus only appeared human but wasn\'t truly physical, denying the reality of the incarnation.'
    },
    {
      type: 'content',
      title: 'Donatism: Church Purity and Valid Sacraments',
      content: [
        '**Donatism** (311-411 AD) arose from **persecution and church purity** concerns:',
        '📜 **The Issue:** During persecution, some bishops "handed over" Scriptures to avoid death.',
        '🤔 **Donatist Question:** Are sacraments performed by "impure" clergy valid?',
        '⛪ **Their Answer:** No—the church must be pure, and clergy must be without serious sin.',
        '🚪 **Separatism:** They formed their own "pure" churches in North Africa.',
        '**Orthodox Response (Augustine):**',
        '• **Grace, Not Purity:** Sacraments depend on Christ\'s grace, not clergy perfection',
        '• **Mixed Church:** The visible church contains both saints and sinners until Christ returns',
        '• **Unity:** Church unity matters more than perfect purity',
        'This clarified that **sacramental validity** doesn\'t depend on **ministerial perfection**.'
      ]
    },
    {
      type: 'content',
      title: 'Pelagianism: Human Ability and Divine Grace',
      content: [
        '**Pelagianism** (400-430 AD) emphasized **human moral ability**:',
        '👨‍🏫 **Pelagius:** British monk who taught that humans can live sinless lives.',
        '💪 **Human Capability:** People have the natural ability to choose good and avoid sin.',
        '❌ **No Original Sin:** Adam\'s sin didn\'t corrupt human nature—we\'re born innocent.',
        '🏆 **Earned Salvation:** Good works and moral effort can merit salvation.',
        '**Augustine\'s Response:**',
        '• **Total Depravity:** Sin corrupts every aspect of human nature',
        '• **Grace Alone:** Salvation is entirely God\'s work, not human achievement',
        '• **Original Sin:** All humans inherit sinful nature from Adam',
        'This debate established **grace-centered soteriology** in Christian doctrine.'
      ]
    },
    {
      type: 'content',
      title: 'Why Heresies Actually Helped the Church',
      content: [
        'Heresies, though dangerous, **strengthened orthodox Christianity**:',
        '📚 **Doctrinal Clarity:** They forced Christians to define beliefs precisely.',
        '📖 **Biblical Study:** Defending truth required deeper Scripture engagement.',
        '⛪ **Church Unity:** Fighting error brought orthodox Christians together.',
        '🎓 **Theological Development:** Major doctrines emerged through these controversies.',
        '🛡️ **Apologetic Skills:** Christians learned to defend and explain their faith.',
        '**God\'s Sovereignty:** Even opposition serves God\'s purposes (Acts 20:29-30, 1 Corinthians 11:19).',
        '**Modern Application:** Contemporary false teachings still require:**',
        '• **Biblical literacy** to recognize error',
        '• **Doctrinal clarity** to articulate truth',
        '• **Gracious firmness** in defending the gospel'
      ],
      highlight: '💡 Key Insight: God uses even false teaching to strengthen his church—heresies forced Christians to think more carefully and speak more clearly about truth.'
    },
    {
      type: 'reflection',
      question: 'How might understanding early heresies help you recognize and respond to false teachings today? What role should doctrinal clarity play in modern Christianity?',
      placeholder: 'Consider the need for biblical literacy, gracious defense of truth...'
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You\'ve completed "Early Heresies and Why They Matter!" You now understand how false teachings shaped orthodox doctrine.',
      keyTakeaways: [
        'Major heresies challenged core Christian beliefs about God, Christ, salvation, and the church',
        'Orthodox responses to heresies helped clarify and systematize Christian doctrine',
        'Defending truth requires biblical knowledge and clear theological thinking',
        'God uses even opposition to strengthen and purify his church'
      ],
      badge: { icon: '🛡️', name: 'Heresy Hunter', description: 'Completed Lesson 21: Early Heresies and Why They Matter' }
    }
  ]
};

// Lesson 22: The Church Fathers

export const lesson22Data = {
  id: 22,
  title: "The Church Fathers",
  subtitle: "The theological giants who shaped Christian doctrine",
  duration: "7 min",
  cards: [
    {
      type: 'content',
      title: 'The Church Fathers',
      subtitle: '⏱️ About 7 minutes',
      content: [
        '**Learning Objective:** Learn about the key Church Fathers and their contributions to Christian theology.',
        'After the apostolic age, **brilliant theologians** arose to defend, explain, and systematize Christian faith.',
        'These **Church Fathers** weren\'t just scholars—they were pastors, bishops, and often martyrs.',
        'Their writings shaped Christian doctrine for centuries and still influence theology today.',
        'Let\'s meet the theological giants who built on the apostolic foundation.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'The Apologetic Fathers (100-200 AD)',
      content: [
        '**Apologetic Fathers** defended Christianity against **pagan criticism**:',
        '🛡️ **Justin Martyr (100-165):** Philosopher who became Christian; wrote "Apologies" defending the faith.',
        '📚 **Irenaeus (130-202):** Bishop who wrote "Against Heresies," refuting Gnostic teachings.',
        '⛪ **Tertullian (155-240):** Brilliant lawyer who coined theological terms; said "What does Athens have to do with Jerusalem?"',
        '**Their Contributions:**',
        '• **Intellectual Defense:** Showed Christianity wasn\'t foolish or immoral',
        '• **Systematic Theology:** Began organizing Christian doctrine systematically',
        '• **Biblical Canon:** Helped establish which books belonged in Scripture',
        'They proved Christianity could engage **philosophical thought** without compromising **biblical truth**.'
      ]
    },
    {
      type: 'content',
      title: 'The Alexandrian School: Origen and Clement',
      content: [
        '**Alexandria, Egypt** became a center of **Christian learning**:',
        '📖 **Clement of Alexandria (150-215):** Sought to synthesize Christian faith with Greek philosophy.',
        '🧠 **Origen (185-254):** Brilliant biblical scholar who wrote commentaries on nearly every Bible book.',
        '**Origen\'s Achievements:**',
        '• **Hexapla:** Six-column Bible comparing Hebrew and Greek texts',
        '• **Allegorical Method:** Sought spiritual meanings in Scripture beyond literal sense',
        '• **Systematic Theology:** "On First Principles"—first systematic Christian theology',
        '**Controversies:** Some of Origen\'s teachings (universal salvation, pre-existence of souls) were later condemned.',
        'The Alexandrians showed **scholarship and faith** could work together.'
      ]
    },
    {
      type: 'matching',
      title: 'Church Father Contributions',
      pairs: [
        { term: 'Justin Martyr', definition: 'Philosopher-apologist who defended Christianity intellectually' },
        { term: 'Irenaeus', definition: 'Wrote "Against Heresies" refuting Gnosticism' },
        { term: 'Origen', definition: 'Created the Hexapla and wrote biblical commentaries' },
        { term: 'Augustine', definition: 'Wrote "Confessions" and "City of God"' }
      ]
    },
    {
      type: 'content',
      title: 'The Cappadocian Fathers: Trinity Theologians',
      content: [
        'Three **Cappadocian** bishops refined **Trinitarian doctrine**:',
        '⛪ **Basil the Great (330-379):** Bishop, monastic reformer, defender of Nicene faith.',
        '🎭 **Gregory of Nazianzus (329-390):** "The Theologian"—eloquent preacher and poet.',
        '✍️ **Gregory of Nyssa (335-395):** Basil\'s brother, profound theologian and mystic.',
        '**Their Trinitarian Contributions:**',
        '• **Three Persons, One Essence:** Clarified how Trinity works without contradiction',
        '• **Eternal Relations:** Father begets Son; Spirit proceeds from Father',
        '• **Social Trinity:** Model for human community and relationship',
        'Their work became the **standard Trinitarian theology** for both East and West.'
      ]
    },
    {
      type: 'content',
      title: 'John Chrysostom: The Golden-Mouthed Preacher',
      content: [
        '**John Chrysostom** (349-407) was the greatest **preacher** of the early church:',
        '🗣️ **"Golden Mouth":** His nickname reflected his eloquent preaching.',
        '📖 **Biblical Expositor:** Preached verse-by-verse through entire Bible books.',
        '⚖️ **Social Justice:** Challenged the wealthy to care for the poor.',
        '👑 **Confronted Power:** Criticized Empress Eudoxia, leading to his exile.',
        '**Preaching Style:**',
        '• **Practical Application:** Connected Scripture to daily Christian living',
        '• **Clear Explanation:** Made complex truths understandable',
        '• **Moral Challenge:** Called believers to holy living',
        'His **biblical exposition** model influenced preaching for centuries.'
      ]
    },
    {
      type: 'quiz',
      question: 'Why was John Chrysostom called "Golden Mouth"?',
      options: [
        'He had gold dental work',
        'He was wealthy and generous',
        'He was an eloquent preacher',
        'He sang beautifully in worship'
      ],
      correctAnswer: 2,
      explanation: 'John Chrysostom was called "Chrysostom" (Greek for "golden mouth") because of his eloquent and powerful preaching ability.'
    },
    {
      type: 'content',
      title: 'Augustine: The Greatest Church Father',
      content: [
        '**Augustine of Hippo** (354-430) was the most **influential theologian** in church history:',
        '📚 **"Confessions":** Autobiographical work describing his conversion journey.',
        '🏛️ **"City of God":** Response to Rome\'s fall; contrasts earthly and heavenly kingdoms.',
        '⚖️ **Grace and Predestination:** Developed doctrines of original sin and sovereign grace.',
        '**Key Doctrines:**',
        '• **Original Sin:** All humans inherit sinful nature from Adam',
        '• **Grace Alone:** Salvation is entirely God\'s work, not human achievement',
        '• **Perseverance:** True believers will continue in faith until death',
        '• **Just War:** Criteria for when war can be morally justified',
        'Augustine influenced **both Protestant and Catholic** theology for 1,600 years.'
      ]
    },
    {
      type: 'content',
      title: 'Jerome: The Biblical Scholar',
      content: [
        '**Jerome** (347-420) was the greatest **biblical scholar** of his era:',
        '📖 **Latin Vulgate:** Translated the Bible into Latin—used for 1,000+ years.',
        '🏜️ **Desert Hermit:** Spent years in Syrian desert learning Hebrew.',
        '✍️ **Biblical Commentaries:** Wrote detailed explanations of Scripture.',
        '📚 **Patristic Scholar:** Translated Greek theological works into Latin.',
        '**Translation Principles:**',
        '• **Original Languages:** Worked from Hebrew and Greek, not just Greek translations',
        '• **Literary Excellence:** Created beautiful, readable Latin prose',
        '• **Scholarly Precision:** Consulted Jewish rabbis for Hebrew understanding',
        'His Vulgate became **the Bible of medieval Europe**.'
      ]
    },
    {
      type: 'content',
      title: 'The Fathers\' Lasting Legacy',
      content: [
        'The Church Fathers left **permanent marks** on Christianity:',
        '📚 **Theological Foundation:** They systematized Christian doctrine from Scripture.',
        '⛪ **Creedal Formulation:** They crafted creeds that unite Christians today.',
        '🛡️ **Heresy Refutation:** They protected orthodox faith from false teaching.',
        '📖 **Biblical Interpretation:** They established principles for understanding Scripture.',
        '🎓 **Educational Method:** They created theological education systems.',
        '**Modern Relevance:**',
        '• **Protestant Reformers** relied heavily on Augustine and Chrysostom',
        '• **Catholic theology** builds on patristic foundations',
        '• **Orthodox churches** still follow Cappadocian theology',
        'The Fathers prove **biblical truth** can be **intellectually rigorous** and **pastorally practical**.'
      ],
      highlight: '💡 Key Insight: The Church Fathers weren\'t creating new doctrines—they were faithfully explaining and systematizing what Scripture already taught.'
    },
    {
      type: 'reflection',
      question: 'Which Church Father\'s contribution most interests you? How might studying the Fathers strengthen contemporary Christian theology and preaching?',
      placeholder: 'Consider their scholarly rigor, pastoral heart, and biblical faithfulness...'
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You\'ve completed "The Church Fathers!" You now understand the theological giants who shaped Christian doctrine.',
      keyTakeaways: [
        'Church Fathers were scholars, pastors, and defenders who systematized Christian doctrine',
        'They refined Trinitarian theology, biblical interpretation, and systematic theology',
        'Their work provides continuity between apostolic teaching and later church development',
        'Modern Christianity still benefits from their theological contributions'
      ],
      badge: { icon: '📚', name: 'Patristic Scholar', description: 'Completed Lesson 22: The Church Fathers' }
    }
  ]
};

// Lesson 23: Worship in the Early Church

export const lesson23Data = {
  id: 23,
  title: "Worship in the Early Church",
  subtitle: "How early Christians gathered to praise God and build community",
  duration: "6 min",
  cards: [
    {
      type: 'content',
      title: 'Worship in the Early Church',
      subtitle: '⏱️ About 6 minutes',
      content: [
        '**Learning Objective:** Understand how early Christians worshiped and what we can learn from their practices.',
        'How did the first Christians worship? What did their gatherings look like?',
        '**Early Christian worship** was simple, participatory, and centered on **Christ and Scripture**.',
        'No elaborate buildings, complex liturgies, or professional choirs—just believers gathering to **encounter God together**.',
        'Let\'s explore early Christian worship and see what it teaches us about authentic community and spiritual formation.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'When and Where They Met',
      content: [
        'Early Christians gathered **regularly** but **simply**:',
        '📅 **Sunday Worship:** They met on "the Lord\'s Day" (Revelation 1:10) to celebrate resurrection.',
        '🏠 **House Churches:** Most gatherings were in homes (Romans 16:5, Colossians 4:15).',
        '🌅 **Early Morning:** Often met before work to avoid persecution and accommodate schedules.',
        '👥 **Small Groups:** House churches typically had 20-50 people—intimate, family-like.',
        '⛪ **Larger Gatherings:** Occasionally multiple house churches met together.',
        '**Why Houses?**',
        '• **Persecution:** Public buildings were dangerous',
        '• **Intimacy:** Small groups fostered deep relationships',
        '• **Flexibility:** Easy to adapt and move when needed',
        'Worship was **relational**, not **institutional**.'
      ]
    },
    {
      type: 'content',
      title: 'The Structure of Worship',
      content: [
        'Early worship followed a **simple pattern**:',
        '📖 **Scripture Reading:** Old Testament and apostolic letters (1 Timothy 4:13).',
        '🗣️ **Teaching/Preaching:** Explanation and application of Scripture.',
        '🎵 **Singing:** Psalms, hymns, and spiritual songs (Ephesians 5:19).',
        '🙏 **Prayer:** Corporate and individual prayers (1 Corinthians 14:15-16).',
        '🍞 **Lord\'s Supper:** Breaking bread in remembrance of Christ.',
        '💰 **Offering:** Collections for the poor and church needs (1 Corinthians 16:1-2).',
        '💬 **Mutual Edification:** Members shared testimonies, prophecies, teachings (1 Corinthians 14:26).',
        'Worship was **participatory**—not just watching a performance.'
      ]
    },
    {
      type: 'matching',
      title: 'Early Worship Elements',
      pairs: [
        { term: 'Scripture Reading', definition: 'Old Testament and apostolic letters' },
        { term: 'Breaking Bread', definition: 'The Lord\'s Supper in remembrance of Christ' },
        { term: 'Mutual Edification', definition: 'Members sharing testimonies and teachings' },
        { term: 'Collection', definition: 'Offerings for the poor and church needs' }
      ]
    },
    {
      type: 'content',
      title: 'Music and Singing',
      content: [
        'Early Christian **music** was simple but **meaningful**:',
        '📖 **Psalms:** They sang Old Testament psalms—God\'s own songbook.',
        '✝️ **Hymns:** Early compositions about Christ (like Philippians 2:6-11).',
        '🎵 **Spiritual Songs:** Spontaneous or newer compositions inspired by the Spirit.',
        '👥 **Congregational:** Everyone participated—not just professional musicians.',
        '🗣️ **A Cappella:** No instruments mentioned in New Testament worship.',
        '**Purpose of Music:**',
        '• **Teaching:** Songs helped memorize doctrine (Colossians 3:16)',
        '• **Encouragement:** Music lifted spirits and built unity',
        '• **Worship:** Songs expressed praise and thanksgiving to God',
        'Music was **functional** and **communal**, not entertainment.'
      ]
    },
    {
      type: 'content',
      title: 'The Lord\'s Supper',
      content: [
        'The **Lord\'s Supper** was central to early worship:',
        '🍞 **Weekly Observance:** Celebrated every Sunday (Acts 20:7).',
        '🍽️ **Part of a Meal:** Often included with "love feast" (agape meal).',
        '✝️ **Christ-Centered:** Focused on Jesus\' death and resurrection.',
        '👥 **Community Building:** Shared meal strengthened fellowship.',
        '🔮 **Forward-Looking:** Anticipated Christ\'s return (1 Corinthians 11:26).',
        '**Problems Addressed:**',
        '• **Class Division:** Rich and poor should eat together equally (1 Corinthians 11:20-22)',
        '• **Irreverence:** Approach with proper respect and self-examination (1 Corinthians 11:27-29)',
        'The Supper was **memorial**, **communion**, and **anticipation**.'
      ]
    },
    {
      type: 'quiz',
      question: 'How often did early Christians typically celebrate the Lord\'s Supper?',
      options: ['Monthly', 'Weekly', 'Quarterly', 'Annually'],
      correctAnswer: 1,
      explanation: 'Acts 20:7 indicates early Christians gathered "to break bread" every Sunday, making weekly celebration the normal pattern.'
    },
    {
      type: 'content',
      title: 'Prayer and Spiritual Gifts',
      content: [
        'Early worship included **diverse prayer** and **spiritual manifestations**:',
        '🙏 **Spontaneous Prayer:** Members prayed aloud as led by the Spirit.',
        '📜 **Formal Prayers:** They used established prayers like the Lord\'s Prayer.',
        '💬 **Prophecy:** Spirit-inspired messages for encouragement and instruction.',
        '👅 **Tongues:** Supernatural languages with interpretation (1 Corinthians 14).',
        '🎓 **Teaching:** Various members shared insights from Scripture.',
        '🎵 **Spiritual Songs:** Spontaneous musical worship.',
        '**Order in Worship:**',
        '• **Everything for edification** (1 Corinthians 14:26)',
        '• **Decent and orderly** (1 Corinthians 14:40)',
        '• **Test all things** (1 Thessalonians 5:21)',
        'Worship was **Spirit-led** but **biblically ordered**.'
      ]
    },
    {
      type: 'content',
      title: 'The Development of Liturgy',
      content: [
        'Over time, Christian worship became more **structured**:',
        '📋 **Didache (100 AD):** Provided prayers for baptism and Eucharist.',
        '⛪ **Justin Martyr (150 AD):** Described Sunday worship pattern.',
        '📚 **Church Orders (200-400 AD):** Developed more detailed liturgical instructions.',
        '🏛️ **Post-Constantine:** Worship became more elaborate after Christianity became legal.',
        '**Benefits of Structure:**',
        '• **Theological Protection:** Ensured doctrinally sound content',
        '• **Unity:** Common forms united diverse communities',
        '• **Beauty:** Developed artistic and musical excellence',
        '**Challenges:**',
        '• **Formalism:** Structure could replace spiritual vitality',
        '• **Clericalism:** Professional clergy dominated lay participation',
        'The key is **balance** between **order** and **Spirit**.'
      ]
    },
    {
      type: 'content',
      title: 'Lessons for Modern Worship',
      content: [
        'Early Christian worship offers **timeless principles**:',
        '📖 **Scripture-Centered:** The Bible should be central to all Christian worship.',
        '✝️ **Christ-Focused:** Everything should point to Jesus and his gospel.',
        '👥 **Community-Building:** Worship should strengthen relationships among believers.',
        '🎯 **Participatory:** Everyone should contribute, not just watch.',
        '🎵 **Musically Inclusive:** Singing should engage the whole congregation.',
        '🍞 **Sacramentally Rich:** Regular observance of baptism and Lord\'s Supper.',
        '🙏 **Prayer-Filled:** Corporate and individual prayer should be prominent.',
        '**Questions for Modern Churches:**',
        '• Does our worship **build community** or just provide religious experience?',
        '• Are we **participants** or **consumers**?',
        '• Is **Scripture** central or peripheral?',
        'Early patterns can **guide** (not dictate) contemporary worship.'
      ],
      highlight: '💡 Key Insight: Early Christian worship was simple but profound—focused on Scripture, Christ, and community rather than entertainment or performance.'
    },
    {
      type: 'reflection',
      question: 'What aspects of early Christian worship most challenge or inspire you? How might these principles reshape your approach to corporate worship?',
      placeholder: 'Consider participation, simplicity, community focus, Scripture centrality...'
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You\'ve completed "Worship in the Early Church!" You now understand how early Christians gathered for corporate worship.',
      keyTakeaways: [
        'Early worship was simple, participatory, and centered on Scripture and Christ',
        'House churches fostered intimate community and active participation',
        'The Lord\'s Supper was central to weekly worship and community building',
        'Balance between spiritual spontaneity and biblical order guided worship'
      ],
      badge: { icon: '🎵', name: 'Worship Scholar', description: 'Completed Lesson 23: Worship in the Early Church' }
    }
  ]
};

// Lesson 24: Lessons from Early Christianity

export const lesson24Data = {
  id: 24,
  title: "Lessons from Early Christianity",
  subtitle: "What modern Christians can learn from the early church",
  duration: "6 min",
  cards: [
    {
      type: 'content',
      title: 'Lessons from Early Christianity',
      subtitle: '⏱️ About 6 minutes',
      content: [
        '**Learning Objective:** Apply insights from early Christianity to strengthen modern Christian faith and practice.',
        'After studying early Christianity, what can we **learn** for today?',
        'The early church wasn\'t perfect, but they got **many things right** that modern Christianity sometimes struggles with.',
        'Let\'s identify **key lessons** from early Christianity and see how they can **strengthen** contemporary faith.',
        'This isn\'t about **copying everything** they did, but **learning principles** that transcend time and culture.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Lesson 1: Unity in Essentials, Liberty in Non-Essentials',
      content: [
        'Early Christians maintained **unity** despite **diversity**:',
        '✅ **Core Beliefs:** They agreed on essential doctrines about Jesus, salvation, and Scripture.',
        '🤝 **Cultural Flexibility:** They adapted practices to different cultures while preserving truth.',
        '💬 **Generous Dialog:** They discussed differences without breaking fellowship.',
        '⛪ **One Church:** Despite meeting in many places, they saw themselves as one body.',
        '**Modern Application:**',
        '• Focus on **essential doctrines** that unite all Christians',
        '• Allow **freedom** in secondary matters (worship style, church structure)',
        '• Pursue **unity** with believers from different denominations',
        '• **Major on majors** and **minor on minors**',
        'Unity doesn\'t require **uniformity**—it requires **shared commitment** to Christ and Scripture.'
      ]
    },
    {
      type: 'content',
      title: 'Lesson 2: Ordinary People Can Do Extraordinary Things',
      content: [
        'Early Christianity was spread by **regular believers**, not just leaders:',
        '👥 **Lay Movement:** Most early Christians were ordinary people—slaves, merchants, housewives.',
        '🌍 **Evangelistic Passion:** Every believer shared their faith naturally.',
        '💪 **Martyrdom Courage:** Regular Christians died for their faith without wavering.',
        '⛪ **Church Planting:** New churches started through ordinary believers\' witness.',
        '**Modern Challenge:**',
        '• Don\'t wait for **professional clergy** to do ministry',
        '• **Every Christian** can share the gospel and disciple others',
        '• **Ordinary faithfulness** is more powerful than spectacular gifting',
        '• **Local witness** matters more than distant missions alone',
        'God uses **available people**, not just **able people**.'
      ]
    },
    {
      type: 'matching',
      title: 'Early Church Lessons',
      pairs: [
        { term: 'Unity in Essentials', definition: 'Agree on core truths, allow freedom in secondary matters' },
        { term: 'Ordinary People', definition: 'Regular believers can accomplish extraordinary things' },
        { term: 'Costly Discipleship', definition: 'Following Jesus requires sacrifice and commitment' },
        { term: 'Truth and Love', definition: 'Defend doctrine while showing Christ-like character' }
      ]
    },
    {
      type: 'content',
      title: 'Lesson 3: Truth and Love Must Go Together',
      content: [
        'Early Christians **defended truth** while **demonstrating love**:',
        '📚 **Doctrinal Clarity:** They cared deeply about correct teaching and biblical truth.',
        '💕 **Gracious Spirit:** They showed love even to opponents and enemies.',
        '🛡️ **Heresy Opposition:** They fought false teaching without becoming harsh or bitter.',
        '🤲 **Practical Care:** They cared for the poor, sick, and marginalized.',
        '**Balanced Approach:**',
        '• **Truth without love** becomes **cold legalism**',
        '• **Love without truth** becomes **sentimental relativism**',
        '• **True love** sometimes requires **difficult conversations**',
        '• **Biblical truth** should produce **Christ-like character**',
        'Orthodoxy (right belief) and orthopraxy (right practice) **must go together**.'
      ]
    },
    {
      type: 'content',
      title: 'Lesson 4: Simplicity Over Complexity',
      content: [
        'Early Christianity was **beautifully simple**:',
        '⛪ **Simple Structure:** Local leadership, basic organization, clear purpose.',
        '🙏 **Simple Worship:** Scripture, prayer, singing, Lord\'s Supper, fellowship.',
        '📖 **Simple Message:** Jesus died for sins, rose from the dead, offers salvation.',
        '👥 **Simple Community:** Believers gathering to encourage and serve each other.',
        '**Modern Temptation:**',
        '• **Over-programming** church activities',
        '• **Complex systems** that obscure simple gospel',
        '• **Professional entertainment** instead of participatory worship',
        '• **Institutional maintenance** over **missional focus**',
        '**Return to Basics:** Focus on **Scripture, prayer, fellowship, and mission**.',
        'Simplicity creates **space** for the **Spirit** to work.'
      ]
    },
    {
      type: 'content',
      title: 'Lesson 5: Costly Discipleship, Not Cheap Grace',
      content: [
        'Early Christians understood that following Jesus **costs something**:',
        '💀 **Martyrdom Ready:** They were prepared to die rather than deny Christ.',
        '💰 **Generous Giving:** They shared possessions to care for community needs.',
        '🚪 **Social Rejection:** They accepted being misunderstood and marginalized.',
        '📚 **Serious Study:** They devoted themselves to learning and growing.',
        '**Modern Application:**',
        '• **Discipleship** involves **sacrifice**, not just benefits',
        '• **Comfort** and **convenience** shouldn\'t drive Christian decisions',
        '• **Counter-cultural living** is normal for Christians',
        '• **Spiritual growth** requires **discipline** and **commitment**',
        'Dietrich Bonhoeffer: **"Cheap grace is grace without discipleship."**'
      ]
    },
    {
      type: 'quiz',
      question: 'What characterized early Christian approach to truth and relationships?',
      options: [
        'Truth was more important than relationships',
        'Love was more important than doctrine',
        'Truth and love must go together',
        'They avoided controversial topics'
      ],
      correctAnswer: 2,
      explanation: 'Early Christians demonstrated that truth and love must go together—they defended biblical doctrine while showing Christ-like character and care for others.'
    },
    {
      type: 'content',
      title: 'Lesson 6: Scripture as Foundation',
      content: [
        'Early Christians built **everything** on **biblical foundation**:',
        '📖 **Scripture Authority:** The Bible was their ultimate authority for faith and practice.',
        '🎓 **Teaching Priority:** They devoted themselves to apostolic teaching (Acts 2:42).',
        '⚖️ **Testing Standard:** They tested all claims against Scripture (Acts 17:11).',
        '📚 **Canon Formation:** They carefully preserved and recognized inspired writings.',
        '**Modern Implications:**',
        '• **Biblical literacy** should be a priority for all Christians',
        '• **Scripture** should shape beliefs, not just confirm preferences',
        '• **Careful study** prevents doctrinal drift and error',
        '• **Teaching** the Bible should be central to church ministry',
        'Early Christians\' **biblical commitment** protected them from **theological confusion**.'
      ]
    },
    {
      type: 'content',
      title: 'Lesson 7: Persecution Produces Purity',
      content: [
        '**Persecution** often **strengthened** rather than **weakened** early Christianity:',
        '🔥 **Refining Fire:** Suffering separated genuine believers from nominal ones.',
        '⛪ **Church Unity:** External pressure created internal solidarity.',
        '📈 **Rapid Growth:** Persecution scattered Christians who spread the gospel.',
        '💎 **Character Development:** Suffering produced spiritual maturity.',
        '**Modern Considerations:**',
        '• **Comfort** can make Christians **spiritually soft**',
        '• **Opposition** often reveals who truly believes',
        '• **Suffering** can be God\'s tool for **spiritual growth**',
        '• **Global persecution** should motivate **prayer** and **support**',
        'Easy Christianity often produces **shallow Christians**.'
      ]
    },
    {
      type: 'content',
      title: 'Applying Early Church Lessons Today',
      content: [
        'How can modern Christians **apply** these early church lessons?',
        '🎯 **Personal Level:**',
        '• Study Scripture regularly and systematically',
        '• Develop relationships with believers from different backgrounds',
        '• Practice generous giving and sacrificial living',
        '• Prepare for opposition and suffering',
        '⛪ **Church Level:**',
        '• Emphasize biblical teaching and doctrinal clarity',
        '• Create opportunities for member participation',
        '• Focus on essentials while allowing freedom in non-essentials',
        '• Maintain simple structure and clear mission',
        '🌍 **Cultural Level:**',
        '• Engage culture with truth and love',
        '• Support persecuted Christians worldwide',
        '• Model unity amid diversity',
        'The early church provides **inspiration** and **guidance**, not **exact blueprints**.'
      ],
      highlight: '💡 Key Insight: The early church succeeded not because they were perfect, but because they prioritized Christ, Scripture, community, and mission over comfort and convention.'
    },
    {
      type: 'reflection',
      question: 'Which lesson from early Christianity most challenges you personally? What specific steps will you take to apply these insights in your life and church?',
      placeholder: 'Consider simplicity, sacrifice, biblical commitment, truth and love balance...'
    },
    {
      type: 'completion',
      title: 'Path Complete! 🎉🏆',
      message: 'Congratulations! You\'ve completed the Early Christianity learning path! You now understand the foundations of Christian faith and practice.',
      keyTakeaways: [
        'Maintain unity in essential doctrines while allowing freedom in secondary matters',
        'Ordinary believers can accomplish extraordinary things through God\'s power',
        'Balance truth and love—defend doctrine while demonstrating Christ-like character',
        'Prioritize Scripture, simplicity, and sacrificial discipleship over comfort and convenience'
      ],
      badge: { icon: '🏆', name: 'Early Christianity Master', description: 'Completed ALL 8 Lessons: Early Christianity Path' }
    }
  ]
};

// ============================================
// Bible Translations Learning Path (Lessons 25-32) 
// ============================================

// Note: TranslationsGuide.jsx uses lessons 41-48, but to maintain sequential numbering in this file,
// we'll create them as 25-32 and update the guide imports accordingly

// Lesson 25: Why So Many Bible Translations?

export const lesson25Data = {
  id: 25,
  title: "Why So Many Bible Translations?",
  subtitle: "Understanding the need for multiple English versions",
  duration: "7 min",
  cards: [
    {
      type: 'content',
      title: 'Why So Many Bible Translations?',
      subtitle: '⏱️ About 7 minutes',
      content: [
        '**Learning Objective:** Understand why we have multiple Bible translations and how they serve different purposes.',
        'Walk into any bookstore and you\'ll find dozens of English Bible translations: ESV, NIV, NASB, NLT, CSB, NRSV, KJV, and many more.',
        'Some people wonder: **"Why can\'t we just have one Bible?"** or **"Which translation is the most accurate?"**',
        'The answer involves language complexity, translation philosophy, target audiences, and the richness of God\'s Word.',
        'Let\'s explore why having multiple translations is actually a **strength**, not a problem.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Language is Living and Changing',
      content: [
        '**Languages evolve constantly.** The English of 1611 (KJV) sounds archaic today:',
        '• "Thee" and "thou" were normal then, formal now',
        '• "Charity" meant love; today it means giving to the poor',
        '• "Prevent" meant "go before," not "stop"',
        '**Each generation needs fresh translations** that speak in contemporary language while preserving biblical truth.',
        '**Cultural Context Changes:** What made sense to 17th-century readers may confuse modern readers.',
        'Translation isn\'t betraying the original—**it\'s making the original accessible**.'
      ]
    },
    {
      type: 'quiz',
      question: 'Why do we need new Bible translations for each generation?',
      options: ['The Bible changes over time', 'Language evolves and cultural contexts change', 'Older translations have errors', 'New manuscripts are discovered'],
      correctAnswer: 1,
      explanation: 'Language is living and constantly evolving. Words change meaning, grammar shifts, and cultural contexts develop. New translations help each generation understand God\'s unchanging Word in their contemporary language.'
    },
    {
      type: 'content',
      title: 'Different Purposes, Different Approaches',
      content: [
        'Different translations serve **different purposes**:',
        '📚 **Study Translations** (ESV, NASB): Prioritize accuracy and word-study precision',
        '📖 **Reading Translations** (NIV, CSB): Balance accuracy with readability',
        '💬 **Contemporary Translations** (NLT, CEV): Prioritize clarity and modern language',
        '🎨 **Paraphrases** (MSG, TLB): Restate ideas in completely fresh language',
        '⛪ **Liturgical Translations** (KJV, RSV): Designed for public worship and traditional language',
        'No single translation can perfectly capture every nuance for every purpose.',
        '**Having multiple versions allows us to see different facets of Scripture\'s meaning.**'
      ]
    },
    {
      type: 'matching',
      title: 'Match Translation Types',
      pairs: [
        { term: 'Study Translation', definition: 'Prioritizes accuracy and precision (ESV, NASB)' },
        { term: 'Reading Translation', definition: 'Balances accuracy with readability (NIV, CSB)' },
        { term: 'Contemporary Translation', definition: 'Uses modern language for clarity (NLT, CEV)' },
        { term: 'Paraphrase', definition: 'Restates ideas in fresh language (MSG, TLB)' }
      ]
    },
    {
      type: 'content',
      title: 'Translation Philosophy Differences',
      content: [
        '**Formal Equivalence (Word-for-Word):**',
        '• Translates individual words and maintains original grammar',
        '• Preserves Hebrew and Greek sentence structure',
        '• Better for detailed study but sometimes awkward in English',
        '**Dynamic Equivalence (Thought-for-Thought):**',
        '• Translates ideas and meanings rather than individual words',
        '• Uses natural English grammar and expressions',
        '• More readable but involves more interpretation',
        '**Optimal Equivalence:**',
        '• Combines formal and dynamic approaches as appropriate',
        '• Different passages may use different methods',
        'All three approaches are **valid**—they just prioritize different goals.'
      ]
    },
    {
      type: 'content',
      title: 'Target Audiences Matter',
      content: [
        'Translations are created for **specific audiences**:',
        '🎓 **Scholars and Pastors:** Need precision for research and teaching (NASB, ESV)',
        '⛪ **Church Members:** Need accuracy balanced with readability (NIV, CSB)',
        '🆕 **New Believers:** Need maximum clarity and contemporary language (NLT, CEV)',
        '👶 **Children:** Need simple vocabulary and concepts (NirV, ICB)',
        '🌍 **Specific Denominations:** May prefer certain theological emphases',
        '📖 **Literary Readers:** May appreciate traditional, beautiful language (KJV, NRSV)',
        'One size doesn\'t fit all—**different audiences benefit from different translation approaches**.'
      ]
    },
    {
      type: 'quiz',
      question: 'What is "dynamic equivalence" in Bible translation?',
      options: ['Translating word-for-word literally', 'Translating thought-for-thought for clarity', 'Using only the oldest manuscripts', 'Avoiding difficult passages'],
      correctAnswer: 1,
      explanation: 'Dynamic equivalence (thought-for-thought) translates the meaning and ideas of the original text rather than individual words, prioritizing clarity and natural English expression.'
    },
    {
      type: 'content',
      title: 'The Blessing of Multiple Translations',
      content: [
        'Having multiple translations is a **tremendous blessing**:',
        '🔍 **Reveals Nuances:** Comparing translations shows interpretive options',
        '📚 **Serves All Needs:** Different purposes require different approaches',
        '✅ **Confirms Accuracy:** Agreement across translations confirms reliability',
        '🎯 **Targets Audiences:** Everyone can find an appropriate version',
        '💡 **Illuminates Meaning:** Different wordings highlight different aspects',
        '**Instead of asking "Which is the best translation?"** ask **"Which translation is best for my current purpose?"**',
        'Use formal equivalence for study, dynamic for devotions, paraphrases for fresh perspective.'
      ],
      highlight: '💡 Key Insight: Multiple translations don\'t create confusion—they provide richer understanding of God\'s Word.'
    },
    {
      type: 'reflection',
      question: 'How might reading multiple Bible translations enrich your understanding of Scripture? Which translation approaches appeal to you for different purposes?',
      placeholder: 'Consider study, devotional reading, memorization, teaching others...'
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You\'ve completed "Why So Many Bible Translations?" You now understand the value and purpose of multiple English versions.',
      keyTakeaways: [
        'Multiple translations serve different purposes: study, reading, contemporary clarity, and liturgical use',
        'Language changes over time, requiring fresh translations for each generation',
        'Formal and dynamic equivalence are both valid approaches with different strengths',
        'Having multiple translations enriches our understanding rather than creating confusion'
      ],
      badge: { icon: '🌐', name: 'Translation Explorer', description: 'Completed Lesson 25: Why So Many Bible Translations?' }
    }
  ]
};

// Lesson 26: Translation History: From Latin to English

export const lesson26Data = {
  id: 26,
  title: "Translation History: From Latin to English", 
  subtitle: "The journey from Vulgate to modern versions",
  duration: "8 min",
  cards: [
    {
      type: 'content',
      title: 'Translation History: From Latin to English',
      subtitle: '⏱️ About 8 minutes',
      content: [
        '**Learning Objective:** Understand the historical development of English Bible translations.',
        'For over 1,000 years, the **Latin Vulgate** was the Bible of Western Christianity.',
        'The journey to English Bibles involved **martyrs, kings, scholars, and revolutionary changes** in how Christians accessed God\'s Word.',
        'From illegal translations that cost lives to authorized versions that shaped culture, this is the dramatic story of **bringing the Bible to English-speaking people**.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'The Vulgate Era (400-1400 AD)',
      content: [
        '**Jerome\'s Latin Vulgate (405 AD)** dominated Western Christianity:',
        '📚 **Universal Use:** All churches, monasteries, and universities used Latin',
        '⛪ **Church Control:** Only clergy could read and interpret Scripture',
        '🚫 **Vernacular Banned:** Translating into local languages was forbidden',
        '🎓 **Educational Barrier:** Common people couldn\'t read Latin',
        'The Church argued this **preserved doctrinal purity** and prevented **heretical interpretations**.',
        'But it also meant ordinary believers **couldn\'t read the Bible for themselves**.',
        'This would become a **major Reformation issue** centuries later.'
      ]
    },
    {
      type: 'content',
      title: 'Wycliffe: The First English Bible (1380s)',
      content: [
        '**John Wycliffe** believed every Christian should read Scripture:',
        '📖 **First Complete English Bible:** Translated from Latin Vulgate',
        '✍️ **Hand-Copied:** No printing press yet—every copy was handwritten',
        '🚫 **Illegal and Dangerous:** Church authorities condemned it',
        '🔥 **Persecution:** Wycliffe\'s followers (Lollards) were burned as heretics',
        '⚰️ **Posthumous Revenge:** Church enemies dug up Wycliffe\'s bones and burned them',
        'But the **idea couldn\'t be killed**—ordinary people deserved to read God\'s Word.',
        'Wycliffe earned the title **"Morning Star of the Reformation."**'
      ]
    },
    {
      type: 'quiz',
      question: 'What was revolutionary about Wycliffe\'s Bible?',
      options: ['It was the first Bible ever written', 'It was the first complete English Bible for ordinary people', 'It corrected errors in the original Hebrew', 'It was approved by the Pope'],
      correctAnswer: 1,
      explanation: 'Wycliffe\'s Bible (1380s) was the first complete English Bible, challenging the Church\'s Latin-only policy and making Scripture accessible to ordinary English-speaking people for the first time.'
    },
    {
      type: 'content',
      title: 'Tyndale: From Greek to English (1526)',
      content: [
        '**William Tyndale** made a crucial improvement—translating **directly from Greek**:',
        '📜 **Erasmus\'s Greek NT (1516):** Provided better source text than Latin',
        '🖨️ **Printing Press:** Made mass production possible',
        '📦 **Smuggling Operation:** Books hidden in cloth bales, imported to England',
        '🔥 **Public Burnings:** Church authorities destroyed copies publicly',
        '💀 **Martyrdom (1536):** Tyndale was strangled and burned at the stake',
        '🙏 **Final Prayer:** "Lord, open the King of England\'s eyes!"',
        '✨ **Legacy:** 83% of KJV New Testament comes from Tyndale\'s work',
        'His prayer was answered—within a year, King Henry VIII authorized an English Bible!'
      ]
    },
    {
      type: 'content',
      title: 'The King James Version (1611)',
      content: [
        '**King James I commissioned a new translation** for political and religious reasons:',
        '👑 **Political Motive:** Geneva Bible had anti-monarchy notes',
        '👥 **47 Scholars:** Six committees working from Hebrew, Greek, and Aramaic',
        '🎭 **Translation Style:** Majestic, dignified language for public reading',
        '📚 **Sources:** Used Tyndale, Bishops\' Bible, and other previous work',
        '✨ **Cultural Impact:** Shaped English literature for 400 years',
        '**Famous KJV phrases still used today:**',
        '• "Go the extra mile" • "The powers that be" • "Filthy lucre"',
        'The KJV dominated English Christianity until the 20th century.'
      ]
    },
    {
      type: 'matching',
      title: 'Match the Translator',
      pairs: [
        { term: 'Jerome', definition: 'Created the Latin Vulgate (405 AD)' },
        { term: 'Wycliffe', definition: 'First complete English Bible (1380s)' },
        { term: 'Tyndale', definition: 'First English Bible from Greek (1526)' },
        { term: 'King James translators', definition: '47 scholars created the KJV (1611)' }
      ]
    },
    {
      type: 'content',
      title: 'Modern Translation Era (1881-Present)',
      content: [
        'The **late 19th century** began the **modern translation era**:',
        '📜 **Better Manuscripts:** Discoveries of older, more accurate Greek texts',
        '🌍 **Missionary Need:** Simplified English for global evangelism',
        '📖 **Changing Language:** KJV English becoming archaic',
        '🎓 **Scholarly Advances:** Better understanding of Hebrew and Greek',
        '**Major Modern Translations:**',
        '• **RSV (1952):** Updated KJV language',
        '• **NIV (1978):** Dynamic equivalence, bestselling',
        '• **NASB (1971):** Very literal, study-focused',
        '• **ESV (2001):** Formal equivalence with modern language',
        'Each translation reflects **improved scholarship** and **contemporary language needs**.'
      ]
    },
    {
      type: 'quiz',
      question: 'What percentage of the KJV New Testament comes from Tyndale\'s translation?',
      options: ['About 25%', 'About 50%', 'About 83%', 'None—they were completely different'],
      correctAnswer: 2,
      explanation: 'Approximately 83% of the KJV New Testament comes directly from Tyndale\'s work. His translation was so excellent that later translators preserved most of his wording.'
    },
    {
      type: 'content',
      title: 'Lessons from Translation History',
      content: [
        'The history of Bible translation teaches us:',
        '📖 **God\'s Word for All:** Scripture belongs to all believers, not just clergy',
        '🦁 **Courage Required:** Faithful translation often requires sacrifice',
        '🔄 **Constant Renewal:** Each generation needs fresh access to Scripture',
        '🎯 **Multiple Purposes:** Different translations serve different needs',
        '✅ **Cumulative Progress:** Later translations build on earlier work',
        '🙏 **Divine Providence:** God has preserved and provided His Word',
        'We enjoy **unprecedented access** to Scripture in multiple accurate translations.',
        'This is a **privilege** previous generations **died to provide**.'
      ],
      highlight: '💡 Key Insight: Our freedom to read multiple English Bibles is the result of centuries of sacrifice, scholarship, and God\'s providence.'
    },
    {
      type: 'reflection',
      question: 'How does knowing the sacrifice behind English Bible translations affect your appreciation for Scripture access? What would you risk for the right to read the Bible?',
      placeholder: 'Consider Tyndale\'s martyrdom, Wycliffe\'s persecution, and modern religious freedom...'
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You\'ve completed "Translation History: From Latin to English!" You now understand the dramatic journey of English Bible translations.',
      keyTakeaways: [
        'The journey from Latin Vulgate to English Bibles involved martyrs and courageous translators',
        'Wycliffe created the first English Bible; Tyndale translated directly from Greek',
        'The KJV (1611) dominated for 400 years and shaped English culture',
        'Modern translations reflect better manuscripts and contemporary language needs'
      ],
      badge: { icon: '📚', name: 'Translation Historian', description: 'Completed Lesson 26: Translation History' }
    }
  ]
};

// Lessons 27-32 for Bible Translations Path

export const lesson27Data = {
  id: 27,
  title: "Formal vs Dynamic Equivalence",
  subtitle: "Understanding translation philosophies", 
  duration: "7 min",
  cards: [
    {
      type: 'content',
      title: 'Formal vs Dynamic Equivalence',
      subtitle: '⏱️ About 7 minutes',
      content: [
        '**Learning Objective:** Understand the difference between formal and dynamic equivalence translation approaches.',
        'Every Bible translator faces a fundamental choice: **translate the words** or **translate the meaning**?',
        'This choice creates the spectrum from **word-for-word** (formal equivalence) to **thought-for-thought** (dynamic equivalence).',
        'Both approaches are valid but serve different purposes. Let\'s explore how to choose wisely.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Formal Equivalence: Word-for-Word',
      content: [
        '**Formal Equivalence** preserves the **structure and words** of the original:',
        '✅ **Strengths:**',
        '• Maintains Hebrew/Greek word order and grammar',
        '• Preserves ambiguities that might be intentional',
        '• Better for detailed word study',
        '• Less translator interpretation',
        '❌ **Challenges:**',
        '• Can sound wooden or unnatural in English',
        '• Hebrew idioms may not make sense',
        '• May require more background knowledge',
        '**Examples:** NASB, ESV, NKJV, RSV'
      ]
    },
    {
      type: 'quiz',
      question: 'What is the main strength of formal equivalence translations?',
      options: ['They are easier to read', 'They preserve original word order and structure', 'They use contemporary language', 'They are shorter'],
      correctAnswer: 1,
      explanation: 'Formal equivalence translations preserve the original language structure, word order, and grammar, making them excellent for detailed study and maintaining the text\'s original ambiguities.'
    },
    {
      type: 'content',
      title: 'Dynamic Equivalence: Thought-for-Thought',
      content: [
        '**Dynamic Equivalence** prioritizes **natural English** and **clear meaning**:',
        '✅ **Strengths:**',
        '• Reads naturally in contemporary English',
        '• Clarifies cultural references and idioms',
        '• More accessible to new readers',
        '• Captures the original impact on ancient readers',
        '❌ **Challenges:**',
        '• More translator interpretation involved',
        '• May lose some original nuances',
        '• Less suitable for detailed word study',
        '**Examples:** NIV, NLT, GNT, CEV'
      ]
    },
    {
      type: 'matching',
      title: 'Match Translation Approaches',
      pairs: [
        { term: 'Formal Equivalence', definition: 'Word-for-word, preserves original structure' },
        { term: 'Dynamic Equivalence', definition: 'Thought-for-thought, prioritizes clarity' },
        { term: 'ESV/NASB', definition: 'Examples of formal equivalence' },
        { term: 'NIV/NLT', definition: 'Examples of dynamic equivalence' }
      ]
    },
    {
      type: 'content',
      title: 'Example Comparison',
      content: [
        '**Romans 12:2** - Compare the approaches:',
        '**ESV (Formal):** "Do not be conformed to this world, but be transformed by the renewal of your mind"',
        '**NIV (Dynamic):** "Do not conform to the pattern of this world, but be transformed by the renewing of your mind"',
        '**NLT (Dynamic):** "Don\'t copy the behavior and customs of this world, but let God transform you into a new person"',
        'Notice: Formal preserves "conformed to this world" while dynamic clarifies with "pattern/behavior and customs."',
        'Both convey Paul\'s meaning—formal preserves his exact words, dynamic explains the concept.'
      ]
    },
    {
      type: 'content',
      title: 'Choosing Your Approach',
      content: [
        '**For Word Study & Teaching:** Use formal equivalence',
        '• Preparing sermons or Bible studies',
        '• Comparing original language nuances',
        '• Understanding Hebrew/Greek concepts',
        '**For Devotional Reading:** Use dynamic equivalence',
        '• Daily Bible reading',
        '• Reading large sections quickly',
        '• Introducing new believers to Scripture',
        '**Best Practice:** Use both! Formal for study, dynamic for flow.',
        '**Remember:** Both approaches aim for **accuracy**—they just prioritize different aspects.'
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You understand formal vs dynamic equivalence! Use this knowledge to choose appropriate translations for different purposes.',
      keyTakeaways: [
        'Formal equivalence preserves original structure; dynamic equivalence prioritizes clarity',
        'Both approaches are valid and serve different purposes',
        'Use formal for detailed study, dynamic for readable flow',
        'The best approach is to use multiple translations together'
      ],
      badge: { icon: '⚖️', name: 'Translation Philosophy Expert', description: 'Completed Lesson 27: Formal vs Dynamic Equivalence' }
    }
  ]
};

export const lesson28Data = {
  id: 28,
  title: "Understanding Paraphrases",
  subtitle: "When translation becomes interpretation",
  duration: "6 min",
  cards: [
    {
      type: 'content',
      title: 'Understanding Paraphrases',
      content: [
        'Beyond formal and dynamic equivalence lies **paraphrase**—completely restating Scripture in contemporary language.',
        '**Paraphrases** prioritize **contemporary relevance** and **immediate understanding** over precision.',
        'They\'re **interpretations** as much as **translations**, offering fresh perspectives on familiar texts.',
        'Let\'s explore when paraphrases help and when they have limitations.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Popular Paraphrases',
      content: [
        '**The Message (Eugene Peterson):** Poetic, contemporary restatement',
        '**The Living Bible (Kenneth Taylor):** Simple, family-friendly language',
        '**The Passion Translation:** Emphasizes emotional and spiritual impact',
        '**Contemporary English Version:** Very simple vocabulary',
        '**Amplified Bible:** Expands text with multiple word meanings',
        'Each paraphrase reflects the author\'s **theological perspective** and **stylistic approach**.',
        'They can illuminate familiar passages but require **careful evaluation**.'
      ]
    },
    {
      type: 'quiz',
      question: 'What distinguishes paraphrases from translations?',
      options: ['They use older manuscripts', 'They completely restate ideas in contemporary language', 'They are more accurate', 'They include extra books'],
      correctAnswer: 1,
      explanation: 'Paraphrases completely restate biblical ideas in fresh, contemporary language rather than translating words or thoughts. They prioritize immediate understanding and contemporary relevance.'
    },
    {
      type: 'content',
      title: 'Benefits of Paraphrases',
      content: [
        '✅ **Fresh Perspective:** Break through familiarity to see new meanings',
        '✅ **Contemporary Language:** Speak in current idioms and expressions',
        '✅ **Cultural Bridge:** Connect ancient contexts to modern situations',
        '✅ **Reading Flow:** Very readable for devotional purposes',
        '✅ **Illumination:** Can clarify difficult or obscure passages',
        '**Example:** Psalm 23:1 - "The Lord is my shepherd" becomes "God, my shepherd! I don\'t need a thing" (MSG)',
        'This captures the **confidence and contentment** of the original in contemporary terms.'
      ]
    },
    {
      type: 'content',
      title: 'Limitations and Cautions',
      content: [
        '❌ **High Interpretation:** Reflect author\'s theological views',
        '❌ **Less Precision:** May miss important nuances',
        '❌ **Study Limitations:** Not suitable for detailed biblical analysis',
        '❌ **Doctrinal Concerns:** May emphasize some teachings over others',
        '**Best Use:** Devotional reading, fresh perspective, breaking through familiarity',
        '**Avoid For:** Doctrinal study, teaching preparation, memorization',
        '**Always Compare:** Check paraphrases against formal translations'
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You understand paraphrases! Use them wisely for fresh insight while relying on translations for accuracy.',
      keyTakeaways: [
        'Paraphrases restate Scripture in completely contemporary language',
        'They excel at providing fresh perspective and contemporary relevance',
        'Use for devotional reading but not for doctrinal study',
        'Always compare paraphrases with accurate translations'
      ],
      badge: { icon: '🎨', name: 'Paraphrase Expert', description: 'Completed Lesson 28: Understanding Paraphrases' }
    }
  ]
};

export const lesson29Data = {
  id: 29,
  title: "Choosing the Right Translation",
  subtitle: "Matching translations to your needs",
  duration: "7 min",
  cards: [
    {
      type: 'content',
      title: 'Choosing the Right Translation',
      content: [
        'With dozens of English translations available, **which should you choose?**',
        'The answer depends on **your purpose, audience, and preferences**.',
        'Let\'s develop a practical framework for selecting the right translation for each situation.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'For Different Purposes',
      content: [
        '📚 **Serious Study:** ESV, NASB, NKJV (formal equivalence)',
        '📖 **General Reading:** NIV, CSB, NRSV (balanced approach)',
        '🙏 **Devotional:** NLT, NIV, ESV (readable but accurate)',
        '🎭 **Public Reading:** ESV, NRSV, NIV (flows well orally)',
        '👶 **New Believers:** NLT, NIV, CEV (accessible language)',
        '🧒 **Children:** NirV, ICB (simple vocabulary)',
        '🌍 **Cross-Cultural:** NIV, NLT (clear contemporary language)',
        '🎨 **Fresh Perspective:** MSG, TLB (paraphrases)',
        '**Remember:** No single translation excels at everything.'
      ]
    },
    {
      type: 'quiz',
      question: 'Which type of translation is best for serious Bible study?',
      options: ['Paraphrases like The Message', 'Contemporary versions like CEV', 'Formal equivalence like ESV/NASB', 'Any translation works equally well'],
      correctAnswer: 2,
      explanation: 'Formal equivalence translations (ESV, NASB, NKJV) are best for serious study because they preserve original word order, structure, and nuances needed for detailed analysis.'
    },
    {
      type: 'content',
      title: 'Evaluation Questions',
      content: [
        'Ask these questions when choosing a translation:',
        '❓ **What\'s my purpose?** (Study, reading, devotion, teaching)',
        '❓ **Who\'s my audience?** (Scholars, new believers, children)',
        '❓ **What\'s my background?** (Biblical knowledge level)',
        '❓ **What style do I prefer?** (Traditional, contemporary, literary)',
        '❓ **What denomination am I?** (Some prefer certain traditions)',
        '❓ **Do I want notes?** (Study Bible vs. text-only)',
        'Consider **multiple translations** rather than limiting yourself to one.'
      ]
    },
    {
      type: 'content',
      title: 'Building Your Translation Library',
      content: [
        'Recommended **three-translation approach**:',
        '1️⃣ **Primary Study Bible:** Formal equivalence with good notes (ESV Study, NASB Study)',
        '2️⃣ **Reading Bible:** Dynamic equivalence for flow (NIV, NLT)',
        '3️⃣ **Fresh Perspective:** Paraphrase for new insights (MSG, TLB)',
        '**Digital Tools:** Bible apps provide instant access to multiple translations',
        '**Comparison Reading:** Check 2-3 versions for important passages',
        'This approach gives you **accuracy, readability, and fresh insight**.'
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You can now choose appropriate translations for different needs! Build a diverse translation library.',
      keyTakeaways: [
        'Choose translations based on purpose, audience, and personal preferences',
        'Use formal equivalence for study, dynamic for reading, paraphrases for fresh perspective',
        'Build a three-translation library: study, reading, and fresh perspective',
        'Digital tools make it easy to compare multiple translations'
      ],
      badge: { icon: '🎯', name: 'Translation Selector', description: 'Completed Lesson 29: Choosing the Right Translation' }
    }
  ]
};

export const lesson30Data = {
  id: 30,
  title: "Textual Variants in Translations",
  subtitle: "Why footnotes matter",
  duration: "7 min",
  cards: [
    {
      type: 'content',
      title: 'Textual Variants in Translations',
      content: [
        'Ever notice footnotes saying **"Some manuscripts read..."** or **"The earliest manuscripts omit..."**?',
        'These indicate **textual variants**—places where ancient manuscripts differ.',
        'Understanding these variants helps you read your Bible with informed confidence.',
        'Let\'s decode what these footnotes mean and why they matter.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Common Footnote Types',
      content: [
        '📝 **"Some manuscripts read..."** - Minor variant with different wording',
        '📝 **"Other manuscripts add..."** - Some manuscripts include extra text',
        '📝 **"The earliest manuscripts omit..."** - Significant textual question',
        '📝 **"Or..."** - Alternative translation of the same Greek/Hebrew',
        '📝 **"Literally..."** - Shows original language when English differs',
        'These footnotes show **scholarly honesty** and **transparent translation**.',
        'They don\'t undermine the Bible\'s reliability—they demonstrate careful scholarship.'
      ]
    },
    {
      type: 'quiz',
      question: 'What does a footnote saying "Some manuscripts read..." indicate?',
      options: ['The Bible is unreliable', 'There is a variant reading in ancient manuscripts', 'The translator made an error', 'You should use a different Bible'],
      correctAnswer: 1,
      explanation: 'This footnote indicates that different ancient manuscript families have slightly different wordings. It shows scholarly transparency about textual evidence rather than hiding uncertainties.'
    },
    {
      type: 'content',
      title: 'Significant Textual Variants',
      content: [
        'Some variants affect **longer passages**:',
        '📖 **Mark 16:9-20:** "Longer ending" with snake handling—absent from earliest manuscripts',
        '📖 **John 7:53-8:11:** Woman caught in adultery—beautiful story, probably not original to John',
        '📖 **1 John 5:7:** Trinitarian formula—late addition not in early Greek manuscripts',
        'Modern Bibles **bracket these passages** with explanatory notes.',
        'This isn\'t "removing Scripture"—it\'s being **honest about manuscript evidence**.',
        'These passages may be **authentic traditions** just not originally in these locations.'
      ]
    },
    {
      type: 'content',
      title: 'Different Manuscripts, Different Choices',
      content: [
        '**KJV vs. Modern Translations** sometimes differ because of **manuscript choices**:',
        '• **KJV** used **Byzantine text** (later, more manuscripts)',
        '• **Modern versions** prefer **Alexandrian text** (earlier, fewer manuscripts)',
        'Neither approach is wrong—they represent different **scholarly judgments**.',
        '**Most differences are minor**: word order, spelling, articles',
        '**Major differences** are noted in footnotes',
        '**No essential Christian doctrine** depends on disputed passages.'
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You understand textual variants! Read footnotes with confidence, knowing they show scholarly integrity.',
      keyTakeaways: [
        'Footnotes about manuscripts show scholarly honesty, not biblical problems',
        'Most textual variants are minor and don\'t affect meaning',
        'Major variants are clearly marked with brackets and explanations',
        'No essential Christian doctrine depends on disputed passages'
      ],
      badge: { icon: '📋', name: 'Textual Critic', description: 'Completed Lesson 30: Textual Variants in Translations' }
    }
  ]
};

export const lesson31Data = {
  id: 31,
  title: "Red Letter Editions and Study Bibles",
  subtitle: "Understanding Bible features and formatting",
  duration: "6 min",
  cards: [
    {
      type: 'content',
      title: 'Red Letter Editions and Study Bibles',
      content: [
        'Modern Bibles include **features** that weren\'t in the original manuscripts:',
        '🔴 **Red letters** for Jesus\'s words',
        '📝 **Study notes** and commentary',
        '🗺️ **Maps and charts**',
        '📖 **Cross-references**',
        'These are **helpful additions** but not part of inspired Scripture.',
        'Let\'s understand how to use these features wisely.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Red Letter Editions',
      content: [
        '**Red letters highlight Jesus\'s words**, but decisions about **what counts as Jesus\'s words** involve interpretation:',
        '✅ **Clear sayings:** Direct quotes are obviously Jesus',
        '❓ **Narrative descriptions:** "Jesus said" vs. "He replied"',
        '❓ **John\'s Gospel:** Where do Jesus\'s words end and John\'s commentary begin?',
        '❓ **Revelation:** Are these Jesus\'s words or John\'s vision descriptions?',
        'Different publishers make **different choices** about red lettering.',
        '**Use red letters as a helpful guide** but remember they\'re **editorial decisions**, not scriptural authority.'
      ]
    },
    {
      type: 'quiz',
      question: 'What should you remember about red letter editions?',
      options: ['Red letters are part of the original manuscripts', 'Red letters help identify Jesus\'s words but involve editorial decisions', 'Only red letters are important in the Gospels', 'Red letters prove divine inspiration'],
      correctAnswer: 1,
      explanation: 'Red letters are helpful editorial additions to highlight Jesus\'s words, but decisions about what to print in red involve interpretation and aren\'t part of the original inspired text.'
    },
    {
      type: 'content',
      title: 'Study Bible Features',
      content: [
        'Study Bibles add **interpretive helps**:',
        '📝 **Commentary notes:** Explanations and interpretations',
        '📖 **Cross-references:** Related passages',
        '🗺️ **Maps and timelines:** Historical context',
        '📊 **Charts and tables:** Systematic information',
        '📚 **Articles:** Topical essays',
        '**Remember:** Study notes are **human commentary**, not inspired Scripture.',
        'They\'re helpful but **fallible**. Compare multiple study Bibles for balanced perspective.'
      ]
    },
    {
      type: 'content',
      title: 'Choosing Study Bible Features',
      content: [
        '🎓 **For Academic Study:** Look for scholarly notes, multiple viewpoints',
        '⛪ **For Denominational Study:** Choose notes aligned with your tradition',
        '🙏 **For Devotional Use:** Emphasize application and spiritual growth',
        '🌍 **For Cultural Context:** Historical and archaeological insights',
        '📖 **For Cross-References:** Extensive Scripture connections',
        '**Popular Study Bibles:** ESV Study, NIV Study, Life Application, Archaeological Study Bible',
        '**Read the introduction** to understand the editors\' approach and perspective.'
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You understand Bible features and formatting! Use study helps wisely while distinguishing Scripture from commentary.',
      keyTakeaways: [
        'Red letters and study notes are helpful additions, not part of original Scripture',
        'Editorial decisions about formatting involve interpretation',
        'Study Bibles provide valuable context but represent human commentary',
        'Choose study features based on your purpose and check multiple perspectives'
      ],
      badge: { icon: '📖', name: 'Bible Features Expert', description: 'Completed Lesson 31: Red Letter Editions and Study Bibles' }
    }
  ]
};

export const lesson32Data = {
  id: 32,
  title: "Reading Multiple Translations",
  subtitle: "Maximizing your Bible study",
  duration: "6 min",
  cards: [
    {
      type: 'content',
      title: 'Reading Multiple Translations',
      content: [
        'The **best translation** is actually **multiple translations** used together.',
        'Comparing versions reveals **interpretive options**, **translation challenges**, and **richer meanings**.',
        'Let\'s develop practical skills for **multi-translation Bible study**.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Benefits of Comparison Reading',
      content: [
        '🔍 **Reveals Interpretive Options:** See where translators disagree',
        '💡 **Illuminates Difficult Passages:** Different approaches clarify meaning',
        '✅ **Confirms Key Points:** Agreement across translations shows reliability',
        '📚 **Educational:** Learn about Hebrew/Greek concepts',
        '🎯 **Prevents Over-Interpretation:** Keeps you focused on clear meanings',
        '**Example:** Compare Romans 8:28 across ESV, NIV, NLT to see different approaches to "all things work together."'
      ]
    },
    {
      type: 'content',
      title: 'Practical Comparison Methods',
      content: [
        '📱 **Use Bible Apps:** Parallel versions side-by-side',
        '📚 **Three-Bible Method:** Formal + Dynamic + Paraphrase',
        '🔍 **Focus on Differences:** Pay attention where translations vary',
        '❓ **Ask Why:** Consider why translators chose different words',
        '📖 **Check Original Languages:** Use tools to see Hebrew/Greek',
        '💭 **Don\'t Over-Analyze:** Focus on clear, consistent meanings',
        '**Start Simple:** Compare 2-3 versions rather than overwhelming yourself.'
      ]
    },
    {
      type: 'quiz',
      question: 'What is the main benefit of reading multiple Bible translations?',
      options: ['It makes Bible study more complicated', 'It reveals interpretive options and enriches understanding', 'It proves one translation is always wrong', 'It replaces the need for original languages'],
      correctAnswer: 1,
      explanation: 'Reading multiple translations reveals interpretive options, illuminates difficult passages, and enriches understanding by showing different ways to express the same biblical truth.'
    },
    {
      type: 'content',
      title: 'When Translations Disagree',
      content: [
        'When translations differ significantly:',
        '🤔 **Don\'t Panic:** Most differences are interpretive, not doctrinal',
        '📚 **Consult Commentaries:** See how scholars explain the options',
        '🔍 **Check Original Languages:** Use study tools or ask knowledgeable friends',
        '⚖️ **Consider Both Options:** Sometimes ambiguity is intentional',
        '🎯 **Focus on Clear Passages:** Don\'t build doctrine on disputed verses',
        '🙏 **Pray for Wisdom:** Ask the Spirit for understanding',
        '**Remember:** Translation challenges often reveal the **richness** of the original, not problems with reliability.'
      ]
    },
    {
      type: 'content',
      title: 'Building Translation Habits',
      content: [
        '🎯 **Start Simple:** Begin with 2 translations (one formal, one dynamic)',
        '📖 **Daily Reading:** Use dynamic equivalence for flow',
        '📚 **Study Time:** Add formal equivalence for precision',
        '🎨 **Weekly Fresh:** Check a paraphrase for new perspective',
        '💻 **Digital Tools:** Use apps for instant comparison',
        '📝 **Take Notes:** Record insights from different versions',
        '👥 **Discuss:** Share discoveries with Bible study groups',
        '**Goal:** Develop **confidence** in Scripture\'s reliability while **appreciating** its richness.'
      ]
    },
    {
      type: 'completion',
      title: 'Path Complete! 🎉🏆',
      message: 'Congratulations! You\'ve mastered Bible Translations! You can now choose, evaluate, and use multiple translations effectively.',
      keyTakeaways: [
        'Multiple translations reveal interpretive richness rather than creating confusion',
        'Use comparison reading to illuminate difficult passages and confirm key truths',
        'Different translations serve different purposes—build a diverse library',
        'Focus on clear, consistent meanings while appreciating translation challenges'
      ],
      badge: { icon: '🏆', name: 'Bible Translations Master', description: 'Completed ALL 8 Lessons: Bible Translations Path' }
    }
  ]
};

// Lessons 33-40 for Biblical Interpretation Path

export const lesson33Data = {
  id: 33,
  title: "Introduction to Hermeneutics",
  subtitle: "The art and science of biblical interpretation",
  duration: "7 min",
  cards: [
    {
      type: 'content',
      title: 'Introduction to Hermeneutics',
      subtitle: '⏱️ About 7 minutes',
      content: [
        '**Learning Objective:** Understand what hermeneutics is and why biblical interpretation requires both rules and humility.',
        '**Hermeneutics** is the fancy word for **"the principles of biblical interpretation."**',
        'Every time you read the Bible, you\'re interpreting it—deciding what it means.',
        'The question isn\'t **"Should I interpret?"** but **"Am I interpreting well?"**',
        'Good hermeneutics helps us understand what **the original author meant** before we apply it today.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Why Hermeneutics Matters',
      content: [
        '**Same Bible, Different Conclusions:** Christians disagree on baptism, spiritual gifts, women in ministry, end times, and more.',
        'These aren\'t random disagreements—they stem from **different interpretive methods**.',
        '📖 **Example:** "This is my body" (Luke 22:19)',
        '• Catholics: Literal transubstantiation',
        '• Lutherans: Real presence',
        '• Reformed: Spiritual presence',
        '• Baptists: Symbolic memorial',
        'Same words, different hermeneutics, different conclusions.',
        '**Good hermeneutics doesn\'t eliminate all disagreement** but helps us interpret responsibly.'
      ]
    },
    {
      type: 'quiz',
      question: 'What is hermeneutics?',
      options: ['A type of Bible translation', 'The principles and methods of biblical interpretation', 'A denomination', 'Ancient manuscript study'],
      correctAnswer: 1,
      explanation: 'Hermeneutics is the study of interpretation principles and methods—the "rules" for understanding what biblical texts mean.'
    },
    {
      type: 'content',
      title: 'Key Hermeneutical Principles',
      content: [
        '**1. Author\'s Intent:** What did the **original author** mean to communicate?',
        '**2. Historical Context:** What was happening **when it was written**?',
        '**3. Literary Context:** What comes **before and after** this passage?',
        '**4. Genre Matters:** Is it poetry, narrative, prophecy, epistle, apocalyptic?',
        '**5. Scripture Interprets Scripture:** Let clear passages shed light on unclear ones.',
        '**6. Grammatical-Historical Method:** Understand the **grammar** and **historical setting**.',
        'These principles help us **avoid eisegesis** (reading our ideas into the text) and practice **exegesis** (drawing meaning out of the text).'
      ]
    },
    {
      type: 'matching',
      title: 'Match Interpretation Terms',
      pairs: [
        { term: 'Exegesis', definition: 'Drawing meaning OUT of the text' },
        { term: 'Eisegesis', definition: 'Reading your own ideas INTO the text' },
        { term: 'Hermeneutics', definition: 'The principles of biblical interpretation' },
        { term: "Author's Intent", definition: 'What the original writer meant to communicate' }
      ]
    },
    {
      type: 'content',
      title: 'Humility in Interpretation',
      content: [
        '**Good hermeneutics requires humility:**',
        '✅ **Acknowledge bias:** We all bring assumptions to the text',
        '✅ **Learn from history:** The church has wrestled with these texts for 2,000 years',
        '✅ **Test interpretations:** Does this fit the whole counsel of Scripture?',
        '✅ **Hold convictions loosely on secondary issues:** Major on the majors',
        '❌ **Avoid:** "My interpretation is the only valid one" or "It\'s all just opinion"',
        '**Balance:** Strong convictions + interpretive humility',
        '**Remember:** The goal is to hear **God\'s voice**, not defend our preconceptions.'
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You understand the basics of hermeneutics! Apply these principles to read the Bible more faithfully.',
      keyTakeaways: [
        'Hermeneutics is the art and science of biblical interpretation',
        'Everyone interprets—the question is whether we interpret well',
        'Key principles: author\'s intent, context, genre, Scripture interprets Scripture',
        'Good interpretation requires both solid principles and humble hearts'
      ],
      badge: { icon: '📖', name: 'Hermeneutics Student', description: 'Completed Lesson 33: Introduction to Hermeneutics' }
    }
  ]
};

export const lesson34Data = {
  id: 34,
  title: "Why Denominations Interpret Differently",
  subtitle: "Understanding interpretive traditions",
  duration: "8 min",
  cards: [
    {
      type: 'content',
      title: 'Why Denominations Interpret Differently',
      content: [
        'If we all read the same Bible, **why do denominations disagree?**',
        'The answer involves **interpretive traditions**, **theological frameworks**, and **different hermeneutical priorities**.',
        'Understanding these differences helps us have **gracious conversations** across denominational lines.',
        'Let\'s explore the main interpretive approaches that shape denominational differences.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Different Sources of Authority',
      content: [
        '**Roman Catholic:** Scripture + Tradition + Magisterium (church teaching authority)',
        '• The Pope and bishops authoritatively interpret Scripture',
        '• Tradition carries equal weight with Scripture',
        '**Eastern Orthodox:** Scripture + Holy Tradition + Church Fathers',
        '• Consensus of the early church guides interpretation',
        '• Liturgy and councils are authoritative',
        '**Protestant:** **Sola Scriptura** (Scripture alone)',
        '• Bible is the final authority',
        '• But Protestants still disagree on interpretation!',
        'These different authority structures lead to different interpretive conclusions.'
      ]
    },
    {
      type: 'quiz',
      question: 'What does "Sola Scriptura" mean?',
      options: ['The Bible should be read alone without others', 'Scripture is the final authority for faith and practice', 'Only clergy can interpret Scripture', 'Scripture needs tradition to be understood'],
      correctAnswer: 1,
      explanation: 'Sola Scriptura means Scripture is the final authority—not that we ignore history or scholarship, but that the Bible has ultimate say in matters of faith and practice.'
    },
    {
      type: 'content',
      title: 'Protestant Interpretive Traditions',
      content: [
        'Even within Protestantism, different **theological systems** shape interpretation:',
        '**Reformed/Calvinist:**',
        '• Emphasizes God\'s sovereignty',
        '• Covenant theology framework',
        '• Interprets through lens of divine election',
        '**Arminian/Wesleyan:**',
        '• Emphasizes human free will and God\'s love',
        '• Holiness and sanctification focus',
        '**Lutheran:**',
        '• Law/Gospel distinction central',
        '• Sacramental theology',
        '**Baptist:**',
        '• Believer\'s baptism essential',
        '• Congregational church government',
        'Same Bible, different theological frameworks, different emphasis in interpretation.'
      ]
    },
    {
      type: 'content',
      title: 'Interpretive Lenses',
      content: [
        'We all wear **interpretive glasses** shaped by:',
        '🎓 **Theological Training:** Seminary background influences reading',
        '⛪ **Church Tradition:** How your church has always understood passages',
        '📚 **Favorite Commentators:** Teachers we trust shape our views',
        '🌍 **Cultural Context:** Western vs Eastern, ancient vs modern',
        '🎯 **Personal Experience:** Our stories affect what we emphasize',
        '**Example:** Spiritual gifts passages',
        '• Pentecostals: Emphasize ongoing miraculous gifts',
        '• Cessationists: Argue some gifts ceased with apostles',
        '• Continuationists: Middle ground—gifts available but not normative',
        'Same text, different lenses, different conclusions.'
      ]
    },
    {
      type: 'matching',
      title: 'Match Denominational Emphases',
      pairs: [
        { term: 'Roman Catholic', definition: 'Scripture + Tradition + Magisterium' },
        { term: 'Reformed', definition: 'God\'s sovereignty and covenant theology' },
        { term: 'Lutheran', definition: 'Law/Gospel distinction' },
        { term: 'Baptist', definition: 'Believer\'s baptism and congregational government' }
      ]
    },
    {
      type: 'content',
      title: 'Navigating Differences with Grace',
      content: [
        '**How to handle denominational differences:**',
        '✅ **Understand your own tradition:** Know your interpretive framework',
        '✅ **Learn from others:** Every tradition has insights to offer',
        '✅ **Distinguish essentials from non-essentials:** Not all doctrines are equally important',
        '✅ **Practice charity:** Assume others are sincere, not stupid',
        '✅ **Focus on unity in Christ:** Core gospel matters more than secondary issues',
        '**Augustine\'s wisdom:** "In essentials unity, in non-essentials liberty, in all things charity."',
        '**Remember:** Different interpretations don\'t always mean someone is compromising—often they\'re emphasizing different biblical truths.'
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You understand why denominations interpret differently! Use this knowledge for gracious dialogue.',
      keyTakeaways: [
        'Denominations differ based on authority sources and theological frameworks',
        'We all wear interpretive lenses shaped by tradition, training, and experience',
        'Understanding these differences promotes charity and reduces judgmentalism',
        'Focus on essentials while allowing liberty on secondary matters'
      ],
      badge: { icon: '⛪', name: 'Denominational Bridge-Builder', description: 'Completed Lesson 34: Why Denominations Interpret Differently' }
    }
  ]
};

export const lesson35Data = {
  id: 35,
  title: "Literal vs Allegorical Reading",
  subtitle: "When to read plainly vs symbolically",
  duration: "7 min",
  cards: [
    {
      type: 'content',
      title: 'Literal vs Allegorical Reading',
      content: [
        'Should the Bible be read **literally** or **symbolically**?',
        'This question has sparked debates for centuries.',
        'The answer is: **It depends on the genre and context.**',
        'Let\'s learn when to read plainly and when to recognize symbolic language.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'What "Literal" Really Means',
      content: [
        '**"Literal interpretation" doesn\'t mean wooden or simplistic reading.**',
        'It means reading according to the **literary sense** intended by the author.',
        '**Literal interpretation recognizes:**',
        '• Metaphors as metaphors (Psalm 91:4 - "He will cover you with his feathers")',
        '• Hyperbole as hyperbole (Matt 5:29 - "Pluck out your eye")',
        '• Poetry as poetry (Song of Solomon)',
        '• History as history (Acts)',
        '• Apocalyptic as apocalyptic (Revelation)',
        '**Literal** = Reading the text according to its **intended literary genre**.',
        'It\'s the opposite of **arbitrary** allegorical reading that ignores authorial intent.'
      ]
    },
    {
      type: 'quiz',
      question: 'What does "literal interpretation" actually mean?',
      options: ['Taking every word as physical fact', 'Reading according to the intended literary genre and sense', 'Ignoring symbolic language completely', 'Only reading historical narratives'],
      correctAnswer: 1,
      explanation: 'Literal interpretation means reading the text according to its intended literary sense—recognizing metaphors as metaphors, poetry as poetry, history as history, etc.'
    },
    {
      type: 'content',
      title: 'Dangers of Hyper-Literalism',
      content: [
        '**Hyper-literalism** treats all biblical language as wooden and physical:',
        '❌ **Problem Examples:**',
        '• Handling snakes because Mark 16:18 says believers will',
        '• Literal 6,000-year-old earth from genealogies',
        '• Refusing medical care because "God will heal"',
        '**Why it fails:** Ignores genre, idiom, and literary devices',
        '**Better approach:** Recognize when biblical authors use:',
        '• **Phenomenological language** ("sunrise"—ancient writers knew it was the earth rotating)',
        '• **Figurative language** ("God\'s right hand"—He\'s spirit, not physical)',
        '• **Apocalyptic imagery** (beasts in Revelation represent kingdoms)',
        '**Read literally** = Read **naturally**, respecting how language actually works.'
      ]
    },
    {
      type: 'content',
      title: 'Allegorical Interpretation History',
      content: [
        '**Early church fathers** like Origen used heavy allegory:',
        '• Every detail had hidden spiritual meaning',
        '• The Good Samaritan = Christ rescuing humanity',
        '• The inn = the church, innkeeper = Paul, etc.',
        '**Medieval "Four Senses":**',
        '1. **Literal** - What happened',
        '2. **Allegorical** - What to believe',
        '3. **Moral** - How to act',
        '4. **Anagogical** - Where we\'re going (heaven)',
        '**Reformation pushback:** Focus on **plain sense** and authorial intent',
        '**Modern consensus:** Allegory is valid **when the author intends it** (Galatians 4:24 - Paul explicitly allegorizes), but not imposed arbitrarily.'
      ]
    },
    {
      type: 'content',
      title: 'When Symbolism IS Intended',
      content: [
        'The Bible **does** use symbolic language—recognize it:',
        '🌾 **Parables:** Jesus\' stories teach spiritual truths through earthly illustrations',
        '🐉 **Apocalyptic:** Daniel and Revelation use symbolic beasts and numbers',
        '🎵 **Poetry:** Psalms and prophets use rich metaphorical language',
        '📖 **Types:** Old Testament events foreshadow New Testament realities (sacrificial system → Christ)',
        '**Keys to identifying symbols:**',
        '✅ Genre signals (apocalyptic, parable, poetry)',
        '✅ Author cues ("This means..." or "This represents...")',
        '✅ Impossible literal reading (beast with 7 heads)',
        '✅ Consistent with biblical theology',
        '**Balance:** Don\'t over-literalize poetry or over-allegorize narrative.'
      ]
    },
    {
      type: 'matching',
      title: 'Match Reading Approaches',
      pairs: [
        { term: 'Literal/Natural', definition: 'Reading according to intended literary sense' },
        { term: 'Hyper-Literal', definition: 'Wooden reading that ignores literary devices' },
        { term: 'Allegorical', definition: 'Finding hidden spiritual meanings in details' },
        { term: 'Typological', definition: 'Recognizing OT patterns fulfilled in NT' }
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You understand literal vs allegorical interpretation! Read the Bible according to its intended genre.',
      keyTakeaways: [
        'Literal interpretation means reading according to intended literary sense, not wooden reading',
        'Recognize metaphors, poetry, and symbolism when authors intend them',
        'Avoid arbitrary allegory that ignores authorial intent',
        'Balance: Read naturally while recognizing legitimate symbolic language'
      ],
      badge: { icon: '📜', name: 'Genre-Aware Reader', description: 'Completed Lesson 35: Literal vs Allegorical Reading' }
    }
  ]
};

export const lesson36Data = {
  id: 36,
  title: "Context is King",
  subtitle: "Why surrounding verses matter most",
  duration: "7 min",
  cards: [
    {
      type: 'content',
      title: 'Context is King',
      content: [
        '**The #1 rule of biblical interpretation: CONTEXT, CONTEXT, CONTEXT.**',
        'More bad theology comes from **ignoring context** than any other mistake.',
        'A text without context is a **pretext** for whatever you want it to mean.',
        'Let\'s learn to read Scripture in its proper literary, historical, and theological context.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Literary Context',
      content: [
        '**Literary context** = What comes **before and after** the passage.',
        '**Classic example:** Philippians 4:13 - "I can do all things through Christ"',
        '❌ **Out of context:** "I can ace this test / win this game / get rich through Christ!"',
        '✅ **In context (4:11-13):** Paul learned contentment in **poverty and plenty**. He can endure **all circumstances** through Christ\'s strength.',
        'The verse is about **contentment**, not achievement.',
        '**Another example:** Jeremiah 29:11 - "Plans to prosper you"',
        '❌ **Out of context:** Personal promise to modern Christians',
        '✅ **In context:** Promise to **exiled Israel** that after **70 years** God would restore them',
        'Always read **the whole chapter**, not just a verse.'
      ]
    },
    {
      type: 'quiz',
      question: 'What does "I can do all things through Christ who strengthens me" (Phil 4:13) actually mean in context?',
      options: ['I can succeed at any goal I set', 'I can be content in all circumstances through Christ', 'I can perform miracles', 'I can understand all mysteries'],
      correctAnswer: 1,
      explanation: 'In context (Phil 4:11-13), Paul is talking about contentment in both poverty and plenty—he can endure all circumstances through Christ\'s strength, not achieve any goal.'
    },
    {
      type: 'content',
      title: 'Historical Context',
      content: [
        '**Historical context** = When, where, why, and to whom was this written?',
        '**Example:** Food sacrificed to idols (1 Corinthians 8-10)',
        '• **Historical situation:** Corinth had temples where meat was sacrificed to pagan gods, then sold in markets',
        '• **Paul\'s teaching:** Freedom to eat, but don\'t cause weaker believers to stumble',
        '• **Modern application:** Principle of Christian liberty + care for others\' consciences',
        '**Example:** Women\'s head coverings (1 Corinthians 11)',
        '• **Historical context:** Cultural symbol of respectability in Corinth',
        '• **Debate:** Is this **timeless command** or **cultural application** of timeless principle (honor and modesty)?',
        'Understanding historical context helps us distinguish **cultural application** from **timeless principle**.'
      ]
    },
    {
      type: 'content',
      title: 'Theological Context',
      content: [
        '**Theological context** = How does this fit in **the whole Bible\'s message**?',
        '**Example:** James 2:24 - "Justified by works, not faith alone"',
        '• Seems to contradict Paul (Romans 3:28 - "justified by faith apart from works")',
        '• **Resolution:** Different contexts!',
        '  - Paul: Works of the **Law** can\'t save',
        '  - James: Genuine faith **produces** works',
        '**Scripture interprets Scripture** principle:',
        '✅ Let clear passages illuminate unclear ones',
        '✅ Compare parallel passages',
        '✅ Read individual texts in light of **the gospel**',
        '✅ Don\'t build major doctrines on **one obscure verse**',
        '**The whole Bible tells one story:** God\'s redemption through Jesus Christ.'
      ]
    },
    {
      type: 'content',
      title: 'Practical Context Checklist',
      content: [
        'Before interpreting a passage, ask:',
        '📖 **Literary:** What comes before and after? What\'s the main point of this chapter/book?',
        '📅 **Historical:** Who wrote this? To whom? When? What was happening?',
        '🎯 **Purpose:** Why was this written? What problem was being addressed?',
        '📚 **Theological:** How does this fit in Scripture\'s overall story? What do other passages say?',
        '🌍 **Cultural:** What cultural practices or assumptions are in view?',
        '📝 **Genre:** What type of literature is this (narrative, poetry, epistle, apocalyptic)?',
        '**Tool:** Use a study Bible with **introductions** and **notes** explaining context.',
        '**Remember:** A verse can never mean what it never meant to its original audience.'
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You understand the importance of context! Always read passages in their literary, historical, and theological setting.',
      keyTakeaways: [
        'Context is the #1 rule of biblical interpretation',
        'Literary context: Read the verses before and after',
        'Historical context: Understand the original situation and audience',
        'Theological context: Interpret texts in light of the whole Bible',
        'A text without context is a pretext for error'
      ],
      badge: { icon: '🔍', name: 'Context Champion', description: 'Completed Lesson 36: Context is King' }
    }
  ]
};

export const lesson37Data = {
  id: 37,
  title: "Genre Matters",
  subtitle: "Reading different types of biblical literature",
  duration: "6 min",
  cards: [
    {
      type: 'content',
      title: 'Genre Matters',
      content: [
        'The Bible contains **multiple genres**—not just one type of writing.',
        'You wouldn\'t read a poem the same way as a recipe, or a parable like a history textbook.',
        '**Understanding genre** is essential for proper interpretation.',
        'Let\'s explore the main biblical genres and how to read each one.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Biblical Genres Overview',
      content: [
        '**1. Narrative (Historical):** Genesis, 1-2 Samuel, Acts',
        '• Stories of what happened',
        '• Descriptive, not always prescriptive',
        '**2. Law:** Exodus, Leviticus, Deuteronomy',
        '• Commands for Israel',
        '• Distinguish moral, civil, ceremonial law',
        '**3. Poetry/Wisdom:** Psalms, Proverbs, Song of Solomon',
        '• Metaphorical, emotional language',
        '• Proverbs are general truths, not guarantees',
        '**4. Prophecy:** Isaiah, Jeremiah, Ezekiel',
        '• Forth-telling (calling people to repentance)',
        '• Fore-telling (predicting future events)',
        '**5. Gospels:** Matthew, Mark, Luke, John',
        '• Theological biographies of Jesus',
        '**6. Epistles:** Romans through Jude',
        '• Letters to churches and individuals',
        '**7. Apocalyptic:** Daniel, Revelation',
        '• Symbolic visions of cosmic conflict'
      ]
    },
    {
      type: 'quiz',
      question: 'What is the difference between "descriptive" and "prescriptive" in narrative texts?',
      options: ['Descriptive texts are boring, prescriptive are exciting', 'Descriptive tells what happened, prescriptive commands what we should do', 'Descriptive is Old Testament, prescriptive is New Testament', 'There is no difference'],
      correctAnswer: 1,
      explanation: 'Descriptive texts tell what happened (e.g., David had multiple wives), while prescriptive texts command what we should do. Not everything described in Scripture is prescribed for us to follow.'
    },
    {
      type: 'content',
      title: 'Reading Narrative Properly',
      content: [
        '**Narrative = Stories of what happened, not always what should happen**',
        '❌ **Bad interpretation:** "Abraham lied about Sarah, so lying is okay sometimes"',
        '✅ **Good interpretation:** "The narrative shows Abraham\'s failure and God\'s faithfulness despite it"',
        '**Key questions for narrative:**',
        '• What\'s the **main point** of this story?',
        '• Is this **described** (what happened) or **prescribed** (what should happen)?',
        '• How does this advance the **overall biblical story**?',
        '**Example:** David and Goliath',
        '❌ **Bad reading:** "Face your giants with courage!" (moralistic)',
        '✅ **Better reading:** God delivers His people through an unlikely savior (points to Christ)',
        '**Remember:** Biblical characters are **flawed humans**, not moral exemplars in every action.'
      ]
    },
    {
      type: 'content',
      title: 'Reading Poetry and Wisdom',
      content: [
        '**Poetry uses parallelism, metaphor, and emotion:**',
        '• Psalm 137:9 - "Blessed is he who dashes your little ones against the rocks"',
        '• This is **imprecatory poetry** (expressing rage against enemies), not a command',
        '**Proverbs are general principles, not absolute promises:**',
        '• "Train up a child in the way he should go, and when he is old he will not depart from it" (Prov 22:6)',
        '• This is **general wisdom**, not a guarantee—godly parents can have wayward children',
        '**Wisdom literature reflects on life experience:**',
        '• Job: Wrestling with suffering',
        '• Ecclesiastes: Life "under the sun" without God feels meaningless',
        '**Read poetry for its emotional and theological depth, not as wooden promises.**'
      ]
    },
    {
      type: 'content',
      title: 'Reading Apocalyptic Literature',
      content: [
        '**Apocalyptic = Highly symbolic visions of spiritual warfare and God\'s victory**',
        '**Characteristics:**',
        '• Vivid imagery (beasts, numbers, cosmic upheaval)',
        '• Symbolic language (not literal physical description)',
        '• Encouragement for persecuted believers',
        '**Example:** Revelation\'s beasts',
        '• Seven-headed beast = Roman Empire/evil kingdoms',
        '• 666 = Symbolic of imperfection (not a credit card barcode)',
        '• Dragon = Satan',
        '**Interpretation debates:**',
        '• Preterist: Mostly fulfilled in 1st century',
        '• Historicist: Unfolding through church history',
        '• Futurist: Mostly still future',
        '• Idealist: Symbolic of ongoing spiritual realities',
        '**All agree:** Christ wins, evil loses, persevere in faith!'
      ]
    },
    {
      type: 'matching',
      title: 'Match Genres and Reading Approach',
      pairs: [
        { term: 'Narrative', definition: 'Read as descriptive, not always prescriptive' },
        { term: 'Poetry', definition: 'Read for emotion and metaphor, not literal facts' },
        { term: 'Proverbs', definition: 'General wisdom, not absolute guarantees' },
        { term: 'Apocalyptic', definition: 'Symbolic visions with rich imagery' }
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You understand how genre affects interpretation! Read each type of biblical literature appropriately.',
      keyTakeaways: [
        'The Bible contains multiple genres requiring different reading strategies',
        'Narrative is descriptive (what happened) not always prescriptive (what should happen)',
        'Poetry and wisdom use metaphor and general principles, not literal guarantees',
        'Apocalyptic literature uses rich symbolism to encourage persecuted believers',
        'Always ask: What type of literature am I reading?'
      ],
      badge: { icon: '📚', name: 'Genre Expert', description: 'Completed Lesson 37: Genre Matters' }
    }
  ]
};

export const lesson38Data = {
  id: 38,
  title: "Orthodox Interpretation Principles",
  subtitle: "Reading with the historic church",
  duration: "7 min",
  cards: [
    {
      type: 'content',
      title: 'Orthodox Interpretation Principles',
      content: [
        '**"Orthodox"** means **"right belief"**—what Christians have believed everywhere, always, by all.',
        'While Christians disagree on secondary issues, there are **interpretive principles** the historic church has affirmed.',
        'These guardrails help us avoid **fringe interpretations** and heresy.',
        'Let\'s explore the principles that guide faithful biblical interpretation.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'The Rule of Faith (Regula Fidei)',
      content: [
        'The **Rule of Faith** = The core of apostolic teaching passed down and summarized in creeds.',
        '**Key doctrines from the Rule of Faith:**',
        '✅ One God in three persons (Trinity)',
        '✅ Jesus is fully God and fully human',
        '✅ Salvation by grace through faith',
        '✅ Jesus\' death, resurrection, and return',
        '✅ The inspiration and authority of Scripture',
        '**How it guides interpretation:**',
        '• No interpretation should contradict these core truths',
        '• If your reading of a verse denies the Trinity, you\'re misreading it',
        '• The **Apostles\' Creed** and **Nicene Creed** summarize the Rule of Faith',
        '**This isn\'t adding to Scripture—it\'s recognizing Scripture\'s clear core message.**'
      ]
    },
    {
      type: 'quiz',
      question: 'What is the "Rule of Faith"?',
      options: ['A specific verse to memorize', 'The core apostolic teaching summarized in historic creeds', 'A denominational statement', 'The Ten Commandments'],
      correctAnswer: 1,
      explanation: 'The Rule of Faith is the core of apostolic teaching—the essential Christian doctrines summarized in creeds like the Apostles\' Creed and Nicene Creed, passed down from the early church.'
    },
    {
      type: 'content',
      title: 'Christological Interpretation',
      content: [
        '**All Scripture points to Jesus Christ.**',
        'Jesus said, "The Scriptures... testify about me" (John 5:39)',
        'After His resurrection, Jesus showed how **all the Old Testament** pointed to Him (Luke 24:27)',
        '**Christological reading:**',
        '• Old Testament: Anticipates Christ (types, prophecies, longing)',
        '• Gospels: Present Christ (His life, death, resurrection)',
        '• Epistles: Explain Christ (theology and application)',
        '• Revelation: Consummates Christ (His victory and return)',
        '**Balance:** Don\'t force Christ into every detail (hyper-allegorizing), but recognize the **unified storyline** of redemption.',
        '**Example:** Sacrificial system → Christ our perfect sacrifice',
        'The Bible isn\'t a collection of random moral lessons—it\'s **one story of God\'s rescue through Jesus**.'
      ]
    },
    {
      type: 'content',
      title: 'The Analogy of Faith',
      content: [
        '**Analogy of Faith** = Scripture interprets Scripture; let clear texts inform unclear ones.',
        '**Principle:** Interpret **obscure passages** in light of **clear passages**.',
        '**Example:** Water baptism for the dead (1 Cor 15:29)',
        '• This **one obscure verse** has confused interpreters for centuries',
        '• Don\'t build a doctrine on it!',
        '• The **clear teaching** throughout Scripture: Baptism is for living believers',
        '**Another example:** "Judge not" (Matthew 7:1)',
        '• Out of context: Christians should never make moral judgments',
        '• In context + other Scripture: Don\'t be hypocritical; do practice discernment (John 7:24, 1 Cor 5)',
        '**Rule:** Major on the majors. Don\'t build theology on isolated or unclear verses.'
      ]
    },
    {
      type: 'content',
      title: 'Church History as Guide',
      content: [
        '**We\'re not the first to read the Bible.**',
        '2,000 years of faithful Christians have wrestled with these texts.',
        '**Benefits of reading with church history:**',
        '✅ Avoid "new" interpretations that are actually old heresies',
        '✅ Learn from giants (Augustine, Aquinas, Luther, Calvin, Wesley)',
        '✅ See how the church has handled disputed passages',
        '✅ Gain humility—you probably aren\'t smarter than Athanasius',
        '**Vincent of Lérins (5th century):** "That which has been believed everywhere, always, and by all"',
        '**Balance:** History isn\'t infallible (only Scripture is), but it\'s **wise** to learn from it.',
        'If your interpretation is **brand new**, be suspicious. The Holy Spirit has been guiding the church for millennia.'
      ]
    },
    {
      type: 'matching',
      title: 'Match Orthodox Principles',
      pairs: [
        { term: 'Rule of Faith', definition: 'Core apostolic teaching summarized in creeds' },
        { term: 'Christological Reading', definition: 'All Scripture points to Christ' },
        { term: 'Analogy of Faith', definition: 'Scripture interprets Scripture; clear texts guide unclear' },
        { term: 'Church Tradition', definition: 'Learn from 2,000 years of faithful interpretation' }
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You understand orthodox interpretation principles! Read with the wisdom of the historic church.',
      keyTakeaways: [
        'The Rule of Faith guides interpretation with core apostolic doctrines',
        'All Scripture points to Jesus Christ—read with Him as the center',
        'Scripture interprets Scripture—let clear passages guide unclear ones',
        'Learn from church history; avoid brand new interpretations',
        'Orthodox principles protect against fringe readings and heresy'
      ],
      badge: { icon: '⚓', name: 'Orthodox Interpreter', description: 'Completed Lesson 38: Orthodox Interpretation Principles' }
    }
  ]
};

export const lesson39Data = {
  id: 39,
  title: "Spotting Fringe Interpretations",
  subtitle: "Red flags in biblical interpretation",
  duration: "7 min",
  cards: [
    {
      type: 'content',
      title: 'Spotting Fringe Interpretations',
      content: [
        'Not all biblical interpretations are created equal.',
        'Some readings are **clearly wrong**, leading people into error or heresy.',
        '**How can you tell** when an interpretation is **fringe** or dangerous?',
        'Let\'s learn the red flags that signal problematic biblical interpretation.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Red Flag #1: Ignoring Context',
      content: [
        '**The most common error: Proof-texting without context**',
        '🚩 **Example:** Prosperity gospel using Jeremiah 29:11',
        '• "I know the plans I have for you... plans to prosper you"',
        '• **Ignores:** This was to exiled Israel after 70 years, not a personal promise to modern Christians',
        '🚩 **Example:** "I can do all things through Christ" for athletic success',
        '• **Ignores:** Paul is talking about contentment in hardship, not achievement',
        '**How to spot it:**',
        '• Is the verse lifted from its chapter?',
        '• Does it contradict the passage\'s main point?',
        '• Would the original audience understand it this way?',
        '**Defense:** Always read the surrounding context before applying a verse.'
      ]
    },
    {
      type: 'quiz',
      question: 'What is the biggest red flag of fringe interpretation?',
      options: ['Using old Bible translations', 'Quoting verses out of context', 'Disagreeing with your denomination', 'Reading the Old Testament'],
      correctAnswer: 1,
      explanation: 'The most common error in fringe interpretation is proof-texting—quoting verses out of context to support a predetermined conclusion rather than reading Scripture faithfully.'
    },
    {
      type: 'content',
      title: 'Red Flag #2: Secret Knowledge',
      content: [
        '🚩 **Claims of special revelation or hidden meanings**',
        '**Gnosticism ancient and modern:** "The true meaning is hidden from ordinary believers"',
        '**Examples:**',
        '• "God revealed to me the Bible codes"',
        '• "The real meaning of this passage is [completely unrelated allegory]"',
        '• "I have special insight no one else has"',
        '**Biblical response:**',
        '• The gospel is public and clear (Mark 4:22)',
        '• Scripture is sufficient (2 Tim 3:16-17)',
        '• Test everything by Scripture (Acts 17:11)',
        '**Legitimate mysteries exist** (Trinity, incarnation), but the **core gospel is plain**.',
        '**Defense:** Be wary of teachers claiming special insider knowledge unavailable to ordinary Bible readers.'
      ]
    },
    {
      type: 'content',
      title: 'Red Flag #3: Novelty',
      content: [
        '🚩 **"No one has ever seen this before!"**',
        'If your interpretation is **brand new**, that\'s a **major red flag**.',
        '**Why novelty matters:**',
        '• The Holy Spirit has guided the church for 2,000 years',
        '• If no faithful Christian ever saw this before, you\'re probably wrong',
        '**Examples of novel errors:**',
        '• Jehovah\'s Witnesses: Jesus is created, not eternal',
        '• Mormonism: Humans can become gods',
        '• Prosperity gospel: God wants all Christians wealthy',
        '**These were all "new revelations" contradicting historic Christianity**',
        '**Legitimate development of doctrine exists**, but it **deepens** existing truth rather than inventing new doctrines.',
        '**Defense:** If your view contradicts the Apostles\' Creed or Nicene Creed, you\'re wrong.'
      ]
    },
    {
      type: 'content',
      title: 'Red Flag #4: Contradicting Core Doctrines',
      content: [
        '🚩 **Denying essential Christian beliefs**',
        '**Non-negotiable doctrines (from creeds):**',
        '✅ Trinity (one God, three persons)',
        '✅ Jesus is fully God and fully human',
        '✅ Salvation by grace through faith',
        '✅ Jesus\' bodily resurrection',
        '✅ Jesus\' return',
        '**Fringe teachings that contradict essentials:**',
        '• Modalism: God is one person wearing three masks',
        '• Arianism: Jesus is a created being',
        '• Works-righteousness: We earn salvation',
        '• Denial of resurrection',
        '**If an interpretation contradicts these, it\'s not just "fringe"—it\'s heresy.**',
        '**Defense:** Know the creeds. They summarize essential Christianity.'
      ]
    },
    {
      type: 'content',
      title: 'Red Flag #5: Isolating Obscure Verses',
      content: [
        '🚩 **Building major doctrines on unclear passages**',
        '**Principle:** Major on the majors; don\'t base theology on isolated verses.',
        '**Examples:**',
        '• Baptism for the dead (1 Cor 15:29) - one obscure verse',
        '• Snake handling (Mark 16:18) - disputed ending of Mark',
        '• "Soul sleep" from limited references',
        '**Better approach:**',
        '• Build theology on **clear, repeated teachings**',
        '• Use **obscure verses** to nuance, not establish, doctrine',
        '• When texts seem to conflict, prefer the **clear majority**',
        '**Example of clear, repeated teaching:**',
        '• Justification by faith (Romans, Galatians, Ephesians—consistent)',
        '**Defense:** If you can only support your view with one or two obscure verses, reconsider.'
      ]
    },
    {
      type: 'matching',
      title: 'Match Red Flags',
      pairs: [
        { term: 'Ignoring Context', definition: 'Proof-texting verses without surrounding passage' },
        { term: 'Secret Knowledge', definition: 'Claiming hidden meanings only you can see' },
        { term: 'Novelty', definition: 'Brand new interpretation never seen before' },
        { term: 'Isolating Verses', definition: 'Building doctrine on one obscure passage' }
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You can now spot fringe interpretations! Use these red flags to discern faithful teaching.',
      keyTakeaways: [
        'Red flags: Ignoring context, claiming secret knowledge, novelty, contradicting core doctrines',
        'Test interpretations against Scripture, historic creeds, and church consensus',
        'Build doctrine on clear, repeated teachings, not isolated obscure verses',
        'Be especially wary of "new revelations" that contradict historic Christianity',
        'Know the creeds—they protect against heresy'
      ],
      badge: { icon: '🚩', name: 'Discernment Guard', description: 'Completed Lesson 39: Spotting Fringe Interpretations' }
    }
  ]
};

export const lesson40Data = {
  id: 40,
  title: "Becoming a Better Interpreter",
  subtitle: "Practical steps for faithful Bible reading",
  duration: "6 min",
  cards: [
    {
      type: 'content',
      title: 'Becoming a Better Interpreter',
      content: [
        'Biblical interpretation is both an **art and a science**.',
        'It requires **skills, tools, humility, and the Holy Spirit\'s guidance**.',
        'The goal isn\'t to become a professional scholar—it\'s to **read faithfully** and **grow in Christ**.',
        'Let\'s explore practical steps to become a better interpreter of God\'s Word.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Build Your Interpretation Toolkit',
      content: [
        '**Essential tools for better interpretation:**',
        '📖 **Study Bible:** Good notes explaining context (ESV Study, NIV Study, CSB Study)',
        '📚 **Multiple Translations:** Compare formal (ESV, NASB) and dynamic (NIV, NLT)',
        '📝 **Bible Dictionary:** Explains words, places, concepts (IVP Bible Dictionary)',
        '🗺️ **Bible Atlas:** Visualize geography and historical context',
        '💬 **Concordance:** Find all uses of a word (Strong\'s, online tools)',
        '📖 **Commentaries:** Learn from scholars (Tyndale, NIV Application Commentary)',
        '💻 **Digital Tools:** Logos, Accordance, Bible Gateway, Blue Letter Bible',
        '**You don\'t need all of these immediately—start with a study Bible and add tools over time.**'
      ]
    },
    {
      type: 'quiz',
      question: 'What is the most essential tool for better biblical interpretation?',
      options: ['Expensive software', 'A good study Bible with notes and context', 'Seminary degree', 'Knowledge of Greek and Hebrew'],
      correctAnswer: 1,
      explanation: 'While many tools are helpful, a good study Bible with introductions, notes, and cross-references is the most accessible and essential tool for faithful interpretation.'
    },
    {
      type: 'content',
      title: 'Develop Good Reading Habits',
      content: [
        '**Practical habits for better interpretation:**',
        '1️⃣ **Read whole books:** Don\'t just hop around verses',
        '2️⃣ **Read multiple times:** First for overview, then for details',
        '3️⃣ **Ask questions:** Who? What? When? Where? Why? How?',
        '4️⃣ **Note repeated themes:** What ideas keep showing up?',
        '5️⃣ **Observe before interpreting:** What does it **say** before what does it **mean**?',
        '6️⃣ **Compare translations:** See how different versions handle difficult passages',
        '7️⃣ **Journal insights:** Write down observations and questions',
        '8️⃣ **Pray for illumination:** Ask the Holy Spirit to guide understanding',
        '**Reading plan suggestion:** Read through entire books systematically rather than random verse-hopping.'
      ]
    },
    {
      type: 'content',
      title: 'Learn from Others',
      content: [
        '**You don\'t have to interpret alone:**',
        '👥 **Bible study groups:** Discuss and learn together',
        '⛪ **Faithful teachers:** Sit under solid biblical preaching',
        '📚 **Read commentaries:** Learn from scholars and church history',
        '🎓 **Take classes:** Many churches offer Bible study methods courses',
        '💻 **Online resources:** Tim Keller sermons, The Bible Project videos, Gospel Coalition articles',
        '**Balance:** Learn from teachers but **always test everything** by Scripture (Acts 17:11).',
        '**Warning:** Avoid teachers who display the red flags from Lesson 39',
        '**Humility:** You\'re not smarter than 2,000 years of faithful Christians—learn from them!'
      ]
    },
    {
      type: 'content',
      title: 'Cultivate Interpretive Virtues',
      content: [
        '**Good interpretation requires character, not just skills:**',
        '🙏 **Humility:** "I could be wrong; God\'s Word is bigger than my understanding"',
        '❤️ **Love:** Interpret with charity toward others, especially those who disagree',
        '📖 **Submission:** Let Scripture shape you, not vice versa',
        '🕊️ **Spirit-dependence:** Pray for illumination (Psalm 119:18)',
        '⚖️ **Fairness:** Represent opposing views accurately before critiquing',
        '🎯 **Purpose:** Interpretation aims at **knowing and obeying God**, not winning arguments',
        '**Transformation, not just information:**',
        'The goal isn\'t to **master** the Bible but to let the Bible **master you**.',
        'Good interpretation leads to **worship, obedience, and Christlikeness**.'
      ]
    },
    {
      type: 'content',
      title: 'Your Interpretation Action Plan',
      content: [
        '**Put these lessons into practice:**',
        '✅ **Get a study Bible** if you don\'t have one',
        '✅ **Pick a book to read through** (start with a Gospel or an epistle)',
        '✅ **Ask context questions:** Who wrote this? To whom? Why?',
        '✅ **Note the genre:** How should I read this type of literature?',
        '✅ **Compare translations** for difficult passages',
        '✅ **Consult a commentary** when stuck',
        '✅ **Discuss with others** in Bible study',
        '✅ **Pray for wisdom** and humble heart',
        '✅ **Apply what you learn** in obedience',
        '**Remember:** The goal is to **hear God speak** and **respond in faith**.',
        '**Interpretation isn\'t an end—it\'s a means to knowing and loving Jesus more.**'
      ]
    },
    {
      type: 'completion',
      title: 'Path Complete! 🎉🏆',
      message: 'Congratulations! You\'ve mastered Biblical Interpretation principles! Now read God\'s Word with wisdom and humility.',
      keyTakeaways: [
        'Build your toolkit: Study Bible, multiple translations, commentaries, digital tools',
        'Develop good habits: Read whole books, ask questions, observe carefully',
        'Learn from others: Bible study groups, faithful teachers, church history',
        'Cultivate virtues: Humility, love, submission to Scripture, Spirit-dependence',
        'Goal: Transformation through hearing and obeying God\'s Word'
      ],
      badge: { icon: '🏆', name: 'Biblical Interpretation Master', description: 'Completed ALL 8 Lessons: Biblical Interpretation Path' }
    }
  ]
};

// Lessons 41-48 for Councils & Worship Path

export const lesson41Data = {
  id: 41,
  title: "What Happened at Nicaea (and What Didn't)",
  subtitle: "Separating history from Dan Brown fiction",
  duration: "8 min",
  cards: [
    {
      type: 'content',
      title: 'What Happened at Nicaea',
      subtitle: '⏱️ About 8 minutes',
      content: [
        '**Learning Objective:** Understand what really happened at the Council of Nicaea and correct popular misconceptions.',
        'The **Council of Nicaea (325 AD)** is one of the most important events in church history.',
        'It\'s also one of the **most misunderstood**, thanks to conspiracy theories and pop culture.',
        '**Dan Brown\'s "The Da Vinci Code"** spread massive misinformation about Nicaea.',
        'Let\'s separate **fact from fiction** and learn what really happened.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'The Arian Controversy',
      content: [
        '**Why Nicaea was called:**',
        '**Arius**, a priest in Alexandria, taught that Jesus was **created** by the Father—not eternal, not fully divine.',
        '• "There was a time when the Son was not"',
        '• Jesus was the **highest created being**, but not God',
        'This threatened the **core of Christianity**: If Jesus isn\'t God, He can\'t save us.',
        '**Athanasius** and others argued Jesus is **fully God**, eternally begotten, not created.',
        '**Emperor Constantine** called bishops from across the Roman Empire to settle the dispute.',
        '**About 300 bishops** attended (mostly from the East, travel was difficult for Western bishops).',
        'This was the first **ecumenical (universal) council** of the church.'
      ]
    },
    {
      type: 'quiz',
      question: 'What was the main issue debated at the Council of Nicaea?',
      options: ['Which books belong in the Bible', 'Whether Jesus was fully divine or a created being', 'The date of Easter', 'Whether Constantine should be emperor'],
      correctAnswer: 1,
      explanation: 'The Council of Nicaea addressed the Arian controversy—whether Jesus was fully God (eternal) or a created being. The canon debate happened later.'
    },
    {
      type: 'content',
      title: 'What Nicaea DID Do',
      content: [
        '✅ **Affirmed Jesus is fully God:** "True God from true God, begotten not made, of one substance with the Father"',
        '✅ **Condemned Arianism:** Declared it heresy',
        '✅ **Produced the Nicene Creed (original version):** Summary of orthodox Christian belief',
        '✅ **Set the date of Easter:** Resolved disputes about when to celebrate',
        '✅ **Addressed church organization:** Recognized authority of major bishops',
        '**The key phrase:** **"Homoousios"** (same substance) - Jesus shares the **same divine essence** as the Father.',
        '**Arius was exiled** (though Arianism continued for centuries, especially among Germanic tribes).',
        'The creed was later expanded at Constantinople (381 AD) into the version we use today.'
      ]
    },
    {
      type: 'content',
      title: 'What Nicaea Did NOT Do',
      content: [
        '**Popular myths debunked:**',
        '❌ **MYTH:** "Nicaea decided which books go in the Bible"',
        '✅ **TRUTH:** The canon wasn\'t formally addressed. Most NT books were already widely accepted; debates continued until later councils.',
        '❌ **MYTH:** "Constantine invented Christianity or changed the Bible"',
        '✅ **TRUTH:** Constantine called the council but didn\'t control theology. Bishops debated; he enforced the decision.',
        '❌ **MYTH:** "Jesus\' divinity was a close vote"',
        '✅ **TRUTH:** Only 2 bishops sided with Arius at the end. The divinity of Christ was overwhelmingly affirmed.',
        '❌ **MYTH:** "Alternative Christianities were suppressed"',
        '✅ **TRUTH:** Arianism was rejected because it contradicted apostolic teaching, not political convenience.',
        '**The Da Vinci Code is fiction, not history!**'
      ]
    },
    {
      type: 'matching',
      title: 'Match Nicaea Facts',
      pairs: [
        { term: 'Arius', definition: 'Taught Jesus was a created being, not fully God' },
        { term: 'Athanasius', definition: 'Defended Jesus as fully divine, eternally begotten' },
        { term: 'Homoousios', definition: 'Greek term meaning "same substance" with the Father' },
        { term: 'Nicene Creed', definition: 'Statement of orthodox Christian belief about Trinity' }
      ]
    },
    {
      type: 'content',
      title: 'Why Nicaea Still Matters',
      content: [
        '**Nicaea established the foundation for orthodox Christology:**',
        '✅ **Jesus is fully God and fully human**',
        '✅ **He existed eternally with the Father**',
        '✅ **He is "of one substance" with the Father**',
        '**This isn\'t arbitrary theological nitpicking—it\'s essential:**',
        '• Only God can save us from sin',
        '• If Jesus isn\'t God, the cross doesn\'t reconcile us to God',
        '• If Jesus isn\'t human, He doesn\'t represent us',
        '**The Nicene Creed unites Christians across centuries and traditions:**',
        '• Catholics, Orthodox, and Protestants all affirm it',
        '• It\'s recited in worship services worldwide',
        '**When you say the creed, you stand with Athanasius and 300 bishops defending the faith.**'
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You understand what really happened at Nicaea! Defend the faith with historical accuracy.',
      keyTakeaways: [
        'Nicaea addressed whether Jesus was fully God or a created being',
        'The council affirmed Jesus is "of one substance with the Father" (Homoousios)',
        'Myths: Nicaea did NOT vote on the Bible canon or barely affirm Jesus\' divinity',
        'The Nicene Creed unites Christians across denominations and centuries',
        'Nicaea matters because Jesus\' full divinity is essential for salvation'
      ],
      badge: { icon: '⛪', name: 'Nicaea Historian', description: 'Completed Lesson 41: What Happened at Nicaea' }
    }
  ]
};

export const lesson42Data = {
  id: 42,
  title: "The First Seven Ecumenical Councils",
  subtitle: "How the early church defined orthodoxy",
  duration: "8 min",
  cards: [
    {
      type: 'content',
      title: 'The First Seven Ecumenical Councils',
      content: [
        'The early church faced **major theological crises**—heresies threatening the gospel.',
        'To address these, bishops gathered in **ecumenical (universal) councils**.',
        '**The first seven councils** (325-787 AD) are recognized by Catholics, Orthodox, and most Protestants.',
        'These councils **clarified doctrine** rather than inventing it—defending apostolic teaching.',
        'Let\'s walk through these seven councils and what they decided.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'The Seven Councils Overview',
      content: [
        '**1. Nicaea I (325):** Jesus is fully divine, not created',
        '**2. Constantinople I (381):** The Holy Spirit is fully divine; finalized Nicene Creed',
        '**3. Ephesus (431):** Jesus is one person with two natures (divine and human)',
        '**4. Chalcedon (451):** Jesus is fully God and fully human, two natures in one person',
        '**5. Constantinople II (553):** Clarified Chalcedon, addressed Nestorianism',
        '**6. Constantinople III (680-681):** Jesus has two wills (divine and human)',
        '**7. Nicaea II (787):** Icons are permissible for veneration, not worship',
        '**Common theme:** Defending the **full deity and full humanity of Christ**.',
        'Councils responded to **heresies** that threatened the gospel.'
      ]
    },
    {
      type: 'quiz',
      question: 'How many ecumenical councils are recognized by most Christians (Catholic, Orthodox, Protestant)?',
      options: ['Three', 'Five', 'Seven', 'Twelve'],
      correctAnswer: 2,
      explanation: 'The first seven ecumenical councils (325-787 AD) are recognized by Catholics, Orthodox, and most Protestants as authoritative for defining core Christian doctrine.'
    },
    {
      type: 'content',
      title: 'Constantinople I (381) - The Holy Spirit',
      content: [
        '**Issue:** Some denied the **full divinity of the Holy Spirit**.',
        '**Decision:** The Holy Spirit is **fully God**, "the Lord, the giver of life, who proceeds from the Father"',
        '**Added to Nicene Creed:** Expanded section on the Holy Spirit',
        '**"Filioque" controversy:** Later, Western church added "and the Son" (filioque)',
        '• Western: Spirit proceeds from Father **and Son**',
        '• Eastern: Spirit proceeds from Father **alone**',
        '• This became a major issue in the East-West split (1054)',
        '**Why it matters:** Completes the doctrine of the **Trinity**—one God in three persons, all fully divine.',
        'Father, Son, and Holy Spirit are **co-equal and co-eternal**.'
      ]
    },
    {
      type: 'content',
      title: 'Ephesus (431) & Chalcedon (451) - Christology',
      content: [
        '**Ephesus (431):**',
        '• **Issue:** Nestorius taught Jesus had **two separate persons** (divine and human)',
        '• **Decision:** Jesus is **one person** with two natures',
        '• **Mary as "Theotokos"** (God-bearer) affirmed—she bore God the Son',
        '**Chalcedon (451):**',
        '• **Issue:** Monophysites taught Jesus had only **one nature** (divine absorbed human)',
        '• **Decision:** Jesus is **one person in two natures**—fully God and fully human',
        '• **"Without confusion, without change, without division, without separation"**',
        '**The Chalcedonian Definition** is the gold standard for orthodox Christology.',
        '**Why it matters:** Jesus must be **fully God** (to save us) and **fully human** (to represent us).'
      ]
    },
    {
      type: 'content',
      title: 'Why Councils Matter Today',
      content: [
        '**These councils protect the gospel:**',
        '✅ **Jesus is fully God** - He can reconcile us to God',
        '✅ **Jesus is fully human** - He can represent us as our High Priest',
        '✅ **The Trinity is biblical** - Father, Son, and Spirit are all fully divine',
        '✅ **One person, two natures** - Jesus doesn\'t have split personality; He\'s the God-man',
        '**Modern relevance:**',
        '• Jehovah\'s Witnesses deny Jesus\' divinity (like Arius)',
        '• Oneness Pentecostals deny the Trinity (like Sabellius/modalism)',
        '• Some liberals deny Jesus\' humanity or divinity',
        '**The councils give us a measuring stick for orthodoxy.**',
        'If a teaching contradicts these councils, it\'s not historic Christianity.'
      ]
    },
    {
      type: 'matching',
      title: 'Match Councils and Issues',
      pairs: [
        { term: 'Nicaea I (325)', definition: 'Jesus is fully divine, not created' },
        { term: 'Constantinople I (381)', definition: 'Holy Spirit is fully divine' },
        { term: 'Chalcedon (451)', definition: 'Jesus is one person in two natures' },
        { term: 'Nicaea II (787)', definition: 'Icons are permissible for veneration' }
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You understand the seven ecumenical councils! These defend the core of Christian faith.',
      keyTakeaways: [
        'Seven ecumenical councils (325-787) defined core Christian doctrine',
        'Main focus: Clarifying the Trinity and Christology (Jesus as God and human)',
        'Councils responded to heresies threatening the gospel',
        'Chalcedon (451) gave the definitive statement: Jesus is one person in two natures',
        'These councils still guide orthodoxy today against modern errors'
      ],
      badge: { icon: '🏛️', name: 'Councils Scholar', description: 'Completed Lesson 42: The Seven Ecumenical Councils' }
    }
  ]
};

export const lesson43Data = {
  id: 43,
  title: "Council of Chalcedon and Christology",
  subtitle: "How Jesus can be fully God and fully human",
  duration: "7 min",
  cards: [
    {
      type: 'content',
      title: 'Chalcedon and Christology',
      content: [
        'The **Council of Chalcedon (451 AD)** produced the most important statement about **who Jesus is**.',
        '**Christology** = The study of the person and nature of Christ.',
        'Chalcedon answered: **How can Jesus be both fully God and fully human?**',
        'This isn\'t abstract theology—it\'s the **heart of the gospel**.',
        'Let\'s explore the Chalcedonian Definition and why it matters.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'The Heresies Chalcedon Rejected',
      content: [
        '**Chalcedon responded to errors on both sides:**',
        '❌ **Nestorianism:** Jesus is **two persons**',
        '• Divine nature and human nature are separate persons sharing one body',
        '• Problem: This splits Jesus in two—there\'s no real God-man',
        '❌ **Eutychianism/Monophysitism:** Jesus has only **one nature**',
        '• Divine nature absorbed the human, creating a **hybrid** (neither fully God nor fully human)',
        '• Problem: Jesus isn\'t really human; He just looks human',
        '**Both errors destroy the gospel:**',
        '• If Jesus isn\'t fully human, He can\'t represent us',
        '• If Jesus isn\'t fully God, He can\'t save us',
        'Chalcedon charted the **narrow path** between these errors.'
      ]
    },
    {
      type: 'quiz',
      question: 'According to Chalcedon, how many natures does Jesus have?',
      options: ['One nature (divine)', 'One hybrid nature (divine-human mix)', 'Two natures (divine and human)', 'Three natures'],
      correctAnswer: 2,
      explanation: 'Chalcedon affirmed Jesus has two distinct natures—fully divine and fully human—united in one person without confusion, change, division, or separation.'
    },
    {
      type: 'content',
      title: 'The Chalcedonian Definition',
      content: [
        '**The famous formula:**',
        '"We confess **one and the same Son**, our Lord Jesus Christ,',
        'the same **perfect in Godhead** and **perfect in manhood**,',
        'truly God and truly man...',
        'to be acknowledged in **two natures**,',
        '**without confusion, without change, without division, without separation**."',
        '**Breaking it down:**',
        '✅ **One person** (not two personalities)',
        '✅ **Two natures** (fully divine, fully human)',
        '✅ **Without confusion** (natures aren\'t mixed into a hybrid)',
        '✅ **Without change** (divine nature doesn\'t become human; human doesn\'t become divine)',
        '✅ **Without division** (Jesus isn\'t split in two)',
        '✅ **Without separation** (natures are permanently united)'
      ]
    },
    {
      type: 'content',
      title: 'What This Means Practically',
      content: [
        '**Jesus\' two natures in action:**',
        '**As God:**',
        '• Jesus forgives sins (only God can do this)',
        '• Jesus calms storms (exercises divine power)',
        '• Jesus knows human hearts (omniscience)',
        '**As Human:**',
        '• Jesus gets hungry and tired',
        '• Jesus weeps and feels emotions',
        '• Jesus grows in wisdom (Luke 2:52)',
        '• Jesus dies physically',
        '**The union:**',
        '• When Jesus died, **God died** (Acts 20:28 - "the church of God, which he obtained with his own blood")',
        '• When Jesus was resurrected, **our humanity was glorified**',
        '**Mystery:** We can\'t fully explain **how** the union works, but Chalcedon defines **what** is true.'
      ]
    },
    {
      type: 'content',
      title: 'Why Chalcedon Still Matters',
      content: [
        '**Salvation depends on Chalcedonian Christology:**',
        '**1. Atonement:**',
        '• As **God**, Jesus\' sacrifice has infinite worth',
        '• As **human**, Jesus represents us before the Father',
        '**2. Mediation:**',
        '• Only a God-man can mediate between God and humanity (1 Tim 2:5)',
        '**3. Resurrection:**',
        '• Jesus conquered death with divine power',
        '• He did it **in human flesh**, guaranteeing our resurrection',
        '**Modern errors Chalcedon guards against:**',
        '• Jehovah\'s Witnesses: Jesus is only a created being (denies divinity)',
        '• Some liberals: Jesus is just a great moral teacher (denies divinity)',
        '• Docetism (ancient and modern): Jesus only appeared human (denies full humanity)',
        '**Chalcedon isn\'t optional theology—it\'s the gospel.**'
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You understand Chalcedonian Christology! Jesus is one person in two natures—fully God and fully human.',
      keyTakeaways: [
        'Chalcedon (451) defined orthodox Christology: Jesus is one person in two natures',
        'Two natures without confusion, change, division, or separation',
        'Jesus is fully God (can save us) and fully human (can represent us)',
        'This isn\'t abstract theology—it\'s essential for salvation and atonement',
        'Chalcedon guards against ancient and modern errors about Jesus\' identity'
      ],
      badge: { icon: '✝️', name: 'Christology Expert', description: 'Completed Lesson 43: Chalcedon and Christology' }
    }
  ]
};

export const lesson44Data = {
  id: 44,
  title: "From Sabbath Saturday to Sunday Worship",
  subtitle: "How and why Christians changed the day of worship",
  duration: "7 min",
  cards: [
    {
      type: 'content',
      title: 'From Saturday to Sunday Worship',
      content: [
        'Jews worshiped on **Saturday (Sabbath)**, the seventh day.',
        'Christians worship on **Sunday**, the first day of the week.',
        '**Why did this change happen? Was it biblical or a later corruption?**',
        'Some groups (Seventh-day Adventists) say Sunday worship is **apostasy**.',
        'Let\'s examine **the biblical and historical evidence** for Sunday worship.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'The Sabbath in the Old Testament',
      content: [
        '**Sabbath (Saturday) was the seventh day:**',
        '• Commanded in the Ten Commandments (Exodus 20:8-11)',
        '• Day of rest commemorating creation',
        '• Sign of God\'s covenant with Israel (Exodus 31:13)',
        '**Sabbath regulations:**',
        '• No work allowed',
        '• Violators faced death penalty (Numbers 15:32-36)',
        '• Symbolic of rest in the Promised Land',
        '**Was Sabbath universal or specifically for Israel?**',
        '• Genesis 2:2-3: God rested on the seventh day (pre-Sinai)',
        '• But no command to observe it until Moses',
        '• Sabbath was a **covenant sign** for Israel specifically',
        '**Key question:** Did Jesus or the apostles command Sabbath-keeping for Christians?'
      ]
    },
    {
      type: 'quiz',
      question: 'When did Christians first start gathering on Sunday instead of Saturday?',
      options: ['300s AD when Constantine legalized Christianity', 'Apostolic era—as early as the resurrection', '1000 AD during the Middle Ages', '1500s during the Reformation'],
      correctAnswer: 1,
      explanation: 'The New Testament shows early Christians gathering on Sunday (Acts 20:7, 1 Cor 16:2), and early church writings confirm Sunday worship from the apostolic era onward.'
    },
    {
      type: 'content',
      title: 'Sunday in the New Testament',
      content: [
        '**Biblical evidence for Sunday worship:**',
        '📖 **Resurrection day:** Jesus rose on the **first day of the week** (Sunday) - Matthew 28:1',
        '📖 **Pentecost:** The Holy Spirit came 50 days after Passover, landing on a **Sunday**',
        '📖 **Acts 20:7:** "On the first day of the week, we came together to break bread"',
        '📖 **1 Corinthians 16:2:** "On the first day of every week, each of you is to put something aside" (collection for Jerusalem)',
        '📖 **Revelation 1:10:** John receives his vision on "the Lord\'s Day" (likely Sunday)',
        '**What about Sabbath?**',
        '• Colossians 2:16-17: "Let no one judge you... with regard to a Sabbath day"',
        '• Romans 14:5: "One person esteems one day as better than another, while another esteems all days alike"',
        '• The Sabbath was a **shadow**; Christ is the **substance**',
        '**Early Christians saw Sunday as celebrating the new creation in Christ.**'
      ]
    },
    {
      type: 'content',
      title: 'Historical Evidence',
      content: [
        '**Early church fathers confirm Sunday worship:**',
        '**Ignatius of Antioch (c. 110 AD):**',
        '• "No longer observing the Sabbath, but living in observance of the Lord\'s Day"',
        '**Justin Martyr (c. 150 AD):**',
        '• "On the day called Sunday, all who live in cities or in the country gather together"',
        '• Explains: "Sunday is the day on which we all hold our common assembly, because it is the first day... when God made the world... and Jesus Christ our Savior rose from the dead"',
        '**The Didache (late 1st/early 2nd century):**',
        '• "On the Lord\'s Day, come together and break bread"',
        '**This is within 50-100 years of the apostles—not a late corruption!**',
        'Constantine didn\'t invent Sunday worship; he merely legalized what Christians were already doing.'
      ]
    },
    {
      type: 'content',
      title: 'Theological Significance',
      content: [
        '**Why Sunday matters theologically:**',
        '🌅 **New Creation:** Sunday is the **first day**, symbolizing the new creation in Christ',
        '🌅 **Resurrection Day:** Every Sunday celebrates Christ\'s victory over death',
        '🌅 **Fulfillment:** Christ is our **Sabbath rest** (Hebrews 4:9-10)',
        '• We rest in His finished work, not our own works',
        '🌅 **Freedom:** Christians aren\'t bound by ceremonial law (Colossians 2)',
        '**Seventh-day Adventist critique:**',
        '• Claim Sunday worship is the "mark of the beast"',
        '• Argue Sabbath-keeping is still required',
        '**Response:**',
        '• The New Testament never commands Sabbath observance for Christians',
        '• The apostles gathered on Sunday',
        '• Christ fulfilled the Sabbath; we rest in Him',
        '**Remember:** The day isn\'t the point—**worshiping the risen Christ** is.'
      ]
    },
    {
      type: 'matching',
      title: 'Match Key Events and Days',
      pairs: [
        { term: 'Saturday/Sabbath', definition: 'Seventh day, Old Testament day of rest' },
        { term: 'Sunday/Lord\'s Day', definition: 'First day, resurrection and new creation' },
        { term: 'Acts 20:7', definition: 'Early Christians gathered on first day to break bread' },
        { term: 'Colossians 2:16', definition: 'Don\'t let anyone judge you about Sabbath days' }
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You understand why Christians worship on Sunday! It celebrates Christ\'s resurrection and the new creation.',
      keyTakeaways: [
        'Saturday Sabbath was a covenant sign for Israel in the Old Testament',
        'Jesus rose on Sunday, the first day of the week',
        'Early Christians immediately gathered on Sunday (Acts 20:7, 1 Cor 16:2)',
        'Church fathers confirm Sunday worship from the apostolic era',
        'Sunday worship wasn\'t invented by Constantine—it\'s rooted in the resurrection'
      ],
      badge: { icon: '🌅', name: 'Lord\'s Day Historian', description: 'Completed Lesson 44: Saturday to Sunday Worship' }
    }
  ]
};

export const lesson45Data = {
  id: 45,
  title: "Early Christian Worship Practices",
  subtitle: "What worship looked like in the first centuries",
  duration: "7 min",
  cards: [
    {
      type: 'content',
      title: 'Early Christian Worship Practices',
      content: [
        'What did **early Christian worship** actually look like?',
        'Was it like modern evangelical services? Catholic Mass? Orthodox liturgy?',
        'We have **historical evidence** from the first few centuries showing common patterns.',
        'Understanding early worship helps us see **unity across denominations** and **continuity with the apostles**.',
        'Let\'s explore what happened when the early church gathered.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Elements of Early Worship',
      content: [
        '**Common elements in early Christian gatherings:**',
        '📖 **Scripture Reading:** Old Testament + apostolic writings (letters, Gospels)',
        '🙏 **Prayer:** Corporate prayers, often with set forms',
        '🎵 **Singing:** Psalms and hymns (Colossians 3:16)',
        '💬 **Teaching/Preaching:** Exposition of Scripture',
        '🍞 **Lord\'s Supper/Eucharist:** Breaking bread weekly',
        '💰 **Offerings:** Collection for the poor and church needs',
        '✋ **Baptism:** For new believers',
        '**Structure was simple but reverent:**',
        '• Met in homes (house churches) until persecution eased',
        '• Sunday gatherings, often early morning',
        '• Combination of Word and sacrament'
      ]
    },
    {
      type: 'quiz',
      question: 'What was a central element of early Christian worship gatherings?',
      options: ['Elaborate buildings and cathedrals', 'Weekly celebration of the Lord\'s Supper', 'Professional worship bands', 'Hour-long sermons'],
      correctAnswer: 1,
      explanation: 'Early Christians gathered weekly to celebrate the Lord\'s Supper/Eucharist. This was central to their worship, alongside Scripture reading, prayer, and teaching.'
    },
    {
      type: 'content',
      title: 'The Lord\'s Supper (Eucharist)',
      content: [
        '**The Lord\'s Supper was central to early worship:**',
        '**Names used:**',
        '• Lord\'s Supper (1 Corinthians 11)',
        '• Breaking of Bread (Acts 2:42)',
        '• Eucharist (Greek: thanksgiving)',
        '**Early practice:**',
        '• Celebrated **weekly** (Acts 20:7)',
        '• Originally part of a **fellowship meal (agape feast)**',
        '• Later separated due to abuses (1 Cor 11:17-34)',
        '**Justin Martyr\'s description (c. 150 AD):**',
        '1. Bread and wine are brought',
        '2. President offers prayers and thanksgiving',
        '3. People say "Amen"',
        '4. Elements are distributed to all present',
        '**Views on what it means varied**, but all saw it as **essential, not optional**.'
      ]
    },
    {
      type: 'content',
      title: 'Scripture and Preaching',
      content: [
        '**How early Christians engaged Scripture:**',
        '📖 **Public reading:** Long portions read aloud (most people couldn\'t read)',
        '📖 **Apostolic writings circulated:** Letters passed between churches',
        '📖 **Gospels read:** Accounts of Jesus\' life taught and memorized',
        '📖 **Exposition:** Teacher would explain and apply the text',
        '**Justin Martyr (c. 150 AD) describes a typical service:**',
        '"The memoirs of the apostles or the writings of the prophets are read, as long as time permits;',
        'then, when the reader has finished, the president instructs and exhorts the people to imitate these good things."',
        '**This is remarkably similar to modern Protestant services!**',
        'The pattern: **Read Scripture → Explain Scripture → Apply Scripture**',
        '**Churches recognized apostolic writings as Scripture early on.**'
      ]
    },
    {
      type: 'content',
      title: 'Prayer and Singing',
      content: [
        '**Corporate Prayer:**',
        '• **Lord\'s Prayer** used regularly',
        '• **Set prayers** (some written, some spontaneous)',
        '• **Intercession** for leaders, persecuted, sick',
        '• **Standing posture** common (kneeling for penitence)',
        '**Singing:**',
        '• **Psalms** - Book of Psalms sung',
        '• **Hymns** - Early Christian songs about Christ',
        '• **Spiritual songs** - spontaneous worship',
        '**Earliest Christian hymn fragment (c. 200 AD):**',
        '"Glory to God in the highest,',
        'Peace on earth, goodwill toward men"',
        '**Pliny the Younger (c. 112 AD)** reports Christians "sing hymns to Christ as to a god"',
        'Worship was **participatory**, not performance-driven.'
      ]
    },
    {
      type: 'content',
      title: 'What We Can Learn Today',
      content: [
        '**Lessons from early Christian worship:**',
        '✅ **Word + Sacrament:** Scripture and Lord\'s Supper were both central',
        '✅ **Weekly Communion:** Most early Christians celebrated weekly, not monthly',
        '✅ **Simplicity:** Worship didn\'t require elaborate buildings or programs',
        '✅ **Reverence:** Worship was joyful but serious, not casual entertainment',
        '✅ **Unity:** Core elements were common across different regions',
        '**Modern denominations reflect different emphases:**',
        '• **Catholic/Orthodox:** Emphasize liturgy and Eucharist (continuity with early worship)',
        '• **Protestant/Evangelical:** Emphasize Scripture reading and preaching',
        '• **Pentecostal:** Emphasize spontaneous prayer and Spirit-led worship',
        '**All have roots in early practice—we need balance.**',
        'Worship isn\'t about **style** (contemporary vs. traditional)—it\'s about **substance** (Word, prayer, sacraments).'
      ]
    },
    {
      type: 'matching',
      title: 'Match Early Worship Elements',
      pairs: [
        { term: 'Eucharist', definition: 'Lord\'s Supper, celebrated weekly' },
        { term: 'Scripture Reading', definition: 'Public reading of prophets and apostolic writings' },
        { term: 'Agape Feast', definition: 'Fellowship meal celebrated with communion' },
        { term: 'Didache', definition: 'Early church manual describing worship practices' }
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You understand early Christian worship! Apply these principles in your church context.',
      keyTakeaways: [
        'Early worship included Scripture, prayer, singing, teaching, and Lord\'s Supper',
        'The Eucharist was celebrated weekly, not monthly',
        'Worship was simple, participatory, and reverent',
        'Modern denominations emphasize different aspects of early practice',
        'Core elements: Word and sacrament together, not one without the other'
      ],
      badge: { icon: '⛪', name: 'Early Worship Scholar', description: 'Completed Lesson 45: Early Christian Worship' }
    }
  ]
};

export const lesson46Data = {
  id: 46,
  title: "The Development of the Liturgy",
  subtitle: "From simple gatherings to structured worship",
  duration: "6 min",
  cards: [
    {
      type: 'content',
      title: 'The Development of the Liturgy',
      content: [
        '**Liturgy** = The form and structure of public worship.',
        'Early Christian worship was **simple but gradually became more structured**.',
        'Catholics and Orthodox have **formal liturgies** (Mass, Divine Liturgy).',
        'Many Protestants have **less formal worship**, but still follow patterns.',
        'How did liturgy develop? Is it helpful or restrictive?',
        'Let\'s explore the **history and purpose** of liturgical worship.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Why Liturgy Developed',
      content: [
        '**Reasons liturgy became more structured:**',
        '📖 **Scripture pattern:** Jewish worship had structure (synagogue, temple)',
        '📖 **Teaching tool:** Repeated forms helped teach doctrine',
        '📖 **Unity:** Common liturgy united churches across regions',
        '📖 **Preservation:** Written liturgies preserved orthodoxy',
        '📖 **Order:** As churches grew, structure prevented chaos (1 Cor 14:40)',
        '**Early liturgies developed naturally:**',
        '• Prayers and creeds were memorized and repeated',
        '• Scripture readings followed a pattern (lectionary)',
        '• Eucharist had set words (like Jesus\' institution words)',
        '**By the 4th century, formal liturgies were widespread.**'
      ]
    },
    {
      type: 'quiz',
      question: 'What does "liturgy" mean?',
      options: ['Rules for church leaders', 'The form and structure of public worship', 'A type of prayer', 'Sacraments only'],
      correctAnswer: 1,
      explanation: 'Liturgy refers to the form, structure, and order of public worship—the patterns and rituals churches use when they gather.'
    },
    {
      type: 'content',
      title: 'Elements of Historic Liturgy',
      content: [
        '**Common structure in traditional liturgy:**',
        '**1. Service of the Word:**',
        '• Opening prayers',
        '• Scripture readings (Old Testament, Psalm, Epistle, Gospel)',
        '• Sermon/homily',
        '• Creed (Apostles\' or Nicene)',
        '• Prayers of intercession',
        '**2. Service of the Table (Eucharist):**',
        '• Offering',
        '• Great Thanksgiving prayer',
        '• Institution narrative ("This is my body...")',
        '• Communion/Eucharist',
        '• Closing blessing',
        '**This basic pattern (Word + Table) has been used for centuries.**'
      ]
    },
    {
      type: 'content',
      title: 'Benefits and Concerns',
      content: [
        '**✅ Benefits of liturgical worship:**',
        '• **Theological depth:** Creeds and prayers teach sound doctrine',
        '• **Historical connection:** Links us to centuries of faithful Christians',
        '• **Participatory:** Everyone speaks/prays together',
        '• **Gospel-centered:** Liturgy rehearses the Christian story each week',
        '• **Protection:** Guards against fads and false teaching',
        '**❌ Potential concerns:**',
        '• **Rote repetition:** Can become mechanical without engagement',
        '• **Lack of spontaneity:** May feel rigid or impersonal',
        '• **Clericalism:** Can separate "performers" from "audience"',
        '• **Traditionalism:** May prioritize form over substance',
        '**Balance needed:** Liturgy is a **tool**, not an end in itself.'
      ]
    },
    {
      type: 'content',
      title: 'Protestant Views on Liturgy',
      content: [
        '**Reformation responses to liturgy:**',
        '**Lutherans & Anglicans:** Kept much traditional liturgy, reformed some elements',
        '**Reformed/Presbyterian:** Simplified but retained structure (regulative principle)',
        '**Baptists/Free Church:** Emphasized spontaneity and Spirit-led worship',
        '**Pentecostals:** Prioritized freedom and charismatic expression',
        '**Modern evangelical worship:**',
        '• Often **less formal**, but still has patterns (songs → sermon → response)',
        '• Risk: **Personality-driven** rather than Word/sacrament-centered',
        '• Opportunity: **Accessibility** for unchurched people',
        '**Even "non-liturgical" churches have liturgy—they just don\'t write it down!**',
        'Every church follows **some pattern**, whether ancient or contemporary.'
      ]
    },
    {
      type: 'matching',
      title: 'Match Liturgical Terms',
      pairs: [
        { term: 'Liturgy', definition: 'The form and structure of public worship' },
        { term: 'Lectionary', definition: 'Schedule of Scripture readings for each Sunday' },
        { term: 'Eucharist', definition: 'The Lord\'s Supper or communion service' },
        { term: 'Creed', definition: 'Summary statement of Christian belief recited in worship' }
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You understand liturgical development! Appreciate both structure and Spirit-led freedom in worship.',
      keyTakeaways: [
        'Liturgy is the form and structure of public worship',
        'It developed gradually to teach doctrine, preserve orthodoxy, and maintain order',
        'Traditional liturgy follows Word + Table pattern (Scripture + Eucharist)',
        'Benefits: Theological depth, historical connection, participatory',
        'All churches have liturgy (patterns), whether formal or informal'
      ],
      badge: { icon: '📜', name: 'Liturgy Scholar', description: 'Completed Lesson 46: Development of Liturgy' }
    }
  ]
};

export const lesson47Data = {
  id: 47,
  title: "Regional Councils and Traditions",
  subtitle: "How local churches developed distinctive practices",
  duration: "6 min",
  cards: [
    {
      type: 'content',
      title: 'Regional Councils and Traditions',
      content: [
        'Beyond the **seven ecumenical councils**, there were many **regional councils**.',
        'These addressed local issues and developed **distinctive traditions**.',
        'Over time, **different regions** developed **different practices**—not always wrong, just varied.',
        'This diversity is why we have **Catholic, Orthodox, and Protestant traditions** today.',
        'Let\'s explore how regional differences emerged and what they mean.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Major Regional Traditions',
      content: [
        '**Early church had **five major centers** (Pentarchy):**',
        '🏛️ **Rome** (Western Europe)',
        '• Latin language, Roman culture',
        '• Developed into **Roman Catholicism**',
        '⛪ **Constantinople** (Byzantine Empire)',
        '• Greek language, Eastern culture',
        '• Developed into **Eastern Orthodoxy**',
        '✝️ **Alexandria** (Egypt)',
        '• Coptic tradition',
        '✝️ **Antioch** (Syria)',
        '• Syriac tradition',
        '✝️ **Jerusalem** (Holy Land)',
        '• Palestinian tradition',
        '**These centers developed different liturgies, practices, and theological emphases.**'
      ]
    },
    {
      type: 'quiz',
      question: 'What caused the Great Schism between East and West in 1054?',
      options: ['Disagreement about the Bible canon', 'Accumulated theological and cultural differences', 'Constantine\'s conversion', 'The Reformation'],
      correctAnswer: 1,
      explanation: 'The Great Schism (1054) resulted from accumulated theological, cultural, and political differences between Eastern (Orthodox) and Western (Catholic) Christianity, including debates over papal authority and the filioque clause.'
    },
    {
      type: 'content',
      title: 'East vs West: Key Differences',
      content: [
        '**By 1054, East and West had major differences:**',
        '**Authority:**',
        '• **West (Rome):** Pope has supreme authority',
        '• **East (Constantinople):** Councils of bishops have authority',
        '**Filioque:**',
        '• **West:** Spirit proceeds from Father **and Son**',
        '• **East:** Spirit proceeds from Father **alone**',
        '**Theology:**',
        '• **West:** Focused on legal categories (guilt, justification)',
        '• **East:** Focused on healing and transformation (theosis)',
        '**Liturgy:**',
        '• **West:** Latin language, simpler liturgy (at the time)',
        '• **East:** Greek/Slavonic language, elaborate liturgy',
        '**These weren\'t heresies—just different emphases from shared truth.**'
      ]
    },
    {
      type: 'content',
      title: 'Important Regional Councils',
      content: [
        '**Key regional councils that shaped doctrine:**',
        '**Carthage (397, 419):** Affirmed the New Testament canon',
        '**Orange (529):** Clarified grace and free will (semi-Pelagianism rejected)',
        '**Toledo (various, 400s-600s):** Developed Spanish theology, added filioque',
        '**Trent (1545-1563):** Catholic response to Protestant Reformation',
        '**Westminster (1643-1653):** Presbyterian confession',
        '**Dort (1618-1619):** Reformed response to Arminianism',
        '**These councils were **authoritative for their regions**, but not universally binding like ecumenical councils.**',
        'They addressed local controversies and clarified doctrine for their contexts.'
      ]
    },
    {
      type: 'content',
      title: 'Lessons for Today',
      content: [
        '**What we learn from regional diversity:**',
        '✅ **Unity in essentials:** All affirmed Nicene Creed and core doctrines',
        '✅ **Diversity in non-essentials:** Different practices weren\'t heresy',
        '✅ **Cultural contextualization:** Faith expressed in different languages and cultures',
        '✅ **Avoid sectarianism:** Don\'t demonize those who worship differently',
        '**Modern application:**',
        '• **Catholic, Orthodox, Protestant** all have roots in early church',
        '• **Within Protestantism**, diverse traditions (Reformed, Lutheran, Baptist, Pentecostal)',
        '• **We can learn from each other** rather than only criticizing',
        '**Augustine\'s wisdom:** "In essentials unity, in non-essentials liberty, in all things charity."',
        '**Focus on what unites us (the gospel), not what divides us (secondary issues).**'
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You understand regional traditions! Appreciate diversity while maintaining unity in essentials.',
      keyTakeaways: [
        'Regional councils addressed local issues and developed distinctive traditions',
        'East (Orthodox) and West (Catholic) gradually diverged over centuries',
        'Differences include authority structure, theology emphases, and liturgy',
        'Most differences are non-essential; core doctrines remain shared',
        'Learn from diverse traditions rather than dismissing them'
      ],
      badge: { icon: '🌍', name: 'Church Traditions Scholar', description: 'Completed Lesson 47: Regional Councils and Traditions' }
    }
  ]
};

export const lesson48Data = {
  id: 48,
  title: "Applying Council Wisdom Today",
  subtitle: "Learning from church history for modern faith",
  duration: "6 min",
  cards: [
    {
      type: 'content',
      title: 'Applying Council Wisdom Today',
      content: [
        'The councils and traditions we\'ve studied aren\'t just **ancient history**.',
        'They provide **wisdom for navigating modern theological controversies**.',
        'Understanding **how the early church handled disputes** helps us today.',
        'Let\'s apply these lessons to **contemporary challenges**.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Lesson 1: Defend Core Doctrines',
      content: [
        '**The councils teach us to stand firm on essentials:**',
        '**Core doctrines (from councils):**',
        '✅ **Trinity** - One God in three persons',
        '✅ **Incarnation** - Jesus is fully God and fully human',
        '✅ **Resurrection** - Jesus rose bodily from the dead',
        '✅ **Salvation by grace** - Not by works',
        '**Modern threats:**',
        '• **Jehovah\'s Witnesses:** Deny Trinity (like Arius)',
        '• **Mormons:** Teach humans can become gods (polytheism)',
        '• **Liberal theology:** Denies Jesus\' divinity or resurrection',
        '• **Progressive Christianity:** Redefines sin, salvation, and Scripture',
        '**Councils give us the measuring stick:**',
        'If it contradicts **Nicene Creed** or **Chalcedonian Definition**, it\'s not historic Christianity.',
        '**Be gracious but firm on essentials.**'
      ]
    },
    {
      type: 'quiz',
      question: 'What can we learn from how the early councils handled heresies?',
      options: ['We should never discuss theology', 'Defend core doctrines while maintaining charity', 'All doctrinal differences are equally important', 'Avoid creeds and statements of faith'],
      correctAnswer: 1,
      explanation: 'The councils teach us to defend essential doctrines firmly (Trinity, Incarnation, etc.) while maintaining charity and distinguishing essentials from non-essentials.'
    },
    {
      type: 'content',
      title: 'Lesson 2: Distinguish Essentials from Non-Essentials',
      content: [
        '**Not all doctrines are equally important:**',
        '**First-order (essential) doctrines:** Salvation depends on these',
        '• Trinity, deity of Christ, resurrection, salvation by grace',
        '• **Denying these = heresy**',
        '**Second-order (important) doctrines:** Affect church practice',
        '• Baptism mode, church government, spiritual gifts',
        '• **Disagreement here = different denominations, but still Christian**',
        '**Third-order (debatable) doctrines:** Christians can disagree',
        '• End times details, worship styles, diet, etc.',
        '• **Freedom of conscience applies**',
        '**The councils focused on first-order issues.**',
        'They didn\'t legislate every detail—only essentials.',
        '**Modern application:** Major on the majors; allow liberty on secondary issues.'
      ]
    },
    {
      type: 'content',
      title: 'Lesson 3: Learn from History',
      content: [
        '**The councils show us: We\'re not the first to face these issues.**',
        '**When you encounter a "new" teaching, ask:**',
        '❓ **Has the church addressed this before?**',
        '❓ **Does this contradict historic creeds?**',
        '❓ **What did faithful Christians throughout history believe?**',
        '**Benefits of historical awareness:**',
        '✅ **Avoid repeating errors:** Many heresies are just old errors repackaged',
        '✅ **Gain wisdom:** Learn from how the church navigated controversies',
        '✅ **Build humility:** You\'re probably not smarter than Athanasius',
        '**Example: "Jesus is just a great moral teacher"**',
        '• This is **Arianism** repackaged—denies His divinity',
        '• The church rejected this in 325 AD at Nicaea',
        '**Don\'t reinvent the wheel—learn from 2,000 years of faithful Christians.**'
      ]
    },
    {
      type: 'content',
      title: 'Lesson 4: Unity Across Traditions',
      content: [
        '**The councils unite Christians across traditions:**',
        '✅ **Catholics, Orthodox, Protestants** all affirm Nicene Creed',
        '✅ **Core gospel** is shared despite secondary differences',
        '✅ **We have more in common than we realize**',
        '**Modern ecumenism (unity efforts):**',
        '• Focus on **shared essentials** (Trinity, Incarnation, salvation)',
        '• Respect **legitimate differences** on secondary issues',
        '• Cooperate on **mission and service**',
        '**Balance:**',
        '• **Don\'t compromise core doctrine** for false unity',
        '• **Don\'t divide over non-essentials** (Rom 14:1-4)',
        '**We can work together for the gospel** while maintaining our distinctive traditions.',
        'The creeds remind us: **We\'re part of one holy, catholic (universal), and apostolic church.**'
      ]
    },
    {
      type: 'content',
      title: 'Your Action Plan',
      content: [
        '**Put council wisdom into practice:**',
        '📖 **Memorize the Apostles\' or Nicene Creed** - Know what you believe',
        '📖 **Test teaching against creeds** - Does it contradict historic Christianity?',
        '📖 **Read church history** - Learn from faithful Christians before you',
        '📖 **Distinguish essentials from non-essentials** - Major on the majors',
        '📖 **Pursue unity in the gospel** - Work with Christians across traditions',
        '📖 **Defend the faith with charity** - Speak truth in love',
        '**Remember:**',
        '• The councils weren\'t perfect, but they faithfully defended the gospel',
        '• You stand in a long line of faithful Christians',
        '• The same Holy Spirit who guided them guides you',
        '**Study history to understand the present and prepare for the future.**'
      ]
    },
    {
      type: 'completion',
      title: 'Path Complete! 🎉🏆',
      message: 'Congratulations! You\'ve mastered Councils & Worship! Apply this wisdom to defend the faith and pursue unity.',
      keyTakeaways: [
        'Defend core doctrines while distinguishing essentials from non-essentials',
        'Learn from history to avoid repeating errors and gain wisdom',
        'Pursue unity across traditions based on shared gospel essentials',
        'Test modern teaching against historic creeds and councils',
        'Stand in the long line of faithful Christians defending the faith'
      ],
      badge: { icon: '🏆', name: 'Councils & Worship Master', description: 'Completed ALL 8 Lessons: Councils & Worship Path' }
    }
  ]
};

// Lessons 49-56 for Gospel Message Path

export const lesson49Data = {
  id: 49,
  title: "The Gospel in First-Century Context",
  subtitle: "What 'gospel' meant to ancient ears",
  duration: "8 min",
  cards: [
    {
      type: 'content',
      title: 'The Gospel in First-Century Context',
      subtitle: '⏱️ About 8 minutes',
      content: [
        '**Learning Objective:** Understand what "gospel" meant in the first-century Roman world and why it was revolutionary.',
        'We use the word **"gospel"** so often it can lose its meaning.',
        'But in the **first century**, "gospel" (Greek: *euangelion*) was a **loaded political term**.',
        'Understanding the **original context** makes the Christian gospel even more powerful.',
        'Let\'s discover what **"gospel"** meant to the first hearers.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Gospel in the Roman Empire',
      content: [
        '**In the Roman world, "gospel" meant:**',
        '📜 **Good news of a military victory**',
        '📜 **Announcement of a new emperor**',
        '📜 **Imperial propaganda** declaring Caesar\'s "salvation"',
        '**Example:** When Augustus became emperor, inscriptions proclaimed:',
        '• "The birthday of the god Augustus was the beginning of the **good tidings** (*euangelia*) for the world"',
        '• Caesar brings "peace and security"',
        '• The empire is the source of salvation',
        '**When Christians proclaimed Jesus as "Lord" and His message as "gospel," they were making a revolutionary claim:**',
        '💥 **Jesus, not Caesar, is the true King**',
        '💥 **Jesus\' kingdom, not Rome\'s, brings real peace**',
        '💥 **Jesus\' victory over death, not military conquest, is the ultimate triumph**'
      ]
    },
    {
      type: 'quiz',
      question: 'What did "gospel" (euangelion) mean in the Roman world?',
      options: ['A religious teaching', 'Good news of imperial victory or new emperor', 'A moral code', 'Ancient scripture'],
      correctAnswer: 1,
      explanation: 'In the Roman world, "gospel" (euangelion) meant good news of military victory or the announcement of a new emperor. Christians co-opted this term to proclaim Jesus as the true King.'
    },
    {
      type: 'content',
      title: 'Gospel in the Old Testament',
      content: [
        '**The Christian gospel has deep Old Testament roots:**',
        '**Isaiah 52:7** - "How beautiful upon the mountains are the feet of him who brings **good news** (*gospel*), who publishes peace"',
        '**Isaiah 61:1** - "The Spirit of the Lord God is upon me, because the Lord has anointed me to bring **good news** to the poor"',
        '• Jesus quoted this in Luke 4:18—He is the fulfillment',
        '**Old Testament "gospel" themes:**',
        '✅ God will **rescue His people** from exile and oppression',
        '✅ God will **defeat evil** and establish His kingdom',
        '✅ God will **restore creation** and bring justice',
        '✅ A **Messiah** will come to accomplish this',
        '**The Christian gospel isn\'t a new invention—it\'s the fulfillment of God\'s ancient promise.**'
      ]
    },
    {
      type: 'content',
      title: 'Jesus Proclaims the Gospel',
      content: [
        '**Jesus\' first public message:**',
        '**Mark 1:14-15** - "Jesus came into Galilee, proclaiming the **gospel of God**, and saying, \'The time is fulfilled, and the **kingdom of God is at hand**; repent and believe in the gospel.\'"',
        '**What Jesus meant:**',
        '🔔 **"The time is fulfilled"** - God\'s promised moment has arrived',
        '🔔 **"Kingdom of God is at hand"** - God\'s reign is breaking in through Jesus',
        '🔔 **"Repent"** - Turn from false allegiances (sin, self, Caesar)',
        '🔔 **"Believe in the gospel"** - Trust that Jesus is King and His kingdom is here',
        '**Jesus\' gospel wasn\'t just spiritual comfort—it was a claim that God\'s kingdom was displacing all earthly powers.**',
        'This is why the Romans crucified Him—His gospel was **politically subversive**.'
      ]
    },
    {
      type: 'content',
      title: 'Why This Context Matters Today',
      content: [
        '**Understanding first-century context enriches our gospel proclamation:**',
        '✅ **The gospel is not just personal salvation** (though it includes that)',
        '✅ **The gospel is about Jesus\' lordship over all creation**',
        '✅ **The gospel challenges all earthly powers and allegiances**',
        '✅ **The gospel creates a new community (church) that embodies God\'s kingdom**',
        '**Modern application:**',
        '• When we proclaim **"Jesus is Lord,"** we\'re saying He has authority over politics, economics, culture',
        '• The gospel isn\'t **escapism** ("beam me up when I die"); it\'s about God renewing all things',
        '• Christian discipleship means living under **Jesus\' kingdom values** now',
        '**The first-century gospel was holistic—and so should ours be.**'
      ]
    },
    {
      type: 'matching',
      title: 'Match Gospel Contexts',
      pairs: [
        { term: 'Roman Gospel', definition: 'Good news of Caesar\'s reign and peace through military victory' },
        { term: 'Old Testament Gospel', definition: 'God will rescue His people and establish His kingdom' },
        { term: 'Jesus\' Gospel', definition: 'God\'s kingdom has arrived through Jesus the Messiah' },
        { term: 'Isaiah 52:7', definition: 'How beautiful are the feet of those who bring good news' }
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You understand the first-century context of the gospel! This enriches how we proclaim it today.',
      keyTakeaways: [
        'In the Roman world, "gospel" meant good news of imperial victory or new emperor',
        'Christians proclaimed Jesus, not Caesar, as the true Lord and King',
        'The gospel has Old Testament roots—fulfilling God\'s promise to rescue and restore',
        'Jesus\' gospel announced God\'s kingdom breaking in through His life, death, and resurrection',
        'The gospel is holistic—personal salvation and cosmic renewal'
      ],
      badge: { icon: '📯', name: 'Gospel Contextualizer', description: 'Completed Lesson 49: Gospel in First-Century Context' }
    }
  ]
};

export const lesson50Data = {
  id: 50,
  title: "What 'Gospel' Meant to Ancient Ears",
  subtitle: "How the first Christians heard the message",
  duration: "7 min",
  cards: [
    {
      type: 'content',
      title: 'What Gospel Meant to Ancient Ears',
      content: [
        'When **first-century Jews and Gentiles** heard the gospel, they heard it through their cultural lenses.',
        '**Jews** heard fulfillment of Old Testament promises.',
        '**Gentiles** heard a challenge to Roman imperial claims.',
        '**Both** heard a message that turned their world upside down.',
        'Let\'s explore **how different audiences** understood the gospel message.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Jewish Expectations',
      content: [
        '**First-century Jews expected:**',
        '🕎 **A Messiah** who would overthrow Rome and restore Israel\'s kingdom',
        '🕎 **God\'s temple** to be rebuilt and glorified',
        '🕎 **Torah observance** to mark God\'s people',
        '🕎 **Physical deliverance** from enemies',
        '**What Jesus offered:**',
        '✝️ A Messiah who **died** and rose—conquering sin and death, not Rome',
        '✝️ **His body** is the new temple (John 2:19-21)',
        '✝️ **Faith in Christ**, not Torah-keeping, makes you righteous',
        '✝️ **Spiritual transformation**, with physical resurrection to come',
        '**This was shocking:**',
        '• A crucified Messiah? That\'s a contradiction! (1 Cor 1:23 - "a stumbling block to Jews")',
        '• But it\'s what the Scriptures actually predicted (Isaiah 53, Psalm 22)'
      ]
    },
    {
      type: 'quiz',
      question: 'Why was a crucified Messiah a "stumbling block" to Jews?',
      options: ['They expected a conquering military king, not a suffering servant', 'They didn\'t believe in resurrection', 'They rejected all prophets', 'They worshiped Caesar'],
      correctAnswer: 0,
      explanation: 'Jews expected a Messiah who would overthrow Rome and restore Israel\'s political kingdom. A crucified Messiah seemed like a contradiction—how could a defeated, executed man be the promised King?'
    },
    {
      type: 'content',
      title: 'Gentile Understanding',
      content: [
        '**Gentiles (non-Jews) in the Roman world believed:**',
        '🏛️ **Many gods** existed',
        '🏛️ **Caesar** brings peace (*Pax Romana*) and salvation',
        '🏛️ **Philosophy** (Stoicism, Epicureanism) offers the good life',
        '🏛️ **Mystery religions** promise spiritual experiences',
        '**What the gospel offered Gentiles:**',
        '✝️ **One true God** who created all things',
        '✝️ **Jesus, not Caesar,** is Lord and Savior',
        '✝️ **Grace**, not philosophical enlightenment, saves',
        '✝️ **Real relationship with God**, not just rituals',
        '**This was radical:**',
        '• "Foolishness to Gentiles" (1 Cor 1:23)—dying gods were myths, not history',
        '• Claiming Jesus > Caesar was treasonous',
        '• But thousands of Gentiles converted, even unto death'
      ]
    },
    {
      type: 'content',
      title: 'The Early Christian Message',
      content: [
        '**Core elements emphasized to different audiences:**',
        '**To Jews:**',
        '• Jesus fulfills the Scriptures (Law, Prophets, Writings)',
        '• He\'s the promised Messiah, Son of David',
        '• His death atones for sin (like the sacrificial system)',
        '• Resurrection proves He\'s the Lord',
        '**To Gentiles:**',
        '• Turn from idols to the one true God',
        '• Jesus, not Caesar, is Lord',
        '• Salvation by grace through faith, not works',
        '• Resurrection guarantees eternal life',
        '**To both:**',
        '• Repent (change allegiance)',
        '• Believe Jesus died for sins and rose again',
        '• Be baptized and join the church',
        '• Live as kingdom citizens now'
      ]
    },
    {
      type: 'content',
      title: 'Modern Application',
      content: [
        '**What can we learn from contextualization?**',
        '✅ **Know your audience:** Understand their worldview and questions',
        '✅ **Use their language:** Connect gospel to their concerns',
        '✅ **Challenge assumptions:** Show where culture contradicts the gospel',
        '✅ **Stay faithful:** Contextualize presentation, not content',
        '**Examples today:**',
        '**To secular Westerners:**',
        '• Gospel addresses loneliness, meaninglessness, consumerism',
        '• Jesus offers real community and purpose',
        '**To other religions:**',
        '• Gospel is about God\'s initiative (grace), not human effort',
        '• Jesus is the fulfillment all religions point to',
        '**Core message stays the same:** Jesus is Lord; He died for our sins and rose again; repent and believe.',
        '**Presentation adapts to audience.**'
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You understand how different audiences heard the gospel! Learn to contextualize without compromising.',
      keyTakeaways: [
        'Jews heard gospel as fulfillment of Scriptures and Messianic promises',
        'Gentiles heard gospel as challenge to imperial claims and pagan philosophies',
        'Early Christians contextualized presentation while keeping core message',
        'Modern Christians should understand audiences and connect gospel to their concerns',
        'Faithful contextualization adapts presentation, not content'
      ],
      badge: { icon: '🌍', name: 'Gospel Communicator', description: 'Completed Lesson 50: What Gospel Meant to Ancient Ears' }
    }
  ]
};

export const lesson51Data = {
  id: 51,
  title: "Paul's Gospel Message",
  subtitle: "The apostle to the Gentiles defines the gospel",
  duration: "8 min",
  cards: [
    {
      type: 'content',
      title: 'Paul\'s Gospel Message',
      subtitle: '⏱️ About 8 minutes',
      content: [
        '**Learning Objective:** Understand Paul\'s articulation of the gospel and why it\'s foundational.',
        'Paul is the **most prolific** New Testament author.',
        'His letters provide the **clearest explanations** of the gospel.',
        'Paul didn\'t invent a new gospel—he **explained** what Jesus accomplished.',
        'Let\'s study **Paul\'s gospel presentation**.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'The Gospel in 1 Corinthians 15',
      content: [
        '**Paul\'s most concise gospel summary:**',
        '**1 Corinthians 15:3-5** - "For I delivered to you as of first importance what I also received: that **Christ died for our sins** in accordance with the Scriptures, that **he was buried**, that **he was raised** on the third day in accordance with the Scriptures, and that **he appeared** to Cephas, then to the twelve."',
        '**Four essential elements:**',
        '✝️ **Christ died** - Historical event',
        '✝️ **For our sins** - Substitutionary atonement',
        '✝️ **In accordance with the Scriptures** - Fulfillment of OT promises',
        '✝️ **He was raised and appeared** - Historical resurrection with witnesses',
        '**Note:** Paul says he "received" this—it\'s the **universal Christian gospel**, not Paul\'s invention.',
        '**This is "of first importance"—it\'s the foundation of everything else.**'
      ]
    },
    {
      type: 'quiz',
      question: 'According to 1 Corinthians 15:3-5, what are the core elements of the gospel?',
      options: ['Jesus taught and performed miracles', 'Christ died for sins, was buried, was raised, appeared to witnesses', 'Follow Jesus\' moral example', 'Love God and neighbor'],
      correctAnswer: 1,
      explanation: 'Paul summarizes the gospel as: Christ died for our sins, was buried, was raised on the third day, and appeared to witnesses—all in accordance with the Scriptures.'
    },
    {
      type: 'content',
      title: 'Justification by Faith',
      content: [
        '**Paul\'s central theme: We are justified (declared righteous) by faith alone.**',
        '**Romans 3:23-24** - "All have sinned and fall short of the glory of God, and are **justified by his grace as a gift**, through the redemption that is in Christ Jesus."',
        '**Key terms:**',
        '📖 **Justified** - Legal declaration of righteousness (courtroom metaphor)',
        '📖 **By his grace** - Unearned favor from God',
        '📖 **As a gift** - Not earned by works',
        '📖 **Through redemption** - Jesus paid the price to free us',
        '**Romans 5:1** - "Therefore, since we have been justified by faith, we have **peace with God** through our Lord Jesus Christ."',
        '**The gospel restores our relationship with God:**',
        '• We were **enemies** because of sin (Romans 5:10)',
        '• Jesus reconciled us through His death',
        '• Now we have **peace** and access to God'
      ]
    },
    {
      type: 'content',
      title: 'The Gospel Creates a New People',
      content: [
        '**Paul\'s gospel breaks down barriers:**',
        '**Galatians 3:28** - "There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for **you are all one in Christ Jesus**."',
        '**Ephesians 2:14-16** - Christ "has made us both one and has broken down in his flesh the dividing wall of hostility... that he might create in himself **one new man** in place of the two, so making peace."',
        '**The gospel creates:**',
        '✅ **A new humanity** (Jew and Gentile united)',
        '✅ **A new family** (the church)',
        '✅ **A new identity** (in Christ, not ethnicity/status)',
        '✅ **A new citizenship** (Philippians 3:20 - "our citizenship is in heaven")',
        '**This was revolutionary:**',
        '• Ancient world was divided by ethnicity, class, gender',
        '• Church included **slaves and masters**, **Jews and Gentiles**, **men and women** as equals in Christ',
        '• Gospel creates reconciled community'
      ]
    },
    {
      type: 'content',
      title: 'Paul\'s Gospel vs. False Gospels',
      content: [
        '**Paul fiercely defended the true gospel:**',
        '**Galatians 1:6-9** - "I am astonished that you are so quickly deserting him who called you in the grace of Christ and are turning to **a different gospel**—not that there is another one, but there are some who trouble you and want to **distort the gospel** of Christ. But even if we or an angel from heaven should preach to you a gospel contrary to the one we preached to you, **let him be accursed**."',
        '**Paul\'s opponents taught:**',
        '❌ Faith in Jesus **+ circumcision/law-keeping** = salvation',
        '**Paul\'s response:**',
        '✅ Faith in Jesus **alone** = salvation',
        '✅ Adding requirements to the gospel **nullifies grace**',
        '**Why this matters:**',
        '• Any gospel that adds **works** to faith distorts the message',
        '• We\'re saved by grace alone, through faith alone, in Christ alone',
        '• Good works are the **result** of salvation, not the cause'
      ]
    },
    {
      type: 'matching',
      title: 'Match Paul\'s Gospel Themes',
      pairs: [
        { term: '1 Corinthians 15:3-5', definition: 'Christ died for sins, was raised, appeared to witnesses' },
        { term: 'Justification by Faith', definition: 'Declared righteous as a gift by grace through redemption' },
        { term: 'Galatians 3:28', definition: 'All are one in Christ—no Jew/Greek, slave/free, male/female' },
        { term: 'False Gospel Warning', definition: 'Adding works to faith distorts the gospel and nullifies grace' }
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You understand Paul\'s articulation of the gospel! This is the foundation of Christian theology.',
      keyTakeaways: [
        'Paul\'s gospel summary: Christ died for sins, was raised, appeared (1 Cor 15)',
        'Justification by faith alone through grace—not by works',
        'Gospel creates a new, reconciled community (church) in Christ',
        'Paul warned against false gospels that add requirements to faith',
        'Good works result from salvation; they don\'t earn it'
      ],
      badge: { icon: '✍️', name: 'Pauline Scholar', description: 'Completed Lesson 51: Paul\'s Gospel Message' }
    }
  ]
};

export const lesson52Data = {
  id: 52,
  title: "The Gospel in the Four Gospels",
  subtitle: "Matthew, Mark, Luke, and John's presentation",
  duration: "9 min",
  cards: [
    {
      type: 'content',
      title: 'The Gospel in the Four Gospels',
      subtitle: '⏱️ About 9 minutes',
      content: [
        '**Learning Objective:** Understand how the four Gospel accounts present the good news of Jesus.',
        'We have **four** inspired accounts of Jesus\' life.',
        'Each Gospel writer has a **unique emphasis** and audience.',
        'Together they give a **full portrait** of Jesus and His gospel.',
        'Let\'s explore **each Gospel\'s presentation**.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Matthew: Jesus the Jewish Messiah',
      content: [
        '**Audience:** Jewish Christians',
        '**Theme:** Jesus fulfills the Old Testament',
        '**Key phrases:** "This was to fulfill what was spoken by the prophet..."',
        '**Gospel presentation:**',
        '👑 **Jesus is the Messiah (Christ)**, Son of David',
        '👑 He establishes the **Kingdom of Heaven**',
        '👑 His teachings (Sermon on the Mount) are the **new Torah**',
        '👑 He calls disciples to make disciples of **all nations**',
        '**Key verse:** Matthew 1:21 - "She will bear a son, and you shall call his name **Jesus**, for **he will save his people from their sins**."',
        '**Great Commission:** Matthew 28:18-20 - "All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations..."',
        '**Matthew shows:** Jesus is the **culmination** of Israel\'s story and the **King** who saves His people.'
      ]
    },
    {
      type: 'quiz',
      question: 'What is Matthew\'s primary emphasis about Jesus?',
      options: ['Jesus the suffering servant', 'Jesus the Jewish Messiah who fulfills Old Testament', 'Jesus the universal Savior', 'Jesus the divine Son of God'],
      correctAnswer: 1,
      explanation: 'Matthew emphasizes that Jesus is the Jewish Messiah who fulfills the Old Testament. He repeatedly shows how Jesus fulfills prophecy and establishes the Kingdom of Heaven.'
    },
    {
      type: 'content',
      title: 'Mark: Jesus the Suffering Servant',
      content: [
        '**Audience:** Roman Christians (Gentiles)',
        '**Theme:** Jesus is the powerful yet suffering Son of God',
        '**Style:** Fast-paced, action-oriented ("immediately" appears 42 times)',
        '**Gospel presentation:**',
        '⚡ **Jesus has divine authority** over demons, disease, nature, death',
        '⚡ He came to **serve and give His life** as a ransom (Mark 10:45)',
        '⚡ **Discipleship means taking up your cross** and following Him',
        '⚡ The gospel must be proclaimed to **all nations** (Mark 13:10)',
        '**Key verse:** Mark 10:45 - "For even the Son of Man came not to be served but to **serve, and to give his life as a ransom for many**."',
        '**Mark 1:1** - "The beginning of the **gospel of Jesus Christ, the Son of God**."',
        '**Mark shows:** Jesus is the powerful Son of God who conquers evil but saves through **suffering and sacrifice**.'
      ]
    },
    {
      type: 'content',
      title: 'Luke: Jesus the Universal Savior',
      content: [
        '**Audience:** Gentile Christians (especially Theophilus)',
        '**Theme:** Jesus is the Savior for all people—Jew, Gentile, rich, poor, men, women',
        '**Style:** Historian (Luke 1:1-4 - "orderly account")',
        '**Gospel presentation:**',
        '🌍 Jesus came to **seek and save the lost** (Luke 19:10)',
        '🌍 The gospel includes **social outcasts**—tax collectors, sinners, Samaritans, women',
        '🌍 Salvation brings **joy** (angels, shepherds, parables)',
        '🌍 The **Holy Spirit** empowers gospel witness',
        '**Key verse:** Luke 19:10 - "For the Son of Man came to **seek and to save the lost**."',
        '**Luke 24:46-47** - "Thus it is written, that the Christ should suffer and on the third day rise from the dead, and that **repentance for the forgiveness of sins should be proclaimed in his name to all nations**."',
        '**Luke shows:** Jesus is the **compassionate Savior** who brings God\'s salvation to every kind of person.'
      ]
    },
    {
      type: 'content',
      title: 'John: Jesus the Divine Son',
      content: [
        '**Audience:** Both Jewish and Gentile Christians',
        '**Theme:** Jesus is God incarnate; eternal life comes through believing in Him',
        '**Style:** Theological and reflective',
        '**Gospel presentation:**',
        '✨ **Jesus is the eternal Word (Logos) who became flesh** (John 1:1, 14)',
        '✨ He reveals the Father—to see Jesus is to see God (John 14:9)',
        '✨ **Eternal life** is knowing Jesus (John 17:3)',
        '✨ Salvation is by **believing** in Jesus as the Son of God',
        '**Key verse:** John 3:16 - "For God so loved the world, that he gave his only Son, that whoever **believes in him** should not perish but have **eternal life**."',
        '**Purpose statement:** John 20:30-31 - "These are written so that you may **believe that Jesus is the Christ, the Son of God**, and that by believing you may have **life in his name**."',
        '**John shows:** Jesus is **fully divine**, and believing in Him gives eternal life.'
      ]
    },
    {
      type: 'content',
      title: 'The Four Gospels Together',
      content: [
        '**Why four Gospels?**',
        '✅ **Multiple witnesses** establish truth (2 Cor 13:1)',
        '✅ **Different emphases** give fuller picture',
        '✅ **Different audiences** need different presentations',
        '✅ **All agree** on core gospel: Jesus died and rose to save',
        '**Common themes in all four:**',
        '• Jesus is the **Son of God** and **Messiah**',
        '• He performed **miracles** showing divine authority',
        '• He **died on the cross** for sins',
        '• He **rose from the dead** on the third day',
        '• **Witnesses** saw the risen Jesus',
        '• **Repentance and faith** in Jesus brings salvation',
        '**The four Gospels harmonize beautifully—each contributing to the full portrait of Jesus and His gospel.**'
      ]
    },
    {
      type: 'matching',
      title: 'Match Gospel Emphases',
      pairs: [
        { term: 'Matthew', definition: 'Jesus the Jewish Messiah who fulfills the Old Testament' },
        { term: 'Mark', definition: 'Jesus the suffering servant who gives His life as ransom' },
        { term: 'Luke', definition: 'Jesus the universal Savior who seeks and saves the lost' },
        { term: 'John', definition: 'Jesus the divine Son—believe in Him for eternal life' }
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You understand how the four Gospels present Jesus and His gospel! Each adds unique richness.',
      keyTakeaways: [
        'Matthew: Jesus the Jewish Messiah fulfilling Old Testament prophecy',
        'Mark: Jesus the suffering servant giving His life as ransom',
        'Luke: Jesus the universal Savior seeking and saving the lost',
        'John: Jesus the divine Son—believe in Him for eternal life',
        'All four Gospels agree on core gospel: Jesus died and rose to save'
      ],
      badge: { icon: '📖', name: 'Four Gospels Scholar', description: 'Completed Lesson 52: Gospel in the Four Gospels' }
    }
  ]
};

export const lesson53Data = {
  id: 53,
  title: "Essential Elements of the Gospel",
  subtitle: "Non-negotiable components of the good news",
  duration: "8 min",
  cards: [
    {
      type: 'content',
      title: 'Essential Elements of the Gospel',
      subtitle: '⏱️ About 8 minutes',
      content: [
        '**Learning Objective:** Identify the irreducible core of the Christian gospel.',
        'The gospel can be explained in many ways.',
        'But certain elements are **non-negotiable**.',
        'Remove them and you no longer have the **Christian gospel**.',
        'Let\'s identify the **essential elements**.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Element 1: God',
      content: [
        '**The gospel begins with God:**',
        '✅ **One God** in three persons—Father, Son, Holy Spirit (Trinity)',
        '✅ **Holy and just**—cannot overlook sin',
        '✅ **Loving and merciful**—desires to save',
        '✅ **Creator** of all things',
        '**Why this matters:**',
        '• Without a holy God, there\'s no problem that needs solving',
        '• Without a loving God, there\'s no good news',
        '• The gospel is God\'s **initiative**, not ours',
        '**Key verse:** John 3:16 - "For **God** so loved the world, that **he gave** his only Son..."',
        '**The gospel is about what God has done, not what we do.**'
      ]
    },
    {
      type: 'content',
      title: 'Element 2: Sin',
      content: [
        '**The gospel confronts the problem of sin:**',
        '✅ **All have sinned** (Romans 3:23)',
        '✅ Sin is **rebellion** against God, not just mistakes',
        '✅ Sin brings **death** and separation from God (Romans 6:23)',
        '✅ We **cannot save ourselves** (Ephesians 2:8-9)',
        '**Why this matters:**',
        '• Without sin, we don\'t need a Savior',
        '• Minimizing sin minimizes the cross',
        '• The gospel addresses our **deepest need**',
        '**Key verse:** Romans 3:23 - "For **all have sinned** and fall short of the glory of God."',
        '**The gospel is good news precisely because the bad news is so bad.**'
      ]
    },
    {
      type: 'quiz',
      question: 'Why is acknowledging sin essential to the gospel?',
      options: ['To make people feel guilty', 'Without sin, there\'s no need for a Savior or the cross', 'To enforce moral behavior', 'Sin isn\'t actually essential'],
      correctAnswer: 1,
      explanation: 'Acknowledging sin is essential because without it, there\'s no problem that needs solving. The gospel is good news because it addresses our desperate need for salvation from sin and its consequences.'
    },
    {
      type: 'content',
      title: 'Element 3: Jesus Christ',
      content: [
        '**The gospel centers on Jesus:**',
        '✅ **Fully God and fully human** (Incarnation)',
        '✅ **Sinless life**—qualified to be our substitute',
        '✅ **Died on the cross** for our sins (substitutionary atonement)',
        '✅ **Rose from the dead** on the third day (bodily resurrection)',
        '✅ **He is Lord**—King and ruler of all',
        '**Why this matters:**',
        '• Jesus must be **God** to have infinite worth (to pay for infinite sin)',
        '• Jesus must be **human** to represent us',
        '• His **death** accomplishes our salvation',
        '• His **resurrection** proves He conquered death',
        '**Key verse:** 1 Corinthians 15:3-4 - "**Christ died** for our sins... he was buried... **he was raised** on the third day."',
        '**No Jesus, no gospel.**'
      ]
    },
    {
      type: 'content',
      title: 'Element 4: Faith and Repentance',
      content: [
        '**The gospel requires a response:**',
        '✅ **Repentance**—turn from sin and self-rule to Jesus',
        '✅ **Faith**—trust in Jesus alone for salvation',
        '✅ **Not works**—we can\'t earn salvation (Ephesians 2:8-9)',
        '✅ **Lordship**—Jesus is King; we submit to Him',
        '**Why this matters:**',
        '• Faith isn\'t just **intellectual agreement**; it\'s trust and allegiance',
        '• Repentance isn\'t just **feeling sorry**; it\'s changing allegiance',
        '• The gospel is received as a **gift**, not earned',
        '**Key verse:** Acts 20:21 - "Testifying both to Jews and to Greeks of **repentance toward God** and of **faith in our Lord Jesus Christ**."',
        '**Mark 1:15** - "**Repent and believe** in the gospel."',
        '**The gospel demands surrender to Jesus as Lord.**'
      ]
    },
    {
      type: 'content',
      title: 'Element 5: Salvation',
      content: [
        '**The gospel offers salvation:**',
        '✅ **Forgiveness of sins**—guilt removed',
        '✅ **Justification**—declared righteous before God',
        '✅ **Reconciliation**—relationship with God restored',
        '✅ **Adoption**—now God\'s children (Romans 8:15)',
        '✅ **Eternal life**—resurrection and new creation',
        '**Why this matters:**',
        '• Salvation is **comprehensive**—past, present, future',
        '• It\'s **already and not yet**—we\'re saved, being saved, will be saved',
        '• Gospel transforms individuals **and** creates community (church)',
        '**Key verse:** Romans 5:1 - "Therefore, since we have been **justified** by faith, we have **peace with God** through our Lord Jesus Christ."',
        '**The gospel saves us to glorify God and enjoy Him forever.**'
      ]
    },
    {
      type: 'fillblank',
      title: 'Complete the Gospel Summary',
      sentence: 'The holy ____ sent His Son ____ to die for our ____, rose from the dead, and offers ____ and forgiveness to all who repent and ____.',
      blanks: ['God', 'Jesus', 'sins', 'salvation', 'believe'],
      options: ['God', 'Jesus', 'sins', 'salvation', 'believe', 'works', 'grace', 'heaven']
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You understand the essential elements of the gospel! This is the irreducible core.',
      keyTakeaways: [
        'God: Holy, just, loving Creator who initiates salvation',
        'Sin: All have sinned and cannot save themselves',
        'Jesus Christ: God incarnate who died for sins and rose from dead',
        'Faith and Repentance: Trust in Jesus and turn from sin',
        'Salvation: Forgiveness, justification, reconciliation, eternal life'
      ],
      badge: { icon: '✝️', name: 'Gospel Essentials Expert', description: 'Completed Lesson 53: Essential Elements' }
    }
  ]
};

export const lesson54Data = {
  id: 54,
  title: "False Gospels to Avoid",
  subtitle: "Recognizing counterfeits and distortions",
  duration: "9 min",
  cards: [
    {
      type: 'content',
      title: 'False Gospels to Avoid',
      subtitle: '⏱️ About 9 minutes',
      content: [
        '**Learning Objective:** Identify common distortions of the gospel.',
        'Not every message called "gospel" is the **true gospel**.',
        'Paul warned about **false gospels** (Galatians 1:6-9).',
        'Satan disguises himself as an angel of light (2 Cor 11:14).',
        'Let\'s learn to **recognize counterfeits**.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'False Gospel 1: Works Righteousness',
      content: [
        '**The Claim:** Faith + good works = salvation',
        '**Examples:**',
        '• You must keep the law/sacraments to be saved',
        '• Jesus died for you, but **you must earn your salvation**',
        '• "Do your best and God will do the rest"',
        '**Why it\'s false:**',
        '❌ **Nullifies grace** (Galatians 2:21 - "If righteousness were through the law, then Christ died for no purpose")',
        '❌ **Impossible standard**—no one can keep the law perfectly',
        '❌ **Makes the cross insufficient**',
        '**The true gospel:**',
        '✅ Salvation is by **grace alone through faith alone** (Ephesians 2:8-9)',
        '✅ Good works are the **result** of salvation, not the cause',
        '✅ Christ\'s righteousness is **imputed** (credited) to us',
        '**Paul\'s warning:** Galatians 1:8-9 - Anyone preaching a gospel of works is "accursed"'
      ]
    },
    {
      type: 'quiz',
      question: 'What\'s wrong with "faith + works = salvation"?',
      options: ['Works don\'t matter at all', 'It nullifies grace and makes Christ\'s death unnecessary', 'Works should come before faith', 'Nothing—it\'s correct'],
      correctAnswer: 1,
      explanation: 'Adding works to faith as a requirement for salvation nullifies grace. Galatians 2:21 says if righteousness comes through law-keeping, "Christ died for no purpose." Salvation is by grace alone through faith alone.'
    },
    {
      type: 'content',
      title: 'False Gospel 2: Cheap Grace',
      content: [
        '**The Claim:** God forgives; repentance and holiness don\'t matter',
        '**Examples:**',
        '• "Just pray a prayer and you\'re saved—live however you want"',
        '• "Grace means no judgment or accountability"',
        '• "Jesus accepts you as you are, so don\'t change"',
        '**Why it\'s false:**',
        '❌ **Ignores repentance**—Mark 1:15 says "Repent and believe"',
        '❌ **Ignores sanctification**—we\'re saved to become holy (1 Peter 1:15-16)',
        '❌ **Ignores Lordship**—Jesus is King, not just Savior',
        '**The true gospel:**',
        '✅ Grace is **free but not cheap**—it cost Jesus everything',
        '✅ Saving faith produces **transformation** (2 Cor 5:17)',
        '✅ True believers **persevere** in faith (1 John 2:19)',
        '**Dietrich Bonhoeffer:** "Cheap grace is grace without discipleship... Costly grace is the gospel which must be sought again and again."'
      ]
    },
    {
      type: 'content',
      title: 'False Gospel 3: Prosperity Gospel',
      content: [
        '**The Claim:** God wants you healthy, wealthy, and problem-free',
        '**Examples:**',
        '• "Have faith and God will make you rich"',
        '• "Sickness means lack of faith"',
        '• "God exists to give you your best life now"',
        '**Why it\'s false:**',
        '❌ **Contradicts Jesus\' teaching**—"In the world you will have tribulation" (John 16:33)',
        '❌ **Contradicts apostles\' experience**—they suffered greatly (2 Cor 11:23-28)',
        '❌ **Makes God a servant** instead of Lord',
        '**The true gospel:**',
        '✅ God **promises trials** for believers (2 Tim 3:12)',
        '✅ God uses **suffering** to sanctify us (Romans 5:3-5)',
        '✅ Our treasure is **in heaven**, not earth (Matthew 6:19-21)',
        '✅ True prosperity is **knowing Christ** (Philippians 3:8)',
        '**Paul said:** "I have learned in whatever situation I am to be content" (Phil 4:11)—not "I demand health and wealth".'
      ]
    },
    {
      type: 'content',
      title: 'False Gospel 4: Universalism',
      content: [
        '**The Claim:** Everyone will be saved; hell doesn\'t exist or is temporary',
        '**Examples:**',
        '• "A loving God wouldn\'t send anyone to hell"',
        '• "All religions lead to God"',
        '• "Eventually everyone will be reconciled to God"',
        '**Why it\'s false:**',
        '❌ **Contradicts Jesus** (Matthew 7:13-14 - "narrow gate"; Matthew 25:46 - eternal punishment)',
        '❌ **Makes evangelism pointless**—why preach if everyone\'s saved?',
        '❌ **Ignores human choice** to reject God',
        '**The true gospel:**',
        '✅ Jesus is the **only way** to the Father (John 14:6)',
        '✅ Hell is **real and eternal** (Revelation 20:10, 15)',
        '✅ God offers salvation freely, but **humans can reject it** (John 3:36)',
        '✅ Gospel is **urgent**—today is the day of salvation (2 Cor 6:2)',
        '**Jesus wept over Jerusalem because of their rejection—He doesn\'t force salvation on anyone (Luke 19:41-44).**'
      ]
    },
    {
      type: 'content',
      title: 'False Gospel 5: Moralistic Therapeutic Deism',
      content: [
        '**The Claim:** God exists to make you happy; just be a good person',
        '**Examples:**',
        '• "God wants you to be nice and feel good about yourself"',
        '• "Good people go to heaven; bad people go to hell"',
        '• "God is like a cosmic therapist"',
        '**Why it\'s false:**',
        '❌ **No need for Jesus** if being good is enough',
        '❌ **Reduces God to life-coach** instead of sovereign Lord',
        '❌ **Ignores sin\'s seriousness** and need for atonement',
        '**The true gospel:**',
        '✅ God\'s goal is **His glory**, not our comfort',
        '✅ No one is good enough (Romans 3:10-12)',
        '✅ **Jesus\' death** is essential because morality can\'t save',
        '✅ Holiness, not happiness, is the primary goal',
        '**Christian Smith (coined the term):** "This is not Christianity; it\'s a parasitic substitute."'
      ]
    },
    {
      type: 'matching',
      title: 'Match False Gospels',
      pairs: [
        { term: 'Works Righteousness', definition: 'Faith + good works = salvation (nullifies grace)' },
        { term: 'Cheap Grace', definition: 'Forgiveness without repentance or transformation' },
        { term: 'Prosperity Gospel', definition: 'God exists to make you healthy and wealthy' },
        { term: 'Universalism', definition: 'Everyone will be saved; hell doesn\'t exist' }
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You can now recognize false gospels! Guard the true gospel and warn others.',
      keyTakeaways: [
        'Works Righteousness: Adding works to faith nullifies grace',
        'Cheap Grace: True grace transforms; it\'s not permission to sin',
        'Prosperity Gospel: God promises trials, not health and wealth',
        'Universalism: Jesus is the only way; hell is real',
        'Moralistic Therapeutic Deism: God\'s glory, not our comfort, is primary'
      ],
      badge: { icon: '🛡️', name: 'Gospel Guardian', description: 'Completed Lesson 54: False Gospels to Avoid' }
    }
  ]
};

export const lesson55Data = {
  id: 55,
  title: "Galatians: Defending the True Gospel",
  subtitle: "Paul's fierce defense of grace alone",
  duration: "8 min",
  cards: [
    {
      type: 'content',
      title: 'Galatians: Defending the True Gospel',
      subtitle: '⏱️ About 8 minutes',
      content: [
        '**Learning Objective:** Understand Paul\'s passionate defense of the gospel in Galatians.',
        '**Galatians** is Paul\'s most **urgent** and **emotional** letter.',
        'The Galatian churches were being led astray by **false teachers**.',
        'Paul wrote to defend the **gospel of grace**.',
        'This letter is sometimes called the **"Magna Carta of Christian Liberty"**.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'The Crisis in Galatia',
      content: [
        '**The Problem:**',
        '🚨 **False teachers (Judaizers)** infiltrated the churches',
        '🚨 They taught: **Faith in Jesus + circumcision/law-keeping = salvation**',
        '🚨 Galatians were **deserting** the gospel (Gal 1:6)',
        '**Paul\'s reaction:**',
        '**Galatians 1:6-9** - "I am **astonished** that you are so quickly **deserting** him who called you... and are turning to a **different gospel**... But even if we or an angel from heaven should preach to you a gospel contrary to the one we preached, **let him be accursed**."',
        '**Paul is furious because:**',
        '• This distortion **nullifies the cross** (Gal 2:21)',
        '• It puts believers back under **slavery** to law (Gal 4:9)',
        '• It **denies the sufficiency of Christ**',
        '**The gospel itself is at stake.**'
      ]
    },
    {
      type: 'quiz',
      question: 'What were the Judaizers teaching in Galatia?',
      options: ['Jesus isn\'t divine', 'Faith in Jesus + circumcision/law = salvation', 'No resurrection', 'Deny the Old Testament'],
      correctAnswer: 1,
      explanation: 'The Judaizers taught that faith in Jesus plus circumcision and law-keeping equals salvation. Paul called this a "different gospel" that nullifies grace.'
    },
    {
      type: 'content',
      title: 'Paul\'s Core Argument',
      content: [
        '**Paul\'s central thesis: Justification is by faith alone, not works.**',
        '**Galatians 2:16** - "We know that a person is not justified by **works of the law** but through **faith in Jesus Christ**... because by works of the law no one will be justified."',
        '**Galatians 2:21** - "I do not nullify the grace of God, for **if righteousness were through the law, then Christ died for no purpose**."',
        '**Key points:**',
        '✅ **Abraham** was justified by faith, not law (Gal 3:6)',
        '✅ The **law\'s purpose** was to show us our need for Christ (Gal 3:24)',
        '✅ We are **sons of God** through faith, not law (Gal 3:26)',
        '✅ Christ **redeemed us** from the curse of the law (Gal 3:13)',
        '**Illustration:** Why would you go back to slavery after being freed? (Gal 4:8-9)',
        '**The law can\'t save—it can only condemn. Only Christ saves.**'
      ]
    },
    {
      type: 'content',
      title: 'Freedom in Christ',
      content: [
        '**Paul\'s famous declaration:**',
        '**Galatians 5:1** - "For **freedom** Christ has set us free; stand firm therefore, and do not submit again to a **yoke of slavery**."',
        '**What this freedom means:**',
        '✅ **Freedom FROM:**',
        '• The law\'s condemnation (Rom 8:1)',
        '• The need to earn salvation',
        '• Religious legalism and performance',
        '✅ **Freedom FOR:**',
        '• Living by the Spirit (Gal 5:16)',
        '• Serving one another in love (Gal 5:13)',
        '• Bearing the fruit of the Spirit (Gal 5:22-23)',
        '**Important:** Freedom is not license to sin (Gal 5:13).',
        '**The gospel frees us from slavery to sin and law so we can serve God joyfully.**'
      ]
    },
    {
      type: 'content',
      title: 'Walking by the Spirit',
      content: [
        '**How do Christians live after being justified by faith?**',
        '**Galatians 5:16** - "**Walk by the Spirit**, and you will not gratify the desires of the flesh."',
        '**Galatians 5:22-23** - "The **fruit of the Spirit** is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control."',
        '**Paul\'s point:**',
        '✅ You don\'t become righteous by **trying harder** (law)',
        '✅ You become righteous by **depending on the Spirit** (grace)',
        '✅ The Christian life is **supernatural**, not self-effort',
        '**Galatians 2:20** - "I have been crucified with Christ. It is no longer I who live, but **Christ who lives in me**. And the life I now live in the flesh I live by **faith in the Son of God**, who loved me and gave himself for me."',
        '**Gospel-centered living:** Trust Jesus for salvation, trust the Spirit for transformation.'
      ]
    },
    {
      type: 'content',
      title: 'Application for Today',
      content: [
        '**How does Galatians apply to modern Christians?**',
        '**1. Guard the gospel from distortion:**',
        '• Any message that adds requirements to faith (baptism, good works, church attendance) is a false gospel',
        '**2. Live in gospel freedom:**',
        '• Don\'t go back to legalism (rule-following to earn God\'s favor)',
        '• Don\'t abuse freedom as license to sin',
        '**3. Depend on the Spirit:**',
        '• Spiritual growth comes from grace, not self-effort',
        '• Focus on Christ, not performance',
        '**4. Stand firm:**',
        '• Don\'t let anyone guilt you into works-based religion',
        '• Jesus\' work is **sufficient**',
        '**Galatians reminds us:** The gospel is grace from start to finish. Sola gratia—grace alone!'
      ]
    },
    {
      type: 'fillblank',
      title: 'Complete Paul\'s Declaration',
      sentence: 'For ____ Christ has set us free; stand firm therefore, and do not submit again to a yoke of ____.',
      blanks: ['freedom', 'slavery'],
      options: ['freedom', 'slavery', 'grace', 'law', 'faith', 'works']
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You understand Paul\'s defense of the gospel in Galatians! Stand firm in gospel freedom.',
      keyTakeaways: [
        'False teachers taught faith + law = salvation; Paul called this accursed',
        'Justification is by faith alone, not works of the law',
        'Christ freed us from law\'s slavery to live by the Spirit',
        'Freedom is not license to sin but power to serve in love',
        'Christian life is Spirit-empowered, not self-effort'
      ],
      badge: { icon: '⚔️', name: 'Gospel Defender', description: 'Completed Lesson 55: Galatians Defense' }
    }
  ]
};

export const lesson56Data = {
  id: 56,
  title: "Proclaiming the Gospel Today",
  subtitle: "How to share the good news effectively",
  duration: "9 min",
  cards: [
    {
      type: 'content',
      title: 'Proclaiming the Gospel Today',
      subtitle: '⏱️ About 9 minutes',
      content: [
        '**Learning Objective:** Learn how to communicate the gospel clearly and winsomely in modern contexts.',
        'Every Christian is called to **proclaim the gospel**.',
        '**Matthew 28:19-20** - "Go therefore and make disciples of all nations..."',
        'But how do we **share it effectively** in our culture?',
        'Let\'s learn **practical principles** for gospel proclamation.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Know the Gospel Inside Out',
      content: [
        '**Before you can share the gospel, you must understand it deeply.**',
        '**Core gospel elements (review):**',
        '✅ **God** - Holy Creator who deserves worship',
        '✅ **Sin** - We all rebelled against God',
        '✅ **Christ** - God became man, died for our sins, rose from dead',
        '✅ **Response** - Repent and believe',
        '✅ **Result** - Forgiveness, new life, eternal hope',
        '**Can you explain the gospel in 60 seconds? 5 minutes? 30 minutes?**',
        '**Practice different lengths:**',
        '• **One sentence:** "Jesus died for sinners and rose again; repent and believe in Him for salvation."',
        '• **One paragraph:** Add context about God, sin\'s consequences, Christ\'s substitution, faith response',
        '• **Full presentation:** Include Old Testament context, Jesus\' life, cross, resurrection, implications',
        '**Know it so well you can adapt to any situation.**'
      ]
    },
    {
      type: 'content',
      title: 'Understand Your Audience',
      content: [
        '**Effective gospel communication requires knowing your audience.**',
        '**Ask:**',
        '🤔 What is their **worldview**? (Secular? Religious? Post-Christian?)',
        '🤔 What **objections** might they have?',
        '🤔 What **longings** or needs do they feel?',
        '🤔 What **language** will connect?',
        '**Examples:**',
        '**To secular friends:**',
        '• Start with common ground (longing for meaning, justice)',
        '• Show how the gospel addresses real problems',
        '• Use **story** more than theological jargon',
        '**To religious friends:**',
        '• Emphasize **grace vs. works**',
        '• Show Jesus as fulfillment of their seeking',
        '**To post-Christians:**',
        '• Address **past hurt** or misunderstandings about Christianity',
        '• Distinguish between cultural Christianity and true gospel',
        '**1 Corinthians 9:22** - "I have become all things to all people, that by all means I might save some."'
      ]
    },
    {
      type: 'quiz',
      question: 'What does it mean to "contextualize" the gospel?',
      options: ['Change the gospel message for each person', 'Adapt presentation to audience while keeping core message unchanged', 'Make the gospel easier by removing hard parts', 'Add cultural traditions to the gospel'],
      correctAnswer: 1,
      explanation: 'Contextualizing means adapting the presentation and language to connect with your audience, while keeping the core gospel message unchanged. Paul modeled this (1 Cor 9:22).'
    },
    {
      type: 'content',
      title: 'Use Stories and Testimonies',
      content: [
        '**People connect with stories.**',
        '**Jesus used parables** to communicate truth.',
        '**The Gospels** are narrative accounts of Jesus\' life.',
        '**How to use stories:**',
        '✅ **Tell your own story:**',
        '• What was your life like before Christ?',
        '• How did you come to faith?',
        '• How has Jesus changed you?',
        '✅ **Tell Jesus\' story:**',
        '• Focus on His life, death, and resurrection',
        '• Make it vivid and compelling',
        '✅ **Tell the big story:**',
        '• Creation → Fall → Redemption → Restoration',
        '• Show how the gospel fits into God\'s plan for history',
        '**Acts 26** - Paul shares his testimony before King Agrippa.',
        '**1 Peter 3:15** - "Always being prepared to make a defense to anyone who asks you for a reason for the hope that is in you."',
        '**Your story + Jesus\' story = powerful testimony.**'
      ]
    },
    {
      type: 'content',
      title: 'Address Objections with Grace',
      content: [
        '**People will have questions and objections. Be ready.**',
        '**Common objections:**',
        '❓ "How can a loving God send people to hell?"',
        '• Response: God respects human choice; hell is consequence of rejecting God',
        '❓ "What about people who never heard the gospel?"',
        '• Response: God is just and will judge rightly; our job is to share gospel so people **do** hear',
        '❓ "Isn\'t Christianity just one path among many?"',
        '• Response: Jesus claimed to be **the** way, truth, life (John 14:6); test His claims',
        '❓ "Why do Christians do bad things?"',
        '• Response: Christians aren\'t perfect, just forgiven; gospel addresses hypocrisy',
        '**How to respond:**',
        '✅ **Listen well** - Understand the real concern',
        '✅ **Show empathy** - Acknowledge difficulty',
        '✅ **Answer thoughtfully** - Don\'t dodge hard questions',
        '✅ **Point to Jesus** - He\'s the answer, not us',
        '**Colossians 4:6** - "Let your speech always be gracious, seasoned with salt."'
      ]
    },
    {
      type: 'content',
      title: 'Depend on the Holy Spirit',
      content: [
        '**You can\'t save anyone—only God can.**',
        '**1 Corinthians 3:6-7** - "I planted, Apollos watered, but **God gave the growth**. So neither he who plants nor he who waters is anything, but only **God who gives the growth**."',
        '**The Holy Spirit:**',
        '✅ **Convicts** of sin (John 16:8)',
        '✅ **Opens blind eyes** to see truth (2 Cor 4:4-6)',
        '✅ **Regenerates** dead hearts (Titus 3:5)',
        '✅ **Gives** faith as a gift (Eph 2:8)',
        '**Your job:**',
        '• **Proclaim** the message faithfully',
        '• **Pray** for the Spirit to work',
        '• **Trust** God with results',
        '**Pressure is off:** You\'re a witness, not the Savior.',
        '**Acts 1:8** - "You will receive power when the Holy Spirit has come upon you, and you will be my **witnesses**."',
        '**Speak boldly, trust God, and watch Him work.**'
      ]
    },
    {
      type: 'content',
      title: 'Live the Gospel Authentically',
      content: [
        '**The most powerful apologetic is a transformed life.**',
        '**Matthew 5:16** - "Let your light shine before others, so that they may see your **good works** and **give glory to your Father** who is in heaven."',
        '**Gospel-centered living:**',
        '✅ **Love sacrificially** - Demonstrate Christ\'s love',
        '✅ **Forgive freely** - You\'ve been forgiven much',
        '✅ **Serve humbly** - Jesus came to serve (Mark 10:45)',
        '✅ **Live with joy** - Gospel gives unshakable hope',
        '✅ **Admit weakness** - Gospel is for broken people',
        '**People are watching:**',
        '• Does your life **match your message**?',
        '• Do you display the **fruit of the Spirit**? (Gal 5:22-23)',
        '• Are you **quick to repent** when you fail?',
        '**1 Peter 2:12** - "Keep your conduct among the Gentiles honorable, so that... they may see your good deeds and **glorify God**."',
        '**Walk the talk. Let your life preach the gospel.**'
      ]
    },
    {
      type: 'matching',
      title: 'Match Gospel Proclamation Principles',
      pairs: [
        { term: 'Know the Gospel', definition: 'Understand it deeply and practice explaining it clearly' },
        { term: 'Understand Audience', definition: 'Contextualize presentation to connect with their worldview' },
        { term: 'Use Stories', definition: 'Tell your story, Jesus\' story, and the big story' },
        { term: 'Depend on Spirit', definition: 'God gives growth—you proclaim, pray, trust' }
      ]
    },
    {
      type: 'reflection',
      title: 'Reflect on Your Gospel Witness',
      prompt: 'Who in your life needs to hear the gospel? What\'s one way you can share it with them this week?',
      placeholder: 'Write your thoughts about someone who needs the gospel and how you might share it...'
    },
    {
      type: 'completion',
      title: 'Gospel Message Path Complete! 🎉',
      message: 'You\'ve completed the Gospel Message path! Now go proclaim the good news!',
      keyTakeaways: [
        'Know the gospel deeply and practice explaining it clearly',
        'Understand your audience and contextualize presentation',
        'Use stories and testimonies to make the gospel compelling',
        'Address objections with grace and thoughtfulness',
        'Depend on the Holy Spirit to give growth—you\'re a witness',
        'Live the gospel authentically so your life matches your message',
        'Proclaim Jesus crucified and risen—this is the power of God for salvation'
      ],
      badge: { icon: '🏆', name: 'Gospel Message Master', description: 'Completed ALL 8 Lessons: Gospel Message Path' }
    }
  ]
};

// Lessons 57-64 for Discerning Truth Path

export const lesson57Data = {
  id: 57,
  title: "Orthodox vs. Heterodox Teaching",
  subtitle: "Distinguishing sound doctrine from error",
  duration: "8 min",
  cards: [
    {
      type: 'content',
      title: 'Orthodox vs. Heterodox Teaching',
      subtitle: '⏱️ About 8 minutes',
      content: [
        '**Learning Objective:** Understand the difference between orthodox (right belief) and heterodox (false teaching).',
        'The word **"orthodox"** comes from Greek:',
        '• *Orthos* = right, straight, correct',
        '• *Doxa* = belief, glory, opinion',
        '**Orthodox = right belief**',
        '**Heterodox = different/false belief**',
        'Christians must **discern truth from error**.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'What Is Orthodoxy?',
      content: [
        '**Orthodoxy** = teachings that conform to Scripture and historic Christian creeds.',
        '**Core orthodox beliefs:**',
        '✅ **Trinity** - One God in three persons (Father, Son, Holy Spirit)',
        '✅ **Incarnation** - Jesus is fully God and fully human',
        '✅ **Atonement** - Jesus died for our sins',
        '✅ **Resurrection** - Jesus rose bodily from the dead',
        '✅ **Salvation by grace** - Through faith alone in Christ alone',
        '✅ **Scripture\'s authority** - God\'s inspired, inerrant Word',
        '✅ **Jesus\' return** - He will come again to judge and reign',
        '**Historic creeds define orthodoxy:**',
        '• **Apostles\' Creed** (basics of Christian faith)',
        '• **Nicene Creed** (Trinity, deity of Christ)',
        '• **Chalcedonian Definition** (two natures of Christ)',
        '**These beliefs have been affirmed by Christians across all traditions for 2,000 years.**'
      ]
    },
    {
      type: 'quiz',
      question: 'What does "orthodoxy" mean?',
      options: ['Following church traditions', 'Right belief that conforms to Scripture and creeds', 'Being part of Orthodox Church', 'Strict religious rules'],
      correctAnswer: 1,
      explanation: 'Orthodoxy means "right belief"—teachings that conform to Scripture and have been affirmed by Christians throughout history in creeds like the Nicene Creed.'
    },
    {
      type: 'content',
      title: 'What Is Heterodoxy?',
      content: [
        '**Heterodoxy** = teachings that deviate from orthodox Christianity.',
        '**Examples of heterodox teachings:**',
        '❌ **Arianism** - Jesus is a created being, not eternal God',
        '❌ **Modalism** - God is one person who appears in three modes (not three persons)',
        '❌ **Gnosticism** - Special knowledge saves; physical world is evil',
        '❌ **Pelagianism** - Humans can save themselves by good works',
        '❌ **Prosperity Gospel** - God promises health and wealth',
        '❌ **Universalism** - Everyone is saved; no hell',
        '**Why heterodoxy is dangerous:**',
        '⚠️ **Distorts who God is**',
        '⚠️ **Distorts how salvation works**',
        '⚠️ **Leads people away from truth**',
        '⚠️ **Undermines the gospel**',
        '**The Bible warns about false teaching:** 2 Peter 2:1 - "There will be false teachers among you, who will secretly bring in destructive heresies."'
      ]
    },
    {
      type: 'content',
      title: 'Why Orthodoxy Matters',
      content: [
        '**Some say:** "Doctrine divides; just love Jesus."',
        '**But orthodoxy is essential because:**',
        '✅ **Identity:** Orthodoxy tells us **who Jesus is** (God incarnate? Created being? Teacher?)',
        '✅ **Salvation:** Orthodoxy tells us **how we\'re saved** (grace alone? Works? Knowledge?)',
        '✅ **Worship:** We must worship the **true God**, not a false one',
        '✅ **Stability:** False teaching "tosses us to and fro" (Eph 4:14)',
        '**1 Timothy 4:16** - "Keep a close watch on yourself and on the teaching. Persist in this, for by so doing you will **save both yourself and your hearers**."',
        '**Jude 3** - "Contend for the faith that was **once for all delivered** to the saints."',
        '**Right belief leads to right living, right worship, and salvation.**'
      ]
    },
    {
      type: 'content',
      title: 'How to Identify Heterodox Teaching',
      content: [
        '**Red flags of false teaching:**',
        '🚩 **Denies core doctrines** (Trinity, deity of Christ, salvation by grace)',
        '🚩 **Adds to the gospel** (faith + works, faith + special knowledge)',
        '🚩 **Claims new revelation** beyond Scripture',
        '🚩 **Elevates a teacher** above Scripture',
        '🚩 **Produces bad fruit** (division, manipulation, fear)',
        '**Tests for orthodoxy:**',
        '✅ **Scripture** - Does it align with the whole Bible?',
        '✅ **Creeds** - Does it match historic Christian belief?',
        '✅ **Fruit** - Does it produce Christ-like character?',
        '**1 John 4:1** - "Beloved, do not believe every spirit, but **test the spirits** to see whether they are from God, for many false prophets have gone out into the world."',
        '**Acts 17:11** - The Bereans "examined the Scriptures daily to see if these things were so." Be a Berean!'
      ]
    },
    {
      type: 'matching',
      title: 'Match Orthodox vs. Heterodox',
      pairs: [
        { term: 'Orthodox', definition: 'Right belief conforming to Scripture and historic creeds' },
        { term: 'Heterodox', definition: 'False teaching that deviates from Christian orthodoxy' },
        { term: 'Arianism', definition: 'Heresy claiming Jesus is a created being, not eternal God' },
        { term: '1 John 4:1', definition: 'Test the spirits to see if they are from God' }
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You understand the difference between orthodox and heterodox teaching! Learn to discern.',
      keyTakeaways: [
        'Orthodoxy = right belief conforming to Scripture and historic creeds',
        'Core orthodox beliefs: Trinity, Incarnation, Atonement, Resurrection, Salvation by grace',
        'Heterodoxy = false teaching that deviates from orthodoxy',
        'Orthodoxy matters because it shapes our understanding of God, salvation, and worship',
        'Test all teaching against Scripture, creeds, and fruit'
      ],
      badge: { icon: '⚖️', name: 'Orthodoxy Defender', description: 'Completed Lesson 57: Orthodox vs. Heterodox' }
    }
  ]
};

export const lesson58Data = {
  id: 58,
  title: "Red Flags of False Teaching",
  subtitle: "Warning signs to watch for",
  duration: "9 min",
  cards: [
    {
      type: 'content',
      title: 'Red Flags of False Teaching',
      subtitle: '⏱️ About 9 minutes',
      content: [
        '**Learning Objective:** Identify warning signs of false teachers and teaching.',
        'Jesus warned: **"Beware of false prophets"** (Matthew 7:15).',
        'Paul warned about **"wolves in sheep\'s clothing"** (Acts 20:29).',
        'Peter warned about **"destructive heresies"** (2 Peter 2:1).',
        'Let\'s learn to **recognize the red flags**.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Red Flag 1: Denying Core Doctrines',
      content: [
        '**The biggest red flag: Denying essential Christian truths.**',
        '**Examples:**',
        '❌ **Jehovah\'s Witnesses** - Deny Trinity and deity of Christ',
        '❌ **Mormonism** - Teaches God was once a man; many gods exist',
        '❌ **Oneness Pentecostalism** - Denies three persons in Trinity',
        '❌ **Christian Science** - Denies Jesus\' physical death and resurrection',
        '**What the Bible says:**',
        '**1 John 4:2-3** - "Every spirit that confesses that Jesus Christ has come in the flesh is from God, and every spirit that does not confess Jesus is not from God. This is the spirit of the **antichrist**."',
        '**2 John 7-11** - "Many deceivers have gone out into the world, those who do not confess the coming of Jesus Christ in the flesh. Such a one is the **deceiver and the antichrist**... Do not receive him into your house."',
        '**Denying core doctrines = not Christianity, even if they use Christian language.**'
      ]
    },
    {
      type: 'quiz',
      question: 'According to 1 John 4:2-3, what\'s a key test of orthodoxy?',
      options: ['Attending church regularly', 'Confessing Jesus Christ came in the flesh', 'Following moral rules', 'Having spiritual experiences'],
      correctAnswer: 1,
      explanation: '1 John 4:2-3 says every spirit that confesses Jesus Christ has come in the flesh is from God. Denying the incarnation (God becoming human) is a mark of antichrist.'
    },
    {
      type: 'content',
      title: 'Red Flag 2: Adding to the Gospel',
      content: [
        '**False teachers often add requirements to the gospel.**',
        '**Examples:**',
        '❌ "Faith in Jesus + **circumcision** = salvation" (Galatians)',
        '❌ "Faith in Jesus + **keeping the Sabbath** = salvation"',
        '❌ "Faith in Jesus + **speaking in tongues** = salvation"',
        '❌ "Faith in Jesus + **being baptized in our church** = salvation"',
        '**What the Bible says:**',
        '**Galatians 1:8-9** - "Even if we or an angel from heaven should preach to you a gospel contrary to the one we preached to you, **let him be accursed**."',
        '**Ephesians 2:8-9** - "For by grace you have been saved through faith. And this is not your own doing; it is the **gift of God**, not a result of works."',
        '**Any addition to "faith alone in Christ alone" distorts the gospel.**'
      ]
    },
    {
      type: 'content',
      title: 'Red Flag 3: Claiming Authority Above Scripture',
      content: [
        '**False teachers often claim authority equal to or above the Bible.**',
        '**Examples:**',
        '❌ **"God gave me a new revelation"** (contradicts Scripture)',
        '❌ **"The Pope is infallible when speaking ex cathedra"** (RCC)',
        '❌ **"Our prophet\'s words are as authoritative as the Bible"** (Mormonism)',
        '❌ **"The Holy Spirit told me..."** (used to justify unbiblical teaching)',
        '**What the Bible says:**',
        '**Revelation 22:18-19** - "I warn everyone who hears the words of the prophecy of this book: if anyone **adds** to them, God will add to him the plagues described in this book."',
        '**Hebrews 1:1-2** - "Long ago... God spoke... by the prophets, but in these last days **he has spoken to us by his Son**."',
        '**2 Timothy 3:16-17** - "All Scripture is breathed out by God and profitable... that the man of God may be **complete**."',
        '**Scripture is sufficient. No new revelation needed.**'
      ]
    },
    {
      type: 'content',
      title: 'Red Flag 4: Manipulative Control',
      content: [
        '**False teachers often use fear, guilt, and control.**',
        '**Warning signs:**',
        '🚩 **Isolation** - Discourage relationships outside the group',
        '🚩 **Financial exploitation** - Demand money with promises of blessing',
        '🚩 **Unquestionable authority** - Leaders can\'t be challenged',
        '🚩 **Spiritual abuse** - Use God\'s name to manipulate',
        '🚩 **Secrecy** - Hide teachings or practices from outsiders',
        '**What the Bible says:**',
        '**Matthew 20:25-28** - Jesus said leaders should **serve**, not lord it over others',
        '**Acts 17:11** - Bereans **examined the Scriptures** to test Paul\'s teaching',
        '**1 Peter 5:2-3** - Elders should shepherd "not domineering over those in your charge"',
        '**Healthy churches encourage questions, accountability, and testing teaching against Scripture.**'
      ]
    },
    {
      type: 'content',
      title: 'Red Flag 5: Bad Fruit',
      content: [
        '**Jesus said:** "You will recognize them by their fruits" (Matthew 7:16).',
        '**Bad fruit of false teaching:**',
        '🍂 **Moral compromise** - Leaders living in unrepentant sin',
        '🍂 **Division and strife** - Constant conflict and splits',
        '🍂 **Pride and arrogance** - Leaders exalting themselves',
        '🍂 **Hypocrisy** - "Do as I say, not as I do"',
        '🍂 **Fear-based control** - Constant guilt and condemnation',
        '**Good fruit of true teaching:**',
        '🍇 **Love, joy, peace** (Fruit of the Spirit - Gal 5:22-23)',
        '🍇 **Humility and service**',
        '🍇 **Unity in essentials** (Eph 4:3)',
        '🍇 **Christ-like character** (sanctification)',
        '🍇 **Freedom in Christ** (not legalism or license)',
        '**If the teaching doesn\'t produce Christlikeness, it\'s not from Christ.**'
      ]
    },
    {
      type: 'content',
      title: 'How to Respond to False Teaching',
      content: [
        '**When you encounter false teaching:**',
        '✅ **Test it against Scripture** (Acts 17:11)',
        '✅ **Consult historic creeds** (Nicene, Apostles\', Chalcedonian)',
        '✅ **Seek wise counsel** (Proverbs 11:14)',
        '✅ **Warn others** (Jude 3 - "contend for the faith")',
        '✅ **Separate if necessary** (2 John 10-11; Romans 16:17)',
        '**Balance two truths:**',
        '⚖️ **Be discerning:** "Test everything; hold fast what is good" (1 Thess 5:21)',
        '⚖️ **Be gracious:** Correct "with gentleness" (2 Tim 2:25)',
        '**Don\'t be:**',
        '❌ **Gullible** - Believing everything without testing',
        '❌ **Hyper-critical** - Seeing heresy in every disagreement',
        '**Discernment requires wisdom, humility, and reliance on the Holy Spirit.**'
      ]
    },
    {
      type: 'fillblank',
      title: 'Complete the Warning',
      sentence: 'Jesus said: "Beware of false ____, who come to you in sheep\'s ____ but inwardly are ravenous ____" (Matthew 7:15).',
      blanks: ['prophets', 'clothing', 'wolves'],
      options: ['prophets', 'clothing', 'wolves', 'teachers', 'robes', 'lions', 'friends', 'disguise']
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You can now recognize red flags of false teaching! Stay vigilant and test everything.',
      keyTakeaways: [
        'Red Flag 1: Denying core doctrines (Trinity, deity of Christ, etc.)',
        'Red Flag 2: Adding requirements to the gospel (faith + works)',
        'Red Flag 3: Claiming authority above Scripture',
        'Red Flag 4: Manipulative control (isolation, financial exploitation, spiritual abuse)',
        'Red Flag 5: Bad fruit (moral compromise, division, pride, fear-based)',
        'Test all teaching against Scripture, consult creeds, seek wise counsel'
      ],
      badge: { icon: '🚩', name: 'Discernment Warrior', description: 'Completed Lesson 58: Red Flags of False Teaching' }
    }
  ]
};

export const lesson59Data = {
  id: 59,
  title: "Learning from the Church Fathers",
  subtitle: "How early Christians defended truth",
  duration: "8 min",
  cards: [
    {
      type: 'content',
      title: 'Learning from the Church Fathers',
      subtitle: '⏱️ About 8 minutes',
      content: [
        '**Learning Objective:** Learn how the early Church Fathers defended orthodoxy against heresies.',
        'The **Church Fathers** were early Christian theologians who shaped doctrine.',
        'They faced **heresies** and defended the faith with Scripture and reason.',
        'Their writings provide **timeless wisdom** for discernment.',
        'Let\'s learn from their **example**.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Why Study the Church Fathers?',
      content: [
        '**Reasons to study the Church Fathers:**',
        '✅ **Historical continuity** - They\'re closest to the apostles',
        '✅ **Doctrinal clarity** - They defined orthodoxy against heresies',
        '✅ **Biblical interpretation** - They show how early Christians read Scripture',
        '✅ **Practical wisdom** - They faced similar challenges we face',
        '**Key periods:**',
        '📖 **Apostolic Fathers** (AD 90-150) - Knew apostles or their disciples (Clement, Ignatius, Polycarp)',
        '📖 **Apologists** (AD 150-300) - Defended Christianity to pagans (Justin Martyr, Tertullian)',
        '📖 **Post-Nicene Fathers** (AD 325-500) - Theologians after Nicaea (Athanasius, Augustine, Gregory)',
        '**These men wrestled with Scripture, fought heresies, and shaped the faith we inherit.**'
      ]
    },
    {
      type: 'quiz',
      question: 'Who were the Church Fathers?',
      options: ['The twelve apostles', 'Early Christian theologians who defended orthodoxy', 'Medieval monks', 'Reformation leaders'],
      correctAnswer: 1,
      explanation: 'The Church Fathers were early Christian theologians and bishops (AD 90-500) who defended orthodoxy, fought heresies, and shaped Christian doctrine.'
    },
    {
      type: 'content',
      title: 'Fighting Gnosticism',
      content: [
        '**Gnosticism** was a major early heresy.',
        '**Gnostic beliefs:**',
        '❌ **Secret knowledge** (gnosis) saves, not faith in Christ',
        '❌ **Physical world is evil**; only spiritual matters',
        '❌ **Jesus only seemed human** (Docetism); body was illusion',
        '**Church Fathers who fought Gnosticism:**',
        '**Irenaeus (AD 130-202)**',
        '• Wrote *Against Heresies* refuting Gnostic claims',
        '• Emphasized **apostolic succession** and **Rule of Faith**',
        '• Affirmed Jesus\' **full humanity** and **bodily resurrection**',
        '**Key quote:** "The glory of God is a human being fully alive, and the life of man consists in beholding God."',
        '**Lesson:** False teaching often **denies the incarnation** or **makes salvation about knowledge instead of Christ**.'
      ]
    },
    {
      type: 'content',
      title: 'Fighting Arianism',
      content: [
        '**Arianism** taught Jesus is a created being, not eternal God.',
        '**Why it matters:**',
        '• If Jesus isn\'t fully God, He can\'t save us',
        '• Only God can atone for infinite sin',
        '**Athanasius (AD 296-373)**',
        '• Bishop of Alexandria who fought Arianism his entire life',
        '• Attended Council of Nicaea (AD 325) where Arianism was condemned',
        '• Wrote *On the Incarnation* defending Christ\'s deity',
        '**Key quote:** "God became man so that man might become god" (meaning partakers of divine nature, not literally becoming God).',
        '**Athanasius\' argument:**',
        '✅ Scripture calls Jesus **"God"** (John 1:1, 20:28, Titus 2:13)',
        '✅ Jesus has divine **attributes** (eternal, omniscient, omnipotent)',
        '✅ Jesus does divine **works** (creates, forgives sins, raises dead)',
        '**Lesson:** The deity of Christ is non-negotiable. Jesus is **fully God**, not a lesser being.'
      ]
    },
    {
      type: 'content',
      title: 'Fighting Pelagianism',
      content: [
        '**Pelagianism** taught humans can save themselves without grace.',
        '**Pelagian beliefs:**',
        '❌ Humans are born morally neutral (no original sin)',
        '❌ We can obey God perfectly by willpower',
        '❌ Grace just helps; it\'s not necessary',
        '**Augustine of Hippo (AD 354-430)**',
        '• Bishop in North Africa who fought Pelagianism',
        '• Wrote *Confessions* and *City of God*',
        '• Emphasized **total depravity**, **original sin**, and **irresistible grace**',
        '**Key quote:** "Lord, command what you will, and grant what you command."',
        '**Augustine\'s argument:**',
        '✅ **Romans 3:10-12** - "None is righteous, no, not one"',
        '✅ **Ephesians 2:1** - We are "dead in trespasses" (can\'t save ourselves)',
        '✅ **John 6:44** - "No one can come to me unless the Father draws him"',
        '**Lesson:** Salvation is **by grace alone**. We can\'t earn it; God must give it.'
      ]
    },
    {
      type: 'content',
      title: 'Lessons from the Fathers',
      content: [
        '**What can we learn from the Church Fathers?**',
        '✅ **Scripture is the ultimate authority** - They tested everything by the Bible',
        '✅ **Creeds summarize orthodoxy** - Use them as guardrails',
        '✅ **Heresies recycle** - False teachings today mirror ancient ones',
        '✅ **Defend truth with courage** - Athanasius stood "against the world"',
        '✅ **Depend on God\'s grace** - Augustine shows we need God\'s power',
        '**Modern applications:**',
        '• **New Age spirituality** mirrors Gnosticism (secret knowledge)',
        '• **Jehovah\'s Witnesses** mirror Arianism (Jesus is created)',
        '• **Moralistic religion** mirrors Pelagianism (save yourself)',
        '**The Church Fathers give us a roadmap for discernment in every age.**'
      ]
    },
    {
      type: 'matching',
      title: 'Match Church Fathers and Heresies',
      pairs: [
        { term: 'Irenaeus', definition: 'Fought Gnosticism; affirmed Jesus\' full humanity' },
        { term: 'Athanasius', definition: 'Fought Arianism; defended deity of Christ' },
        { term: 'Augustine', definition: 'Fought Pelagianism; emphasized grace alone' },
        { term: 'Gnosticism', definition: 'Heresy teaching secret knowledge saves, body is evil' }
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You\'ve learned from the Church Fathers! Their wisdom guides us today.',
      keyTakeaways: [
        'Church Fathers defended orthodoxy against early heresies',
        'Irenaeus fought Gnosticism (secret knowledge, denied incarnation)',
        'Athanasius fought Arianism (Jesus is created, not eternal God)',
        'Augustine fought Pelagianism (humans can save themselves)',
        'Ancient heresies recycle today—learn from history',
        'Scripture is ultimate authority; creeds summarize orthodoxy'
      ],
      badge: { icon: '📜', name: 'Patristic Scholar', description: 'Completed Lesson 59: Learning from Church Fathers' }
    }
  ]
};

export const lesson60Data = {
  id: 60,
  title: "Theological Triage",
  subtitle: "Distinguishing essentials from non-essentials",
  duration: "8 min",
  cards: [
    {
      type: 'content',
      title: 'Theological Triage',
      subtitle: '⏱️ About 8 minutes',
      content: [
        '**Learning Objective:** Learn to distinguish between essential, important, and non-essential doctrines.',
        '**"Theological triage"** is a framework for prioritizing doctrines.',
        '• Just as medical triage prioritizes urgent vs. minor injuries...',
        '• **Theological triage** prioritizes doctrines by importance.',
        'Not all doctrines are **equally essential**.',
        'Let\'s learn to **discern what matters most**.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Three Levels of Doctrine',
      content: [
        '**Dr. Albert Mohler** popularized the "theological triage" framework:',
        '**First-Order Doctrines (Essentials)**',
        '• Define Christianity itself',
        '• Deny these = not a Christian',
        '• Examples: Trinity, deity of Christ, salvation by grace, resurrection',
        '**Second-Order Doctrines (Important)**',
        '• Important but allow for disagreement among Christians',
        '• May affect church membership or partnership',
        '• Examples: baptism (mode, subjects), church government, spiritual gifts',
        '**Third-Order Doctrines (Non-Essentials)**',
        '• Least important; Christians can disagree freely',
        '• Should not divide believers',
        '• Examples: end-times details, worship style, Bible translation preference',
        '**The saying:** "In essentials, unity; in non-essentials, liberty; in all things, charity."'
      ]
    },
    {
      type: 'quiz',
      question: 'What are first-order doctrines?',
      options: ['Doctrines Christians can disagree on', 'Essentials that define Christianity—deny them and you\'re not Christian', 'Doctrines about church practice', 'Minor theological opinions'],
      correctAnswer: 1,
      explanation: 'First-order doctrines are essentials that define Christianity itself (like Trinity, deity of Christ, salvation by grace). Denying these means you\'re not a Christian.'
    },
    {
      type: 'content',
      title: 'First-Order Doctrines (Essentials)',
      content: [
        '**Non-negotiable truths that define Christianity:**',
        '✅ **Trinity** - One God in three persons',
        '✅ **Deity of Christ** - Jesus is fully God and fully human',
        '✅ **Virgin birth and sinless life** of Jesus',
        '✅ **Substitutionary atonement** - Jesus died for our sins',
        '✅ **Bodily resurrection** of Jesus',
        '✅ **Salvation by grace through faith alone**',
        '✅ **Authority and inspiration of Scripture**',
        '✅ **Jesus\' second coming and final judgment**',
        '**These are affirmed in the historic creeds** (Apostles\', Nicene, Chalcedonian).',
        '**Deny any of these and you\'ve left historic Christianity.**',
        '**Biblical basis:** 1 Corinthians 15:3-5 (gospel); John 1:1, 14 (deity); Ephesians 2:8-9 (grace)',
        '**Fight for these. Don\'t compromise.**'
      ]
    },
    {
      type: 'content',
      title: 'Second-Order Doctrines (Important)',
      content: [
        '**Important doctrines where Bible-believing Christians disagree:**',
        '**Baptism**',
        '• Mode: immersion vs. sprinkling',
        '• Subjects: believers only vs. infants',
        '**Church Government**',
        '• Congregational, Presbyterian, Episcopal',
        '**Spiritual Gifts**',
        '• Cessationist (gifts ceased) vs. continuationist (gifts continue)',
        '**Gender Roles**',
        '• Complementarian vs. egalitarian',
        '**Why second-order?**',
        '• **Not gospel issues** - You can disagree and both be Christians',
        '• **May affect church membership** - Baptist church requires believer\'s baptism',
        '• **Require humility** - Recognize godly people disagree',
        '**Approach:** Hold your convictions firmly but charitably. Don\'t divide over these.'
      ]
    },
    {
      type: 'content',
      title: 'Third-Order Doctrines (Non-Essentials)',
      content: [
        '**Least important doctrines—freedom to disagree:**',
        '**Eschatology details**',
        '• Premillennial, amillennial, postmillennial',
        '• Pre-trib, mid-trib, post-trib rapture',
        '**Worship Style**',
        '• Traditional hymns vs. contemporary music',
        '• Liturgical vs. spontaneous',
        '**Translation preference**',
        '• ESV, NIV, NASB, KJV, etc.',
        '**Creation details**',
        '• Young earth vs. old earth (both affirm God created)',
        '**Why third-order?**',
        '• **Scripture doesn\'t give explicit answers** on all details',
        '• **Faithful Christians disagree** throughout history',
        '• **Not worth dividing over**',
        '**Approach:** Hold opinions loosely. Extend charity. Focus on what matters most.',
        '**Romans 14:1** - "As for the one who is weak in faith, welcome him, but not to quarrel over opinions."'
      ]
    },
    {
      type: 'content',
      title: 'Applying Theological Triage',
      content: [
        '**How to use theological triage:**',
        '✅ **Identify the issue\'s level:**',
        '• First-order? Stand firm, contend for the faith',
        '• Second-order? Hold convictions but extend charity',
        '• Third-order? Grant freedom and focus on unity',
        '✅ **Don\'t "die on the wrong hills":**',
        '• Don\'t elevate third-order issues to first-order',
        '• Don\'t minimize first-order issues to third-order',
        '✅ **Pursue unity where possible:**',
        '• **Ephesians 4:3** - "Eager to maintain the unity of the Spirit in the bond of peace"',
        '• Unity in essentials doesn\'t mean agreement on everything',
        '**Example questions:**',
        '• "Can I partner in gospel ministry with someone who disagrees on this?"',
        '• "Would this prevent someone from being a Christian?"',
        '• "Is this explicitly taught in Scripture or an inference?"',
        '**Wisdom: Know when to fight and when to extend grace.**'
      ]
    },
    {
      type: 'matching',
      title: 'Match Doctrine Levels',
      pairs: [
        { term: 'First-Order', definition: 'Essentials defining Christianity—Trinity, deity of Christ, grace' },
        { term: 'Second-Order', definition: 'Important but Christians disagree—baptism, gifts, roles' },
        { term: 'Third-Order', definition: 'Non-essentials with freedom—worship style, translation, details' },
        { term: 'Romans 14:1', definition: 'Welcome one another, not to quarrel over opinions' }
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You understand theological triage! Know what\'s essential and extend charity in non-essentials.',
      keyTakeaways: [
        'First-order: Essentials defining Christianity (Trinity, gospel, Scripture)',
        'Second-order: Important but Christians disagree (baptism, gifts, roles)',
        'Third-order: Non-essentials with freedom (style, details, opinions)',
        'Don\'t elevate minor issues or minimize essential doctrines',
        'In essentials unity, in non-essentials liberty, in all things charity',
        'Theological triage helps us know when to fight and when to extend grace'
      ],
      badge: { icon: '🎯', name: 'Triage Expert', description: 'Completed Lesson 60: Theological Triage' }
    }
  ]
};

export const lesson61Data = {
  id: 61,
  title: "Evaluating Modern Teachers",
  subtitle: "How to assess preachers and authors",
  duration: "9 min",
  cards: [
    {
      type: 'content',
      title: 'Evaluating Modern Teachers',
      subtitle: '⏱️ About 9 minutes',
      content: [
        '**Learning Objective:** Learn how to evaluate modern preachers, authors, and ministries.',
        'We\'re flooded with **Christian content**—books, podcasts, YouTube, social media.',
        'Not all teachers are **trustworthy**.',
        '**1 John 4:1** - "Test the spirits to see whether they are from God, for many false prophets have gone out into the world."',
        'Let\'s develop **discernment skills** for the digital age.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Question 1: What Is Their Gospel?',
      content: [
        '**The most important question: Do they preach the true gospel?**',
        '**Listen for:**',
        '✅ **Sin** - Do they acknowledge human sinfulness?',
        '✅ **Christ** - Is Jesus central, or just a helpful teacher?',
        '✅ **Cross** - Do they preach substitutionary atonement?',
        '✅ **Grace** - Is salvation by faith alone, or faith + works?',
        '✅ **Repentance** - Is there a call to turn from sin?',
        '**Red flags:**',
        '🚩 Gospel is vague or missing',
        '🚩 Focus is on self-improvement, not Christ',
        '🚩 Prosperity gospel (health/wealth promises)',
        '🚩 Universalism (everyone saved)',
        '**Galatians 1:8-9** - "Even if we or an angel from heaven should preach to you a gospel contrary to the one we preached to you, let him be accursed."',
        '**If the gospel is wrong, everything else is irrelevant.**'
      ]
    },
    {
      type: 'quiz',
      question: 'What\'s the most important question when evaluating a teacher?',
      options: ['Are they popular?', 'Do they preach the true gospel?', 'Do they have formal training?', 'Do they inspire you?'],
      correctAnswer: 1,
      explanation: 'The most important question is: Do they preach the true gospel? If the gospel is wrong, nothing else matters (Galatians 1:8-9).'
    },
    {
      type: 'content',
      title: 'Question 2: How Do They Handle Scripture?',
      content: [
        '**Trustworthy teachers handle the Bible carefully.**',
        '**Look for:**',
        '✅ **Exposition** - Do they explain what the text says?',
        '✅ **Context** - Do they consider historical and literary context?',
        '✅ **Application** - Do they apply it rightly?',
        '✅ **Reverence** - Do they submit to Scripture\'s authority?',
        '**Red flags:**',
        '🚩 **Proof-texting** - Using verses out of context to support agenda',
        '🚩 **Allegorizing** - Making text mean whatever they want',
        '🚩 **Adding to Scripture** - "God told me..." with new revelation',
        '🚩 **Ignoring Scripture** - Rarely quoting/teaching Bible',
        '**2 Timothy 2:15** - "Do your best to present yourself to God as one approved, a worker who has no need to be ashamed, **rightly handling the word of truth**."',
        '**Does this teacher rightly handle God\'s Word?**'
      ]
    },
    {
      type: 'content',
      title: 'Question 3: What Is Their Theology?',
      content: [
        '**Examine their theological commitments.**',
        '**Key questions:**',
        '🤔 **Who is God?** (Trinity, attributes, sovereignty)',
        '🤔 **Who is Jesus?** (Deity, humanity, work)',
        '🤔 **What is the gospel?** (Grace alone or works)',
        '🤔 **What is the church?** (Local body, universal)',
        '🤔 **What are the sacraments?** (Baptism, Lord\'s Supper)',
        '**Check their alignment with historic orthodoxy:**',
        '✅ Do they affirm the **Apostles\' Creed**?',
        '✅ Do they affirm the **Nicene Creed**?',
        '✅ Do they confess the core truths of **Chalcedon**?',
        '**Warning:** Some teachers sound Christian but deny core doctrines.',
        '• Joyce Meyer (modalism)',
        '• Joel Osteen (prosperity gospel)',
        '• Rob Bell (universalism)',
        '**Test theology against Scripture and creeds.**'
      ]
    },
    {
      type: 'content',
      title: 'Question 4: What Is Their Character?',
      content: [
        '**Character matters. Jesus said:** "You will recognize them by their fruits" (Matt 7:16).',
        '**Look for:**',
        '✅ **Humility** - Do they exalt Christ or themselves?',
        '✅ **Integrity** - Does their life match their teaching?',
        '✅ **Fruit of the Spirit** - Love, joy, peace, patience, etc. (Gal 5:22-23)',
        '✅ **Accountability** - Are they in a church under elders?',
        '**Red flags:**',
        '🚩 **Pride and arrogance**',
        '🚩 **Moral scandals** (repeated, unrepentant sin)',
        '🚩 **Financial impropriety** (lavish lifestyle from ministry)',
        '🚩 **Divisiveness** (constant conflict)',
        '**1 Timothy 3:2-7** lists qualifications for elders—teachers should meet these.',
        '**Hebrews 13:7** - "Remember your leaders... Consider the outcome of their way of life, and imitate their faith."',
        '**Does their life reflect the gospel they preach?**'
      ]
    },
    {
      type: 'content',
      title: 'Question 5: What Are Their Affiliations?',
      content: [
        '**Who do they associate with? What churches/ministries endorse them?**',
        '**Positive signs:**',
        '✅ **Endorsed by sound churches/ministries**',
        '✅ **Part of a denomination** with solid theology',
        '✅ **Teach at reputable seminaries**',
        '✅ **Recommend other trustworthy teachers**',
        '**Red flags:**',
        '🚩 **Isolated** - No accountability or church connection',
        '🚩 **Endorsed by known false teachers**',
        '🚩 **Part of heretical movements** (Word of Faith, NAR)',
        '**Examples of trustworthy ministries:**',
        '• The Gospel Coalition, 9Marks, Desiring God, Ligonier',
        '• Denominations: SBC, PCA, Acts 29, Sovereign Grace',
        '**Proverbs 13:20** - "Whoever walks with the wise becomes wise, but the companion of fools will suffer harm."',
        '**Affiliations reveal a lot about a teacher\'s theology.**'
      ]
    },
    {
      type: 'content',
      title: 'Practical Steps for Discernment',
      content: [
        '**When encountering a new teacher:**',
        '**1. Research their background:**',
        '• What church do they belong to?',
        '• What seminary did they attend?',
        '• What have they written/taught?',
        '**2. Read their doctrinal statement:**',
        '• Do they have one? (Red flag if not)',
        '• Does it affirm essentials?',
        '**3. Listen critically:**',
        '• Test claims against Scripture (Acts 17:11)',
        '• Watch for red flags',
        '**4. Consult trusted sources:**',
        '• What do mature Christians say about this teacher?',
        '• Check discernment ministries (e.g., Berean Research)',
        '**5. Pray for wisdom:**',
        '• **James 1:5** - "If any of you lacks wisdom, let him ask God"',
        '**Better to be cautious than deceived.**'
      ]
    },
    {
      type: 'reflection',
      title: 'Reflect on Your Media Diet',
      prompt: 'Who are the main teachers you listen to? Have you evaluated them using these criteria? What might you need to change?',
      placeholder: 'Write your thoughts about the teachers and content you consume...'
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You can now evaluate modern teachers! Be a discerning consumer of Christian content.',
      keyTakeaways: [
        'Most important: Do they preach the true gospel?',
        'How do they handle Scripture—exposition, context, reverence?',
        'What is their theology—align with historic orthodoxy?',
        'What is their character—humility, integrity, fruit?',
        'What are their affiliations—accountability, endorsements?',
        'Research, read doctrinal statements, listen critically, pray for wisdom'
      ],
      badge: { icon: '🔍', name: 'Discerning Consumer', description: 'Completed Lesson 61: Evaluating Modern Teachers' }
    }
  ]
};

export const lesson62Data = {
  id: 62,
  title: "Building Your Theology Toolkit",
  subtitle: "Essential resources for discernment",
  duration: "8 min",
  cards: [
    {
      type: 'content',
      title: 'Building Your Theology Toolkit',
      subtitle: '⏱️ About 8 minutes',
      content: [
        '**Learning Objective:** Assemble essential resources to grow in discernment and theological understanding.',
        'Every Christian needs a **theology toolkit**.',
        'These resources help you study Scripture, understand doctrine, and discern truth.',
        'Let\'s build your **theological library**.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'Tool 1: A Good Study Bible',
      content: [
        '**A Study Bible includes notes, cross-references, and helps for understanding Scripture.**',
        '**Recommended Study Bibles:**',
        '✅ **ESV Study Bible** - Comprehensive notes, Reformed perspective',
        '✅ **NIV Study Bible** - Accessible, balanced',
        '✅ **MacArthur Study Bible** - Verse-by-verse notes',
        '✅ **Reformation Study Bible** - Reformed theology',
        '**Why you need one:**',
        '• **Context** - Historical/cultural background',
        '• **Cross-references** - Connect passages',
        '• **Theology** - Understand doctrines',
        '**How to use it:**',
        '• Read the passage first',
        '• Then read notes for clarification',
        '• Follow cross-references to build understanding',
        '**Don\'t let notes replace your own study, but use them as a guide.**'
      ]
    },
    {
      type: 'content',
      title: 'Tool 2: Systematic Theology',
      content: [
        '**A Systematic Theology organizes biblical teachings by topic.**',
        '**Recommended books:**',
        '✅ **Wayne Grudem - *Systematic Theology*** - Accessible, comprehensive',
        '✅ **Louis Berkhof - *Systematic Theology*** - Reformed classic',
        '✅ **Millard Erickson - *Christian Theology*** - Balanced',
        '✅ **J.I. Packer - *Concise Theology*** - Short, readable',
        '**Topics covered:**',
        '📖 God, Trinity, attributes',
        '📖 Humanity, sin, fall',
        '📖 Christ, atonement, resurrection',
        '📖 Salvation, justification, sanctification',
        '📖 Church, sacraments, end times',
        '**How to use it:**',
        '• Study one doctrine at a time',
        '• Read what the Bible says on each topic',
        '• Use as reference when questions arise',
        '**A systematic theology gives you a framework for understanding all of Scripture.**'
      ]
    },
    {
      type: 'quiz',
      question: 'What is a systematic theology?',
      options: ['A devotional book', 'A book organizing biblical teachings by topic', 'A Bible translation', 'A commentary on one book'],
      correctAnswer: 1,
      explanation: 'A systematic theology organizes biblical teachings by topic (God, sin, salvation, church, etc.), giving a comprehensive framework for understanding Christian doctrine.'
    },
    {
      type: 'content',
      title: 'Tool 3: Historic Creeds and Confessions',
      content: [
        '**Creeds and confessions summarize Christian orthodoxy.**',
        '**Essential creeds:**',
        '✅ **Apostles\' Creed** - Basics of Christian faith',
        '✅ **Nicene Creed** - Trinity, deity of Christ',
        '✅ **Chalcedonian Definition** - Two natures of Christ',
        '**Confessions (by tradition):**',
        '✅ **Westminster Confession** (Reformed/Presbyterian)',
        '✅ **1689 Baptist Confession** (Reformed Baptist)',
        '✅ **Augsburg Confession** (Lutheran)',
        '✅ **39 Articles** (Anglican)',
        '**Why use creeds?**',
        '• **Test orthodoxy** - Does a teacher align?',
        '• **Summarize doctrine** - Condensed theology',
        '• **Unite Christians** - Common faith across traditions',
        '**How to use them:**',
        '• Memorize short creeds (Apostles\', Nicene)',
        '• Study confessions to understand your tradition',
        '• Use as a measuring stick for teaching',
        '**Creeds are "normed norms"—normed by Scripture but helpful guides.**'
      ]
    },
    {
      type: 'content',
      title: 'Tool 4: Commentaries',
      content: [
        '**Commentaries explain individual books of the Bible.**',
        '**Recommended series:**',
        '✅ **Tyndale** - Accessible, concise',
        '✅ **NIV Application Commentary** - Context + modern application',
        '✅ **Expositor\'s Bible Commentary** - Detailed, verse-by-verse',
        '✅ **Pillar New Testament Commentary** - Scholarly but readable',
        '**Individual commentaries:**',
        '✅ **D.A. Carson on John, Matthew**',
        '✅ **Douglas Moo on Romans, James**',
        '✅ **Gordon Fee on 1 Corinthians, Philippians**',
        '**How to use commentaries:**',
        '• Study the passage yourself first',
        '• Read commentary to check your understanding',
        '• Don\'t just accept commentary—test against Scripture',
        '**Commentaries help you dig deeper into God\'s Word.**'
      ]
    },
    {
      type: 'content',
      title: 'Tool 5: Classic Christian Books',
      content: [
        '**Read the classics—they\'ve stood the test of time.**',
        '**Must-reads:**',
        '✅ **Augustine - *Confessions*** - Autobiography and theology',
        '✅ **Athanasius - *On the Incarnation*** - Why God became man',
        '✅ **John Calvin - *Institutes of the Christian Religion*** - Systematic theology',
        '✅ **John Owen - *The Mortification of Sin*** - Fighting sin',
        '✅ **Jonathan Edwards - *Religious Affections*** - True vs. false conversion',
        '✅ **J.C. Ryle - *Holiness*** - Pursuing sanctification',
        '✅ **Dietrich Bonhoeffer - *The Cost of Discipleship*** - Cheap vs. costly grace',
        '✅ **C.S. Lewis - *Mere Christianity*** - Apologetics',
        '**Why read classics?**',
        '• **Timeless wisdom** - Relevant across generations',
        '• **Depth** - They wrestled deeply with Scripture',
        '• **Perspective** - See how Christians thought historically',
        '**Start with one or two. Take your time. Let them shape you.**'
      ]
    },
    {
      type: 'content',
      title: 'Tool 6: Online Resources',
      content: [
        '**Modern resources for study and discernment:**',
        '**Websites:**',
        '✅ **DesiringGod.org** - Articles, sermons (John Piper)',
        '✅ **TheGospelCoalition.org** - Articles, resources',
        '✅ **Ligonier.org** - Teaching, theology (R.C. Sproul)',
        '✅ **9Marks.org** - Church health, ecclesiology',
        '✅ **BibleGateway.com / BibleHub.com** - Bible search, tools',
        '**Podcasts:**',
        '✅ **The Briefing (Albert Mohler)** - News from Christian worldview',
        '✅ **Ask Pastor John (John Piper)** - Q&A',
        '✅ **Truth for Life (Alistair Begg)** - Bible teaching',
        '**Apps:**',
        '✅ **Blue Letter Bible** - Study tools',
        '✅ **YouVersion** - Bible reading plans',
        '**Use discernment even with these—test everything!**'
      ]
    },
    {
      type: 'matching',
      title: 'Match Theology Tools',
      pairs: [
        { term: 'Study Bible', definition: 'Notes, cross-references, helps for understanding Scripture' },
        { term: 'Systematic Theology', definition: 'Organizes biblical teachings by topic (God, sin, salvation)' },
        { term: 'Creeds', definition: 'Summarize Christian orthodoxy (Apostles\', Nicene, Chalcedonian)' },
        { term: 'Commentaries', definition: 'Explain individual books of the Bible verse-by-verse' }
      ]
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You have a theology toolkit! Use these resources to grow in discernment and understanding.',
      keyTakeaways: [
        'Study Bible: Notes, context, cross-references for understanding Scripture',
        'Systematic Theology: Framework for understanding all of Christian doctrine',
        'Creeds/Confessions: Summaries of orthodoxy to test teaching',
        'Commentaries: Detailed explanations of biblical books',
        'Classic books: Timeless wisdom from great Christian thinkers',
        'Online resources: Modern tools for study and discernment'
      ],
      badge: { icon: '🧰', name: 'Equipped Disciple', description: 'Completed Lesson 62: Building Theology Toolkit' }
    }
  ]
};

export const lesson63Data = {
  id: 63,
  title: "Discernment with Grace",
  subtitle: "Balancing truth and love",
  duration: "8 min",
  cards: [
    {
      type: 'content',
      title: 'Discernment with Grace',
      subtitle: '⏱️ About 8 minutes',
      content: [
        '**Learning Objective:** Learn to exercise discernment with grace, truth, and humility.',
        'Discernment is **essential**.',
        'But it can become **harsh, judgmental, divisive**.',
        'We must balance **truth and love** (Ephesians 4:15).',
        'Let\'s learn **discernment with grace**.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'The Danger of Hyper-Discernment',
      content: [
        '**Some Christians become "heresy hunters" who see error everywhere.**',
        '**Signs of unhealthy discernment:**',
        '🚩 **Elevating non-essentials** - Treating every disagreement as heresy',
        '🚩 **Pride** - "I have pure theology; everyone else is compromised"',
        '🚩 **Lack of charity** - Assuming worst motives',
        '🚩 **Constant criticism** - Tearing down without building up',
        '🚩 **Isolation** - Rejecting all teachers/churches as impure',
        '**Why this is dangerous:**',
        '• **Violates love** - 1 Cor 13:2 says knowledge without love = nothing',
        '• **Causes division** - Over non-essentials',
        '• **Breeds bitterness** - Constant negativity',
        '• **Dishonors Christ** - We represent Him to the world',
        '**Jesus condemned the Pharisees for hyper-discernment without mercy (Matt 23:23).**'
      ]
    },
    {
      type: 'quiz',
      question: 'What\'s wrong with "hyper-discernment"?',
      options: ['Nothing—we should always be critical', 'It elevates non-essentials, lacks charity, and causes division', 'It makes you a better Christian', 'The Bible commands it'],
      correctAnswer: 1,
      explanation: 'Hyper-discernment becomes unhealthy when it elevates non-essentials to essentials, lacks charity, and causes unnecessary division. We must balance truth and love (Eph 4:15).'
    },
    {
      type: 'content',
      title: 'Speaking the Truth in Love',
      content: [
        '**Ephesians 4:15** - "Speaking the **truth** in **love**, we are to grow up in every way into him who is the head, into Christ."',
        '**Truth without love:**',
        '• Harsh, judgmental, arrogant',
        '• Sounds like: "You\'re an idiot for believing that"',
        '• Violates 1 Cor 13 (love is patient, kind)',
        '**Love without truth:**',
        '• Tolerates error, avoids hard conversations',
        '• Sounds like: "It doesn\'t matter what you believe"',
        '• Violates Jude 3 (contend for the faith)',
        '**Truth + Love:**',
        '• Gracious but honest',
        '• Sounds like: "I care about you, so I must tell you this teaching is dangerous"',
        '• Follows Jesus\' example',
        '**How to speak truth in love:**',
        '✅ **Pray** before confronting',
        '✅ **Check motives** - Am I seeking their good or my own vindication?',
        '✅ **Be gentle** - 2 Tim 2:25 - "correcting opponents with gentleness"',
        '✅ **Listen** - Understand their perspective',
        '✅ **Point to Scripture** - Not just your opinion'
      ]
    },
    {
      type: 'content',
      title: 'Humility in Discernment',
      content: [
        '**Discernment requires humility.**',
        '**Why humility matters:**',
        '✅ **We can be wrong** - None of us has perfect theology',
        '✅ **We\'re all sinners** - Don\'t act superior',
        '✅ **God is the judge** - Not us (James 4:12)',
        '✅ **We need each other** - Iron sharpens iron (Prov 27:17)',
        '**Proverbs 3:7** - "Be not wise in your own eyes; fear the Lord, and turn away from evil."',
        '**1 Corinthians 8:1** - "Knowledge puffs up, but love builds up."',
        '**Humble discernment:**',
        '• Admits **"I could be wrong"**',
        '• Listens to **correction**',
        '• Extends **charity** in non-essentials',
        '• Focuses on **own growth**, not just critiquing others',
        '**Before you judge another\'s theology, examine your own heart (Matt 7:3-5).**'
      ]
    },
    {
      type: 'content',
      title: 'Pursuing Unity',
      content: [
        '**Discernment shouldn\'t destroy unity—it should protect it.**',
        '**Ephesians 4:3** - "Eager to maintain the **unity of the Spirit** in the bond of peace."',
        '**When to separate:**',
        '✅ **First-order issues** - Denying gospel, Trinity, deity of Christ',
        '✅ **Unrepentant sin** - Persistent rebellion (Matt 18:15-17)',
        '✅ **False teaching spreading** - Protect the flock (Titus 3:10-11)',
        '**When to pursue unity:**',
        '✅ **Second/third-order issues** - Baptism, gifts, eschatology',
        '✅ **Godly Christians disagree** - Extend charity',
        '✅ **Gospel is central** - Focus on what unites',
        '**Romans 14:1** - "As for the one who is weak in faith, welcome him, but not to quarrel over opinions."',
        '**John 17:21** - Jesus prayed: "That they may all be **one**... so that the world may believe."',
        '**Unity doesn\'t mean uniformity, but it requires charity in non-essentials.**'
      ]
    },
    {
      type: 'content',
      title: 'Restoring Those Who Stray',
      content: [
        '**When someone falls into error, our goal is restoration, not condemnation.**',
        '**Galatians 6:1** - "Brothers, if anyone is caught in any transgression, you who are spiritual should **restore** him in a spirit of **gentleness**. Keep watch on yourself, lest you too be tempted."',
        '**James 5:19-20** - "My brothers, if anyone among you wanders from the truth and someone brings him back, let him know that whoever brings back a sinner from his wandering will **save his soul** from death."',
        '**How to restore:**',
        '✅ **Approach with compassion** - "I\'m concerned about you"',
        '✅ **Point to Scripture** - Show what God says',
        '✅ **Pray** - Only God changes hearts',
        '✅ **Be patient** - Transformation takes time',
        '✅ **Involve others** - Follow Matt 18:15-17 if needed',
        '**Goal:** Not winning an argument, but **seeing a brother/sister return to truth**.',
        '**Discernment motivated by love seeks restoration, not destruction.**'
      ]
    },
    {
      type: 'content',
      title: 'Practical Tips for Gracious Discernment',
      content: [
        '**How to practice discernment with grace:**',
        '✅ **Pray before critiquing** - Ask God to search your heart',
        '✅ **Assume best motives** - Unless proven otherwise',
        '✅ **Ask questions** - "Can you help me understand what you mean?"',
        '✅ **Distinguish levels** - First, second, third-order doctrines',
        '✅ **Be private first** - Go to the person before broadcasting',
        '✅ **Focus on fruit** - Is this producing Christlikeness?',
        '✅ **Be quick to forgive** - We all have blind spots',
        '✅ **Build up** - Offer better resources, not just criticism',
        '**Colossians 4:6** - "Let your speech always be gracious, seasoned with salt."',
        '**1 Peter 3:15** - "Make a defense... with **gentleness and respect**."',
        '**Remember:** The goal is truth, but also the glory of God and the good of others.'
      ]
    },
    {
      type: 'reflection',
      title: 'Examine Your Own Discernment',
      prompt: 'Have you been harsh or judgmental in your discernment? Ask God to show you where you need more grace. Is there someone you need to apologize to or extend charity toward?',
      placeholder: 'Write your thoughts about your own discernment and areas for growth...'
    },
    {
      type: 'completion',
      title: 'Lesson Complete! 🎉',
      message: 'You understand discernment with grace! Balance truth and love as you contend for the faith.',
      keyTakeaways: [
        'Hyper-discernment: Elevates non-essentials, lacks charity, causes division',
        'Speak truth in love (Eph 4:15)—be gracious but honest',
        'Humility: Admit you could be wrong, extend charity, focus on own growth',
        'Pursue unity in essentials; grant liberty in non-essentials',
        'Goal is restoration, not condemnation—approach with compassion',
        'Pray, assume best motives, ask questions, distinguish doctrine levels'
      ],
      badge: { icon: '🕊️', name: 'Gracious Guardian', description: 'Completed Lesson 63: Discernment with Grace' }
    }
  ]
};

export const lesson64Data = {
  id: 64,
  title: "Standing Firm in Truth",
  subtitle: "Persevering in an age of confusion",
  duration: "9 min",
  cards: [
    {
      type: 'content',
      title: 'Standing Firm in Truth',
      subtitle: '⏱️ About 9 minutes',
      content: [
        '**Learning Objective:** Learn to stand firm in biblical truth in a culture of relativism and confusion.',
        'We live in an age of **confusion**.',
        '• "Your truth vs. my truth"',
        '• "All religions are the same"',
        '• "Don\'t judge"',
        'But **God\'s Word stands forever** (Isaiah 40:8).',
        'Let\'s learn to **stand firm**.'
      ],
      requireAcknowledgment: true
    },
    {
      type: 'content',
      title: 'The Culture of Relativism',
      content: [
        '**Modern culture says:** "There\'s no absolute truth—truth is subjective."',
        '**Relativism claims:**',
        '❌ Truth is **relative** to individual or culture',
        '❌ Moral standards are **personal preferences**',
        '❌ All beliefs are **equally valid**',
        '❌ Claiming truth is **intolerant**',
        '**Why relativism is self-defeating:**',
        '• Saying "There\'s no absolute truth" **is an absolute truth claim**',
        '• Saying "Don\'t judge" **is a judgment**',
        '• Relativism can\'t account for **justice** (Why is Hitler wrong?)',
        '**Christian response:**',
        '✅ **Truth exists** - God defines reality (John 14:6)',
        '✅ **Truth is objective** - Not dependent on our feelings',
        '✅ **Truth is knowable** - God revealed it in Scripture',
        '**John 17:17** - "Sanctify them in the truth; **your word is truth**."'
      ]
    },
    {
      type: 'quiz',
      question: 'Why is relativism ("all truth is relative") self-defeating?',
      options: ['It\'s not—relativism is correct', 'Claiming "no absolute truth" is itself an absolute truth claim', 'It makes everyone happy', 'The Bible doesn\'t address it'],
      correctAnswer: 1,
      explanation: 'Relativism is self-defeating because saying "There\'s no absolute truth" is itself an absolute truth claim. It contradicts itself.'
    },
    {
      type: 'content',
      title: 'The Pressure to Compromise',
      content: [
        '**Christians face pressure to compromise biblical truth.**',
        '**Common pressures:**',
        '🌊 **Cultural acceptance** - "You\'ll be canceled if you believe that"',
        '🌊 **Family/friends** - "You\'re being judgmental and unloving"',
        '🌊 **Career consequences** - "You\'ll lose your job"',
        '🌊 **Emotional manipulation** - "How can you believe that and still love people?"',
        '**Biblical examples of standing firm:**',
        '✅ **Daniel** - Refused to compromise worship (Dan 6)',
        '✅ **Shadrach, Meshach, Abednego** - Refused to bow to idols (Dan 3)',
        '✅ **Peter and John** - "We must obey God rather than men" (Acts 5:29)',
        '✅ **Paul** - Endured persecution for preaching gospel',
        '**2 Timothy 3:12** - "Indeed, all who desire to live a godly life in Christ Jesus **will be persecuted**."',
        '**Standing firm has a cost—but it\'s worth it.**'
      ]
    },
    {
      type: 'content',
      title: 'Anchored in Scripture',
      content: [
        '**To stand firm, we must be anchored in God\'s Word.**',
        '**Ephesians 6:14** - "Stand therefore, having fastened on the belt of **truth**."',
        '**2 Timothy 3:16-17** - "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be **complete, equipped for every good work**."',
        '**How Scripture equips us:**',
        '✅ **Teaches** - Shows us truth',
        '✅ **Reproves** - Corrects false beliefs',
        '✅ **Corrects** - Brings us back to truth',
        '✅ **Trains in righteousness** - Shapes our character',
        '**Psalm 119:105** - "Your word is a lamp to my feet and a light to my path."',
        '**To stand firm, we must:**',
        '• **Read Scripture daily**',
        '• **Memorize key verses**',
        '• **Study deeply**',
        '• **Meditate** on God\'s Word',
        '**Scripture is our foundation. Build on it.**'
      ]
    },
    {
      type: 'content',
      title: 'Courage in the Face of Opposition',
      content: [
        '**Standing firm requires courage.**',
        '**Joshua 1:9** - "Have I not commanded you? **Be strong and courageous**. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go."',
        '**Acts 4:29** - "And now, Lord, look upon their threats and grant to your servants to continue to speak your word with all **boldness**."',
        '**Where do we get courage?**',
        '✅ **God\'s presence** - He is with us (Matt 28:20)',
        '✅ **God\'s promises** - He will never leave us (Heb 13:5)',
        '✅ **Eternal perspective** - This world is not our home (Phil 3:20)',
        '✅ **The Spirit\'s power** - We\'re not alone (Acts 1:8)',
        '**What courage looks like:**',
        '• **Speak truth** even when it\'s unpopular',
        '• **Live holy** even when mocked',
        '• **Love enemies** even when persecuted',
        '• **Trust God** even when costly',
        '**1 Corinthians 16:13** - "Be watchful, stand firm in the faith, **act like men, be strong**."'
      ]
    },
    {
      type: 'content',
      title: 'Community: Standing Together',
      content: [
        '**We can\'t stand firm alone—we need the church.**',
        '**Hebrews 10:24-25** - "And let us consider how to stir up one another to love and good works, not neglecting to meet together, as is the habit of some, but **encouraging one another**, and all the more as you see the Day drawing near."',
        '**Ecclesiastes 4:12** - "A threefold cord is not quickly broken."',
        '**How the church helps us stand firm:**',
        '✅ **Encouragement** - When we\'re weary',
        '✅ **Accountability** - When we\'re tempted to compromise',
        '✅ **Teaching** - Deepening our understanding',
        '✅ **Prayer** - Interceding for each other',
        '✅ **Example** - Others who stand firm inspire us',
        '**Don\'t try to be a lone ranger Christian.**',
        '• Find a **gospel-centered church**',
        '• Join a **small group**',
        '• Develop **close friendships** with believers',
        '• **Serve** and be served',
        '**We stand firm together.**'
      ]
    },
    {
      type: 'content',
      title: 'The Eternal Reward',
      content: [
        '**Standing firm is worth it because of the eternal reward.**',
        '**Revelation 2:10** - "Be faithful unto death, and I will give you the **crown of life**."',
        '**Matthew 5:11-12** - "Blessed are you when others revile you and persecute you and utter all kinds of evil against you falsely on my account. **Rejoice and be glad**, for your reward is great in heaven."',
        '**2 Timothy 4:7-8** - "I have fought the good fight, I have finished the race, I have kept the faith. Henceforth there is laid up for me the **crown of righteousness**, which the Lord, the righteous judge, will award to me on that day, and not only to me but also to **all who have loved his appearing**."',
        '**Perspective:**',
        '• **This life** is short; **eternity** is forever',
        '• **Suffering** is temporary; **glory** is eternal (Rom 8:18)',
        '• **World\'s approval** means nothing; **God\'s "Well done"** means everything',
        '**Stand firm. The reward is coming.**'
      ]
    },
    {
      type: 'content',
      title: 'Final Charge',
      content: [
        '**Paul\'s final charge to Timothy—and to us:**',
        '**2 Timothy 4:1-5** - "I charge you in the presence of God and of Christ Jesus, who is to judge the living and the dead, and by his appearing and his kingdom: **preach the word**; be ready in season and out of season; reprove, rebuke, and exhort, with complete patience and teaching. For the time is coming when people will not endure sound teaching, but having itching ears they will accumulate for themselves teachers to suit their own passions, and will turn away from listening to the truth and wander off into myths. As for you, **always be sober-minded**, endure suffering, do the work of an evangelist, **fulfill your ministry**."',
        '**Our calling:**',
        '✅ **Preach the word** - Proclaim truth',
        '✅ **Be ready** - In season and out',
        '✅ **Endure suffering** - Don\'t shrink back',
        '✅ **Fulfill your ministry** - Do what God called you to do',
        '**Stand firm. The world needs Christians who won\'t compromise.**'
      ]
    },
    {
      type: 'fillblank',
      title: 'Complete Paul\'s Charge',
      sentence: 'Be ____, stand firm in the ____, act like men, be ____. Let all that you do be done in ____.',
      blanks: ['watchful', 'faith', 'strong', 'love'],
      options: ['watchful', 'faith', 'strong', 'love', 'careful', 'truth', 'brave', 'grace']
    },
    {
      type: 'completion',
      title: 'Discerning Truth Path Complete! 🎉',
      message: 'You\'ve completed the entire Discerning Truth path! Stand firm in the faith and contend for truth with grace.',
      keyTakeaways: [
        'Relativism is self-defeating—truth is objective and knowable through God\'s Word',
        'Standing firm has a cost, but it\'s worth it for eternal reward',
        'Anchor in Scripture—read, study, memorize, meditate daily',
        'Courage comes from God\'s presence, promises, and Spirit\'s power',
        'Stand together—we need the church for encouragement and accountability',
        'Preach the word, be ready, endure suffering, fulfill your ministry',
        'The world needs Christians who won\'t compromise biblical truth',
        'Keep the faith—the crown of righteousness awaits all who persevere'
      ],
      badge: { icon: '🏆', name: 'Discerning Truth Master', description: 'Completed ALL 8 Lessons: Discerning Truth Path' }
    }
  ]
};
