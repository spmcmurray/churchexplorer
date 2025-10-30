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

// Interactive Lesson 2: The Manuscript Detective Story

export const lesson2Data = {
  id: 2,
  title: "The Manuscript Detective Story",
  subtitle: "Recovering the original text from thousands of copies",
  cards: [
    // Card 1: Introduction
    {
      type: 'content',
      title: 'Welcome, Detective!',
      subtitle: 'The Manuscript Detective Story',
      content: [
        'Imagine you\'re a detective, but instead of solving crimes, you\'re solving a textual mystery: What did the original biblical authors actually write?',
        'We don\'t have Paul\'s original letter to the Romans or Matthew\'s first draft of his Gospel. What we have are copies of copies of copies—thousands of them.',
        'Welcome to the fascinating world of **textual criticism**, where scholars piece together the original text like assembling a jigsaw puzzle.'
      ],
      highlight: '🔍 Your Mission: Learn how scholars reconstruct the original biblical text from thousands of ancient copies'
    },

    // Card 2: Where Are the Originals?
    {
      type: 'content',
      title: 'The Mystery: Where Are the Originals?',
      content: [
        'Here\'s a surprising fact: Not a single original biblical manuscript exists today. Why?',
        '📜 **Papyrus and parchment decay over time**, especially in humid climates.',
        '🙏 Once a manuscript became worn from use, it was **reverently buried or destroyed** (to prevent misuse of God\'s name) and replaced with a fresh copy.',
        'But don\'t worry! The earliest New Testament fragment we have (John 18:31-33) dates to around **125 AD**—just 30-40 years after John wrote his Gospel.',
        '🏆 That\'s incredibly close compared to other ancient texts. Most classical works have 1,000+ year gaps between composition and earliest copies!'
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
        'The text had been preserved with **remarkable accuracy**. Isaiah scrolls from 125 BC match medieval manuscripts almost perfectly!',
        '🙌 This discovery silenced critics who claimed the Old Testament had been corrupted over centuries.'
      ],
      highlight: '🏆 The Dead Sea Scrolls proved the Bible was copied with incredible accuracy for over 1,000 years!'
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
      highlight: '💪 Transparency increases trust! Modern Bibles show you where scholars have questions.'
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
  cards: [
    // Card 1: Introduction
    {
      type: 'content',
      title: 'Lost in Translation?',
      subtitle: 'From Hebrew and Greek to English',
      content: [
        'Have you ever played the game "telephone," where a message gets whispered from person to person and becomes hilariously garbled by the end?',
        'Translation can feel like that—but biblical translation is far more careful.',
        'Every time the Bible moves from one language to another, translators face a fundamental tension: Do you translate **word-for-word** (formal equivalence) or **thought-for-thought** (dynamic equivalence)?',
        'Let\'s explore this fascinating journey from ancient languages to English!'
      ],
      highlight: '🎯 Goal: Understand how the Bible was translated and why different English versions exist'
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
  cards: [
    // Card 1: Introduction
    {
      type: 'content',
      title: 'A Dangerous Book',
      subtitle: 'The English Bible\'s Dramatic History',
      content: [
        'It\'s hard to imagine today, but for centuries, owning an English Bible could get you **killed**.',
        'The story of the English Bible is filled with smugglers, secret printings, political intrigue, and martyrs who believed ordinary people deserved to read God\'s Word in their own language.',
        'From illegal translations whispered in secret to a king\'s authorized version that shaped the English language itself, this is a story of **courage, controversy, and cultural transformation**.'
      ],
      highlight: '🎯 Goal: Discover the dramatic story of how we got the English Bible'
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
        '✨ Within a year, King Henry VIII authorized an English Bible. **83% of the KJV New Testament comes directly from Tyndale\'s work**!'
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
        'It dominated for **350 years**!'
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
      badge: {
        icon: '📖',
        name: 'Bible History Scholar',
        description: 'Completed Lesson 4: The English Bible\'s Dramatic History'
      }
    }
  ]
};
