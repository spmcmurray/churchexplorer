import React, { useState } from 'react';
import { BookOpen, Mail, CheckCircle, Calendar, ChevronDown, ChevronRight, AlertCircle } from 'lucide-react';
import { subscribeToStudyGuide } from './emailService';

const StudyGuide = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [expandedWeek, setExpandedWeek] = useState(null);

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
      beginnerExplanation: "Think of the early church like a startup that grew rapidly. Jesus' followers started small in Jerusalem, but within a few centuries, Christianity had spread across Europe, Africa, and Asia. Early Christians had to figure out basic questions: What do we believe? How should we organize? What books belong in the Bible?",
      reflectionQuestions: [
        "What surprises you most about how Christianity began?",
        "Why do you think Christianity spread so quickly in the ancient world?",
        "How do you think the early church differs from churches today?"
      ],
      practicalApplication: "This week, visit the Catholic and Orthodox sections in the app. These traditions trace their roots directly to the early church. Notice how they emphasize apostolic succession - the idea of an unbroken line of leadership from the apostles to today.",
      appLinks: ["Catholic", "Orthodox", "Bible Timeline"]
    },
    {
      week: 2,
      title: "The Great Divide: East vs. West",
      subtitle: "Understanding the 1054 split",
      introduction: "This week explores one of Christianity's most significant moments: when the church split into Eastern (Orthodox) and Western (Catholic) branches. This wasn't a sudden break but rather centuries of growing differences in culture, language, and theology.",
      keyTopics: [
        "Cultural differences between Greek East and Latin West",
        "The Filioque controversy (a debate about the Holy Spirit)",
        "Different approaches to church leadership",
        "How Orthodox and Catholic churches differ today"
      ],
      beginnerExplanation: "Imagine a large family where half speaks English and half speaks Spanish, living on different continents. Over time, they develop different traditions and ways of doing things. Eventually, they have a big argument and stop talking. That's similar to what happened between Eastern and Western Christianity in 1054.",
      reflectionQuestions: [
        "Can you think of other examples where language and cultural differences led to divisions?",
        "What do you think Orthodox and Catholic Christians have in common despite their split?",
        "Is it possible for these traditions to reunite someday?"
      ],
      practicalApplication: "Compare the Orthodox and Catholic sections in the app. Notice similarities in their beliefs about sacraments and apostolic succession, but differences in church governance and some theological details. If possible, visit both a Catholic Mass and Orthodox Divine Liturgy to experience the differences firsthand.",
      appLinks: ["Catholic", "Orthodox", "Worship Experiences"]
    },
    {
      week: 3,
      title: "The Reformation: A Revolution in Faith",
      subtitle: "Martin Luther and the Protestant movement",
      introduction: "Get ready for one of history's most dramatic religious movements! In 1517, a German monk named Martin Luther challenged the Catholic Church's practices and sparked a revolution that would reshape Christianity forever. This week, we'll explore why it happened and what changed.",
      keyTopics: [
        "Martin Luther's 95 Theses and the indulgence controversy",
        "Key Reformation principles: Scripture Alone, Faith Alone, Grace Alone",
        "How Luther's ideas spread and evolved",
        "The birth of Lutheran and Reformed traditions"
      ],
      beginnerExplanation: "Luther was upset that the church was selling 'indulgences' - essentially, paying money to reduce punishment for sins. He believed salvation was a free gift from God through faith, not something you could buy. When he posted his complaints (the famous 95 Theses), it went viral (16th-century style), leading to a massive split from the Catholic Church.",
      reflectionQuestions: [
        "Why do you think Luther's message resonated with so many people?",
        "What role did the printing press play in spreading Reformation ideas?",
        "Can you see both sides of the debate between Luther and the Catholic Church?"
      ],
      practicalApplication: "Read through the Lutheran and Reformed/Presbyterian sections in the app. Notice their emphasis on 'sola scriptura' (Scripture alone) and 'sola fide' (faith alone). These became foundational principles for all Protestant denominations that followed.",
      appLinks: ["Lutheran", "Reformed", "Catholic"]
    },
    {
      week: 4,
      title: "The Middle Way: Anglicans & Methodists",
      subtitle: "Finding balance between Catholic and Protestant",
      introduction: "Not all reformers wanted to completely break from Catholic tradition. This week, we'll explore two traditions that tried to find a 'middle way' - keeping some Catholic practices while embracing Protestant theology. We'll also learn about John Wesley and the Methodist revival.",
      keyTopics: [
        "Henry VIII and the English Reformation (it's complicated!)",
        "The Anglican via media - 'middle way' approach",
        "John Wesley and the Methodist movement",
        "How personal holiness and social justice became central to Methodist identity"
      ],
      beginnerExplanation: "Anglicans kept bishops, liturgy, and many Catholic-looking practices, but adopted Protestant theology. It's like keeping your family's traditional recipes while trying new cooking techniques. Methodists emerged later from Anglicanism, emphasizing personal spiritual growth and caring for the poor. Think of them as Anglicans who wanted more emotion and social action in their faith.",
      reflectionQuestions: [
        "What are the advantages of trying to blend Catholic and Protestant elements?",
        "Why do you think Wesley emphasized both personal holiness and social concern?",
        "How does the Anglican 'middle way' differ from being wishy-washy?"
      ],
      practicalApplication: "Explore the Anglican and Methodist sections in the app. Notice how Anglicans maintain a formal liturgy (Book of Common Prayer) while Methodists focus on personal transformation and social holiness. The Worship Experiences section will show you what attending each type of service is like.",
      appLinks: ["Anglican", "Methodist", "Worship Experiences"]
    },
    {
      week: 5,
      title: "Believer's Baptism: Baptists & Anabaptists",
      subtitle: "Radical reformation and religious freedom",
      introduction: "Some reformers thought Luther and others didn't go far enough. This week, we'll explore traditions that took more radical stances on baptism, church-state separation, and religious freedom. These groups were often persecuted but their ideas eventually shaped modern concepts of religious liberty.",
      keyTopics: [
        "Believer's baptism vs. infant baptism",
        "Church and state separation",
        "Anabaptist commitment to pacifism and community",
        "Baptist emphasis on soul competency and congregational autonomy"
      ],
      beginnerExplanation: "Both Anabaptists and Baptists believe baptism should be a personal choice made as an adult believer, not something done to infants. 'Anabaptist' literally means 're-baptizer' because they baptized adults who had been baptized as infants. Baptists later developed similar beliefs but became one of the largest Protestant groups, especially in America. Both strongly believed in separating church and government.",
      reflectionQuestions: [
        "Why do you think baptism became such a divisive issue?",
        "What are the pros and cons of church-state separation?",
        "How did Anabaptist and Baptist ideas influence American religious freedom?"
      ],
      practicalApplication: "Compare the Anabaptist and Baptist sections in the app. Notice how Anabaptists (like Mennonites and Amish) emphasize pacifism and community discipline, while Baptists are more diverse but united on baptism and local church autonomy. The Worship Experiences will show you what to expect in Baptist services.",
      appLinks: ["Baptist", "Anabaptist", "Worship Experiences"]
    },
    {
      week: 6,
      title: "The Spirit Moves: Pentecostals & Holiness Churches",
      subtitle: "Revival, spiritual gifts, and personal transformation",
      introduction: "In the late 1800s and early 1900s, powerful revival movements swept across America and beyond, emphasizing emotional worship, spiritual gifts, and complete transformation. This week explores two related but distinct movements that dramatically changed Christianity's landscape.",
      keyTopics: [
        "The Holiness movement's emphasis on sanctification",
        "The Azusa Street Revival (1906) and birth of Pentecostalism",
        "Speaking in tongues and spiritual gifts",
        "How Pentecostalism became the fastest-growing Christian movement globally"
      ],
      beginnerExplanation: "The Holiness movement taught that Christians could experience 'entire sanctification' - a complete cleansing from sin after conversion. Pentecostals added emphasis on 'baptism in the Holy Spirit' evidenced by speaking in tongues (unknown languages). Both movements featured emotional, energetic worship and expectation of miracles. Today, Pentecostalism is exploding worldwide, especially in the Global South.",
      reflectionQuestions: [
        "Why do you think Pentecostalism appeals to so many people worldwide?",
        "How do emotional/charismatic worship styles differ from traditional liturgy?",
        "What role should spiritual gifts play in modern Christianity?"
      ],
      practicalApplication: "Read the Pentecostal and Holiness sections carefully. Notice the Pentecostal geographic distribution - rapid growth in Africa, Asia, and Latin America. If you're comfortable, consider visiting a Pentecostal service to experience the worship style firsthand (the Worship Experiences section prepares you for what to expect).",
      appLinks: ["Pentecostal", "Holiness", "Worship Experiences"]
    },
    {
      week: 7,
      title: "Back to Basics: Restorationists & Non-Denominational Churches",
      subtitle: "Simplifying Christianity in the modern era",
      introduction: "Some Christians look at denominational divisions and say, 'Let's just get back to what the Bible says!' This week explores movements that seek to restore 'simple' New Testament Christianity and modern churches that reject denominational labels altogether.",
      keyTopics: [
        "The Restoration Movement's goal to restore New Testament church patterns",
        "Why they reject creeds and human traditions",
        "The rise of non-denominational megachurches",
        "Contemporary worship and practical teaching styles"
      ],
      beginnerExplanation: "Restorationists (Churches of Christ, Christian Churches) believe Christians should only do what's explicitly found in the New Testament - no creeds, no instrumental music (for some), just Bible. Non-denominational churches take a different approach: they focus on practical teaching, contemporary worship, and avoid denominational labels. Both represent attempts to simplify Christianity, but in different ways.",
      reflectionQuestions: [
        "Is it really possible to practice Christianity exactly as the first century church did?",
        "What are the advantages and disadvantages of rejecting denominational identities?",
        "How do non-denominational churches differ from traditional Protestant denominations?"
      ],
      practicalApplication: "Compare the Restorationist and Non-Denominational sections. Notice how Restorationists are more specific about restoring first-century practices, while non-denominational churches are more pragmatic and contemporary. Many non-denominational churches are actually quite evangelical in theology despite avoiding the label.",
      appLinks: ["Restorationist", "Non-Denominational", "Worship Experiences"]
    },
    {
      week: 8,
      title: "Your Journey: Understanding & Choosing",
      subtitle: "Putting it all together",
      introduction: "Congratulations on completing seven weeks of church history! This final week is about synthesis - understanding how all these traditions relate to each other and thinking about your own spiritual journey. There's no 'right' denomination, but understanding the options helps you make informed choices.",
      keyTopics: [
        "Common threads across all Christian traditions",
        "Key differences that distinguish denominations",
        "How to visit different churches respectfully",
        "Finding a church home that fits your beliefs and needs"
      ],
      beginnerExplanation: "Despite their differences, all Christian denominations share core beliefs: God as Trinity (Father, Son, Holy Spirit), Jesus as divine and human, salvation through Christ, and the authority of Scripture. Differences arise in how they interpret Scripture, organize church leadership, practice sacraments, and express worship. Understanding these differences helps you appreciate Christianity's diversity.",
      reflectionQuestions: [
        "What denomination(s) resonated most with you, and why?",
        "What surprised you most in this 8-week journey?",
        "How has learning church history changed your understanding of Christianity?",
        "What questions do you still have?"
      ],
      practicalApplication: "Review all the Worship Experiences in the app. Make a plan to visit 2-3 different types of churches over the next few months. Go with an open mind and respectful curiosity. Use the app's guides to know what to expect. Remember: finding a church home is about both theology and community - it's okay to prioritize different factors.",
      appLinks: ["All Denominations", "Worship Experiences", "Bible Timeline"]
    }
  ];

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await subscribeToStudyGuide(name, email);
      setSubscribed(true);
    } catch (err) {
      setError(err.message || 'Failed to subscribe. Please try again.');
      console.error('Subscription error:', err);
    } finally {
      setLoading(false);
    }
  };

  const toggleWeek = (weekNumber) => {
    setExpandedWeek(expandedWeek === weekNumber ? null : weekNumber);
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
            An 8-Week Journey Through Christianity's Story
          </p>
          <p className="text-lg text-blue-50 max-w-2xl mx-auto">
            Perfect for beginners! Explore 2,000 years of church history through weekly lessons
            delivered right to your inbox. No prior knowledge required.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Subscription Form */}
        {!subscribed ? (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border-2 border-blue-100">
            <div className="flex items-center justify-center mb-6">
              <Mail className="w-10 h-10 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">Start Your Journey</h2>
            </div>

            <p className="text-center text-gray-600 mb-8 text-lg">
              Sign up to receive one lesson per week for 8 weeks. Each email includes:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong>Beginner-friendly explanations</strong>
                  <p className="text-sm text-gray-600">No academic jargon - just clear, simple teaching</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong>Reflection questions</strong>
                  <p className="text-sm text-gray-600">Think deeply about what you're learning</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong>Practical application</strong>
                  <p className="text-sm text-gray-600">Connect history to your life today</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong>Interactive app content</strong>
                  <p className="text-sm text-gray-600">Explore denominations in detail</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="your.email@example.com"
                />
              </div>

              {error && (
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-red-800">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Subscribing...' : 'Start My Free 8-Week Journey'}
              </button>

              <p className="text-sm text-gray-500 text-center">
                Free forever. Unsubscribe anytime. We respect your privacy.
              </p>
            </form>
          </div>
        ) : (
          <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 mb-12 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome Aboard, {name}! 🎉</h2>
            <p className="text-lg text-gray-700 mb-4">
              Your first lesson will arrive in your inbox this week. Get ready to explore Christianity's fascinating story!
            </p>
            <p className="text-gray-600">
              In the meantime, feel free to preview the curriculum below and explore the app.
            </p>
          </div>
        )}

        {/* Course Overview */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Calendar className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">8-Week Curriculum</h2>
          </div>

          <p className="text-gray-700 mb-8 text-lg">
            Click any week below to preview the content. Each lesson builds on the previous one,
            taking you from Christianity's origins to modern denominational diversity.
          </p>

          {/* Week Cards */}
          <div className="space-y-4">
            {curriculum.map((week) => (
              <div
                key={week.week}
                className="bg-white rounded-xl shadow-md border-2 border-gray-200 overflow-hidden hover:border-blue-300 transition"
              >
                {/* Week Header - Clickable */}
                <button
                  onClick={() => toggleWeek(week.week)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition text-left"
                >
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                      {week.week}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{week.title}</h3>
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
                    <div>
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
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        {!subscribed && (
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h3>
            <p className="text-blue-100 mb-6">
              Join hundreds of learners exploring church history in an accessible, engaging way.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              Sign Up Above
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyGuide;
