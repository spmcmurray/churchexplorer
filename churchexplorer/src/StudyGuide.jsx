import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle, Calendar, ChevronDown, ChevronRight, Award, Target } from 'lucide-react';

const StudyGuide = () => {
  const [expandedWeek, setExpandedWeek] = useState(null);
  const [completedWeeks, setCompletedWeeks] = useState([]);
  const [quizScores, setQuizScores] = useState({});
  const [currentQuizAnswers, setCurrentQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState({});

  // Load completed weeks and quiz scores from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('churchExplorerProgress');
    const savedQuizScores = localStorage.getItem('churchExplorerQuizScores');

    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        setCompletedWeeks(parsed);
      } catch (e) {
        console.error('Error loading progress:', e);
      }
    }

    if (savedQuizScores) {
      try {
        const parsed = JSON.parse(savedQuizScores);
        setQuizScores(parsed);
      } catch (e) {
        console.error('Error loading quiz scores:', e);
      }
    }
  }, []);

  // Save to localStorage whenever completedWeeks changes
  useEffect(() => {
    localStorage.setItem('churchExplorerProgress', JSON.stringify(completedWeeks));
  }, [completedWeeks]);

  // Save to localStorage whenever quizScores changes
  useEffect(() => {
    localStorage.setItem('churchExplorerQuizScores', JSON.stringify(quizScores));
  }, [quizScores]);

  // 8-Week Study Guide Curriculum
  const curriculum = [
    {
      week: 1,
      title: "The Beginning: Early Christianity",
      subtitle: "How it all started",
      introduction: "Welcome to your journey through church history! This week, we'll explore how Christianity began and grew in its first few centuries. Don't worry if you're new to this - we'll start with the basics and build from there.",
      keyTopics: [
        "The Apostolic Age (33 AD onward) - The first followers of Jesus",
        "How the early church organized itself",
        "The first major councils and why they mattered",
        "How Christianity spread across the Roman Empire"
      ],
      detailedContent: [
        {
          heading: "The Apostolic Age (33-100 AD)",
          text: "After Jesus's resurrection and ascension, his disciples (now called apostles) began spreading his teachings. The Day of Pentecost (Acts 2) marked the birth of the church, where the Holy Spirit empowered the apostles to preach boldly. Peter emerged as a key leader in Jerusalem, while Paul (formerly Saul, a persecutor of Christians) became the 'apostle to the Gentiles' after his dramatic conversion. Paul's missionary journeys throughout the Roman Empire established churches in major cities like Corinth, Ephesus, and Rome. The apostles wrote letters (epistles) to these churches, many of which became books of the New Testament."
        },
        {
          heading: "Persecution and Growth (100-313 AD)",
          text: "Christianity was illegal in the Roman Empire and faced periodic persecution. Romans viewed Christians with suspicion because they refused to worship the emperor or Roman gods. Despite this, Christianity grew rapidly among slaves, women, and the urban poor. Christians met secretly in homes and catacombs. Martyrs like Polycarp and Perpetua inspired others through their faithful deaths. By 300 AD, an estimated 10% of the Roman Empire was Christian."
        },
        {
          heading: "The Ecumenical Councils",
          text: "As Christianity grew, disagreements arose about core beliefs. The Council of Nicaea (325 AD) was convened by Emperor Constantine to address the Arian controversy - a debate about whether Jesus was fully God or a created being. The council produced the Nicene Creed, affirming Jesus as 'true God from true God, begotten not made.' Later councils clarified the nature of the Trinity, the person of Christ (fully God and fully human), and which books belonged in the Bible. These councils' decisions still shape Christian belief across nearly all denominations today."
        },
        {
          heading: "From Persecution to Power",
          text: "Everything changed in 313 AD when Emperor Constantine legalized Christianity with the Edict of Milan. By 380 AD, Christianity became the official religion of the Roman Empire under Emperor Theodosius. This shift brought both blessings and challenges. Churches could worship openly and own property, but the faith also became intertwined with political power. Some Christians fled to the desert to become monks, seeking a purer faith away from worldly influence."
        }
      ],
      beginnerExplanation: "Think of the early church like a startup that grew rapidly. Jesus' followers started small in Jerusalem, but within a few centuries, Christianity had spread across Europe, Africa, and Asia. Early Christians had to figure out basic questions: What do we believe? How should we organize? What books belong in the Bible?",
      reflectionQuestions: [
        "What surprises you most about how Christianity began?",
        "Why do you think Christianity spread so quickly in the ancient world?",
        "How do you think the early church differs from churches today?"
      ],
      practicalApplication: "This week, visit the Catholic and Orthodox sections in the app. These traditions trace their roots directly to the early church. Notice how they emphasize apostolic succession - the idea of an unbroken line of leadership from the apostles to today.",
      appLinks: ["Catholic", "Orthodox", "Bible Timeline"],
      quiz: [
        {
          question: "What event marked the birth of the Christian church?",
          options: [
            "The resurrection of Jesus",
            "The Day of Pentecost",
            "The Council of Nicaea",
            "Paul's conversion"
          ],
          correctAnswer: 1,
          explanation: "The Day of Pentecost (Acts 2) is considered the birthday of the church, when the Holy Spirit came upon the apostles and Peter preached his first sermon, resulting in 3,000 new believers."
        },
        {
          question: "Who was known as the 'apostle to the Gentiles'?",
          options: [
            "Peter",
            "John",
            "Paul",
            "James"
          ],
          correctAnswer: 2,
          explanation: "Paul (formerly Saul) became known as the apostle to the Gentiles after his conversion. He went on extensive missionary journeys throughout the Roman Empire, establishing churches and writing many New Testament letters."
        },
        {
          question: "What was the main issue addressed at the Council of Nicaea in 325 AD?",
          options: [
            "Which books belong in the Bible",
            "Whether Christians should worship on Saturday or Sunday",
            "Whether Jesus was fully God or a created being",
            "How to organize church leadership"
          ],
          correctAnswer: 2,
          explanation: "The Council of Nicaea addressed the Arian controversy, which questioned whether Jesus was fully God or a created being. The council affirmed that Jesus is 'true God from true God, begotten not made,' establishing the doctrine of Christ's full divinity."
        },
        {
          question: "When did Christianity become legal in the Roman Empire?",
          options: [
            "33 AD",
            "313 AD",
            "380 AD",
            "476 AD"
          ],
          correctAnswer: 1,
          explanation: "In 313 AD, Emperor Constantine issued the Edict of Milan, which legalized Christianity and ended persecution. This was a major turning point that allowed Christians to worship openly."
        },
        {
          question: "Why did some Christians become desert monks in the 4th century?",
          options: [
            "They were fleeing persecution",
            "They wanted to find gold in the desert",
            "They sought a purer faith away from the church's new political power",
            "They were spreading Christianity to nomadic tribes"
          ],
          correctAnswer: 2,
          explanation: "When Christianity became the official religion of Rome in 380 AD, some Christians felt the faith had become too worldly and politically entangled. They fled to the desert to live as monks, seeking a simpler, purer spiritual life focused on prayer and devotion."
        }
      ]
    },
    {
      week: 2,
      title: "The Great Divide: East vs. West",
      subtitle: "Understanding the 1054 split",
      introduction: "This lesson explores one of Christianity's most significant moments: when the church split into Eastern (Orthodox) and Western (Catholic) branches. This wasn't a sudden break but rather centuries of growing differences in culture, language, and theology.",
      keyTopics: [
        "Cultural differences between Greek East and Latin West",
        "The Filioque controversy (a debate about the Holy Spirit)",
        "Different approaches to church leadership",
        "How Orthodox and Catholic churches differ today"
      ],
      detailedContent: [
        {
          heading: "Two Worlds Drifting Apart",
          text: "When the Roman Empire split into East and West in 395 AD, it created two distinct Christian cultures. The Western church, centered in Rome, used Latin and was influenced by Roman legal thinking. The Eastern church, centered in Constantinople, used Greek and was influenced by Greek philosophy. As Germanic tribes overran the West and new Islamic empires rose in the East, the two halves of Christianity had increasingly different experiences and developed distinct practices. Western bishops wore simple robes, while Eastern bishops wore elaborate Byzantine vestments. Western churches used unleavened bread for communion, Eastern churches used leavened bread. These differences might seem small, but they symbolized deeper theological and cultural divides."
        },
        {
          heading: "The Filioque Controversy",
          text: "The breaking point came over a single Latin word: 'filioque,' meaning 'and the Son.' The Nicene Creed originally said the Holy Spirit proceeds 'from the Father.' Western churches added 'and the Son' (filioque) without consulting the East. To Eastern Christians, this wasn't just about grammar - it changed the doctrine of the Trinity and violated the principle that only ecumenical councils could modify creeds. The West argued the addition clarified orthodox belief and had been used for centuries. This seemingly technical debate represented a fundamental disagreement: could the Western church make such decisions unilaterally, or did it need Eastern consent?"
        },
        {
          heading: "The 1054 Split",
          text: "In 1054, tensions exploded. Pope Leo IX sent Cardinal Humbert to Constantinople to assert papal authority. Patriarch Michael Cerularius of Constantinople refused to acknowledge the Pope's supremacy. On July 16, 1054, Humbert stormed into the Hagia Sophia during worship and slammed a bull of excommunication on the altar, condemning Cerularius. The Patriarch responded by excommunicating the papal legates. Technically, they only excommunicated each other personally, not entire churches - but the symbolic damage was done. The Great Schism had begun. Crusaders sacking Constantinople in 1204 deepened the wound, making reconciliation even more difficult."
        },
        {
          heading: "Different Paths Forward",
          text: "After 1054, Eastern Orthodoxy and Roman Catholicism developed separately. The Orthodox maintained a conciliar structure with multiple patriarchs and no single earthly head of the church. Catholics centralized power in the papacy. Orthodox theology emphasized mysticism, theosis (becoming one with God), and continuity with the early church. Catholic theology developed systematic scholasticism, particularly through Thomas Aquinas. The Orthodox preserved ancient liturgies largely unchanged. Catholics' liturgy evolved and was standardized in Latin. These differences, born from geography and culture, created two distinct but related expressions of Christianity."
        }
      ],
      beginnerExplanation: "Imagine a large family where half speaks English and half speaks Spanish, living on different continents. Over time, they develop different traditions and ways of doing things. Eventually, they have a big argument and stop talking. That's similar to what happened between Eastern and Western Christianity in 1054.",
      reflectionQuestions: [
        "Can you think of other examples where language and cultural differences led to divisions?",
        "What do you think Orthodox and Catholic Christians have in common despite their split?",
        "Is it possible for these traditions to reunite someday?"
      ],
      practicalApplication: "Compare the Orthodox and Catholic sections in the app. Notice similarities in their beliefs about sacraments and apostolic succession, but differences in church governance and some theological details. If possible, visit both a Catholic Mass and Orthodox Divine Liturgy to experience the differences firsthand.",
      appLinks: ["Catholic", "Orthodox", "Worship Experiences"],
      quiz: [
        {
          question: "When did the Roman Empire split into East and West, creating two distinct Christian cultures?",
          options: ["313 AD", "395 AD", "1054 AD", "1517 AD"],
          correctAnswer: 1,
          explanation: "The Roman Empire officially split into Eastern and Western halves in 395 AD. This political division eventually led to cultural and theological differences between Eastern and Western Christianity."
        },
        {
          question: "What does the Latin word 'filioque' mean?",
          options: ["From the Father", "And the Son", "Holy Spirit", "One God"],
          correctAnswer: 1,
          explanation: "'Filioque' means 'and the Son.' This was added to the Nicene Creed by Western churches to say the Holy Spirit proceeds from the Father 'and the Son,' which became a major point of contention with the East."
        },
        {
          question: "What happened on July 16, 1054, that symbolized the Great Schism?",
          options: [
            "The Pope died",
            "Cardinal Humbert excommunicated Patriarch Cerularius",
            "Constantinople was conquered",
            "A new creed was written"
          ],
          correctAnswer: 1,
          explanation: "On July 16, 1054, Cardinal Humbert entered the Hagia Sophia and placed a bull of excommunication against Patriarch Michael Cerularius on the altar. The Patriarch responded with his own excommunication, marking the formal beginning of the Great Schism."
        },
        {
          question: "How is church leadership structured differently in Orthodoxy versus Catholicism?",
          options: [
            "Orthodox have a Pope, Catholics have patriarchs",
            "Both have identical structures",
            "Orthodox have multiple patriarchs with no single earthly head, Catholics have papal centralization",
            "Orthodox churches have no leaders"
          ],
          correctAnswer: 2,
          explanation: "Eastern Orthodoxy maintains a conciliar structure with multiple patriarchs (Constantinople, Moscow, Alexandria, etc.) and no single earthly head of the church. Roman Catholicism centralizes authority in the Pope as the head of the worldwide church."
        },
        {
          question: "Which event in 1204 deepened the rift between East and West?",
          options: [
            "The signing of a peace treaty",
            "Crusaders sacking Constantinople",
            "A joint ecumenical council",
            "The translation of the Bible"
          ],
          correctAnswer: 1,
          explanation: "In 1204, Catholic Crusaders on the Fourth Crusade sacked Constantinople, pillaging the Orthodox capital and desecrating churches. This betrayal deepened hostility between East and West and made reconciliation much more difficult."
        }
      ]
    },
    {
      week: 3,
      title: "The Reformation: A Revolution in Faith",
      subtitle: "Martin Luther and the Protestant movement",
      introduction: "Get ready for one of history's most dramatic religious movements! In 1517, a German monk named Martin Luther challenged the Catholic Church's practices and sparked a revolution that would reshape Christianity forever. This lesson explores why it happened and what changed.",
      keyTopics: [
        "Martin Luther's 95 Theses and the indulgence controversy",
        "Key Reformation principles: Scripture Alone, Faith Alone, Grace Alone",
        "How Luther's ideas spread and evolved",
        "The birth of Lutheran and Reformed traditions"
      ],
      detailedContent: [
        {
          heading: "The Spark: Indulgences and the 95 Theses",
          text: "In 1517, Pope Leo X needed money to rebuild St. Peter's Basilica in Rome. He authorized the sale of indulgences - certificates that supposedly reduced time in purgatory for you or deceased loved ones. Johann Tetzel, a monk selling indulgences in Germany, allegedly used the slogan: 'As soon as a coin in the coffer rings, a soul from purgatory springs!' Martin Luther, a professor and monk in Wittenberg, was outraged. On October 31, 1517, he posted 95 Theses (academic arguments) on the church door, challenging the theology and practice of indulgences. He argued that salvation couldn't be bought - it was a free gift from God received through faith. This academic protest, thanks to the printing press, spread across Europe in weeks, igniting a firestorm."
        },
        {
          heading: "The Five Solas",
          text: "Luther's theology coalesced into five Latin slogans called the 'Five Solas': (1) Sola Scriptura (Scripture Alone) - the Bible, not church tradition, is the final authority; (2) Sola Fide (Faith Alone) - we're saved by trusting Christ, not by good works; (3) Sola Gratia (Grace Alone) - salvation is entirely God's unmerited gift; (4) Solus Christus (Christ Alone) - Jesus is the only mediator between God and humans, no need for saints or priests; (5) Soli Deo Gloria (Glory to God Alone) - all praise goes to God, not the church. These principles directly challenged Catholic teaching on tradition, sacraments, and papal authority. They became the foundation for all Protestant theology."
        },
        {
          heading: "The Diet of Worms and Luther's Stand",
          text: "In 1521, Luther was summoned to the Diet of Worms (an imperial assembly, not a diet of worms!) to recant his teachings. When asked to renounce his writings, Luther famously replied: 'Unless I am convinced by Scripture and plain reason, I cannot and will not recant. Here I stand, I can do no other. God help me. Amen.' He was declared an outlaw and heretic, but German princes protected him. While hiding in Wartburg Castle, Luther translated the New Testament into German, making the Bible accessible to ordinary people for the first time. This democratization of Scripture was revolutionary."
        },
        {
          heading: "The Spread of Reform",
          text: "Luther wasn't alone. Ulrich Zwingli led reform in Zurich, Switzerland. John Calvin in Geneva developed a more systematic Protestant theology, emphasizing God's sovereignty and predestination (the doctrine that God has already chosen who will be saved). Calvin's ideas spread to Scotland (Presbyterianism through John Knox), the Netherlands (Dutch Reformed), France (Huguenots), and eventually America. The Reformation fractured Western Christianity permanently. Attempts at compromise failed. By 1555, the Peace of Augsburg established 'cuius regio, eius religio' (whose realm, his religion) - meaning each prince decided whether his territory would be Catholic or Lutheran."
        }
      ],
      beginnerExplanation: "Luther was upset that the church was selling 'indulgences' - essentially, paying money to reduce punishment for sins. He believed salvation was a free gift from God through faith, not something you could buy. When he posted his complaints (the famous 95 Theses), it went viral (16th-century style), leading to a massive split from the Catholic Church.",
      reflectionQuestions: [
        "Why do you think Luther's message resonated with so many people?",
        "What role did the printing press play in spreading Reformation ideas?",
        "Can you see both sides of the debate between Luther and the Catholic Church?"
      ],
      practicalApplication: "Read through the Lutheran and Reformed/Presbyterian sections in the app. Notice their emphasis on 'sola scriptura' (Scripture alone) and 'sola fide' (faith alone). These became foundational principles for all Protestant denominations that followed.",
      appLinks: ["Lutheran", "Reformed", "Catholic"],
      quiz: [
        {
          question: "What were indulgences that Martin Luther opposed?",
          options: [
            "Certificates to skip church services",
            "Payments to reduce time in purgatory",
            "Tickets to visit holy sites",
            "Donations for new church buildings only"
          ],
          correctAnswer: 1,
          explanation: "Indulgences were certificates sold by the Catholic Church that supposedly reduced time in purgatory for the buyer or deceased loved ones. Luther opposed them as a corruption that made salvation something that could be purchased."
        },
        {
          question: "What does 'Sola Scriptura' mean?",
          options: [
            "Faith Alone",
            "Grace Alone",
            "Scripture Alone",
            "Christ Alone"
          ],
          correctAnswer: 2,
          explanation: "'Sola Scriptura' means 'Scripture Alone,' teaching that the Bible - not church tradition or papal decrees - is the final authority for Christian faith and practice."
        },
        {
          question: "Where did Luther famously say 'Here I stand, I can do no other'?",
          options: [
            "At the church door in Wittenberg",
            "At the Diet of Worms",
            "In Wartburg Castle",
            "At the Vatican"
          ],
          correctAnswer: 1,
          explanation: "Luther made this famous statement at the Diet of Worms in 1521 when he was ordered to recant his teachings. He refused to renounce his beliefs unless convinced by Scripture and reason."
        },
        {
          question: "What did Luther translate while hiding in Wartburg Castle?",
          options: [
            "The Catholic Mass into German",
            "Ancient Greek philosophy",
            "The New Testament into German",
            "The Pope's letters"
          ],
          correctAnswer: 2,
          explanation: "While in hiding at Wartburg Castle, Luther translated the New Testament from Greek into German, making the Bible accessible to ordinary German-speaking people for the first time."
        },
        {
          question: "Who developed the systematic Protestant theology emphasizing predestination?",
          options: [
            "Martin Luther",
            "Ulrich Zwingli",
            "John Calvin",
            "Henry VIII"
          ],
          correctAnswer: 2,
          explanation: "John Calvin, working in Geneva, developed a more systematic Protestant theology that emphasized God's sovereignty and predestination. His ideas became the foundation for Reformed and Presbyterian churches."
        }
      ]
    },
    {
      week: 4,
      title: "The Middle Way: Anglicans & Methodists",
      subtitle: "Finding balance between Catholic and Protestant",
      introduction: "Not all reformers wanted to completely break from Catholic tradition. This lesson explores two traditions that tried to find a 'middle way' - keeping some Catholic practices while embracing Protestant theology. We'll also learn about John Wesley and the Methodist revival.",
      keyTopics: [
        "Henry VIII and the English Reformation (it's complicated!)",
        "The Anglican via media - 'middle way' approach",
        "John Wesley and the Methodist movement",
        "How personal holiness and social justice became central to Methodist identity"
      ],
      detailedContent: [
        {
          heading: "Henry VIII and the English Reformation",
          text: "The English Reformation began for political, not theological reasons. King Henry VIII wanted to annul his marriage to Catherine of Aragon (who hadn't given him a male heir), but Pope Clement VII refused. So Henry broke from Rome in 1534, declaring himself Supreme Head of the Church of England. Initially, Henry remained theologically Catholic - he just rejected papal authority. Under his son Edward VI, the church became more Protestant. Then Mary I (1553-1558) violently tried to restore Catholicism, earning the nickname 'Bloody Mary.' Finally, Elizabeth I (1558-1603) established the Elizabethan Settlement, creating a church that was Protestant in theology but Catholic in structure and ritual. This 'via media' (middle way) became Anglicanism's defining characteristic."
        },
        {
          heading: "The Anglican Approach",
          text: "Anglicanism is sometimes called 'reformed Catholicism.' It retained bishops in apostolic succession, liturgical worship (the Book of Common Prayer), and beautiful church architecture. But it adopted Protestant theology: Scripture as supreme authority, justification by faith, and only two sacraments (Baptism and Eucharist). The Anglican 'three-legged stool' balances Scripture, Tradition, and Reason - no single source has absolute authority. This created a 'broad church' where diverse theological views could coexist. High Church Anglicans emphasized ritual and sacraments, looking very Catholic. Low Church Anglicans emphasized preaching and simplicity, looking more Protestant. This flexibility was both a strength (inclusivity) and weakness (theological ambiguity)."
        },
        {
          heading: "John Wesley and Methodist Revival",
          text: "John Wesley (1703-1791), an Anglican priest, experienced a spiritual awakening in 1738 when his heart was 'strangely warmed' at a meeting on Aldersgate Street, London. He began preaching about personal conversion, holiness, and social reform. When Anglican churches closed their doors to him, Wesley took his message outdoors, preaching to coal miners and the poor. He organized converts into 'societies' and 'classes' for accountability and spiritual growth. Wesley emphasized: (1) God's prevenient grace enables everyone to respond to the gospel; (2) Personal holiness (sanctification) should follow justification; (3) Faith without works is dead - Christians must serve the poor. Wesley never intended to leave the Church of England, but Methodism became its own denomination after his death."
        },
        {
          heading: "Social Holiness",
          text: "Wesley famously said, 'There is no holiness but social holiness.' Methodists pioneered social reform: opposing slavery, improving prison conditions, educating the poor, and caring for widows and orphans. They built schools, hospitals, and missions. This emphasis on both personal piety and social justice became Methodist DNA. In America, Methodism exploded during the Second Great Awakening (early 1800s), becoming the largest Protestant denomination. Circuit-riding preachers brought Methodist revivalism to the frontier. Today, Methodism's legacy includes not just churches but also universities (Duke, Emory, Northwestern) and countless social service organizations."
        }
      ],
      beginnerExplanation: "Anglicans kept bishops, liturgy, and many Catholic-looking practices, but adopted Protestant theology. It's like keeping your family's traditional recipes while trying new cooking techniques. Methodists emerged later from Anglicanism, emphasizing personal spiritual growth and caring for the poor. Think of them as Anglicans who wanted more emotion and social action in their faith.",
      reflectionQuestions: [
        "What are the advantages of trying to blend Catholic and Protestant elements?",
        "Why do you think Wesley emphasized both personal holiness and social concern?",
        "How does the Anglican 'middle way' differ from being wishy-washy?"
      ],
      practicalApplication: "Explore the Anglican and Methodist sections in the app. Notice how Anglicans maintain a formal liturgy (Book of Common Prayer) while Methodists focus on personal transformation and social holiness. The Worship Experiences section will show you what attending each type of service is like.",
      appLinks: ["Anglican", "Methodist", "Worship Experiences"],
      quiz: [
        {
          question: "Why did the English Reformation begin under Henry VIII?",
          options: [
            "He wanted to reform church theology",
            "He wanted to annul his marriage but the Pope refused",
            "He was converting to Protestantism",
            "He wanted to spread the gospel to England"
          ],
          correctAnswer: 1,
          explanation: "Henry VIII broke from Rome primarily because Pope Clement VII refused to annul his marriage to Catherine of Aragon. The English Reformation began for political/personal reasons, not theological ones."
        },
        {
          question: "What does the Anglican 'via media' mean?",
          options: [
            "Mass in Latin",
            "The middle way between Catholic and Protestant",
            "The path to heaven",
            "Weekly communion"
          ],
          correctAnswer: 1,
          explanation: "'Via media' means 'middle way' - Anglicanism's attempt to balance Catholic structure and ritual with Protestant theology, creating a church that was reformed but retained many traditional elements."
        },
        {
          question: "What are the three sources of authority in Anglican theology?",
          options: [
            "Pope, Bishops, Priests",
            "Faith, Hope, Love",
            "Scripture, Tradition, Reason",
            "Prayer, Fasting, Almsgiving"
          ],
          correctAnswer: 2,
          explanation: "Anglicanism balances three sources of authority in its 'three-legged stool': Scripture (the Bible), Tradition (church history and practice), and Reason (rational thought and experience)."
        },
        {
          question: "Where did John Wesley have his spiritual awakening in 1738?",
          options: [
            "Oxford University",
            "Aldersgate Street, London",
            "Georgia, America",
            "Canterbury Cathedral"
          ],
          correctAnswer: 1,
          explanation: "Wesley's heart was 'strangely warmed' at a meeting on Aldersgate Street in London in 1738. This experience led to his evangelical awakening and the Methodist movement."
        },
        {
          question: "What did Wesley mean by 'social holiness'?",
          options: [
            "Christians should avoid society",
            "Holiness includes serving the poor and reforming society",
            "Church services should be social events",
            "Only monks can be truly holy"
          ],
          correctAnswer: 1,
          explanation: "Wesley taught 'there is no holiness but social holiness' - meaning genuine Christian faith must express itself in serving others and working for social reform, not just personal piety."
        }
      ]
    },
    {
      week: 5,
      title: "Believer's Baptism: Baptists & Anabaptists",
      subtitle: "Radical reformation and religious freedom",
      introduction: "Some reformers thought Luther and others didn't go far enough. This lesson explores traditions that took more radical stances on baptism, church-state separation, and religious freedom. These groups were often persecuted but their ideas eventually shaped modern concepts of religious liberty.",
      keyTopics: [
        "Believer's baptism vs. infant baptism",
        "Church and state separation",
        "Anabaptist commitment to pacifism and community",
        "Baptist emphasis on soul competency and congregational autonomy"
      ],
      detailedContent: [
        {
          heading: "The Radical Reformation: Anabaptists",
          text: "While Luther and Calvin reformed the church, a more radical group emerged in Switzerland in the 1520s. Called 'Anabaptists' (re-baptizers) by their opponents, they rejected infant baptism, insisting only believers who consciously chose to follow Christ should be baptized. This wasn't just about baptism - it represented a completely different vision of church and society. Anabaptists believed the church should be a voluntary community of committed believers, separate from the state. They refused to swear oaths, serve in the military, or hold government office. Both Catholics and Protestants saw this as dangerous and subversive. Thousands of Anabaptists were martyred - drowned ironically, in mockery of their baptism practices. Despite persecution, they persisted, founding communities like the Mennonites (followers of Menno Simons) and later, the Amish."
        },
        {
          heading: "Baptist Origins and Growth",
          text: "Baptists emerged independently in England in the early 1600s, arriving at similar conclusions about baptism without direct connection to Anabaptists. John Smyth, an Anglican priest turned Separatist, baptized himself and then his congregation in Amsterdam in 1609, forming the first Baptist church. Baptists emphasized: (1) Believer's baptism by immersion; (2) Soul competency - each person can read and understand Scripture for themselves without a priest; (3) Priesthood of all believers; (4) Congregational autonomy - each local church governs itself; (5) Religious liberty for all. Roger Williams founded Rhode Island in 1636 as a haven for religious freedom after being expelled from Massachusetts. Baptists flourished in America, becoming the largest Protestant denomination by the 1800s."
        },
        {
          heading: "Church-State Separation",
          text: "Both Anabaptists and Baptists pioneered the radical idea that church and state should be completely separate. In their era, this was revolutionary. Most people believed society needed one official religion to maintain order - the idea of religious pluralism seemed dangerous. But Baptists argued that faith coerced isn't genuine faith. Thomas Helwys, an early Baptist, wrote to King James I: 'The king is a mortal man, and not God, therefore hath no power over immortal souls.' This bold statement landed Helwys in prison, where he died. Yet Baptist ideas influenced the American founders. Many historians credit Baptists' persistent advocacy for the First Amendment's guarantee of religious freedom. The 'wall of separation' between church and state, articulated by Thomas Jefferson, reflected Baptist theology."
        },
        {
          heading: "Baptist Diversity and Anabaptist Community",
          text: "Today's Baptists are remarkably diverse. Southern Baptists emphasize evangelism and biblical inerrancy. American Baptists are more moderate and ecumenical. Black Baptist churches have been centers of African American community and civil rights activism. All share commitment to baptism, local church autonomy, and religious liberty, but differ on theology and social issues. Anabaptists took a different path, forming intentional communities like the Amish, Mennonites, and Hutterites. They maintain distinctive dress, resist modern technology (especially Amish), practice pacifism, and emphasize community discipline (shunning). Both traditions contributed crucial ideas: voluntary church membership, separation of church and state, and religious freedom - concepts we now take for granted."
        }
      ],
      beginnerExplanation: "Both Anabaptists and Baptists believe baptism should be a personal choice made as an adult believer, not something done to infants. 'Anabaptist' literally means 're-baptizer' because they baptized adults who had been baptized as infants. Baptists later developed similar beliefs but became one of the largest Protestant groups, especially in America. Both strongly believed in separating church and government.",
      reflectionQuestions: [
        "Why do you think baptism became such a divisive issue?",
        "What are the pros and cons of church-state separation?",
        "How did Anabaptist and Baptist ideas influence American religious freedom?"
      ],
      practicalApplication: "Compare the Anabaptist and Baptist sections in the app. Notice how Anabaptists (like Mennonites and Amish) emphasize pacifism and community discipline, while Baptists are more diverse but united on baptism and local church autonomy. The Worship Experiences will show you what to expect in Baptist services.",
      appLinks: ["Baptist", "Anabaptist", "Worship Experiences"],
      quiz: [
        {
          question: "What does 'Anabaptist' literally mean?",
          options: [
            "Against baptism",
            "Re-baptizer",
            "Water believers",
            "True baptism"
          ],
          correctAnswer: 1,
          explanation: "'Anabaptist' means 're-baptizer.' This name was given by their opponents because Anabaptists baptized adults who had already been baptized as infants, which others saw as rebaptism."
        },
        {
          question: "Who founded Rhode Island as a haven for religious freedom?",
          options: [
            "John Smyth",
            "Menno Simons",
            "Roger Williams",
            "Thomas Helwys"
          ],
          correctAnswer: 2,
          explanation: "Roger Williams, a Baptist minister, founded Rhode Island in 1636 as a colony based on religious freedom after being expelled from Massachusetts for his radical views on liberty of conscience."
        },
        {
          question: "What is 'soul competency' in Baptist theology?",
          options: [
            "Only educated people can be saved",
            "Each person can read and understand Scripture for themselves",
            "Souls must compete for salvation",
            "Priests must interpret the Bible for laypeople"
          ],
          correctAnswer: 1,
          explanation: "Soul competency is the Baptist belief that each individual can read, understand, and apply Scripture for themselves without needing a priest or church hierarchy to interpret it for them."
        },
        {
          question: "How did many Anabaptists die during persecution?",
          options: [
            "Burning at the stake",
            "Drowning (in mockery of their baptism practices)",
            "Beheading",
            "Exile to distant lands"
          ],
          correctAnswer: 1,
          explanation: "Many Anabaptists were drowned by both Catholic and Protestant authorities, ironically mocking their emphasis on baptism by immersion. Thousands were martyred in the 1500s."
        },
        {
          question: "Which modern groups descended from the Anabaptist movement?",
          options: [
            "Presbyterians and Methodists",
            "Amish, Mennonites, and Hutterites",
            "Lutherans and Anglicans",
            "Pentecostals and Charismatics"
          ],
          correctAnswer: 1,
          explanation: "The Amish, Mennonites, and Hutterites all descended from the Anabaptist movement. They maintain distinctive communities emphasizing pacifism, simple living, and separation from mainstream society."
        }
      ]
    },
    {
      week: 6,
      title: "The Spirit Moves: Pentecostals & Holiness Churches",
      subtitle: "Revival, spiritual gifts, and personal transformation",
      introduction: "In the late 1800s and early 1900s, powerful revival movements swept across America and beyond, emphasizing emotional worship, spiritual gifts, and complete transformation. This lesson explores two related but distinct movements that dramatically changed Christianity's landscape.",
      keyTopics: [
        "The Holiness movement's emphasis on sanctification",
        "The Azusa Street Revival (1906) and birth of Pentecostalism",
        "Speaking in tongues and spiritual gifts",
        "How Pentecostalism became the fastest-growing Christian movement globally"
      ],
      detailedContent: [
        {
          heading: "The Holiness Movement",
          text: "The Holiness movement emerged in the mid-1800s, mainly within Methodism, emphasizing Wesley's teaching about 'entire sanctification' or 'Christian perfection.' Holiness preachers taught that after conversion, believers could experience a 'second work of grace' - a moment when God completely cleansed them from the inclination to sin. Camp meetings featured fervent preaching, emotional testimonies, and altar calls where seekers pursued this experience. Women found opportunities for leadership often denied in other traditions. Phoebe Palmer became a leading Holiness evangelist in the 1850s. As Methodist churches became more formal and respectable, Holiness believers felt they'd lost Wesley's fire. Many formed new denominations: Church of the Nazarene, Church of God (Anderson), Wesleyan Church. Holiness churches emphasized personal holiness, simple living, and abstaining from 'worldly' pleasures like dancing, theater, and alcohol."
        },
        {
          heading: "Azusa Street: Pentecostalism is Born",
          text: "On April 9, 1906, at a humble mission on Azusa Street in Los Angeles, something unprecedented happened. Under the leadership of William J. Seymour, an African American Holiness preacher and son of freed slaves, believers began speaking in tongues - utterances in languages they'd never learned. Seymour taught this was evidence of 'baptism in the Holy Spirit,' a third experience after conversion and sanctification. The Azusa Street Revival ran for three years, with services sometimes lasting all day. People from around the world visited, received the experience, and spread Pentecostalism globally. Remarkably for segregated America, the revival was racially integrated. Seymour's vision: 'The color line was washed away by the blood.' Pentecostals believed they were experiencing what happened on the Day of Pentecost (Acts 2) - a restoration of apostolic power and gifts."
        },
        {
          heading: "Pentecostal Beliefs and Practices",
          text: "Pentecostals affirm standard Christian doctrine but add distinctive emphases: (1) Baptism in the Holy Spirit as a separate experience from conversion, evidenced by speaking in tongues; (2) All spiritual gifts listed in 1 Corinthians 12 are available today - prophecy, healing, miracles, tongues, interpretation; (3) Divine healing is part of the atonement - Christians can pray for healing instead of relying only on medicine; (4) Expectation of Jesus's imminent return. Worship is spontaneous, emotional, and participatory - with raised hands, dancing, shouting 'Amen!' and 'Hallelujah!', and prophecies shared during services. Critics called early Pentecostals 'holy rollers' and accused them of emotionalism. But Pentecostals countered that mainline churches had become dead and formal, having 'a form of godliness but denying its power.'"
        },
        {
          heading: "Global Pentecostal Explosion",
          text: "Pentecostalism became Christianity's most explosive growth story. Starting from nothing in 1900, Pentecostals and Charismatics (Pentecostals in mainline churches) now number over 600 million worldwide - about a quarter of all Christians. Growth has been spectacular in Latin America (where Pentecostalism challenges Catholic dominance), sub-Saharan Africa, and Asia. In Brazil, Pentecostals grow by 15,000 per day. South Korea's Yoido Full Gospel Church has over 800,000 members. Why such growth? Pentecostalism offers: direct personal experience of God's power, healing for the sick, deliverance from evil spirits, hope for the poor, opportunities for lay leadership, and indigenous expression (worship can incorporate local music and culture). In the Global South, Pentecostalism is often Christianity."
        }
      ],
      beginnerExplanation: "The Holiness movement taught that Christians could experience 'entire sanctification' - a complete cleansing from sin after conversion. Pentecostals added emphasis on 'baptism in the Holy Spirit' evidenced by speaking in tongues (unknown languages). Both movements featured emotional, energetic worship and expectation of miracles. Today, Pentecostalism is exploding worldwide, especially in the Global South.",
      reflectionQuestions: [
        "Why do you think Pentecostalism appeals to so many people worldwide?",
        "How do emotional/charismatic worship styles differ from traditional liturgy?",
        "What role should spiritual gifts play in modern Christianity?"
      ],
      practicalApplication: "Read the Pentecostal and Holiness sections carefully. Notice the Pentecostal geographic distribution - rapid growth in Africa, Asia, and Latin America. If you're comfortable, consider visiting a Pentecostal service to experience the worship style firsthand (the Worship Experiences section prepares you for what to expect).",
      appLinks: ["Pentecostal", "Holiness", "Worship Experiences"],
      quiz: [
        {
          question: "What is 'entire sanctification' in Holiness theology?",
          options: [
            "Being baptized as an infant",
            "A second work of grace that completely cleanses from the inclination to sin",
            "Becoming a church member",
            "Reading the entire Bible"
          ],
          correctAnswer: 1,
          explanation: "Entire sanctification is the Holiness teaching that after conversion, believers can experience a 'second work of grace' where God completely cleanses them from the inclination to sin, enabling them to live in holiness."
        },
        {
          question: "Where and when did the famous Azusa Street Revival take place?",
          options: [
            "New York City, 1890",
            "Los Angeles, 1906",
            "Chicago, 1920",
            "Atlanta, 1915"
          ],
          correctAnswer: 1,
          explanation: "The Azusa Street Revival began on April 9, 1906, in Los Angeles at a humble mission led by William J. Seymour. It ran for three years and launched global Pentecostalism."
        },
        {
          question: "Who led the Azusa Street Revival?",
          options: [
            "Billy Graham",
            "Charles Finney",
            "William J. Seymour",
            "John Wesley"
          ],
          correctAnswer: 2,
          explanation: "William J. Seymour, an African American Holiness preacher and son of freed slaves, led the Azusa Street Revival. His leadership was remarkable in segregated America, and he advocated for racial integration."
        },
        {
          question: "What do Pentecostals believe is the initial evidence of baptism in the Holy Spirit?",
          options: [
            "Prophesying",
            "Healing the sick",
            "Speaking in tongues",
            "Feeling peaceful"
          ],
          correctAnswer: 2,
          explanation: "Pentecostals believe that speaking in tongues (glossolalia) - utterances in languages unknown to the speaker - is the initial physical evidence of being baptized in the Holy Spirit."
        },
        {
          question: "Approximately how many Pentecostals and Charismatics are there worldwide today?",
          options: [
            "10 million",
            "100 million",
            "Over 600 million",
            "1 billion"
          ],
          correctAnswer: 2,
          explanation: "Pentecostals and Charismatics now number over 600 million worldwide - about a quarter of all Christians - making Pentecostalism one of the fastest-growing religious movements in history."
        }
      ]
    },
    {
      week: 7,
      title: "Back to Basics: Restorationists & Non-Denominational Churches",
      subtitle: "Simplifying Christianity in the modern era",
      introduction: "Some Christians look at denominational divisions and say, 'Let's just get back to what the Bible says!' This lesson explores movements that seek to restore 'simple' New Testament Christianity and modern churches that reject denominational labels altogether.",
      keyTopics: [
        "The Restoration Movement's goal to restore New Testament church patterns",
        "Why they reject creeds and human traditions",
        "The rise of non-denominational megachurches",
        "Contemporary worship and practical teaching styles"
      ],
      detailedContent: [
        {
          heading: "The Stone-Campbell Restoration Movement",
          text: "In the early 1800s on the American frontier, several independent leaders had the same idea: denominational divisions were unbiblical. Christians should unite by abandoning all creeds and traditions, returning to the simple New Testament pattern. Barton W. Stone in Kentucky and Thomas and Alexander Campbell in Pennsylvania led separate movements that eventually merged. Their slogan: 'No creed but Christ, no book but the Bible, no name but Christian.' They rejected denominational names, calling themselves simply 'Christians' or 'Disciples of Christ.' They practiced weekly communion, believer's baptism by immersion, and congregational autonomy. But ironically, they became denominations themselves: Churches of Christ (the most conservative, rejecting instrumental music as unauthorized by the New Testament), Christian Churches/Churches of Christ (moderate, allowing instruments), and Disciples of Christ (most progressive, joining ecumenical movements)."
        },
        {
          heading: "Restorationist Logic and Challenges",
          text: "Restorationists use a 'command, example, and necessary inference' hermeneutic (method of interpretation). If the New Testament commands it, shows an example of it, or logically requires it, churches should do it. If not, they shouldn't. This sounds simple but creates challenges. The New Testament shows churches meeting in homes - should modern churches avoid church buildings? Early Christians shared possessions (Acts 2) - should we? Churches of Christ famously reject instrumental music because the New Testament only mentions singing. Critics argue this approach is selective and impossible - we can't fully recreate first-century context. Restorationists counter that while cultural details change, essential patterns of worship, organization, and doctrine can be restored. The movement's appeal: cutting through centuries of tradition to pure, biblical Christianity."
        },
        {
          heading: "The Non-Denominational Revolution",
          text: "In the late 20th century, a different 'back to basics' movement emerged: non-denominational churches. Unlike Restorationists who wanted to restore first-century forms, non-denominational churches wanted to strip away anything that hindered reaching unchurched people. They asked: 'What if we removed denominational labels, traditional liturgy, hymns, and religious jargon? What if church felt accessible, relevant, and practical?' The result: mega-churches like Willow Creek, Saddleback, and countless others. Features include: contemporary worship (rock band, not organ), casual dress, practical sermons on marriage, parenting, finances, state-of-the-art production, multiple service times, and extensive programs. While avoiding 'denominational' labels, most are evangelical in theology, just repackaged for modern culture. Critics say they're shallow entertainment. Advocates argue they're effectively reaching people traditional churches can't."
        },
        {
          heading: "Irony and Questions",
          text: "Both movements contain irony. Restorationists wanted to end denominations but created new ones. Non-denominational churches claim no denomination but often function like independent Baptist or evangelical churches. Both face questions: Is unity possible through uniformity (Restorationists) or informality (non-denominational)? Can you really have 'no creed' without smuggling in unstated assumptions? Can contemporary relevance maintain doctrinal depth? These movements represent enduring Christian impulses: (1) the desire to return to origins, stripping away accumulated tradition; (2) the desire to reach outsiders effectively. Every era faces the tension between staying rooted in the past and speaking meaningfully to the present. These movements lean hard toward 'back to basics' but define 'basics' very differently."
        }
      ],
      beginnerExplanation: "Restorationists (Churches of Christ, Christian Churches) believe Christians should only do what's explicitly found in the New Testament - no creeds, no instrumental music (for some), just Bible. Non-denominational churches take a different approach: they focus on practical teaching, contemporary worship, and avoid denominational labels. Both represent attempts to simplify Christianity, but in different ways.",
      reflectionQuestions: [
        "Is it really possible to practice Christianity exactly as the first century church did?",
        "What are the advantages and disadvantages of rejecting denominational identities?",
        "How do non-denominational churches differ from traditional Protestant denominations?"
      ],
      practicalApplication: "Compare the Restorationist and Non-Denominational sections. Notice how Restorationists are more specific about restoring first-century practices, while non-denominational churches are more pragmatic and contemporary. Many non-denominational churches are actually quite evangelical in theology despite avoiding the label.",
      appLinks: ["Restorationist", "Non-Denominational", "Worship Experiences"],
      quiz: [
        {
          question: "What was the main slogan of the Stone-Campbell Restoration Movement?",
          options: [
            "Faith alone, Scripture alone",
            "No creed but Christ, no book but the Bible",
            "Back to the Bible",
            "Sola Scriptura"
          ],
          correctAnswer: 1,
          explanation: "The Restoration Movement's slogan was 'No creed but Christ, no book but the Bible, no name but Christian.' They sought to unite Christians by abandoning all creeds and traditions."
        },
        {
          question: "Why do Churches of Christ (a Restorationist group) reject instrumental music?",
          options: [
            "Instruments are too expensive",
            "The New Testament only mentions singing, not instruments",
            "They prefer silence",
            "Organs are too loud"
          ],
          correctAnswer: 1,
          explanation: "Churches of Christ reject instrumental music because the New Testament only explicitly mentions singing in worship. Following their 'command, example, and necessary inference' approach, they view instruments as unauthorized additions."
        },
        {
          question: "What is a key feature of non-denominational megachurches?",
          options: [
            "Latin liturgy and Gregorian chants",
            "Formal robes and traditional hymns",
            "Contemporary worship and practical teaching",
            "Silent meditation"
          ],
          correctAnswer: 2,
          explanation: "Non-denominational megachurches typically feature contemporary worship (with rock bands), casual atmosphere, and practical sermons on everyday topics like marriage, parenting, and finances."
        },
        {
          question: "Which Restoration Movement denomination is the most conservative?",
          options: [
            "Disciples of Christ",
            "Christian Churches/Churches of Christ",
            "Churches of Christ",
            "United Church of Christ"
          ],
          correctAnswer: 2,
          explanation: "Churches of Christ is the most conservative branch of the Restoration Movement, maintaining strict adherence to New Testament patterns including rejecting instrumental music and remaining separate from ecumenical movements."
        },
        {
          question: "What is the irony about both Restorationist and non-denominational movements?",
          options: [
            "They use the same worship style",
            "They wanted to end denominations but effectively created new ones",
            "They all meet on Saturday",
            "They reject baptism"
          ],
          correctAnswer: 1,
          explanation: "The irony is that both movements sought to overcome denominationalism, but Restorationists created new denominations (Churches of Christ, etc.) and non-denominational churches effectively function as a distinct category - they became what they sought to avoid."
        }
      ]
    },
    {
      week: 8,
      title: "Your Journey: Understanding & Choosing",
      subtitle: "Putting it all together",
      introduction: "Congratulations on completing seven lessons of church history! This final lesson is about synthesis - understanding how all these traditions relate to each other and thinking about your own spiritual journey. There's no 'right' denomination, but understanding the options helps you make informed choices.",
      keyTopics: [
        "Common threads across all Christian traditions",
        "Key differences that distinguish denominations",
        "How to visit different churches respectfully",
        "Finding a church home that fits your beliefs and needs"
      ],
      detailedContent: [
        {
          heading: "What All Christians Share",
          text: "Despite 2,000 years of division, all major Christian traditions affirm core beliefs found in the ancient creeds: (1) The Trinity - one God in three persons: Father, Son, and Holy Spirit; (2) The Incarnation - Jesus is fully God and fully human; (3) Jesus's death and resurrection provide salvation; (4) The Bible is authoritative Scripture; (5) The church is Christ's body on earth; (6) Baptism and communion (Eucharist) are important practices; (7) Jesus will return. These agreements, established in the first few centuries, unite Orthodox, Catholic, and Protestant Christians. When you visit any of these churches, you'll encounter variations on these shared truths. The fact that Catholics, Orthodox, Lutherans, Baptists, and Pentecostals all confess the Apostles' Creed shows their fundamental unity, despite very real differences in practice and emphasis."
        },
        {
          heading: "Major Dividing Lines",
          text: "Denominations primarily differ on five questions: (1) Authority: Is Scripture alone sufficient (Protestant), or do tradition and church teaching also carry weight (Catholic, Orthodox)? (2) Salvation: Are we saved by faith alone (Protestant) or faith plus sacraments and good works (Catholic, Orthodox)? (3) Sacraments: Two (Baptist, most Protestant) or seven (Catholic, Orthodox)? Symbol or means of grace? Infant or believer's baptism? (4) Church Leadership: Episcopal (bishops), Presbyterian (elders), or Congregational (local autonomy)? Is there a Pope? (5) Worship: Formal liturgy (Catholic, Orthodox, Anglican, Lutheran) or informal flexibility (Baptist, non-denominational, Pentecostal)? Your answer to these five questions will largely determine which traditions you find comfortable. No position is inherently 'better' - each reflects different ways of understanding Scripture and tradition."
        },
        {
          heading: "Visiting Churches Respectfully",
          text: "Exploring different churches helps you experience what you've learned. Guidelines for respectful visits: (1) Check the church website for dress code expectations - some prefer formal, others are casual; (2) Arrive 10 minutes early to observe and get oriented; (3) Follow along as best you can - it's okay to not participate in communion if you're unfamiliar; (4) Stand when others stand, sit when they sit; (5) Ask questions afterward, not during the service; (6) Don't critique or argue - you're a guest learning their tradition; (7) Notice what resonates: the music, the sermon, the community feel, the liturgy; (8) Visit at least twice - first visits can be awkward anywhere; (9) Remember that no single service captures a tradition fully. Use this app's Worship Experiences section as a guide to know what to expect and what to observe."
        },
        {
          heading: "Finding Your Church Home",
          text: "Choosing a church is deeply personal. Consider: (1) Theology - Do you agree with their core beliefs? Check their website's 'What We Believe' section. (2) Worship Style - Does the music, liturgy, and service format help you connect with God? (3) Community - Do you feel welcomed? Are there people at your life stage? (4) Teaching - Do the sermons challenge and inspire you? (5) Mission - What is the church doing in the community and world? (6) Practical Concerns - Location, service times, children's programs. Here's the reality: you probably won't agree 100% with any church. That's okay! The perfect church doesn't exist. You're looking for a community where you can worship God, grow spiritually, serve others, and belong. Theology matters, but so does whether you'll actually show up consistently. A church you attend is better than a theologically perfect church you avoid. Give yourself permission to take time, visit multiple churches, and pray for wisdom. Your spiritual home is waiting."
        }
      ],
      beginnerExplanation: "Despite their differences, all Christian denominations share core beliefs: God as Trinity (Father, Son, Holy Spirit), Jesus as divine and human, salvation through Christ, and the authority of Scripture. Differences arise in how they interpret Scripture, organize church leadership, practice sacraments, and express worship. Understanding these differences helps you appreciate Christianity's diversity.",
      reflectionQuestions: [
        "What denomination(s) resonated most with you, and why?",
        "What surprised you most in this 8-lesson journey?",
        "How has learning church history changed your understanding of Christianity?",
        "What questions do you still have?"
      ],
      practicalApplication: "Review all the Worship Experiences in the app. Make a plan to visit 2-3 different types of churches over the next few months. Go with an open mind and respectful curiosity. Use the app's guides to know what to expect. Remember: finding a church home is about both theology and community - it's okay to prioritize different factors.",
      appLinks: ["All Denominations", "Worship Experiences", "Bible Timeline"],
      quiz: [
        {
          question: "Which core belief is shared by ALL major Christian traditions?",
          options: [
            "The Pope is head of the church",
            "Baptism should be by immersion only",
            "The Trinity - one God in three persons",
            "There are seven sacraments"
          ],
          correctAnswer: 2,
          explanation: "All major Christian traditions (Catholic, Orthodox, Protestant) affirm the doctrine of the Trinity - that God exists as one being in three persons: Father, Son, and Holy Spirit. This belief unites all Christians despite their other differences."
        },
        {
          question: "What is a key difference between Protestant and Catholic views on authority?",
          options: [
            "Protestants reject the Bible",
            "Protestants emphasize Scripture alone, Catholics include tradition and church teaching",
            "Catholics don't read the Bible",
            "There is no difference in their views"
          ],
          correctAnswer: 1,
          explanation: "A major dividing line is authority: Protestants emphasize 'sola scriptura' (Scripture alone), while Catholics and Orthodox also grant authority to church tradition and teaching alongside Scripture."
        },
        {
          question: "When visiting a church for the first time, what should you do?",
          options: [
            "Critique the sermon loudly during the service",
            "Arrive late to avoid awkwardness",
            "Follow along respectfully, standing/sitting when others do",
            "Leave immediately if it feels different"
          ],
          correctAnswer: 2,
          explanation: "When visiting a church, be a respectful guest: arrive early, follow along as others stand and sit, don't critique during the service, and ask questions afterward. Remember you're learning about their tradition."
        },
        {
          question: "According to the lesson, what should you consider when choosing a church home?",
          options: [
            "Only theology - nothing else matters",
            "Only convenience - pick the closest one",
            "Both theology and practical factors like community, worship style, and mission",
            "Whatever your parents attended"
          ],
          correctAnswer: 2,
          explanation: "Finding a church home requires considering multiple factors: theology (do you agree with core beliefs?), worship style, community feel, teaching quality, mission focus, and practical concerns. It's about both doctrine and where you'll actually engage and grow."
        },
        {
          question: "What does the lesson say about finding the 'perfect' church?",
          options: [
            "The perfect church exists if you search hard enough",
            "You should never compromise on anything",
            "The perfect church doesn't exist; find where you can worship, grow, and belong",
            "All churches are exactly the same"
          ],
          correctAnswer: 2,
          explanation: "The lesson acknowledges that the perfect church doesn't exist - you won't agree 100% with any church. The goal is finding a community where you can worship God, grow spiritually, serve others, and belong. A church you attend is better than a theologically perfect church you avoid."
        }
      ]
    }
  ];

  const toggleWeek = (weekNumber) => {
    setExpandedWeek(expandedWeek === weekNumber ? null : weekNumber);
  };

  const markWeekComplete = (weekNumber) => {
    if (!completedWeeks.includes(weekNumber)) {
      setCompletedWeeks([...completedWeeks, weekNumber]);
    }
  };

  const markWeekIncomplete = (weekNumber) => {
    setCompletedWeeks(completedWeeks.filter(w => w !== weekNumber));
  };

  const isWeekCompleted = (weekNumber) => {
    return completedWeeks.includes(weekNumber);
  };

  const handleQuizAnswer = (weekNumber, questionIndex, answerIndex) => {
    const key = `week${weekNumber}_q${questionIndex}`;
    setCurrentQuizAnswers({
      ...currentQuizAnswers,
      [key]: answerIndex
    });
  };

  const submitQuiz = (weekNumber) => {
    const week = curriculum.find(w => w.week === weekNumber);
    if (!week || !week.quiz) return;

    let correct = 0;
    week.quiz.forEach((question, index) => {
      const key = `week${weekNumber}_q${index}`;
      if (currentQuizAnswers[key] === question.correctAnswer) {
        correct++;
      }
    });

    const score = {
      correct,
      total: week.quiz.length,
      percentage: Math.round((correct / week.quiz.length) * 100),
      date: new Date().toISOString()
    };

    setQuizScores({
      ...quizScores,
      [weekNumber]: score
    });

    setShowQuizResults({
      ...showQuizResults,
      [weekNumber]: true
    });
  };

  const retakeQuiz = (weekNumber) => {
    // Clear quiz answers for this week
    const newAnswers = { ...currentQuizAnswers };
    curriculum.find(w => w.week === weekNumber)?.quiz.forEach((_, index) => {
      delete newAnswers[`week${weekNumber}_q${index}`];
    });
    setCurrentQuizAnswers(newAnswers);

    // Hide results
    setShowQuizResults({
      ...showQuizResults,
      [weekNumber]: false
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-12 h-12 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Church History Study Guide</h1>
          </div>
          <p className="text-xl md:text-2xl text-blue-100 mb-6">
            An 8-Lesson Journey Through Christianity's Story
          </p>
          <p className="text-lg text-blue-50 max-w-2xl mx-auto">
            Perfect for beginners! Explore 2,000 years of church history at your own pace.
            Track your progress as you learn. No prior knowledge required.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Progress Tracker */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-12 border-2 border-blue-100">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center">
              <Target className="w-10 h-10 text-blue-600 mr-3" />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Your Progress</h2>
                <p className="text-gray-600 text-sm md:text-base">Track your journey through church history</p>
              </div>
            </div>
            {completedWeeks.length === 8 && (
              <Award className="w-12 h-12 text-yellow-500" />
            )}
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                {completedWeeks.length} of 8 lessons completed
              </span>
              <span className="text-sm font-bold text-blue-600">
                {Math.round((completedWeeks.length / 8) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(completedWeeks.length / 8) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Completion Message */}
          {completedWeeks.length === 8 && (
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-xl p-6 text-center">
              <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Congratulations! 🎉</h3>
              <p className="text-gray-700 text-lg">
                You've completed all 8 lessons of the Church History Study Guide!
              </p>
            </div>
          )}

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-6">
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">{completedWeeks.length}</div>
              <div className="text-xs md:text-sm text-gray-600 mt-1">Completed</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-600">{8 - completedWeeks.length}</div>
              <div className="text-xs md:text-sm text-gray-600 mt-1">Remaining</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-600">
                {completedWeeks.length > 0 ? completedWeeks[completedWeeks.length - 1] : '-'}
              </div>
              <div className="text-xs md:text-sm text-gray-600 mt-1">Last Lesson</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-600">
                {completedWeeks.length < 8
                  ? curriculum.find(w => !completedWeeks.includes(w.week))?.week || '-'
                  : '✓'}
              </div>
              <div className="text-xs md:text-sm text-gray-600 mt-1">Up Next</div>
            </div>
          </div>
        </div>

        {/* Course Overview */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Calendar className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">8-Lesson Curriculum</h2>
          </div>

          <p className="text-gray-700 mb-8 text-lg">
            Click any lesson below to explore the content. Each lesson builds on the previous one,
            taking you from Christianity's origins to modern denominational diversity.
          </p>

          {/* Lesson Cards */}
          <div className="space-y-4">
            {curriculum.map((week) => (
              <div
                key={week.week}
                className="bg-white rounded-xl shadow-md border-2 border-gray-200 overflow-hidden hover:border-blue-300 transition"
              >
                {/* Week Header - Clickable */}
                <button
                  onClick={() => toggleWeek(week.week)}
                  className={`w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition text-left ${
                    isWeekCompleted(week.week) ? 'bg-green-50' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${
                      isWeekCompleted(week.week)
                        ? 'bg-green-500 text-white'
                        : 'bg-gradient-to-br from-blue-500 to-purple-500 text-white'
                    }`}>
                      {isWeekCompleted(week.week) ? (
                        <CheckCircle className="w-7 h-7" />
                      ) : (
                        week.week
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {week.title}
                        {isWeekCompleted(week.week) && (
                          <span className="ml-2 text-sm font-normal text-green-600">✓ Completed</span>
                        )}
                      </h3>
                      <p className="text-gray-600">{week.subtitle}</p>
                    </div>
                  </div>
                  {expandedWeek === week.week ? (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {/* Week Content - Expandable */}
                {expandedWeek === week.week && (
                  <div className="px-6 pb-6 border-t-2 border-gray-100 pt-6">
                    {/* Introduction */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-2 text-lg">Introduction</h4>
                      <p className="text-gray-700 leading-relaxed">{week.introduction}</p>
                    </div>

                    {/* Key Topics */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 text-lg">Key Topics This Week</h4>
                      <ul className="space-y-2">
                        {week.keyTopics.map((topic, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Beginner Explanation */}
                    <div className="mb-6 bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                      <h4 className="font-semibold text-gray-800 mb-2 text-lg">Simple Explanation</h4>
                      <p className="text-gray-700 leading-relaxed">{week.beginnerExplanation}</p>
                    </div>

                    {/* Detailed Content */}
                    {week.detailedContent && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-4 text-lg">In-Depth Study</h4>
                        <div className="space-y-4">
                          {week.detailedContent.map((section, idx) => (
                            <div key={idx} className="bg-white rounded-lg p-4 border-2 border-gray-200">
                              <h5 className="font-bold text-gray-900 mb-2">{section.heading}</h5>
                              <p className="text-gray-700 leading-relaxed">{section.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Reflection Questions */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 text-lg">Questions to Consider</h4>
                      <ul className="space-y-2">
                        {week.reflectionQuestions.map((question, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-purple-600 font-bold mr-3 flex-shrink-0">{idx + 1}.</span>
                            <span className="text-gray-700 italic">{question}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Practical Application */}
                    <div className="mb-6 bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                      <h4 className="font-semibold text-gray-800 mb-2 text-lg">This Week's Practice</h4>
                      <p className="text-gray-700 leading-relaxed">{week.practicalApplication}</p>
                    </div>

                    {/* App Links */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 text-lg">Explore in the App</h4>
                      <div className="flex flex-wrap gap-2">
                        {week.appLinks.map((link, idx) => (
                          <span
                            key={idx}
                            className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium border border-blue-200"
                          >
                            {link}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Quiz Section */}
                    {week.quiz && (
                      <div className="mb-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-200">
                        <div className="flex items-center mb-4">
                          <div className="bg-amber-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">
                            ?
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-lg">Lesson {week.week} Quiz</h4>
                            <p className="text-sm text-gray-600">Test your understanding with 5 questions</p>
                          </div>
                        </div>

                        {!showQuizResults[week.week] ? (
                          <>
                            {/* Quiz Questions */}
                            <div className="space-y-6">
                              {week.quiz.map((question, qIdx) => (
                                <div key={qIdx} className="bg-white rounded-lg p-4 border border-gray-200">
                                  <p className="font-semibold text-gray-900 mb-3">
                                    {qIdx + 1}. {question.question}
                                  </p>
                                  <div className="space-y-2">
                                    {question.options.map((option, oIdx) => {
                                      const key = `week${week.week}_q${qIdx}`;
                                      const isSelected = currentQuizAnswers[key] === oIdx;
                                      return (
                                        <button
                                          key={oIdx}
                                          onClick={() => handleQuizAnswer(week.week, qIdx, oIdx)}
                                          className={`w-full text-left p-3 rounded-lg border-2 transition ${
                                            isSelected
                                              ? 'border-blue-500 bg-blue-50'
                                              : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                                          }`}
                                        >
                                          <span className="font-medium text-gray-700">{String.fromCharCode(65 + oIdx)}.</span> {option}
                                        </button>
                                      );
                                    })}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Submit Quiz Button */}
                            <button
                              onClick={() => submitQuiz(week.week)}
                              disabled={
                                week.quiz.some((_, idx) =>
                                  currentQuizAnswers[`week${week.week}_q${idx}`] === undefined
                                )
                              }
                              className="w-full mt-6 bg-amber-500 hover:bg-amber-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold text-lg transition"
                            >
                              Submit Quiz
                            </button>
                          </>
                        ) : (
                          <>
                            {/* Quiz Results */}
                            <div className="bg-white rounded-lg p-6 mb-6">
                              <div className="text-center mb-6">
                                <div className={`text-6xl font-bold mb-2 ${
                                  quizScores[week.week]?.percentage >= 80 ? 'text-green-600' :
                                  quizScores[week.week]?.percentage >= 60 ? 'text-yellow-600' :
                                  'text-red-600'
                                }`}>
                                  {quizScores[week.week]?.percentage}%
                                </div>
                                <p className="text-xl font-semibold text-gray-800">
                                  {quizScores[week.week]?.correct} out of {quizScores[week.week]?.total} correct
                                </p>
                                <p className="text-sm text-gray-600 mt-2">
                                  {quizScores[week.week]?.percentage >= 80 ? 'Excellent work!' :
                                   quizScores[week.week]?.percentage >= 60 ? 'Good effort!' :
                                   'Keep studying - you can retake the quiz!'}
                                </p>
                              </div>

                              {/* Answer Review */}
                              <div className="space-y-4">
                                {week.quiz.map((question, qIdx) => {
                                  const key = `week${week.week}_q${qIdx}`;
                                  const userAnswer = currentQuizAnswers[key];
                                  const isCorrect = userAnswer === question.correctAnswer;

                                  return (
                                    <div key={qIdx} className={`p-4 rounded-lg border-2 ${
                                      isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
                                    }`}>
                                      <p className="font-semibold text-gray-900 mb-2">
                                        {qIdx + 1}. {question.question}
                                      </p>
                                      <p className="text-sm mb-2">
                                        <span className={isCorrect ? 'text-green-700' : 'text-red-700'}>
                                          Your answer: {question.options[userAnswer]} {isCorrect ? '✓' : '✗'}
                                        </span>
                                      </p>
                                      {!isCorrect && (
                                        <p className="text-sm text-green-700 mb-2">
                                          Correct answer: {question.options[question.correctAnswer]}
                                        </p>
                                      )}
                                      <p className="text-sm text-gray-700 italic">
                                        {question.explanation}
                                      </p>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Retake Quiz Button */}
                            <button
                              onClick={() => retakeQuiz(week.week)}
                              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition"
                            >
                              Retake Quiz
                            </button>
                          </>
                        )}
                      </div>
                    )}

                    {/* Mark as Complete Button */}
                    <div className="border-t-2 border-gray-100 pt-6">
                      {isWeekCompleted(week.week) ? (
                        <button
                          onClick={() => markWeekIncomplete(week.week)}
                          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold text-lg transition flex items-center justify-center gap-2"
                        >
                          <CheckCircle className="w-6 h-6" />
                          Completed! Click to mark as incomplete
                        </button>
                      ) : (
                        <button
                          onClick={() => markWeekComplete(week.week)}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition shadow-lg hover:shadow-xl"
                        >
                          Mark Lesson {week.week} as Complete
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudyGuide;
