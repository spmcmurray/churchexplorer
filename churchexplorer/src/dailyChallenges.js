// Daily Challenge Pool
// Timeline challenges are always available
// Lesson-based challenges only available if user completed that lesson

// === TIMELINE CHALLENGES (Always Available) ===
export const timelineChallenges = [
  // Church History Timeline
  {
    type: 'quiz',
    question: 'What year did the Great Schism split Catholic and Orthodox churches?',
    options: ['1054', '1517', '325', '1204'],
    correctAnswer: 0,
    explanation: 'The East-West Schism formally occurred in 1054 when Cardinal Humbert excommunicated Patriarch Michael Cerularius.',
    xp: 5,
    source: 'church-timeline'
  },
  {
    type: 'quiz',
    question: 'When did Martin Luther post the 95 Theses?',
    options: ['1517', '1521', '1530', '1054'],
    correctAnswer: 0,
    explanation: 'Luther posted his 95 Theses on October 31, 1517, initially targeting indulgence sales.',
    xp: 5,
    source: 'church-timeline'
  },
  {
    type: 'quiz',
    question: 'What year was the Council of Nicaea?',
    options: ['325', '381', '451', '1054'],
    correctAnswer: 0,
    explanation: 'The Council of Nicaea (325 AD) was the first ecumenical council, condemning Arianism.',
    xp: 5,
    source: 'church-timeline'
  },
  {
    type: 'quiz',
    question: 'Which came first?',
    options: ['Council of Nicaea (325)', 'Fall of Constantinople (1453)'],
    correctAnswer: 0,
    explanation: 'The Council of Nicaea occurred in 325 AD, over 1,100 years before Constantinople fell in 1453.',
    xp: 5,
    source: 'church-timeline'
  },
  {
    type: 'quiz',
    question: 'When did the Fourth Crusade sack Constantinople?',
    options: ['1204', '1054', '1453', '1517'],
    correctAnswer: 0,
    explanation: 'Crusaders brutally sacked Constantinople in 1204, traumatizing the Orthodox world and making reconciliation nearly impossible.',
    xp: 5,
    source: 'church-timeline'
  },
  {
    type: 'quiz',
    question: 'What happened at the Diet of Worms in 1521?',
    options: ['Luther refused to recant', 'Calvin published Institutes', 'Great Schism occurred', 'Council met'],
    correctAnswer: 0,
    explanation: 'Luther famously refused to recant at the Diet of Worms, saying "Here I stand, I can do no other."',
    xp: 5,
    source: 'church-timeline'
  },
  {
    type: 'quiz',
    question: 'When was Vatican II held?',
    options: ['1962-65', '1545-63', '1870', '2013'],
    correctAnswer: 0,
    explanation: 'Vatican II (1962-65) brought major reforms in liturgy, ecumenism, and religious liberty to the Catholic Church.',
    xp: 5,
    source: 'church-timeline'
  },
  {
    type: 'truefalse',
    statement: 'The 1054 schism was almost accidental—the Pope had died during negotiations, voiding his legates\' authority.',
    answer: true,
    explanation: 'Pope Leo IX died April 19, 1054, technically voiding his legates\' authority, but Cardinal Humbert excommunicated the Patriarch anyway.',
    xp: 3,
    source: 'church-timeline'
  },
  {
    type: 'truefalse',
    statement: 'The Council of Trent was the Catholic Counter-Reformation response to Protestantism.',
    answer: true,
    explanation: 'The Council of Trent (1545-63) systematically responded to Protestant challenges, affirming Catholic doctrine.',
    xp: 3,
    source: 'church-timeline'
  },
  {
    type: 'truefalse',
    statement: 'Over 100,000 Orthodox priests and believers were martyred during the Russian Revolution.',
    answer: true,
    explanation: 'The Bolsheviks closed 98% of churches and executed clergy. An estimated 100,000+ were martyred between 1917-1991.',
    xp: 3,
    source: 'church-timeline'
  },
  {
    type: 'trivia',
    fact: 'Pope Francis, elected in 2013, is the first Jesuit pope and the first from Latin America.',
    cta: 'Explore Church Timeline →',
    xp: 2,
    source: 'church-timeline'
  },
  {
    type: 'trivia',
    fact: 'The Fourth Lateran Council (1215) formally defined the seven sacraments and transubstantiation.',
    cta: 'Explore Church Timeline →',
    xp: 2,
    source: 'church-timeline'
  },
  {
    type: 'trivia',
    fact: 'Prince Vladimir of Kiev converted in 988, bringing Orthodox Christianity to Russia and making it integral to Russian identity.',
    cta: 'Explore Church Timeline →',
    xp: 2,
    source: 'church-timeline'
  },
  {
    type: 'trivia',
    fact: 'The Peace of Augsburg (1555) established "cuius regio, eius religio"—rulers determine their territories\' religion.',
    cta: 'Explore Church Timeline →',
    xp: 2,
    source: 'church-timeline'
  },
  {
    type: 'quiz',
    question: 'Which denomination believes in seven sacraments?',
    options: ['Catholic', 'Lutheran', 'Baptist', 'Methodist'],
    correctAnswer: 0,
    explanation: 'Catholics recognize seven sacraments, defined at the Fourth Lateran Council (1215).',
    xp: 5,
    source: 'denomination-facts'
  },
  {
    type: 'quiz',
    question: 'Which tradition emphasizes "theosis" (becoming one with God)?',
    options: ['Orthodox', 'Lutheran', 'Baptist', 'Methodist'],
    correctAnswer: 0,
    explanation: 'Eastern Orthodox theology emphasizes theosis (deification) as the goal of salvation.',
    xp: 5,
    source: 'denomination-facts'
  },
  {
    type: 'quiz',
    question: 'Which denomination believes in "unconditional election"?',
    options: ['Reformed/Presbyterian', 'Lutheran', 'Anglican', 'Methodist'],
    correctAnswer: 0,
    explanation: 'Reformed theology emphasizes TULIP, including unconditional election and predestination.',
    xp: 5,
    source: 'denomination-facts'
  },
  {
    type: 'quiz',
    question: 'What does "sola scriptura" mean?',
    options: ['Scripture alone', 'Faith alone', 'Grace alone', 'Christ alone'],
    correctAnswer: 0,
    explanation: 'Sola scriptura (Scripture alone) was a key Reformation principle—the Bible as sole authority.',
    xp: 5,
    source: 'denomination-facts'
  },
  {
    type: 'truefalse',
    statement: 'Lutherans believe in the "Real Presence"—Christ\'s body and blood "in, with, and under" bread and wine.',
    answer: true,
    explanation: 'Unlike symbolic views, Lutherans affirm Real Presence while rejecting transubstantiation.',
    xp: 3,
    source: 'denomination-facts'
  },
  {
    type: 'truefalse',
    statement: 'The Orthodox Church accepts the filioque clause in the Nicene Creed.',
    answer: false,
    explanation: 'Orthodox reject the filioque ("and the Son"), viewing it as an unauthorized Western addition.',
    xp: 3,
    source: 'denomination-facts'
  },
];

// === LESSON-BASED CHALLENGES (Require Completion) ===
// Each challenge has requiredLesson: { path: 'bible'|'church'|'apologetics', lesson: 1-8 }

export const lessonChallenges = [
  // Bible History Lesson 1
  {
    type: 'quiz',
    question: 'Why was oral tradition considered reliable in ancient cultures?',
    options: [
      'They had better memories than modern people',
      'Communities verified accuracy through communal recitation',
      'There were laws requiring accuracy',
      'It wasn\'t reliable'
    ],
    correctAnswer: 1,
    explanation: 'Ancient oral cultures trained storytellers and used communal verification to preserve accuracy.',
    xp: 5,
    requiredLesson: { path: 'bible', lesson: 1 }
  },
  {
    type: 'fillblank',
    prompt: 'Ancient ________ were professional copyists who preserved Scripture.',
    answer: 'scribes',
    explanation: 'Scribes meticulously copied manuscripts, though minor variations occurred over centuries.',
    xp: 5,
    requiredLesson: { path: 'bible', lesson: 1 }
  },
  {
    type: 'truefalse',
    statement: 'We have more biblical manuscripts than any other ancient document.',
    answer: true,
    explanation: 'With 5,800+ Greek NT manuscripts plus thousands more in other languages, biblical manuscript evidence far exceeds other ancient texts.',
    xp: 3,
    requiredLesson: { path: 'bible', lesson: 1 }
  },

  // Bible History Lesson 2
  {
    type: 'quiz',
    question: 'What was significant about the Dead Sea Scrolls discovery?',
    options: [
      'They contained lost books of the Bible',
      'They disproved Christianity',
      'They confirmed 99% textual accuracy of OT manuscripts',
      'They were the oldest Christian documents'
    ],
    correctAnswer: 2,
    explanation: 'The Dead Sea Scrolls (discovered 1947) confirmed that OT text was preserved with 99% accuracy.',
    xp: 5,
    requiredLesson: { path: 'bible', lesson: 2 }
  },
  {
    type: 'fillblank',
    prompt: 'The ________ Scrolls confirmed 99% biblical textual accuracy.',
    answer: 'Dead Sea',
    explanation: 'Discovered in 1947, they showed remarkable preservation of Hebrew Scripture over 1,000+ years.',
    xp: 5,
    requiredLesson: { path: 'bible', lesson: 2 }
  },

  // Bible History Lesson 3
  {
    type: 'quiz',
    question: 'What was significant about the Septuagint?',
    options: [
      'It was the first English Bible',
      'It was the Greek translation of Hebrew Scripture',
      'It added books to the Bible',
      'It was written by Jesus\' disciples'
    ],
    correctAnswer: 1,
    explanation: 'The Septuagint (LXX) was the Greek translation of Hebrew Scripture, made around 250 BC for Greek-speaking Jews.',
    xp: 5,
    requiredLesson: { path: 'bible', lesson: 3 }
  },
  {
    type: 'fillblank',
    prompt: 'Jerome\'s Latin translation of the Bible is called the ________.',
    answer: 'Vulgate',
    explanation: 'The Latin Vulgate became the standard Bible for Western Christianity for over 1,000 years.',
    xp: 5,
    requiredLesson: { path: 'bible', lesson: 3 }
  },

  // Bible History Lesson 4
  {
    type: 'quiz',
    question: 'What was illegal about Wycliffe\'s Bible?',
    options: [
      'It contradicted church teaching',
      'It was translated into English without church approval',
      'It added extra books',
      'It was printed on a press'
    ],
    correctAnswer: 1,
    explanation: 'Wycliffe\'s unauthorized English translation challenged church control of Scripture access.',
    xp: 5,
    requiredLesson: { path: 'bible', lesson: 4 }
  },
  {
    type: 'fillblank',
    prompt: 'The ________ James Version became the most influential English Bible.',
    answer: 'King',
    explanation: 'The KJV (1611) dominated English-speaking Christianity for centuries.',
    xp: 5,
    requiredLesson: { path: 'bible', lesson: 4 }
  },

  // Bible History Lesson 5
  {
    type: 'quiz',
    question: 'What are the Deuterocanonical books?',
    options: [
      'Books lost from the Bible',
      'Books accepted by Catholics but not by Protestants',
      'The New Testament',
      'Books written by the apostles'
    ],
    correctAnswer: 1,
    explanation: 'Catholics include these books (Tobit, Judith, Maccabees, etc.) while Protestants consider them Apocrypha.',
    xp: 5,
    requiredLesson: { path: 'bible', lesson: 5 }
  },
  {
    type: 'fillblank',
    prompt: 'The Protestant Old Testament is based on the ________ canon.',
    answer: 'Hebrew',
    explanation: 'Protestants follow the Hebrew canon (39 books), while Catholics include the Deuterocanonical books.',
    xp: 5,
    requiredLesson: { path: 'bible', lesson: 5 }
  },

  // Bible History Lesson 6
  {
    type: 'quiz',
    question: 'Why were the Nag Hammadi gospels (like Gospel of Thomas) rejected?',
    options: [
      'They were too short',
      'They were written centuries later with Gnostic theology',
      'They were in the wrong language',
      'They contradicted each other'
    ],
    correctAnswer: 1,
    explanation: 'The Nag Hammadi texts were 2nd-3rd century Gnostic writings, not apostolic testimony.',
    xp: 5,
    requiredLesson: { path: 'bible', lesson: 6 }
  },
  {
    type: 'quiz',
    question: 'What criteria did the early church use to determine which books were canonical?',
    options: [
      'Popularity vote',
      'Emperor\'s decree',
      'Apostolic authorship, widespread acceptance, and theological consistency',
      'Length and literary quality'
    ],
    correctAnswer: 2,
    explanation: 'The canon formed through apostolic authorship, universal church acceptance, and alignment with apostolic teaching.',
    xp: 5,
    requiredLesson: { path: 'bible', lesson: 6 }
  },

  // Church History Lesson 1
  {
    type: 'quiz',
    question: 'What event marked the birth of the Christian church?',
    options: ['Jesus\' baptism', 'Pentecost', 'Jesus\' crucifixion', 'Paul\'s conversion'],
    correctAnswer: 1,
    explanation: 'Pentecost (Acts 2) marked the Holy Spirit\'s coming and the church\'s public birth.',
    xp: 5,
    requiredLesson: { path: 'church', lesson: 1 }
  },
  {
    type: 'quiz',
    question: 'Who was known as the "apostle to the Gentiles"?',
    options: ['Peter', 'Paul', 'John', 'James'],
    correctAnswer: 1,
    explanation: 'Paul\'s missionary journeys established churches throughout the Roman Empire among non-Jews.',
    xp: 5,
    requiredLesson: { path: 'church', lesson: 1 }
  },

  // Church History Lesson 2
  {
    type: 'quiz',
    question: 'What was the primary cause of the East-West Schism?',
    options: [
      'Disagreement over papal authority and the filioque',
      'Crusades',
      'Language differences',
      'Emperor Constantine'
    ],
    correctAnswer: 0,
    explanation: 'The schism centered on papal supremacy claims and the Western addition of filioque to the Creed.',
    xp: 5,
    requiredLesson: { path: 'church', lesson: 2 }
  },
  {
    type: 'truefalse',
    statement: 'The Orthodox and Catholic churches split was gradual, not sudden.',
    answer: true,
    explanation: 'The 1054 event formalized centuries of cultural, linguistic, and theological drift between East and West.',
    xp: 3,
    requiredLesson: { path: 'church', lesson: 2 }
  },

  // Church History Lesson 3
  {
    type: 'quiz',
    question: 'What were Luther\'s 95 Theses primarily about?',
    options: ['Bible translation', 'Indulgences', 'Predestination', 'Church architecture'],
    correctAnswer: 1,
    explanation: 'Luther targeted the sale of indulgences, which promised reduction of purgatory time for payment.',
    xp: 5,
    requiredLesson: { path: 'church', lesson: 3 }
  },
  {
    type: 'truefalse',
    statement: 'The printing press helped spread Reformation ideas rapidly.',
    answer: true,
    explanation: 'The printing press enabled Luther\'s writings to spread across Europe in weeks instead of years.',
    xp: 3,
    requiredLesson: { path: 'church', lesson: 3 }
  },

  // Apologetics Lesson 1
  {
    type: 'fillblank',
    prompt: 'Whatever ________ to exist has a cause.',
    answer: 'begins',
    explanation: 'The Kalam Cosmological Argument\'s first premise: "Whatever begins to exist has a cause."',
    xp: 5,
    requiredLesson: { path: 'apologetics', lesson: 1 }
  },
  {
    type: 'quiz',
    question: 'What are the three premises of the Kalam Cosmological Argument?',
    options: [
      'Everything has a cause; God is eternal; therefore God exists',
      'The universe is fine-tuned; design requires a designer; therefore God exists',
      'Whatever begins has a cause; the universe began; therefore the universe has a cause',
      'Morality exists; morality requires God; therefore God exists'
    ],
    correctAnswer: 2,
    explanation: 'Kalam: (1) Whatever begins to exist has a cause, (2) The universe began to exist, (3) Therefore, the universe has a cause.',
    xp: 5,
    requiredLesson: { path: 'apologetics', lesson: 1 }
  },

  // Apologetics Lesson 2
  {
    type: 'quiz',
    question: 'According to the free will defense, why does God allow evil?',
    options: [
      'God doesn\'t care about evil',
      'Love must be freely chosen; freedom entails the possibility of evil',
      'Evil is an illusion',
      'Evil will be eliminated eventually'
    ],
    correctAnswer: 1,
    explanation: 'The free will defense argues that genuine love requires freedom, which makes evil possible.',
    xp: 5,
    requiredLesson: { path: 'apologetics', lesson: 2 }
  },

  // Apologetics Lesson 3
  {
    type: 'quiz',
    question: 'Which is NOT a minimal fact about Jesus\' resurrection?',
    options: [
      'Jesus died by crucifixion',
      'The tomb was found empty',
      'Guards saw angels at the tomb',
      'The disciples believed they saw the risen Jesus'
    ],
    correctAnswer: 2,
    explanation: 'Guards seeing angels isn\'t part of the cross-skeptic scholarly consensus on minimal facts.',
    xp: 5,
    requiredLesson: { path: 'apologetics', lesson: 3 }
  },
  {
    type: 'fillblank',
    prompt: 'If Christ has not been raised, your faith is ________ (1 Cor 15:14).',
    answer: 'futile',
    explanation: 'Paul grounds Christianity in the historical event of the resurrection—no resurrection, no Christianity.',
    xp: 5,
    requiredLesson: { path: 'apologetics', lesson: 3 }
  },

  // Apologetics Lesson 4
  {
    type: 'quiz',
    question: 'What is the fine-tuning argument?',
    options: [
      'The universe is beautiful',
      'Physical constants are precisely calibrated for life',
      'Evolution explains design',
      'The Bible predicted scientific discoveries'
    ],
    correctAnswer: 1,
    explanation: 'The fine-tuning argument notes that cosmic constants are incredibly precise—suggesting intentional design.',
    xp: 5,
    requiredLesson: { path: 'apologetics', lesson: 4 }
  },

  // Apologetics Lesson 5
  {
    type: 'quiz',
    question: 'How many Greek New Testament manuscripts exist?',
    options: ['About 500', 'About 2,000', 'About 5,800', 'About 10,000'],
    correctAnswer: 2,
    explanation: 'We have approximately 5,800 Greek NT manuscripts, plus thousands more in other languages.',
    xp: 5,
    requiredLesson: { path: 'apologetics', lesson: 5 }
  },

  // Apologetics Lesson 6
  {
    type: 'quiz',
    question: 'What does moral relativism claim?',
    options: [
      'Morality is objective and universal',
      'Morality is just personal or cultural preference',
      'Morality comes from God',
      'Morality doesn\'t exist'
    ],
    correctAnswer: 1,
    explanation: 'Moral relativism says morality is preference—but this collapses under scrutiny (e.g., "Is rape just preference?").',
    xp: 5,
    requiredLesson: { path: 'apologetics', lesson: 6 }
  },

  // Apologetics Lesson 7
  {
    type: 'quiz',
    question: 'What was C.S. Lewis\'s "Liar, Lunatic, or Lord" trilemma?',
    options: [
      'Jesus must be either a liar, lunatic, or Lord—not just a good teacher',
      'Christianity is one of three valid religions',
      'There are three paths to salvation',
      'The Trinity has three persons'
    ],
    correctAnswer: 0,
    explanation: 'Lewis argued Jesus\' claims force a decision: He\'s either who He claimed (Lord), deluded (lunatic), or deceptive (liar).',
    xp: 5,
    requiredLesson: { path: 'apologetics', lesson: 7 }
  },

  // Apologetics Lesson 8
  {
    type: 'quiz',
    question: 'What does 1 Peter 3:15 say about defending your faith?',
    options: [
      'Never answer critics',
      'Always be ready to give a reason for your hope, with gentleness and respect',
      'Use force if necessary',
      'Avoid unbelievers'
    ],
    correctAnswer: 1,
    explanation: '1 Peter 3:15: "Always be prepared to give an answer...with gentleness and respect"—the biblical basis for apologetics.',
    xp: 5,
    requiredLesson: { path: 'apologetics', lesson: 8 }
  },
];
