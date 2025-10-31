import React, { useEffect, useState } from 'react';
import { BookOpen, Globe, AlertCircle, Calendar, ExternalLink, MapPin } from 'lucide-react';

const DenominationVisualizer = ({ initialView, onNavigate }) => {
  const [selectedDenom, setSelectedDenom] = useState(null);
  const [contestedEvent, setContestedEvent] = useState(null);
  const [apostolicModalOpen, setApostolicModalOpen] = useState(false);
  const [schismModalOpen, setSchismModalOpen] = useState(false);
  const [reformationModalOpen, setReformationModalOpen] = useState(false);
  const [revivalModalOpen, setRevivalModalOpen] = useState(false);
  const [modernModalOpen, setModernModalOpen] = useState(false);
  const [bibleTimelineOpen, setBibleTimelineOpen] = useState(false);
  const [comparisonOpen, setComparisonOpen] = useState(false);
  const [comparisonDenoms, setComparisonDenoms] = useState([]);
  const [worshipExperienceOpen, setWorshipExperienceOpen] = useState(false);
  const [selectedWorshipDenom, setSelectedWorshipDenom] = useState(null);

  const denominations = {
    catholic: {
      name: "Catholic",
      year: "33 AD",
      members: "1.3B",
      fullName: "Roman Catholic Church",
      description: "The Catholic Church developed highly centralized papal monarchy, with the pope claiming universal jurisdiction as 'Vicar of Christ.' Catholic ecclesiology emphasizes apostolic succession—authority passed through unbroken chain of bishops from Peter. The West embraced Scholasticism, integrating Aristotelian philosophy with theology, epitomized by Thomas Aquinas's Summa Theologica. Papal authority reached its zenith under Innocent III (1198-1216), though later crises damaged prestige.",
      beliefs: [
        "Seven Sacraments (defined at Fourth Lateran Council, 1215)",
        "Real Presence in Eucharist (Transubstantiation)",
        "Papal primacy and infallibility (Vatican I, 1870)",
        "Scripture and Tradition as dual sources",
        "Veneration of Mary and saints",
        "Purgatory and prayers for the dead"
      ],
      color: "#d4af37",
      timeline: [
        { year: "325", event: "Council of Nicaea", details: "First ecumenical council condemns Arianism, produces Nicene Creed affirming Christ as 'homoousios' (same substance) with the Father." },
        { year: "1054", event: "East-West Schism", details: "Cardinal Humbert places excommunication on Hagia Sophia's altar July 16, 1054.", contested: true, contention: "The schism was almost accidental—Pope Leo IX died April 19, 1054 during negotiations, technically voiding his legates' authority. Humbert excommunicated Patriarch Michael Cerularius anyway. Cerularius responded by excommunicating Humbert and the legates—not the pope or entire Western Church. Contemporary sources suggest ordinary Christians remained largely unaware; the schism only gradually hardened. The Fourth Crusade's brutal sack of Constantinople (1204) made reconciliation impossible—Crusaders pillaged for three days, destroying churches and stealing relics. Orthodox view this as the West's ultimate betrayal." },
        { year: "1215", event: "Fourth Lateran Council", details: "Formally defines seven sacraments and transubstantiation." },
        { year: "1517", event: "Protestant Reformation", details: "Luther posts 95 Theses October 31, targeting indulgences sold to fund St. Peter's Basilica.", contested: true, contention: "By 1517, accumulated corruption created revolutionary conditions: simony (buying church offices), clerical concubinage, rampant indulgence sales, pluralism, and absenteeism. Renaissance popes like Alexander VI (Rodrigo Borgia, 1492-1503) openly acknowledged illegitimate children. The church owned approximately one-third of European land. Catholics argue Luther misunderstood Catholic teaching—the Church always taught salvation by grace, with good works as fruit not cause. Protestants argue the medieval church fundamentally corrupted the gospel, presenting salvation as dependent on human merit and church mediation rather than grace through faith alone. The fundamental debate: Was the Reformation a necessary recovery of biblical truth, or a tragic fracturing of Christian unity over misunderstandings?" },
        { year: "1545-63", event: "Council of Trent", details: "Counter-Reformation systematically responds to Protestant challenges, affirming justification by faith AND works, Scripture AND tradition, seven sacraments, transubstantiation, purgatory." },
        { year: "1962-65", event: "Vatican II", details: "Major reforms in liturgy, ecumenism, religious liberty. Decree Unitatis Redintegratio commits Catholics to ecumenism." },
        { year: "2013", event: "Pope Francis", details: "First Jesuit and Latin American pope, draws from liberation theology concerns." }
      ],
      keyFigures: ["St. Peter", "St. Augustine of Hippo", "St. Thomas Aquinas", "St. Francis of Assisi", "Pope Innocent III", "Pope John Paul II", "Pope Francis"],
      geography: "In 1900, Europe contained 66% of the world's Christians. By 2020, Sub-Saharan Africa alone contains 31%. Latin America remains Catholic stronghold but declining to Pentecostals.",
      geographicDistribution: [
        { region: "Latin America", percentage: "40%", trend: "declining", explanation: "Still plurality but steep decline to Pentecostals—especially in Brazil." },
        { region: "Europe", percentage: "24%", trend: "declining", explanation: "From 95% Christian (1900) to 76% (2020). Rapid secularization, most affiliated are non-practicing." },
        { region: "Sub-Saharan Africa", percentage: "17%", trend: "rapid-growth", explanation: "Explosive growth through missions and indigenous clergy. By 2050, Africa projected to have 38% of global Christians." },
        { region: "Asia-Pacific", percentage: "12%", trend: "growing", explanation: "Strong growth in Philippines (83 million Catholics) and parts of India, Vietnam." },
        { region: "North America", percentage: "6%", trend: "declining", explanation: "From 97% Christian (1900) to 72% (2020). Declining attendance especially among younger Catholics." },
        { region: "Middle East/North Africa", percentage: "1%", trend: "stable", explanation: "Small ancient communities holding steady despite persecution and emigration." }
      ],
      debates: [
        "Protestants contest Catholic institutional continuity claims and reject papal supremacy",
        "Orthodox reject papal supremacy and filioque addition to Creed",
        "Pre-Reformation reformers (Waldensians, Wycliffe, Hus) anticipated Protestant themes",
        "Internal debates over Vatican II interpretation and implementation",
        "Liberation theology's relationship to Marxism debated within Catholicism"
      ],
      sources: [
        { title: "Vatican Official", url: "https://www.vatican.va/" },
        { title: "Catechism", url: "https://www.vatican.va/archive/ENG0015/_INDEX.HTM" }
      ]
    },
    orthodox: {
      name: "Orthodox",
      year: "1054",
      members: "220M",
      fullName: "Eastern Orthodox Church",
      description: "Eastern Orthodoxy maintained conciliar governance, with Constantinople holding honorary primacy as 'first among equals.' They emphasized mystical theology and theosis (becoming one with God), preserved the original Nicene Creed without filioque, and used vernacular languages in liturgy. Saints Cyril and Methodius created Slavonic alphabets enabling indigenous worship. Missionary expansion reached Bulgaria (864), Serbia (9th century), and Kievan Rus (988).",
      beliefs: [
        "Seven Ecumenical Councils (325-787) define faith",
        "Rejection of papal supremacy and filioque",
        "Theosis (deification) as salvation goal",
        "Icons as 'windows to divine'",
        "Mystical theology and liturgical continuity",
        "Divine Liturgy unchanged from early church"
      ],
      color: "#8b5cf6",
      timeline: [
        { year: "325-787", event: "Seven Councils", details: "Ecumenical councils define Orthodox faith: Nicaea (325), Constantinople (381), Ephesus (431), Chalcedon (451), Constantinople II (553), Constantinople III (680-681), Nicaea II (787)." },
        { year: "863-885", event: "Cyril and Methodius", details: "Create Slavonic alphabets, translate Bible and liturgy, enabling vernacular worship—model for Orthodox missionary approach." },
        { year: "988", event: "Baptism of Rus", details: "Prince Vladimir of Kiev converts, bringing Christianity to Russia. Orthodox Christianity becomes integral to Russian identity." },
        { year: "1054", event: "Great Schism", details: "Formal split from Rome formalized centuries of drift.", contested: true, contention: "Historians debate whether 1054 represents the actual break or merely formalized centuries of drift. The division of the Roman Empire in 395 created divergent contexts: Byzantine caesaropapism versus Western papal independence. Greek East and Latin West increasingly struggled to communicate as bilingualism declined. The filioque controversy became definitive—the West added 'and the Son' to the Nicene Creed (Spain 589, officially Rome 1014), teaching the Holy Spirit proceeds from both Father and Son. The East condemned this as unauthorized alteration and theological error. The Orthodox argue Rome gradually departed from conciliar governance, elevating the Pope above councils and introducing unauthorized innovations. Catholics argue they maintained the fullness of apostolic faith while the East rejected legitimate development of doctrine. The mutual excommunications were lifted in 1965, but fundamental ecclesiological disagreements remain." },
        { year: "1204", event: "Fourth Crusade", details: "Crusaders brutally sack Constantinople for three days, destroying churches, stealing relics, establishing Latin Empire (1204-1261). This violence traumatized Orthodox world—Byzantine historian Nicetas Choniates contrasted Saladin's mercy in Jerusalem with Crusaders' brutality toward fellow Christians. Made reconciliation with West impossible." },
        { year: "1453", event: "Fall of Constantinople", details: "Ottoman conquest ends Byzantine Empire. Constantinople becomes Istanbul. Orthodox Christianity continues under Ottoman millet system." },
        { year: "1917", event: "Russian Revolution", details: "Bolsheviks close 98% of churches, execute clergy. Severe persecution continues until 1991. Estimated 100,000+ priests and believers martyred." },
        { year: "2016", event: "Pan-Orthodox Council", details: "First major council attempt in 1000 years held in Crete.", contested: true, contention: "The Council of Crete (2016) aimed to be a 'Great and Holy Council' uniting all Orthodox churches, but four major churches (Russian, Georgian, Bulgarian, and Antiochian) boycotted—representing roughly half of world Orthodoxy. Participants argue it validly expressed Orthodox consensus on relations with other Christians and diaspora issues. Critics argue a council without Russia (largest Orthodox church) and other major churches lacks the universality required for conciliar authority. This raises fundamental questions: What makes an Orthodox council truly 'ecumenical' and binding? Can major decisions be made without universal Orthodox participation?" }
      ],
      keyFigures: ["St. John Chrysostom", "St. Basil the Great", "St. Gregory Palamas", "St. Cyril and Methodius"],
      geography: "Eastern Europe, Russia, Greece, Middle East. Recovering from Soviet persecution.",
      geographicDistribution: [
        { region: "Eastern Europe", percentage: "42%", trend: "stable", explanation: "Post-communist recovery complete." },
        { region: "Russia & Former Soviet", percentage: "35%", trend: "growing", explanation: "Significant recovery after Soviet persecution that killed 100,000+ priests and believers." },
        { region: "Middle East", percentage: "10%", trend: "declining", explanation: "Emigration due to persecution and war." },
        { region: "Greece & Balkans", percentage: "8%", trend: "stable", explanation: "Deeply rooted but facing secularization." },
        { region: "North America", percentage: "3%", trend: "growing", explanation: "Immigration and converts." },
        { region: "Western Europe", percentage: "2%", trend: "growing", explanation: "Diaspora communities growing." }
      ],
      debates: [
        "Catholics argue Orthodox lack unity without papal authority binding churches together",
        "Orthodox argue Catholics added unauthorized innovations (filioque, papal supremacy)",
        "Fourth Crusade's sack of Constantinople (1204) remains unhealed wound",
        "2016 Pan-Orthodox Council boycotted by Russian, Georgian, Bulgarian, Antiochian churches",
        "East-West mutual excommunications lifted 1965 but ecclesiological disagreements remain"
      ],
      sources: [
        { title: "OCA", url: "https://www.oca.org/" },
        { title: "Greek Orthodox", url: "https://www.goarch.org/" }
      ]
    },
    lutheran: {
      name: "Lutheran",
      year: "1517",
      members: "75M",
      fullName: "Lutheran Church",
      description: "Martin Luther posted 95 Theses at Wittenberg Castle Church October 31, 1517, initially intending academic debate about indulgences. The printing press enabled rapid dissemination across Europe. Excommunicated by Pope Leo X and declared outlaw by Emperor Charles V at Diet of Worms (1521), Luther developed comprehensive theological reformation grounded in sola scriptura (Scripture alone), sola fide (justification by faith alone), and sola gratia (salvation by grace alone). By mid-16th century, Lutheranism dominated northern Europe under cuius regio, eius religio (whose realm, his religion).",
      beliefs: [
        "Justification by faith alone (sola fide)",
        "Scripture as sole authority (sola scriptura)",
        "Two sacraments: Baptism and Eucharist",
        "Real Presence—Christ's body and blood 'in, with, and under' bread and wine",
        "Priesthood of all believers",
        "Salvation by grace alone (sola gratia)"
      ],
      color: "#3b82f6",
      timeline: [
        { year: "1517", event: "95 Theses", details: "Luther posts theses at Wittenberg October 31, targeting indulgences sold to fund St. Peter's Basilica renovation.", contested: true, contention: "By 1517, accumulated corruption created revolutionary conditions: simony (buying church offices), clerical concubinage, rampant indulgence sales, pluralism, and absenteeism. Renaissance popes like Alexander VI (Rodrigo Borgia, 1492-1503) openly acknowledged illegitimate children. The church owned approximately one-third of European land. Catholics argue Luther misunderstood Catholic teaching on justification—that good works are the fruit, not the cause, of salvation. They claim he overreacted to local abuses (like Johann Tetzel's indulgence preaching 'When a coin in the coffer rings, a soul from purgatory springs') and caused unnecessary division rather than seeking reform within church structures. Protestants argue the medieval church fundamentally corrupted the gospel by presenting salvation as dependent on human merit and church mediation rather than grace through faith alone. Luther saw himself not as a revolutionary but as recovering authentic Pauline and Augustinian theology." },
        { year: "1521", event: "Diet of Worms", details: "Luther refuses to recant unless proven wrong from Scripture: 'Here I stand, I can do no other.' Declared outlaw by Emperor Charles V." },
        { year: "1530", event: "Augsburg Confession", details: "Definitive Lutheran statement codifies Lutheran theology, written primarily by Philip Melanchthon." },
        { year: "1555", event: "Peace of Augsburg", details: "Establishes cuius regio, eius religio—rulers determine their territories' religion. Recognizes only Lutheranism and Catholicism, excluding Calvinism." },
        { year: "1577", event: "Formula of Concord", details: "Resolves internal Lutheran disputes over original sin, free will, and Lord's Supper." },
        { year: "1999", event: "Joint Declaration on Justification", details: "Agreement with Catholics that justification by faith and grace doesn't contradict Catholic teaching—major ecumenical breakthrough." }
      ],
      keyFigures: ["Martin Luther", "Philip Melanchthon", "Johann Sebastian Bach", "Dietrich Bonhoeffer"],
      geography: "Germany, Scandinavia, US Midwest. Growing explosively in Africa.",
      geographicDistribution: [
        { region: "Northern Europe", percentage: "35%", trend: "declining", explanation: "Rapid secularization in Scandinavia." },
        { region: "Sub-Saharan Africa", percentage: "28%", trend: "rapid-growth", explanation: "Explosive growth in Ethiopia, Tanzania." },
        { region: "North America", percentage: "20%", trend: "declining", explanation: "Both liberal and conservative branches declining." },
        { region: "Asia-Pacific", percentage: "12%", trend: "growing", explanation: "Strong growth in Indonesia." },
        { region: "Latin America", percentage: "3%", trend: "stable", explanation: "Small immigrant communities." },
        { region: "Other", percentage: "2%", trend: "stable", explanation: "Diaspora communities." }
      ],
      debates: [
        "Catholics argue Luther misunderstood justification theology and overreacted to abuses",
        "Reformed critique Lutheran retention of 'Catholic elements' like real presence",
        "1999 Joint Declaration with Catholics on justification was major ecumenical breakthrough",
        "Internal tensions between confessional Lutherans and more liberal expressions"
      ],
      sources: [
        { title: "Book of Concord", url: "https://bookofconcord.org/" },
        { title: "Lutheran World Federation", url: "https://www.lutheranworld.org/" }
      ]
    },
    reformed: {
      name: "Reformed",
      year: "1536",
      members: "75M",
      fullName: "Reformed/Presbyterian",
      description: "John Calvin (1509-1564) developed systematic Reformed theology in his Institutes of the Christian Religion (first edition 1536, final 1559). Calvinist theology centered on God's absolute sovereignty, expressed in TULIP: Total depravity, Unconditional election, Limited atonement, Irresistible grace, Perseverance of saints. Predestination—God's predetermined choice of the elect—distinguished Reformed from Lutheran theology. Presbyterian polity features governance by elected elders through sessions, presbyteries, synods, and general assemblies. Reformed worship embraced radical simplicity, rejecting images and ceremony, with preaching central.",
      beliefs: [
        "Unconditional election and predestination",
        "Total depravity of humanity",
        "Irresistible grace for the elect",
        "Limited atonement (Christ died for elect only)",
        "Covenant theology",
        "Presbyterian polity—governance by elders"
      ],
      color: "#6366f1",
      timeline: [
        { year: "1536", event: "Calvin's Institutes", details: "First edition of Institutes of the Christian Religion published. Final edition 1559 provides systematic Reformed theology." },
        { year: "1560", event: "Scottish Reformation", details: "John Knox establishes Presbyterian Church of Scotland, creating Reformed stronghold." },
        { year: "1618-19", event: "Synod of Dort", details: "International Reformed synod affirms TULIP doctrines against Arminianism.", contested: true, contention: "The Synod of Dort's affirmation of unconditional election and limited atonement sparked debate continuing today. Arminians argue predestination makes God the author of evil, denies human free will, and contradicts biblical statements that God desires all to be saved (1 Timothy 2:4). They claim it makes evangelism meaningless if salvation is already determined and presents God as arbitrarily choosing some for salvation and others for damnation. Reformed theologians respond that unconditional election magnifies God's grace and sovereignty, that human 'free will' is enslaved to sin apart from grace (total depravity), and that God's foreknowledge doesn't violate his desire for all to be saved—his revealed will (general call to all) differs from his decretive will (effectual call to elect). They argue that without unconditional election, salvation would ultimately depend on human choice rather than divine grace. The debate centers on reconciling divine sovereignty with human responsibility, God's love with particular election." },
        { year: "1643-47", event: "Westminster Assembly", details: "English Parliament convenes assembly producing Westminster Confession, Larger and Shorter Catechisms—definitive Reformed standards still used today." },
        { year: "1648", event: "Peace of Westphalia", details: "Thirty Years' War ends, finally recognizing Calvinism alongside Catholicism and Lutheranism in Holy Roman Empire." }
      ],
      keyFigures: ["John Calvin", "John Knox", "Jonathan Edwards"],
      geography: "Netherlands, Scotland, Korea (Presbyterian powerhouse), United States.",
      geographicDistribution: [
        { region: "North America", percentage: "32%", trend: "stable", explanation: "Strong Presbyterian presence." },
        { region: "East Asia", percentage: "25%", trend: "growing", explanation: "South Korea Presbyterian powerhouse." },
        { region: "Western Europe", percentage: "18%", trend: "declining", explanation: "Dutch and Scottish churches declining." },
        { region: "Sub-Saharan Africa", percentage: "15%", trend: "rapid-growth", explanation: "Strong missions work." },
        { region: "Latin America", percentage: "6%", trend: "growing", explanation: "Middle class appeal." },
        { region: "Other", percentage: "4%", trend: "stable", explanation: "Heritage communities." }
      ],
      debates: [
        "Arminians argue predestination makes God arbitrary and denies human free will",
        "Synod of Dort (1618-19) vs Arminian Remonstrants remains central debate",
        "Debates over extent of atonement (limited vs unlimited)",
        "Presbyterian Church (USA) experienced splits over sexuality issues (ECO formed 2012)",
        "Westminster Standards remain authoritative but interpreted differently across traditions"
      ],
      sources: [
        { title: "Westminster Confession", url: "https://www.pcaac.org/" },
        { title: "Calvin's Institutes", url: "https://www.ccel.org/ccel/calvin/institutes" }
      ]
    },
    anglican: {
      name: "Anglican",
      year: "1534",
      members: "85M",
      fullName: "Anglican Communion",
      description: "The English Reformation's political origins distinguished it from continental movements. Henry VIII's desire to annul his marriage to Catherine of Aragon prompted the 1534 Act of Supremacy establishing the Church of England with the king as supreme head. Thomas Cranmer compiled the Book of Common Prayer (1549, revised 1552, 1662) and 39 Articles (1563, 1571) defining Anglican theology. Anglicanism developed as via media ('middle way') between Protestantism and Catholicism, retaining episcopal governance with bishops claiming apostolic succession while adopting Protestant doctrines. The Elizabethan Settlement (1559) established this comprehensive approach, tolerating a range from High Church (more Catholic) to Low Church (more Protestant).",
      beliefs: [
        "Via media between Catholic and Protestant",
        "Book of Common Prayer as worship foundation",
        "Episcopal polity with apostolic succession",
        "Scripture-Tradition-Reason (three-legged stool)",
        "'Broad church' flexibility on theology",
        "39 Articles of Religion"
      ],
      color: "#22c55e",
      timeline: [
        { year: "1534", event: "Act of Supremacy", details: "Henry VIII breaks from Rome after Pope refuses marriage annulment.", contested: true, contention: "Anglican origins are deeply contested. Critics argue it began as political convenience—Henry VIII wanted an annulment the Pope refused, so he created his own church to get his way. This makes Anglicanism's foundation worldly rather than theological, and suggests its claims to apostolic authority are illegitimate. Defenders argue that while Henry's personal motivations were mixed, the English Reformation had genuine theological substance beyond royal politics: rejection of papal supremacy (which many English had long questioned), translation of Scripture into English (enabling lay Bible reading), and reformation of church abuses (simony, clerical corruption, monastic laxity). The Elizabethan Settlement later established a via media (middle way) between Catholic and Protestant theology with theological depth. The question remains: Can a church founded primarily on political expediency legitimately claim authentic apostolic authority, or did the English Reformation represent a legitimate recovery of catholicity without papal oversight?" },
        { year: "1549", event: "Book of Common Prayer", details: "Thomas Cranmer's prayer book becomes foundation of Anglican worship. Revised 1552, 1662." },
        { year: "1559", event: "Elizabethan Settlement", details: "Elizabeth I establishes via media, tolerating both High Church and Low Church perspectives within one communion." },
        { year: "1571", event: "39 Articles", details: "Defined Anglican theology—Protestant in doctrine, Catholic in liturgy and governance." },
        { year: "2003", event: "Gene Robinson", details: "First openly gay bishop in same-sex relationship consecrated.", contested: true, contention: "Gene Robinson's consecration created the deepest Anglican crisis since the Reformation. Theological conservatives argue this violates clear biblical teaching (Leviticus 18:22, Romans 1:26-27, 1 Corinthians 6:9) and 2,000 years of Christian consensus, representing capitulation to secular culture rather than faithfulness to Scripture and tradition. They note that all previous Christian interpretation across cultures and centuries condemned homosexual practice. Progressives argue the church has reinterpreted Scripture before (on slavery, women's ordination, usury, divorce) as understanding deepened, and that committed same-sex relationships reflect the biblical call to love, covenant, and fidelity. They claim exclusion causes harm and that the gospel is inclusive. The conflict fractured the Anglican Communion, with African and Asian provinces (representing the majority of world Anglicans) rejecting Western provinces' stances and breaking communion. Conservative parishes formed ACNA (2009). At stake: the authority of Scripture, the nature of marriage, whether traditional sexual ethics are cultural accretions or unchangeable moral teachings, and who interprets Scripture authoritatively." }
      ],
      keyFigures: ["Thomas Cranmer", "Richard Hooker", "C.S. Lewis", "Desmond Tutu"],
      geography: "UK declining, USA declining. Anglican future is African—45% now in Sub-Saharan Africa.",
      geographicDistribution: [
        { region: "Sub-Saharan Africa", percentage: "45%", trend: "rapid-growth", explanation: "Anglican future is African." },
        { region: "United Kingdom", percentage: "22%", trend: "declining", explanation: "Rapid attendance decline." },
        { region: "North America", percentage: "15%", trend: "declining", explanation: "Sharp decline in membership." },
        { region: "Asia-Pacific", percentage: "10%", trend: "growing", explanation: "Growing through missions." },
        { region: "Latin America", percentage: "5%", trend: "growing", explanation: "Middle class appeal." },
        { region: "Other", percentage: "3%", trend: "stable", explanation: "Diaspora communities." }
      ],
      debates: [
        "Catholics reject Anglican orders as invalid—no valid apostolic succession",
        "Political origins (Henry VIII's annulment) questioned as legitimate church foundation",
        "Gene Robinson consecration (2003) created deepest crisis since Reformation",
        "African provinces (majority of Anglicans) reject Western progressive stances on sexuality",
        "ACNA formed (2009) after conservative parishes broke communion over LGBT issues"
      ],
      sources: [
        { title: "Book of Common Prayer", url: "https://www.churchofengland.org/" },
        { title: "Anglican Communion", url: "https://www.anglicancommunion.org/" }
      ]
    },
    baptist: {
      name: "Baptist",
      year: "1609",
      members: "100M",
      fullName: "Baptist Churches",
      description: "Baptists emerged in early 17th century with two streams: General Baptists (Arminian, 1609) teaching Christ died for all, and Particular Baptists (Calvinist, 1630s-40s) teaching Christ died for elect only. Both emphasized believer's baptism by immersion as cardinal distinctive, soul competency (individual accountability before God), congregational polity, and separation of church and state. Roger Williams founded first American Baptist church in Rhode Island (1638). Baptists became America's largest Protestant group through circuit riders, revivals, and frontier missions. The Southern Baptist Convention formed in 1845 over slavery.",
      beliefs: [
        "Believer's baptism by immersion only",
        "Congregational autonomy (local church independence)",
        "Separation of church and state",
        "Soul competency—individual accountability to God",
        "Priesthood of all believers",
        "Bible as sole authority"
      ],
      color: "#06b6d4",
      timeline: [
        { year: "1609", event: "First Baptist church", details: "John Smyth founds first Baptist church in Amsterdam.", contested: true, contention: "Baptist origins are hotly disputed. Some trace a 'trail of blood'—an unbroken succession of believer-baptizing churches from the apostles through medieval groups like Waldensians, Paulicians, and Anabaptists—making Baptists the most ancient Christians who never compromised. Most historians reject this, showing these groups differed theologically from Baptists and the documentary evidence is thin. Others trace Baptist origins to English Separatists like John Smyth who, influenced by Dutch Mennonites, adopted believer's baptism around 1609. A third view sees Baptists emerging independently from English Puritanism's emphasis on regenerate church membership, with believer's baptism as logical conclusion. The debate matters for Baptist identity: Are they restorationists recovering the apostolic pattern lost for centuries, or a 17th-century innovation? Do they share Anabaptist radical roots (with pacifism and separation), or represent moderate Reformed Christianity that happens to practice believer's baptism?" },
        { year: "1638", event: "Roger Williams", details: "Founded first American Baptist church in Providence, Rhode Island. Championed religious liberty and separation of church and state." },
        { year: "1845", event: "SBC formed", details: "Southern Baptists split from northern Baptists over slavery after northerners refused to appoint slaveholding missionaries.", contested: true, contention: "The Southern Baptist split over slavery reveals deep tensions about Scripture, ethics, and cultural accommodation. Southern Baptists defended slavery using biblical texts (Ephesians 6:5, Colossians 3:22, Philemon), arguing Northern abolitionists imposed modern sentiments onto Scripture and violated biblical authority. They saw themselves as faithful to what the Bible plainly taught. Northern Baptists argued the gospel's spirit of freedom and equality (Galatians 3:28, 'neither slave nor free') condemned slavery as incompatible with human dignity and Christian love, and that Southern interpretations represented cultural captivity rather than biblical fidelity. They accused Southerners of reading Scripture through economic self-interest. This raises enduring hermeneutical questions: How do Christians distinguish between biblical principles and cultural accommodation? Can Bible-believing Christians using the same hermeneutics reach opposite ethical conclusions? The SBC formally repudiated its pro-slavery origins and apologized in 1995, but the questions about biblical interpretation and cultural captivity remain relevant for contemporary ethical debates." },
        { year: "1925", event: "Scopes Trial", details: "Baptist fundamentalism gains national attention during Tennessee trial over teaching evolution." },
        { year: "1979", event: "Conservative Resurgence", details: "SBC fundamentalist takeover begins, lasting through 2000.", contested: true, contention: "The Southern Baptist Conservative Resurgence (1979-2000) saw organized conservatives systematically gain control of SBC institutions, seminaries, and agencies through coordinated voting campaigns. Conservatives argue the denomination had drifted toward theological liberalism—questioning biblical inerrancy, adopting historical-critical methods that undermined Scripture's authority, and accommodating feminist theology and moral relativism. They saw their efforts as rescuing the SBC from the same liberal decline that hollowed out mainline denominations (Episcopal, Presbyterian, Methodist), making them theologically incoherent and numerically declining. Moderates argue conservatives confused theological diversity with liberalism, imposed narrow interpretations (especially dispensational eschatology and complementarian gender roles) as tests of orthodoxy, conducted ideological purges violating Baptist principles of soul competency and local church autonomy, and turned the SBC into a fundamentalist denomination rather than a broad evangelical body. They claim the takeover elevated politics over theology and pastoral care. The conflict raises questions: What constitutes the boundaries of theological orthodoxy within a denomination? How much diversity can Baptist polity sustain? Did the resurgence save or damage the SBC?" }
      ],
      keyFigures: ["Roger Williams", "William Carey", "Charles Spurgeon", "Billy Graham"],
      geography: "American South dominant (SBC largest Protestant denomination). Global growth explosive.",
      geographicDistribution: [
        { region: "North America", percentage: "42%", trend: "stable", explanation: "SBC dominant but plateauing." },
        { region: "Sub-Saharan Africa", percentage: "25%", trend: "rapid-growth", explanation: "Explosive indigenous growth." },
        { region: "Asia-Pacific", percentage: "18%", trend: "growing", explanation: "Strong in India, Myanmar, China." },
        { region: "Latin America", percentage: "10%", trend: "growing", explanation: "Slower than Pentecostals." },
        { region: "Europe", percentage: "3%", trend: "stable", explanation: "Small but stable." },
        { region: "Other", percentage: "2%", trend: "stable", explanation: "Global missions presence." }
      ],
      debates: [
        "Paedobaptists argue believer's baptism severs children from covenant promises",
        "Disputed origins: 'trail of blood' vs. English Separatist roots vs. Puritan emergence",
        "1845 split over slavery created North-South divide that largely remains",
        "Calvinist (Particular) vs Arminian (General) Baptists have theological tensions",
        "Conservative Resurgence (1979-2000) reshaped SBC, creating ongoing liberal-conservative divide"
      ],
      sources: [
        { title: "SBC", url: "https://www.sbc.net/" },
        { title: "Baptist World Alliance", url: "https://www.baptistworld.org/" }
      ]
    },
    methodist: {
      name: "Methodist",
      year: "1738",
      members: "80M",
      fullName: "Methodist Movement",
      description: "Methodism originated in the 1730s 'Holy Club' at Oxford with John Wesley, Charles Wesley, and George Whitefield. After John Wesley's Aldersgate experience (1738) where his heart was 'strangely warmed,' he began open-air preaching and developed Arminian theology emphasizing universal grace, free will, and entire sanctification ('Christian perfection')—belief that believers can be perfected in love in this life. Methodism separated from Church of England after Wesley's death (1791) and became America's largest denomination by the 1820s through circuit riders, camp meetings, and strong social reform emphasis (temperance, abolition, poverty relief).",
      beliefs: [
        "Prevenient grace—God's grace preceding human decision",
        "Arminian soteriology—universal atonement, free will",
        "Entire sanctification or Christian perfection",
        "Social holiness—faith expressing itself through social reform",
        "Wesleyan Quadrilateral: Scripture, Tradition, Reason, Experience",
        "Connectional polity with bishops"
      ],
      color: "#ef4444",
      timeline: [
        { year: "1738", event: "Aldersgate Experience", details: "John Wesley's heart 'strangely warmed' at Aldersgate Street meeting, May 24. Catalyzes Methodist revival." },
        { year: "1784", event: "Christmas Conference", details: "American Methodists organize as separate church in Baltimore.", contested: true, contention: "John Wesley ordained Thomas Coke and others for American ministry, claiming authority as a 'scriptural episcopos' (bishop) though he was only an Anglican priest and had never received episcopal consecration. Anglican authorities rejected this as invalid—only bishops can ordain in apostolic succession, and Wesley had no episcopal authority to confer. Wesley argued that in the New Testament, 'presbyter' (priest/elder) and 'episkopos' (bishop/overseer) were originally the same office (citing patristic evidence), and extraordinary circumstances—the American Revolution cutting off Anglican episcopal oversight—justified his emergency actions for the new American church. This raises fundamental questions about apostolic succession and ordained ministry: Is valid ordination only through bishops in historic succession? Can a priest ordain in exceptional circumstances? Did Wesley's ordinations break with Anglican apostolic succession or express a more primitive understanding of ministry? This debate affects Methodist identity: Are they a church with valid sacraments and apostolic succession, or merely a renewal movement within Anglicanism that departed from proper order?" },
        { year: "1844", event: "North-South split", details: "Methodist Episcopal Church divides over Bishop James O. Andrew owning enslaved people. Creates Northern and Southern branches.", contested: true, contention: "The Methodist split over slavery revealed whether Christian unity could be maintained across fundamental moral disagreements. Southern Methodists argued for states' rights and claimed the Bible accepted slavery when properly practiced, citing numerous texts. Northern Methodists argued slavery violated Christian principles of human dignity and the gospel's liberating message. Unlike some who claim doctrinal purity and church unity can be maintained despite moral disagreement, the Methodists acknowledged they couldn't stay united—the moral divide was too deep, making shared governance impossible. This poses ongoing ecclesiological questions: What issues justify denominational division? Can churches remain united while disagreeing on fundamental ethics? Should church polity allow regional moral differences, or must there be universal moral standards? The split wasn't healed until 1939 (forming The Methodist Church), and the moral questions about unity and compromise remain relevant today." },
        { year: "1968", event: "United Methodist Church", details: "Methodist Church merges with Evangelical United Brethren, forming UMC with 11 million members." },
        { year: "2019", event: "Traditional Plan", details: "Special General Conference—African and conservative delegates pass Traditional Plan maintaining prohibition on same-sex marriage and non-celibate LGBT clergy, defeating more inclusive 'One Church Plan.'", contested: true, contention: "At a special 2019 General Conference, African and conservative delegates passed the 'Traditional Plan' maintaining Methodist prohibitions on same-sex marriage and non-celibate LGBT clergy (438-384 vote), defeating the 'One Church Plan' that would have allowed regional differences. Progressive Western Methodists argue this represents colonialism in reverse—African churches imposing conservative sexual ethics on the West, despite being funded by Western money and shaped by Western missionaries' theology. They claim biblical inclusion and justice demand LGBT affirmation, and that excluding LGBT persons causes spiritual harm. Conservatives argue progressives are the real colonialists, dismissing African theological agency and voice as mere 'internalized colonialism' when Africans disagree with Western progressive positions. African delegates emphasized their independent reading of Scripture (Romans 1, 1 Corinthians 6), not Western influence, drives their views. They resent being patronized. This conflict raises questions: Do Western progressives genuinely respect African theological voice, or only when Africans agree with them? Can a global denomination maintain unity with such fundamental disagreement? The conflict led to massive denominational fracture: 6,000-7,000 churches (20-25%) disaffiliated 2020-2024, forming Global Methodist Church (2022)." }
      ],
      keyFigures: ["John Wesley", "Charles Wesley (6,000+ hymns)", "Francis Asbury", "Phoebe Palmer"],
      geography: "USA, UK (both declining), West Africa (growing), Philippines.",
      geographicDistribution: [
        { region: "North America", percentage: "35%", trend: "declining", explanation: "UMC facing significant losses—6,000-7,000 churches disaffiliated 2020-2024." },
        { region: "Sub-Saharan Africa", percentage: "28%", trend: "growing", explanation: "Strong West African growth." },
        { region: "Asia-Pacific", percentage: "20%", trend: "growing", explanation: "Growing in Philippines and Asia." },
        { region: "United Kingdom", percentage: "12%", trend: "declining", explanation: "British Methodism declining." },
        { region: "Latin America", percentage: "3%", trend: "stable", explanation: "Small presence." },
        { region: "Other", percentage: "2%", trend: "stable", explanation: "Diaspora communities." }
      ],
      debates: [
        "Calvinists critique Arminian theology as giving too much power to human will",
        "1844 North-South split over slavery not healed until 1939",
        "Wesley's ordinations raised questions about apostolic succession and Anglican validity",
        "Global tensions over sexuality—2019 Traditional Plan passed, but 6,000-7,000 churches disaffiliated 2020-2024",
        "Entire sanctification doctrine contested by Reformed theologians"
      ],
      sources: [
        { title: "UMC", url: "https://www.umc.org/" },
        { title: "Wesley's Sermons", url: "https://www.umcmission.org/" }
      ]
    },
    pentecostal: {
      name: "Pentecostal",
      year: "1906",
      members: "280M",
      fullName: "Pentecostal Movement",
      description: "The Azusa Street Revival (1906-1909) in Los Angeles, led by African-American preacher William J. Seymour, featured interracial worship, speaking in tongues as evidence of Holy Spirit baptism, and continuous services running nearly 24/7 for three years with peak attendance of 1,500. By 1907, Pentecostalism had spread to 50+ nations across six continents—Mexico, Canada, Western Europe, Middle East, West Africa, and Asia. By 2020, there were estimated 500+ million Pentecostal and Charismatic believers worldwide, making it the fastest-growing form of Christianity globally. Explosive growth continues in Global South, particularly Africa, Latin America, and Asia.",
      beliefs: [
        "Spirit baptism evidenced by speaking in tongues",
        "Continuation of all spiritual gifts (prophecy, healing, miracles)",
        "Divine healing through faith and prayer",
        "Premillennial eschatology—Christ's imminent return",
        "Experiential faith and emotional worship",
        "Evangelism and missionary zeal"
      ],
      color: "#fb923c",
      timeline: [
        { year: "1906", event: "Azusa Street Revival", details: "William J. Seymour leads revival at 312 Azusa Street, Los Angeles. Services run continuously nearly 24/7 for three years. Peak attendance 1,500. Features interracial worship, tongues-speaking, healings. Spreads globally within months." },
        { year: "1907", event: "Global Spread Begins", details: "Within one year of Azusa, Pentecostalism reaches 50+ nations: Mexico, Canada, Western Europe, Middle East, West Africa, Asia. Fastest missionary expansion in Christian history." },
        { year: "1914", event: "Assemblies of God", details: "Largest Pentecostal denomination formed in Hot Springs, Arkansas. Now 69+ million members globally." },
        { year: "1960", event: "Charismatic Renewal", details: "Episcopal priest Dennis J. Bennett speaks in tongues April 3, 1960, sparking movement into mainline churches: Lutherans, Presbyterians, Methodists, Anglicans." },
        { year: "1967", event: "Catholic Charismatic Renewal", details: "'Duquesne Weekend' (February 17-19) launches Catholic Charismatic movement. By 1983, approximately 15 million Catholics in 120 countries participate." },
        { year: "1994", event: "Toronto Blessing", details: "Controversial revival featuring laughter, animal sounds, spiritual drunkenness.", contested: true, contention: "The Toronto Blessing at Toronto Airport Vineyard featured controversial manifestations: uncontrollable laughter (sometimes called 'holy laughter'), animal sounds (roaring like lions, barking like dogs), people falling or shaking violently, and claims of spiritual drunkenness. Services could last for hours with people unable to stand or speak coherently. Proponents argued these were genuine Holy Spirit movements breaking through religious formalism and dead tradition, citing biblical precedents: Acts 2's mocking of 'drunk' disciples at Pentecost, Ezekiel's unusual prophetic signs, and accounts of people falling before God's presence in Scripture. They reported lives dramatically transformed, marriages healed, and renewed passion for God and evangelism. Cessationist critics argued spiritual gifts ceased after the apostolic age, making any such manifestations either psychological phenomena, group hysteria, or potentially demonic deception. Even continuationist Pentecostals and Charismatics debated whether these manifestations were genuinely from God's Spirit or fleshly emotionalism that brought reproach on the charismatic movement and distracted from genuine gospel ministry. The controversy raises enduring questions: How do we discern genuine Spirit activity from emotional excess or psychological phenomena? Should corporate worship be orderly (1 Corinthians 14:40) or allow spontaneous, even bizarre, manifestations?" }
      ],
      keyFigures: ["William J. Seymour", "Aimee Semple McPherson", "Oral Roberts", "Dennis J. Bennett (Charismatic)"],
      geography: "By 2020, 500+ million Pentecostal/Charismatic believers worldwide—fastest-growing form of Christianity. Dominates Global South with explosive growth in Africa, Latin America, and Asia.",
      geographicDistribution: [
        { region: "Latin America", percentage: "38%", trend: "rapid-growth", explanation: "Transforming religious landscape—Brazil alone has 42 million Pentecostals. Challenging Catholic dominance." },
        { region: "Sub-Saharan Africa", percentage: "32%", trend: "rapid-growth", explanation: "Becoming dominant form of African Christianity. Nigeria has 50+ million Pentecostals." },
        { region: "Asia-Pacific", percentage: "18%", trend: "rapid-growth", explanation: "Strong in Philippines, Indonesia, South Korea. Chinese house churches largely Pentecostal." },
        { region: "North America", percentage: "8%", trend: "growing", explanation: "Growing primarily in immigrant communities—Latino, African, Asian." },
        { region: "Europe", percentage: "3%", trend: "growing", explanation: "Immigrant-led churches reversing European secularization in urban areas." },
        { region: "Other", percentage: "1%", trend: "growing", explanation: "Expanding to every continent with missionary zeal." }
      ],
      debates: [
        "Cessationists argue spiritual gifts ceased after apostolic age",
        "Continuationists debate: are tongues required evidence of Spirit baptism?",
        "Prosperity gospel concerns—especially in megachurch contexts",
        "Toronto Blessing (1994) created controversy even among Pentecostals",
        "Traditional churches question emphasis on experience over doctrine"
      ],
      sources: [
        { title: "Assemblies of God", url: "https://ag.org/" },
        { title: "Church of God", url: "https://www.churchofgod.org/" }
      ]
    },
    restorationist: {
      name: "Restorationist",
      year: "1832",
      members: "5M",
      fullName: "Stone-Campbell Movement",
      description: "The Restoration Movement emerged during the Second Great Awakening (1790-1840) on the American frontier, seeking to unify Christians by restoring New Testament church patterns without denominational labels or human creeds ('No creed but Christ, no book but the Bible'). Barton W. Stone's 'Christians' and Alexander Campbell's 'Disciples of Christ' united in 1832. The movement fragmented over instrumental music and theological modernism: non-instrumental Churches of Christ separated (1906), and independent Christian Churches separated from the more liberal Christian Church (Disciples of Christ) (1920s-1971).",
      beliefs: [
        "Restoration of New Testament pattern",
        "Baptism by immersion for remission of sins",
        "Weekly Lord's Supper (every Sunday)",
        "'No creed but Christ, no book but the Bible'",
        "Congregational autonomy",
        "Believer's baptism essential for salvation"
      ],
      color: "#0891b2",
      timeline: [
        { year: "1801", event: "Cane Ridge Revival", details: "Massive Kentucky revival draws 10,000-25,000 people." },
        { year: "1832", event: "Stone-Campbell merge", details: "Barton W. Stone's 'Christians' unite with Alexander Campbell's 'Disciples of Christ,' creating unified restoration movement." },
        { year: "1906", event: "Churches of Christ separate", details: "Split over instrumental music.", contested: true, contention: "The Churches of Christ separated from Christian Churches over instrumental music in worship, applying the 'regulative principle'—only what Scripture explicitly authorizes is permitted in worship. They argue the New Testament only mentions singing (Ephesians 5:19, Colossians 3:16) and never mentions instruments in Christian worship. Therefore, adding instruments violates the pattern of New Testament worship and constitutes unauthorized innovation. Christian Churches argue this misapplies the principle: Scripture's silence permits rather than prohibits. They point to Old Testament worship (Psalms 150) and argue instruments are aids to singing, not a different kind of worship. The debate centers on hermeneutical questions: Is biblical silence permission or prohibition? Does the New Testament establish a strict pattern for worship, or provide flexible principles? This reflects the Restoration Movement's core tension: seeking to restore New Testament Christianity while interpreting what that requires." }
      ],
      keyFigures: ["Barton W. Stone", "Alexander Campbell", "Thomas Campbell"],
      geography: "American South and Midwest dominant. Declining in traditional areas.",
      geographicDistribution: [
        { region: "North America", percentage: "72%", trend: "declining", explanation: "Declining in traditional areas." },
        { region: "Sub-Saharan Africa", percentage: "12%", trend: "growing", explanation: "Missions establishing churches." },
        { region: "Asia-Pacific", percentage: "8%", trend: "growing", explanation: "Growing missions presence." },
        { region: "Latin America", percentage: "4%", trend: "stable", explanation: "Small presence." },
        { region: "Europe", percentage: "2%", trend: "stable", explanation: "Limited." },
        { region: "Other", percentage: "2%", trend: "stable", explanation: "Scattered." }
      ],
      debates: [
        "Internal 1906 division over instrumental music—Churches of Christ separated",
        "'No creed but the Bible' is itself a creedal statement—can't escape interpretation",
        "Further divisions: Christian Church (Disciples) vs independent Christian Churches",
        "Hermeneutical question: Is biblical silence prohibition or permission?",
        "Claim to restore NT Christianity contested—which NT pattern to follow?"
      ],
      sources: [
        { title: "Churches of Christ", url: "https://www.churchofchrist.org/" }
      ]
    },
    holiness: {
      name: "Holiness",
      year: "1867",
      members: "12M",
      fullName: "Holiness Movement",
      description: "The Holiness movement emerged from Methodism in late 1800s, emphasizing John Wesley's doctrine of entire sanctification as a second work of grace following conversion. They believed believers could be purified from the sin nature and live in perfect love. This movement set the theological and experiential stage for Pentecostalism—when Pentecostals added tongues as 'initial physical evidence' of Spirit baptism, many holiness adherents embraced it while traditional holiness churches rejected it, causing a major split.",
      beliefs: [
        "Entire sanctification as second work of grace",
        "Eradication of inborn sin nature possible",
        "Holy living and personal holiness",
        "Arminian soteriology (free will, universal grace)",
        "Wesleyan understanding of perfection",
        "Separation from worldliness"
      ],
      color: "#c026d3",
      timeline: [
        { year: "1867", event: "National Camp Meeting", details: "National Camp Meeting Association for Promotion of Holiness organized, systematizing holiness movement." },
        { year: "1895", event: "Church of Nazarene", details: "Largest holiness denomination formed through mergers of various holiness groups." },
        { year: "1906", event: "Pentecostalism emerges", details: "Pentecostalism adds tongues to holiness theology.", contested: true, contention: "When Pentecostalism emerged at Azusa Street (1906), it claimed to complete holiness teaching by identifying Spirit baptism with tongues-speaking as 'initial physical evidence'—the biblical sign that one had received the baptism of the Holy Spirit. Many holiness adherents embraced this, becoming Pentecostals and forming denominations like Church of God (Cleveland, TN) and Pentecostal Holiness Church. But traditional holiness churches like the Church of the Nazarene firmly rejected this addition, arguing that Spirit baptism is for sanctification and empowerment for service, not necessarily accompanied by tongues. They maintained Wesley's two-stage doctrine: conversion (justification) and entire sanctification are distinct works of grace, but tongues aren't required evidence of either. The debate split the holiness movement permanently: Does Spirit baptism always produce tongues as initial evidence, or can it occur without visible manifestations? Are tongues available to all Spirit-filled believers today, or were they temporary apostolic signs? The Holiness churches that rejected tongues saw Pentecostalism as adding an unbiblical requirement to Spirit baptism; Pentecostals saw it as recovering the full New Testament experience that had been lost." }
      ],
      keyFigures: ["Phoebe Palmer", "Phineas Bresee"],
      geography: "US Midwest and South, Caribbean. Stable in traditional areas.",
      geographicDistribution: [
        { region: "North America", percentage: "58%", trend: "stable", explanation: "Stable in traditional areas." },
        { region: "Caribbean", percentage: "18%", trend: "stable", explanation: "Strong Caribbean presence." },
        { region: "Sub-Saharan Africa", percentage: "15%", trend: "growing", explanation: "Growing through missions." },
        { region: "Latin America", percentage: "5%", trend: "growing", explanation: "Modest growth." },
        { region: "Asia-Pacific", percentage: "3%", trend: "stable", explanation: "Small presence." },
        { region: "Other", percentage: "1%", trend: "stable", explanation: "Scattered." }
      ],
      debates: [
        "Reformed theologians reject entire sanctification—argue sin nature remains until death",
        "1906 split when Pentecostals added tongues as evidence of Spirit baptism",
        "Can believers be 'perfected in love' in this life? Wesleyan vs Reformed anthropology",
        "Traditional Holiness churches rejected Pentecostal tongues doctrine"
      ],
      sources: [
        { title: "Nazarene", url: "https://nazarene.org/" }
      ]
    },
    anabaptist: {
      name: "Anabaptist",
      year: "1525",
      members: "2.1M",
      fullName: "Anabaptist Tradition",
      description: "On January 21, 1525, Conrad Grebel baptized George Blaurock in Zurich—the first believer baptism, launching the Anabaptist movement during the Radical Reformation. Anabaptists insisted only adults who confessed faith could be baptized, considering infant baptism invalid. They demanded complete separation of church and state, practiced nonresistance and pacifism, refused oath-taking, and emphasized visible holy community with church discipline. Both Catholics and Protestants brutally persecuted Anabaptists—drowning ('third baptism') was common execution. Thousands died 1525-1660, documented in Martyrs Mirror. Despite persecution, they survived in distinct branches: Swiss Brethren, Mennonites, Hutterites, and Amish.",
      beliefs: [
        "Believer's baptism only (rejecting infant baptism)",
        "Pacifism and nonresistance",
        "Complete separation of church and state",
        "Simple living and community",
        "Church discipline and excommunication",
        "Voluntary church membership"
      ],
      color: "#65a30d",
      timeline: [
        { year: "1525", event: "First adult baptisms", details: "January 21—Conrad Grebel baptizes George Blaurock in Zurich, launching Anabaptism.", contested: true, contention: "The Anabaptist practice of believers-only baptism sparked violent opposition from both Catholics and magisterial Reformers (Lutherans, Reformed). The latter argued Anabaptists severed children from covenant promises, fundamentally misunderstood the unity of God's covenant across Old and New Testaments, and created false division in Christian families where parents are baptized members but children are excluded from the covenant community until they can profess faith. Infant baptism, they argued, is the New Testament equivalent of Old Testament circumcision—the sign of covenant inclusion given to children of believers (Colossians 2:11-12). It doesn't save, but marks children as part of the covenant community. Anabaptists responded that New Testament baptism consistently and explicitly follows faith and repentance (Acts 2:38, 8:36-38), that infant baptism lacks any biblical example or command, and that covenant inclusion doesn't require the covenant sign (Abraham believed before receiving circumcision, Romans 4:11). They argued baptism should signify conscious commitment and regeneration, not automatic membership based on birth. The debate centers on covenant theology, the relationship between church and society (Christendom model vs. free church), and whether regeneration precedes or follows baptism. The issue was so divisive that Anabaptists faced execution from both Catholic and Protestant authorities for 'rebaptizing'—considered heresy and sedition." },
        { year: "1527", event: "Schleitheim Confession", details: "Seven articles define Anabaptist distinctives: believer's baptism, ban (excommunication), Lord's Supper, separation from world, pastors, pacifism, oath refusal." },
        { year: "1536", event: "Menno Simons", details: "Former Catholic priest Menno Simons (1496-1561) joins Anabaptists, provides theological leadership and organizational stability. Mennonites named after him." },
        { year: "1525-1660", event: "Martyrdom Era", details: "Both Catholics and Protestants brutally persecute Anabaptists. Drowning—called 'third baptism'—common execution. Thousands die. Martyrs Mirror (1660) documents their testimonies." },
        { year: "1693", event: "Amish Split", details: "Jacob Ammann leads stricter group separating from Swiss Mennonites over shunning practices and other issues, forming Amish." }
      ],
      keyFigures: ["Conrad Grebel", "Menno Simons", "Jacob Ammann", "Michael Sattler"],
      geography: "Pennsylvania, Ohio, Indiana (Amish). Global Mennonites growing.",
      geographicDistribution: [
        { region: "North America", percentage: "45%", trend: "growing", explanation: "High birth rates among Amish and conservative Mennonites." },
        { region: "Sub-Saharan Africa", percentage: "25%", trend: "rapid-growth", explanation: "Strong missions work." },
        { region: "Latin America", percentage: "15%", trend: "growing", explanation: "Growing communities." },
        { region: "Europe", percentage: "10%", trend: "stable", explanation: "Historic communities." },
        { region: "Asia-Pacific", percentage: "4%", trend: "growing", explanation: "Missions work." },
        { region: "Other", percentage: "1%", trend: "stable", explanation: "Scattered." }
      ],
      debates: [
        "Magisterial Reformers (Lutheran, Reformed) argued Anabaptists severed children from covenant",
        "Both Catholics and Protestants brutally persecuted Anabaptists—thousands executed 1525-1660",
        "Just war theorists critique pacifism as impractical and unbiblical",
        "Covenant theology debate: Is baptism NT equivalent of circumcision?",
        "Internal divisions: Amish (1693), various Mennonite branches over separation strictness"
      ],
      sources: [
        { title: "Mennonite Church USA", url: "https://www.mennoniteusa.org/" }
      ]
    },
    nondenominational: {
      name: "Non-Denom",
      year: "1970s",
      members: "40M+",
      fullName: "Non-Denominational Churches",
      description: "Non-denominational churches exploded from less than 3% of American adults (1972) to 13% of Protestants by 2014, making them the third-largest Christian group after Catholics and Southern Baptists. If considered a single denomination, non-denominationals would be America's largest Protestant group. American megachurches (2,000+ weekly attendance) grew from approximately 350 (1990) to 1,800 (2020), predominantly suburban, evangelical, and nondenominational. They emphasize contemporary worship, local evangelism, and congregational autonomy while avoiding formal denominational affiliation and historic theological disputes.",
      beliefs: [
        "Bible as sole authority without denominational creeds",
        "Local church autonomy and independence",
        "Evangelical theology (though specifics vary)",
        "Contemporary worship styles",
        "Emphasis on personal relationship with Jesus",
        "Pragmatic approach to ministry"
      ],
      color: "#94a3b8",
      timeline: [
        { year: "1968-74", event: "Jesus Movement", details: "Countercultural revival creates non-denominational template." },
        { year: "1975", event: "Willow Creek", details: "Bill Hybels pioneers seeker-sensitive model that becomes megachurch blueprint." },
        { year: "2000s", event: "Megachurch explosion", details: "Multi-site campuses proliferate. Growth from 350 (1990) to 1,800 (2020)." }
      ],
      keyFigures: ["Chuck Smith (Calvary Chapel)", "Bill Hybels (Willow Creek)", "Rick Warren (Saddleback)"],
      geography: "Predominantly US suburbs. Increasingly global—megachurches appearing in Asia, Latin America.",
      geographicDistribution: [
        { region: "North America", percentage: "65%", trend: "rapid-growth", explanation: "Explosive suburban growth. Now 3rd largest Christian group in US." },
        { region: "Asia-Pacific", percentage: "15%", trend: "rapid-growth", explanation: "Megachurches in South Korea, Singapore, Philippines." },
        { region: "Latin America", percentage: "8%", trend: "growing", explanation: "Model spreading rapidly." },
        { region: "Sub-Saharan Africa", percentage: "7%", trend: "growing", explanation: "Independent evangelicals growing." },
        { region: "Europe", percentage: "4%", trend: "growing", explanation: "Urban churches growing." },
        { region: "Other", percentage: "1%", trend: "growing", explanation: "Expanding globally." }
      ],
      debates: [
        "Traditional denominations argue non-denoms lack accountability structures",
        "Celebrity pastor culture concerns in megachurches",
        "'No denomination' is itself a denomination with implicit theology and practice",
        "Theological drift concerns without confessional standards",
        "Grew from <3% (1972) to 13% of Protestants (2014)—now 3rd largest Christian group in US",
        "Question: Can churches maintain orthodoxy without formal structures and historic creeds?"
      ],
      sources: [
        { title: "The Gospel Coalition", url: "https://www.thegospelcoalition.org/" }
      ]
    }
  };

  // Respect initialView to open a specific timeline mode
  useEffect(() => {
    if (initialView === 'bible') {
      setBibleTimelineOpen(true);
      // Close denomination-specific modals if any are open
      setApostolicModalOpen(false);
      setSchismModalOpen(false);
      setReformationModalOpen(false);
      setRevivalModalOpen(false);
      setModernModalOpen(false);
    }
    if (initialView === 'church') {
      setBibleTimelineOpen(false);
    }
  }, [initialView]);

  const bibleTimeline = {
    writing: [
      { period: "1400-400 BC", books: "Old Testament", details: "Torah/Pentateuch (1400-1200 BC—traditional dating, though scholars debate), Historical books (Joshua-Esther), Prophets (Isaiah-Malachi), Wisdom literature (Job, Psalms, Proverbs, Ecclesiastes, Song of Songs)", note: "Dates are approximate and heavily debated among scholars—traditional vs. critical scholarship" },
      { period: "50-100 AD", books: "New Testament", details: "Paul's letters (50-65 AD—earliest NT writings), Gospels (Mark ~65-70 AD, Matthew & Luke ~80-85 AD, John ~90-95 AD), Acts, General Epistles (James, Peter, John, Jude), Revelation (~95 AD)", note: "Written in Greek (koine—common Greek), circulated among early churches, copied by hand for centuries" }
    ],
    canonization: [
      { year: "~90-100 AD", event: "Council of Jamnia (disputed)", details: "Traditionally thought to be when Jewish rabbis finalized Hebrew Bible canon after Temple destruction (70 AD). Recent scholarship questions whether this council actually occurred as traditionally described.", contested: true, contention: "The traditional view held that Jewish rabbis met at Jamnia (Yavneh) around 90 AD to officially close the Hebrew Bible canon, establishing the 39 books that later became the Protestant Old Testament. This would explain why Jews and Protestants share the same OT canon while Catholics and Orthodox include additional books. However, modern scholarship increasingly doubts this council occurred as traditionally described—no ancient Jewish sources describe a canon-fixing council at Jamnia. Evidence suggests the Hebrew canon developed gradually through usage and consensus rather than by formal decree, with debates about books like Esther, Ecclesiastes, and Song of Songs continuing into the 2nd century. Some scholars argue 'Jamnia' is essentially a scholarly myth created to provide convenient explanation for Protestant rejection of deuterocanonical books. The question matters theologically: if there was no formal Jewish closure of canon around 90 AD, it weakens the Protestant argument that only books in the 'official Jewish canon' are authoritative Scripture—since there may have been no such official closure." },
      { year: "~140 AD", event: "Marcion's Canon", details: "Heretic Marcion creates radically truncated canon (Gospel of Luke and 10 Paul letters only, edited), rejecting Old Testament entirely. His heresy spurs orthodox church to define its own authoritative canon in response." },
      { year: "~170 AD", event: "Muratorian Fragment", details: "Earliest known list of NT books, discovered 1740. Includes 22 of 27 books (missing Hebrews, James, 1-2 Peter), debates some others. Shows canon still developing but core already recognized." },
      { year: "367 AD", event: "Athanasius' Easter Letter", details: "Bishop Athanasius of Alexandria lists 27 NT books in his 39th Easter Letter—first complete list matching modern Protestant NT canon exactly. Distinguishes canonical from useful but non-canonical books." },
      { year: "393 AD", event: "Council of Hippo", details: "Regional North African council of bishops affirms biblical canon including deuterocanonical books (Tobit, Judith, Wisdom, Sirach, Baruch, 1-2 Maccabees) as Scripture." },
      { year: "397 AD", event: "Council of Carthage", details: "Larger regional council reaffirms Hippo's canon with same 73 books.", contested: true, contention: "Catholics and Orthodox cite Carthage as authoritative because it was ratified by multiple subsequent councils and popes, representing the church's consensus on the full 73-book canon (46 OT + 27 NT). These councils explicitly listed books like Tobit, Judith, Wisdom of Solomon, Sirach (Ecclesiasticus), Baruch, and 1-2 Maccabees as canonical Scripture to be read in churches. Protestants respond that Carthage was only a regional North African council, not an ecumenical (universal) council binding on the whole church, and therefore lacks authority over Christians in other regions. They argue the early church had no universal consensus—Eastern and Western canons differed, and church fathers like Jerome (translator of the Latin Vulgate) explicitly questioned the deuterocanonical books, calling them useful for edification but not for establishing doctrine. Additionally, Protestants note that these councils made errors (including books eventually rejected even by Catholics), proving councils aren't infallible. The fundamental dispute centers on ecclesiology: Can regional councils bind the universal church? Who has authority to determine the biblical canon—the church through councils, or does Scripture's authority precede and transcend church authority?" },
      { year: "~405 AD", event: "Jerome completes Vulgate", details: "Jerome translates Bible into Latin. Notably, he questioned deuterocanonical books' status, though he included them. Called them 'Apocrypha'—useful but not canonical for doctrine." },
      { year: "1442 AD", event: "Council of Florence", details: "Ecumenical council formally defines Catholic canon including deuterocanonical books. Attempt to reunify with Eastern churches (ultimately failed)." },
      { year: "1546 AD", event: "Council of Trent", details: "In response to Protestant Reformation, Catholic Church definitively declares 73-book canon, pronouncing anathema on anyone who rejects it.", contested: true, contention: "The Council of Trent (1545-1563) definitively declared the deuterocanonical books to be Scripture with equal authority to other books, pronouncing anathema (condemnation) on anyone who rejected them. Catholics argue Trent simply reaffirmed the church's ancient practice—the deuterocanonical books were in the Septuagint (Greek OT) used by Jesus and the apostles, quoted or alluded to in the New Testament (Hebrews 11 references Maccabean martyrs, Wisdom influences NT theology), accepted by church fathers, and affirmed at Hippo (393) and Carthage (397). The church has always recognized these books' authority. Protestants argue Trent made a polemical decision against the Reformation rather than reflecting genuine tradition—the early church widely debated these books' status, Jerome (the great biblical scholar) explicitly rejected them as non-canonical, and the Hebrew Bible (Jesus' Bible as a Jew) excluded them. They claim the Catholic Church added books to defend doctrines like purgatory (2 Maccabees 12:45-46 mentions prayers for the dead) that Protestants rejected on biblical grounds. The timing troubles Protestants: Why did it take 1,500 years for an 'infallible' definition if these books were always recognized Scripture? Shouldn't Scripture's authority be self-evident? The debate reflects deeper questions about church authority, tradition's role, and how the canon was determined—by church decree or by Spirit-led recognition?" },
      { year: "~1520s", event: "Luther's German Bible", details: "Luther translates Bible into German (NT 1522, OT 1534), placing deuterocanonical books in separate appendix between testaments labeled 'Apocrypha'—'books useful and good to read but not equal to Holy Scripture.'" },
      { year: "1611 AD", event: "King James Version", details: "Includes Apocrypha between testaments in original 1611 edition. Many later Protestant editions omit it entirely. By 1800s, most Protestant Bibles excluded deuterocanonicals completely." }
    ],
    canons: [
      { tradition: "Protestant", books: 66, details: "39 OT + 27 NT. Follows Hebrew Bible for OT (no deuterocanonical books).", rationale: "Only books in original Hebrew/Aramaic and accepted by ancient Jews" },
      { tradition: "Catholic", books: 73, details: "46 OT + 27 NT. Includes 7 deuterocanonical books (Tobit, Judith, Wisdom, Sirach, Baruch, 1-2 Maccabees) plus additions to Esther and Daniel.", rationale: "Books in Septuagint (Greek OT) used by early church and cited by Church Fathers" },
      { tradition: "Orthodox", books: "Varies", details: "Generally includes Catholic canon plus 1 Esdras, Prayer of Manasseh, Psalm 151, 3 Maccabees. Some add 2 Esdras, 4 Maccabees.", rationale: "Follows Septuagint and broader ancient Christian usage" },
      { tradition: "Ethiopian Orthodox", books: 81, details: "Broadest canon, includes Book of Enoch, Jubilees, and other ancient texts.", rationale: "Preserves ancient Ethiopian Christian traditions" }
    ],
    criteria: [
      { criterion: "Apostolicity", description: "Written by or connected to apostles" },
      { criterion: "Orthodoxy", description: "Consistent with recognized Christian teaching" },
      { criterion: "Catholicity", description: "Widely accepted and used across churches" },
      { criterion: "Inspiration", description: "Recognized as divinely inspired through use in worship" }
    ]
  };

  const worshipExperiences = {
    catholic: {
      serviceName: "Mass (Holy Eucharist)",
      typicalLength: "45-60 minutes",
      schedule: "Daily Mass available; Sunday obligation for members",
      serviceStructure: [
        "Introductory Rites: Procession, Sign of Cross, Penitential Act",
        "Liturgy of the Word: Old Testament, Psalm, New Testament, Gospel, Homily",
        "Liturgy of the Eucharist: Offertory, Eucharistic Prayer, Consecration",
        "Communion Rite: Lord's Prayer, Sign of Peace, Communion",
        "Concluding Rites: Blessing and Dismissal"
      ],
      musicStyle: "Ranges from traditional Latin chant and organ to contemporary; varies by parish",
      dressExpectation: "Modest and respectful; business casual to formal common",
      communionDetails: "Weekly. Only baptized Catholics in state of grace may receive. Others may come forward for blessing (arms crossed)",
      participation: "Congregation responds in dialogue, sits/stands/kneels at specific times",
      uniqueElements: [
        "Genuflection (brief kneeling) when entering/leaving pews",
        "Holy water fonts at entrance",
        "Kneeling during consecration",
        "Sign of the Cross used frequently",
        "Statues, icons, and artwork throughout"
      ],
      firstTimeVisitor: "Arrive early. Sit toward back if unsure about postures. Following along appreciated but not required. You may remain seated during communion."
    },
    orthodox: {
      serviceName: "Divine Liturgy",
      typicalLength: "90 minutes to 2 hours",
      schedule: "Sunday morning primary; Saturday evening Vespers common",
      serviceStructure: [
        "Liturgy of the Word: Antiphons, Little Entrance, Epistle, Gospel",
        "Liturgy of the Faithful: Great Entrance, Creed, Anaphora",
        "Communion: Preparation and Distribution (bread and wine on spoon)",
        "Dismissal: Thanksgiving prayers, Veneration of Cross"
      ],
      musicStyle: "A cappella chanting - no instruments. Byzantine or Slavonic chant traditions",
      dressExpectation: "Modest and formal. Women often cover heads (scarves usually provided); men wear suits",
      communionDetails: "Weekly. Only Orthodox Christians who have fasted may receive. Others observe",
      participation: "Mostly standing (few pews in traditional churches). Make sign of cross. Venerate icons",
      uniqueElements: [
        "Iconostasis (icon wall) separating altar from congregation",
        "Extensive incense use throughout",
        "Icons everywhere - kissed upon entering",
        "Priest often behind icon screen during prayers",
        "Antidoron (blessed bread) distributed to all after"
      ],
      firstTimeVisitor: "Expect to stand most of service. OK to sit if needed. Don't take communion unless Orthodox. Venerate icons when others do. Beautiful but unfamiliar to most Westerners."
    },
    anglican: {
      serviceName: "Holy Eucharist / Holy Communion",
      typicalLength: "60-75 minutes",
      schedule: "Sunday morning primary; some offer Wednesday or daily services",
      serviceStructure: [
        "Gathering: Procession, Opening Hymn, Collect",
        "Word: Old Testament, Psalm, Epistle, Gospel, Sermon",
        "Prayers: Prayers of the People, Confession, Peace",
        "Eucharist: Offertory, Great Thanksgiving, Communion",
        "Sending Forth: Post-communion prayer, Blessing, Dismissal"
      ],
      musicStyle: "Traditional hymns with organ or piano; some parishes more contemporary. Often very good choirs",
      dressExpectation: "Business casual to formal. 'Sunday best' still common in traditional parishes",
      communionDetails: "Weekly in most parishes. Open to baptized Christians. Kneel or stand at altar rail or come forward in line",
      participation: "Liturgical responses from Book of Common Prayer. Stand for Gospel, kneel for prayers (varies)",
      uniqueElements: [
        "Book of Common Prayer used extensively",
        "Processions with cross and candles",
        "Vestments (robes) for clergy",
        "May use incense in 'high church' parishes",
        "Balance of Catholic liturgy with Protestant theology"
      ],
      firstTimeVisitor: "Feels Catholic but more relaxed. Take a bulletin and Book of Common Prayer. Follow along with congregation. All baptized Christians welcome at communion."
    },
    lutheran: {
      serviceName: "Divine Service / Worship Service",
      typicalLength: "60-75 minutes",
      schedule: "Sunday morning; some offer Saturday evening or midweek",
      serviceStructure: [
        "Gathering: Confession/Absolution, Hymn of Praise",
        "Word: Scripture Readings, Sermon",
        "Response: Creed, Prayers, Offering",
        "Sacrament: Communion liturgy, Distribution",
        "Sending: Blessing, Closing Hymn"
      ],
      musicStyle: "Traditional Lutheran chorales and hymns. Organ music. Some contemporary in less traditional congregations",
      dressExpectation: "Business casual to smart casual. Less formal than previous generations",
      communionDetails: "Usually weekly or every other week. Varies by congregation. Believe in Real Presence. Some close communion (members only), others open",
      participation: "Liturgical with responsive readings. Stand for Gospel. Kneeling for communion common in traditional churches",
      uniqueElements: [
        "Strong emphasis on preaching and Scripture",
        "Liturgical order similar to Catholic/Anglican but simpler",
        "Rich musical heritage (Bach, chorales)",
        "Confession and Absolution emphasized",
        "Formal but warm atmosphere"
      ],
      firstTimeVisitor: "Very liturgical yet accessible. Take a bulletin and hymnal. Check if communion is open or closed. Preaching is central - expect 15-20 minute sermon."
    },
    reformed: {
      serviceName: "Worship Service",
      typicalLength: "60-90 minutes",
      schedule: "Sunday morning; some offer Sunday evening services",
      serviceStructure: [
        "Call to Worship and Opening Prayer",
        "Praise: Psalm or Hymn singing",
        "Confession of Sin and Assurance of Pardon",
        "Scripture Reading and Preaching (central focus)",
        "Response: Prayers, Offering, Closing Hymn"
      ],
      musicStyle: "Traditional: Psalm singing (sometimes a cappella), hymns. Contemporary in some churches. Varies widely",
      dressExpectation: "Business casual to smart casual. Varies by congregation",
      communionDetails: "Monthly or quarterly (less frequent). Believe in spiritual presence. Usually open to baptized believers",
      participation: "Corporate prayer and singing. Attentive listening to sermon. May be less responsive liturgy than Lutheran/Anglican",
      uniqueElements: [
        "Sermon is center of service (30-45 minutes common)",
        "Strong emphasis on God's sovereignty in worship",
        "Presbyterian governance means elders oversee",
        "Psalm singing in some traditions",
        "Intellectually rigorous preaching"
      ],
      firstTimeVisitor: "Word-centered service. Come prepared for substantial sermon. Less ritual than liturgical churches. Friendly and welcoming atmosphere."
    },
    methodist: {
      serviceName: "Sunday Worship Service",
      typicalLength: "60-75 minutes",
      schedule: "Sunday morning; many offer contemporary and traditional services",
      serviceStructure: [
        "Gathering: Welcome, Opening Hymns, Prayer",
        "Proclamation: Scripture Readings, Sermon",
        "Response: Offering, Prayers, Hymns",
        "Communion: Monthly or weekly in many congregations",
        "Sending Forth: Closing Hymn, Benediction"
      ],
      musicStyle: "Wide variety: Traditional hymns (especially Charles Wesley's), contemporary worship, gospel. Often both services offered",
      dressExpectation: "Casual to business casual. Very relaxed in most congregations",
      communionDetails: "Monthly common, some weekly. Open table - all who love Christ welcome. Come forward or served in pews",
      participation: "Responsive readings, corporate prayer, hymn singing. Welcoming and participatory",
      uniqueElements: [
        "Strong emphasis on social holiness and service",
        "John Wesley's theology influences everything",
        "Open communion - all welcome",
        "Mix of liturgical and free church elements",
        "Connection system - accountability groups"
      ],
      firstTimeVisitor: "Very welcoming and accessible. Mix of formal and informal. Check if contemporary or traditional service. Expect warmth and emphasis on Christian living."
    },
    baptist: {
      serviceName: "Worship Service",
      typicalLength: "60-90 minutes",
      schedule: "Sunday morning and evening common; Wednesday night prayer meeting traditional",
      serviceStructure: [
        "Welcome and Announcements",
        "Worship: Hymns or Contemporary Praise",
        "Prayer Time",
        "Scripture Reading and Preaching (central)",
        "Invitation/Altar Call: Response time for decisions",
        "Closing"
      ],
      musicStyle: "Varies widely: Traditional hymns with piano/organ in traditional churches; contemporary worship bands in modern churches; Southern gospel in some",
      dressExpectation: "Casual to business casual. 'Come as you are' in most churches",
      communionDetails: "Monthly or quarterly. Symbolic memorial. Open to baptized believers (believer's baptism)",
      participation: "Congregational singing, responsive 'Amen' during preaching in some traditions, altar calls for decisions",
      uniqueElements: [
        "Believer's baptism by immersion (baptistery visible in church)",
        "Congregational autonomy - each church independent",
        "Altar calls/invitations common after sermon",
        "No formal liturgy or prayer book",
        "Strong emphasis on evangelism and missions"
      ],
      firstTimeVisitor: "Informal and friendly. Sermon is central (30-45 min). You may be asked to stand as a visitor. No pressure to respond to altar call. Very accessible."
    },
    pentecostal: {
      serviceName: "Worship Service / Celebration",
      typicalLength: "90 minutes to 2+ hours (flexible)",
      schedule: "Sunday morning and evening; often midweek services. Times less rigid",
      serviceStructure: [
        "Extended Praise and Worship (30-45 minutes)",
        "Manifestations of the Spirit: Tongues, prophecy, healing",
        "Offering and Testimonies",
        "Preaching: Passionate, evangelistic message",
        "Altar Call: Prayer for salvation, healing, Holy Spirit",
        "Ministry Time: Individual prayer"
      ],
      musicStyle: "Contemporary praise and worship, very energetic. Live band, drums, electric guitars. Upbeat and emotional",
      dressExpectation: "Ranges from very casual to formal 'Sunday best' depending on congregation. Generally relaxed",
      communionDetails: "Monthly or less frequent. Open to believers. Secondary to Spirit baptism",
      participation: "Very active! Raise hands, clap, dance, shout 'Amen', speak in tongues, prophesy. High energy and participation expected",
      uniqueElements: [
        "Speaking in tongues encouraged",
        "Healing services and prayer for sick",
        "Prophecy and words of knowledge",
        "Laying on of hands for Spirit baptism",
        "Spontaneous, Spirit-led worship (less structured)",
        "Very emotional and experiential"
      ],
      firstTimeVisitor: "Expect loud, long, and expressive worship. Don't feel pressured to speak in tongues or participate in manifestations. Very welcoming. Prepare for intense, emotional experience. Services often run long."
    },
    anabaptist: {
      serviceName: "Worship Service / Meeting",
      typicalLength: "60-90 minutes",
      schedule: "Sunday morning; some have Sunday evening or midweek meetings",
      serviceStructure: [
        "Gathering and Welcome",
        "Congregational Singing (often a cappella in some traditions)",
        "Prayer",
        "Scripture Reading and Teaching",
        "Testimony or Sharing Time (common in some groups)",
        "Closing Prayer and Dismissal"
      ],
      musicStyle: "Varies widely: Traditional a cappella four-part harmony in conservative groups; contemporary with instruments in progressive churches; emphasis on congregational participation",
      dressExpectation: "Very modest - Conservative groups require head coverings for women, plain dress, no jewelry. Progressive Anabaptists more casual but still modest",
      communionDetails: "Monthly or quarterly. Symbolic memorial. Often preceded by foot washing service. Closed or restricted communion in conservative groups",
      participation: "Simple and participatory. Emphasis on community. Testimony sharing common. Less formal liturgy",
      uniqueElements: [
        "Believer's baptism (adult baptism by pouring or immersion)",
        "Foot washing services with communion",
        "Emphasis on pacifism and nonviolence",
        "Simple, plain worship spaces (no crosses or decorations in conservative groups)",
        "Strong community accountability and discipline",
        "Head coverings for women (in conservative groups)"
      ],
      firstTimeVisitor: "Expect simplicity and modesty. Conservative groups very plain (Amish, Old Order Mennonite) - women cover heads, men wear plain suits. Progressive groups more contemporary. Strong emphasis on community and peace. Very welcoming but culturally distinct."
    },
    restorationist: {
      serviceName: "Worship Assembly / Church Service",
      typicalLength: "60-75 minutes",
      schedule: "Sunday morning primary; many have Sunday evening and Wednesday services",
      serviceStructure: [
        "Opening Prayer",
        "Congregational Singing (a cappella in Churches of Christ)",
        "Lord's Supper (weekly, central to service)",
        "Offering",
        "Scripture Reading and Preaching",
        "Invitation and Closing Prayer"
      ],
      musicStyle: "Churches of Christ: A cappella only (no instruments). Christian Churches: Often use instruments. Four-part harmony singing. Emphasis on congregational participation",
      dressExpectation: "Business casual to formal. Generally conservative and modest",
      communionDetails: "Weekly - every Sunday without exception. Central act of worship. Open to all Christians. Bread and grape juice distributed in pews or by coming forward",
      participation: "Active congregational singing. Weekly communion participation. Multiple men may lead prayers. Less clergy-centered than other traditions",
      uniqueElements: [
        "Weekly communion (Lord's Supper) as central act",
        "A cappella singing only (Churches of Christ - no instruments)",
        "Multiple men lead different parts of service",
        "Strong emphasis on New Testament pattern",
        "Baptism by immersion for forgiveness of sins (essential)",
        "No creeds - 'Bible only' approach",
        "Elder-led (no single pastor in many congregations)"
      ],
      firstTimeVisitor: "Simple, Bible-centered worship. Expect weekly communion (every Sunday). Churches of Christ have no instruments - only singing. Welcoming but theologically specific about baptism and church practices. Communion open to Christians. Preaching is central and Scripture-heavy."
    },
    nondenominational: {
      serviceName: "Worship Service / Sunday Celebration",
      typicalLength: "60-90 minutes",
      schedule: "Multiple Sunday services common (contemporary, traditional); midweek small groups",
      serviceStructure: [
        "Welcome and Announcements",
        "Extended Worship Set (20-30 minutes of contemporary music)",
        "Offering",
        "Sermon / Teaching (practical, application-focused)",
        "Response / Prayer Time",
        "Dismissal"
      ],
      musicStyle: "Predominantly contemporary worship with full band (drums, guitars, keys). Hillsong/Bethel style common. Professional sound and lighting. Very polished production",
      dressExpectation: "Casual - jeans and t-shirts common and encouraged. 'Come as you are' philosophy",
      communionDetails: "Monthly or less frequent. Open to all believers. Often served in seats or stations. Not central focus",
      participation: "Hands raised during worship common but optional. Casual and relaxed atmosphere. Coffee often available during service",
      uniqueElements: [
        "Contemporary, seeker-friendly approach",
        "High production value (lights, screens, graphics)",
        "Practical, life-application preaching",
        "Small groups emphasized over Sunday service",
        "Minimal religious symbols or tradition",
        "Often meets in renovated warehouses, schools, or theaters",
        "Very accessible to unchurched visitors"
      ],
      firstTimeVisitor: "Most accessible for newcomers. Casual dress, contemporary music, relevant teaching. Often feels more like a concert than traditional church. No pressure, very welcoming. Coffee usually available. Expect screens, lights, and modern worship band. Perfect for those unfamiliar with church."
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Brand hero */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-3">
            {initialView === 'bible' ? 'Bible Timeline' : 'Church Timeline'}
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl">
            A modern, coherent look—same rich content and interactions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-8 sm:py-12">
        {/* Utility toolbar */}
        <div className="bg-white rounded-2xl border-2 border-slate-200 p-4 mb-8 shadow">
          <div className="flex items-center justify-between">
            <button
              onClick={() => onNavigate && onNavigate('explorer')}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border-2 border-slate-200 text-slate-700 hover:bg-slate-50 transition"
              aria-label="Back to Explore"
            >
              <span className="-ml-1">←</span>
              <span>Back to Explore</span>
            </button>
            <span className="text-sm font-semibold text-slate-500">
              {initialView === 'bible' ? 'Bible Timeline' : 'Church Timeline'}
            </span>
          </div>
        </div>
        {/* Church overview section - only show when initialView is 'church' or not set */}
        {(!initialView || initialView === 'church') && (
        <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 mb-8 sm:mb-16 border-2 border-slate-200">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2">A Contested History</h2>
            <p className="text-sm sm:text-base text-slate-600">Each claims authentic continuity—but define it differently</p>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* 33 AD - Origin */}
            <div className="relative mb-8">
              <div className="flex gap-4 items-start">
                <div className="w-20 text-right pt-4">
                  <div className="text-2xl font-bold text-amber-800">33</div>
                  <div className="text-xs text-slate-500 font-semibold">AD</div>
                </div>
                <button 
                  onClick={() => setApostolicModalOpen(true)}
                  className="flex-1 bg-gradient-to-br from-amber-100 to-amber-50 border-2 border-amber-400 rounded-xl p-4 sm:p-5 relative shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5 text-left"
                >
                  <div className="absolute -left-2 top-5 w-4 h-4 bg-amber-600 rounded-full border-2 border-white"></div>
                  <h3 className="text-lg sm:text-xl font-serif text-amber-900 mb-1">Apostolic Church</h3>
                  <p className="text-sm text-amber-800 mb-3">All traditions claim this root—click to see how</p>
                  <div className="flex flex-wrap gap-2 text-xs font-medium">
                    <span className="bg-amber-200 text-amber-900 px-2.5 py-1 rounded-lg">Institutional</span>
                    <span className="bg-amber-200 text-amber-900 px-2.5 py-1 rounded-lg">Liturgical</span>
                    <span className="bg-amber-200 text-amber-900 px-2.5 py-1 rounded-lg">Doctrinal</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Connecting line */}
            <div className="flex ml-20 mb-8">
              <div className="w-1 h-10 bg-gradient-to-b from-amber-400 to-red-300 relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-amber-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 border-amber-400 shadow-sm">?</div>
              </div>
            </div>

            {/* 1054 - Great Schism */}
            <div className="relative mb-8">
              <div className="flex gap-4 items-start">
                <div className="w-20 text-right pt-4">
                  <div className="text-2xl font-bold text-slate-700">1054</div>
                </div>
                <div className="flex-1">
                  <button 
                    onClick={() => setSchismModalOpen(true)}
                    className="w-full bg-red-50 border-2 border-red-300 rounded-xl p-3 mb-3 relative hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer text-left"
                  >
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
                    <div className="flex items-center gap-2 mb-1">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      <span className="font-bold text-red-900 text-sm">Great Schism</span>
                      <span className="text-xs text-red-700">Real break or formalization?</span>
                    </div>
                  </button>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    <div className="relative">
                      <button onClick={() => setSelectedDenom('catholic')} className="w-full p-3 rounded-xl border-2 bg-white hover:shadow-xl transition-all hover:-translate-y-0.5 text-left" style={{ borderColor: denominations.catholic.color }}>
                        <div className="font-serif text-base text-slate-900 mb-0.5">Catholic</div>
                        <div className="text-xs text-slate-600">1.3B • Papal authority</div>
                      </button>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-amber-400 to-orange-400 sm:block hidden"></div>
                    </div>
                    <button onClick={() => setSelectedDenom('orthodox')} className="p-3 rounded-xl border-2 bg-white hover:shadow-xl transition-all hover:-translate-y-0.5 text-left" style={{ borderColor: denominations.orthodox.color }}>
                      <div className="font-serif text-base text-slate-900 mb-0.5">Orthodox</div>
                      <div className="text-xs text-slate-600">220M • Conciliar unity</div>
                      <div className="text-xs text-slate-400 italic mt-1">Continues separately</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting line - from Catholic */}
            <div className="flex ml-20 mb-8">
              <div className="w-1 h-10 bg-gradient-to-b from-amber-400 to-orange-400 relative ml-[calc(50%-2px)] sm:ml-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-50 text-orange-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 border-orange-400 shadow-sm">→</div>
              </div>
            </div>

            {/* 1517 - Reformation */}
            <div className="relative mb-8">
              <div className="flex gap-4 items-start">
                <div className="w-20 text-right pt-4">
                  <div className="text-2xl font-bold text-slate-700">1517</div>
                </div>
                <div className="flex-1">
                  <button 
                    onClick={() => setReformationModalOpen(true)}
                    className="w-full bg-orange-50 border-2 border-orange-300 rounded-xl p-3 mb-3 relative hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer text-left"
                  >
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full border-2 border-white animate-pulse"></div>
                    <div className="flex items-center gap-2 mb-1">
                      <AlertCircle className="w-4 h-4 text-orange-600" />
                      <span className="font-bold text-orange-900 text-sm">Protestant Reformation</span>
                      <span className="text-xs text-orange-700">From Catholicism</span>
                    </div>
                    <p className="text-xs text-orange-800">Luther challenges Catholic practices • Reformed from within the Western church</p>
                  </button>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['lutheran', 'reformed', 'anglican', 'anabaptist'].map((key) => (
                      <button key={key} onClick={() => setSelectedDenom(key)} className="p-2.5 rounded-lg border-2 bg-white hover:shadow-lg transition-all hover:-translate-y-0.5" style={{ borderColor: denominations[key].color }}>
                        <div className="font-serif text-sm text-slate-900">{denominations[key].name}</div>
                        <div className="text-xs text-slate-500">{denominations[key].year}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting line */}
            <div className="flex ml-20 mb-8">
              <div className="w-1 h-10 bg-gradient-to-b from-orange-300 to-blue-300"></div>
            </div>

            {/* 1600s-1800s */}
            <div className="relative mb-8">
              <div className="flex gap-4 items-start">
                <div className="w-20 text-right pt-4">
                  <div className="text-base font-bold text-slate-700">1600s–</div>
                  <div className="text-base font-bold text-slate-700">1800s</div>
                </div>
                <div className="flex-1">
                  <button 
                    onClick={() => setRevivalModalOpen(true)}
                    className="w-full bg-blue-50 border-2 border-blue-300 rounded-xl p-3 mb-3 relative hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer text-left"
                  >
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
                    <span className="font-bold text-blue-900 text-sm">Revival & Restoration</span>
                    <p className="text-xs text-blue-700 mt-1">After the devastating Thirty Years' War (1618-1648), new movements sought spiritual renewal</p>
                  </button>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['baptist', 'methodist', 'restorationist', 'holiness'].map((key) => (
                      <button key={key} onClick={() => setSelectedDenom(key)} className="p-2.5 rounded-lg border-2 bg-white hover:shadow-lg transition-all hover:-translate-y-0.5" style={{ borderColor: denominations[key].color }}>
                        <div className="font-serif text-sm text-slate-900">{denominations[key].name}</div>
                        <div className="text-xs text-slate-500">{denominations[key].year}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting line */}
            <div className="flex ml-20 mb-8">
              <div className="w-1 h-10 bg-gradient-to-b from-blue-300 to-purple-300"></div>
            </div>

            {/* 1900s-Present */}
            <div className="relative mb-6">
              <div className="flex gap-4 items-start">
                <div className="w-20 text-right pt-4">
                  <div className="text-base font-bold text-slate-700">1900s–</div>
                  <div className="text-base font-bold text-slate-700">Today</div>
                </div>
                <div className="flex-1">
                  <button 
                    onClick={() => setModernModalOpen(true)}
                    className="w-full bg-purple-50 border-2 border-purple-300 rounded-xl p-3 mb-3 relative hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer text-left"
                  >
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full border-2 border-white"></div>
                    <span className="font-bold text-purple-900 text-sm">Spirit & Post-Denominational</span>
                  </button>
                  <div className="grid grid-cols-2 gap-2">
                    {['pentecostal', 'nondenominational'].map((key) => (
                      <button key={key} onClick={() => setSelectedDenom(key)} className="p-2.5 rounded-lg border-2 bg-white hover:shadow-lg transition-all hover:-translate-y-0.5" style={{ borderColor: denominations[key].color }}>
                        <div className="font-serif text-sm text-slate-900">{denominations[key].name}</div>
                        <div className="text-xs text-slate-500">{denominations[key].year}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer note */}
            <div className="mt-10 flex items-center justify-center gap-2 text-sm text-slate-600">
              <AlertCircle className="w-4 h-4" />
              <span>Click any tradition to explore their perspective</span>
            </div>
          </div>
        </div>
        )}

        {/* Bible Timeline - keeping existing structure but with proper scrolling */}
        {/* Bible Timeline section - only show when initialView is 'bible' or not set */}
        {(!initialView || initialView === 'bible') && (
        <div className="relative bg-gradient-to-b from-white to-blue-50 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 mb-8 sm:mb-16 border border-blue-200">
          <div className="text-center mb-6">
            <div className="inline-block mb-4">
              <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-blue-700 mx-auto" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif text-slate-900 mb-2">How the Bible Was Compiled</h2>
            <p className="text-sm sm:text-base text-slate-600 mb-4">
              Understanding biblical canonization helps explain denominational differences
            </p>
            <button
              onClick={() => setBibleTimelineOpen(!bibleTimelineOpen)}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors text-sm font-medium shadow-md hover:shadow-lg"
            >
              {bibleTimelineOpen ? 'Hide Timeline' : 'Explore the Process'}
            </button>
          </div>

          {bibleTimelineOpen && (
            <div className="max-w-4xl mx-auto mt-8 space-y-8">
              {/* Writing Period */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                <h3 className="text-xl sm:text-2xl font-serif text-slate-900 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  When the Books Were Written
                </h3>
                <div className="space-y-4">
                  {bibleTimeline.writing.map((period, idx) => (
                    <div key={idx} className="border-l-4 border-blue-400 pl-4 py-2">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                        <span className="text-lg font-bold text-blue-900">{period.period}</span>
                        <span className="text-sm font-semibold text-slate-700">{period.books}</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-1">{period.details}</p>
                      <p className="text-xs text-slate-500 italic">{period.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Canonization Process */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                <h3 className="text-xl sm:text-2xl font-serif text-slate-900 mb-4">The Canonization Timeline</h3>
                <p className="text-sm text-slate-600 mb-6">
                  The process of determining which books were "canonical" (authoritative Scripture) took centuries and involved debate, councils, and regional differences.
                </p>

                <div className="relative pl-10 border-l-2 border-blue-400 ml-4">
                  {bibleTimeline.canonization.map((event, idx) => (
                    <div key={idx} className="mb-6 relative">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="font-semibold text-slate-900 text-sm">{event.year}</span>
                          {event.contested && (
                            <button 
                              onClick={(e) => { e.stopPropagation(); setContestedEvent(event); }} 
                              className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full border border-amber-300 hover:bg-amber-200 transition-colors cursor-pointer"
                            >
                              ⚠️ Debated
                            </button>
                          )}
                        </div>
                        <div className="text-base font-serif text-slate-900 mb-1">{event.event}</div>
                        <div className="text-sm text-slate-600">{event.details}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Criteria */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-lg border border-blue-200">
                <h3 className="text-xl font-serif text-slate-900 mb-4">How Books Were Judged Canonical</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Early Christians used several criteria to determine which books belonged in Scripture:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {bibleTimeline.criteria.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 border border-blue-200">
                      <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        {item.criterion}
                      </h4>
                      <p className="text-sm text-slate-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Different Canons */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                <h3 className="text-xl sm:text-2xl font-serif text-slate-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  Why Different Traditions Have Different Bibles
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  The Protestant Reformation reignited debates about the Old Testament canon. Here's what each tradition accepts:
                </p>

                <div className="space-y-4">
                  {bibleTimeline.canons.map((canon, idx) => (
                    <div key={idx} className="border-2 rounded-xl p-4 hover:shadow-md transition-shadow" style={{ borderColor: canon.tradition === 'Protestant' ? '#3b82f6' : canon.tradition === 'Catholic' ? '#d4af37' : canon.tradition === 'Orthodox' ? '#8b5cf6' : '#65a30d' }}>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="font-bold text-lg text-slate-900">{canon.tradition}</h4>
                        <span className="text-2xl font-bold" style={{ color: canon.tradition === 'Protestant' ? '#3b82f6' : canon.tradition === 'Catholic' ? '#d4af37' : canon.tradition === 'Orthodox' ? '#8b5cf6' : '#65a30d' }}>
                          {canon.books} {typeof canon.books === 'number' ? 'books' : ''}
                        </span>
                      </div>
                      <p className="text-sm text-slate-700 mb-2">{canon.details}</p>
                      <div className="text-xs text-slate-600 bg-slate-50 px-3 py-2 rounded border-l-2" style={{ borderColor: canon.tradition === 'Protestant' ? '#3b82f6' : canon.tradition === 'Catholic' ? '#d4af37' : canon.tradition === 'Orthodox' ? '#8b5cf6' : '#65a30d' }}>
                        <strong>Rationale:</strong> {canon.rationale}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Takeaway */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-300">
                <h3 className="text-lg font-serif text-slate-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-700" />
                  Why This Matters for Understanding Denominations
                </h3>
                <div className="text-sm text-slate-700 space-y-2">
                  <p>
                    <strong>Catholics and Orthodox</strong> argue that the Church (guided by the Holy Spirit through councils and tradition) determined the canon. The Bible came from the Church.
                  </p>
                  <p>
                    <strong>Protestants</strong> argue that the Bible's authority is self-evident and precedes church authority. They returned to the Hebrew Bible canon, rejecting books only in Greek.
                  </p>
                  <p className="pt-2 border-t border-amber-200">
                    This disagreement reflects the deeper question: <em>Does the Church define Scripture, or does Scripture define the Church?</em> This philosophical difference underlies many denominational divisions.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        )}

        {/* Church timeline content - only show when initialView is 'church' or not set */}
        {(!initialView || initialView === 'church') && (
        <>
        {/* Denomination Detail Modals */}
        {selectedDenom && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 overflow-auto p-2 sm:p-4" onClick={() => setSelectedDenom(null)}>
            <div className="max-w-5xl mx-auto my-4 sm:my-8 bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <div className="p-4 sm:p-8 text-white relative" style={{ backgroundColor: denominations[selectedDenom].color }}>
                <button onClick={() => setSelectedDenom(null)} className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white text-2xl sm:text-3xl font-bold hover:opacity-80 transition-opacity">×</button>
                <h2 className="text-2xl sm:text-4xl font-serif mb-2 pr-8">{denominations[selectedDenom].fullName}</h2>
                <div className="flex gap-2 sm:gap-4 text-xs sm:text-sm opacity-90">
                  <span>Founded {denominations[selectedDenom].year}</span>
                  <span>{denominations[selectedDenom].members} members</span>
                </div>
              </div>

              <div className="p-4 sm:p-8 max-h-[70vh] overflow-y-auto">
                <p className="text-sm sm:text-base text-slate-700 mb-6">{denominations[selectedDenom].description}</p>

                <h3 className="text-lg sm:text-xl font-serif text-slate-900 mb-3">Core Beliefs</h3>
                <ul className="space-y-2 mb-6">
                  {denominations[selectedDenom].beliefs.map((belief, idx) => (
                    <li key={idx} className="flex gap-2">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: denominations[selectedDenom].color }}></div>
                      <span className="text-sm text-slate-700">{belief}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-lg sm:text-xl font-serif text-slate-900 mb-3">Key Figures</h3>
                <ul className="space-y-2 mb-6">
                  {denominations[selectedDenom].keyFigures.map((figure, idx) => (
                    <li key={idx} className="flex gap-2">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: denominations[selectedDenom].color }}></div>
                      <span className="text-sm text-slate-700">{figure}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-lg sm:text-xl font-serif text-slate-900 mb-2">Geography</h3>
                <p className="text-sm text-slate-700 mb-4">{denominations[selectedDenom].geography}</p>

                {denominations[selectedDenom].geographicDistribution && (
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-slate-600" />
                      <h4 className="text-sm sm:text-base font-semibold text-slate-800">Regional Distribution</h4>
                    </div>
                    <div className="space-y-3">
                      {denominations[selectedDenom].geographicDistribution.map((item, idx) => {
                        const trendColors = {
                          'rapid-growth': 'bg-emerald-500',
                          'growing': 'bg-green-500',
                          'stable': 'bg-blue-500',
                          'declining': 'bg-orange-500'
                        };
                        const trendLabels = {
                          'rapid-growth': 'Rapid Growth',
                          'growing': 'Growing',
                          'stable': 'Stable',
                          'declining': 'Declining'
                        };
                        return (
                          <div key={idx} className="space-y-1">
                            <div className="flex items-center justify-between text-xs sm:text-sm">
                              <span className="text-slate-700 font-medium">{item.region}</span>
                              <div className="flex items-center gap-2">
                                <span className={`px-2 py-0.5 rounded text-xs text-white ${trendColors[item.trend]}`}>{trendLabels[item.trend]}</span>
                                <span className="text-slate-600">{item.percentage}</span>
                              </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className={`h-2 rounded-full ${trendColors[item.trend]}`} style={{ width: item.percentage }}></div>
                            </div>
                            <p className="text-xs text-slate-600">{item.explanation}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 mb-6">
                  <h3 className="text-lg font-serif text-slate-900 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    Points of Debate
                  </h3>
                  <ul className="space-y-2">
                    {denominations[selectedDenom].debates.map((debate, idx) => (
                      <li key={idx} className="flex gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 flex-shrink-0"></div>
                        <span className="text-sm text-slate-700">{debate}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <h3 className="text-xl font-serif text-slate-900 mb-4">Historical Timeline</h3>
                <div className="relative pl-6 border-l-2 mb-6" style={{ borderColor: denominations[selectedDenom].color }}>
                  {denominations[selectedDenom].timeline.map((event, idx) => (
                    <div key={idx} className="mb-6 relative">
                      <div className="absolute -left-7 top-0 w-3 h-3 rounded-full border-2 bg-white" style={{ borderColor: denominations[selectedDenom].color }}></div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-slate-900 text-sm">{event.year}</span>
                          {event.contested && (
                            <button onClick={(e) => { e.stopPropagation(); setContestedEvent(event); }} className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full hover:bg-amber-200 border border-amber-300">
                              ⚠️ Contested
                            </button>
                          )}
                        </div>
                        <div className="text-base font-serif text-slate-900 mb-1">{event.event}</div>
                        <div className="text-sm text-slate-600">{event.details}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <h3 className="text-lg font-serif text-slate-900 mb-3 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" style={{ color: denominations[selectedDenom].color }} />
                    Resources
                  </h3>
                  <div className="space-y-2">
                    {denominations[selectedDenom].sources.map((source, idx) => (
                      <a key={idx} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-700 hover:text-slate-900 text-sm group">
                        <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-slate-600" />
                        <span className="group-hover:underline">{source.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contested Event Modal */}
        {contestedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-start sm:items-center justify-center p-2 sm:p-4 z-50 overflow-y-auto" onClick={() => setContestedEvent(null)}>
            <div className="bg-white rounded-2xl w-full max-w-2xl my-4 flex flex-col max-h-[95vh]" onClick={(e) => e.stopPropagation()}>
              <div className="p-4 sm:p-6 flex-shrink-0 border-b border-slate-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-5 h-5 text-amber-600" />
                      <h3 className="text-lg sm:text-xl font-serif text-slate-900">Contested Event</h3>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-500">{contestedEvent.year} • {contestedEvent.event}</div>
                  </div>
                  <button onClick={() => setContestedEvent(null)} className="text-slate-400 hover:text-slate-600 text-2xl font-bold flex-shrink-0">×</button>
                </div>
              </div>
              <div className="p-4 sm:p-6 overflow-y-auto flex-1">
                <div className="bg-amber-50 border-l-4 border-amber-500 p-3 sm:p-4 rounded">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{contestedEvent.contention}</p>
                </div>
                <div className="mt-4 text-xs text-slate-500 italic">This represents ongoing scholarly and theological debate.</div>
              </div>
            </div>
          </div>
        )}

        {/* Apostolic Modal */}
        {apostolicModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 overflow-y-auto" onClick={() => setApostolicModalOpen(false)}>
            <div className="min-h-screen flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl my-8" onClick={e => e.stopPropagation()}>
                <div className="sticky top-0 bg-gradient-to-r from-amber-600 to-amber-700 text-white p-6 flex justify-between items-center z-10 rounded-t-2xl">
                  <h3 className="text-2xl font-serif">The Apostolic Foundation (33-313 AD)</h3>
                  <button onClick={() => setApostolicModalOpen(false)} className="text-white hover:text-amber-200 transition-colors text-3xl font-bold">×</button>
                </div>
                <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
                  <p className="text-slate-700 leading-relaxed">
                    Christianity emerged from an apocalyptic Jewish messianic sect following Jesus's crucifixion around 33 CE. The Jerusalem church under James the Just, Peter, and John initially maintained Jewish observances while believing Jesus's resurrection signaled imminent end times.
                  </p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <h4 className="font-bold text-slate-900 mb-2">Paul's Transformation</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      <strong>Paul of Tarsus fundamentally transformed this movement by opening it to Gentiles.</strong> The Council of Jerusalem (c. 50 CE) determined that non-Jewish converts need not follow Mosaic law—a decision that enabled Christianity to transcend its ethnic origins and become a universal religion.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Apostolic Succession</h4>
                    <p className="text-slate-700 text-sm leading-relaxed mb-3">
                      By the second century, a three-fold ministry emerged: bishops (episkopos), presbyters, and deacons. The Apostolic Fathers—Clement of Rome, Ignatius of Antioch, Polycarp—established the doctrine of apostolic succession to ensure legitimate authority.
                    </p>
                    <p className="text-slate-700 text-sm italic">
                      Ignatius of Antioch advocated that "all are to respect the deacons as Jesus Christ and the bishop as a copy of the Father."
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Seven Ecumenical Councils</h4>
                    <div className="space-y-2 text-sm">
                      <div className="bg-slate-50 p-3 rounded">
                        <strong>Nicaea (325):</strong> Condemned Arianism, affirmed Christ as "homoousios" (same substance) with the Father
                      </div>
                      <div className="bg-slate-50 p-3 rounded">
                        <strong>Constantinople (381):</strong> Affirmed the Holy Spirit's divinity
                      </div>
                      <div className="bg-slate-50 p-3 rounded">
                        <strong>Ephesus (431):</strong> Proclaimed Mary as Theotokos (God-bearer)
                      </div>
                      <div className="bg-slate-50 p-3 rounded">
                        <strong>Chalcedon (451):</strong> Defined Christ as having two natures—fully divine and fully human
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-4">
                    <h4 className="font-bold text-slate-900 mb-3">How Traditions Define Apostolic Continuity</h4>
                    <div className="space-y-3">
                      <div className="border-l-4 border-amber-600 pl-3">
                        <strong className="text-amber-900">Catholic:</strong>
                        <p className="text-slate-700 text-sm mt-1">Institutional succession through papal primacy and unbroken chain of bishops from Peter</p>
                      </div>
                      <div className="border-l-4 border-purple-600 pl-3">
                        <strong className="text-purple-900">Orthodox:</strong>
                        <p className="text-slate-700 text-sm mt-1">Liturgical and conciliar continuity, preserving ancient worship unchanged</p>
                      </div>
                      <div className="border-l-4 border-blue-600 pl-3">
                        <strong className="text-blue-900">Protestant:</strong>
                        <p className="text-slate-700 text-sm mt-1">Doctrinal continuity—recovering authentic biblical teaching obscured by medieval accretions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Great Schism Modal */}
        {schismModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 overflow-y-auto" onClick={() => setSchismModalOpen(false)}>
            <div className="min-h-screen flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl my-8" onClick={e => e.stopPropagation()}>
                <div className="sticky top-0 bg-gradient-to-r from-red-600 to-red-700 text-white p-6 flex justify-between items-center z-10 rounded-t-2xl">
                  <h3 className="text-2xl font-serif">The Great Schism of 1054</h3>
                  <button onClick={() => setSchismModalOpen(false)} className="text-white hover:text-red-200 transition-colors text-3xl font-bold">×</button>
                </div>
                <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
                  <p className="text-slate-700 leading-relaxed">
                    Political, linguistic, and theological tensions accumulated for centuries before the formal rupture. The division of the Roman Empire in 395 created divergent contexts: Byzantine caesaropapism versus Western papal independence.
                  </p>

                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <h4 className="font-bold text-red-900 mb-2">The Events of July 1054</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      The schism was almost accidental. Pope Leo IX died April 19, 1054 during negotiations, technically voiding his legates' authority. Nevertheless, Cardinal Humbert placed a bull of excommunication on Hagia Sophia's altar July 16, 1054. Patriarch Michael Cerularius responded by excommunicating Humbert and the legates—not the pope or entire Western Church. Contemporary sources suggest ordinary Christians remained largely unaware; the schism only gradually hardened.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">The Filioque Controversy</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      The Western Church added "and the Son" (filioque) to the Nicene Creed—first in Spain (589), officially adopted in Rome (1014)—teaching that the Holy Spirit proceeds from both Father and Son. The East condemned this as unauthorized alteration of conciliar decree and theological error.
                    </p>
                  </div>

                  <div className="bg-slate-100 rounded-lg p-4">
                    <h4 className="font-bold text-slate-900 mb-2">The Fourth Crusade (1204): Point of No Return</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      <strong>The Fourth Crusade's sack of Constantinople in 1204 made reconciliation impossible.</strong> Crusaders brutally pillaged the city for three days, destroying churches, stealing relics, and establishing a Latin Empire (1204-1261). Byzantine historian Nicetas Choniates contrasted Saladin's mercy in Jerusalem with Crusaders' brutality toward fellow Christians. The Orthodox still view this as the West's ultimate betrayal.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Competing Perspectives</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                        <h5 className="font-bold text-amber-900 mb-2">Catholic View</h5>
                        <ul className="text-sm text-slate-700 space-y-1">
                          <li>• Papal primacy divinely instituted (Matthew 16:18)</li>
                          <li>• Filioque was legitimate theological clarification</li>
                          <li>• Rome maintained fullness of apostolic faith</li>
                          <li>• East rejected legitimate development of doctrine</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                        <h5 className="font-bold text-purple-900 mb-2">Orthodox View</h5>
                        <ul className="text-sm text-slate-700 space-y-1">
                          <li>• Rome elevated Pope above ecumenical councils</li>
                          <li>• Filioque added without conciliar approval</li>
                          <li>• Unilateral Western change to ecumenical statement</li>
                          <li>• Rome gradually departed from conciliar governance</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-500 italic">
                    The mutual excommunications were lifted in 1965, but fundamental ecclesiological disagreements remain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reformation Modal */}
        {reformationModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 overflow-y-auto" onClick={() => setReformationModalOpen(false)}>
            <div className="min-h-screen flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl my-8" onClick={e => e.stopPropagation()}>
                <div className="sticky top-0 bg-gradient-to-r from-orange-600 to-orange-700 text-white p-6 flex justify-between items-center z-10 rounded-t-2xl">
                  <h3 className="text-2xl font-serif">The Protestant Reformation (1517)</h3>
                  <button onClick={() => setReformationModalOpen(false)} className="text-white hover:text-orange-200 transition-colors text-3xl font-bold">×</button>
                </div>
                <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                    <h4 className="font-bold text-orange-900 mb-2">October 31, 1517</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Martin Luther posted his 95 Theses at Wittenberg Castle Church, initially intending academic debate about indulgences. The printing press enabled rapid dissemination across Europe. Excommunicated by Pope Leo X and declared outlaw by Emperor Charles V at the Diet of Worms (1521), Luther developed comprehensive theological reformation.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Revolutionary Conditions by 1517</h4>
                    <div className="bg-slate-100 rounded-lg p-4 space-y-2 text-sm">
                      <p><strong>Simony:</strong> Buying and selling church offices was rampant</p>
                      <p><strong>Clerical corruption:</strong> Concubinage, pluralism (holding multiple offices), absenteeism</p>
                      <p><strong>Indulgence sales:</strong> Johann Tetzel famously preached "When a coin in the coffer rings, a soul from purgatory springs"</p>
                      <p><strong>Papal excess:</strong> Renaissance popes like Alexander VI (Rodrigo Borgia, 1492-1503) openly acknowledged illegitimate children</p>
                      <p><strong>Church wealth:</strong> The church owned approximately one-third of European land</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">The Five Solas</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                        <strong className="text-blue-900">Sola Scriptura</strong>
                        <p className="text-sm text-slate-700 mt-1">Scripture alone as authority</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                        <strong className="text-blue-900">Sola Fide</strong>
                        <p className="text-sm text-slate-700 mt-1">Justification by faith alone</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                        <strong className="text-blue-900">Sola Gratia</strong>
                        <p className="text-sm text-slate-700 mt-1">Salvation by grace alone</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                        <strong className="text-blue-900">Solus Christus</strong>
                        <p className="text-sm text-slate-700 mt-1">Christ alone as mediator</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 border border-blue-200 md:col-span-2">
                        <strong className="text-blue-900">Soli Deo Gloria</strong>
                        <p className="text-sm text-slate-700 mt-1">Glory to God alone</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">The Catholic Counter-Reformation</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      The Council of Trent (1545-1563) systematically responded to Protestant challenges: affirming justification by faith AND works, Scripture AND tradition as authoritative, seven sacraments, transubstantiation, purgatory, and veneration of saints. The Jesuits, founded by Ignatius of Loyola in 1540, became Catholicism's shock troops—establishing schools, conducting global missions, and taking special vows of obedience to the pope.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-300">
                    <p className="text-slate-700 text-sm font-medium mb-2">Was the Reformation...</p>
                    <div className="space-y-2 text-sm">
                      <p><strong className="text-green-700">Protestants:</strong> A necessary recovery of biblical truth, rescuing the gospel from medieval corruption</p>
                      <p><strong className="text-amber-700">Catholics:</strong> A tragic fracturing of Christian unity over misunderstandings and overreactions to local abuses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Revival Modal */}
        {revivalModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 overflow-y-auto" onClick={() => setRevivalModalOpen(false)}>
            <div className="min-h-screen flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl my-8" onClick={e => e.stopPropagation()}>
                <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 flex justify-between items-center z-10 rounded-t-2xl">
                  <h3 className="text-2xl font-serif">Revival & Restoration (1600s-1800s)</h3>
                  <button onClick={() => setRevivalModalOpen(false)} className="text-white hover:text-blue-200 transition-colors text-3xl font-bold">×</button>
                </div>
                <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
                  <p className="text-slate-700 leading-relaxed">
                    After the devastating Thirty Years' War (1618-1648)—which killed 20-40% of the German population—new movements sought spiritual renewal and practical Christianity beyond doctrinal warfare.
                  </p>

                  <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded">
                    <h4 className="font-bold text-cyan-900 mb-2">Baptist Movement (1609)</h4>
                    <p className="text-slate-700 text-sm mb-3 leading-relaxed">
                      Baptists emerged with two streams: General Baptists (Arminian, 1609) teaching Christ died for all, and Particular Baptists (Calvinist, 1630s-1640s) teaching Christ died for the elect only. Both emphasized believer's baptism by immersion, soul competency, and separation of church and state.
                    </p>
                    <p className="text-slate-700 text-sm">
                      <strong>Roger Williams</strong> founded the first American Baptist church in Rhode Island (1638), championing religious liberty. The Southern Baptist Convention formed in 1845 over slavery—a split that largely remains today.
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <h4 className="font-bold text-red-900 mb-2">Methodist Revival (1738)</h4>
                    <p className="text-slate-700 text-sm mb-3 leading-relaxed">
                      After John Wesley's Aldersgate experience (1738) where his heart was "strangely warmed," he began open-air preaching and developed Arminian theology emphasizing universal grace, free will, and <strong>entire sanctification</strong>—the belief that believers can be perfected in love in this life.
                    </p>
                    <p className="text-slate-700 text-sm">
                      Methodism became America's largest denomination by the 1820s through circuit riders, camp meetings, and strong emphasis on social reform (temperance, abolition, poverty relief). Charles Wesley wrote over 6,000 hymns that shaped Protestant worship.
                    </p>
                  </div>

                  <div className="bg-slate-100 rounded-lg p-4">
                    <h4 className="font-bold text-slate-900 mb-3">The Slavery Schisms (1840s)</h4>
                    <p className="text-slate-700 text-sm mb-2">
                      American denominations split over slavery in the 1840s-1860s, creating divisions that largely remain:
                    </p>
                    <ul className="text-sm text-slate-700 space-y-2">
                      <li><strong>Methodist Episcopal Church:</strong> Divided in 1844 over Bishop James O. Andrew owning enslaved people</li>
                      <li><strong>Southern Baptist Convention:</strong> Formed in 1845 after splitting from northern Baptists over missionary appointments</li>
                      <li><strong>Presbyterian Church:</strong> Also split in 1861</li>
                    </ul>
                    <p className="text-slate-700 text-sm mt-3 italic">
                      These splits revealed deep tensions about Scripture, ethics, and cultural accommodation that remain relevant for contemporary debates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modern Modal */}
        {modernModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 overflow-y-auto" onClick={() => setModernModalOpen(false)}>
            <div className="min-h-screen flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl my-8" onClick={e => e.stopPropagation()}>
                <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 flex justify-between items-center z-10 rounded-t-2xl">
                  <h3 className="text-2xl font-serif">Global Christianity & Modern Movements</h3>
                  <button onClick={() => setModernModalOpen(false)} className="text-white hover:text-purple-200 transition-colors text-3xl font-bold">×</button>
                </div>
                <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                    <h4 className="font-bold text-orange-900 mb-2">The Pentecostal Explosion (1906)</h4>
                    <p className="text-slate-700 text-sm mb-3 leading-relaxed">
                      The Azusa Street Revival (1906-1909) in Los Angeles, led by African-American preacher William J. Seymour, featured interracial worship, speaking in tongues as evidence of Holy Spirit baptism, and continuous services running nearly 24/7 for three years.
                    </p>
                    <p className="text-slate-700 text-sm font-bold">
                      By 1907, Pentecostalism had spread to 50+ nations across six continents—the fastest missionary expansion in Christian history. By 2020: 500+ million Pentecostal and Charismatic believers worldwide.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">The Geographic Revolution</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <h5 className="font-bold text-green-900 mb-2">Africa's Transformation</h5>
                        <p className="text-sm text-slate-700 mb-2">
                          From less than 10 million Christians (9% of population) in 1900 to <strong>697 million (62%)</strong> by 2020. The DRC shifted from 1% Christian (1900) to 95% (2020).
                        </p>
                        <p className="text-sm text-slate-700 font-medium">
                          By 2050, Africa projected to contain 38% of global Christians—1.25 billion people.
                        </p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <h5 className="font-bold text-blue-900 mb-2">Europe's Decline</h5>
                        <p className="text-sm text-slate-700 mb-2">
                          From 95% Christian (1900) to 76% (2020), declining at -0.54% annually. Most affiliated Europeans are non-practicing.
                        </p>
                        <p className="text-sm text-slate-700">
                          North America similarly declined from 97% Christian (1900) to 72% (2020).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-100 rounded-lg p-4">
                    <h4 className="font-bold text-slate-900 mb-2">Non-Denominational Explosion</h4>
                    <p className="text-slate-700 text-sm mb-3 leading-relaxed">
                      Non-denominational churches exploded from less than 3% of American adults (1972) to 13% of Protestants by 2014, making them the third-largest Christian group after Catholics and Southern Baptists.
                    </p>
                    <p className="text-slate-700 text-sm">
                      American megachurches (2,000+ weekly attendance) grew from approximately 350 (1990) to 1,800 (2020), predominantly suburban, evangelical, and nondenominational.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <h4 className="font-bold text-purple-900 mb-2">21st Century Realignments</h4>
                    <p className="text-slate-700 text-sm mb-3">
                      LGBTQ+ inclusion has driven massive denominational realignment, eerily paralleling 19th-century slavery splits:
                    </p>
                    <ul className="text-sm text-slate-700 space-y-2">
                      <li><strong>United Methodist Church:</strong> 6,000-7,000 churches (20-25%) disaffiliated 2020-2024, forming Global Methodist Church (2022)</li>
                      <li><strong>Episcopal Church:</strong> Gene Robinson consecrated as first openly gay bishop (2003), leading to Anglican Church in North America (2009)</li>
                      <li><strong>Presbyterian Church (USA):</strong> ECO: A Covenant Order of Evangelical Presbyterians formed (2012)</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4 border-2 border-amber-300">
                    <h4 className="font-bold text-slate-900 mb-2">The Future Trajectory</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Christianity will be predominantly African, Asian, and Latin American by mid-century, with radically different cultural expressions than the European Christianity that dominated for 1,500 years. Pentecostal and Charismatic forms will likely continue expanding. The next chapters of Christianity's story will be written in Lagos, Manila, and São Paulo rather than Rome, Geneva, or Canterbury.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Comparison Tool Modal */}
        {comparisonOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 overflow-y-auto" onClick={() => setComparisonOpen(false)}>
            <div className="min-h-screen md:flex md:items-center md:justify-center md:p-4">
              <div className="bg-white md:rounded-2xl max-w-7xl w-full shadow-2xl md:my-8 min-h-screen md:min-h-0" onClick={e => e.stopPropagation()}>
                <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white p-4 md:p-6 flex justify-between items-center z-10 md:rounded-t-2xl">
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif mb-1">Compare Denominations</h3>
                    <p className="text-xs md:text-sm text-indigo-100">Select 2-3 denominations to compare side-by-side</p>
                  </div>
                  <button onClick={() => { setComparisonOpen(false); setComparisonDenoms([]); }} className="text-white hover:text-indigo-200 transition-colors text-3xl font-bold">×</button>
                </div>

                <div className="p-4 md:p-6 md:max-h-[75vh] overflow-y-auto">
                  {/* Selection Grid */}
                  {comparisonDenoms.length < 3 && (
                    <div className="mb-6">
                      <h4 className="font-bold text-slate-900 mb-3">
                        {comparisonDenoms.length === 0 ? 'Select denominations to compare:' : `Select ${3 - comparisonDenoms.length} more:`}
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                        {Object.keys(denominations)
                          .filter(key => !comparisonDenoms.includes(key))
                          .map(key => (
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
                        {comparisonDenoms.map(key => (
                          <div key={key} className="flex items-center gap-2 px-4 py-2 rounded-full border-2" style={{ borderColor: denominations[key].color, backgroundColor: `${denominations[key].color}20` }}>
                            <span className="font-medium text-slate-900">{denominations[key].name}</span>
                            <button
                              onClick={() => setComparisonDenoms(comparisonDenoms.filter(d => d !== key))}
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
                          {comparisonDenoms.map(key => (
                            <div key={key} className="bg-white rounded-lg p-4 border-2" style={{ borderColor: denominations[key].color }}>
                              <h5 className="font-bold text-lg mb-2" style={{ color: denominations[key].color }}>{denominations[key].fullName}</h5>
                              <div className="space-y-2 text-sm">
                                <div><strong>Founded:</strong> {denominations[key].year}</div>
                                <div><strong>Members:</strong> {denominations[key].members}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Shared Foundation - What Unites Us */}
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
                            <div className="flex gap-3 items-start">
                              <span className="text-green-600 font-bold text-lg flex-shrink-0">✓</span>
                              <div>
                                <span className="font-semibold text-slate-900">Trinity:</span>
                                <span className="text-slate-700 text-sm ml-1">One God in three persons (Father, Son, Holy Spirit)</span>
                              </div>
                            </div>
                            <div className="flex gap-3 items-start">
                              <span className="text-green-600 font-bold text-lg flex-shrink-0">✓</span>
                              <div>
                                <span className="font-semibold text-slate-900">Jesus Christ:</span>
                                <span className="text-slate-700 text-sm ml-1">Fully God and fully human, born of Virgin Mary</span>
                              </div>
                            </div>
                            <div className="flex gap-3 items-start">
                              <span className="text-green-600 font-bold text-lg flex-shrink-0">✓</span>
                              <div>
                                <span className="font-semibold text-slate-900">Salvation:</span>
                                <span className="text-slate-700 text-sm ml-1">Through Jesus Christ's death and resurrection</span>
                              </div>
                            </div>
                            <div className="flex gap-3 items-start">
                              <span className="text-green-600 font-bold text-lg flex-shrink-0">✓</span>
                              <div>
                                <span className="font-semibold text-slate-900">Resurrection:</span>
                                <span className="text-slate-700 text-sm ml-1">Christ physically rose from the dead</span>
                              </div>
                            </div>
                            <div className="flex gap-3 items-start">
                              <span className="text-green-600 font-bold text-lg flex-shrink-0">✓</span>
                              <div>
                                <span className="font-semibold text-slate-900">Second Coming:</span>
                                <span className="text-slate-700 text-sm ml-1">Christ will return in glory to judge the living and the dead</span>
                              </div>
                            </div>
                            <div className="flex gap-3 items-start">
                              <span className="text-green-600 font-bold text-lg flex-shrink-0">✓</span>
                              <div>
                                <span className="font-semibold text-slate-900">Scripture:</span>
                                <span className="text-slate-700 text-sm ml-1">The Bible is God's inspired Word</span>
                              </div>
                            </div>
                            <div className="flex gap-3 items-start">
                              <span className="text-green-600 font-bold text-lg flex-shrink-0">✓</span>
                              <div>
                                <span className="font-semibold text-slate-900">Baptism:</span>
                                <span className="text-slate-700 text-sm ml-1">Essential sacrament of Christian initiation</span>
                              </div>
                            </div>
                            <div className="flex gap-3 items-start">
                              <span className="text-green-600 font-bold text-lg flex-shrink-0">✓</span>
                              <div>
                                <span className="font-semibold text-slate-900">Communion:</span>
                                <span className="text-slate-700 text-sm ml-1">Remembering and encountering Christ's sacrifice</span>
                              </div>
                            </div>
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
                              {comparisonDenoms.map(key => {
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
                              {comparisonDenoms.map(key => {
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
                                <span className="text-green-600 font-bold">✓ Agreement:</span> All affirm salvation is ultimately by God's grace through Christ, not by human merit alone; differences lie in how faith and works relate
                              </p>
                            </div>
                          </div>

                          {/* Sacraments/Ordinances */}
                          <div className="bg-white rounded-lg p-4">
                            <h5 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide border-b-2 border-blue-200 pb-2">🍞 Sacraments/Ordinances</h5>
                            <div className={`grid gap-4 grid-cols-1 ${comparisonDenoms.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
                              {comparisonDenoms.map(key => {
                                let sacraments = '';
                                if (key === 'catholic') sacraments = 'Seven sacraments; Real Presence (Transubstantiation) in Eucharist';
                                else if (key === 'orthodox') sacraments = 'Seven holy mysteries; Real Presence in Divine Liturgy';
                                else if (key === 'anglican') sacraments = 'Two sacraments ordained by Christ (Baptism, Eucharist) + five sacramental rites';
                                else if (key === 'lutheran') sacraments = 'Two sacraments (Baptism, Communion); Real Presence (Sacramental Union)';
                                else if (key === 'reformed') sacraments = 'Two sacraments as signs and seals; spiritual presence in Communion';
                                else if (key === 'methodist') sacraments = 'Two sacraments as means of grace; open table for Communion';
                                else if (key === 'baptist') sacraments = 'Two ordinances (symbolic): Believer\'s baptism by immersion, Lord\'s Supper';
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
                              {comparisonDenoms.map(key => {
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
                              const hasEpiscopal = comparisonDenoms.filter(k => ['catholic', 'orthodox', 'anglican', 'methodist'].includes(k)).length >= 2;
                              const hasCongregational = comparisonDenoms.filter(k => ['baptist', 'pentecostal', 'nondenominational'].includes(k)).length >= 2;
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
                          {comparisonDenoms.map(key => (
                            <div key={key}>
                              <h5 className="font-bold mb-3" style={{ color: denominations[key].color }}>{denominations[key].name}</h5>
                              <div className="space-y-2">
                                {denominations[key].geographicDistribution.slice(0, 4).map((region, idx) => (
                                  <div key={idx} className="text-sm">
                                    <div className="flex justify-between mb-1">
                                      <span className="text-slate-700 text-xs">{region.region}</span>
                                      <span className="font-semibold text-xs">{region.percentage}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                                      <div 
                                        className="h-1.5 rounded-full" 
                                        style={{ 
                                          width: region.percentage,
                                          backgroundColor: denominations[key].color
                                        }}
                                      ></div>
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
                          {comparisonDenoms.map(key => (
                            <div key={key}>
                              <h5 className="font-bold mb-2" style={{ color: denominations[key].color }}>{denominations[key].name}</h5>
                              <ul className="space-y-1.5">
                                {denominations[key].debates.slice(0, 4).map((debate, idx) => (
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
                      <div className="flex justify-center gap-3 pt-4">
                        <button
                          onClick={() => setComparisonDenoms([])}
                          className="px-6 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg font-medium transition-colors"
                        >
                          Clear Selection
                        </button>
                        <button
                          onClick={() => {
                            setComparisonOpen(false);
                            setComparisonDenoms([]);
                          }}
                          className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
                        >
                          Done
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
              </div>
            </div>
          </div>
        )}

        {/* Worship Experience Explorer */}
        {worshipExperienceOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 overflow-y-auto" onClick={() => { setWorshipExperienceOpen(false); setSelectedWorshipDenom(null); }}>
            <div className="min-h-screen flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl max-w-6xl w-full shadow-2xl my-8" onClick={e => e.stopPropagation()}>
                <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 flex justify-between items-center z-10 rounded-t-2xl">
                  <div>
                    <h2 className="text-2xl font-serif mb-1">Worship Experiences</h2>
                    <p className="text-sm text-emerald-100">What does Sunday morning look like in each tradition?</p>
                  </div>
                  <button
                    onClick={() => {
                      setWorshipExperienceOpen(false);
                      setSelectedWorshipDenom(null);
                    }}
                    className="text-white hover:text-emerald-200 transition-colors text-3xl font-bold"
                  >×</button>
                </div>

                <div className="p-6 max-h-[75vh] overflow-y-auto">
                {!selectedWorshipDenom && (
                  <div>
                    <p className="text-slate-600 mb-6">Select a denomination to explore what their worship services are like:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Object.keys(worshipExperiences).map(key => (
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
                  <div>
                    <button
                      onClick={() => setSelectedWorshipDenom(null)}
                      className="mb-4 text-emerald-600 hover:text-emerald-700 flex items-center gap-2 font-medium"
                    >
                      ← Back to all denominations
                    </button>

                    <div className="space-y-6">
                      {/* Header */}
                      <div className="border-l-4 pl-4" style={{ borderColor: denominations[selectedWorshipDenom].color }}>
                        <h3 className="text-2xl font-serif mb-1" style={{ color: denominations[selectedWorshipDenom].color }}>
                          {denominations[selectedWorshipDenom].name}
                        </h3>
                        <p className="text-lg text-slate-700 font-medium">{worshipExperiences[selectedWorshipDenom].serviceName}</p>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-600">
                          <div><span className="font-semibold">Length:</span> {worshipExperiences[selectedWorshipDenom].typicalLength}</div>
                          <div><span className="font-semibold">Schedule:</span> {worshipExperiences[selectedWorshipDenom].schedule}</div>
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
                            <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">
                              🎵 Music Style
                            </h4>
                            <p className="text-sm text-slate-700">{worshipExperiences[selectedWorshipDenom].musicStyle}</p>
                          </div>

                          <div className="bg-slate-50 rounded-xl p-4">
                            <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">
                              👔 Dress Expectation
                            </h4>
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
                        <p className="text-sm text-blue-800"><span className="font-semibold">Participation:</span> {worshipExperiences[selectedWorshipDenom].participation}</p>
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
                  </div>
                )}
              </div>
            </div>
          </div>
          </div>
        )}
        </>
        )}
      </div>
    </div>
  );
};

export default DenominationVisualizer;