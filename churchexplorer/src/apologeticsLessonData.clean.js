// Apologetics Interactive Lesson Data (clean, adapted for InteractiveLesson)
// 8 lessons covering Christian apologetics from Craig, Lennox, Lewis, Keller, Sproul, Huff, Hanegraaff

export const lesson1Data = {
  id: 1,
  title: "The Case for God's Existence",
  subtitle: 'Cosmological and fine-tuning arguments that point to a Creator',
  description: "Explore two core arguments that many thinkers find compelling: the Kalam Cosmological Argument and fine-tuning.",
  cards: [
    // Welcome and goal
    { type: 'content', title: 'Welcome to Apologetics', subtitle: 'A reasoned defense of the hope we have', content: [
      "Apologetics comes from the Greek word 'apologia'—a reasoned defense.",
      '1 Peter 3:15 calls us to be ready to give reasons for our hope with gentleness and respect.',
      "In this lesson, you'll learn the structure of two key arguments for God and how to explain them clearly.",
      'We will focus on a simple structure: teach the core ideas, check your understanding with quick quizzes, and end with a practical challenge.'
    ], highlight: '🎯 Goal: Explain Kalam and Fine-Tuning in 90 seconds each.' },

    // Kalam: structure and support
    { type: 'content', title: 'The Kalam Cosmological Argument', content: [
      '1) Whatever begins to exist has a cause.',
      '2) The universe began to exist.',
      '3) Therefore, the universe has a cause.',
      'Modern cosmology (Big Bang, expansion of space, background radiation) supports premise 2. Philosophical arguments support a beginning as well.'
    ], highlight: 'If the universe began, it points to a Beginner.' },

    { type: 'content', title: "Why 'begins to exist' matters", content: [
      "The premise is not 'everything has a cause' but 'whatever begins to exist has a cause.'",
      "God is eternal and doesn't begin to exist, so He doesn't need a cause.",
      'The universe began—so it is reasonable to ask for a cause. This avoids the "Who made God?" objection.'
    ], highlight: 'Only things that begin need causes.' },

    { type: 'content', title: "Actual infinities and Hilbert's Hotel", content: [
      "If the past were actually infinite, we'd never arrive at today (you cannot traverse an actual infinite by successive addition).",
      "Hilbert's Hotel—a hotel with infinite rooms that is always full yet can still add guests—reveals paradoxes with actual infinities, suggesting an infinite regress of past events is impossible.",
      'A finite past implies a beginning to the universe.'
    ], highlight: 'A finite past implies a beginning.' },

    { type: 'quiz', question: 'Why doesn\'t the question "Who made God?" refute Kalam?', options: [
      'Because God is part of the universe and had a beginning',
      'Because the first premise only applies to things that begin to exist, and God did not begin',
      'Because we can\'t know anything about God'
    ], correctAnswer: 1, explanation: "Kalam's first premise is 'Whatever begins to exist has a cause.' God is eternal and uncaused; the premise doesn’t apply to Him." },

    { type: 'fillblank', prompt: 'Whatever ______ to exist has a cause.', correctAnswer: 'begins', explanation: "The Kalam's first premise is 'Whatever begins to exist has a cause.'" },

    // From cause to attributes
    { type: 'content', title: 'What kind of cause?', content: [
      'If space, time, matter, and energy began, then the cause must be beyond space, time, matter, and energy—immaterial, timeless, powerful.',
      'Two types of causes exist: impersonal conditions and personal agents. If impersonal conditions were eternal, the effect (a universe) would also be eternal. But the universe is not eternal.',
      'Therefore, the cause is best explained as a personal agent who can choose to create: a mind with will.'
    ], highlight: 'Timeless cause + non-eternal effect points to a personal Creator.' },

    // Lennox quote
    { type: 'content', title: 'Quote: John Lennox', content: [
      '“Nonsense remains nonsense, even when talked by world‑famous scientists.”',
      'God no more competes with science than Henry Ford competes with the laws of combustion—one explains agency, the other mechanism.'
    ] },

    // Fine-tuning: content and activity
    { type: 'content', title: 'The Fine-Tuning Argument', content: [
      'The universe is fine‑tuned for life with staggering precision. Life-permitting ranges for many constants are razor-thin.',
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

    { type: 'quiz', question: 'Which explanation best fits widespread, independent fine‑tuning across many constants?', options: [
      'Sheer chance, because improbable things happen all the time',
      'Design, because multiple precise values aligned simultaneously',
      'There is no fine‑tuning; life just adapted'
    ], correctAnswer: 1, explanation: 'Multiple, independent parameters landing in life-permitting ranges points to design as the best explanation.' },

    // Objections and replies
    { type: 'content', title: 'Common objections', content: [
      'Who made God? — Only things that begin need causes; God is eternal.',
      'Multiverse? — Speculative and itself requires finely tuned laws/initial conditions to generate life-permitting domains.',
  "We'll find a natural explanation — That assumes naturalism; inference to the best explanation points to intelligence."
    ], highlight: 'Anticipate objections; answer with clarity and grace.' },

    { type: 'quiz', question: "Your friend says: 'Science explains everything. We don't need God.'", options: [
      "Science explains how things work, not why they exist. Who designed the laws science studies?",
      "That's ridiculous. Everything screams design!",
      "Yeah, you're probably right. Faith is just a feeling."
    ], correctAnswer: 0, explanation: "Science and God answer different questions. Science is the 'how,' God is the 'why.' Lennox: God no more competes with science than Henry Ford with combustion laws." },

    { type: 'quiz', question: 'What are the three steps of the Kalam?', options: [
      'God exists; the Bible says so; therefore it\'s true.',
      'Everything has a cause; God is first cause; God exists.',
      'Whatever begins has a cause; the universe began; therefore the universe has a cause.',
      'The universe is complex; complexity needs design; God designed it.'
    ], correctAnswer: 2, explanation: 'Kalam: whatever begins to exist has a cause; the universe began; therefore the universe has a cause.' },

    // Practice and completion
    { type: 'content', title: "This Week's Challenge", content: [
      'Write a 90‑second explanation of Kalam and a 90‑second explanation of fine‑tuning. Practice out loud with a friend.',
      'Bonus: Watch a short presentation by William Lane Craig or John Lennox and note one new insight.'
    ], highlight: 'Practice makes clarity.' },

    { type: 'completion', title: 'Lesson Complete! 🎉', message: 'Great work finishing “The Case for God’s Existence.” Keep going—you’re building a strong apologetics foundation.', badge: { icon: '🛡️', name: 'Apologetics 1', description: 'Completed: The Case for God’s Existence' } }
  ]
};

export const lesson2Data = {
  id: 2,
  title: 'The Problem of Evil & Suffering',
  subtitle: 'Answering the toughest objection to faith',
  description: 'Address both logical and pastoral dimensions of evil and suffering.',
  cards: [
    // Framing the problem
    { type: 'content', title: "The skeptic's challenge", subtitle: 'A head-and-heart question', content: [
      "David Hume's framing: If God is willing to prevent evil but not able, He is weak; if able but not willing, He is malevolent; if both able and willing, why is there evil?",
      'Evil is both an intellectual problem and a deeply personal pain.',
      'Apologetics must address the mind and honor the heart.'
    ], highlight: 'Think rigorously. Care deeply.' },

    // Distinctions and definitions
    { type: 'content', title: 'Two forms: logical vs evidential', content: [
      'Logical: claims a contradiction between God and evil — free will and greater-goods remove the contradiction.',
      "Evidential: certain particular evils (e.g., seemingly gratuitous suffering) are argued to be unlikely on theism — but we aren't positioned to know all God’s reasons (limited knowledge).",
      'Moral evil: suffering from free creaturely choices. Natural evil: suffering from disease, disasters, and decay in a fallen world.'
    ], highlight: "We're limited creatures; we can't survey all possible reasons." },

    { type: 'matching', title: 'Match the category', pairs: [
      { term: 'Logical problem of evil', definition: 'Alleged contradiction between God and evil' },
      { term: 'Evidential problem of evil', definition: 'Claim that specific evils are improbable on theism' },
      { term: 'Moral evil', definition: 'Suffering from sinful choices (murder, abuse, injustice)' },
      { term: 'Natural evil', definition: 'Suffering from disease and disasters (cancer, earthquakes)' }
    ] },

    // Classical responses
    { type: 'content', title: 'The Free Will Defense', content: [
      'Genuine love requires freedom; freedom entails the possibility of wrong.',
      'A world with free agents capable of love and moral growth is better than a world of robots.',
      'God values persons with real agency; preventing all evil would also prevent moral goods like courage, loyalty, and forgiveness.'
    ] },

    { type: 'content', title: 'Soul‑making and greater‑good', content: [
      'Some virtues require hardship: courage requires danger; compassion requires need; perseverance requires trial.',
      "Genesis 50:20 and Romans 5:3–5 frame suffering within God’s purposes—without making God the author of evil.",
      'John Hick called this “soul‑making”: God uses a challenging environment to mature persons for eternity.'
    ], highlight: 'God can use evil for good without authoring evil.' },

    { type: 'quiz', question: 'Which statement best captures the logical response to evil?', options: [
      'If evil exists, God cannot exist',
      'There is no evil, only perception',
      'There is no contradiction if God has morally sufficient reasons tied to creaturely freedom and greater goods'
    ], correctAnswer: 2, explanation: 'If God has good reasons to permit evil (e.g., freedom, soul‑making), then there is no formal contradiction.' },

    // The Cross and hope
    { type: 'content', title: 'The Cross: God with us', content: [
      'Christianity offers not only arguments but a God who suffers with us.',
      "At the cross, God in Christ entered our pain. We don’t know all reasons, but we know His heart.",
      'Resurrection hope reframes suffering within a larger story where evil does not have the final word.'
    ], highlight: 'God is not distant from suffering.' },

    { type: 'fillblank', prompt: 'In Christianity, God in ________ entered human suffering on the cross.', correctAnswer: 'Christ', explanation: 'Central to the Christian answer is that God, in Christ, suffered and died—He is not remote from our pain.' },

    // Pastoral wisdom
    { type: 'quiz', question: 'Pastoral care scenario: What’s the wisest first response to suffering?', options: [
      "Offer a detailed theodicy and ask what they learned.",
      "Acknowledge the pain; express presence and point to the God who suffers with us.",
      'Say sin caused this specific event.'
    ], correctAnswer: 1, explanation: "Lead with compassion. Keller: Christianity gives the deepest answer — God Himself suffered." },

    { type: 'content', title: 'Objections and replies', content: [
      '“God could make free creatures who never choose evil.” — Freedom includes the live option of choosing otherwise; a world with genuine freedom entails risk.',
      '“Natural evil seems pointless.” — Our limited vantage point makes judgments about “pointlessness” precarious; many goods (stable physics, regular laws) entail side effects we dislike.',
      '“Eternal life doesn’t fix present pain.” — True, but it transforms the calculus of suffering and anchors hope that justice and restoration will be complete.'
    ] },

    { type: 'quiz', question: 'According to the free will defense, why does God allow evil?', options: [
      "God isn't powerful enough",
      "Genuine love and moral goodness require freedom, which includes the possibility of evil",
      "Evil is an illusion"
    ], correctAnswer: 1, explanation: 'Love must be freely chosen; freedom entails the possibility of evil.' },

    { type: 'content', title: 'Reflection', content: [
      'Where have you seen courage, compassion, or perseverance grow through hardship?',
      'How does the cross and resurrection shift how you face suffering today?'
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
    // Core claim
    { type: 'content', title: 'The central claim', content: [
      "1 Corinthians 15:14: If Christ is not raised, faith is futile.",
      'If true, Jesus is Lord; if false, Christianity collapses. Apologetics stands or falls here.'
    ], highlight: 'Everything hinges on the resurrection.' },

    // Minimal facts
    { type: 'content', title: 'Minimal facts approach', content: [
      '1) Jesus died by Roman crucifixion (multiple sources: Gospels, Paul, Tacitus).',
      '2) Disciples believed they saw the risen Jesus (appearances tradition).',
      '3) Paul—enemy of the church—converted after an experience he took as an appearance.',
      '4) James—skeptical brother—converted and became a leader in Jerusalem.'
    ], highlight: 'Start with what most scholars across views grant, then compare explanations.' },

    { type: 'matching', title: 'Match the minimal fact', pairs: [
      { term: 'Crucifixion', definition: 'Executed under Pontius Pilate (c. 30 AD)' },
      { term: 'Disciples’ experiences', definition: 'They sincerely believed Jesus appeared to them' },
      { term: 'Paul’s conversion', definition: 'From persecutor to apostle after an encounter' },
      { term: 'James’s conversion', definition: 'Skeptical brother became leader of the Jerusalem church' }
    ] },

    // Early testimony
    { type: 'content', title: 'Early testimony timeline', subtitle: 'Why legend doesn’t fit', content: [
      '1 Corinthians 15:3–7 preserves a creed many date within 3–5 years of the crucifixion.',
      'Acts records early speeches proclaiming the resurrection in Jerusalem itself (“you crucified Him, God raised Him”).',
      'The Gospels draw on earlier traditions and include details unlikely for a late legend.'
    ] },

    { type: 'quiz', question: 'A professor claims “resurrection is a late legend.” What’s the best reply?', options: [
      'We have very early testimony (1 Cor 15 creed), far too soon for legend; and the empty tomb lacked a body.',
      "You’re insulting my Lord!",
      'We just take it on faith.'
    ], correctAnswer: 0, explanation: 'Legends take generations; early testimony plus the empty tomb undercut the legend hypothesis.' },

    // Empty tomb and women witnesses
    { type: 'content', title: 'The empty tomb', content: [
      'Burial by Joseph of Arimathea (a Sanhedrin member) is multiply attested and unlikely to be invented against the Sanhedrin.',
      'Women as first witnesses would be counter‑productive in that culture if fabricated—yet they lead the story.',
      'Earliest Jewish claim alleged theft—implicitly conceding the tomb was empty.'
    ], highlight: 'The empty tomb is historically robust.' },

    // Alternative theories evaluated
    { type: 'content', title: 'Transformed disciples and alternative theories', content: [
      'From fear to bold proclamation in Jerusalem; many faced persecution and death.',
      'Conspiracy theory: Unlikely—disciples gained no power or wealth and were willing to suffer for their testimony.',
      'Hallucination theory: Private, subjective, and cannot account for group appearances, empty tomb, and physical interactions.',
      'Swoon theory: Roman executions were efficient; a half‑dead Jesus would not inspire worship as risen Lord.'
    ] },

    { type: 'fillblank', prompt: 'If Christ has not been raised, your faith is ________ (1 Cor 15:14).', correctAnswer: 'futile', explanation: 'Paul grounds Christianity in a historical event—the resurrection.' },

    { type: 'quiz', question: 'Which is NOT a minimal fact?', options: [
      'Jesus died by crucifixion',
      'Disciples believed they saw the risen Jesus',
      'Roman guards saw angels',
      'Paul converted after an experience he took as an appearance'
    ], correctAnswer: 2, explanation: "Guards seeing angels isn't part of the cross‑view scholarly consensus." },

    { type: 'content', title: 'Practical summary', content: [
      '1) Early, independent sources anchor the claim.',
      '2) Empty tomb fits Jewish and Roman context.',
      '3) Eyewitness transformation is hard to explain naturally.',
      'Ask: Which explanation best fits all the data with the least strain? The resurrection hypothesis remains strongest.'
    ] },

    { type: 'content', title: 'This Week’s Challenge', content: [
      'Write your 3‑minute “minimal facts” explanation. Practice with a friend who asks honest questions.'
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
