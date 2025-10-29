import React, { useState, useEffect } from 'react';
import { CheckCircle, Calendar, ChevronDown, ChevronRight, Award, Target, Scroll, Zap } from 'lucide-react';
import InteractiveLesson from './InteractiveLesson';
import { lesson1Data } from './interactiveLessonData';

const BibleHistoryGuide = ({ onNavigate }) => {
  const [expandedLesson, setExpandedLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResults, setQuizResults] = useState({});
  const [interactiveMode, setInteractiveMode] = useState(null); // null or lessonNumber

  // Helper function to handle navigation from appLinks
  const handleLinkClick = (link) => {
    if (link.includes('Bible Timeline') || link.includes('Denomination')) {
      onNavigate('explorer');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link.includes('Church History Guide')) {
      onNavigate('study-guide');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Helper function to format text with paragraph breaks between numbered points and bold markdown
  const formatTextWithBreaks = (text) => {
    // Split on patterns like "(1)" or "1." followed by a space
    const parts = text.split(/(\(\d+\)\s|\d+\.\s)/);

    return parts.map((part, index) => {
      // Convert **text** to bold
      const formattedPart = part.split(/(\*\*[^*]+\*\*)/g).map((segment, segIdx) => {
        if (segment.startsWith('**') && segment.endsWith('**')) {
          return <strong key={segIdx}>{segment.slice(2, -2)}</strong>;
        }
        return segment;
      });

      // If this part matches a numbered pattern, add a line break before it (except for the first item)
      if (index > 0 && /(\(\d+\)\s|\d+\.\s)/.test(part)) {
        return (
          <React.Fragment key={index}>
            <br /><br />
            {formattedPart}
          </React.Fragment>
        );
      }
      return <React.Fragment key={index}>{formattedPart}</React.Fragment>;
    });
  };

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('bibleHistoryProgress');
    if (saved) {
      setCompletedLessons(JSON.parse(saved));
    }
  }, []);

  // Save progress to localStorage
  const markLessonComplete = (lessonNum) => {
    if (!completedLessons.includes(lessonNum)) {
      const updated = [...completedLessons, lessonNum];
      setCompletedLessons(updated);
      localStorage.setItem('bibleHistoryProgress', JSON.stringify(updated));
    }
  };

  const handleQuizAnswer = (lessonNum, questionIdx, answerIdx) => {
    setQuizAnswers(prev => ({
      ...prev,
      [`${lessonNum}-${questionIdx}`]: answerIdx
    }));
  };

  const submitQuiz = (lessonNum, quiz) => {
    let correct = 0;
    quiz.forEach((q, idx) => {
      if (quizAnswers[`${lessonNum}-${idx}`] === q.correctAnswer) {
        correct++;
      }
    });

    setQuizResults(prev => ({
      ...prev,
      [lessonNum]: { score: correct, total: quiz.length }
    }));

    if (correct >= quiz.length * 0.7) {
      markLessonComplete(lessonNum);
    }
  };

  const handleCompleteInteractive = (lessonNum, xpEarned) => {
    markLessonComplete(lessonNum);
    setInteractiveMode(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExitInteractive = () => {
    setInteractiveMode(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const curriculum = [
    {
      lesson: 1,
      title: "From Mouth to Manuscript",
      subtitle: "How oral tradition became written text",
      introduction: "Long before the printing press, before paper, even before parchment was common, the stories that would become the Bible were passed down by word of mouth. Imagine sitting around a campfire as an elder recounts the story of Moses parting the Red Sea, or Jesus feeding the 5,000. These weren't just stories—they were sacred memories, carefully preserved and passed from generation to generation.",
      keyTopics: [
        "How oral tradition worked in ancient cultures",
        "Ancient writing materials: papyrus, parchment, and the shift from scroll to codex",
        "The role of scribes in preserving Scripture",
        "Why we have copying variations in manuscripts",
        "The transition from spoken word to written text"
      ],
      detailedContent: [
        {
          heading: "The Oral Tradition Foundation",
          text: "In the ancient Near East, oral tradition was not like the 'telephone game' we played as children. Professional memorizers and storytellers trained for years to preserve sacred texts with remarkable accuracy. Jewish rabbis could recite the entire Torah from memory. Early Christian communities passed down Jesus's teachings orally for decades before they were written down. This oral period wasn't a weakness—it was a feature of ancient culture where memorization was prized and communities gathered regularly to hear and repeat these sacred stories."
        },
        {
          heading: "Writing Materials: From Stone to Skin",
          text: "The earliest biblical texts were written on materials that seem foreign to us today. Stone tablets (like the Ten Commandments) were durable but heavy. Papyrus, made from Egyptian reeds, was lighter and cheaper but fragile—it crumbled in damp climates. Parchment (treated animal skin) was expensive but lasted longer. Around the 2nd-4th centuries AD, Christians pioneered the 'codex' format (pages bound together like a modern book) instead of scrolls. This was revolutionary—you could flip directly to John's Gospel instead of unrolling through Matthew, Mark, and Luke first!"
        },
        {
          heading: "The Scribes: Ancient Copy Machines",
          text: "Before photocopiers and printing presses, every Bible had to be copied by hand. Jewish scribes (sopherim) followed strict rules: they counted every letter, washed before writing God's name, and destroyed any manuscript with errors. Christian scribes were similarly careful but not always as strict. They worked in scriptoriums (writing rooms), often copying from dictation. This is why we have variants in manuscripts—a scribe might mishear a word, skip a line accidentally, or even 'correct' what seemed like an error in their source manuscript."
        },
        {
          heading: "Why Copying Errors Matter (and Don't)",
          text: "It sounds alarming: 'There are thousands of variants in Bible manuscripts!' But context matters. Most variants are minor: spelling differences, word order changes, or missing articles ('the'). Scholars can usually determine the original wording by comparing manuscripts. The major variants (like the ending of Mark or the woman caught in adultery in John 8) are clearly marked in modern Bibles. No core Christian doctrine depends on a disputed text. The abundance of manuscripts is actually a strength—we have more biblical manuscripts than any other ancient text, making it easier to reconstruct the original."
        }
      ],
      beginnerExplanation: "Think of the Bible's journey like this: Imagine your great-grandparents telling you a family story, which you memorize and tell your kids. Eventually, someone writes it down in a letter. That letter gets copied by hand dozens of times over centuries. Some copies have small differences—a misspelled name, a missing word—but the core story remains the same. That's basically what happened with the Bible, except with thousands of professional scribes working to preserve these sacred texts as accurately as possible.",
      reflectionQuestions: [
        "How does knowing the Bible was first an oral tradition change how you think about its reliability?",
        "What surprises you most about how scribes copied manuscripts?",
        "If you had to memorize and pass down a sacred story, what techniques would help you?",
        "How do you think the shift from scrolls to codex format affected how Christians read and studied Scripture?"
      ],
      practicalApplication: "Next time you read your Bible, look for the footnotes that say 'some manuscripts say...' or 'the earliest manuscripts do not include...' These notes show textual variants. Pick one and research why scholars debate it. You'll gain appreciation for the careful work of both ancient scribes and modern textual critics.",
      appLinks: ["Bible Timeline", "Church History Guide (Lesson 1)"],
      quiz: [
        {
          question: "Why was oral tradition considered reliable in ancient cultures?",
          options: [
            "People had better memories than we do today",
            "Professional memorizers trained for years to preserve texts accurately",
            "There were no other options available",
            "Stories were shorter and easier to remember"
          ],
          correctAnswer: 1,
          explanation: "Ancient cultures trained professional memorizers who could accurately preserve and transmit sacred texts. This wasn't casual storytelling—it was a skilled profession with rigorous standards."
        },
        {
          question: "What was the main advantage of the codex format over scrolls?",
          options: [
            "Codices were cheaper to produce",
            "Codices were more durable",
            "You could quickly access any part of the text without unrolling",
            "Codices held more text"
          ],
          correctAnswer: 2,
          explanation: "The codex format (bound pages like a modern book) allowed readers to flip directly to any section. With a scroll, you had to unroll through all the preceding text, making cross-referencing nearly impossible."
        },
        {
          question: "Which writing material was most commonly used for New Testament manuscripts?",
          options: [
            "Stone tablets",
            "Papyrus and parchment",
            "Clay tablets",
            "Wood panels"
          ],
          correctAnswer: 1,
          explanation: "Papyrus (in dry climates like Egypt) and parchment (treated animal skin) were the primary materials for New Testament manuscripts. Papyrus was cheaper; parchment was more durable."
        },
        {
          question: "Why do we have thousands of variants in biblical manuscripts?",
          options: [
            "Scribes intentionally changed the text to fit their theology",
            "The original texts were unclear",
            "Hand-copying over centuries naturally produced minor differences",
            "Different communities had different versions of the stories"
          ],
          correctAnswer: 2,
          explanation: "Most variants are unintentional: spelling differences, skipped lines, word order changes. Hand-copying over centuries naturally produces minor variations. The vast majority don't affect meaning, and comparing manuscripts helps scholars identify the original text."
        },
        {
          question: "What is true about the abundance of biblical manuscripts?",
          options: [
            "It makes it harder to know what the original said",
            "It shows the text is unreliable",
            "It actually helps scholars reconstruct the original text more accurately",
            "It proves there were many different versions of the Bible"
          ],
          correctAnswer: 2,
          explanation: "Having thousands of manuscripts is a strength, not a weakness. The more copies we have, the easier it is to compare them and determine the original wording. The Bible has far more manuscript evidence than any other ancient text."
        }
      ]
    },
    {
      lesson: 2,
      title: "The Manuscript Detective Story",
      subtitle: "Recovering the original text from thousands of copies",
      introduction: "Imagine you're a detective, but instead of solving crimes, you're solving a textual mystery: What did the original biblical authors actually write? We don't have Paul's original letter to the Romans or Matthew's first draft of his Gospel. What we have are copies of copies of copies—thousands of them. Welcome to the fascinating world of textual criticism, where scholars piece together the original text like assembling a jigsaw puzzle.",
      keyTopics: [
        "What is textual criticism and why it matters",
        "Why we don't have the original manuscripts (autographs)",
        "Major manuscript families: Alexandrian, Byzantine, and Western",
        "The Dead Sea Scrolls discovery and its massive impact",
        "How to understand footnotes in your Bible"
      ],
      detailedContent: [
        {
          heading: "The Mystery: Where Are the Originals?",
          text: "Not a single original biblical manuscript exists today. Why? Papyrus and parchment decay over time, especially in humid climates. Plus, once a manuscript became worn from use, it was reverently buried or destroyed (to prevent misuse of God's name) and replaced with a fresh copy. The earliest New Testament fragment we have (John 18:31-33) dates to around 125 AD—just 30-40 years after John wrote his Gospel. That's incredibly close compared to other ancient texts. Most classical works have 1,000+ year gaps between composition and earliest copies."
        },
        {
          heading: "Textual Criticism: The Science of Recovery",
          text: "Textual criticism sounds destructive, but 'criticism' here means 'careful evaluation.' Scholars compare thousands of manuscripts to determine the most likely original wording. The method: (1) Collect all manuscript evidence, (2) Identify where manuscripts differ, (3) Apply principles to determine which reading is original. Key principles include: 'prefer the harder reading' (scribes tended to simplify difficulties), 'prefer the shorter reading' (scribes added explanations), and 'prefer the reading that explains the others' (the variant that best explains how other variants arose is likely original)."
        },
        {
          heading: "Manuscript Families: The Three Main Lines",
          text: "Manuscripts cluster into 'families' based on shared characteristics—like genetic family trees. The **Alexandrian text** (Egypt, 2nd-4th centuries) is generally shorter and considered more accurate due to Egypt's dry climate preserving early manuscripts. The **Western text** (North Africa, Europe, 3rd-9th centuries) has more paraphrasing and explanatory additions. The **Byzantine text** (Constantinople, 5th-15th centuries) represents the majority of manuscripts and became the basis for the King James Version. Modern translations like NIV and ESV primarily follow Alexandrian texts while noting significant Byzantine variants."
        },
        {
          heading: "Dead Sea Scrolls: A Game-Changing Discovery",
          text: "In 1947, a Bedouin shepherd threw a rock into a cave near Qumran and heard pottery shatter. Inside were jars containing scrolls over 2,000 years old—the oldest biblical manuscripts ever found. Before this, our earliest complete Hebrew Old Testament dated to 1008 AD. The Dead Sea Scrolls pushed that back to 200 BC for some books. The shocking result? The text had been preserved with remarkable accuracy. Isaiah scrolls from 125 BC match medieval manuscripts almost perfectly. This discovery silenced critics who claimed the Old Testament had been corrupted over centuries."
        },
        {
          heading: "Understanding Your Bible's Footnotes",
          text: "Ever see notes like 'Some manuscripts add...' or 'The earliest manuscripts do not include...'? These show where ancient manuscripts differ. Example: Mark 16:9-20 (the 'longer ending' with snake handling and poison drinking) is absent from the earliest and best manuscripts—most scholars believe Mark originally ended at 16:8. John 7:53-8:11 (woman caught in adultery) is beautiful and true to Jesus's character, but it's probably not originally part of John's Gospel. Modern Bibles include these passages but bracket them with notes. This isn't hiding anything—it's being honest about the textual evidence."
        }
      ],
      beginnerExplanation: "Imagine you wrote a letter to your best friend in 1950, and they copied it by hand and sent copies to 10 other friends. Those friends made copies, and so on. By 2025, there are 5,000 handwritten copies floating around, but your original is long gone. Now someone wants to know exactly what you wrote. They'd collect all 5,000 copies, notice where they differ (maybe someone misheard a word, or 'corrected' your grammar), and by comparing all the copies, they could reconstruct your original letter with high confidence. That's textual criticism. And the Bible has way more manuscript copies than any other ancient text, making reconstruction easier, not harder.",
      reflectionQuestions: [
        "How does knowing we don't have originals affect your confidence in the Bible?",
        "What surprises you about the Dead Sea Scrolls discovery?",
        "Why do you think modern Bibles include disputed passages like the longer ending of Mark?",
        "How might understanding textual criticism help you when someone claims 'the Bible has been changed over time'?"
      ],
      practicalApplication: "Open your Bible to Mark 16:9-20 or John 7:53-8:11. Read the footnotes explaining the textual issues. Then look up a few different translations (NIV, ESV, NASB, KJV) to see how they handle these passages. Notice that modern translations don't hide the issues—they're transparent about them. This honesty should increase, not decrease, your trust in biblical scholarship.",
      appLinks: ["Bible Timeline (Canonization)", "Church History Guide (Lesson 2)"],
      quiz: [
        {
          question: "Why don't we have any original biblical manuscripts?",
          options: [
            "They were all destroyed in early Christian persecutions",
            "Ancient writing materials decayed over time, and worn copies were replaced",
            "The Catholic Church deliberately destroyed them",
            "They were lost during the fall of Rome"
          ],
          correctAnswer: 1,
          explanation: "Papyrus and parchment naturally decay, especially in humid climates. Worn manuscripts were reverently replaced with fresh copies. This was normal practice for ancient texts."
        },
        {
          question: "What is textual criticism?",
          options: [
            "The practice of criticizing the Bible's teachings",
            "Finding errors in biblical manuscripts",
            "The careful comparison of manuscripts to determine the original wording",
            "Translating ancient languages into English"
          ],
          correctAnswer: 2,
          explanation: "'Criticism' here means 'careful evaluation,' not 'finding fault.' Textual critics compare thousands of manuscripts to reconstruct the most likely original text."
        },
        {
          question: "Which manuscript family is generally considered most reliable for the New Testament?",
          options: [
            "Byzantine (used by King James Version)",
            "Alexandrian (Egypt, 2nd-4th centuries)",
            "Western (North Africa and Europe)",
            "They are all equally reliable"
          ],
          correctAnswer: 1,
          explanation: "The Alexandrian text type is generally shorter and considered more accurate because Egypt's dry climate preserved very early manuscripts. Modern translations like NIV and ESV primarily follow Alexandrian texts."
        },
        {
          question: "What was significant about the Dead Sea Scrolls discovery?",
          options: [
            "They contained lost books of the Bible",
            "They proved the Old Testament had been corrupted over time",
            "They pushed our manuscript evidence back 1,000 years and confirmed textual accuracy",
            "They revealed that Jesus was married"
          ],
          correctAnswer: 2,
          explanation: "The Dead Sea Scrolls (dated around 200 BC - 100 AD) are about 1,000 years older than previously known Hebrew manuscripts. Remarkably, they match later manuscripts almost perfectly, confirming careful preservation."
        },
        {
          question: "When your Bible has a footnote saying 'some manuscripts omit this verse,' what does that mean?",
          options: [
            "The verse is definitely not authentic",
            "Translators are unsure how to translate it",
            "Ancient manuscripts differ at this point, and scholars want you to know",
            "This verse was added by the Catholic Church"
          ],
          correctAnswer: 2,
          explanation: "These footnotes show textual variants—places where ancient manuscripts differ. Modern Bibles are transparent about these differences, letting readers know where uncertainty exists. It's a sign of scholarly honesty."
        }
      ]
    },
    {
      lesson: 3,
      title: "Lost in Translation?",
      subtitle: "From Hebrew and Greek to your language",
      introduction: "Have you ever played the game 'telephone,' where a message gets whispered from person to person and becomes hilariously garbled by the end? Translation can feel like that—but biblical translation is far more careful. Every time the Bible moves from one language to another, translators face a fundamental tension: Do you translate word-for-word (formal equivalence) or thought-for-thought (dynamic equivalence)? Let's explore this journey from ancient languages to English.",
      keyTopics: [
        "The Septuagint: Why Greek translation mattered for canon debates",
        "Jerome's Latin Vulgate and its thousand-year dominance",
        "Translation philosophies: formal vs. dynamic equivalence",
        "Why different English Bibles say different things",
        "Choosing the right Bible translation for your needs"
      ],
      detailedContent: [
        {
          heading: "The Septuagint: Judaism's Greek Bible",
          text: "Around 250 BC, Jewish scholars in Alexandria, Egypt translated the Hebrew Scriptures into Greek (called the Septuagint or LXX). Why? Many Jews in the diaspora spoke Greek, not Hebrew. This translation became massively important: (1) It's the version most quoted in the New Testament, (2) It included books (like Tobit, Wisdom, Maccabees) that weren't in the Hebrew canon, fueling later debates about the Apocrypha, and (3) It shows how Jews understood their own Scriptures before Christianity emerged. When you see Old Testament quotes in the New Testament that don't quite match your Old Testament, it's often because the NT authors quoted the Septuagint."
        },
        {
          heading: "Jerome's Vulgate: The Latin Standard",
          text: "By the 4th century, Latin had replaced Greek as the common language of the Western Roman Empire. Pope Damasus commissioned Jerome—a brilliant but cranky scholar—to create a definitive Latin Bible. Jerome did something radical: instead of translating the Old Testament from the Greek Septuagint (which most Christians used), he went back to the Hebrew originals. This controversial choice meant his Vulgate sometimes differed from the Greek Old Testament. For over 1,000 years (400-1500s AD), the Vulgate was *the* Bible for Western Christianity. The Protestant Reformation challenged its authority, but it remained the Catholic Church's official version until the 20th century."
        },
        {
          heading: "Translation Philosophy: The Spectrum",
          text: "Every translation sits on a spectrum. **Formal equivalence** (word-for-word): Translates each word as literally as possible, preserving original word order and structure. Examples: NASB, ESV, KJV. Pros: Great for study; maintains original ambiguities. Cons: Can sound wooden; Hebrew idioms don't always make sense in English. **Dynamic equivalence** (thought-for-thought): Translates the meaning of phrases, not individual words. Examples: NIV, NLT, GNT. Pros: Readable, captures the author's intent. Cons: Translator interpretation involved; some nuance lost. **Paraphrase**: Rewrites in contemporary language. Example: The Message. Pros: Highly readable, fresh perspective. Cons: More interpretation, less precise."
        },
        {
          heading: "Why English Bibles Differ",
          text: "Open five English Bibles to the same verse, and you might see five different wordings. Why? (1) **Source texts differ**: KJV used later Byzantine manuscripts; modern versions use earlier Alexandrian texts. (2) **Translation philosophy**: ESV is formal; NIV is dynamic. (3) **English changes**: KJV's 'thee/thou' sounded normal in 1611 but archaic today. (4) **Theological tradition**: Some translations lean toward specific traditions (Catholic, Protestant, evangelical). (5) **Committee decisions**: Translation involves judgment calls—should 'sarx' be 'flesh' or 'sinful nature'? Both are defensible."
        },
        {
          heading: "Choosing Your Translation",
          text: "There's no single 'best' translation—it depends on your purpose. **For word study and deep analysis**: ESV, NASB (formal equivalence). **For devotional reading**: NIV, NLT (dynamic equivalence). **For literary beauty**: KJV, NRSV. **For fresh perspective**: The Message (paraphrase). **For accuracy across traditions**: NRSV, CEB (ecumenical committees). Many scholars recommend reading multiple translations. Use a formal one for study, a dynamic one for reading through books quickly, and a paraphrase for seeing familiar texts with fresh eyes. Compare translations to see where they differ—those differences often highlight interpretive questions worth exploring."
        }
      ],
      beginnerExplanation: "Imagine translating a joke from Spanish to English. You could translate word-by-word: 'What gives you the cold one?' (confusing). Or meaning-for-meaning: 'What do you want to drink?' (clear but loses the literal words). Bible translation faces this same choice. Some Bibles stay close to the original words (ESV, NASB); others focus on clear meaning (NIV, NLT). Neither is 'wrong'—they serve different purposes. It's like having both a textbook and a novel about the same topic.",
      reflectionQuestions: [
        "Why do you think the Septuagint's inclusion of extra books led to Protestant/Catholic canon differences?",
        "How does knowing about translation philosophies change how you read footnotes in your Bible?",
        "What translation(s) do you currently use? Where does it fall on the formal-dynamic spectrum?",
        "Can a translation be 'too literal' or 'too free'? Where would you draw the line?"
      ],
      practicalApplication: "Pick a familiar passage (like John 3:16 or Psalm 23) and read it in four different translations: ESV (formal), NIV (dynamic), NLT (more dynamic), and The Message (paraphrase). Notice what's the same and what differs. Do the differences change the meaning, or just the wording? This exercise will help you understand what your translation is doing and why multiple translations are valuable.",
      appLinks: ["Bible Timeline (Writing Periods)", "Denomination Comparison (Protestant/Catholic Bibles)"],
      quiz: [
        {
          question: "What was significant about the Septuagint?",
          options: [
            "It was the first Bible ever written",
            "It translated Hebrew Scriptures to Greek and included books that became the Apocrypha",
            "It was written by Jesus's disciples",
            "It proved the Old Testament was corrupted"
          ],
          correctAnswer: 1,
          explanation: "The Septuagint (LXX), created around 250 BC, translated Hebrew Scriptures into Greek for diaspora Jews. It included additional books (Deuterocanonical/Apocrypha) and became the version most quoted in the New Testament."
        },
        {
          question: "What was controversial about Jerome's Vulgate?",
          options: [
            "He translated it into Latin instead of Greek",
            "He translated the Old Testament from Hebrew instead of the Greek Septuagint",
            "He removed books from the Bible",
            "He added his own commentary"
          ],
          correctAnswer: 1,
          explanation: "Jerome controversially went back to the Hebrew originals for the Old Testament rather than translating from the Greek Septuagint that most Christians used. This sometimes produced different readings."
        },
        {
          question: "Which translation philosophy stays closest to the original word order?",
          options: [
            "Paraphrase (The Message)",
            "Dynamic equivalence (NIV, NLT)",
            "Formal equivalence (ESV, NASB)",
            "They all do equally"
          ],
          correctAnswer: 2,
          explanation: "Formal equivalence (word-for-word) translations like ESV and NASB try to preserve the original word order and structure as much as possible, even if it sounds less natural in English."
        },
        {
          question: "Why might the same verse differ between the KJV and modern translations?",
          options: [
            "Modern translators are less faithful to the original",
            "The KJV deliberately changed verses",
            "They use different source manuscripts and translation philosophies",
            "English language hasn't changed since 1611"
          ],
          correctAnswer: 2,
          explanation: "The KJV used later Byzantine manuscripts; modern translations use earlier Alexandrian texts. They also have different translation philosophies and use contemporary English rather than 17th-century language."
        },
        {
          question: "For deep Bible word study, which type of translation is generally recommended?",
          options: [
            "Paraphrase like The Message",
            "Dynamic equivalence like NIV",
            "Formal equivalence like ESV or NASB",
            "Any translation works equally well"
          ],
          correctAnswer: 2,
          explanation: "For detailed word study, formal equivalence translations (ESV, NASB) are preferred because they stay closer to the original wording and preserve nuances. Dynamic translations prioritize readability over literalness."
        }
      ]
    },
    {
      lesson: 4,
      title: "The English Bible's Dramatic History",
      subtitle: "Martyrs, kings, and the fight to read Scripture in English",
      introduction: "It's hard to imagine today, but for centuries, owning an English Bible could get you killed. The story of the English Bible is filled with smugglers, secret printings, political intrigue, and martyrs who believed ordinary people deserved to read God's Word in their own language. From illegal translations whispered in secret to a king's authorized version that shaped the English language itself, this is a story of courage, controversy, and cultural transformation.",
      keyTopics: [
        "Wycliffe's illegal 'Lollard' Bible (1380s)",
        "Tyndale's martyrdom and lasting influence",
        "The King James Version's political context (1611)",
        "The explosion of modern English translations",
        "Why different denominations prefer certain translations"
      ],
      detailedContent: [
        {
          heading: "John Wycliffe: The Morning Star of the Reformation",
          text: "In the 1380s, John Wycliffe and his followers (derisively called 'Lollards') produced the first complete English Bible—translated from the Latin Vulgate, not original languages. This was revolutionary and illegal. The Catholic Church insisted Scripture should remain in Latin, interpreted by clergy. Why? Partly control, but also legitimate concern: without training, people might misinterpret Scripture. Wycliffe believed every Christian should read the Bible directly. His followers hand-copied manuscripts and secretly distributed them. When Wycliffe died (1384), his enemies dug up his bones, burned them, and threw the ashes in a river. But his ideas couldn't be killed—they flowed through Europe like those ashes, influencing Jan Hus, Martin Luther, and ultimately the Reformation."
        },
        {
          heading: "William Tyndale: 'If God Spare My Life...'",
          text: "William Tyndale made a famous vow: 'If God spare my life, ere many years I will cause a boy that driveth the plough shall know more of the Scripture than thou dost' (speaking to a clergyman). Unable to get permission in England, Tyndale fled to Europe. Using Erasmus's Greek New Testament (1516), he produced an English translation directly from Greek—a first. He smuggled printed copies into England (1526) hidden in bales of cloth and wine barrels. Church authorities burned the Bibles publicly. In 1536, Tyndale was betrayed, strangled, and burned at the stake. His last words: 'Lord, open the King of England's eyes!' Within a year, King Henry VIII authorized an English Bible. Tyndale's translation became the foundation—83% of the KJV New Testament comes directly from his work."
        },
        {
          heading: "The King James Version: Politics and Poetry",
          text: "In 1604, King James I authorized a new Bible translation. Why? The Geneva Bible (1560)—England's popular version—had marginal notes that questioned royal authority. James wanted a translation without anti-monarchy notes. He assembled 47 scholars, divided into six committees, working from Hebrew, Greek, and Aramaic. Their instructions: majestic, dignified language suitable for public reading; no controversial notes. The 1611 King James Version succeeded brilliantly—its phrases entered the English language ('Thee/thy,' 'Go the extra mile,' 'The powers that be'). It dominated for 350 years. However, it has limitations: (1) Based on later manuscripts, (2) English language has changed ('prevent' meant 'go before,' not 'stop'), (3) Some passages reflect outdated manuscript evidence."
        },
        {
          heading: "The Modern Translation Explosion",
          text: "Why so many modern translations? Several factors: (1) **Earlier manuscripts discovered** (Dead Sea Scrolls, Alexandrian texts), (2) **English language evolution** (KJV English sounds archaic), (3) **Translation philosophy debates** (formal vs. dynamic), (4) **Denominational preferences**, (5) **Target audiences** (study, devotional, children, etc.). Major modern translations: **RSV (1952)**: Modernized KJV language. **NASB (1971)**: Very literal. **NIV (1978)**: Dynamic, evangelical, best-selling modern version. **NRSV (1989)**: Scholarly, ecumenical, gender-inclusive language. **ESV (2001)**: Formal, evangelical, growing popularity. **NLT (1996/2004)**: Thought-for-thought, highly readable. **CSB (2017)**: Balance between formal and dynamic."
        },
        {
          heading: "Denominational Translation Preferences",
          text: "Different Christian traditions gravitate toward certain translations, often for theological or historical reasons. **Catholics**: New American Bible (NAB), New Jerusalem Bible—include Deuterocanonical books, approved by bishops. **Mainline Protestants**: NRSV—ecumenical, scholarly, gender-inclusive. **Evangelicals**: NIV, ESV—balance readability with accuracy, conservative translation choices. **Traditional/KJV-only churches**: Believe only the KJV is reliable (though this is a minority view). **Orthodox**: Orthodox Study Bible—uses Septuagint-based OT. These preferences aren't rigid—many Christians use multiple translations. But understanding these patterns helps explain why your church might prefer one version over another."
        }
      ],
      beginnerExplanation: "Imagine if reading this message in your own language was illegal, and people were killed for translating it. That's what early English Bible translators faced. They believed God's Word should be accessible to everyone, not just scholars who knew Latin. Their courage gave us the ability to pick up a Bible in English today without a second thought. The variety of modern translations isn't a weakness—it shows that the Bible is living and active, constantly being translated afresh for new generations.",
      reflectionQuestions: [
        "What would you risk to read the Bible in your own language if it were illegal?",
        "Why do you think church authorities resisted English translations initially?",
        "How does knowing Tyndale's sacrifice shape how you view your Bible?",
        "Is having many English translations helpful or confusing? Why?"
      ],
      practicalApplication: "Research which Bible translation your church uses and why. Ask your pastor or look up the church's statement of faith. Understanding your church's choice will help you see how translation decisions connect to theology and tradition. Then, try reading a book of the Bible in a translation your church doesn't typically use—you might gain fresh insights!",
      appLinks: ["Church History Guide (Lesson 3 - Reformation)", "Denomination Comparison"],
      quiz: [
        {
          question: "What was illegal about Wycliffe's Bible?",
          options: [
            "It was translated from Greek instead of Latin",
            "It translated the Bible into English without Church authorization",
            "It removed books from the Bible",
            "It added Wycliffe's own writings"
          ],
          correctAnswer: 1,
          explanation: "In the 1380s, translating the Bible into English (or any vernacular language) without Church permission was illegal. The Church insisted Scripture remain in Latin, controlled and interpreted by clergy."
        },
        {
          question: "What was William Tyndale's major achievement?",
          options: [
            "He translated the Bible into Latin",
            "He created the King James Version",
            "He translated the New Testament into English directly from Greek",
            "He printed the first Bible ever"
          ],
          correctAnswer: 2,
          explanation: "Tyndale's groundbreaking work (1526) was translating the New Testament into English directly from Greek, not from the Latin Vulgate. His translation became the foundation for the King James Version."
        },
        {
          question: "Why did King James I authorize a new Bible translation?",
          options: [
            "The Geneva Bible's notes questioned royal authority",
            "No English Bible existed yet",
            "He wanted to correct errors in the Latin Vulgate",
            "The Pope requested it"
          ],
          correctAnswer: 0,
          explanation: "The popular Geneva Bible (1560) had marginal notes that questioned monarchy and royal authority. King James wanted a translation with majestic language and no controversial notes."
        },
        {
          question: "What percentage of the KJV New Testament comes from Tyndale's translation?",
          options: [
            "About 25%",
            "About 50%",
            "About 83%",
            "None - they were completely different"
          ],
          correctAnswer: 2,
          explanation: "Approximately 83% of the KJV New Testament comes directly from Tyndale's translation. His work was so excellent that later translators largely preserved his wording."
        },
        {
          question: "Why are there so many modern English Bible translations?",
          options: [
            "Each denomination wants its own version",
            "Publishers want to make more money",
            "Earlier manuscripts, language changes, and different translation philosophies all contribute",
            "Modern translations are all just paraphrases"
          ],
          correctAnswer: 2,
          explanation: "Multiple factors drive modern translations: discovery of earlier manuscripts, evolution of English, different translation philosophies (formal vs. dynamic), and serving different audiences. It's not about competition but about serving readers well."
        }
      ]
    },
    {
      lesson: 5,
      title: "The Books That Almost Made It",
      subtitle: "Understanding the Apocrypha and 'lost gospels'",
      introduction: "Walk into a Catholic bookstore and count the books in their Bible: 73. Walk into a Protestant bookstore: 66 books. What happened to those 7 books (actually 7-8 depending on how you count)? And what about the 'Gospel of Thomas' or 'Gospel of Judas' that make headlines every few years? This lesson dives into the fascinating world of texts that were popular, influential, or nearly canonical—but ultimately didn't make the cut for most Christian Bibles.",
      keyTopics: [
        "What is the Apocrypha/Deuterocanonical books?",
        "Why Catholics include them and Protestants don't",
        "Popular early Christian texts that weren't canonized",
        "The Gnostic gospels and why they were rejected",
        "Debunking modern 'lost gospels' sensationalism"
      ],
      detailedContent: [
        {
          heading: "The Apocrypha: Deuterocanonical Debate",
          text: "The 'Apocrypha' (Greek: 'hidden things') or 'Deuterocanonical' (second canon) books include: Tobit, Judith, Wisdom of Solomon, Sirach (Ecclesiasticus), Baruch, 1-2 Maccabees, and additions to Esther and Daniel. These books were in the Greek Septuagint but not in the Hebrew Bible. Early Christians used the Septuagint, so these books circulated widely. **Catholic/Orthodox view**: These books are Scripture. They were used by the early church, quoted by church fathers, and affirmed at councils (Hippo 393 AD, Carthage 397 AD, Trent 1546 AD). **Protestant view**: These books are useful for history and devotion but not Scripture. They weren't in the Hebrew canon, weren't quoted as Scripture in the NT, and contain some theological ideas Protestants reject (prayers for the dead, purgatory implications). The Reformers said: 'Good to read, but not equal to Scripture.'"
        },
        {
          heading: "Books That Were Close But Didn't Make It",
          text: "Several early Christian texts were beloved and nearly canonical: **Shepherd of Hermas** (2nd century): Apocalyptic visions, moral teachings. Included in some early Bibles (Codex Sinaiticus). Too late to be apostolic. **1 Clement** (c. 96 AD): Letter from Rome to Corinth. Wise counsel, but not apostolic authority. **Didache** (1st-2nd century): Early church manual on baptism, Eucharist, church order. Practical but not inspired. **Epistle of Barnabas** (2nd century): Allegorical interpretation of OT. Interesting but speculative. These books show us early Christianity's diversity and piety but lacked the apostolic authority or universal acceptance to become Scripture. They're valuable for understanding early Christian thought, even if not canonical."
        },
        {
          heading: "The Gnostic Gospels: A Different Christianity",
          text: "In 1945, Egyptian farmers found a jar near Nag Hammadi containing 52 texts, including 'gospels' attributed to Thomas, Philip, and Mary. These weren't lost gospels 'suppressed by the church'—they were Gnostic texts (2nd-3rd centuries), representing a different religion. **Gnosticism taught**: Secret knowledge (gnosis) brings salvation; the material world is evil, created by a lesser god; Jesus didn't have a real body (Docetism); salvation is escaping the body, not bodily resurrection. **Why they were rejected**: (1) Written 100-200 years after Jesus by Gnostics, not apostles. (2) Contradicted apostolic teaching. (3) Focused on secret sayings, not Jesus's life, death, and resurrection. (4) No manuscript evidence from the 1st century. The Gospel of Thomas (sayings collection, no narrative) is interesting for historical study but clearly later and non-apostolic."
        },
        {
          heading: "Debunking 'Lost Gospel' Sensationalism",
          text: "Every few years, media headlines scream: 'Lost Gospel Discovered!' or 'Ancient Text Challenges Christianity!' Let's be clear: **No serious scholar claims these texts should be in the Bible.** They're studied academically, but they don't change core Christian beliefs. **Gospel of Judas** (National Geographic 2006): Gnostic text (3rd century) portraying Judas as hero. Centuries late, Gnostic perspective. **'Secret Gospel of Mark'**: Claimed 1958, likely a modern forgery. **'Jesus's Wife' papyrus** (2012): Tiny fragment, now widely considered a modern fake. The sensationalism sells books, but the scholarship is clear: We have the right books in the New Testament. These later texts help us understand competing versions of Christianity that died out, but they don't represent apostolic Christianity."
        },
        {
          heading: "Why Canon Boundaries Matter",
          text: "Having a defined canon isn't about being narrow-minded—it's about having a stable foundation. Imagine if every generation could add new 'gospels' based on new 'revelations.' Christianity would fracture endlessly. The canon debate wasn't arbitrary; it involved careful criteria: (1) **Apostolicity**: Written by or connected to apostles. (2) **Orthodoxy**: Consistent with apostolic teaching. (3) **Antiquity**: From the first century. (4) **Usage**: Widely used in churches. (5) **Inspiration**: Recognized as bearing divine authority. Books like Thomas, Shepherd of Hermas, or the Apocrypha might be edifying, but they don't meet all these criteria. The canon gives us a foundation to stand on—a measuring stick for faith and practice."
        }
      ],
      beginnerExplanation: "Imagine you're creating a 'greatest hits' album of early Christian writings. Some songs (books) are obvious classics everyone agrees on (the four Gospels, Paul's letters). Others are good but debated—some fans include them, others don't (Apocrypha/Deuterocanonical). Still others are interesting but clearly not 'greatest hits' material (Gnostic gospels, Shepherd of Hermas). The canon debate was about which books truly carry apostolic authority and represent the foundation of Christian faith. It's not about suppressing books—it's about knowing which ones are the authoritative foundation.",
      reflectionQuestions: [
        "Why do you think Catholics and Protestants disagree on the Apocrypha?",
        "How would Christianity be different if the Gnostic gospels had been included in the canon?",
        "Should churches teach from non-canonical books like Shepherd of Hermas? Why or why not?",
        "How do you respond when someone claims 'the church suppressed gospels that challenged its power'?"
      ],
      practicalApplication: "Find a copy of the Apocrypha (many Protestant Bibles include it in a separate section, or look online). Read a chapter from Wisdom of Solomon or 1 Maccabees. Ask yourself: What's valuable here? What's different from canonical books? Why might Protestants not include it while Catholics do? This exercise helps you understand the canon debate firsthand.",
      appLinks: ["Bible Timeline (Canonization)", "Denomination Comparison (Protestant vs. Catholic Bibles)"],
      quiz: [
        {
          question: "What are the Deuterocanonical books?",
          options: [
            "Books written after the New Testament",
            "Books in the Septuagint but not the Hebrew Bible, accepted by Catholics but not Protestants",
            "Books that were lost and recently discovered",
            "The Gnostic gospels"
          ],
          correctAnswer: 1,
          explanation: "Deuterocanonical books (Tobit, Judith, Wisdom, etc.) were in the Greek Septuagint but not the Hebrew canon. Catholics and Orthodox accept them as Scripture; Protestants do not, though they may include them for historical reading."
        },
        {
          question: "Why did Protestants reject the Apocrypha as Scripture?",
          options: [
            "They were written in Greek, not Hebrew",
            "They weren't in the Hebrew canon, weren't quoted as Scripture in the NT, and contained disputed teachings",
            "Martin Luther personally disliked them",
            "They were too long"
          ],
          correctAnswer: 1,
          explanation: "Protestant Reformers noted these books weren't in the Hebrew Bible, weren't quoted as Scripture in the New Testament, and contained teachings (like prayers for the dead) they found problematic. They valued them for history but not as Scripture."
        },
        {
          question: "What is Gnosticism?",
          options: [
            "The belief that knowledge comes only through Scripture",
            "A 2nd-3rd century movement teaching that secret knowledge brings salvation and the material world is evil",
            "The original form of Christianity",
            "A modern interpretation of the Bible"
          ],
          correctAnswer: 1,
          explanation: "Gnosticism was a 2nd-3rd century religious movement teaching that secret knowledge (gnosis) brings salvation, the material world is evil, and Jesus didn't have a real body. It contradicted apostolic Christianity."
        },
        {
          question: "Why were the Nag Hammadi gospels (like Gospel of Thomas) rejected?",
          options: [
            "They were written too recently to be authentic",
            "They were written 100-200 years after Jesus, taught Gnostic theology, and contradicted apostolic teaching",
            "The church was afraid of their message",
            "They were poorly written"
          ],
          correctAnswer: 1,
          explanation: "The Nag Hammadi texts were written in the 2nd-3rd centuries (long after the apostles), reflect Gnostic theology (which contradicts Christianity), and lack apostolic authority. They weren't 'suppressed'—they were simply not apostolic."
        },
        {
          question: "What criteria did the early church use to determine which books were canonical?",
          options: [
            "Popularity among modern readers",
            "Which books the Emperor preferred",
            "Apostolicity, orthodoxy, antiquity, widespread usage, and recognized inspiration",
            "Only books that were easy to understand"
          ],
          correctAnswer: 2,
          explanation: "The canon wasn't arbitrary. Books needed to be: written by/connected to apostles, consistent with apostolic teaching, from the first century, widely used in churches, and recognized as divinely inspired."
        }
      ]
    },
    {
      lesson: 6,
      title: "How Christians Read the Bible Over Time",
      subtitle: "From allegory to literal: changing interpretation methods",
      introduction: "Open your Bible to Genesis 3, where Eve eats the forbidden fruit. Is this a literal historical event? An allegory about human free will? A mythological story teaching theological truth? How you answer depends partly on when and where you lived. Christians across history have read the same Bible but interpreted it very differently. Understanding these interpretation methods helps explain why denominations today disagree on the 'plain meaning' of Scripture—and why your great-grandparents might have read the same passages differently than you do.",
      keyTopics: [
        "Early allegorical interpretation (Origen and Alexandria)",
        "Medieval four-fold sense of Scripture",
        "The Reformation's 'plain sense' revolution",
        "Modern historical-critical scholarship",
        "Why denominations interpret the same verse differently"
      ],
      detailedContent: [
        {
          heading: "Origen and the Alexandrian School: Allegory Everywhere",
          text: "In the 3rd century, Origen of Alexandria pioneered allegorical interpretation. Influenced by Greek philosophy, he believed Scripture had three senses (like humans have body, soul, and spirit): **Literal** (the plain events), **Moral** (ethical lessons), and **Spiritual** (deeper mystical meanings). Example: The crossing of the Red Sea wasn't just historical—it symbolized baptism, deliverance from sin, and the soul's journey to God. This approach solved problems (embarrassing Old Testament stories) but risked reading meanings into the text that weren't there. Origen famously interpreted Song of Solomon entirely as allegory about Christ and the church—not a romantic love poem at all. Critics said he was more interested in Plato than in what the biblical authors actually meant."
        },
        {
          heading: "Medieval Four-Fold Sense: Layers of Meaning",
          text: "Medieval theologians developed a four-fold interpretive method, summarized in a Latin couplet: 'Littera gesta docet, quid credas allegoria, moralis quid agas, quo tendas anagogia' (The letter teaches events, allegory what you believe, moral what you do, anagogy where you're going). Example using 'Jerusalem': **Literal**: Historical city in Israel. **Allegorical**: The Church. **Moral**: The human soul. **Anagogical**: Heaven. This method found multiple valid meanings in every text. It made Scripture endlessly rich but also dangerously subjective—how do you know which allegorical reading is correct? The system worked because Church tradition and authority guided interpretation. But it set the stage for Reformation debates."
        },
        {
          heading: "The Reformation: The 'Plain Sense' Revolution",
          text: "Martin Luther and other Reformers rejected allegorical excess. Luther said: 'The Holy Spirit is the plainest writer and speaker in heaven and earth, and therefore His words cannot have more than one, and that the very simplest, sense, which we call the literal, ordinary, natural sense.' The Reformers insisted: (1) **Grammatical-historical method**: Understand words in their historical context and original languages. (2) **Scripture interprets Scripture**: Compare clear passages with unclear ones. (3) **The priesthood of all believers**: You don't need Church authority to interpret—the Holy Spirit guides individual readers. This democratized Bible reading but also fragmented Christianity. Without Church authority, who decides what's 'plain'? It's why Protestantism has so many denominations—disagreements over what Scripture 'plainly' teaches."
        },
        {
          heading: "Modern Historical-Critical Scholarship",
          text: "Starting in the 18th-19th centuries, scholars applied historical methods to the Bible like any ancient text: **Source criticism**: Who wrote this? When? What sources did they use? (e.g., the Documentary Hypothesis for the Torah). **Form criticism**: What genre is this? (History, poetry, parable, apocalyptic). **Redaction criticism**: How did editors shape the final text? **Textual criticism**: What did the original manuscripts say? These methods yielded insights (understanding ancient Near Eastern context, recognizing literary genres) but also controversies (questioning Mosaic authorship of the Pentateuch, debating Gospel historicity). Conservative scholars use these tools while maintaining high views of biblical authority; liberal scholars sometimes conclude the Bible is purely human literature. The tools themselves are neutral; the conclusions depend on presuppositions about Scripture's nature."
        },
        {
          heading: "Why Denominations Read the Same Bible Differently",
          text: "Here's why Christians disagree on 'what the Bible clearly says': (1) **Interpretive tradition**: Catholics read through Church tradition; Protestants through 'Scripture alone' (though they have traditions too). (2) **Theological framework**: Calvinists and Arminians both cite Scripture but reach different conclusions on predestination. (3) **Genre recognition**: Is Genesis 1 scientific? Poetic? Theological? Your answer affects interpretation. (4) **Cultural context**: Does 1 Timothy 2:12 ('I do not permit a woman to teach') apply universally or to a specific situation? (5) **Role of reason/experience**: How much weight do you give to science, personal experience, or Church tradition alongside Scripture? These aren't 'some Christians ignore the Bible' vs. 'we follow it.' All are trying to faithfully interpret Scripture—they just bring different tools and assumptions."
        }
      ],
      beginnerExplanation: "Imagine reading 'Goldilocks and the Three Bears.' You could read it as: (1) A story about a girl and bears (literal), (2) A lesson about respecting others' property (moral), (3) A symbol of finding balance in life (allegorical), or (4) A foreshadowing of humanity's search for 'just right' communion with God (anagogical). Biblical interpretation through history has worked similarly—same text, different reading methods. Today's debates over 'what the Bible says' often aren't about the words themselves but about how we determine what those words mean.",
      reflectionQuestions: [
        "How much of your Bible reading is 'plain sense' vs. looking for deeper spiritual meanings?",
        "What are the benefits and dangers of allegorical interpretation?",
        "Why do you think the Reformation's 'plain sense' approach led to so many denominations?",
        "How do your own experiences and culture affect how you interpret Scripture?"
      ],
      practicalApplication: "Pick a parable (like the Good Samaritan, Luke 10:25-37) and interpret it four ways: (1) Literal—what happened in the story? (2) Allegorical—do characters symbolize anything? (Early church said: the man=humanity, robbers=Satan, Samaritan=Jesus, inn=Church). (3) Moral—what should I do? (4) Anagogical—what does this teach about my ultimate destiny? Notice how the same story yields different insights depending on your interpretive method.",
      appLinks: ["Church History Guide (Lesson 3 - Reformation)", "Denomination Comparison (Interpretive Traditions)"],
      quiz: [
        {
          question: "What was Origen's main interpretive approach?",
          options: [
            "Strict literal interpretation only",
            "Historical-critical method",
            "Allegorical interpretation finding spiritual meanings beyond the literal",
            "Ignoring the Old Testament"
          ],
          correctAnswer: 2,
          explanation: "Origen pioneered allegorical interpretation, believing Scripture had literal, moral, and spiritual senses. He found deeper symbolic meanings throughout the Bible, especially in problematic or poetic texts."
        },
        {
          question: "What are the four senses of Scripture in medieval interpretation?",
          options: [
            "Matthew, Mark, Luke, John",
            "Literal, allegorical, moral, anagogical",
            "Faith, hope, love, justice",
            "Reading, study, prayer, application"
          ],
          correctAnswer: 1,
          explanation: "Medieval scholars read Scripture on four levels: literal (what happened), allegorical (what to believe), moral (what to do), and anagogical (where you're going/heaven). This found multiple valid meanings in every text."
        },
        {
          question: "What did the Reformers mean by the 'plain sense' of Scripture?",
          options: [
            "The Bible is easy and anyone can understand it without study",
            "Interpret words in their grammatical-historical context using original languages",
            "Ignore all symbolism and read everything literally",
            "Only educated clergy can understand the Bible"
          ],
          correctAnswer: 1,
          explanation: "The Reformers' 'plain sense' meant understanding words in their historical context and original languages, letting Scripture interpret Scripture. It wasn't anti-intellectual simplicity but a rejection of arbitrary allegorical methods."
        },
        {
          question: "What is historical-critical scholarship?",
          options: [
            "Criticizing the Bible's historical claims",
            "Applying historical methods to understand authorship, context, sources, and genre",
            "Proving the Bible is historically false",
            "Only reading the historical books of the Bible"
          ],
          correctAnswer: 1,
          explanation: "Historical-critical method applies historical and literary analysis to Scripture: examining authorship, dating, sources, genres, and historical context. It's a tool that can be used with various views of biblical authority."
        },
        {
          question: "Why do denominations interpret the same Bible verse differently?",
          options: [
            "Some denominations ignore parts of the Bible",
            "Different interpretive traditions, theological frameworks, genre recognition, and cultural contexts",
            "Only Catholics interpret correctly",
            "The Bible is too unclear to interpret"
          ],
          correctAnswer: 1,
          explanation: "Christians disagree not because some ignore Scripture but because they bring different interpretive traditions, theological frameworks, understandings of genre and context, and views on the role of reason and experience. All are trying to interpret faithfully."
        }
      ]
    },
    {
      lesson: 7,
      title: "Archaeology & the Bible",
      subtitle: "How discoveries confirm, challenge, and illuminate Scripture",
      introduction: "In 1947, a shepherd threw a rock into a cave and changed biblical scholarship forever. In 1868, a missionary found a stone that mentioned King David's dynasty—confirming a biblical king skeptics doubted existed. Archaeology doesn't 'prove' the Bible in a simplistic way, but it provides an astonishing amount of confirmation for biblical people, places, and events. It also raises questions and challenges traditional interpretations. Let's explore how digging in the dirt illuminates the book we hold in our hands.",
      keyTopics: [
        "The Dead Sea Scrolls: A game-changing discovery",
        "The Nag Hammadi library and Gnostic texts",
        "Archaeological confirmations of biblical accounts",
        "Archaeological challenges to traditional interpretations",
        "Latest manuscript discoveries and what they tell us"
      ],
      detailedContent: [
        {
          heading: "Dead Sea Scrolls: Pushing Back the Evidence",
          text: "Before 1947, critics claimed the Old Testament had been corrupted over centuries of copying. Our oldest complete Hebrew Bible was the Leningrad Codex (1008 AD)—over 1,000 years after the last OT book was written. Then came Qumran. Bedouin shepherds discovered caves containing hundreds of scrolls, including complete or partial copies of every OT book except Esther. Dates: 200 BC - 100 AD. The Isaiah scroll from Cave 1 (125 BC) is 1,000 years older than any previously known manuscript. Result? Word-for-word match with medieval manuscripts, with only minor spelling variations. This discovery silenced claims of textual corruption and confirmed the careful preservation of Scripture. We also learned about Second Temple Judaism—the religious world Jesus grew up in."
        },
        {
          heading: "Nag Hammadi: Understanding Early Heresies",
          text: "In 1945, Egyptian farmers near Nag Hammadi found a jar containing 52 texts (4th century copies of 2nd-3rd century originals), including Gnostic gospels (Thomas, Philip, Mary, Truth). Sensational media claimed these were 'suppressed gospels.' Reality: These texts confirm what church fathers said about Gnostic beliefs—secret knowledge for salvation, material world as evil, denial of Jesus's physical resurrection. They're valuable for understanding why early Christians rejected Gnosticism, but they don't challenge the New Testament canon. No serious scholar argues they're apostolic. They show Christianity wasn't monolithic—there were competing visions, and orthodox Christianity won not by suppression but by better reflecting apostolic teaching and Jesus's actual life and mission."
        },
        {
          heading: "Archaeological Confirmations: The Hits",
          text: "Archaeology has confirmed numerous biblical details critics once doubted: **Hittites**: Once thought legendary, now extensively documented. **Pool of Siloam**: Where Jesus healed the blind man (John 9)—discovered in 2004. **Pontius Pilate**: Inscription found in 1961 confirms his existence and title. **House of David**: Tel Dan Stele (1993) mentions 'House of David,' confirming David as historical figure. **Assyrian and Babylonian kings**: Sennacherib, Nebuchadnezzar, etc.—all confirmed. **Crucifixion evidence**: Heel bone with nail from 1st century proves crucifixion methods matching Gospel descriptions. **Capernaum**: Peter's house excavated, matches Gospel descriptions. These don't 'prove' theological claims, but they confirm the Bible's historical reliability in details skeptics once mocked."
        },
        {
          heading: "Archaeological Challenges: The Complications",
          text: "Archaeology also raises questions: **The Exodus**: No direct evidence for 2+ million Israelites wandering 40 years in Sinai. Some scholars suggest smaller numbers; others see theological history rather than documentary history. **Jericho's walls**: Joshua's conquest (c. 1400 BC) doesn't match archaeological evidence for Jericho's destruction. Possible explanations: dating debates, theological narrative vs. strict history. **Nazareth**: Limited 1st century evidence (though recent finds confirm small village). **Conquest vs. settlement**: Archaeological evidence suggests gradual settlement rather than sudden military conquest. These don't 'disprove' the Bible but challenge simplistic readings. They remind us: The Bible is ancient literature with complex relationships to history, not a modern documentary."
        },
        {
          heading: "Recent Discoveries and Ongoing Work",
          text: "Biblical archaeology continues with exciting finds: **P52 (John Rylands Papyrus)**: Earliest NT fragment (John 18, c. 125 AD). **P46 (Chester Beatty Papyrus)**: Paul's letters, c. 200 AD. **Codex Sinaiticus (1844)**: 4th century complete NT, discovered in monastery. **Museum of the Bible controversies**: Fake Dead Sea Scroll fragments exposed (2018)—reminder to verify provenance. **Tel Gezer inscription**: Confirms biblical place names. **Khirbet Qeiyafa**: Possible site of biblical Shaaraim. **Digital technology**: Multispectral imaging reveals text on burnt scrolls. Archaeology won't answer every question—much ancient evidence is lost to time. But it consistently shows the Bible emerged from real historical contexts, featuring real people and places. That doesn't prove theological claims, but it grounds faith in history, not mythology."
        }
      ],
      beginnerExplanation: "Think of the Bible as a historical novel set in ancient Rome. Archaeology is like excavating Rome—you find the Colosseum, coins with Caesar's face, inscriptions mentioning events in the novel. Does this prove every detail of the novel? No. But it confirms the story is set in a real place with real people, not a fairy-tale world. Similarly, archaeology confirms biblical places, people, and events without 'proving' theological claims like the resurrection. It shows the Bible is historically grounded, which strengthens (though doesn't replace) faith.",
      reflectionQuestions: [
        "How does archaeological confirmation of biblical details affect your faith?",
        "What do you do with archaeological evidence that complicates traditional biblical interpretations?",
        "Why do you think God didn't preserve more direct physical evidence of events like the Exodus?",
        "Can faith coexist with historical uncertainty about some biblical events?"
      ],
      practicalApplication: "Choose one biblical site or artifact (Pool of Siloam, Tel Dan Stele, Dead Sea Scrolls, etc.). Research what was found, when, and what it confirms or challenges about the biblical account. Watch a video or read an article from a reputable source (Biblical Archaeology Review, museum websites). This will help you see how archaeology illuminates Scripture and equip you to respond to skeptics who claim 'there's no evidence for the Bible.'",
      appLinks: ["Bible Timeline (Writing Periods)", "Church History Guide (Lesson 1 - Early Christianity)"],
      quiz: [
        {
          question: "What was the major significance of the Dead Sea Scrolls?",
          options: [
            "They contained new books of the Bible",
            "They proved the Old Testament had been corrupted",
            "They pushed manuscript evidence back 1,000 years and confirmed textual accuracy",
            "They revealed Jesus was married"
          ],
          correctAnswer: 2,
          explanation: "The Dead Sea Scrolls (200 BC - 100 AD) are about 1,000 years older than previously known Hebrew manuscripts. They match later texts almost perfectly, confirming careful textual preservation over centuries."
        },
        {
          question: "What do the Nag Hammadi texts reveal?",
          options: [
            "Lost gospels that should be in the Bible",
            "Evidence of early Gnostic beliefs and why they were rejected",
            "Proof that Christianity suppressed alternative gospels",
            "Original versions of the four Gospels"
          ],
          correctAnswer: 1,
          explanation: "The Nag Hammadi texts (4th century copies of 2nd-3rd century Gnostic works) confirm what church fathers said about Gnosticism and show why it was rejected as incompatible with apostolic Christianity."
        },
        {
          question: "Which biblical figure's existence was confirmed by the Tel Dan Stele?",
          options: [
            "Moses",
            "Abraham",
            "King David",
            "Jesus"
          ],
          correctAnswer: 2,
          explanation: "The Tel Dan Stele (1993 discovery) mentions the 'House of David,' confirming David as a historical figure. This was significant because some scholars had questioned David's existence."
        },
        {
          question: "What is an example of an archaeological challenge to traditional Bible interpretation?",
          options: [
            "Proof that Jesus never existed",
            "Evidence that contradicts all biblical events",
            "Lack of direct evidence for a massive Exodus as traditionally interpreted",
            "Discovery that the Bible was written in the Middle Ages"
          ],
          correctAnswer: 2,
          explanation: "While archaeology confirms many biblical details, some events (like a massive 2-million person Exodus) lack direct archaeological evidence, leading scholars to various interpretations about numbers, dating, or the nature of the account."
        },
        {
          question: "What is the relationship between archaeology and biblical faith?",
          options: [
            "Archaeology proves every biblical claim",
            "Archaeology disproves the Bible",
            "Archaeology confirms historical contexts and details but doesn't prove theological claims",
            "Archaeology is irrelevant to faith"
          ],
          correctAnswer: 2,
          explanation: "Archaeology confirms the Bible's historical grounding—real people, places, and events—but doesn't 'prove' theological claims like resurrection or miracles. It shows the Bible emerged from real history, not mythology, which strengthens (but doesn't replace) faith."
        }
      ]
    },
    {
      lesson: 8,
      title: "Your Bible's Backstory",
      subtitle: "Practical skills for informed Bible reading",
      introduction: "You've journeyed through 2,000+ years of biblical history—from oral tradition to manuscript copying, from Latin Vulgate to English translations, from disputed canons to archaeological discoveries. Now it's time to bring it all together with practical skills. This final lesson equips you to read your Bible with informed confidence: understanding footnotes, choosing translations wisely, recognizing textual issues, and selecting study resources that fit your needs. You're about to become a much more informed Bible reader.",
      keyTopics: [
        "How to read and understand manuscript footnotes",
        "Understanding your Bible's translation committee and approach",
        "Why some verses are in brackets [like John 7:53-8:11]",
        "Choosing a study Bible that fits your needs",
        "Becoming an informed, confident Bible reader"
      ],
      detailedContent: [
        {
          heading: "Decoding Manuscript Footnotes",
          text: "Open your Bible to almost any page and you'll see small letters (a, b, c) with footnotes at the bottom. These aren't distractions—they're windows into textual history. Common footnote types: **'Some manuscripts read...'**: Indicates a variant reading in ancient manuscripts. Example: Romans 8:28 might note different word order. Usually minor. **'The earliest manuscripts do not include...'**: Signals significant textual questions. Example: Mark 16:9-20. **'Or...'**: Alternative translations of the same Greek/Hebrew word. Example: 'justify' or 'declare righteous.' **'Greek: ...'**: Shows the original language when English doesn't capture nuance. These footnotes don't mean your Bible is unreliable—they mean translators are being honest about uncertainty and giving you full information. Embrace them! They show scholarly integrity."
        },
        {
          heading: "Know Your Translation's Approach",
          text: "Every Bible includes an introduction or preface explaining the translation philosophy. **Read it!** Look for: **Source texts**: Nestle-Aland/UBS for NT? Biblia Hebraica for OT? **Translation philosophy**: Formal (word-for-word) or dynamic (thought-for-thought)? **Committee composition**: Denominational? Ecumenical? Conservative? Liberal? **Target audience**: Scholars? New believers? Children? **Example - ESV**: Uses NA28 Greek text, formal equivalence, evangelical committee, aims for word-for-word accuracy. **Example - NIV**: Uses eclectic Greek text, dynamic equivalence, evangelical committee, prioritizes clarity and readability. **Example - NRSV**: Ecumenical committee, formal equivalence, gender-inclusive language, scholarly. Knowing your translation's approach helps you understand its strengths and limitations."
        },
        {
          heading: "Brackets, Italics, and Textual Markers",
          text: "Your Bible uses typography to signal textual issues: **Brackets [text]**: Indicates significant textual uncertainty. Example: **John 7:53-8:11** (woman caught in adultery) is bracketed in most modern Bibles because it's absent from earliest manuscripts. The story is likely historical tradition but wasn't originally in John's Gospel. **Mark 16:9-20** (longer ending with snake-handling) similarly bracketed. **Double brackets [[text]]**: Even more uncertain. **Italics** (in KJV): Added words for English readability not in the original. **Paragraph headings**: Added by publishers, not in the original text. Don't treat them as Scripture. **Red letters** (Jesus's words): Helpful but interpretive—sometimes debated what counts as Jesus's words. Understanding these markers helps you read critically and recognize where uncertainty exists."
        },
        {
          heading: "Choosing a Study Bible",
          text: "Study Bibles add notes, maps, articles, and cross-references. But not all study Bibles are alike. Choose based on your needs: **For deep word study**: ESV Study Bible, NASB Study Bible—formal translations with detailed notes. **For balanced evangelical perspective**: NIV Study Bible, CSB Study Bible—readable with solid scholarship. **For ecumenical/academic**: NRSV Oxford Annotated, HarperCollins Study Bible—multiple viewpoints, scholarly. **For Catholic readers**: Catholic Study Bible, Ignatius Catholic Study Bible—includes Deuterocanonical books, Catholic tradition. **For devotional use**: Life Application Study Bible, NLT Study Bible—practical application focus. **For historical/cultural context**: IVP Bible Background Commentary, Zondervan Illustrated Bible Backgrounds. **Red flags**: Study Bibles pushing fringe interpretations, claiming exclusive correctness, or ignoring mainstream scholarship. Choose based on your theological tradition, reading goals, and learning style."
        },
        {
          heading: "Becoming a Confident Bible Reader",
          text: "You now have the tools to read Scripture with informed confidence. **Practical habits**: (1) **Compare translations**: Check 2-3 translations for important passages. Differences often reveal interpretive choices. (2) **Read footnotes**: Don't skip them! They provide crucial context. (3) **Use study helps wisely**: Commentaries and study Bibles are helpful but not infallible. (4) **Understand genre**: Read poetry as poetry, apocalyptic as apocalyptic, history as ancient history (not modern documentary). (5) **Learn some Greek/Hebrew**: Even basic knowledge helps (free resources: Mounce's Greek, Pratico's Hebrew). (6) **Join a Bible study**: Community guards against individualistic misinterpretation. (7) **Pray for illumination**: The Holy Spirit guides understanding (1 Cor 2:10-14). You don't need to be a scholar to read the Bible faithfully—but a little knowledge goes a long way in avoiding mistakes and growing in understanding."
        }
      ],
      beginnerExplanation: "Imagine you're reading a Shakespeare play. You'd benefit from knowing: when it was written, what words meant in Elizabethan English, which lines are disputed by scholars, and which edition you're reading. Similarly, being an informed Bible reader means understanding your translation's approach, what footnotes mean, and how to use study tools. It doesn't require a PhD—just curiosity and willingness to learn. The Bible becomes richer when you understand its backstory, and you'll be able to help others read it with confidence too.",
      reflectionQuestions: [
        "How has this course changed how you read your Bible?",
        "What textual issue or footnote will you explore next?",
        "Which study Bible might you explore based on your needs and interests?",
        "How will you share this knowledge with others in your church or community?"
      ],
      practicalApplication: "Do a 'Bible audit': (1) Identify your Bible's translation and edition. (2) Read the preface/introduction—note the translation philosophy and committee. (3) Find a passage with footnotes (Romans 8:28, Mark 16:9-20, John 7:53-8:11). (4) Look up that passage in 2-3 other translations online. (5) If you have a study Bible, read the notes on that passage. (6) Write down what you learned. This exercise will make you a more informed, confident reader who understands why different Bibles say different things—and that's okay!",
      appLinks: ["Bible Timeline (All Sections)", "Church History Guide (All Lessons)", "Denomination Comparison (Translation Preferences)"],
      quiz: [
        {
          question: "What does a footnote saying 'Some manuscripts read...' indicate?",
          options: [
            "The Bible is unreliable",
            "Translators made a mistake",
            "Ancient manuscripts have a variant reading at this point",
            "This verse should be removed"
          ],
          correctAnswer: 2,
          explanation: "Footnotes showing variant readings indicate ancient manuscripts differ at this point. Translators include these notes to be transparent about textual evidence. It shows honesty, not unreliability."
        },
        {
          question: "Why are John 7:53-8:11 (woman caught in adultery) and Mark 16:9-20 often bracketed?",
          options: [
            "They were added by the Catholic Church",
            "They're absent from the earliest and best manuscripts",
            "Scholars don't like these passages",
            "They were recently discovered"
          ],
          correctAnswer: 1,
          explanation: "These passages are absent from our earliest and best manuscripts, suggesting they weren't in the original Gospels. Most scholars think they're true historical traditions added later. Modern Bibles bracket them to show this textual issue."
        },
        {
          question: "What information can you find in your Bible's preface?",
          options: [
            "Hidden prophecies about the future",
            "The translation's philosophy, source texts, and committee composition",
            "The translator's personal testimony",
            "A list of all the errors in other translations"
          ],
          correctAnswer: 1,
          explanation: "Bible prefaces explain the translation's approach: formal or dynamic equivalence, which source manuscripts were used, who was on the committee, and the target audience. This helps you understand the translation's strengths and limitations."
        },
        {
          question: "What should you look for when choosing a study Bible?",
          options: [
            "The most expensive one",
            "One that aligns with your theological tradition, reading goals, and learning style",
            "The one with the most pictures",
            "The one your friend recommended"
          ],
          correctAnswer: 1,
          explanation: "Choose a study Bible based on your theological tradition (Catholic, evangelical, ecumenical), your goals (word study, devotional, historical), and learning style. Different study Bibles serve different purposes."
        },
        {
          question: "What is a key habit for becoming a confident Bible reader?",
          options: [
            "Only read one translation and ignore all footnotes",
            "Memorize Greek and Hebrew before reading",
            "Compare translations, read footnotes, understand genre, and use study helps wisely",
            "Rely entirely on what your pastor says"
          ],
          correctAnswer: 2,
          explanation: "Confident Bible reading involves comparing translations, reading footnotes, understanding literary genres, using study resources wisely, and combining scholarship with prayer. It doesn't require expertise, just curiosity and willingness to learn."
        }
      ]
    }
  ];

  const stats = {
    completed: completedLessons.length,
    total: curriculum.length,
    percentage: Math.round((completedLessons.length / curriculum.length) * 100)
  };

  // If in interactive mode, show interactive lesson
  if (interactiveMode === 1) {
    return (
      <InteractiveLesson
        lessonData={lesson1Data}
        onComplete={(xp) => handleCompleteInteractive(1, xp)}
        onExit={handleExitInteractive}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Scroll className="w-12 h-12 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">History of the Bible Study Guide</h1>
          </div>
          <p className="text-xl md:text-2xl text-amber-100 mb-6">
            An 8-Lesson Journey from Ancient Scrolls to Modern Translations
          </p>
          <p className="text-lg text-amber-50 max-w-2xl mx-auto">
            Perfect for beginners! Discover how the Bible was written, preserved, and translated.
            Track your progress as you learn. No prior knowledge required.
          </p>
        </div>
      </div>

      {/* Progress Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-12 border-2 border-amber-100">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center">
              <Award className="w-8 h-8 text-amber-600 mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Your Progress</h2>
            </div>
            <span className="text-3xl md:text-4xl font-bold text-amber-600">{stats.percentage}%</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
            <div
              className="bg-gradient-to-r from-amber-500 to-orange-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${stats.percentage}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-amber-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-amber-700 mb-1">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Completed</span>
              </div>
              <p className="text-2xl font-bold text-amber-900">{stats.completed}</p>
            </div>

            <div className="bg-orange-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-orange-700 mb-1">
                <Target className="w-5 h-5" />
                <span className="font-semibold">Remaining</span>
              </div>
              <p className="text-2xl font-bold text-orange-900">{stats.total - stats.completed}</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-blue-700 mb-1">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">Total Lessons</span>
              </div>
              <p className="text-2xl font-bold text-blue-900">{stats.total}</p>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-green-700 mb-1">
                <Award className="w-5 h-5" />
                <span className="font-semibold">Next Lesson</span>
              </div>
              <p className="text-2xl font-bold text-green-900">
                {stats.completed < stats.total ? stats.completed + 1 : '✓'}
              </p>
            </div>
          </div>
        </div>

        {/* Course Overview */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Calendar className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">8-Lesson Curriculum</h2>
          </div>

          <p className="text-gray-700 mb-8 text-lg">
            Click any lesson below to explore the content. Each lesson builds on the previous one,
            taking you from ancient oral tradition to becoming an informed modern Bible reader.
          </p>

          {/* Lesson Cards */}
          <div className="space-y-4">
            {curriculum.map((lesson) => {
            const isExpanded = expandedLesson === lesson.lesson;
            const isCompleted = completedLessons.includes(lesson.lesson);
            const quizResult = quizResults[lesson.lesson];

            return (
              <div
                key={lesson.lesson}
                className={`bg-white rounded-xl shadow-lg overflow-hidden border-2 transition-all ${
                  isCompleted ? 'border-green-400' : 'border-gray-200'
                }`}
              >
                {/* Lesson Header */}
                <button
                  onClick={() => setExpandedLesson(isExpanded ? null : lesson.lesson)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                      isCompleted ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {isCompleted ? <CheckCircle className="w-6 h-6" /> : lesson.lesson}
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-800">{lesson.title}</h3>
                      <p className="text-gray-600">{lesson.subtitle}</p>
                    </div>
                  </div>
                  {isExpanded ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
                </button>

                {/* Interactive Mode Button for Lesson 1 */}
                {lesson.lesson === 1 && !isExpanded && (
                  <div className="px-6 pb-4 border-t-2 border-amber-100">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setInteractiveMode(1);
                      }}
                      className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-bold hover:from-purple-600 hover:to-pink-600 transition shadow-lg"
                    >
                      <Zap className="w-5 h-5" />
                      Try Interactive Mode! 🎮
                    </button>
                    <p className="text-center text-sm text-gray-600 mt-2">
                      Learn through games, quizzes, and interactive cards
                    </p>
                  </div>
                )}

                {/* Lesson Content - Expandable */}
                {isExpanded && (
                  <div className="px-6 pb-6 border-t-2 border-gray-100 pt-6">
                    {/* Introduction */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-2 text-lg">Introduction</h4>
                      <p className="text-gray-700 leading-relaxed">{lesson.introduction}</p>
                    </div>

                    {/* Key Topics */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 text-lg">Key Topics This Lesson</h4>
                      <ul className="space-y-2">
                        {lesson.keyTopics.map((topic, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Beginner Explanation */}
                    <div className="mb-6 bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
                      <h4 className="font-semibold text-gray-800 mb-2 text-lg">Simple Explanation</h4>
                      <p className="text-gray-700 leading-relaxed">{lesson.beginnerExplanation}</p>
                    </div>

                    {/* Detailed Content */}
                    {lesson.detailedContent && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-4 text-lg">In-Depth Study</h4>
                        <div className="space-y-4">
                          {lesson.detailedContent.map((section, idx) => (
                            <div key={idx} className="bg-white rounded-lg p-4 border-2 border-gray-200">
                              <h5 className="font-bold text-gray-900 mb-2">{section.heading}</h5>
                              <p className="text-gray-700 leading-relaxed">{formatTextWithBreaks(section.text)}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Reflection Questions */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 text-lg">Questions to Consider</h4>
                      <ul className="space-y-2">
                        {lesson.reflectionQuestions.map((question, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-orange-600 font-bold mr-3 flex-shrink-0">{idx + 1}.</span>
                            <span className="text-gray-700 italic">{question}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Practical Application */}
                    <div className="mb-6 bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                      <h4 className="font-semibold text-gray-800 mb-2 text-lg">This Lesson's Practice</h4>
                      <p className="text-gray-700 leading-relaxed">{lesson.practicalApplication}</p>
                    </div>

                    {/* App Links */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 text-lg">Explore in the App</h4>
                      <div className="flex flex-wrap gap-2">
                        {lesson.appLinks.map((link, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleLinkClick(link)}
                            className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium border border-amber-200 hover:from-amber-200 hover:to-orange-200 hover:shadow-md transition cursor-pointer"
                          >
                            {link}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quiz Section */}
                    {lesson.quiz && (
                      <div className="mb-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-200">
                        <div className="flex items-center mb-4">
                          <div className="bg-amber-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">
                            ?
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-lg">Lesson {lesson.lesson} Quiz</h4>
                            <p className="text-sm text-gray-600">Test your understanding with 5 questions</p>
                          </div>
                        </div>

                        {!quizResult ? (
                          <>
                            {/* Quiz Questions */}
                            <div className="space-y-6">
                              {lesson.quiz.map((question, qIdx) => {
                                const userAnswer = quizAnswers[`${lesson.lesson}-${qIdx}`];

                                return (
                                  <div key={qIdx} className="bg-white rounded-lg p-4 border border-gray-200">
                                    <p className="font-semibold text-gray-900 mb-3">
                                      {qIdx + 1}. {question.question}
                                    </p>
                                    <div className="space-y-2">
                                      {question.options.map((option, oIdx) => {
                                        const isSelected = userAnswer === oIdx;

                                        return (
                                          <button
                                            key={oIdx}
                                            onClick={() => handleQuizAnswer(lesson.lesson, qIdx, oIdx)}
                                            className={`w-full text-left p-3 rounded-lg border-2 transition ${
                                              isSelected
                                                ? 'border-amber-500 bg-amber-50'
                                                : 'border-gray-200 hover:border-amber-300 hover:bg-gray-50'
                                            }`}
                                          >
                                            <span className="font-medium text-gray-700 mr-2">
                                              {String.fromCharCode(65 + oIdx)}.
                                            </span>
                                            {option}
                                          </button>
                                        );
                                      })}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>

                            <div className="mt-6">
                              <button
                                onClick={() => submitQuiz(lesson.lesson, lesson.quiz)}
                                className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-700 transition shadow-md hover:shadow-lg"
                              >
                                Submit Quiz
                              </button>
                            </div>
                          </>
                        ) : (
                          <>
                            {/* Quiz Results */}
                            <div className="space-y-6">
                              {lesson.quiz.map((question, qIdx) => {
                                const userAnswer = quizAnswers[`${lesson.lesson}-${qIdx}`];
                                const isCorrect = userAnswer === question.correctAnswer;

                                return (
                                  <div key={qIdx} className="bg-white rounded-lg p-4 border border-gray-200">
                                    <p className="font-semibold text-gray-900 mb-3">
                                      {qIdx + 1}. {question.question}
                                    </p>
                                    <div className="space-y-2">
                                      {question.options.map((option, oIdx) => {
                                        const isSelected = userAnswer === oIdx;
                                        const isCorrectAnswer = oIdx === question.correctAnswer;

                                        let buttonClass = 'w-full text-left p-3 rounded-lg border-2 cursor-default ';
                                        if (isCorrectAnswer) {
                                          buttonClass += 'border-green-500 bg-green-50';
                                        } else if (isSelected && !isCorrect) {
                                          buttonClass += 'border-red-500 bg-red-50';
                                        } else {
                                          buttonClass += 'border-gray-200 bg-gray-50';
                                        }

                                        return (
                                          <div key={oIdx} className={buttonClass}>
                                            <span className="font-medium text-gray-700 mr-2">
                                              {String.fromCharCode(65 + oIdx)}.
                                            </span>
                                            {option}
                                          </div>
                                        );
                                      })}
                                    </div>
                                    <div className={`mt-3 p-3 rounded-lg ${isCorrect ? 'bg-green-100 border-l-4 border-green-500' : 'bg-blue-100 border-l-4 border-blue-500'}`}>
                                      <p className="text-sm font-semibold text-gray-900 mb-1">
                                        {isCorrect ? '✓ Correct!' : 'Explanation:'}
                                      </p>
                                      <p className="text-sm text-gray-800">{question.explanation}</p>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>

                            {/* Quiz Score */}
                            <div className="mt-6 p-4 bg-white rounded-lg border-2 border-amber-300">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-lg font-bold text-gray-800">Your Score:</span>
                                <span className="text-2xl font-bold text-amber-600">
                                  {quizResult.score} / {quizResult.total}
                                </span>
                              </div>
                              {quizResult.score >= quizResult.total * 0.7 ? (
                                <p className="text-green-700 font-semibold flex items-center">
                                  <CheckCircle className="w-5 h-5 mr-2" />
                                  Great job! You passed this lesson! ✓
                                </p>
                              ) : (
                                <p className="text-orange-700">
                                  Review the material and try again (need 70% to pass)
                                </p>
                              )}
                            </div>

                            <div className="mt-6">
                              <button
                                onClick={() => {
                                  setQuizResults(prev => {
                                    const updated = { ...prev };
                                    delete updated[lesson.lesson];
                                    return updated;
                                  });
                                  setQuizAnswers(prev => {
                                    const updated = { ...prev };
                                    lesson.quiz.forEach((_, idx) => {
                                      delete updated[`${lesson.lesson}-${idx}`];
                                    });
                                    return updated;
                                  });
                                }}
                                className="w-full bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition shadow-md hover:shadow-lg"
                              >
                                Retake Quiz
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    )}


                    {!isCompleted && (
                      <button
                        onClick={() => markLessonComplete(lesson.lesson)}
                        className="mt-6 w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition"
                      >
                        Mark as Complete
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </div>
  );
};

export default BibleHistoryGuide;
