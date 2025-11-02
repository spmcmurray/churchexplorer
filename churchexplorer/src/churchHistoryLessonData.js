// Church History Interactive Lesson Data

export const lesson1Data = {
  id: 1,
  title: "The Beginning: Early Christianity",
  subtitle: "How it all started (33-313 AD)",
  duration: "8 min",
  cards: [
    // Welcome Card
    {
      type: 'content',
      title: 'Welcome to Church History',
      subtitle: '⏱️ About 8 minutes',
      content: [
        '**Learning Objective:** By the end of this lesson, you will understand how Christianity began after Jesus\'s resurrection and grew from a small Jewish sect into the Roman Empire\'s official religion.',
        'Welcome to your journey through church history. This lesson explores how Christianity began and grew in its first few centuries.',
        'We\'ll discover how Jesus\'s disciples became the apostles, how Christianity spread across the Roman Empire despite persecution, and how early Christians established the foundations of faith we still follow today.',
        'If you\'re new to this topic, we\'ll start with the basics and build from there.'
      ],
      highlight: '💭 Curious: What do you already know about early Christianity?',
      requireAcknowledgment: true
    },

    // Apostolic Age
    {
      type: 'content',
      title: 'The Apostolic Age (33-100 AD)',
      content: [
        'After Jesus\'s resurrection and ascension, his disciples (now called apostles) began spreading his teachings.',
        'The Day of Pentecost (Acts 2) marked the birth of the church, where the Holy Spirit empowered the apostles to preach boldly. Peter emerged as a key leader in Jerusalem.',
        'Meanwhile, Paul (formerly Saul, a persecutor of Christians) became the "apostle to the Gentiles" after his dramatic conversion. His missionary journeys throughout the Roman Empire established churches in major cities like Corinth, Ephesus, and Rome.',
        'The apostles wrote letters (epistles) to these churches, many of which became books of the New Testament.'
      ]
    },

    // Quiz on Apostolic Age
    {
      type: 'quiz',
      question: 'What event marked the birth of the Christian church?',
      options: [
        'The resurrection of Jesus',
        'The Day of Pentecost',
        'The Council of Nicaea',
        'Paul\'s conversion'
      ],
      correctAnswer: 1,
      explanation: 'The Day of Pentecost (Acts 2) is considered the birthday of the church, when the Holy Spirit came upon the apostles and Peter preached his first sermon, resulting in 3,000 new believers.'
    },

    // Quiz on Paul
    {
      type: 'quiz',
      question: 'Who was known as the "apostle to the Gentiles"?',
      options: [
        'Peter',
        'John',
        'Paul',
        'James'
      ],
      correctAnswer: 2,
      explanation: 'Paul (formerly Saul) became known as the apostle to the Gentiles after his conversion. He went on extensive missionary journeys throughout the Roman Empire, establishing churches and writing many New Testament letters.'
    },

    // Persecution and Growth
    {
      type: 'content',
      title: 'Persecution and Growth (100-313 AD)',
      content: [
        'Christianity was illegal in the Roman Empire and faced periodic persecution. Romans viewed Christians with suspicion because they refused to worship the emperor or Roman gods.',
        'Despite this, Christianity grew rapidly among slaves, women, and the urban poor. Christians met secretly in homes and catacombs.',
        'Martyrs like Polycarp and Perpetua inspired others through their faithful deaths. By 300 AD, an estimated 10% of the Roman Empire was Christian.'
      ],
      highlight: '💡 Key Insight: Persecution didn\'t stop Christianity - it actually helped it grow as people were inspired by believers\' courage.'
    },

    // Ecumenical Councils
    {
      type: 'content',
      title: 'The Ecumenical Councils',
      content: [
        'As Christianity grew, disagreements arose about core beliefs. The Council of Nicaea (325 AD) was convened by Emperor Constantine to address the Arian controversy.',
        'The debate: Was Jesus fully God or a created being?',
        'The council produced the **Nicene Creed**, affirming Jesus as "true God from true God, begotten not made."',
        'Later councils clarified the nature of the Trinity, the person of Christ (fully God and fully human), and which books belonged in the Bible.'
      ]
    },

    // Quiz on Nicaea
    {
      type: 'quiz',
      question: 'What was the main issue addressed at the Council of Nicaea in 325 AD?',
      options: [
        'Which books belong in the Bible',
        'Whether Christians should worship on Saturday or Sunday',
        'Whether Jesus was fully God or a created being',
        'How to organize church leadership'
      ],
      correctAnswer: 2,
      explanation: 'The Council of Nicaea addressed the Arian controversy, which questioned whether Jesus was fully God or a created being. The council affirmed that Jesus is "true God from true God, begotten not made," establishing the doctrine of Christ\'s full divinity.'
    },

    // Matching Game
    {
      type: 'matching',
      title: 'Match the Historical Events',
      pairs: [
        {
          term: 'Day of Pentecost',
          definition: 'Birth of the Christian church'
        },
        {
          term: 'Paul\'s journeys',
          definition: 'Spread Christianity across Roman Empire'
        },
        {
          term: 'Council of Nicaea',
          definition: 'Affirmed Jesus is fully God (325 AD)'
        },
        {
          term: 'Edict of Milan',
          definition: 'Legalized Christianity (313 AD)'
        }
      ]
    },

    // Constantine Era
    {
      type: 'content',
      title: 'From Persecution to Power',
      content: [
        'Everything changed in **313 AD** when Emperor Constantine legalized Christianity with the Edict of Milan.',
        'By 380 AD, Christianity became the official religion of the Roman Empire under Emperor Theodosius.',
        'This shift brought both blessings and challenges. Churches could worship openly and own property, but the faith also became intertwined with political power.',
        'Some Christians fled to the desert to become monks, seeking a purer faith away from worldly influence.'
      ]
    },

    // Quiz on Constantine
    {
      type: 'quiz',
      question: 'When did Christianity become legal in the Roman Empire?',
      options: [
        '33 AD',
        '313 AD',
        '380 AD',
        '476 AD'
      ],
      correctAnswer: 1,
      explanation: 'In 313 AD, Emperor Constantine issued the Edict of Milan, which legalized Christianity and ended persecution. This was a major turning point that allowed Christians to worship openly.'
    },

    // Fill in blank
    {
      type: 'fillblank',
      prompt: 'In _______ AD, Christianity became the official religion of the Roman Empire.',
      correctAnswer: '380',
      explanation: 'In 380 AD, Emperor Theodosius made Christianity the official religion of the Roman Empire, completing the transformation from a persecuted minority to the dominant faith.'
    },

    // Desert Monks Quiz
    {
      type: 'quiz',
      question: 'Why did some Christians become desert monks in the 4th century?',
      options: [
        'They were fleeing persecution',
        'They wanted to find gold in the desert',
        'They sought a purer faith away from the church\'s new political power',
        'They were spreading Christianity to nomadic tribes'
      ],
      correctAnswer: 2,
      explanation: 'When Christianity became the official religion of Rome in 380 AD, some Christians felt the faith had become too worldly and politically entangled. They fled to the desert to live as monks, seeking a simpler, purer spiritual life focused on prayer and devotion.'
    },

    // Practical Application
    {
      type: 'content',
      title: 'Connecting to Today',
      content: [
        'The early church established patterns that still shape Christianity:',
        '• The **apostolic succession** claimed by Catholic and Orthodox churches',
        '• The **creeds** (like the Nicene Creed) we still recite',
        '• The **New Testament** books chosen by early church councils',
        '• The tradition of **martyrdom** as ultimate witness to faith',
        'When you recite the Apostles\' Creed or Nicene Creed, you\'re speaking words that unite you with Christians across 2,000 years.'
      ],
      highlight: '💭 Reflection: What surprises you most about how Christianity began?'
    },

    // Completion Badge
    {
      type: 'completion',
      title: 'Lesson Complete!',
      message: 'You\'ve learned about the birth and early growth of Christianity from the Day of Pentecost to becoming the Roman Empire\'s official religion. Great work!',
      keyTakeaways: [
        'Christianity began at Pentecost (33 AD) and spread rapidly despite severe persecution',
        'Paul\'s missionary journeys established churches across the Roman Empire',
        'Constantine\'s Edict of Milan (313 AD) ended persecution and made Christianity legal, eventually becoming the empire\'s official religion'
      ],
      badge: {
        icon: '🏛️',
        name: 'Early Church Explorer',
        description: 'Completed The Beginning: Early Christianity'
      }
    }
  ]
};

export const lesson2Data = {
  id: 2,
  title: "The Great Divide: East vs West",
  subtitle: "Understanding the 1054 split",
  duration: "7 min",
  cards: [
    {
      type: 'content',
      title: 'Welcome to Lesson 2!',
      subtitle: '⏱️ About 7 minutes',
      content: [
        '**Learning Objective:** By the end of this lesson, you will understand the causes and consequences of the 1054 split between Eastern Orthodox and Western Catholic Christianity.',
        'This lesson explores one of Christianity\'s most significant moments: when the church split into Eastern (Orthodox) and Western (Catholic) branches.',
        'This wasn\'t a sudden break but rather centuries of growing differences in culture, language, and theology.',
        'By the end, you\'ll understand why the church divided and how Orthodox and Catholic traditions differ today.'
      ],
      highlight: '💭 Wonder: Have you noticed differences between Catholic and Orthodox churches?',
      requireAcknowledgment: true
    },

    {
      type: 'content',
      title: 'Two Worlds Drifting Apart',
      content: [
        'When the Roman Empire split into East and West in **395 AD**, it created two distinct Christian cultures.',
        'The **Western church** (centered in Rome) used Latin and was influenced by Roman legal thinking.',
        'The **Eastern church** (centered in Constantinople) used Greek and was influenced by Greek philosophy.',
        'As Germanic tribes overran the West and new Islamic empires rose in the East, the two halves of Christianity had increasingly different experiences.'
      ]
    },

    {
      type: 'quiz',
      question: 'When did the Roman Empire split into East and West, creating two distinct Christian cultures?',
      options: ['313 AD', '395 AD', '1054 AD', '1517 AD'],
      correctAnswer: 1,
      explanation: 'The Roman Empire officially split into Eastern and Western halves in 395 AD. This political division eventually led to cultural and theological differences between Eastern and Western Christianity.'
    },

    {
      type: 'content',
      title: 'The Filioque Controversy',
      content: [
        'The breaking point came over a single Latin word: **"filioque"** - meaning "and the Son."',
        'The Nicene Creed originally said the Holy Spirit proceeds "from the Father." Western churches added "and the Son" (filioque) without consulting the East.',
        'To Eastern Christians, this wasn\'t just about grammar - it changed the doctrine of the Trinity and violated the principle that only ecumenical councils could modify creeds.',
        'The West argued the addition clarified orthodox belief and had been used for centuries.'
      ],
      highlight: '💡 This seemingly technical debate represented a fundamental disagreement about church authority.'
    },

    {
      type: 'quiz',
      question: 'What does the Latin word "filioque" mean?',
      options: ['From the Father', 'And the Son', 'Holy Spirit', 'One God'],
      correctAnswer: 1,
      explanation: '"Filioque" means "and the Son." This was added to the Nicene Creed by Western churches to say the Holy Spirit proceeds from the Father "and the Son," which became a major point of contention with the East.'
    },

    {
      type: 'content',
      title: 'The 1054 Split',
      content: [
        'In 1054, tensions exploded. Pope Leo IX sent Cardinal Humbert to Constantinople to assert papal authority.',
        'Patriarch Michael Cerularius of Constantinople refused to acknowledge the Pope\'s supremacy.',
        'On **July 16, 1054**, Humbert stormed into the Hagia Sophia during worship and slammed a bull of excommunication on the altar, condemning Cerularius.',
        'The Patriarch responded by excommunicating the papal legates. The Great Schism had begun.',
        'Crusaders sacking Constantinople in 1204 deepened the wound, making reconciliation even more difficult.'
      ]
    },

    {
      type: 'quiz',
      question: 'What happened on July 16, 1054, that symbolized the Great Schism?',
      options: [
        'The Pope died',
        'Cardinal Humbert excommunicated Patriarch Cerularius',
        'Constantinople was conquered',
        'A new creed was written'
      ],
      correctAnswer: 1,
      explanation: 'On July 16, 1054, Cardinal Humbert entered the Hagia Sophia and placed a bull of excommunication against Patriarch Michael Cerularius on the altar. The Patriarch responded with his own excommunication, marking the formal beginning of the Great Schism.'
    },

    {
      type: 'matching',
      title: 'Match the Key Figures',
      pairs: [
        {
          term: 'Filioque',
          definition: 'Latin phrase meaning "and the Son"'
        },
        {
          term: 'Patriarch Cerularius',
          definition: 'Eastern Orthodox leader excommunicated in 1054'
        },
        {
          term: 'Cardinal Humbert',
          definition: 'Papal representative who placed excommunication on altar'
        },
        {
          term: 'Hagia Sophia',
          definition: 'Great cathedral in Constantinople where split occurred'
        }
      ]
    },

    {
      type: 'content',
      title: 'Different Paths Forward',
      content: [
        'After 1054, Eastern Orthodoxy and Roman Catholicism developed separately.',
        '**Orthodox structure:** Multiple patriarchs with no single earthly head of the church (conciliar leadership).',
        '**Catholic structure:** Centralized power in the papacy.',
        '**Orthodox theology:** Emphasized mysticism, theosis (becoming one with God), and continuity with the early church.',
        '**Catholic theology:** Developed systematic scholasticism, particularly through Thomas Aquinas.'
      ]
    },

    {
      type: 'quiz',
      question: 'How is church leadership structured differently in Orthodoxy versus Catholicism?',
      options: [
        'Orthodox have a Pope, Catholics have patriarchs',
        'Both have identical structures',
        'Orthodox have multiple patriarchs with no single earthly head, Catholics have papal centralization',
        'Orthodox churches have no leaders'
      ],
      correctAnswer: 2,
      explanation: 'Eastern Orthodoxy maintains a conciliar structure with multiple patriarchs (Constantinople, Moscow, Alexandria, etc.) and no single earthly head of the church. Roman Catholicism centralizes authority in the Pope as the head of the worldwide church.'
    },

    {
      type: 'fillblank',
      prompt: 'In _______ AD, Catholic Crusaders sacked Constantinople, deepening the rift between East and West.',
      correctAnswer: '1204',
      explanation: 'In 1204, Catholic Crusaders on the Fourth Crusade sacked Constantinople, pillaging the Orthodox capital and desecrating churches. This betrayal deepened hostility between East and West.'
    },

    {
      type: 'content',
      title: 'Understanding Today',
      content: [
        'Despite their split, Eastern Orthodox and Roman Catholic churches share much in common:',
        '✓ Both affirm the ancient creeds',
        '✓ Both practice seven sacraments',
        '✓ Both claim apostolic succession',
        '✓ Both honor Mary and the saints',
        'The main differences lie in church governance (papal vs. conciliar), some theological nuances (like the filioque), and worship styles.'
      ],
      highlight: '💭 Reflection: Can you think of examples where language and cultural differences led to divisions?'
    },

    {
      type: 'completion',
      title: 'Well Done!',
      message: 'You\'ve learned about the Great Schism of 1054 and how Eastern Orthodox and Western Catholic Christianity developed differently. You understand the historical, cultural, and theological factors behind this split.',
      keyTakeaways: [
        'The 1054 Great Schism split Christianity into Eastern (Orthodox) and Western (Catholic) branches',
        'Key differences included the Filioque controversy, papal authority, and worship practices',
        'Cultural and linguistic differences (Greek East vs. Latin West) contributed to the growing divide'
      ],
      badge: {
        icon: '⛪',
        name: 'Schism Scholar',
        description: 'Completed The Great Divide: East vs West'
      }
    }
  ]
};

export const lesson3Data = {
  id: 3,
  title: "The Reformation: A Revolution in Faith",
  subtitle: "Martin Luther and the Protestant movement",
  duration: "9 min",
  cards: [
    {
      type: 'content',
      title: 'Welcome to Lesson 3!',
      subtitle: '⏱️ About 9 minutes',
      content: [
        '**Learning Objective:** By the end of this lesson, you will understand how Martin Luther sparked the Protestant Reformation and what the "Five Solas" mean.',
        'This lesson covers one of history\'s most dramatic religious movements.',
        'In 1517, a German monk named Martin Luther challenged the Catholic Church\'s practices and sparked a revolution that would reshape Christianity forever.',
        'You\'ll discover why it happened, what changed, and how the Protestant Reformation split Western Christianity permanently.'
      ],
      highlight: '💭 Think: What would it take to challenge a powerful institution like the medieval Church?',
      requireAcknowledgment: true
    },

    {
      type: 'content',
      title: 'The Spark: Indulgences',
      content: [
        'In 1517, Pope Leo X needed money to rebuild St. Peter\'s Basilica in Rome. He authorized the sale of **indulgences** - certificates that supposedly reduced time in purgatory.',
        'Johann Tetzel, a monk selling indulgences in Germany, allegedly used the slogan: "As soon as a coin in the coffer rings, a soul from purgatory springs!"',
        'Martin Luther, a professor and monk in Wittenberg, was outraged. On **October 31, 1517**, he posted 95 Theses (academic arguments) on the church door.',
        'He argued that salvation couldn\'t be bought - it was a free gift from God received through faith.'
      ]
    },

    {
      type: 'quiz',
      question: 'What were indulgences that Martin Luther opposed?',
      options: [
        'Certificates to skip church services',
        'Payments to reduce time in purgatory',
        'Tickets to visit holy sites',
        'Donations for new church buildings only'
      ],
      correctAnswer: 1,
      explanation: 'Indulgences were certificates sold by the Catholic Church that supposedly reduced time in purgatory for the buyer or deceased loved ones. Luther opposed them as a corruption that made salvation something that could be purchased.'
    },

    {
      type: 'content',
      title: 'The Five Solas',
      content: [
        'Luther\'s theology coalesced into five Latin slogans called the "Five Solas":',
        '1. **Sola Scriptura** (Scripture Alone) - the Bible, not church tradition, is the final authority',
        '2. **Sola Fide** (Faith Alone) - we\'re saved by trusting Christ, not by good works',
        '3. **Sola Gratia** (Grace Alone) - salvation is entirely God\'s unmerited gift',
        '4. **Solus Christus** (Christ Alone) - Jesus is the only mediator, no need for saints or priests',
        '5. **Soli Deo Gloria** (Glory to God Alone) - all praise goes to God, not the church'
      ],
      highlight: '💡 These principles became the foundation for all Protestant theology.'
    },

    {
      type: 'quiz',
      question: 'What does "Sola Scriptura" mean?',
      options: [
        'Faith Alone',
        'Grace Alone',
        'Scripture Alone',
        'Christ Alone'
      ],
      correctAnswer: 2,
      explanation: '"Sola Scriptura" means "Scripture Alone," teaching that the Bible - not church tradition or papal decrees - is the final authority for Christian faith and practice.'
    },

    {
      type: 'content',
      title: 'Luther\'s Stand at Worms',
      content: [
        'In 1521, Luther was summoned to the Diet of Worms (an imperial assembly) to recant his teachings.',
        'When asked to renounce his writings, Luther famously replied:',
        '"Unless I am convinced by Scripture and plain reason, I cannot and will not recant. **Here I stand, I can do no other. God help me. Amen.**"',
        'He was declared an outlaw and heretic, but German princes protected him.',
        'While hiding in Wartburg Castle, Luther translated the New Testament into German, making the Bible accessible to ordinary people.'
      ]
    },

    {
      type: 'quiz',
      question: 'Where did Luther famously say "Here I stand, I can do no other"?',
      options: [
        'At the church door in Wittenberg',
        'At the Diet of Worms',
        'In Wartburg Castle',
        'At the Vatican'
      ],
      correctAnswer: 1,
      explanation: 'Luther made this famous statement at the Diet of Worms in 1521 when he was ordered to recant his teachings. He refused to renounce his beliefs unless convinced by Scripture and reason.'
    },

    {
      type: 'matching',
      title: 'Match the Reformers',
      pairs: [
        {
          term: 'Martin Luther',
          definition: 'Posted 95 Theses, translated Bible to German'
        },
        {
          term: 'Johann Tetzel',
          definition: 'Sold indulgences with catchy slogans'
        },
        {
          term: 'John Calvin',
          definition: 'Developed systematic theology emphasizing predestination'
        },
        {
          term: 'Ulrich Zwingli',
          definition: 'Led reform in Zurich, Switzerland'
        }
      ]
    },

    {
      type: 'quiz',
      question: 'What did Luther translate while hiding in Wartburg Castle?',
      options: [
        'The Catholic Mass into German',
        'Ancient Greek philosophy',
        'The New Testament into German',
        'The Pope\'s letters'
      ],
      correctAnswer: 2,
      explanation: 'While in hiding at Wartburg Castle, Luther translated the New Testament from Greek into German, making the Bible accessible to ordinary German-speaking people for the first time.'
    },

    {
      type: 'content',
      title: 'The Spread of Reform',
      content: [
        'Luther wasn\'t alone. Ulrich Zwingli led reform in Zurich, Switzerland. John Calvin in Geneva developed a more systematic Protestant theology.',
        'Calvin emphasized God\'s sovereignty and **predestination** (the doctrine that God has already chosen who will be saved).',
        'Calvin\'s ideas spread to Scotland (Presbyterianism), the Netherlands (Dutch Reformed), France (Huguenots), and eventually America.',
        'The Reformation fractured Western Christianity permanently. By 1555, the Peace of Augsburg established that each prince would decide whether his territory would be Catholic or Lutheran.'
      ]
    },

    {
      type: 'fillblank',
      prompt: 'Martin Luther posted his 95 Theses on October 31, _______.',
      correctAnswer: '1517',
      explanation: 'October 31, 1517, is the date Luther posted his 95 Theses challenging indulgences - the traditional start of the Protestant Reformation.'
    },

    {
      type: 'quiz',
      question: 'Who developed the systematic Protestant theology emphasizing predestination?',
      options: [
        'Martin Luther',
        'Ulrich Zwingli',
        'John Calvin',
        'Henry VIII'
      ],
      correctAnswer: 2,
      explanation: 'John Calvin, working in Geneva, developed a more systematic Protestant theology that emphasized God\'s sovereignty and predestination. His ideas became the foundation for Reformed and Presbyterian churches.'
    },

    {
      type: 'content',
      title: 'The Reformation Today',
      content: [
        'The Reformation\'s impact is still felt:',
        '✓ Protestant denominations emphasize **Scripture alone** as authority',
        '✓ The concept of the **priesthood of all believers** - every Christian can approach God directly',
        '✓ **Vernacular Bibles** - Scripture in everyday languages',
        '✓ Emphasis on **personal faith** rather than ritual alone'
      ],
      highlight: '💭 Reflection: Why do you think Luther\'s message resonated with so many people?'
    },

    {
      type: 'completion',
      title: 'Reformation Complete!',
      message: 'You\'ve learned about Martin Luther, the 95 Theses, the Five Solas, and how the Protestant Reformation permanently changed Christianity. Excellent work!',
      keyTakeaways: [
        'Martin Luther\'s 95 Theses (1517) challenged indulgences and sparked the Protestant Reformation',
        'The Five Solas (Scripture Alone, Faith Alone, Grace Alone, Christ Alone, Glory to God Alone) became Protestant theology\'s foundation',
        'The Reformation split Western Christianity into Catholic and Protestant branches'
      ],
      badge: {
        icon: '📜',
        name: 'Reformation Scholar',
        description: 'Completed The Reformation Explosion'
      }
    }
  ]
};

export const lesson4Data = {
  id: 4,
  title: "The Middle Way: Anglicans & Methodists",
  subtitle: "Finding balance between Catholic and Protestant",
  duration: "8 min",
  cards: [
    {
      type: 'content',
      title: 'Welcome to Lesson 4!',
      subtitle: '⏱️ About 8 minutes',
      content: [
        '**Learning Objective:** By the end of this lesson, you will understand how Anglicanism and Methodism emerged as "middle way" traditions between Catholicism and Protestantism.',
        'Not all reformers wanted to completely break from Catholic tradition.',
        'This lesson explores two traditions that tried to find a "middle way" - keeping some Catholic practices while embracing Protestant theology.',
        'You\'ll learn about the English Reformation under Henry VIII and the Methodist revival led by John Wesley.'
      ],
      highlight: '💭 Consider: Can you find a "middle way" between opposing views?',
      requireAcknowledgment: true
    },

    {
      type: 'content',
      title: 'Henry VIII and the English Reformation',
      content: [
        'The English Reformation began for political, not theological reasons.',
        'King Henry VIII wanted to annul his marriage to Catherine of Aragon (who hadn\'t given him a male heir), but Pope Clement VII refused.',
        'So Henry broke from Rome in **1534**, declaring himself Supreme Head of the Church of England.',
        'Initially, Henry remained theologically Catholic - he just rejected papal authority. The church became more Protestant under his successors.'
      ]
    },

    {
      type: 'quiz',
      question: 'Why did the English Reformation begin under Henry VIII?',
      options: [
        'He wanted to reform church theology',
        'He wanted to annul his marriage but the Pope refused',
        'He was converting to Protestantism',
        'He wanted to spread the gospel to England'
      ],
      correctAnswer: 1,
      explanation: 'Henry VIII broke from Rome primarily because Pope Clement VII refused to annul his marriage to Catherine of Aragon. The English Reformation began for political/personal reasons, not theological ones.'
    },

    {
      type: 'content',
      title: 'The Anglican Via Media',
      content: [
        'Anglicanism is sometimes called "reformed Catholicism." It retained:',
        '✓ Bishops in apostolic succession',
        '✓ Liturgical worship (the Book of Common Prayer)',
        '✓ Beautiful church architecture',
        'But adopted Protestant theology:',
        '✓ Scripture as supreme authority',
        '✓ Justification by faith',
        '✓ Only two sacraments (Baptism and Eucharist)',
        'The Anglican "three-legged stool" balances Scripture, Tradition, and Reason.'
      ],
      highlight: '💡 "Via media" means "middle way" - a balance between Catholic and Protestant'
    },

    {
      type: 'quiz',
      question: 'What does the Anglican "via media" mean?',
      options: [
        'Mass in Latin',
        'The middle way between Catholic and Protestant',
        'The path to heaven',
        'Weekly communion'
      ],
      correctAnswer: 1,
      explanation: '"Via media" means "middle way" - Anglicanism\'s attempt to balance Catholic structure and ritual with Protestant theology.'
    },

    {
      type: 'quiz',
      question: 'What are the three sources of authority in Anglican theology?',
      options: [
        'Pope, Bishops, Priests',
        'Faith, Hope, Love',
        'Scripture, Tradition, Reason',
        'Prayer, Fasting, Almsgiving'
      ],
      correctAnswer: 2,
      explanation: 'Anglicanism balances three sources of authority in its "three-legged stool": Scripture (the Bible), Tradition (church history and practice), and Reason (rational thought and experience).'
    },

    {
      type: 'matching',
      title: 'Match the English Reformation Figures',
      pairs: [
        {
          term: 'Henry VIII',
          definition: 'Broke from Rome to annul his marriage'
        },
        {
          term: 'Elizabeth I',
          definition: 'Established the Elizabethan Settlement'
        },
        {
          term: 'Thomas Cranmer',
          definition: 'Created the Book of Common Prayer'
        },
        {
          term: 'Mary I',
          definition: 'Tried to restore Catholicism, earned "Bloody Mary" nickname'
        }
      ]
    },

    {
      type: 'content',
      title: 'John Wesley and Methodist Revival',
      content: [
        'John Wesley (1703-1791), an Anglican priest, experienced a spiritual awakening in 1738 when his heart was "strangely warmed" at a meeting on Aldersgate Street, London.',
        'He began preaching about personal conversion, holiness, and social reform.',
        'When Anglican churches closed their doors to him, Wesley took his message outdoors, preaching to coal miners and the poor.',
        'Wesley emphasized: God\'s grace enables everyone to respond, personal holiness should follow justification, and faith without works is dead.'
      ]
    },

    {
      type: 'quiz',
      question: 'Where did John Wesley have his spiritual awakening in 1738?',
      options: [
        'Oxford University',
        'Aldersgate Street, London',
        'Georgia, America',
        'Canterbury Cathedral'
      ],
      correctAnswer: 1,
      explanation: 'Wesley\'s heart was "strangely warmed" at a meeting on Aldersgate Street in London in 1738. This experience led to his evangelical awakening and the Methodist movement.'
    },

    {
      type: 'content',
      title: 'Social Holiness',
      content: [
        'Wesley famously said, "There is no holiness but social holiness."',
        'Methodists pioneered social reform:',
        '• Opposing slavery',
        '• Improving prison conditions',
        '• Educating the poor',
        '• Caring for widows and orphans',
        'This emphasis on both personal piety and social justice became Methodist DNA.',
        'In America, Methodism exploded during the Second Great Awakening, becoming the largest Protestant denomination.'
      ]
    },

    {
      type: 'quiz',
      question: 'What did Wesley mean by "social holiness"?',
      options: [
        'Christians should avoid society',
        'Holiness includes serving the poor and reforming society',
        'Church services should be social events',
        'Only monks can be truly holy'
      ],
      correctAnswer: 1,
      explanation: 'Wesley taught "there is no holiness but social holiness" - meaning genuine Christian faith must express itself in serving others and working for social reform, not just personal piety.'
    },

    {
      type: 'fillblank',
      prompt: 'Henry VIII broke from Rome in _______, declaring himself Supreme Head of the Church of England.',
      correctAnswer: '1534',
      explanation: 'In 1534, Henry VIII passed the Act of Supremacy, declaring himself Supreme Head of the Church of England and breaking from papal authority.'
    },

    {
      type: 'content',
      title: 'Their Legacy Today',
      content: [
        '**Anglicans** maintain formal liturgy while allowing theological diversity - "High Church" looks Catholic, "Low Church" looks Protestant.',
        '**Methodists** continue emphasizing personal transformation and social action - they built universities (Duke, Emory, Northwestern) and countless social service organizations.',
        'Both traditions show you can be reformed without abandoning all tradition, and you can be liturgical without being rigid.'
      ],
      highlight: '💭 Reflection: What are the advantages of trying to blend Catholic and Protestant elements?'
    },

    {
      type: 'completion',
      title: 'Middle Way Mastered!',
      message: 'You\'ve learned about the Anglican via media and Methodist social holiness - two traditions that sought balance between Catholic tradition and Protestant reform.',
      keyTakeaways: [
        'Anglicanism began with Henry VIII\'s break from Rome (1534) for political reasons, developing into a "via media" between Catholic and Protestant',
        'John Wesley founded Methodism emphasizing personal holiness, small group accountability, and social justice',
        'Both traditions show you can blend Catholic liturgical elements with Protestant theology'
      ],
      badge: {
        icon: '🕊️',
        name: 'Middle Way Explorer',
        description: 'Completed Anglicans & Methodists'
      }
    }
  ]
};

export const lesson5Data = {
  id: 5,
  title: "Believer's Baptism: Baptists & Anabaptists",
  subtitle: "Radical reformation and religious freedom",
  duration: "7 min",
  cards: [
    {
      type: 'content',
      title: 'Welcome to Lesson 5',
      subtitle: '⏱️ About 7 minutes',
      content: [
        '**Learning Objective:** By the end of this lesson, you will understand believer\'s baptism, Anabaptist principles, and how these radical reformers shaped religious freedom.',
        'Some reformers believed Luther and others didn\'t go far enough in their reforms.',
        'This lesson explores traditions that took more radical stances on baptism, church-state separation, and religious freedom.',
        'These groups were often persecuted, but their ideas eventually shaped modern concepts of religious liberty.'
      ],
      highlight: '💭 Question: Should church and state be completely separate?',
      requireAcknowledgment: true
    },

    {
      type: 'content',
      title: 'The Radical Reformation: Anabaptists',
      content: [
        'While Luther and Calvin reformed the church, a more radical group emerged in Switzerland in the 1520s.',
        'Called **"Anabaptists"** (re-baptizers) by their opponents, they rejected infant baptism. Only believers who consciously chose to follow Christ should be baptized.',
        'Anabaptists believed the church should be a voluntary community of committed believers, separate from the state.',
        'They refused to swear oaths, serve in the military, or hold government office.',
        'Both Catholics and Protestants saw this as dangerous. Thousands of Anabaptists were martyred - ironically, many were drowned in mockery of their baptism practices.'
      ]
    },

    {
      type: 'quiz',
      question: 'What does "Anabaptist" literally mean?',
      options: [
        'Against baptism',
        'Re-baptizer',
        'Water believers',
        'True baptism'
      ],
      correctAnswer: 1,
      explanation: '"Anabaptist" means "re-baptizer." This name was given by their opponents because Anabaptists baptized adults who had already been baptized as infants, which others saw as rebaptism.'
    },

    {
      type: 'content',
      title: 'Baptist Origins and Growth',
      content: [
        'Baptists emerged independently in England in the early 1600s.',
        'John Smyth, an Anglican priest turned Separatist, baptized himself and then his congregation in Amsterdam in 1609, forming the first Baptist church.',
        'Baptists emphasized:',
        '1. Believer\'s baptism by immersion',
        '2. **Soul competency** - each person can read Scripture for themselves',
        '3. Priesthood of all believers',
        '4. Congregational autonomy - each church governs itself',
        '5. Religious liberty for ALL'
      ]
    },

    {
      type: 'quiz',
      question: 'What is "soul competency" in Baptist theology?',
      options: [
        'Only educated people can be saved',
        'Each person can read and understand Scripture for themselves',
        'Souls must compete for salvation',
        'Priests must interpret the Bible for laypeople'
      ],
      correctAnswer: 1,
      explanation: 'Soul competency is the Baptist belief that each individual can read, understand, and apply Scripture for themselves without needing a priest or church hierarchy to interpret it for them.'
    },

    {
      type: 'content',
      title: 'Church-State Separation',
      content: [
        'Both Anabaptists and Baptists pioneered the radical idea that church and state should be completely separate.',
        'In their era, this was revolutionary. Most believed society needed one official religion.',
        'But Baptists argued that faith coerced isn\'t genuine faith.',
        'Thomas Helwys wrote to King James I: "The king is a mortal man, and not God, therefore hath no power over immortal souls."',
        'This bold statement landed Helwys in prison, where he died. Yet Baptist ideas influenced the American founders.'
      ],
      highlight: '💡 The "wall of separation" between church and state reflected Baptist theology'
    },

    {
      type: 'quiz',
      question: 'Who founded Rhode Island as a haven for religious freedom?',
      options: [
        'John Smyth',
        'Menno Simons',
        'Roger Williams',
        'Thomas Helwys'
      ],
      correctAnswer: 2,
      explanation: 'Roger Williams, a Baptist minister, founded Rhode Island in 1636 as a colony based on religious freedom after being expelled from Massachusetts for his radical views on liberty of conscience.'
    },

    {
      type: 'matching',
      title: 'Match the Terms',
      pairs: [
        {
          term: 'Anabaptist',
          definition: 'Re-baptizers who rejected infant baptism'
        },
        {
          term: 'Soul Competency',
          definition: 'Each person can understand Scripture for themselves'
        },
        {
          term: 'Mennonites',
          definition: 'Anabaptist group following Menno Simons'
        },
        {
          term: 'Roger Williams',
          definition: 'Founded Rhode Island for religious freedom'
        }
      ]
    },

    {
      type: 'quiz',
      question: 'How did many Anabaptists die during persecution?',
      options: [
        'Burning at the stake',
        'Drowning (in mockery of their baptism practices)',
        'Beheading',
        'Exile to distant lands'
      ],
      correctAnswer: 1,
      explanation: 'Many Anabaptists were drowned by both Catholic and Protestant authorities, ironically mocking their emphasis on baptism by immersion. Thousands were martyred in the 1500s.'
    },

    {
      type: 'content',
      title: 'Baptist Diversity & Anabaptist Community',
      content: [
        '**Today\'s Baptists** are remarkably diverse:',
        '• Southern Baptists emphasize evangelism',
        '• American Baptists are more moderate',
        '• Black Baptist churches have been centers of civil rights activism',
        '**Anabaptist communities** like the Amish, Mennonites, and Hutterites maintain distinctive lifestyles:',
        '• Distinctive dress',
        '• Resist modern technology (especially Amish)',
        '• Practice pacifism',
        '• Emphasize community discipline'
      ]
    },

    {
      type: 'quiz',
      question: 'Which modern groups descended from the Anabaptist movement?',
      options: [
        'Presbyterians and Methodists',
        'Amish, Mennonites, and Hutterites',
        'Lutherans and Anglicans',
        'Pentecostals and Charismatics'
      ],
      correctAnswer: 1,
      explanation: 'The Amish, Mennonites, and Hutterites all descended from the Anabaptist movement. They maintain distinctive communities emphasizing pacifism, simple living, and separation from mainstream society.'
    },

    {
      type: 'fillblank',
      prompt: 'John Smyth baptized himself and formed the first Baptist church in _______ in 1609.',
      correctAnswer: 'Amsterdam',
      explanation: 'John Smyth baptized himself and his congregation in Amsterdam in 1609, forming the first recognizably Baptist church.'
    },

    {
      type: 'content',
      title: 'Their Legacy',
      content: [
        'Both Anabaptists and Baptists contributed crucial ideas we now take for granted:',
        '✓ Voluntary church membership',
        '✓ Separation of church and state',
        '✓ Religious freedom for all',
        '✓ Individual interpretation of Scripture',
        'The First Amendment\'s guarantee of religious freedom owes much to Baptist advocacy.'
      ],
      highlight: '💭 Reflection: Why do you think baptism became such a divisive issue?'
    },

    {
      type: 'completion',
      title: 'Radical Reformation Complete!',
      message: 'You\'ve learned about Anabaptists and Baptists, their commitment to believer\'s baptism, and their pioneering role in establishing religious freedom!',
      keyTakeaways: [
        'Anabaptists rejected infant baptism, insisting only believers who can make a conscious choice should be baptized',
        'Baptists championed separation of church and state and voluntary church membership',
        'These "radical" reformers laid groundwork for modern religious freedom despite facing persecution'
      ],
      badge: {
        icon: '💧',
        name: 'Freedom Fighter',
        description: 'Completed Believer\'s Baptism lesson'
      }
    }
  ]
};

export const lesson6Data = {
  id: 6,
  title: "The Spirit Moves: Pentecostals & Holiness",
  subtitle: "Revival, spiritual gifts, and transformation",
  duration: "8 min",
  cards: [
    {
      type: 'content',
      title: 'Welcome to Lesson 6',
      subtitle: '⏱️ About 8 minutes',
      content: [
        '**Learning Objective:** By the end of this lesson, you will understand the Holiness movement\'s emphasis on sanctification and Pentecostalism\'s focus on spiritual gifts.',
        'In the late 1800s and early 1900s, powerful revival movements swept across America and beyond.',
        'These movements emphasized emotional worship, spiritual gifts, and complete personal transformation.',
        'You\'ll learn about the Holiness movement and the rapid growth of Pentecostalism.'
      ],
      highlight: '💭 Reflect: What role do emotions play in your worship?',
      requireAcknowledgment: true
    },

    {
      type: 'content',
      title: 'The Holiness Movement',
      content: [
        'The Holiness movement emerged in the mid-1800s, mainly within Methodism.',
        'They emphasized Wesley\'s teaching about **"entire sanctification"** or "Christian perfection."',
        'Holiness preachers taught that after conversion, believers could experience a "second work of grace" - a moment when God completely cleansed them from the inclination to sin.',
        'Camp meetings featured fervent preaching, emotional testimonies, and altar calls.',
        'Women found leadership opportunities often denied in other traditions. Phoebe Palmer became a leading Holiness evangelist in the 1850s.'
      ]
    },

    {
      type: 'quiz',
      question: 'What is "entire sanctification" in Holiness theology?',
      options: [
        'Being baptized as an infant',
        'A second work of grace that completely cleanses from the inclination to sin',
        'Becoming a church member',
        'Reading the entire Bible'
      ],
      correctAnswer: 1,
      explanation: 'Entire sanctification is the Holiness teaching that after conversion, believers can experience a "second work of grace" where God completely cleanses them from the inclination to sin, enabling them to live in holiness.'
    },

    {
      type: 'content',
      title: 'Azusa Street: Pentecostalism is Born',
      content: [
        'On **April 9, 1906**, at a humble mission on Azusa Street in Los Angeles, something unprecedented happened.',
        'Under William J. Seymour, an African American Holiness preacher and son of freed slaves, believers began **speaking in tongues** - utterances in languages they\'d never learned.',
        'Seymour taught this was evidence of "baptism in the Holy Spirit," a third experience after conversion and sanctification.',
        'The Azusa Street Revival ran for three years, with services sometimes lasting all day.',
        'Remarkably for segregated America, the revival was racially integrated. Seymour\'s vision: "The color line was washed away by the blood."'
      ]
    },

    {
      type: 'quiz',
      question: 'Where and when did the famous Azusa Street Revival take place?',
      options: [
        'New York City, 1890',
        'Los Angeles, 1906',
        'Chicago, 1920',
        'Atlanta, 1915'
      ],
      correctAnswer: 1,
      explanation: 'The Azusa Street Revival began on April 9, 1906, in Los Angeles at a humble mission led by William J. Seymour. It ran for three years and launched global Pentecostalism.'
    },

    {
      type: 'quiz',
      question: 'Who led the Azusa Street Revival?',
      options: [
        'Billy Graham',
        'Charles Finney',
        'William J. Seymour',
        'John Wesley'
      ],
      correctAnswer: 2,
      explanation: 'William J. Seymour, an African American Holiness preacher and son of freed slaves, led the Azusa Street Revival. His leadership was remarkable in segregated America, and he advocated for racial integration.'
    },

    {
      type: 'content',
      title: 'Pentecostal Beliefs and Practices',
      content: [
        'Pentecostals affirm standard Christian doctrine but add distinctive emphases:',
        '1. **Baptism in the Holy Spirit** as a separate experience from conversion, evidenced by speaking in tongues',
        '2. All spiritual gifts listed in 1 Corinthians 12 are available today - prophecy, healing, miracles, tongues, interpretation',
        '3. **Divine healing** is part of the atonement',
        '4. Expectation of Jesus\'s imminent return',
        'Worship is spontaneous, emotional, and participatory - with raised hands, dancing, shouting, and prophecies shared during services.'
      ]
    },

    {
      type: 'quiz',
      question: 'What do Pentecostals believe is the initial evidence of baptism in the Holy Spirit?',
      options: [
        'Prophesying',
        'Healing the sick',
        'Speaking in tongues',
        'Feeling peaceful'
      ],
      correctAnswer: 2,
      explanation: 'Pentecostals believe that speaking in tongues (glossolalia) - utterances in languages unknown to the speaker - is the initial physical evidence of being baptized in the Holy Spirit.'
    },

    {
      type: 'matching',
      title: 'Match the Key Terms',
      pairs: [
        {
          term: 'Entire Sanctification',
          definition: 'Second work of grace cleansing from sin'
        },
        {
          term: 'Speaking in Tongues',
          definition: 'Evidence of baptism in the Holy Spirit'
        },
        {
          term: 'Azusa Street',
          definition: 'Los Angeles revival that birthed Pentecostalism'
        },
        {
          term: 'William J. Seymour',
          definition: 'African American leader of Azusa Street Revival'
        }
      ]
    },

    {
      type: 'content',
      title: 'Global Pentecostal Explosion',
      content: [
        'Pentecostalism became Christianity\'s fastest-growing movement.',
        'Starting from nothing in 1900, Pentecostals and Charismatics now number **over 600 million worldwide** - about a quarter of all Christians.',
        'Growth has been spectacular in Latin America, sub-Saharan Africa, and Asia.',
        '• In Brazil, Pentecostals grow by 15,000 per day',
        '• South Korea\'s Yoido Full Gospel Church has over 800,000 members',
        'Why such growth? Pentecostalism offers direct personal experience of God\'s power, healing, deliverance, hope for the poor, and opportunities for lay leadership.'
      ],
      highlight: '💡 In the Global South, Pentecostalism represents a major portion of Christianity.'
    },

    {
      type: 'quiz',
      question: 'Approximately how many Pentecostals and Charismatics are there worldwide today?',
      options: [
        '10 million',
        '100 million',
        'Over 600 million',
        '1 billion'
      ],
      correctAnswer: 2,
      explanation: 'Pentecostals and Charismatics now number over 600 million worldwide - about a quarter of all Christians - making Pentecostalism one of the fastest-growing religious movements in history.'
    },

    {
      type: 'fillblank',
      prompt: 'The Azusa Street Revival began on April 9, _______.',
      correctAnswer: '1906',
      explanation: 'The Azusa Street Revival began on April 9, 1906, marking the birth of modern Pentecostalism.'
    },

    {
      type: 'content',
      title: 'Understanding Today',
      content: [
        '**Holiness churches** (Church of the Nazarene, Church of God Anderson) emphasize personal holiness and simple living.',
        '**Pentecostal churches** (Assemblies of God, Church of God in Christ) emphasize spiritual gifts and energetic worship.',
        'Both movements show that Christianity can be experiential and emotional, not just intellectual.',
        'They\'ve made Christianity accessible to the poor and marginalized worldwide.'
      ],
      highlight: '💭 Reflection: Why do you think Pentecostalism appeals to so many people worldwide?'
    },

    {
      type: 'completion',
      title: 'Spirit-Filled Success!',
      message: 'You\'ve learned about the Holiness movement\'s emphasis on sanctification and Pentecostalism\'s explosive growth through spiritual gifts and experiential worship!',
      keyTakeaways: [
        'The Holiness movement emphasized "entire sanctification" - complete transformation and holy living',
        'Pentecostalism began at Azusa Street Revival (1906) emphasizing speaking in tongues and spiritual gifts',
        'Pentecostalism has grown to over 600 million members worldwide, making it one of Christianity\'s fastest-growing movements'
      ],
      badge: {
        icon: '🔥',
        name: 'Revival Scholar',
        description: 'Completed The Spirit Moves lesson'
      }
    }
  ]
};

export const lesson7Data = {
  id: 7,
  title: "Back to Basics: Restorationists & Non-Denominational",
  subtitle: "Simplifying and reimagining church",
  duration: "7 min",
  cards: [
    {
      type: 'content',
      title: 'Welcome to Lesson 7!',
      subtitle: '⏱️ About 7 minutes',
      content: [
        '**Learning Objective:** By the end of this lesson, you will understand the Restoration Movement\'s goal to return to New Testament Christianity and the rise of non-denominational churches.',
        'Some Christians asked: What if we went back to the New Testament and started over?',
        'They rejected all traditions and creeds, seeking to restore "simple, biblical Christianity."',
        'You\'ll learn about the Restoration Movement and today\'s non-denominational churches!'
      ],
      highlight: '💭 Question: Is it possible to have "just the Bible" without traditions?',
      requireAcknowledgment: true
    },

    {
      type: 'content',
      title: 'The Restoration Movement',
      content: [
        'In early 1800s America, several preachers independently called Christians to abandon all denominations.',
        'Thomas Campbell declared: **"Where the Scriptures speak, we speak; where the Scriptures are silent, we are silent."**',
        'His son Alexander Campbell and Barton Stone led thousands to reject creeds and restore "New Testament Christianity."',
        'They refused names like "Baptist" or "Methodist," calling themselves simply "Christians" or "Disciples."',
        'Their motto: **"Christians only, not the only Christians."**'
      ]
    },

    {
      type: 'quiz',
      question: 'What was Thomas Campbell\'s famous motto?',
      options: [
        '"Grace alone, faith alone"',
        '"Where the Scriptures speak, we speak; where they are silent, we are silent"',
        '"The Bible says it, I believe it"',
        '"No creed but Christ"'
      ],
      correctAnswer: 1,
      explanation: 'Thomas Campbell\'s motto "Where the Scriptures speak, we speak; where the Scriptures are silent, we are silent" captured the Restoration Movement\'s commitment to follow only what the Bible explicitly teaches.'
    },

    {
      type: 'content',
      title: 'Stone-Campbell Movement Beliefs',
      content: [
        'The Restoration Movement, also called the Stone-Campbell Movement, emphasized:',
        '1. **No creeds** - the Bible alone as authority',
        '2. **Autonomy of local churches** - no centralized denominational control',
        '3. **Believer\'s baptism by immersion** for the forgiveness of sins',
        '4. **Weekly communion** on the Lord\'s Day',
        '5. Return to simple worship - singing, prayer, preaching, communion',
        'They believed denominations divided Christians and violated Jesus\'s prayer "that they may be one" (John 17:21).'
      ]
    },

    {
      type: 'quiz',
      question: 'How often do Restoration Movement churches typically observe communion?',
      options: [
        'Once a year',
        'Monthly',
        'Weekly',
        'Only at Easter'
      ],
      correctAnswer: 2,
      explanation: 'Restoration Movement churches practice weekly communion on the Lord\'s Day (Sunday), believing this follows the New Testament pattern seen in Acts 20:7.'
    },

    {
      type: 'content',
      title: 'The Movement Divides',
      content: [
        'Ironically, the "unity movement" itself eventually divided into three main groups:',
        '**Churches of Christ** - Conservative, often oppose instrumental music in worship, emphasize baptism for salvation',
        '**Christian Church (Disciples of Christ)** - Liberal, mainline denomination, practice infant baptism and open communion',
        '**Christian Churches/Churches of Christ** - Middle ground, evangelical, use instruments, autonomous congregations',
        'Together they number about 5 million in North America.'
      ]
    },

    {
      type: 'quiz',
      question: 'Which Restoration Movement group is known for opposing instrumental music?',
      options: [
        'Disciples of Christ',
        'Christian Churches',
        'Churches of Christ',
        'All Restoration churches oppose instruments'
      ],
      correctAnswer: 2,
      explanation: 'Churches of Christ are the conservative wing of the Restoration Movement and typically oppose instrumental music in worship, believing only a cappella singing follows the New Testament pattern.'
    },

    {
      type: 'matching',
      title: 'Match the Key Terms',
      pairs: [
        {
          term: 'Restoration Movement',
          definition: 'Sought to restore "New Testament Christianity"'
        },
        {
          term: 'No Creed but Christ',
          definition: 'Restorationist rejection of written creeds'
        },
        {
          term: 'Churches of Christ',
          definition: 'Conservative group opposing instrumental music'
        },
        {
          term: 'Stone-Campbell',
          definition: 'Leaders who founded the Restoration Movement'
        }
      ]
    },

    {
      type: 'content',
      title: 'The Rise of Non-Denominational Churches',
      content: [
        'Since the 1970s, thousands of **non-denominational churches** have formed.',
        'They share the Restorationist impulse: reject denominational labels and traditions, follow "just the Bible."',
        'Often these are **megachurches** - large congregations with 2,000+ members.',
        'They feature contemporary worship bands, casual atmosphere, practical teaching, extensive programs.',
        'Famous examples: Willow Creek (Chicago), Saddleback (California), North Point (Atlanta).',
        'Critics worry about lack of accountability and theological depth. Supporters celebrate freedom and relevance.'
      ],
      highlight: '💡 About 1 in 5 American evangelicals now attend non-denominational churches.'
    },

    {
      type: 'quiz',
      question: 'What defines a megachurch?',
      options: [
        'A church with a large building',
        'A church with 2,000+ members',
        'A church on television',
        'A church with multiple locations'
      ],
      correctAnswer: 1,
      explanation: 'A megachurch is typically defined as a church with 2,000 or more weekly attendees. These large congregations often feature contemporary worship and extensive programming.'
    },

    {
      type: 'content',
      title: 'Contemporary Worship Revolution',
      content: [
        'Non-denominational churches pioneered **contemporary worship** - a huge shift in how many Christians worship:',
        '• Worship bands with drums, guitars, keyboards instead of organs',
        '• Projection screens instead of hymnals',
        '• Casual dress, coffee in the sanctuary',
        '• Song lyrics focus on personal experience of God',
        '• Services designed to be "seeker-friendly"',
        'This style has now spread to many denominational churches too.'
      ]
    },

    {
      type: 'quiz',
      question: 'What characterizes contemporary worship services?',
      options: [
        'Traditional hymns sung from hymnals',
        'Pipe organs and robed choirs',
        'Worship bands with guitars and drums, projection screens',
        'Complete silence and meditation'
      ],
      correctAnswer: 2,
      explanation: 'Contemporary worship features worship bands with modern instruments (guitars, drums, keyboards), projection screens for lyrics, and a more casual, participatory atmosphere.'
    },

    {
      type: 'fillblank',
      prompt: 'Thomas Campbell and Barton _______ led the Restoration Movement.',
      correctAnswer: 'Stone',
      explanation: 'Barton Stone, along with Thomas and Alexander Campbell, were the primary leaders of the Restoration Movement, which is also known as the Stone-Campbell Movement.'
    },

    {
      type: 'content',
      title: 'Understanding Today',
      content: [
        'The impulse to "get back to basics" appears throughout church history.',
        'Restorationists believe they can recreate first-century Christianity by following the Bible alone.',
        'Critics argue we can never fully escape our own cultural context and need tradition to interpret Scripture.',
        'Non-denominational churches offer freedom and relevance but may lack historical wisdom and accountability.',
        'The debate continues: Should we preserve tradition or start fresh in each generation?'
      ],
      highlight: '💭 Reflection: What are the advantages and disadvantages of having no denominational connection?'
    },

    {
      type: 'completion',
      title: 'Restoration Completed!',
      message: 'You\'ve learned about the Restoration Movement\'s quest to return to New Testament Christianity and the rise of contemporary non-denominational churches!',
      keyTakeaways: [
        'Restorationists (Churches of Christ, Disciples of Christ) sought to restore "simple New Testament Christianity" by rejecting all creeds and traditions',
        'Non-denominational churches emphasize local autonomy, contemporary worship, and practical preaching',
        'Contemporary worship (worship bands, projection screens, casual atmosphere) has become mainstream across many traditions'
      ],
      badge: {
        icon: '📖',
        name: 'Restoration Expert',
        description: 'Completed Back to Basics lesson'
      }
    }
  ]
};

export const lesson8Data = {
  id: 8,
  title: "Your Journey: Understanding & Choosing",
  subtitle: "Finding your church home",
  duration: "9 min",
  cards: [
    {
      type: 'content',
      title: 'Welcome to the Final Lesson!',
      subtitle: '⏱️ About 9 minutes',
      content: [
        '**Learning Objective:** By the end of this lesson, you will be able to identify what Christians share, understand denominational differences, and know how to find a church home.',
        'You\'ve journeyed through 2,000 years of church history!',
        'Now it\'s time to think about YOUR place in this ongoing story.',
        'This lesson helps you understand what different churches share, what divides them, and how to find a church home.'
      ],
      highlight: '💭 Reflect: What questions do you have about finding a church?',
      requireAcknowledgment: true
    },

    {
      type: 'content',
      title: 'What All Christians Share',
      content: [
        'Despite our divisions, all Christians affirm core beliefs from the **Apostles\' Creed**:',
        '• **One God** in three persons - Father, Son, and Holy Spirit',
        '• **Jesus Christ** is fully God and fully human',
        '• Jesus was **born of the Virgin Mary**, died on the cross, and rose from the dead',
        '• Salvation comes through **Jesus alone**',
        '• The **Bible** is God\'s inspired word',
        '• Jesus will **return** to judge the living and the dead',
        'These essentials unite Christians across all denominations!'
      ],
      highlight: '💡 "In essentials unity, in non-essentials liberty, in all things charity"'
    },

    {
      type: 'quiz',
      question: 'Which statement would ALL Christians affirm?',
      options: [
        'Baptism should be by immersion only',
        'Jesus Christ is fully God and fully human',
        'We must worship on Saturday',
        'Only adults should be baptized'
      ],
      correctAnswer: 1,
      explanation: 'All Christians across denominations affirm that Jesus Christ is both fully God and fully human. Baptism practices, worship days, and other details vary, but Christ\'s divine and human nature is essential to Christian faith.'
    },

    {
      type: 'content',
      title: 'The Major Dividing Lines',
      content: [
        'Christians disagree on important secondary issues:',
        '**1. Church Authority:** Does authority rest in the Pope, bishops, local churches, or individual believers?',
        '**2. Salvation:** Do we contribute to salvation through good works, or is it entirely God\'s grace?',
        '**3. Sacraments:** Are baptism and communion symbolic or do they convey actual grace?',
        '**4. Baptism:** Should we baptize infants or only believing adults? Immersion or sprinkling?',
        '**5. Worship Style:** Should worship be liturgical and formal, or spontaneous and contemporary?',
        'Understanding these issues helps you recognize different traditions.'
      ]
    },

    {
      type: 'quiz',
      question: 'What is a "sacrament" or "ordinance"?',
      options: [
        'A church law or rule',
        'A sacred act like baptism or communion',
        'A worship song',
        'A type of prayer'
      ],
      correctAnswer: 1,
      explanation: 'A sacrament (Catholic/Orthodox) or ordinance (Protestant) is a sacred act instituted by Jesus, like baptism and communion. Churches disagree on whether these acts convey grace or are symbolic remembrances.'
    },

    {
      type: 'matching',
      title: 'Match Church Traditions',
      pairs: [
        {
          term: 'Catholic',
          definition: 'Pope as head, seven sacraments, apostolic succession'
        },
        {
          term: 'Orthodox',
          definition: 'Icons, liturgy, national churches, mystical theology'
        },
        {
          term: 'Protestant',
          definition: 'Scripture alone, faith alone, priesthood of believers'
        },
        {
          term: 'Pentecostal',
          definition: 'Spiritual gifts, speaking in tongues, experiential worship'
        }
      ]
    },

    {
      type: 'content',
      title: 'Visiting Churches Respectfully',
      content: [
        'As you explore different churches, remember:',
        '**Catholic/Orthodox Mass:** Stand, sit, and kneel when others do. Non-Catholics/non-Orthodox should not take communion.',
        '**Liturgical Protestant:** Follow along in the bulletin. Communion policies vary - some are "open" (all welcome), others "closed."',
        '**Evangelical/Pentecostal:** Expect contemporary music, casual dress, hands raised in worship. Altar calls may happen.',
        '**Traditional Protestant:** Hymns from hymnals, formal liturgy, robed ministers.',
        'Always be respectful, participate where appropriate, and ask questions after the service!'
      ],
      highlight: '💭 Tip: Visit 3-4 times before judging - every church has off days!'
    },

    {
      type: 'quiz',
      question: 'When visiting a Catholic or Orthodox church, what should non-members NOT do?',
      options: [
        'Stand when others stand',
        'Take communion',
        'Sing along with hymns',
        'Pray during the service'
      ],
      correctAnswer: 1,
      explanation: 'Non-Catholics should not take communion at Catholic Mass, and non-Orthodox should not take communion in Orthodox churches. These traditions reserve communion for baptized, confirmed members in good standing.'
    },

    {
      type: 'content',
      title: 'Questions to Ask When Choosing',
      content: [
        'Finding a church home? Ask yourself:',
        '1. **Biblical Teaching:** Does the church teach the Bible faithfully and clearly?',
        '2. **Authentic Community:** Will I find genuine relationships and support?',
        '3. **Worship Style:** Does the worship help me connect with God?',
        '4. **Mission & Service:** Is the church serving the community and sharing the gospel?',
        '5. **Doctrine:** Do I agree with their core beliefs on baptism, communion, salvation?',
        '6. **Opportunities:** Can I use my gifts and grow spiritually?',
        'No church is perfect - look for a church family where you can both give and receive.'
      ]
    },

    {
      type: 'quiz',
      question: 'What is the most important factor when choosing a church?',
      options: [
        'The music style you prefer',
        'How close it is to your house',
        'Whether they teach the Bible faithfully',
        'How big the congregation is'
      ],
      correctAnswer: 2,
      explanation: 'While personal preferences matter, the most important factor is whether the church teaches the Bible faithfully. Other factors like community, worship style, and mission are also important but should be evaluated alongside sound biblical teaching.'
    },

    {
      type: 'fillblank',
      prompt: 'The phrase "In essentials unity, in non-essentials _______, in all things charity" guides Christian relationships.',
      correctAnswer: 'liberty',
      explanation: 'The famous saying "In essentials unity, in non-essentials liberty, in all things charity" reminds Christians to unite on core doctrines, allow freedom on secondary issues, and treat everyone with love.'
    },

    {
      type: 'content',
      title: 'Denominations Are a Family',
      content: [
        'Think of denominations like siblings in a family:',
        '• We share the same Father and the same foundational faith',
        '• We emphasize different aspects of our shared heritage',
        '• We sometimes argue, but we\'re still family',
        '• Our diversity can be a strength, not just a weakness',
        'Different traditions preserve different treasures:',
        '• Catholics: Historical continuity and sacramental depth',
        '• Orthodox: Mystical beauty and ancient liturgy',
        '• Lutherans: Grace-centered theology',
        '• Reformed: God\'s sovereignty and Scripture',
        '• Baptists: Religious liberty and believer\'s baptism',
        '• Pentecostals: Experiential faith and Spirit-empowerment'
      ],
      highlight: '💡 You can appreciate all traditions while finding your home in one!'
    },

    {
      type: 'content',
      title: 'You Are Part of This Story',
      content: [
        'Church history didn\'t end - YOU are part of it!',
        'The decisions you make, the church you join, the faith you live - all of it continues the story that began at Pentecost.',
        'Will you preserve ancient traditions or pioneer new expressions of faith?',
        'Will you build bridges between divided Christians?',
        'Will you share the gospel in your generation?',
        'The 21st century chapter of church history is being written right now. **You\'re writing it.**'
      ],
      highlight: '🌟 Your faith journey matters to God and to His church!'
    },

    {
      type: 'quiz',
      question: 'What makes you part of church history?',
      options: [
        'Only if you become a pastor or missionary',
        'Only if you do something famous',
        'Your faith and life contribute to the ongoing story of God\'s church',
        'You have to be part of a specific denomination'
      ],
      correctAnswer: 2,
      explanation: 'Every believer is part of church history! Your faith journey, the church you join, and how you live out your faith all contribute to the ongoing story of God\'s people. You don\'t need to be famous or hold an official position.'
    },

    {
      type: 'completion',
      title: 'Congratulations, Church History Scholar!',
      message: 'You\'ve completed the entire Church History journey! From Pentecost to today, you now understand the rich, complex story of Christianity. May this knowledge help you find your place in God\'s ongoing story!',
      keyTakeaways: [
        'All Christians share core beliefs (Trinity, Jesus as Savior, Bible\'s authority, resurrection)',
        'Denominational differences are often about secondary issues - we can disagree charitably while maintaining unity on essentials',
        'You are part of church history! Your faith journey contributes to the ongoing story of God\'s people'
      ],
      badge: {
        icon: '🎓',
        name: 'Church History Graduate',
        description: 'Completed the entire Church History study guide!'
      }
    }
  ]
};
