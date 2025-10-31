import React, { useState, useEffect } from 'react';
import { Users, Calendar, ArrowLeft, Globe } from 'lucide-react';

const DenominationExplorer = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('compare'); // 'compare' | 'worship'
  const [comparisonDenoms, setComparisonDenoms] = useState([]);
  const [selectedWorshipDenom, setSelectedWorshipDenom] = useState(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Data copied from DenominationVisualizer to power comparison and worship views
  const denominations = {
    catholic: {
      name: "Catholic",
      year: "33 AD",
      members: "1.3B",
      fullName: "Roman Catholic Church",
      description:
        "The Catholic Church developed highly centralized papal monarchy, with the pope claiming universal jurisdiction as 'Vicar of Christ.' Catholic ecclesiology emphasizes apostolic succession—authority passed through unbroken chain of bishops from Peter. The West embraced Scholasticism, integrating Aristotelian philosophy with theology, epitomized by Thomas Aquinas's Summa Theologica. Papal authority reached its zenith under Innocent III (1198-1216), though later crises damaged prestige.",
      beliefs: [
        "Seven Sacraments (defined at Fourth Lateran Council, 1215)",
        "Real Presence in Eucharist (Transubstantiation)",
        "Papal primacy and infallibility (Vatican I, 1870)",
        "Scripture and Tradition as dual sources",
        "Veneration of Mary and saints",
        "Purgatory and prayers for the dead",
      ],
      color: "#d4af37",
      keyFigures: [
        "St. Peter",
        "St. Augustine of Hippo",
        "St. Thomas Aquinas",
        "St. Francis of Assisi",
        "Pope Innocent III",
        "Pope John Paul II",
        "Pope Francis",
      ],
      geography:
        "In 1900, Europe contained 66% of the world's Christians. By 2020, Sub-Saharan Africa alone contains 31%. Latin America remains Catholic stronghold but declining to Pentecostals.",
      geographicDistribution: [
        { region: "Latin America", percentage: "40%", trend: "declining", explanation: "Still plurality but steep decline to Pentecostals—especially in Brazil." },
        { region: "Europe", percentage: "24%", trend: "declining", explanation: "From 95% Christian (1900) to 76% (2020). Rapid secularization, most affiliated are non-practicing." },
        { region: "Sub-Saharan Africa", percentage: "17%", trend: "rapid-growth", explanation: "Explosive growth through missions and indigenous clergy. By 2050, Africa projected to have 38% of global Christians." },
        { region: "Asia-Pacific", percentage: "12%", trend: "growing", explanation: "Strong growth in Philippines (83 million Catholics) and parts of India, Vietnam." },
        { region: "North America", percentage: "6%", trend: "declining", explanation: "From 97% Christian (1900) to 72% (2020). Declining attendance especially among younger Catholics." },
        { region: "Middle East/North Africa", percentage: "1%", trend: "stable", explanation: "Small ancient communities holding steady despite persecution and emigration." },
      ],
      debates: [
        "Protestants contest Catholic institutional continuity claims and reject papal supremacy",
        "Orthodox reject papal supremacy and filioque addition to Creed",
        "Pre-Reformation reformers (Waldensians, Wycliffe, Hus) anticipated Protestant themes",
        "Internal debates over Vatican II interpretation and implementation",
        "Liberation theology's relationship to Marxism debated within Catholicism",
      ],
      sources: [
        { title: "Vatican Official", url: "https://www.vatican.va/" },
        { title: "Catechism", url: "https://www.vatican.va/archive/ENG0015/_INDEX.HTM" },
      ],
    },
    orthodox: {
      name: "Orthodox",
      year: "1054",
      members: "220M",
      fullName: "Eastern Orthodox Church",
      description:
        "Eastern Orthodoxy maintained conciliar governance, with Constantinople holding honorary primacy as 'first among equals.' They emphasized mystical theology and theosis (becoming one with God), preserved the original Nicene Creed without filioque, and used vernacular languages in liturgy. Saints Cyril and Methodius created Slavonic alphabets enabling indigenous worship. Missionary expansion reached Bulgaria (864), Serbia (9th century), and Kievan Rus (988).",
      beliefs: [
        "Seven Ecumenical Councils (325-787) define faith",
        "Rejection of papal supremacy and filioque",
        "Theosis (deification) as salvation goal",
        "Icons as 'windows to divine'",
        "Mystical theology and liturgical continuity",
        "Divine Liturgy unchanged from early church",
      ],
      color: "#8b5cf6",
      keyFigures: [
        "St. John Chrysostom",
        "St. Basil the Great",
        "St. Gregory Palamas",
        "St. Cyril and Methodius",
      ],
      geography: "Eastern Europe, Russia, Greece, Middle East. Recovering from Soviet persecution.",
      geographicDistribution: [
        { region: "Eastern Europe", percentage: "42%", trend: "stable", explanation: "Post-communist recovery complete." },
        { region: "Russia & Former Soviet", percentage: "35%", trend: "growing", explanation: "Significant recovery after Soviet persecution that killed 100,000+ priests and believers." },
        { region: "Middle East", percentage: "10%", trend: "declining", explanation: "Emigration due to persecution and war." },
        { region: "Greece & Balkans", percentage: "8%", trend: "stable", explanation: "Deeply rooted but facing secularization." },
        { region: "North America", percentage: "3%", trend: "growing", explanation: "Immigration and converts." },
        { region: "Western Europe", percentage: "2%", trend: "growing", explanation: "Diaspora communities growing." },
      ],
      debates: [
        "Catholics argue Orthodox lack unity without papal authority binding churches together",
        "Orthodox argue Catholics added unauthorized innovations (filioque, papal supremacy)",
        "Fourth Crusade's sack of Constantinople (1204) remains unhealed wound",
        "2016 Pan-Orthodox Council boycotted by Russian, Georgian, Bulgarian, Antiochian churches",
        "East-West mutual excommunications lifted 1965 but ecclesiological disagreements remain",
      ],
      sources: [
        { title: "OCA", url: "https://www.oca.org/" },
        { title: "Greek Orthodox", url: "https://www.goarch.org/" },
      ],
    },
    lutheran: {
      name: "Lutheran",
      year: "1517",
      members: "75M",
      fullName: "Lutheran Church",
      description:
        "Martin Luther posted 95 Theses at Wittenberg Castle Church October 31, 1517, initially intending academic debate about indulgences. The printing press enabled rapid dissemination across Europe. Excommunicated by Pope Leo X and declared outlaw by Emperor Charles V at Diet of Worms (1521), Luther developed comprehensive theological reformation grounded in sola scriptura (Scripture alone), sola fide (justification by faith alone), and sola gratia (salvation by grace alone). By mid-16th century, Lutheranism dominated northern Europe under cuius regio, eius religio (whose realm, his religion).",
      beliefs: [
        "Justification by faith alone (sola fide)",
        "Scripture as sole authority (sola scriptura)",
        "Two sacraments: Baptism and Eucharist",
        "Real Presence—Christ's body and blood 'in, with, and under' bread and wine",
        "Priesthood of all believers",
        "Salvation by grace alone (sola gratia)",
      ],
      color: "#3b82f6",
      keyFigures: ["Martin Luther", "Philip Melanchthon", "Johann Sebastian Bach", "Dietrich Bonhoeffer"],
      geography: "Germany, Scandinavia, US Midwest. Growing explosively in Africa.",
      geographicDistribution: [
        { region: "Northern Europe", percentage: "35%", trend: "declining", explanation: "Rapid secularization in Scandinavia." },
        { region: "Sub-Saharan Africa", percentage: "28%", trend: "rapid-growth", explanation: "Explosive growth in Ethiopia, Tanzania." },
        { region: "North America", percentage: "20%", trend: "declining", explanation: "Both liberal and conservative branches declining." },
      ],
      debates: [
        "Debates over confessional vs. liberal interpretations",
        "Intercommunion with other Protestants and Catholics",
        "Role of women and LGBTQ+ inclusion by synod",
      ],
      sources: [],
    },
    reformed: {
      name: "Reformed",
      year: "1536",
      members: "75M",
      fullName: "Reformed/Presbyterian Tradition",
      description:
        "Developed under Ulrich Zwingli and John Calvin, emphasizing God's sovereignty and covenant theology. Presbyterian polity governed by elders.",
      beliefs: [
        "Sola Scriptura, Sola Fide, Soli Deo Gloria",
        "TULIP (Calvinism) variously held",
        "Two sacraments as signs and seals",
      ],
      color: "#0ea5e9",
      keyFigures: ["John Calvin", "Ulrich Zwingli", "John Knox"],
      geography: "Switzerland, Netherlands, Scotland, USA",
      geographicDistribution: [],
      debates: ["Extent of atonement", "Predestination"],
      sources: [],
    },
    anglican: {
      name: "Anglican",
      year: "1534",
      members: "85M",
      fullName: "Anglican Communion",
      description:
        "English Reformation via Act of Supremacy. Via media between Catholic and Reformed traditions. Book of Common Prayer central.",
      beliefs: [
        "Scripture, Tradition, Reason",
        "Two sacraments instituted by Christ",
      ],
      color: "#ef4444",
      keyFigures: ["Thomas Cranmer", "Richard Hooker"],
      geography: "England, Africa, North America, Global",
      geographicDistribution: [],
      debates: ["Women bishops", "LGBTQ+ inclusion"],
      sources: [],
    },
    anabaptist: {
      name: "Anabaptist",
      year: "1525",
      members: "4M",
      fullName: "Anabaptist (Mennonite/Amish)",
      description: "Radical Reformation: believers' baptism, pacifism, separation from world.",
      beliefs: ["Believers' baptism", "Pacifism"],
      color: "#22c55e",
      keyFigures: [],
      geography: "Europe, North America",
      geographicDistribution: [],
      debates: [],
      sources: [],
    },
    baptist: {
      name: "Baptist",
      year: "1609",
      members: "100M",
      fullName: "Baptist Churches",
      description:
        "Emphasize believers' baptism by immersion, local church autonomy, and religious liberty; diverse in theology and practice.",
      beliefs: ["Believers' baptism", "Congregational polity"],
      color: "#f59e0b",
      keyFigures: [],
      geography: "Global, strong in USA",
      geographicDistribution: [],
      debates: ["Complementarian vs egalitarian", "Calvinist vs non-Calvinist"],
      sources: [],
    },
    methodist: {
      name: "Methodist",
      year: "1738",
      members: "80M",
      fullName: "Methodist/Wesleyan",
      description:
        "Wesleyan revival emphasizing sanctification and social holiness; connexional structure; open table communion in many contexts.",
      beliefs: ["Prevenient grace", "Entire sanctification"],
      color: "#ef4444",
      keyFigures: ["John Wesley", "Charles Wesley"],
      geography: "Global",
      geographicDistribution: [],
      debates: ["LGBTQ+ inclusion", "Global north/south tensions"],
      sources: [],
    },
    pentecostal: {
      name: "Pentecostal",
      year: "1906",
      members: "500M+",
      fullName: "Pentecostal/Charismatic",
      description:
        "Azusa Street revival; emphasis on gifts of the Spirit, especially tongues as initial evidence in classical Pentecostalism.",
      beliefs: ["Baptism in the Holy Spirit", "Gifts of the Spirit"],
      color: "#a855f7",
      keyFigures: ["William J. Seymour"],
      geography: "Explosive growth in Global South",
      geographicDistribution: [],
      debates: ["Manifestations and order in worship"],
      sources: [],
    },
    restorationist: {
      name: "Restorationist",
      year: "1832",
      members: "7M",
      fullName: "Restoration Movement",
      description:
        "Seek to restore New Testament church patterns; 'No creed but Christ'; later splits over instrumental music and modernism.",
      beliefs: ["Biblical pattern", "Weekly communion"],
      color: "#65a30d",
      keyFigures: ["Barton Stone", "Alexander Campbell"],
      geography: "USA",
      geographicDistribution: [],
      debates: ["Instruments in worship"],
      sources: [],
    },
    holiness: {
      name: "Holiness",
      year: "1867",
      members: "12M",
      fullName: "Holiness Movement",
      description:
        "Emphasizes sanctification as second work of grace; some groups later influenced by Pentecostalism, others rejected tongues.",
      beliefs: ["Entire sanctification"],
      color: "#10b981",
      keyFigures: [],
      geography: "USA and global",
      geographicDistribution: [],
      debates: ["Relationship to Pentecostalism"],
      sources: [],
    },
    nondenominational: {
      name: "Non-Denominational",
      year: "1968-",
      members: "Varies",
      fullName: "Non-Denominational Churches",
      description:
        "Rapid growth of independent evangelical churches, often megachurches; contemporary worship, local autonomy, minimal formal ties.",
      beliefs: ["Bible-centered", "Local autonomy"],
      color: "#9333ea",
      keyFigures: ["Chuck Smith (Calvary Chapel)", "Rick Warren", "Bill Hybels"],
      geography: "Predominantly US suburbs; increasingly global",
      geographicDistribution: [
        { region: "North America", percentage: "65%", trend: "rapid-growth", explanation: "Explosive suburban growth. Now 3rd largest Christian group in US." },
        { region: "Asia-Pacific", percentage: "15%", trend: "rapid-growth", explanation: "Megachurches in South Korea, Singapore, Philippines." },
        { region: "Latin America", percentage: "8%", trend: "growing", explanation: "Model spreading rapidly." },
        { region: "Sub-Saharan Africa", percentage: "7%", trend: "growing", explanation: "Independent evangelicals growing." },
        { region: "Europe", percentage: "4%", trend: "growing", explanation: "Urban churches growing." },
        { region: "Other", percentage: "1%", trend: "growing", explanation: "Expanding globally." },
      ],
      debates: [
        "Traditional denominations argue non-denoms lack accountability structures",
        "Celebrity pastor culture concerns in megachurches",
        "'No denomination' is itself a denomination with implicit theology and practice",
        "Theological drift concerns without confessional standards",
      ],
      sources: [],
    },
  };

  // Worship experiences per denomination key
  const worshipExperiences = {
    catholic: {
      serviceName: "Mass",
      typicalLength: "60-75 minutes",
      schedule: "Saturday evening Vigil, multiple Sunday Masses",
      serviceStructure: [
        "Introductory Rites (Sign of the Cross, Penitential Act)",
        "Liturgy of the Word (Readings, Homily, Creed, Prayers)",
        "Liturgy of the Eucharist (Preparation, Eucharistic Prayer, Communion)",
        "Concluding Rites (Blessing, Dismissal)",
      ],
      musicStyle:
        "Varies: Chant, hymns, organ; some parishes use contemporary music but liturgy remains structured",
      dressExpectation: "Business casual to formal; modest attire",
      communionDetails:
        "Offered at every Mass. Belief in Real Presence (Transubstantiation). Closed communion for Catholics in a state of grace",
      participation:
        "Stand/kneel/sit with congregation. Non-Catholics typically refrain from receiving communion but may come forward for a blessing",
      uniqueElements: [
        "Use of liturgical calendar and vestments",
        "Incense in some Masses",
        "Confession typically available before Mass",
      ],
      firstTimeVisitor:
        "Expect a reverent, structured service focused on the Eucharist. Follow along in missal or on screens. No pressure to take communion if not Catholic.",
    },
    orthodox: {
      serviceName: "Divine Liturgy",
      typicalLength: "90-120 minutes",
      schedule: "Sunday morning, feast days; Vespers night before",
      serviceStructure: [
        "Proskomedia (Preparation)",
        "Liturgy of Catechumens (Scripture readings, sermon)",
        "Liturgy of the Faithful (Eucharist)",
      ],
      musicStyle:
        "A cappella chant (no instruments) in traditional languages or English; rich iconography and incense",
      dressExpectation: "Modest, often head coverings for women in some parishes",
      communionDetails:
        "Closed communion; reserved for Orthodox Christians in good standing. Real Presence affirmed",
      participation:
        "Standing common for much of service; frequent sign of the cross; veneration of icons",
      uniqueElements: [
        "Iconostasis separating nave and altar",
        "Incense, processions",
        "Lengthy liturgy steeped in ancient tradition",
      ],
      firstTimeVisitor:
        "Expect a long, reverent service with rich symbolism. Follow the congregation. Visitors welcome to observe; communion reserved for Orthodox.",
    },
    lutheran: {
      serviceName: "Divine Service / Worship Service",
      typicalLength: "60-75 minutes",
      schedule: "Sunday morning; midweek services in some churches",
      serviceStructure: [
        "Confession and Absolution",
        "Liturgical hymns and readings",
        "Sermon",
        "Communion (weekly or monthly depending on church)",
      ],
      musicStyle: "Traditional hymns with organ; some contemporary services exist",
      dressExpectation: "Business casual",
      communionDetails:
        "Real Presence affirmed. Close(d) communion in conservative synods; more open in ELCA",
      participation: "Liturgical responses, hymns, standing/kneeling",
      uniqueElements: ["Liturgical structure", "Law/Gospel preaching"],
      firstTimeVisitor: "Expect structured liturgy with hymns and sermon. Communion practice varies by synod.",
    },
    reformed: {
      serviceName: "Worship Service",
      typicalLength: "60-75 minutes",
      schedule: "Sunday morning; some have evening services",
      serviceStructure: [
        "Call to Worship and Opening Prayer",
        "Psalms/Hymns",
        "Sermon (expository preaching)",
        "Communion (monthly/weekly depending on church)",
      ],
      musicStyle: "Psalms/hymns; simple and reverent",
      dressExpectation: "Business casual",
      communionDetails:
        "Spiritual presence view common; frequency varies",
      participation: "Corporate readings and singing",
      uniqueElements: ["Strong emphasis on God's sovereignty in worship"],
      firstTimeVisitor: "Expect Scripture-rich, reverent service with emphasis on preaching.",
    },
    methodist: {
      serviceName: "Sunday Worship Service",
      typicalLength: "60-75 minutes",
      schedule: "Sunday morning with multiple services",
      serviceStructure: [
        "Hymns/Opening",
        "Prayers and Scripture",
        "Sermon",
        "Communion (weekly or monthly; open table)",
      ],
      musicStyle:
        "Wide variety: Traditional hymns (especially Charles Wesley's), contemporary worship, gospel. Often both services offered",
      dressExpectation: "Casual to business casual",
      communionDetails: "Open table common; means of grace",
      participation: "Responsive readings, hymns",
      uniqueElements: ["Emphasis on holiness and personal transformation"],
      firstTimeVisitor: "Friendly, structured but accessible; open communion in many congregations.",
    },
    baptist: {
      serviceName: "Worship Service",
      typicalLength: "60-90 minutes",
      schedule: "Sunday morning; some have evening services",
      serviceStructure: [
        "Worship: Hymns or Contemporary Praise",
        "Prayer",
        "Sermon (central)",
        "Lord's Supper (monthly/quarterly)",
      ],
      musicStyle:
        "Varies widely: Traditional hymns with piano/organ in traditional churches; contemporary worship bands in modern churches; Southern gospel in some",
      dressExpectation: "Casual to business casual",
      communionDetails: "Symbolic memorial; frequency varies",
      participation: "Singing, amens, altar calls in some",
      uniqueElements: ["Congregational autonomy"],
      firstTimeVisitor: "Bible-centered preaching; style varies by church; welcoming and informal in many.",
    },
    pentecostal: {
      serviceName: "Worship Service / Celebration",
      typicalLength: "90-120 minutes",
      schedule: "Sunday morning; midweek revival services in some",
      serviceStructure: [
        "Extended Praise and Worship (30-45 minutes)",
        "Testimonies/Prayer",
        "Sermon",
        "Ministry time (prayer for healing, altar calls)",
      ],
      musicStyle:
        "Contemporary praise and worship, very energetic. Live band, drums, electric guitars. Upbeat and emotional",
      dressExpectation: "Casual to dressy; very mixed",
      communionDetails: "Symbolic; frequency varies",
      participation:
        "Spontaneous, Spirit-led worship (less structured)",
      uniqueElements: [
        "Speaking in tongues, prophecy in some",
        "Healing/prayer ministry",
      ],
      firstTimeVisitor:
        "Expect loud, long, and expressive worship. Don't feel pressured to speak in tongues or participate in manifestations. Very welcoming.",
    },
    restorationist: {
      serviceName: "Worship Assembly / Church Service",
      typicalLength: "60-75 minutes",
      schedule: "Sunday morning; some evening services",
      serviceStructure: [
        "Singing (a cappella in Churches of Christ)",
        "Prayer",
        "Communion (weekly)",
        "Sermon",
      ],
      musicStyle:
        "Churches of Christ: a cappella singing; Christian Churches: mixed instrumentation",
      dressExpectation: "Casual to business casual",
      communionDetails:
        "Weekly - every Sunday without exception. Central act of worship. Open to Christians (varies by group)",
      participation: "Congregational singing, scripture-heavy preaching",
      uniqueElements: ["Weekly communion", "Baptism by immersion"],
      firstTimeVisitor:
        "Simple, Bible-centered worship. Churches of Christ have no instruments - only singing. Communion weekly.",
    },
    nondenominational: {
      serviceName: "Worship Service / Sunday Celebration",
      typicalLength: "60-90 minutes",
      schedule: "Multiple Sunday services; Saturday evening in some",
      serviceStructure: [
        "Extended Worship Set (20-30 minutes of contemporary music)",
        "Welcome/Announcements",
        "Sermon (practical, topical or expository)",
        "Response/Prayer",
      ],
      musicStyle:
        "Predominantly contemporary worship with full band (drums, guitars, keys). Hillsong/Bethel style common. Professional production",
      dressExpectation: "Casual; very welcoming",
      communionDetails: "Varies: Monthly/quarterly; some weekly",
      participation: "Hands raised common but optional; very casual",
      uniqueElements: ["Screens, lights, modern production", "Coffee in lobbies"],
      firstTimeVisitor:
        "Most accessible for newcomers. Casual dress, contemporary music, relevant teaching. Often feels like a concert; very welcoming.",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-3">Explore Denominations</h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-3xl">
            Compare beliefs, practices, and worship experiences across Christian traditions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Toolbar */}
        <div className="bg-white rounded-2xl border-2 border-slate-200 p-4 mb-8 shadow">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <button
              onClick={() => onNavigate && onNavigate('explorer')}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border-2 border-slate-200 text-slate-700 hover:bg-slate-50 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Explore</span>
            </button>

            {/* Tab switcher */}
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <button
                onClick={() => setActiveTab('compare')}
                className={`px-5 py-2.5 rounded-xl font-semibold transition inline-flex items-center justify-center gap-2 ${
                  activeTab === 'compare'
                    ? 'bg-purple-600 text-white shadow'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Users className="w-5 h-5" />
                Compare Denominations
              </button>
              <button
                onClick={() => setActiveTab('worship')}
                className={`px-5 py-2.5 rounded-xl font-semibold transition inline-flex items-center justify-center gap-2 ${
                  activeTab === 'worship'
                    ? 'bg-purple-600 text-white shadow'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Calendar className="w-5 h-5" />
                Worship Experiences
              </button>
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 md:p-8 shadow-lg">
          {activeTab === 'compare' && (
            <div className="space-y-6">
              <div className="mb-2">
                <h2 className="text-2xl font-black text-slate-900">Compare Denominations</h2>
                <p className="text-slate-600 text-sm">Select 2-3 denominations to compare side-by-side</p>
              </div>

              {/* Selection Grid */}
              {comparisonDenoms.length < 3 && (
                <div className="mb-2">
                  <h4 className="font-bold text-slate-900 mb-3">
                    {comparisonDenoms.length === 0 ? 'Select denominations to compare:' : `Select ${3 - comparisonDenoms.length} more:`}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {Object.keys(denominations)
                      .filter((key) => !comparisonDenoms.includes(key))
                      .map((key) => (
                        <button
                          key={key}
                          onClick={() => setComparisonDenoms([...comparisonDenoms, key])}
                          className="p-3 rounded-lg border-2 bg-white hover:shadow-lg transition-all hover:-translate-y-0.5 text-left"
                          style={{ borderColor: denominations[key].color }}
                        >
                          <div className="font-serif text-sm text-slate-900">{denominations[key].name}</div>
                          <div className="text-xs text-slate-500 mt-1">{denominations[key].year}</div>
                        </button>
                      ))}
                  </div>
                </div>
              )}

              {/* Comparison View */}
              {comparisonDenoms.length >= 2 && (
                <div className="space-y-6">
                  {/* Selected Denominations Header */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-bold text-slate-900">Comparing:</span>
                    {comparisonDenoms.map((key) => (
                      <div
                        key={key}
                        className="flex items-center gap-2 px-4 py-2 rounded-full border-2"
                        style={{ borderColor: denominations[key].color, backgroundColor: `${denominations[key].color}20` }}
                      >
                        <span className="font-medium text-slate-900">{denominations[key].name}</span>
                        <button
                          onClick={() => setComparisonDenoms(comparisonDenoms.filter((d) => d !== key))}
                          className="text-slate-500 hover:text-slate-700 font-bold"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                    {comparisonDenoms.length < 3 && (
                      <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                      >
                        + Add another
                      </button>
                    )}
                  </div>

                  {/* Basic Info Comparison */}
                  <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-4 border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-4 text-lg">Basic Information</h4>
                    <div className={`grid gap-4 grid-cols-1 ${comparisonDenoms.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
                      {comparisonDenoms.map((key) => (
                        <div key={key} className="bg-white rounded-lg p-4 border-2" style={{ borderColor: denominations[key].color }}>
                          <h5 className="font-bold text-lg mb-2" style={{ color: denominations[key].color }}>{denominations[key].fullName}</h5>
                          <div className="space-y-2 text-sm">
                            <div>
                              <strong>Founded:</strong> {denominations[key].year}
                            </div>
                            <div>
                              <strong>Members:</strong> {denominations[key].members}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shared Foundation */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border-2 border-green-400 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-lg font-bold">✓</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-lg">What We Share: Common Christian Beliefs</h4>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-sm text-slate-600 italic mb-4">Despite our differences, all Christians confess these foundational truths together:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        <div className="flex gap-3 items-start"><span className="text-green-600 font-bold text-lg flex-shrink-0">✓</span><div><span className="font-semibold text-slate-900">Trinity:</span><span className="text-slate-700 text-sm ml-1">One God in three persons (Father, Son, Holy Spirit)</span></div></div>
                        <div className="flex gap-3 items-start"><span className="text-green-600 font-bold text-lg flex-shrink-0">✓</span><div><span className="font-semibold text-slate-900">Jesus Christ:</span><span className="text-slate-700 text-sm ml-1">Fully God and fully human, born of Virgin Mary</span></div></div>
                        <div className="flex gap-3 items-start"><span className="text-green-600 font-bold text-lg flex-shrink-0">✓</span><div><span className="font-semibold text-slate-900">Salvation:</span><span className="text-slate-700 text-sm ml-1">Through Jesus Christ's death and resurrection</span></div></div>
                        <div className="flex gap-3 items-start"><span className="text-green-600 font-bold text-lg flex-shrink-0">✓</span><div><span className="font-semibold text-slate-900">Resurrection:</span><span className="text-slate-700 text-sm ml-1">Christ physically rose from the dead</span></div></div>
                        <div className="flex gap-3 items-start"><span className="text-green-600 font-bold text-lg flex-shrink-0">✓</span><div><span className="font-semibold text-slate-900">Second Coming:</span><span className="text-slate-700 text-sm ml-1">Christ will return in glory to judge the living and the dead</span></div></div>
                        <div className="flex gap-3 items-start"><span className="text-green-600 font-bold text-lg flex-shrink-0">✓</span><div><span className="font-semibold text-slate-900">Scripture:</span><span className="text-slate-700 text-sm ml-1">The Bible is God's inspired Word</span></div></div>
                        <div className="flex gap-3 items-start"><span className="text-green-600 font-bold text-lg flex-shrink-0">✓</span><div><span className="font-semibold text-slate-900">Baptism:</span><span className="text-slate-700 text-sm ml-1">Essential sacrament of Christian initiation</span></div></div>
                        <div className="flex gap-3 items-start"><span className="text-green-600 font-bold text-lg flex-shrink-0">✓</span><div><span className="font-semibold text-slate-900">Communion:</span><span className="text-slate-700 text-sm ml-1">Remembering and encountering Christ's sacrifice</span></div></div>
                      </div>
                    </div>
                  </div>

                  {/* Belief Comparison - Topic by Topic */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                    <h4 className="font-bold text-slate-900 mb-4 text-lg">Belief Comparison by Topic</h4>
                    <p className="text-sm text-slate-600 mb-4 italic">Here's how these traditions understand key aspects of Christian faith:</p>

                    <div className="space-y-4">
                      {/* Scripture & Authority */}
                      <div className="bg-white rounded-lg p-4">
                        <h5 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide border-b-2 border-blue-200 pb-2">📖 Scripture & Authority</h5>
                        <div className={`grid gap-4 grid-cols-1 ${comparisonDenoms.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
                          {comparisonDenoms.map((key) => {
                            let authority = '';
                            if (key === 'catholic') authority = 'Scripture and Sacred Tradition through Church Magisterium';
                            else if (key === 'orthodox') authority = 'Scripture interpreted through Tradition and Seven Ecumenical Councils';
                            else if (key === 'anglican') authority = 'Scripture, Tradition, and Reason (three-legged stool)';
                            else if (key === 'methodist') authority = 'Scripture primary, supported by Tradition, Reason, Experience (Wesleyan Quadrilateral)';
                            else if (key === 'lutheran' || key === 'reformed' || key === 'baptist') authority = 'Sola Scriptura - Scripture alone as final authority';
                            else if (key === 'pentecostal') authority = 'Scripture as inspired, inerrant Word of God';
                            else authority = 'Scripture-centered (approaches vary)';

                            return (
                              <div key={key} className="bg-slate-50 rounded-lg p-3 border-l-4" style={{ borderColor: denominations[key].color }}>
                                <div className="font-semibold text-sm mb-2" style={{ color: denominations[key].color }}>{denominations[key].name}</div>
                                <div className="text-sm text-slate-700">{authority}</div>
                              </div>
                            );
                          })}
                        </div>
                        <div className="mt-3 bg-green-50 border-l-4 border-green-500 rounded p-3">
                          <p className="text-xs text-slate-700">
                            <span className="text-green-600 font-bold">✓ Agreement:</span> All affirm the Bible as God's inspired Word; differences lie in the role of tradition and church authority in interpretation
                          </p>
                        </div>
                      </div>

                      {/* Salvation & Grace */}
                      <div className="bg-white rounded-lg p-4">
                        <h5 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide border-b-2 border-blue-200 pb-2">✨ Salvation & Grace</h5>
                        <div className={`grid gap-4 grid-cols-1 ${comparisonDenoms.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
                          {comparisonDenoms.map((key) => {
                            let salvation = '';
                            if (key === 'catholic') salvation = 'Grace through faith and works cooperating; sacraments as channels of grace';
                            else if (key === 'orthodox') salvation = 'Theosis (becoming one with God) through grace; synergy of divine and human will';
                            else if (key === 'anglican') salvation = 'Salvation by grace through faith; works as evidence of living faith';
                            else if (key === 'lutheran') salvation = 'Sola Fide - justification by faith alone through grace alone';
                            else if (key === 'reformed') salvation = 'Total depravity; unconditional election; salvation entirely by grace (TULIP)';
                            else if (key === 'methodist') salvation = 'Prevenient grace enables response; salvation by grace through faith (Arminian)';
                            else if (key === 'baptist') salvation = 'Salvation by grace through faith alone; believer makes conscious decision';
                            else if (key === 'pentecostal') salvation = 'Salvation by grace through faith; emphasis on personal conversion experience';
                            else salvation = 'Salvation through Christ (various emphases)';

                            return (
                              <div key={key} className="bg-slate-50 rounded-lg p-3 border-l-4" style={{ borderColor: denominations[key].color }}>
                                <div className="font-semibold text-sm mb-2" style={{ color: denominations[key].color }}>{denominations[key].name}</div>
                                <div className="text-sm text-slate-700">{salvation}</div>
                              </div>
                            );
                          })}
                        </div>
                        <div className="mt-3 bg-green-50 border-l-4 border-green-500 rounded p-3">
                          <p className="text-xs text-slate-700">
                            <span className="text-green-600 font-bold">✓ Agreement:</span> All affirm salvation is ultimately by God's grace through Christ; differences lie in how faith and works relate
                          </p>
                        </div>
                      </div>

                      {/* Sacraments/Ordinances */}
                      <div className="bg-white rounded-lg p-4">
                        <h5 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide border-b-2 border-blue-200 pb-2">🍞 Sacraments/Ordinances</h5>
                        <div className={`grid gap-4 grid-cols-1 ${comparisonDenoms.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
                          {comparisonDenoms.map((key) => {
                            let sacraments = '';
                            if (key === 'catholic') sacraments = 'Seven sacraments; Real Presence (Transubstantiation) in Eucharist';
                            else if (key === 'orthodox') sacraments = 'Seven holy mysteries; Real Presence in Divine Liturgy';
                            else if (key === 'anglican') sacraments = 'Two sacraments ordained by Christ (Baptism, Eucharist) + five sacramental rites';
                            else if (key === 'lutheran') sacraments = 'Two sacraments (Baptism, Communion); Real Presence (Sacramental Union)';
                            else if (key === 'reformed') sacraments = 'Two sacraments as signs and seals; spiritual presence in Communion';
                            else if (key === 'methodist') sacraments = 'Two sacraments as means of grace; open table for Communion';
                            else if (key === 'baptist') sacraments = "Two ordinances (symbolic): Believer's baptism by immersion, Lord's Supper";
                            else if (key === 'pentecostal') sacraments = 'Two ordinances (symbolic); emphasis on baptism in Holy Spirit with tongues';
                            else sacraments = 'Baptism and Communion observed (approaches vary)';

                            return (
                              <div key={key} className="bg-slate-50 rounded-lg p-3 border-l-4" style={{ borderColor: denominations[key].color }}>
                                <div className="font-semibold text-sm mb-2" style={{ color: denominations[key].color }}>{denominations[key].name}</div>
                                <div className="text-sm text-slate-700">{sacraments}</div>
                              </div>
                            );
                          })}
                        </div>
                        <div className="mt-3 bg-green-50 border-l-4 border-green-500 rounded p-3">
                          <p className="text-xs text-slate-700">
                            <span className="text-green-600 font-bold">✓ Agreement:</span> All practice Baptism and Communion/Eucharist as central acts commanded by Christ; differences lie in number, nature, and understanding
                          </p>
                        </div>
                      </div>

                      {/* Church Governance */}
                      <div className="bg-white rounded-lg p-4">
                        <h5 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide border-b-2 border-blue-200 pb-2">⛪ Church Governance</h5>
                        <div className={`grid gap-4 grid-cols-1 ${comparisonDenoms.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
                          {comparisonDenoms.map((key) => {
                            let governance = '';
                            if (key === 'catholic') governance = 'Papal monarchy: Pope as successor of Peter, bishops in apostolic succession';
                            else if (key === 'orthodox') governance = 'Conciliar: Patriarchs and bishops in apostolic succession, no single head';
                            else if (key === 'anglican') governance = 'Episcopal: Bishops, priests, deacons; autonomous provinces in communion';
                            else if (key === 'lutheran') governance = 'Varies: Episcopal (bishops) or congregational structure by region';
                            else if (key === 'reformed') governance = 'Presbyterian: Elders govern through councils and presbyteries';
                            else if (key === 'methodist') governance = 'Connexional: Bishops provide oversight; connected conferences';
                            else if (key === 'baptist') governance = 'Congregational: Each local church is fully autonomous and self-governing';
                            else if (key === 'pentecostal') governance = 'Varies widely: From episcopal to congregational structures';
                            else governance = 'Various structures (local autonomy common)';

                            return (
                              <div key={key} className="bg-slate-50 rounded-lg p-3 border-l-4" style={{ borderColor: denominations[key].color }}>
                                <div className="font-semibold text-sm mb-2" style={{ color: denominations[key].color }}>{denominations[key].name}</div>
                                <div className="text-sm text-slate-700">{governance}</div>
                              </div>
                            );
                          })}
                        </div>
                        {(() => {
                          const hasEpiscopal = comparisonDenoms.filter((k) => ['catholic', 'orthodox', 'anglican', 'methodist'].includes(k)).length >= 2;
                          const hasCongregational = comparisonDenoms.filter((k) => ['baptist', 'pentecostal', 'nondenominational'].includes(k)).length >= 2;
                          if (hasEpiscopal) {
                            return (
                              <div className="mt-3 bg-green-50 border-l-4 border-green-500 rounded p-3">
                                <p className="text-xs text-slate-700">
                                  <span className="text-green-600 font-bold">✓ Agreement:</span> Episcopal traditions share belief in apostolic succession through bishops
                                </p>
                              </div>
                            );
                          } else if (hasCongregational) {
                            return (
                              <div className="mt-3 bg-green-50 border-l-4 border-green-500 rounded p-3">
                                <p className="text-xs text-slate-700">
                                  <span className="text-green-600 font-bold">✓ Agreement:</span> Congregational traditions share emphasis on local church autonomy
                                </p>
                              </div>
                            );
                          }
                          return null;
                        })()}
                      </div>
                    </div>
                  </div>

                  {/* Geographic Distribution */}
                  <div className="bg-white rounded-xl p-4 border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-4 text-lg">Geographic Distribution (2025)</h4>
                    <div className={`grid gap-4 grid-cols-1 ${comparisonDenoms.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
                      {comparisonDenoms.map((key) => (
                        <div key={key}>
                          <h5 className="font-bold mb-3" style={{ color: denominations[key].color }}>{denominations[key].name}</h5>
                          <div className="space-y-2">
                            {(denominations[key].geographicDistribution || []).slice(0, 4).map((region, idx) => (
                              <div key={idx} className="text-sm">
                                <div className="flex justify-between mb-1">
                                  <span className="text-slate-700 text-xs">{region.region}</span>
                                  <span className="font-semibold text-xs">{region.percentage}</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-1.5">
                                  <div className="h-1.5 rounded-full" style={{ width: region.percentage, backgroundColor: denominations[key].color }}></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Debates */}
                  <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                    <h4 className="font-bold text-slate-900 mb-4 text-lg">Points of Debate & Distinctives</h4>
                    <div className={`grid gap-4 grid-cols-1 ${comparisonDenoms.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
                      {comparisonDenoms.map((key) => (
                        <div key={key}>
                          <h5 className="font-bold mb-2" style={{ color: denominations[key].color }}>{denominations[key].name}</h5>
                          <ul className="space-y-1.5">
                            {(denominations[key].debates || []).slice(0, 4).map((debate, idx) => (
                              <li key={idx} className="flex gap-2 text-sm">
                                <div className="w-1 h-1 rounded-full bg-amber-600 mt-1.5 flex-shrink-0"></div>
                                <span className="text-slate-700">{debate}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center gap-3 pt-2">
                    <button
                      onClick={() => setComparisonDenoms([])}
                      className="px-6 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg font-medium transition-colors"
                    >
                      Clear Selection
                    </button>
                  </div>
                </div>
              )}

              {comparisonDenoms.length === 1 && (
                <div className="text-center py-12 text-slate-500">
                  <p className="mb-2">Select at least one more denomination to begin comparison</p>
                  <p className="text-sm">You can compare up to 3 denominations at once</p>
                </div>
              )}

              {comparisonDenoms.length === 0 && (
                <div className="text-center py-12 text-slate-500">
                  <Globe className="w-16 h-16 mx-auto mb-4 text-slate-300" />
                  <p className="text-lg font-medium mb-2">Compare Denominations Side-by-Side</p>
                  <p className="text-sm">Select 2-3 denominations above to see detailed comparisons of their beliefs, governance, and geographic presence</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'worship' && (
            <div className="space-y-6">
              {!selectedWorshipDenom && (
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-2">Worship Experiences</h2>
                  <p className="text-slate-600 mb-6">Select a denomination to explore what their worship services are like:</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.keys(worshipExperiences).map((key) => (
                      <button
                        key={key}
                        onClick={() => setSelectedWorshipDenom(key)}
                        className="p-4 rounded-xl border-2 hover:shadow-lg transition-all hover:-translate-y-1"
                        style={{ borderColor: denominations[key].color }}
                      >
                        <div className="font-serif text-lg mb-1" style={{ color: denominations[key].color }}>
                          {denominations[key].name}
                        </div>
                        <div className="text-sm text-slate-600">{denominations[key].members}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {selectedWorshipDenom && worshipExperiences[selectedWorshipDenom] && (
                <div className="space-y-6">
                  <button
                    onClick={() => setSelectedWorshipDenom(null)}
                    className="mb-2 text-emerald-600 hover:text-emerald-700 flex items-center gap-2 font-medium"
                  >
                    ← Back to all denominations
                  </button>

                  {/* Header */}
                  <div className="border-l-4 pl-4" style={{ borderColor: denominations[selectedWorshipDenom].color }}>
                    <h3 className="text-2xl font-serif mb-1" style={{ color: denominations[selectedWorshipDenom].color }}>
                      {denominations[selectedWorshipDenom].name}
                    </h3>
                    <p className="text-lg text-slate-700 font-medium">{worshipExperiences[selectedWorshipDenom].serviceName}</p>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-600">
                      <div>
                        <span className="font-semibold">Length:</span> {worshipExperiences[selectedWorshipDenom].typicalLength}
                      </div>
                      <div>
                        <span className="font-semibold">Schedule:</span> {worshipExperiences[selectedWorshipDenom].schedule}
                      </div>
                    </div>
                  </div>

                  {/* First Time Visitor Box */}
                  <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-4">
                    <h4 className="font-bold text-emerald-900 mb-2 flex items-center gap-2">
                      <span className="text-xl">👋</span> First Time Visitor Tips
                    </h4>
                    <p className="text-sm text-emerald-900">{worshipExperiences[selectedWorshipDenom].firstTimeVisitor}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Service Structure */}
                    <div className="bg-slate-50 rounded-xl p-4">
                      <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide border-b pb-2">
                        📋 Service Structure
                      </h4>
                      <ol className="space-y-2">
                        {worshipExperiences[selectedWorshipDenom].serviceStructure.map((step, idx) => (
                          <li key={idx} className="flex gap-3 text-sm">
                            <span className="font-bold text-slate-400 flex-shrink-0">{idx + 1}.</span>
                            <span className="text-slate-700">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Music & Atmosphere */}
                    <div className="space-y-4">
                      <div className="bg-slate-50 rounded-xl p-4">
                        <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">🎵 Music Style</h4>
                        <p className="text-sm text-slate-700">{worshipExperiences[selectedWorshipDenom].musicStyle}</p>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-4">
                        <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">👔 Dress Expectation</h4>
                        <p className="text-sm text-slate-700">{worshipExperiences[selectedWorshipDenom].dressExpectation}</p>
                      </div>
                    </div>
                  </div>

                  {/* Communion Details */}
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                      <span className="text-xl">🍞</span> Communion / Eucharist
                    </h4>
                    <p className="text-sm text-blue-900 mb-2">{worshipExperiences[selectedWorshipDenom].communionDetails}</p>
                    <p className="text-sm text-blue-800">
                      <span className="font-semibold">Participation:</span> {worshipExperiences[selectedWorshipDenom].participation}
                    </p>
                  </div>

                  {/* Unique Elements */}
                  <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                    <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                      <span className="text-xl">✨</span> Unique Elements
                    </h4>
                    <ul className="space-y-2">
                      {worshipExperiences[selectedWorshipDenom].uniqueElements.map((element, idx) => (
                        <li key={idx} className="flex gap-2 text-sm">
                          <span className="text-amber-600 flex-shrink-0">•</span>
                          <span className="text-amber-900">{element}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DenominationExplorer;
