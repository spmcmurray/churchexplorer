/*
// Apologetics Interactive Lesson Data (clean, adapted for InteractiveLesson)
// 8 lessons covering Christian apologetics from Craig, Lennox, Lewis, Keller, Sproul, Huff, Hanegraaff

export const lesson1Data = {
  id: 1,
  title: "The Case for God's Existence",
  subtitle: 'Cosmological and fine-tuning arguments that point to a Creator',
  description: "Explore two core arguments that many thinkers find compelling: the Kalam Cosmological Argument and fine-tuning.",
  cards: [
    { type: 'content', title: 'Welcome to Apologetics', subtitle: 'A reasoned defense of the hope we have', content: [
      "Apologetics comes from the Greek word 'apologia'—a reasoned defense.",
      '1 Peter 3:15 calls us to be ready to give reasons for our hope with gentleness and respect.',
      "In this lesson, you'll learn the structure of two key arguments for God and how to explain them clearly."
    ] },
    { type: 'content', title: 'The Kalam Cosmological Argument', content: [
      '1) Whatever begins to exist has a cause.',
      '2) The universe began to exist.',
      '3) Therefore, the universe has a cause.',
      'Modern cosmology (Big Bang, expansion) supports premise 2. The cause must transcend space, time, and matter.'
    ], highlight: 'If the universe began, it points to a Beginner.' },
    { type: 'content', title: "Why 'begins to exist' matters", content: [
      "The premise isn't 'everything has a cause' but 'whatever begins to exist has a cause.'",
      "God is eternal and doesn't begin to exist, so He doesn't need a cause.",
      'The universe began—so it is reasonable to ask for a cause.'
    ], highlight: 'Only things that begin need causes.' },
    { type: 'content', title: "Actual infinities and Hilbert's Hotel", content: [
      "If the past were actually infinite, we'd never arrive at today.",
      "Hilbert's Hotel illustrates paradoxes with actual infinities, suggesting an infinite regress is impossible."
    ], highlight: 'A finite past implies a beginning.' },
    { type: 'fillblank', prompt: 'Whatever ______ to exist has a cause.', correctAnswer: 'begins', explanation: "The Kalam's first premise is 'Whatever begins to exist has a cause.'" },
    { type: 'content', title: 'Quote: John Lennox', content: [
      '“Nonsense remains nonsense, even when talked by world‑famous scientists. The God hypothesis is more logical than its denial.”',
      '— Responding to claims that the universe came from “nothing”'
    ] },
    { type: 'content', title: 'The Fine-Tuning Argument', content: [
      'The universe is fine‑tuned for life with staggering precision.',
      '• Gravity: if altered by 1 part in 10^40, stars would not form.',
      '• Cosmological constant: exquisitely precise; tiny changes collapse or disperse the universe.',
      "• Strong nuclear force, electron‑proton ratio, carbon resonance—all set 'just right.'",
      'Taken together, these suggest design rather than accident.'
    ], highlight: 'The cosmos looks designed because it is designed.' },
    { type: 'matching', title: 'Match the constant to its description', pairs: [
      { term: 'Gravity', definition: 'If altered by 1 in 10^40, stars could not form' },
      { term: 'Cosmological constant', definition: 'Controls cosmic expansion; must be exquisitely precise' },
      { term: 'Strong nuclear force', definition: 'Binds nuclei; small changes prevent chemistry' },
      { term: 'Carbon resonance', definition: 'Energy level that enables carbon formation in stars' }
    ] },
    { type: 'quiz', question: "Your friend says: 'Science explains everything. We don't need God.'", options: [
      "Science explains how things work, not why they exist. Who designed the laws science studies?",
      "That's ridiculous. Everything screams design!",
      "Yeah, you're probably right. Faith is just a feeling."
    ], correctAnswer: 0, explanation: "Science and God answer different questions. Science is the 'how,' God is the 'why.' Lennox: God no more competes with science than Henry Ford with combustion laws." },
    { type: 'quiz', question: 'What are the three premises of the Kalam?', options: [
      "God exists; the Bible says so; therefore it's true.",
      'Everything has a cause; God is first cause; God exists.',
      'Whatever begins has a cause; the universe began; therefore the universe has a cause.',
      'The universe is complex; complexity needs design; God designed it.'
    ], correctAnswer: 2, explanation: 'Kalam: whatever begins to exist has a cause; the universe began; therefore the universe has a cause.' },
    { type: 'content', title: 'Common objections', content: [
      'Who made God? — Only things that begin need causes; God is eternal.',
      'Multiverse? — Speculative and itself requires fine‑tuned laws/initial conditions.',
      "We'll find a natural explanation — That assumes naturalism; inference to best explanation points to intelligence."
    ], highlight: 'Anticipate objections; answer with clarity and grace.' },
    { type: 'content', title: "This Week's Challenge", content: [
      'Watch Craig or Lennox explain Kalam or fine‑tuning. Share one insight with a friend.'
    ], highlight: 'Practice explaining your favorite argument in 90 seconds.' },
    { type: 'completion', title: 'Lesson Complete! 🎉', message: 'Great work finishing “The Case for God’s Existence.” Keep going—you’re building a strong apologetics foundation.', badge: { icon: '🛡️', name: 'Apologetics 1', description: 'Completed: The Case for God’s Existence' } }
  ]
};

export const lesson2Data = {
  id: 2,
  title: 'The Problem of Evil & Suffering',
  subtitle: 'Answering the toughest objection to faith',
  description: 'Address both logical and pastoral dimensions of evil and suffering.',
  cards: [
    { type: 'content', title: "The skeptic's challenge", subtitle: 'A head-and-heart question', content: [
      "Hume: If God can and wants to stop evil, why does evil exist?",
      'Evil is both an intellectual problem and a deeply personal pain.'
    ] },
    { type: 'content', title: 'Two forms: logical vs evidential', content: [
      'Logical: claims a contradiction between God and evil — free will and greater-goods remove the contradiction.',
      "Evidential: certain evils seem unlikely on theism — but we aren't positioned to know all God’s reasons."
    ], highlight: "We're limited creatures; we can't survey all possible reasons." },
    { type: 'content', title: 'The Free Will Defense', content: [
      'Genuine love requires freedom; freedom entails the possibility of wrong.',
      'A world with free agents capable of love and moral growth is better than a world of robots.'
    ] },
    { type: 'content', title: 'Soul‑making and greater‑good', content: [
      'Some virtues require hardship: courage requires danger; compassion requires need; perseverance requires trial.',
      "Genesis 50:20; Romans 5:3–5 frame suffering within God’s purposes."
    ], highlight: 'God can use evil for good without authoring evil.' },
    { type: 'quiz', question: 'Pastoral care scenario: What’s the wisest first response to suffering?', options: [
      'Offer a detailed theodicy and ask what they learned.',
      'Acknowledge the pain; express presence and point to the God who suffers with us.',
      'Say sin caused this specific event.'
    ], correctAnswer: 1, explanation: "Lead with compassion. Keller: Christianity gives the deepest answer — God Himself suffered." },
    { type: 'content', title: 'The Cross: God with us', content: [
      'Christianity offers not only arguments but a God who suffers with us.',
      "At the cross, God in Christ entered our pain. We don’t know all reasons, but we know His heart."
    ], highlight: 'God is not distant from suffering.' },
    { type: 'quiz', question: 'According to the free will defense, why does God allow evil?', options: [
      "God isn't powerful enough",
      'Genuine love and moral goodness require freedom, which includes the possibility of evil',
      'Evil is an illusion'
    ], correctAnswer: 1, explanation: 'Love must be freely chosen; freedom entails the possibility of evil.' },
    { type: 'content', title: 'Reflection', content: [
      'Have you experienced suffering that challenged your faith? What helped you endure?'
    ] },
    { type: 'completion', title: 'Lesson Complete! 🎉', message: 'You addressed evil with both rigor and empathy.', badge: { icon: '🛡️', name: 'Apologetics 2', description: 'Completed: Evil & Suffering' } }
  ]
};

export const lesson3Data = {
  id: 3,
  title: 'The Resurrection of Jesus',
  subtitle: "Historical evidence for Christianity's central claim",
  description: 'Examine minimal facts, early testimony, empty tomb, and transformed witnesses.',
  cards: [
    { type: 'content', title: 'The central claim', content: [
      '1 Cor 15:14: If Christ is not raised, faith is futile.',
      'If true, Jesus is Lord; if false, Christianity collapses.'
    ] },
    { type: 'content', title: 'Minimal facts approach', content: [
      '1) Jesus died by crucifixion.',
      '2) Disciples believed they saw the risen Jesus.',
      '3) Paul converted after an experience he took as an appearance.',
      '4) James (skeptic) converted.'
    ], highlight: 'Start with what skeptics grant; ask which explanation best fits.' },
    { type: 'content', title: 'Early testimony timeline', subtitle: 'Why legend doesn’t fit', content: [
      '1 Cor 15:3–7 is an early creed (within 3–5 years).',
      'Acts preserves early proclamations; Gospels draw on earlier traditions.'
    ] },
    { type: 'quiz', question: 'Professor claims “resurrection is a late legend.” What’s the best reply?', options: [
      'We have very early testimony (1 Cor 15 creed), far too soon for legend; and the empty tomb lacked a body.',
      "You’re insulting my Lord!",
      'We just take it on faith.'
    ], correctAnswer: 0, explanation: 'Legends take generations; early testimony plus empty tomb undercut legend theory.' },
    { type: 'content', title: 'The empty tomb', content: [
      'Burial by Joseph of Arimathea is multiply attested.',
      'Women as first witnesses would be counter-productive if fabricated.',
      'Earliest Jewish claim alleges theft — implicitly concedes the tomb was empty.'
    ], highlight: 'The empty tomb is historically robust.' },
    { type: 'content', title: 'Transformed disciples', content: [
      'From fear to bold witness; people die for what they think is true, not what they know is false.',
      'Conspiracy and hallucination theories fail to explain the data.'
    ] },
    { type: 'quiz', question: 'Which is NOT a minimal fact?', options: [
      'Jesus died by crucifixion',
      'Disciples believed they saw the risen Jesus',
      'Roman guards saw angels',
      'Paul converted after an experience he took as an appearance'
    ], correctAnswer: 2, explanation: "Guards seeing angels isn't part of the cross-skeptic consensus." },
    { type: 'content', title: 'This Week’s Challenge', content: [
      'Watch Craig or Habermas present the minimal facts. Practice explaining them succinctly.'
    ] },
    { type: 'completion', title: 'Lesson Complete! 🎉', message: 'Historical bedrock examined with clarity.', badge: { icon: '🛡️', name: 'Apologetics 3', description: 'Completed: Resurrection' } }
  ]
};

export const lesson4Data = {
  id: 4,
  title: 'Science & Faith: Friends or Foes?',
  subtitle: "The Big Bang, fine-tuning, and God's cosmos",
  description: 'Modern science points toward a Creator more than many think.',
  cards: [
    { type: 'content', title: 'The conflict myth', content: [
      "Most scientific pioneers (Newton, Kepler, Faraday, Maxwell) were Christians who saw science as thinking God's thoughts after Him."
    ] },
    { type: 'content', title: 'Quote: John Lennox', content: [
      '“Nonsense remains nonsense even when talked by world‑famous scientists.”',
      'The more we learn, the more a Creator hypothesis remains credible.'
    ] },
    { type: 'content', title: 'The Big Bang and creation', content: [
      'Big Bang implies a beginning to space-time and matter — a strong consonance with Genesis 1:1.'
    ], highlight: "The Big Bang is consistent with 'In the beginning, God created.'" },
    { type: 'content', title: 'Cosmic fine‑tuning', content: [
      'Dozens of constants (gravity, cosmological constant, etc.) require exquisite calibration for life.'
    ], highlight: 'The universe looks rigged for life.' },
    { type: 'quiz', question: 'What is the fine‑tuning argument?', options: [
      'The universe is old, so it evolved naturally',
      'Physical constants are precisely calibrated for life, suggesting design',
      'Scientists fine‑tuned their instruments',
      'Evolution fine‑tunes organisms'
    ], correctAnswer: 1, explanation: 'The precision of constants suggests intentional design.' },
    { type: 'content', title: 'DNA: The language of God', content: [
      'DNA is a digital code (A, T, G, C) that encodes biological information. In our experience, information comes from intelligence.'
    ], highlight: 'Information points to an Informer.' },
    { type: 'quiz', question: 'Class claim: “Evolution explains everything.” Best reply?', options: [
      'Evolution explains development, not origin of life or the fine‑tuned cosmos; DNA information remains to be explained.',
      'Evolution is a lie!',
      'Science has all the answers.'
    ], correctAnswer: 0, explanation: 'Evolution is about biological changes; origin, information, and physics still need explanation.' },
    { type: 'completion', title: 'Lesson Complete! 🎉', message: 'Science and faith explored as complementary.', badge: { icon: '🛡️', name: 'Apologetics 4', description: 'Completed: Science & Faith' } }
  ]
};

export const lesson5Data = {
  id: 5,
  title: 'The Reliability of Scripture',
  subtitle: 'Can we trust the Bible?',
  description: 'Manuscripts, archaeology, fulfilled prophecy, and textual criticism.',
  cards: [
    { type: 'content', title: "The skeptic's attack", content: [
      "'Corrupted text!' 'Contradictions!' 'Myth!' Let's weigh the evidence."
    ] },
    { type: 'content', title: 'Manuscript evidence', content: [
      '≈5,800 Greek NT manuscripts; 10,000+ Latin; thousands more. Earliest fragments within decades.'
    ], highlight: "No ancient work rivals the Bible's attestation." },
    { type: 'content', title: 'Archaeological confirmations', content: [
      'Hittites, Pool of Siloam, Pontius Pilate, House of David — once doubted, later confirmed.'
    ], highlight: 'Archaeology consistently confirms biblical history.' },
    { type: 'quiz', question: 'How many Greek NT manuscripts exist?', options: [
      'About 50', 'Around 650', 'Approximately 5,800', "We don't have any"
    ], correctAnswer: 2, explanation: '≈5,800 Greek manuscripts + many others.' },
    { type: 'content', title: 'Fulfilled prophecy', content: [
      'Jesus fulfilled numerous OT prophecies (Mic 5:2, Isa 7:14, Ps 22, Zech 11:12–13).'
    ], highlight: "Hanegraaff: Prophecy is God's signature on Scripture." },
    { type: 'content', title: 'Textual criticism', content: [
      "Comparing manuscripts recovers the original with high confidence; differences are mostly minor and don't affect doctrine."
    ], highlight: 'More manuscripts → more certainty.' },
    { type: 'content', title: 'Reflection', content: [
      'How does manuscript and archaeology evidence strengthen your confidence in Scripture?'
    ] },
    { type: 'completion', title: 'Lesson Complete! 🎉', message: 'Scripture’s reliability considered on multiple fronts.', badge: { icon: '🛡️', name: 'Apologetics 5', description: 'Completed: Reliability of Scripture' } }
  ]
};

export const lesson6Data = {
  id: 6,
  title: 'The Moral Argument for God',
  subtitle: 'Where do right and wrong come from?',
  description: 'Objective morality points to a Moral Lawgiver.',
  cards: [
    { type: 'content', title: 'The universal moral sense', content: [
      "Across cultures: 'Is torturing babies for fun wrong?' Answer is 'yes.'"
    ] },
    { type: 'content', title: 'Formal argument', content: [
      "1) If God doesn't exist, objective moral values don't exist.",
      '2) Objective moral values do exist.',
      '3) Therefore, God exists.'
    ], highlight: "Atheism explains feelings, not objective moral facts." },
    { type: 'content', title: 'Euthyphro dilemma answered', content: [
      "Goodness flows from God's nature — neither arbitrary command nor a standard above God."
    ] },
    { type: 'quiz', question: 'Relativism says morality is preference. What follows?', options: [
      'You cannot condemn atrocities as truly wrong',
      'It enhances moral accountability',
      'It proves atheism',
      'It removes the need for justice'
    ], correctAnswer: 0, explanation: 'If mere preference, nothing is objectively wrong — which we all know is false.' },
    { type: 'content', title: 'Evolution and morality', content: [
      'Evolution may explain instincts, not objective obligations — you can’t derive “ought” from “is.”'
    ] },
    { type: 'completion', title: 'Lesson Complete! 🎉', message: 'Moral knowledge seen as a signpost to God.', badge: { icon: '🛡️', name: 'Apologetics 6', description: 'Completed: Moral Argument' } }
  ]
};

export const lesson7Data = {
  id: 7,
  title: 'Jesus: The Only Way?',
  subtitle: 'Addressing religious pluralism and exclusivity',
  description: 'Why Christian exclusivity is humble and true.',
  cards: [
    { type: 'content', title: 'The scandal of exclusivity', content: [
      'John 14:6 — Jesus claims uniqueness.'
    ] },
    { type: 'content', title: "Lewis's trilemma", content: [
      "Jesus is liar, lunatic, or Lord — 'great moral teacher' doesn’t fit the claims."
    ] },
    { type: 'quiz', question: 'Pluralism says “all paths lead to the same God.” Best reply?', options: [
      'Religions make contradictory claims; they cannot all be true. Truth is exclusive by nature.',
      'Maybe all are half true',
      'All are false'
    ], correctAnswer: 0, explanation: 'Mutually exclusive claims cannot all be true.' },
    { type: 'content', title: 'Responding with grace', content: [
      "Exclusivity isn't arrogance; it’s acknowledging we can’t save ourselves and pointing to Christ."
    ] },
    { type: 'completion', title: 'Lesson Complete! 🎉', message: 'Exclusivity explained with humility.', badge: { icon: '🛡️', name: 'Apologetics 7', description: 'Completed: Jesus the Only Way' } }
  ]
};

export const lesson8Data = {
  id: 8,
  title: 'Engaging Skeptics with Grace',
  subtitle: 'Your apologetics toolkit for real conversations',
  description: 'Practical conversations with truth and love.',
  cards: [
    { type: 'content', title: 'Goal of apologetics', content: [
      '1 Peter 3:15–16 — be ready, with gentleness and respect.'
    ] },
    { type: 'content', title: 'Common objections & responses', content: [
      'Blind faith? — Faith is trust based on evidence (resurrection, arguments, science).',
      'Religion harms? — Humans misuse everything; judge Christianity by Jesus.'
    ] },
    { type: 'content', title: 'Ask good questions', content: [
      'What do you mean? How did you conclude that? What would change your mind?'
    ] },
    { type: 'quiz', question: '“No evidence for God.” Best first move?', options: [
      'Ask what evidence they would accept; then offer cosmological, fine‑tuning, resurrection lines of evidence.',
      'Accuse them of loving sin',
      'Concede there is none'
    ], correctAnswer: 0, explanation: 'Lead with curiosity, then point to specific evidence.' },
    { type: 'content', title: 'Toolkit summary', content: [
      "1) God's existence: cosmological, fine‑tuning, moral.",
      '2) Evil and suffering: free will, greater good, the Cross.',
      '3) Resurrection: minimal facts, empty tomb, transformation.',
      '4) Science: Big Bang, fine‑tuning, DNA information.',
      '5) Scripture: manuscripts, archaeology.',
      '6) Exclusivity: Jesus’s unique claims.'
    ], highlight: 'Use truth with grace.' },
    { type: 'completion', title: 'All lessons complete! 🎉', message: 'You now have a robust, gracious apologetics toolkit. Keep learning and sharing.', badge: { icon: '🛡️', name: 'Apologetics Mastery', description: 'Completed: Apologetics Study Guide' } }
  ]
};
// Apologetics Interactive Lesson Data
// 8 lessons covering Christian apologetics from Craig, Lennox, Lewis, Keller, Sproul, Huff, Hanegraaff

export const lesson1Data = {
  id: 1,
  title: "The Case for God's Existence",
  subtitle: "Cosmological and fine-tuning arguments that point to a Creator",
  description: "Explore two core arguments that many thinkers find compelling: the Kalam Cosmological Argument (the universe began to exist) and the Fine‑Tuning Argument (the universe is calibrated for life).",
  cards: [
    {
      type: "info",
      title: "Welcome to Apologetics",
      subtitle: "A reasoned defense of the hope we have",
      content: [
        "Apologetics comes from the Greek word 'apologia'—a reasoned defense.",
        "1 Peter 3:15 calls us to be ready to give reasons for our hope with gentleness and respect.",
        "In this lesson, you'll learn the structure of two key arguments for God and how to explain them clearly."
      ],
      xp: 10
    },
    {
      type: "teaching",
      title: "The Kalam Cosmological Argument",
      content: [
        "William Lane Craig revitalized this ancient argument:",
        "1) Whatever begins to exist has a cause.",
        "2) The universe began to exist.",
        "3) Therefore, the universe has a cause.",
        "Modern cosmology (Big Bang, expanding universe) supports premise 2. If the universe began, the cause must be beyond space, time, and matter—and powerful enough to bring the universe into being."
      export const lesson4Data = {
        id: 4,
        title: "Science & Faith: Friends or Foes?",
        subtitle: "The Big Bang, fine-tuning, and God's cosmos",
        description: "Many think science has disproven God. But what if modern science actually points toward a Creator? Explore how the Big Bang, cosmic fine-tuning, and DNA point to an intelligent Designer.",
        cards: [
          {
            type: "info",
            title: "The Conflict Myth",
            content: "Popular culture says science and religion are at war. But history tells a different story. Most scientific pioneers (Newton, Galileo, Kepler, Faraday, Pasteur, Maxwell) were Christians who saw science as 'thinking God's thoughts after Him.' The conflict is a modern myth.",
            xp: 10
          },
          {
            type: "quote",
            author: "John Lennox",
            text: "Nonsense remains nonsense even when talked by world-famous scientists. The more we get to know about our universe, the more the hypothesis that there is a Creator gains in credibility.",
            context: "Oxford mathematician and philosopher of science",
            xp: 10
          },
          {
            type: "teaching",
            title: "The Big Bang and Creation",
            content: "In the beginning, the universe exploded into existence from nothing. Sound familiar? The Big Bang confirms Genesis 1:1—the universe had a beginning. Atheist scientists initially RESISTED this because it sounded too much like creation. Lennox notes: 'The Bible said it first, and science caught up 3,000 years later.'",
            keyPoint: "The Big Bang is a scientific confirmation of 'In the beginning, God created.'",
            xp: 10
          },
          {
            type: "teaching",
            title: "Cosmic Fine-Tuning",
            content: "Over 200 parameters must be fine-tuned for life: gravity, electromagnetic force, the cosmological constant, the ratio of electrons to protons, carbon resonance levels. Change any slightly and life is impossible. Odds of this happening by chance? Astronomer Fred Hoyle (an atheist!) said it looked like 'a superintellect has monkeyed with physics.'",
            keyPoint: "The universe looks rigged for life because it was designed for life.",
            xp: 10
          },
          {
            type: "scenario",
            title: "University Science Class",
            question: "Your biology professor says: 'Evolution proves God is unnecessary. Natural selection explains everything.' Your response?",
            options: [
              {
                text: "Evolution explains the development of life, not its origin or the laws that govern it. Who designed DNA? Who fine-tuned the universe so evolution could even happen?",
                isCorrect: true,
                feedback: "Perfect! Francis Collins (Christian, led Human Genome Project) says evolution is HOW God created. Natural selection doesn't replace God—it reveals His method. The question is: where did the information in DNA come from? Information always comes from intelligence.",
                xp: 15
              },
              {
                text: "Evolution is a lie! The Bible says God created everything in 6 days!",
                isCorrect: false,
                feedback: "While you may hold to young-earth creationism, this approach alienates rather than engages. Many Christians (like Francis Collins, John Lennox) accept evolution as God's tool. Focus on what evolution CAN'T explain: origin of life, information in DNA, cosmic fine-tuning."
              },
              {
                text: "You're probably right. Science has all the answers.",
                isCorrect: false,
                feedback: "Don't give up! Science is wonderful but limited—it can't answer 'why' questions, moral questions, or questions about meaning. And evolution doesn't explain the origin of life, the fine-tuning of physics, or the information in DNA."
              }
            ]
          },
          {
            type: "teaching",
            title: "DNA: The Language of God",
            content: "Francis Collins calls DNA 'the language of God.' DNA is a digital code—4 chemical letters (A, T, G, C) spelling out instructions for every living thing. The info in one human genome would fill 1,000 encyclopedia volumes. Where does information come from? In our experience, ALWAYS from intelligence. Why would DNA be different?",
            keyPoint: "Information requires an Informer. DNA points to a Divine Programmer.",
            xp: 10
          },
          {
            type: "quote",
            author: "Francis Collins",
            text: "When you make a breakthrough in science, it is a moment of discovery of something that God knew all along. It is a deeply worshipful experience.",
            // Apologetics Interactive Lesson Data
            // 8 lessons covering Christian apologetics from Craig, Lennox, Lewis, Keller, Sproul, Huff, Hanegraaff

            export const lesson1Data = {
              id: 1,
              title: "The Case for God's Existence",
              subtitle: "Cosmological and fine-tuning arguments that point to a Creator",
              description: "Explore two core arguments that many thinkers find compelling: the Kalam Cosmological Argument (the universe began to exist) and the Fine‑Tuning Argument (the universe is calibrated for life).",
              cards: [
                {
                  type: "info",
                  title: "Welcome to Apologetics",
                  subtitle: "A reasoned defense of the hope we have",
                  content: [
                    "Apologetics comes from the Greek word 'apologia'—a reasoned defense.",
                    "1 Peter 3:15 calls us to be ready to give reasons for our hope with gentleness and respect.",
                    "In this lesson, you'll learn the structure of two key arguments for God and how to explain them clearly."
                  ]
                },
                {
                  type: "teaching",
                  title: "The Kalam Cosmological Argument",
                  content: [
                    "William Lane Craig revitalized this ancient argument:",
                    "1) Whatever begins to exist has a cause.",
                    "2) The universe began to exist.",
                    "3) Therefore, the universe has a cause.",
                    "Modern cosmology (Big Bang, expanding universe) supports premise 2. If the universe began, the cause must be beyond space, time, and matter—and powerful enough to bring the universe into being."
                  ],
                  keyPoint: "If the universe began, it points to a Beginner."
                },
                {
                  type: "teaching",
                  title: "Why 'begins to exist' matters",
                  content: [
                    "The premise isn't 'everything has a cause' but 'whatever begins to exist has a cause.'",
                    "God is eternal and doesn't begin to exist, so He doesn't need a cause.",
                    "The universe, however, did begin—so it's reasonable to ask for a cause."
                  ],
                  keyPoint: "Only things that begin need causes. An eternal God does not."
                },
                {
                  type: "teaching",
                  title: "Actual infinities and Hilbert's Hotel",
                  content: [
                    "Philosophically, traversing an actual infinite past is problematic. If the past were actually infinite, we'd never arrive at 'today.'",
                    "Hilbert's Hotel is a thought experiment showing the paradoxes that arise with actual infinities (like a 'full' hotel still having room for infinitely many guests).",
                    "These paradoxes suggest an infinite regress of past events is impossible—again pointing to a beginning."
                  ],
                  keyPoint: "An actually infinite past leads to paradox; a finite past implies a beginning."
                },
                {
                  type: 'fillblank',
                  prompt: "Whatever ______ to exist has a cause.",
                  correctAnswer: 'begins',
                  explanation: "The Kalam's first premise is 'Whatever begins to exist has a cause.'"
                },
                {
                  type: "quote",
                  author: "John Lennox",
                  text: "Nonsense remains nonsense, even when talked by world‑famous scientists. The 'God hypothesis' is more logical than its denial.",
                  context: "Responding to claims that the universe came from 'nothing'"
                },
                {
                  type: "teaching",
                  title: "The Fine-Tuning Argument",
                  content: [
                    "The universe is fine‑tuned for life with staggering precision.",
                    "• Gravity: if altered by 1 part in 10^40, stars wouldn't form.",
                    "• Cosmological constant: so precise that a tiny change would cause a rapid collapse or endless dispersal of matter.",
                    "• Strong nuclear force, electron‑proton ratio, carbon resonance levels—all set 'just right.'",
                    "Taken together, these suggest design rather than accident."
                  ],
                  keyPoint: "The cosmos looks designed because it IS designed."
                },
                {
                  type: 'matching',
                  title: 'Match the constant to its description',
                  pairs: [
                    { term: 'Gravity', definition: 'If altered by 1 in 10^40, stars could not form' },
                    { term: 'Cosmological constant', definition: 'Controls the universe’s expansion; must be exquisitely precise' },
                    { term: 'Strong nuclear force', definition: 'Binds atomic nuclei; small changes prevent chemistry' },
                    { term: 'Carbon resonance', definition: 'Energy level that enables carbon formation in stars' }
                  ]
                },
                {
                  type: "scenario",
                  title: "Coffee Shop Challenge",
                  question: "Your friend says: 'Science has explained everything. We don't need God anymore.' How do you respond?",
                  options: [
                    {
                      text: "Science explains HOW things work, not WHY they exist. Who designed the laws science studies?",
                      isCorrect: true,
                      feedback: "Excellent! Science and God answer different questions. Science is the 'how,' God is the 'why.' John Lennox says, 'God no more competes with science than Henry Ford competes with the laws of combustion.'"
                    },
                    {
                      text: "That's ridiculous. Look around—everything screams design!",
                      isCorrect: false,
                      feedback: "While you're right about design, this response sounds defensive. Start by affirming science, then show how it actually points TO God. Be winsome, not combative."
                    },
                    {
                      text: "Yeah, you're probably right. Faith is just a feeling anyway.",
                      isCorrect: false,
                      feedback: "Don't give up! Christianity is intellectually robust. Faith isn't blind—it's trust based on evidence. The fine-tuning of the universe is powerful evidence for a Designer."
                    }
                  ]
                },
                {
                  type: "quiz",
                  question: "What are the three premises of the Kalam Cosmological Argument?",
                  options: [
                    "1) God exists. 2) The Bible says so. 3) Therefore it's true.",
                    "1) Everything has a cause. 2) God is the first cause. 3) God exists.",
                    "1) Whatever begins has a cause. 2) The universe began. 3) The universe has a cause.",
                    "1) The universe is complex. 2) Complexity requires design. 3) God designed it."
                  ],
                  correctAnswer: 2,
                  explanation: "The Kalam argument: (1) Whatever BEGINS to exist has a cause, (2) The universe began to exist, (3) Therefore the universe has a cause. This cause must be timeless, spaceless, immaterial, and powerful—matching God's description."
                },
                {
                  type: "reflection",
                  title: "Personal Application",
                  prompt: "Which argument for God's existence resonates most with you: cosmological (the universe's beginning) or teleological (fine‑tuning/design)? Why? How would you explain it in 90 seconds?"
                },
                {
                  type: "teaching",
                  title: "Common Objections",
                  content: [
                    "Objection: 'Who made God?' Response: God is eternal and uncaused. Only things that begin need a cause.",
                    "Objection: 'The multiverse explains fine‑tuning.' Response: The multiverse is speculative and doesn’t remove the need for fine‑tuning. You’d still need an explanation for the laws and initial conditions that generate the multiverse.",
                    "Objection: 'We’ll find a natural explanation.' Response: That assumes naturalism. The argument is that the best explanation for the data is an intelligent cause."
                  ],
                  keyPoint: "Good apologetics anticipates objections and has gracious answers ready."
                },
                {
                  type: "action",
                  title: "This Week's Challenge",
                  task: "Read one article or watch one video by William Lane Craig or John Lennox on the cosmological or fine-tuning argument. Share one key insight with a friend."
                }
              ],
              summary: "You've learned powerful arguments for God's existence that convince many skeptics. The universe's beginning and fine-tuning point compellingly to a Creator. Remember: apologetics plants seeds. Trust the Holy Spirit to bring growth.",
              nextSteps: "Next lesson: We'll tackle the toughest objection to faith—the problem of evil and suffering."
            };
        {
          text: "You're calling my Lord a liar! That's offensive!",
          isCorrect: false,
          feedback: "Understandable passion, but this shuts down conversation. Instead, engage the argument. Show why the legend theory fails on the evidence. Stay calm and gracious."
        },
        {
          text: "Well, I guess we just have to take it on faith. There's no real proof.",
          isCorrect: false,
          feedback: "Don't concede too quickly! The resurrection has remarkable historical support. While we can't 'prove' it scientifically (you can't repeat history in a lab), the evidence is strong by historical standards."
        }
      ]
    },
    {
      type: "teaching",
      title: "The Empty Tomb",
      content: "Three facts support the empty tomb: (1) The burial by Joseph of Arimathea is multiply attested, (2) Women discovered the empty tomb—if you're inventing a story in that culture, you don't use women as your star witnesses (they weren't considered reliable), (3) The earliest Jewish response was to claim the disciples stole the body—implicitly admitting the tomb was empty.",
      keyPoint: "The empty tomb is one of the best-attested facts in ancient history.",
      xp: 10
    },
    {
      type: "quote",
      author: "N.T. Wright",
      text: "The only explanation that fits all the evidence is the one the first Christians themselves gave: Jesus really did rise from the dead.",
      context: "Historian and New Testament scholar",
      xp: 10
    },
    {
      type: "teaching",
      title: "The Transformation of the Disciples",
      content: "The disciples went from terrified deserters hiding behind locked doors to bold proclaimers willing to die for their message. People die for lies they think are true, but they don't die for lies they KNOW are false. If they'd stolen the body, they'd know the resurrection was a hoax. Yet they died proclaiming it. Why?",
      keyPoint: "The disciples' transformation demands an explanation. The resurrection provides it.",
      xp: 10
    },
    {
      type: "quiz",
      question: "Which of these is NOT one of the 'minimal facts' accepted by most scholars?",
      options: [
        "Jesus died by crucifixion",
        "The disciples believed they saw the risen Jesus",
        "The Roman soldiers guarding the tomb saw angels",
        "Paul converted after an experience he believed was the risen Christ"
      ],
      correctAnswer: 2,
      explanation: "The Roman guards seeing angels is in Matthew's Gospel but not a 'minimal fact' accepted across the scholarly spectrum. The minimal facts stick to what even skeptical scholars grant: Jesus's death, disciples' experiences, Paul's conversion, James's conversion, and the empty tomb.",
      xp: 10
    },
    {
      type: "teaching",
      title: "Alternative Theories Fall Short",
      content: "SWOON THEORY: Jesus didn't really die. Problem: Roman crucifixion was brutally efficient. Plus, a barely-alive Jesus wouldn't inspire resurrection faith. HALLUCINATION: Disciples hallucinated. Problem: Hallucinations are individual; multiple people don't share the same hallucination. Plus, the empty tomb. CONSPIRACY: Disciples lied. Problem: They died for their 'lie.' Martyrs die for beliefs, not known fabrications.",
      keyPoint: "Every alternative to the resurrection crumbles under scrutiny.",
      xp: 10
    },
    {
      type: "reflection",
      title: "Personal Application",
      prompt: "How does the historical evidence for the resurrection strengthen your faith? How might you share this with someone who thinks Christianity is 'blind faith'?",
      xp: 10
    },
    {
      type: "action",
      title: "This Week's Challenge",
      task: "Watch William Lane Craig or Gary Habermas present the minimal facts argument (YouTube). Practice explaining the 4-5 minimal facts to a friend.",
      xp: 15
    }
  ],
  summary: "The resurrection is not a leap in the dark—it's a step into the light of historical evidence. The minimal facts, the empty tomb, and the disciples' transformation all point to Jesus rising from the dead. This is the bedrock of Christian faith.",
  nextSteps: "Next lesson: Science & Faith—Are they really at war?"
};

export const lesson4Data = {
  id: 4,
  title: "Science & Faith: Friends or Foes?",
  subtitle: "The Big Bang, fine-tuning, and God's cosmos",
  description: "Many think science has disproven God. But what if modern science actually points toward a Creator? Explore how the Big Bang, cosmic fine-tuning, and DNA point to an intelligent Designer.",
  cards: [
    {
      type: "info",
      title: "The Conflict Myth",
      content: "Popular culture says science and religion are at war. But history tells a different story. Most scientific pioneers (Newton, Galileo, Kepler, Faraday, Pasteur, Maxwell) were Christians who saw science as 'thinking God's thoughts after Him.' The conflict is a modern myth.",
      xp: 10
        subtitle: "A head-and-heart question",
        content: [
          "David Hume framed it memorably: If God is willing to prevent evil but not able, He’s not omnipotent. If able but not willing, He’s not good. If both, why is there evil?",
          "Evil is both an intellectual and deeply personal problem. This lesson addresses both dimensions—with truth and compassion."
        ],
    {
      type: "quote",
      author: "John Lennox",
      text: "Nonsense remains nonsense even when talked by world-famous scientists. The more we get to know about our universe, the more the hypothesis that there is a Creator gains in credibility.",
      context: "Oxford mathematician and philosopher of science",
        content: [
          "Logical problem: God and evil are claimed to be incompatible. Response: Free will and greater‑good reasons show no contradiction.",
          "Evidential problem: Given the amount and kinds of evil, is God unlikely? Response: We’re not in a position to see all God’s reasons; limited creatures can’t judge infinite wisdom.",
        ],
    },
    {
      type: "teaching",
      title: "The Big Bang and Creation",
      content: "In the beginning, the universe exploded into existence from nothing. Sound familiar? The Big Bang confirms Genesis 1:1—the universe had a beginning. Atheist scientists initially RESISTED this because it sounded too much like creation. Lennox notes: 'The Bible said it first, and science caught up 3,000 years later.'",
      keyPoint: "The Big Bang is a scientific confirmation of 'In the beginning, God created.'",
        content: [
          "Genuine love requires freedom; freedom entails the possibility of wrong.",
          "A world with free agents capable of love and moral growth is better than a world of robots.",
          "Therefore, the possibility of moral evil is a necessary condition of a morally significant world."
        ],
    },
    {
      type: "teaching",
      title: "Cosmic Fine-Tuning",
      content: "Over 200 parameters must be fine-tuned for life: gravity, electromagnetic force, the cosmological constant, the ratio of electrons to protons, carbon resonance levels. Change any slightly and life is impossible. Odds of this happening by chance? Astronomer Fred Hoyle (an atheist!) said it looked like 'a superintellect has monkeyed with physics.'",
      keyPoint: "The universe looks rigged for life because it was designed for life.",
      xp: 10
    },
    {
      type: "scenario",
      title: "University Science Class",
      question: "Your biology professor says: 'Evolution proves God is unnecessary. Natural selection explains everything.' Your response?",
      options: [
        content: [
          "Some virtues require hardship: courage requires danger; compassion requires need; perseverance requires trial.",
          "Scripture frames suffering within God’s purposes (Genesis 50:20; Romans 5:3–5).",
          "God can sovereignly use evil without authoring it."
        ],
          text: "Evolution explains the development of life, not its origin or the laws that govern it. Who designed DNA? Who fine-tuned the universe so evolution could even happen?",
          isCorrect: true,
          feedback: "Perfect! Francis Collins (Christian, led Human Genome Project) says evolution is HOW God created. Natural selection doesn't replace God—it reveals His method. The question is: where did the information in DNA come from? Information always comes from intelligence.",
          xp: 15
        },
        {
          text: "Evolution is a lie! The Bible says God created everything in 6 days!",
          isCorrect: false,
          feedback: "While you may hold to young-earth creationism, this approach alienates rather than engages. Many Christians (like Francis Collins, John Lennox) accept evolution as God's tool. Focus on what evolution CAN'T explain: origin of life, information in DNA, cosmic fine-tuning."
        },
        {
          text: "You're probably right. Science has all the answers.",
          isCorrect: false,
          feedback: "Don't give up! Science is wonderful but limited—it can't answer 'why' questions, moral questions, or questions about meaning. And evolution doesn't explain the origin of life, the fine-tuning of physics, or the information in DNA."
        }
      ]
    },
    {
      type: "teaching",
      title: "DNA: The Language of God",
      content: "Francis Collins calls DNA 'the language of God.' DNA is a digital code—4 chemical letters (A, T, G, C) spelling out instructions for every living thing. The info in one human genome would fill 1,000 encyclopedia volumes. Where does information come from? In our experience, ALWAYS from intelligence. Why would DNA be different?",
      keyPoint: "Information requires an Informer. DNA points to a Divine Programmer.",
      xp: 10
    },
    {
      type: "quote",
      author: "Francis Collins",
      text: "When you make a breakthrough in science, it is a moment of discovery of something that God knew all along. It is a deeply worshipful experience.",
        title: "The Cross: God with us in suffering",
        content: [
          "Christianity offers not only arguments but a God who suffers with us.",
          "At the cross, God in Christ entered our pain. We don't know all of God's reasons, but we know His heart.",
          "This doesn’t answer every 'why', but it gives the deepest 'who'—the Suffering Servant with us."
        ],
        keyPoint: "God is not distant from suffering—He entered it.",
    {
      type: "quiz",
      question: "What is the fine-tuning argument?",
      options: [
        "The universe is very old, so it must have evolved naturally",
        "Over 200 physical constants are precisely calibrated for life, suggesting intentional design",
        "Scientists have fine-tuned their instruments to detect God",
        "Evolution fine-tunes organisms to their environments"
      ],
      correctAnswer: 1,
      explanation: "The fine-tuning argument points out that dozens of physical constants (gravity, electromagnetic force, cosmological constant, etc.) must be precisely calibrated—often to dozens of decimal places—for life to be possible. This precision suggests design, not accident.",
      xp: 10
    },
    {
      type: "teaching",
      title: "Science's Limits",
      content: "Science is wonderful but limited. It can tell you HOW things work, not WHY they exist. It can describe love neurologically but not tell you if love is meaningful. It can't answer: Why is there something rather than nothing? Is there purpose to existence? Are humans valuable? For these, you need philosophy, theology—and God.",
      keyPoint: "Science answers 'how.' God answers 'why.' We need both.",
      xp: 10
    },
    {
      type: "reflection",
      title: "Personal Application",
      prompt: "How has this lesson changed your view of the relationship between science and faith? How might you explain to someone that belief in God is scientifically reasonable?",
      xp: 10
    },
    {
      type: "action",
      title: "This Week's Challenge",
      task: "Watch John Lennox debate an atheist scientist (many on YouTube). Note how he graciously engages scientific objections while defending faith. Or read Francis Collins's 'The Language of God.'",
      xp: 15
    }
  ],
  summary: "Science and faith aren't enemies—they're complementary. The Big Bang, fine-tuning, and DNA all point toward an intelligent Designer. As Lennox says, 'God is not a God of the gaps but a God of the whole show.'",
  nextSteps: "Next lesson: The Reliability of Scripture—Can we trust the Bible?"
};

export const lesson5Data = {
  id: 5,
  title: "The Reliability of Scripture",
  subtitle: "Can we trust the Bible?",
  description: "Examine manuscript evidence, archaeological discoveries, fulfilled prophecy, and textual criticism. Learn why the Bible is the most reliable ancient document we have.",
  cards: [
    {
      type: "info",
      title: "The Skeptic's Attack",
      content: "Critics claim: 'The Bible has been corrupted over centuries!' 'It contradicts itself!' 'It's just ancient mythology!' Are these charges true? Or is the Bible more reliable than any other ancient document? Let's look at the evidence.",
      xp: 10
        content: [
          "Paul wrote: 'If Christ has not been raised, our preaching is useless and so is your faith' (1 Cor 15:14).",
          "The resurrection is the linchpin of Christianity. If false, the faith collapses; if true, it confirms Jesus as Lord."
        ],
    {
      type: "teaching",
      title: "Manuscript Evidence",
      content: "The New Testament has ~5,800 Greek manuscripts, 10,000+ Latin, thousands more in other languages. Compare: Homer's Iliad has ~650 manuscripts. Caesar's Gallic Wars? 10 manuscripts. The NT is the most well-attested ancient document by far. And the earliest fragments date to within decades of the originals.",
      keyPoint: "No other ancient text comes close to the Bible's manuscript evidence.",
        content: [
          "Gary Habermas and William Lane Craig argue from facts widely accepted by scholars (including skeptics):",
          "1) Jesus died by crucifixion.",
          "2) The disciples believed they saw the risen Jesus.",
          "3) Paul, a persecutor, converted after an experience he took as an appearance of the risen Jesus.",
          "4) James, once skeptical, converted.",
          "How best to explain these?"
        ],
    },
    {
      type: "quote",
      {
        type: 'content',
        title: 'Early testimony timeline',
        subtitle: 'Why “legend” doesn’t fit',
        content: [
          "1 Corinthians 15:3–7 preserves an early creed many date to within 3–5 years of the crucifixion.",
          "Acts contains early proclamation summaries. The Gospels draw on even earlier traditions.",
          "This is far too early for legends to develop and dominate all independent sources."
        ]
      },
      author: "F.F. Bruce",
      text: "The evidence for our New Testament writings is ever so much greater than the evidence for many writings of classical authors, the authenticity of which no one dreams of questioning.",
      context: "Biblical scholar and textual critic",
      xp: 10
    },
    {
      type: "teaching",
      title: "Archaeological Confirmations",
      content: "Critics once doubted the Hittites, the Pool of Siloam, Pontius Pilate, the House of David, and dozens of biblical details. Then archaeology dug them up. Wesley Huff notes: 'Archaeology has never contradicted the Bible—only our misunderstandings of it.' Every year brings new confirmations.",
      keyPoint: "Archaeology consistently confirms biblical history.",
      xp: 10
    },
    {
      type: "scenario",
      title: "Campus Conversation",
      question: "A classmate says: 'The Bible is full of contradictions! How can you trust it?' What's your response?",
      options: [
        {
          text: "Can you give me an example? Most 'contradictions' dissolve when you understand context, genre, or the specific question each author is answering.",
          isCorrect: true,
          feedback: "Excellent! Don't accept vague accusations. Ask for specifics. Most alleged contradictions are solved by understanding: (1) Different perspectives (like four witnesses to a car accident), (2) Literary genre (poetry vs. history), (3) Context (who's speaking, to whom, when). R.C. Sproul said, 'I've never encountered a Bible contradiction that couldn't be resolved.'",
          xp: 15
        },
        {
          text: "The Bible is God's Word! It CAN'T have contradictions!",
          isCorrect: false,
        content: [
          "Three lines of evidence support the empty tomb:",
          "1) Burial by Joseph of Arimathea is multiply attested (unlikely as invention).",
          "2) Women as first witnesses—counter‑productive in that culture if fabricating.",
          "3) The earliest Jewish response alleged theft—implicitly conceding the tomb was empty."
        ],
        },
        {
          text: "Yeah, I've wondered about that too. Maybe it's not all true.",
          isCorrect: false,
          feedback: "Don't abandon ship so quickly! Most 'contradictions' are easily answered. Minor differences in details (how many angels at the tomb?) actually INCREASE credibility—they show independent testimony, not collusion."
        }
      ]
    },
    {
      type: "teaching",
      title: "Fulfilled Prophecy",
      content: "The odds of one person fulfilling just 8 messianic prophecies by chance: 1 in 10^17 (one in 100 quadrillion). Jesus fulfilled over 300 OT prophecies about the Messiah: birthplace (Micah 5:2), virgin birth (Isaiah 7:14), crucifixion details (Psalm 22), betrayal price (Zechariah 11:12-13). Hank Hanegraaff calls this 'God's signature on Scripture.'",
      keyPoint: "Fulfilled prophecy is statistically impossible without divine inspiration.",
        content: [
          "The disciples changed from fearful deserters to bold witnesses willing to suffer and die.",
          "People may die for what they think is true, but not for what they know is false.",
          "Conspiracy theories (body stolen) don’t account for this transformation across many witnesses."
        ],
    },
    {
      type: "quiz",
      question: "How many Greek New Testament manuscripts exist?",
      options: [
        "About 50—roughly the same as other ancient texts",
        "Around 650, similar to Homer's Iliad",
        "Approximately 5,800, far more than any other ancient work",
        "We don't have any original manuscripts"
      ],
      correctAnswer: 2,
      explanation: "We have ~5,800 Greek NT manuscripts, plus 10,000+ Latin and thousands in other languages. This vastly exceeds any other ancient document. For comparison, Homer's Iliad (the second best-attested ancient work) has ~650 manuscripts.",
      xp: 10
    },
    {
      type: "teaching",
      title: "Textual Criticism",
      content: "Textual criticism compares manuscripts to recover the original wording. With 5,800+ manuscripts, scholars can cross-check variations. Result? We're 99.5% certain of the NT text. The 0.5% uncertainty involves minor issues (spelling, word order) that don't affect any doctrine. No other ancient text is this reliable.",
      keyPoint: "The more manuscripts, the MORE certain we are of the original text.",
        content: [
          "Swoon theory: Jesus didn’t die. Problem: Roman execution was efficient; a half‑dead Jesus wouldn’t inspire worship.",
          "Hallucination: Disciples hallucinated. Problem: Group hallucinations are highly implausible; plus the empty tomb remains.",
          "Conspiracy: Disciples lied. Problem: Doesn’t square with their suffering and deaths for the claim."
        ],
    },
    {
      type: "quote",
      author: "Wesley Huff",
      text: "The Bible is not asking to be believed despite the evidence. It's asking to be believed BECAUSE of the evidence. And the evidence is overwhelming.",
      context: "Apologist and manuscript researcher",
      xp: 10
    },
    {
      type: "reflection",
      title: "Personal Application",
      prompt: "How does learning about manuscript evidence and archaeology strengthen your confidence in Scripture? How might you share this with someone who thinks the Bible is unreliable?",
      xp: 10
    },
    {
      type: "action",
      title: "This Week's Challenge",
      task: "Research one archaeological discovery that confirms a biblical account (Pool of Siloam, Tel Dan Stele, Dead Sea Scrolls, etc.). Share what you learned with a friend or small group.",
      xp: 15
    }
  ],
  summary: "The Bible is the most reliable ancient document in existence. Manuscript evidence, archaeology, and fulfilled prophecy all confirm its trustworthiness. You can confidently say: 'The Bible is historically credible.'",
  nextSteps: "Next lesson: The Moral Argument—Where does right and wrong come from?"
};

export const lesson6Data = {
  id: 6,
  title: "The Moral Argument for God",
  subtitle: "Where do right and wrong come from?",
  description: "Everyone believes some things are truly right or wrong. But where does objective morality come from? Explore why moral law points to a Moral Lawgiver.",
  cards: [
    {
      type: "info",
      title: "The Universal Moral Sense",
      content: "Walk into any culture and ask: 'Is torturing babies for fun wrong?' Everyone says YES. This isn't just opinion—it's objectively wrong. But where does this universal moral sense come from? C.S. Lewis built his entire journey to faith on this question.",
      xp: 10
    },
    {
      type: "quote",
      author: "C.S. Lewis",
      text: "My argument against God was that the universe seemed so cruel and unjust. But how had I got this idea of just and unjust? A man does not call a line crooked unless he has some idea of a straight line.",
      context: "From 'Mere Christianity'—the argument that led Lewis to faith",
      xp: 10
    },
    {
      type: "teaching",
      title: "The Moral Argument (Formalized)",
      content: "William Lane Craig presents it simply: (1) If God doesn't exist, objective moral values don't exist. (2) Objective moral values DO exist (we all know torturing babies is objectively wrong). (3) Therefore, God exists. Atheists can be moral, but they can't justify WHY morality is objective without borrowing from theism.",
      keyPoint: "Atheism can describe moral feelings but can't ground objective moral facts.",
      xp: 10
    },
    {
      type: "teaching",
      title: "The Euthyphro Dilemma",
      content: "Skeptics ask: 'Is something good because God commands it, or does God command it because it's good?' Answer: False dilemma. Goodness flows from God's nature. God doesn't arbitrarily command goodness (it's not 'good because He says so'), nor is there a standard above God. God's nature IS the standard of goodness.",
      keyPoint: "God doesn't invent morality or submit to it—He embodies it.",
      xp: 10
    },
    {
      type: "scenario",
      title: "Ethics Class Discussion",
      question: "A classmate argues: 'Morality is just societal preference. What's right in one culture might be wrong in another.' How do you respond?",
      options: [
        {
          text: "If morality is just preference, then you can't condemn the Nazis or slavery. But everyone agrees those are objectively wrong—not just culturally distasteful. That proves morality transcends culture.",
          isCorrect: true,
          feedback: "Excellent! Moral relativism self-destructs. If 'right' is just cultural preference, then you can't condemn anything—even atrocities. But everyone DOES condemn certain things as objectively wrong. This universal moral knowledge points to a Moral Lawgiver.",
          xp: 15
        },
        {
          text: "That's ridiculous! Everyone knows right from wrong!",
          isCorrect: false,
          feedback: "You're right, but explain WHY everyone knows. The fact that we universally recognize objective moral truths is itself evidence for God. Don't just assert—engage the argument."
        },
        {
          text: "I guess you're right. Morality is probably just evolution or culture.",
          isCorrect: false,
          feedback: "Don't concede! Evolution can describe moral feelings (we evolved to cooperate), but it can't ground objective moral FACTS. Why SHOULD we be moral if we're just evolved animals? The 'is' of evolution doesn't give us the 'ought' of morality."
        }
      ]
    },
    {
      type: "teaching",
      title: "Evolution and Morality",
      content: "Evolutionary psychologists explain moral feelings (empathy helped survival). But evolution describes what IS (we have moral feelings), not what OUGHT to be (we should act morally). Lewis said: 'If the solar system was created by atomic collisions, why should I trust my own logic—including the logic that tells me the solar system was created by collisions?' Same with morality.",
      keyPoint: "Evolution might explain moral instincts but can't justify objective moral obligations.",
      xp: 10
    },
    {
      type: "quiz",
      question: "What is the Moral Argument for God's existence?",
      options: [
        "Good people go to heaven, so God must exist",
        "If objective moral values exist, God must exist to ground them",
        "The Bible contains moral teachings, therefore God is real",
        "Evolution explains morality, so we don't need God"
      ],
      correctAnswer: 1,
      explanation: "The Moral Argument: (1) If God doesn't exist, objective moral values don't exist. (2) Objective moral values DO exist. (3) Therefore, God exists. Without God, morality is just preference or evolutionary instinct—not objectively binding.",
      xp: 10
    },
    {
      type: "quote",
      author: "Tim Keller",
      text: "If there is no God, our sense of moral obligation is an illusion. But every one of us feels moral obligation. Therefore, there must be a God.",
      context: "Simplified version of the moral argument",
      xp: 10
    },
    {
      type: "teaching",
      title: "Why This Argument Matters",
      content: "The moral argument is deeply personal. Everyone has a conscience. Everyone appeals to justice. Even atheists outraged by evil are unknowingly affirming God's existence—because without God, there's no objective standard to call anything 'evil.' As Lewis said, 'I believe in Christianity as I believe the sun has risen—not only because I see it, but because by it I see everything else.'",
      keyPoint: "The moral argument is experiential—we KNOW morality is real, and that points to God.",
      xp: 10
    },
    {
      type: "reflection",
      title: "Personal Application",
      prompt: "When have you felt the weight of objective moral obligation—the sense that something is truly right or wrong, not just preference? How does that experience point you to God?",
      xp: 10
    },
    {
      type: "action",
      title: "This Week's Challenge",
      task: "Read Book 1 of C.S. Lewis's 'Mere Christianity' (the moral argument). Write down one insight that resonates with you. Share it with someone this week.",
      xp: 15
    }
  ],
  summary: "Objective morality is a universal human experience. But if there's no God, morality is just preference or instinct—not truly binding. The existence of objective moral values points compellingly to a Moral Lawgiver: God.",
  nextSteps: "Next lesson: Jesus—The Only Way? Addressing religious pluralism."
};

export const lesson7Data = {
  id: 7,
  title: "Jesus: The Only Way?",
  subtitle: "Addressing religious pluralism and exclusivity",
  description: "Claiming Jesus is the only way sounds arrogant. But what if it's true? Explore why Jesus's claims are unique and how to defend the exclusivity of Christ with grace.",
  cards: [
    {
      type: "info",
      title: "The Scandal of Exclusivity",
      content: "Jesus said: 'I am the way, the truth, and the life. No one comes to the Father except through Me' (John 14:6). In our pluralistic world, this sounds narrow, arrogant, even hateful. How can Christians claim their way is the ONLY way? Let's think carefully about this.",
      xp: 10
    },
    {
      type: "quote",
      author: "Tim Keller",
      text: "All other religions say, 'This is what you must do to be saved.' Christianity says, 'This is what has been done for you.' That's not arrogant—that's humbling.",
      context: "From 'The Reason for God'",
      xp: 10
    },
    {
      type: "teaching",
      title: "Jesus's Unique Claims",
      content: "Jesus didn't just claim to TEACH truth—He claimed to BE truth. He didn't point to God—He claimed to BE God. He didn't offer one path among many—He claimed to be THE way. C.S. Lewis said Jesus's claims leave only three options: He's a liar, a lunatic, or Lord. There's no 'good moral teacher' option.",
      keyPoint: "Jesus made claims that, if false, make Him a megalomaniac. You can't call Him 'just a good teacher.'",
      xp: 10
    },
    {
      type: "teaching",
      title: "The Uniqueness of Christianity",
      content: "All other religions say: 'Do these things and maybe you'll be saved/enlightened/accepted.' Christianity says: 'It is finished—Jesus did it FOR you.' Islam, Hinduism, Buddhism—all are works-based. Christianity alone is grace-based. R.C. Sproul: 'Christianity is the only religion where God does all the work.' That's not arrogant—it's humble.",
      keyPoint: "Exclusivity isn't arrogance—it's acknowledgment that we CAN'T save ourselves.",
      xp: 10
    },
    {
      type: "scenario",
      title: "Interfaith Dialogue",
      question: "A friend says: 'All religions lead to the same God. Why do Christians claim they're the only ones who are right?' How do you respond?",
      options: [
        {
          text: "All religions make mutually exclusive truth claims. They can't all be right. Jesus either rose from the dead or He didn't. Either He's God or He's not. Truth is exclusive by nature.",
          isCorrect: true,
          feedback: "Excellent! John Lennox points out that math isn't 'narrow'—2+2=4, not 5. Truth is exclusive by definition. Christianity claims Jesus historically rose from the dead. That's either true or false, not 'one perspective among many.' It's not arrogance to claim truth—it's honesty.",
          xp: 15
        },
        {
          text: "I don't know. Maybe you're right. There are lots of paths to God.",
          isCorrect: false,
          feedback: "Don't abandon Jesus's own words! He explicitly said 'No one comes to the Father except through Me.' That's either true or false—but it's not ambiguous. Stand on what Jesus claimed."
        },
        {
          text: "Other religions are demonic lies! Only Christianity is true!",
          isCorrect: false,
          feedback: "Theologically you may be right that Christianity is uniquely true, but this tone shuts down conversation. Instead, engage respectfully: 'Jesus made unique claims. Let's examine whether they're true.' Winsomeness, not combativeness."
        }
      ]
    },
    {
      type: "teaching",
      title: "The Problem with Pluralism",
      content: "Religious pluralism says 'All paths lead to the same summit.' Sounds nice, but it's logically incoherent. Christianity says Jesus is God; Islam says He's not. Hinduism says God is impersonal; Christianity says He's personal. Buddhism denies a creator God; Christianity affirms one. They can't all be true—contradictions can't coexist.",
      keyPoint: "Pluralism sounds tolerant but actually dismisses each religion's truth claims.",
      xp: 10
    },
    {
      type: "quote",
      author: "John Lennox",
      text: "It is not arrogant to claim that Jesus is the truth. It would be arrogant to claim that YOU are the truth. But Christians point to Christ, not themselves.",
      context: "Responding to charges of Christian arrogance",
      xp: 10
    },
    {
      type: "quiz",
      question: "What was C.S. Lewis's 'Liar, Lunatic, or Lord' trilemma?",
      options: [
        "Jesus was either lying, crazy, or truly God—but not just a 'good moral teacher'",
        "All religions are true, false, or somewhere in between",
        "Christianity is one of three valid paths to God",
        "Jesus claimed to be a teacher, a prophet, or the Messiah"
      ],
      correctAnswer: 0,
      explanation: "Lewis argued that Jesus's claims to be God leave only three options: He's a liar (knew He wasn't God but lied), a lunatic (mistakenly thought He was God), or Lord (He truly is God). The 'great moral teacher' option doesn't work—a liar or lunatic isn't a great moral teacher.",
      xp: 10
    },
    {
      type: "teaching",
      title: "Responding with Grace",
      content: "Affirming Jesus as the only way doesn't mean being hateful or superior. Tim Keller: 'The gospel creates the only kind of humility that doesn't undermine your confidence, and the only kind of confidence that doesn't undermine your humility.' We're beggars telling other beggars where to find bread—that's not arrogance.",
      keyPoint: "Christian exclusivity is humble: 'I can't save myself. Only Jesus can.'",
      xp: 10
    },
    {
      type: "reflection",
      title: "Personal Application",
      prompt: "How can you graciously explain to a friend that Jesus is the only way without sounding arrogant or dismissive of their beliefs? What tone and approach would you use?",
      xp: 10
    },
    {
      type: "action",
      title: "This Week's Challenge",
      task: "Read Tim Keller's chapter on exclusivity in 'The Reason for God' or watch John Lennox discuss religious pluralism. Practice explaining the 'Liar, Lunatic, or Lord' argument to a friend.",
      xp: 15
    }
  ],
  summary: "Jesus's claim to be the only way is either true or false—but it's not arrogant. Christianity is uniquely grace-based: God did the work. All other religions demand we save ourselves. Truth is exclusive by nature. Stand firm, but with gentleness and respect.",
  nextSteps: "Final lesson: Engaging Skeptics with Grace—Your apologetics toolkit."
};

export const lesson8Data = {
  id: 8,
  title: "Engaging Skeptics with Grace",
  subtitle: "Your apologetics toolkit for real conversations",
  description: "Apologetics isn't about winning arguments—it's about winsome witness. Compile everything you've learned into a practical toolkit for defending the faith with truth and love.",
  cards: [
    {
      type: "info",
      title: "The Goal of Apologetics",
      content: "1 Peter 3:15-16: 'Always be prepared to give an answer... But do this with gentleness and respect, keeping a clear conscience.' Notice: BOTH truth AND tone matter. You can be right and still be wrong if you're harsh. The goal isn't winning arguments—it's winning people.",
      xp: 10
    },
    {
      type: "quote",
      author: "R.C. Sproul",
      text: "We are not called to dispense the grace of God. We are called to dispense the truth of God, mixed with the grace and love of God.",
      context: "On the balance of truth and grace in apologetics",
      xp: 10
    },
    {
      type: "teaching",
      title: "Common Objections & Responses",
      content: "**'Christianity is based on blind faith!'** Response: Faith is trust based on evidence. We have historical evidence (resurrection), philosophical arguments (cosmological, moral), and scientific pointers (fine-tuning, Big Bang). **'Religion has caused so much harm!'** Response: True, and so has atheism (Stalin, Mao). Humans misuse everything. But Jesus taught enemy-love. Judge Christianity by Jesus, not hypocrites.",
      keyPoint: "Anticipate common objections and have gracious, brief answers ready.",
      xp: 10
    },
    {
      type: "teaching",
      title: "Ask Good Questions",
      content: "Jesus asked more questions than He gave answers. Great apologetics questions: 'What do you mean by that?' 'How did you come to that conclusion?' 'What would change your mind?' Questions disarm defensiveness, clarify thinking, and show you're listening—not just preaching.",
      keyPoint: "The best apologists ask humble, clarifying questions.",
      xp: 10
    },
    {
      type: "scenario",
      title: "Coffee Shop Conversation",
      question: "A friend says: 'I'd believe in God if there was any evidence. But there isn't.' What's your best response?",
      options: [
        {
          text: "What kind of evidence would you find convincing? And have you looked at the cosmological argument, the fine-tuning of the universe, or the historical evidence for the resurrection?",
          isCorrect: true,
          feedback: "Perfect! You turned it into a conversation, not a lecture. By asking what evidence they'd accept, you get them thinking. Then you gently point to specific arguments. This approach is humble ('let's explore together') rather than combative.",
          xp: 15
        },
        {
          text: "There's tons of evidence! You're just ignoring it because you love your sin!",
          isCorrect: false,
          feedback: "Ouch. Even if there's truth here (Romans 1 says people suppress truth), this approach alienates. Lead with curiosity, not accusation. You'll close the conversation before it starts."
        },
        {
          text: "Yeah, I struggle with that too. It's hard to believe.",
          isCorrect: false,
          feedback: "Empathy is good, but don't undercut the abundant evidence! Doubts are normal, but Christianity has robust intellectual foundations. Share the cosmological argument, fine-tuning, resurrection evidence. Don't concede too quickly."
        }
      ]
    },
    {
      type: "teaching",
      title: "Know Your Limits",
      content: "You don't need to know everything. It's okay to say: 'That's a great question. I don't know the answer, but let me research it and get back to you.' Admitting uncertainty is MORE credible than bluffing. Plus, it gives you an excuse to continue the conversation later.",
      keyPoint: "Humility ('I don't know, but let's find out together') is powerful.",
      xp: 10
    },
    {
      type: "quote",
      author: "Tim Keller",
      text: "Apologetics removes obstacles to faith. But only the Holy Spirit creates faith. Don't confuse your role with His.",
      context: "On the limits and purpose of apologetics",
      xp: 10
    },
    {
      type: "teaching",
      title: "Your Apologetics Toolkit Summary",
      content: "**1. God's Existence**: Cosmological (universe had a beginning), fine-tuning (universe designed for life), moral argument (objective morality requires God). **2. Evil & Suffering**: Free will, greater good, God's own suffering on the cross. **3. Resurrection**: Minimal facts, empty tomb, transformed disciples. **4. Science**: Big Bang confirms creation, fine-tuning points to Designer. **5. Bible**: Best-attested ancient document, archaeology confirms it. **6. Exclusivity**: Jesus's claims are unique—He's Lord, liar, or lunatic, not 'just a teacher.'",
      keyPoint: "You now have a comprehensive toolkit. Use it with grace.",
      xp: 10
    },
    {
      type: "quiz",
      question: "What does 1 Peter 3:15 say about how to defend your faith?",
      options: [
        "Always be right and don't back down",
        "Defend the faith with gentleness and respect",
        "Only answer questions if you're 100% certain",
        "Avoid conversations with skeptics"
      ],
      correctAnswer: 1,
      explanation: "1 Peter 3:15-16: 'Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect, keeping a clear conscience.' Truth AND tone matter.",
      xp: 10
    },
    {
      type: "reflection",
      title: "Personal Application",
      prompt: "Which apologetics argument resonates most with you personally? Which do you feel least confident explaining? What's one step you can take this week to grow in your apologetics knowledge and practice?",
      xp: 10
    },
    {
      type: "action",
      title: "This Week's Challenge",
      task: "Find one opportunity to engage in a spiritual conversation. Use one argument from your toolkit. Ask good questions. Listen well. Pray beforehand. Then reflect: What went well? What would you do differently next time?",
      xp: 15
    }
  ],
  summary: "Apologetics is both an art and a science. You've learned powerful arguments for the faith. Now practice using them with humility, grace, and prayer. Remember: arguments open doors, but only the Holy Spirit changes hearts. Go forth as a defender of the faith—with both truth and love.",
  nextSteps: "Congratulations! You've completed the Apologetics Study Guide. Continue growing: read more Craig, Lennox, Lewis, Keller. Watch debates. Engage skeptics graciously. And always remember: 'The Lord's servant must not be quarrelsome but kind to everyone, able to teach, patiently enduring evil' (2 Tim 2:24)."
};
*/
