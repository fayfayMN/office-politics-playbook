// ============================================================
// PlayBook — Office Politics Decoder: Plays Library
// 15 plays across 8 categories
// ============================================================
window.PlaybookData = window.PlaybookData || {};

window.PlaybookData.plays = [

  // ──────────────────────────────────────────────
  // CATEGORY: Status & Sympathy Plays (🎭)
  // ──────────────────────────────────────────────
  {
    id: 'sympathy-shield',
    name: 'The Sympathy Shield',
    category: 'status-sympathy',
    categoryLabel: 'Status & Sympathy Plays',
    categoryIcon: '🎭',
    severity: 'medium',
    surfaceBehavior: 'Claims illness, family emergency, or personal crisis right before a conflict, deadline, or accountability moment',
    underlyingIntent: 'Pre-emptive status protection — makes any pushback look cruel and shifts focus from the issue to their wellbeing',
    redFlags: [
      'Timing is suspiciously convenient (always before difficult conversations)',
      'Details are vague and change slightly each retelling',
      'Communicated through private channels only — no paper trail',
      'Pattern repeats across multiple deadlines or conflicts',
      'They recover remarkably fast once the pressure passes'
    ],
    whyItWorks: 'Exploits empathy and the enormous social cost of confrontation. In American workplaces, questioning someone\'s personal hardship is a career-ending move — even if the pattern is obvious to everyone. The person using this play knows that most people will choose awkward silence over being seen as heartless.',
    counterMoves: {
      acknowledge: 'Express genuine concern without abandoning the business issue. Separate the personal from the professional: "I\'m sorry to hear that. Your health comes first."',
      document: 'Send a follow-up email within 30 minutes: "Hi [Name], I hope you\'re feeling better soon. Just so nothing falls through the cracks, here\'s a summary of where we are on [project] and the remaining deadlines."',
      redirect: 'Anchor the conversation back to process and timeline: "When you\'re back, let\'s reconnect on [specific deliverable]. I\'ll hold the Thursday slot for us."'
    },
    sampleScript: '"Thank you for letting me know — I hope you feel better soon. I want to make sure nothing gets lost while you\'re out, so I\'ll send a quick recap of where things stand and the key dates. We can pick it up when you\'re back."',
    whatNotToDo: [
      'Don\'t argue facts or question their story in the moment — you will look terrible',
      'Don\'t ignore it completely and pretend nothing happened',
      'Don\'t over-apologize or abandon your position out of guilt',
      'Don\'t gossip to colleagues about whether you believe them'
    ],
    culturalBlindSpot: 'In many East Asian, South Asian, and Latin American cultures, personal hardship is an absolute conversation-stopper — you would never bring up work when someone mentions illness. In American workplaces, while empathy is expected, business continuity is equally expected. The professional move is to show care AND maintain accountability.',
    commonIn: ['corporate', 'academic'],
    videoResources: [
      { title: 'How to Handle Difficult Conversations at Work', creator: 'Communication Coach Alexander Lyon', url: 'https://www.youtube.com/@CommunicationCoachAlexLyon' },
      { title: 'Setting Boundaries Without Being the Bad Guy', creator: 'Mel Robbins', url: 'https://www.youtube.com/@MelRobbins' }
    ]
  },

  {
    id: 'martyr-move',
    name: 'The Martyr Move',
    category: 'status-sympathy',
    categoryLabel: 'Status & Sympathy Plays',
    categoryIcon: '🎭',
    severity: 'medium',
    surfaceBehavior: 'Constantly highlights personal sacrifice — working weekends, skipping vacations, staying late — and makes sure everyone knows about it',
    underlyingIntent: 'Creates a guilt-based power dynamic where others feel they can\'t complain about workload or set boundaries without looking lazy by comparison',
    redFlags: [
      'Announces their sacrifice publicly ("I was here until midnight again")',
      'Sighs heavily or makes comments when others leave on time',
      'Uses phrases like "Someone has to do it" or "I guess I\'ll take care of it"',
      'Their actual output doesn\'t match the hours they claim to work',
      'They subtly shame others for having work-life balance'
    ],
    whyItWorks: 'Creates an unspoken competition of suffering. In team cultures, it makes anyone who works normal hours feel guilty or look uncommitted. The martyr often gets perceived as "dedicated" by management while actually being inefficient or territorial about work.',
    counterMoves: {
      acknowledge: 'Acknowledge their work without matching their energy: "You\'ve been putting in a lot of hours. Is there something we can redistribute?"',
      document: 'If their martyrdom creates pressure on you, document the actual workload distribution and share it with your manager.',
      redirect: 'Reframe the conversation around efficiency, not hours: "I want to make sure we\'re working sustainably. Can we look at what\'s driving these late nights?"'
    },
    sampleScript: '"I notice you\'ve been working really late. I want to make sure we\'re distributing the load fairly — let\'s bring this up in our next team meeting so we can figure out a better system."',
    whatNotToDo: [
      'Don\'t start working late to match them — this is exactly what they want',
      'Don\'t publicly praise their sacrifice (it reinforces the behavior)',
      'Don\'t feel guilty for having boundaries',
      'Don\'t try to outwork them — it\'s an unwinnable race'
    ],
    culturalBlindSpot: 'In Japanese, Korean, and Chinese work cultures, long hours are often seen as a sign of dedication and respect. In American workplaces, while hustle culture exists, the most respected professionals are those who deliver results efficiently. Working 80 hours is not a badge of honor — it\'s often seen as poor time management.',
    commonIn: ['corporate', 'startup'],
    videoResources: [
      { title: 'Stop Being the Office Martyr', creator: 'Dr. Grace Lee', url: 'https://www.youtube.com/@DrGraceLee' },
      { title: 'How to Set Boundaries at Work', creator: 'Mel Robbins', url: 'https://www.youtube.com/@MelRobbins' }
    ]
  },

  // ──────────────────────────────────────────────
  // CATEGORY: Credit & Authorship Plays (📝)
  // ──────────────────────────────────────────────
  {
    id: 'quiet-rebrand',
    name: 'The Quiet Rebrand',
    category: 'credit-authorship',
    categoryLabel: 'Credit & Authorship Plays',
    categoryIcon: '📝',
    severity: 'high',
    surfaceBehavior: 'Takes your idea, repackages it with new language, a polished format, or a different slide template, and presents it as their own original thinking',
    underlyingIntent: 'Claim intellectual ownership of your work by making it look different enough to deny theft, while leveraging your thinking for their advancement',
    redFlags: [
      'Your idea reappears days later in a "new" proposal with different terminology',
      'They had no prior interest in the topic until you mentioned it',
      'The core logic is identical but wrapped in their visual style or buzzwords',
      'They present it to leadership without inviting you or mentioning your contribution',
      'When confronted, they say "great minds think alike" or "we must have been thinking the same thing"'
    ],
    whyItWorks: 'Idea theft is notoriously hard to prove. In American workplaces, the person who presents an idea with confidence and polish is often credited as the originator — regardless of who actually thought of it. The rebrander knows that execution visibility trumps ideation.',
    counterMoves: {
      acknowledge: 'Don\'t publicly accuse — instead, reclaim ownership through documentation: "I\'m glad this concept is moving forward. I\'d love to share the original analysis I did on this last week."',
      document: 'Always send your ideas via email BEFORE meetings. Create timestamps: "Ahead of tomorrow\'s brainstorm, here are my initial thoughts on [topic]."',
      redirect: 'Volunteer to lead the implementation: "Since I\'ve been developing this framework, I\'d like to drive the next phase. Here\'s my proposed plan."'
    },
    sampleScript: '"This is exciting — I\'m glad the team is moving on this direction. I put together some initial thinking on this last [day], which I shared with [person/channel]. I\'d love to build on that foundation and lead the next steps."',
    whatNotToDo: [
      'Don\'t wait for "the right moment" to share ideas — share them in writing immediately',
      'Don\'t share ideas only verbally in meetings without a written record',
      'Don\'t accuse publicly without evidence — you\'ll look paranoid',
      'Don\'t stop sharing ideas out of fear — instead, improve your documentation game'
    ],
    culturalBlindSpot: 'In many collectivist cultures, ideas belong to the group, and individual credit is less important. In American workplaces, individual contribution is the currency of promotion. If you don\'t claim your ideas, someone else will — and there\'s no cultural safety net that says "the team knows who really did it."',
    commonIn: ['corporate', 'startup', 'academic'],
    videoResources: [
      { title: 'How to Deal with Someone Stealing Your Ideas at Work', creator: 'Ginny Clarke', url: 'https://www.youtube.com/@GinnyClarke' },
      { title: 'Protect Your Work and Get Credit', creator: 'A Life After Layoff', url: 'https://www.youtube.com/@ALifeAfterLayoff' }
    ]
  },

  {
    id: 'we-hijack',
    name: 'The "We" Hijack',
    category: 'credit-authorship',
    categoryLabel: 'Credit & Authorship Plays',
    categoryIcon: '📝',
    severity: 'medium',
    surfaceBehavior: 'Attaches themselves to your solo work by using "we" language in front of leadership — "We\'ve been working on this analysis" when you did 100% of it',
    underlyingIntent: 'Claim shared credit for your individual work without doing any of it, building their reputation on your output',
    redFlags: [
      'They use "we" when presenting your work to leadership but "I" for their own projects',
      'They appear in CC lines on emails about your deliverables at the last minute',
      'They ask to "review" your work right before a presentation — then co-present',
      'They add one minor suggestion and suddenly it\'s "our" project',
      'They volunteer to "help" with visible deliverables but never with grunt work'
    ],
    whyItWorks: 'American workplace culture genuinely values teamwork, making it socially difficult to say "Actually, I did this alone." Pushing back on "we" language can make you look petty or like a poor team player — which is exactly what the hijacker is counting on.',
    counterMoves: {
      acknowledge: 'Use specific language to reclaim credit without being aggressive: "Thanks — I led the analysis portion. [Name] provided feedback on the final draft."',
      document: 'In project updates, be explicit about individual contributions: "Here\'s my analysis of the Q3 data. I conducted the data pull, modeling, and visualization."',
      redirect: 'When presenting, use first person where appropriate: "I built this model based on the team\'s requirements. Let me walk you through my findings."'
    },
    sampleScript: '"I appreciate the support on this. Just to be clear on the project breakdown — I led the data analysis, modeling, and report writing. [Name] reviewed the final version and gave great feedback on the formatting."',
    whatNotToDo: [
      'Don\'t say "I did this, not them" in a group setting — it sounds territorial',
      'Don\'t let "we" language go uncorrected in important meetings',
      'Don\'t reciprocate by using "we" for their solo work — this just enables the pattern',
      'Don\'t assume your manager knows who actually did the work'
    ],
    culturalBlindSpot: 'Many cultures emphasize group harmony and collective credit. Using "I" feels uncomfortable and even arrogant in Japanese, Indian, or Middle Eastern professional contexts. But in American workplaces, if you don\'t say "I did this," the assumption is that "we" means equal contribution — and the louder person often gets more credit.',
    commonIn: ['corporate', 'academic'],
    videoResources: [
      { title: 'How to Get Credit for Your Work', creator: 'Jennifer Brick', url: 'https://www.youtube.com/@JenniferBrick' },
      { title: 'Making Your Contributions Visible', creator: 'Communication Coach Alexander Lyon', url: 'https://www.youtube.com/@CommunicationCoachAlexLyon' }
    ]
  },

  // ──────────────────────────────────────────────
  // CATEGORY: Control Plays (🔒)
  // ──────────────────────────────────────────────
  {
    id: 'account-gatekeeping',
    name: 'Account Gatekeeping',
    category: 'control',
    categoryLabel: 'Control Plays',
    categoryIcon: '🔒',
    severity: 'high',
    surfaceBehavior: 'Controls exclusive access to key tools, client relationships, vendor contacts, or platforms — making themselves the only person who can do certain things',
    underlyingIntent: 'Creates artificial indispensability by hoarding access. If they\'re the only one who can log into the analytics platform or who has the client\'s direct number, they can\'t be replaced — or so they think.',
    redFlags: [
      'Only one person has admin credentials for critical tools',
      'They resist cross-training or documentation requests with "it\'s faster if I just do it"',
      'Key client or vendor relationships are exclusively personal, not institutional',
      'They get defensive when you ask for shared access',
      'Processes break when they take PTO — and they seem proud of that'
    ],
    whyItWorks: 'In lean teams and startups, concentrating knowledge in one person often happens organically. The gatekeeper exploits this by actively preventing knowledge transfer, knowing that their perceived indispensability protects them from layoffs, criticism, and accountability.',
    counterMoves: {
      acknowledge: 'Frame access requests as team resilience, not distrust: "I want to make sure we have backup coverage — can we set up shared access?"',
      document: 'Raise it as a business risk to your manager: "If [Name] is out sick, we have no way to access [system]. Can we get a backup admin?"',
      redirect: 'Propose a documentation sprint: "Let\'s create a team wiki for our key processes so anyone can step in during emergencies."'
    },
    sampleScript: '"Hey [Name], I want to make sure we\'re covered if you\'re ever out — could we set up backup access for [system]? I\'ll handle the setup if you can share the current configuration."',
    whatNotToDo: [
      'Don\'t try to go around them secretly — it will escalate into a trust conflict',
      'Don\'t accept "I\'ll handle it" as a permanent answer',
      'Don\'t frame it as distrust — frame it as business continuity',
      'Don\'t let months pass without raising the access issue'
    ],
    culturalBlindSpot: 'In hierarchical cultures (Korea, Japan, India), senior employees naturally control access and information flow — juniors don\'t question this. In American workplaces, shared access and documentation are standard expectations. Asking for access is not disrespectful — it\'s professional.',
    commonIn: ['corporate', 'startup'],
    videoResources: [
      { title: 'Signs of a Toxic Coworker', creator: 'A Life After Layoff', url: 'https://www.youtube.com/@ALifeAfterLayoff' },
      { title: 'Navigating Workplace Power Dynamics', creator: 'Ginny Clarke', url: 'https://www.youtube.com/@GinnyClarke' }
    ]
  },

  {
    id: 'information-bottleneck',
    name: 'The Information Bottleneck',
    category: 'control',
    categoryLabel: 'Control Plays',
    categoryIcon: '🔒',
    severity: 'high',
    surfaceBehavior: 'Hoards information and releases it selectively — shares just enough to keep you dependent but never enough for you to work independently',
    underlyingIntent: 'Maintains power by controlling who knows what. Information asymmetry is the most reliable form of organizational control.',
    redFlags: [
      'You consistently learn about decisions or changes after everyone else',
      'They share information in person but never in writing',
      'When you ask direct questions, you get partial or vague answers',
      'They preface information with "I probably shouldn\'t tell you this, but..."',
      'Critical context is always missing from their handoffs'
    ],
    whyItWorks: 'Information is power in every organization. By controlling the flow, the bottleneck ensures that others can\'t make decisions without them, can\'t challenge their interpretations, and can\'t operate independently. It also makes them look like the most "connected" and "knowledgeable" person on the team.',
    counterMoves: {
      acknowledge: 'Build alternative information channels: attend meetings directly, build relationships with stakeholders, read all shared documents carefully.',
      document: 'After every verbal briefing, send a recap email: "Thanks for the update. Just to confirm my understanding: [summary]. Let me know if I\'m missing anything."',
      redirect: 'Request direct access to information sources: "I\'d like to be added to the [channel/meeting/distribution list] so I can stay current without taking up your time."'
    },
    sampleScript: '"I want to be respectful of your time — I know you\'re often the go-to for updates. Would it make sense for me to join the [meeting/channel] directly so I can stay in the loop without adding to your workload?"',
    whatNotToDo: [
      'Don\'t accept being the last to know as normal',
      'Don\'t rely on a single person for critical information',
      'Don\'t confront them about withholding — they\'ll deny it and share even less',
      'Don\'t complain to others without first trying to solve the access problem'
    ],
    culturalBlindSpot: 'In many cultures, information flows strictly through hierarchy — you\'re expected to get updates from your direct superior, not from skip-levels or cross-team. In American workplaces, direct access to information is normal and expected. You can (and should) subscribe to relevant channels, attend open meetings, and build direct relationships.',
    commonIn: ['corporate', 'government'],
    videoResources: [
      { title: 'How to Navigate Office Politics', creator: 'Simon Sinek', url: 'https://www.youtube.com/@SimonSinek' },
      { title: 'Communication Strategies for the Workplace', creator: 'Communication Coach Alexander Lyon', url: 'https://www.youtube.com/@CommunicationCoachAlexLyon' }
    ]
  },

  // ──────────────────────────────────────────────
  // CATEGORY: Exit Plays (🚪)
  // ──────────────────────────────────────────────
  {
    id: 'controlled-collapse',
    name: 'Controlled Collapse',
    category: 'exit',
    categoryLabel: 'Exit Plays',
    categoryIcon: '🚪',
    severity: 'critical',
    surfaceBehavior: 'As they prepare to leave the company, they intentionally let projects deteriorate — missing deadlines, skipping documentation, making undocumented changes — so their successor inherits a mess',
    underlyingIntent: 'Ensures that the person who replaces them looks incompetent by comparison. The departing employee wants leadership to think "Everything worked when [Name] was here" — even though they caused the collapse.',
    redFlags: [
      'Quality of work drops sharply after they give notice',
      'Documentation that should exist doesn\'t — or is incomplete',
      'They make last-minute changes to systems without telling anyone',
      'Knowledge transfer sessions are vague, rushed, or deliberately unhelpful',
      'They express unusual satisfaction about how "hard" the transition will be'
    ],
    whyItWorks: 'Most companies handle transitions poorly. The departing person has 2-4 weeks of low accountability, and managers rarely audit the quality of knowledge transfer. The mess only becomes visible weeks after they\'re gone — when there\'s no one to blame but the successor.',
    counterMoves: {
      acknowledge: 'If you\'re the successor, assume nothing is documented properly and start verifying everything immediately.',
      document: 'Request specific, verifiable knowledge transfer: "Can you walk me through [system] while I screen-record? I want to make sure I capture everything."',
      redirect: 'Escalate to management: "I want to flag that the transition documentation for [project] is incomplete. Can we schedule dedicated handoff sessions before [Name]\'s last day?"'
    },
    sampleScript: '"I want to make sure the transition is smooth for everyone. Can we set up a structured handoff with a checklist? I\'ll create the template — I just need your input on each item before your last day."',
    whatNotToDo: [
      'Don\'t assume the departing person will do a thorough handoff out of goodwill',
      'Don\'t wait until their last day to start the transition',
      'Don\'t accept verbal handoffs — insist on written documentation',
      'Don\'t blame yourself if things fall apart — the collapse was engineered'
    ],
    culturalBlindSpot: 'In many cultures, leaving a job gracefully is a matter of personal honor — you would never sabotage your successor. In American workplaces, while most people do leave professionally, there\'s no cultural safety net guaranteeing it. Always verify, document, and protect yourself during transitions.',
    commonIn: ['corporate', 'startup'],
    videoResources: [
      { title: 'How to Handle a Coworker Who Is Leaving', creator: 'A Life After Layoff', url: 'https://www.youtube.com/@ALifeAfterLayoff' },
      { title: 'Knowledge Transfer Best Practices', creator: 'Communication Coach Alexander Lyon', url: 'https://www.youtube.com/@CommunicationCoachAlexLyon' }
    ]
  },

  {
    id: 'drag-down-resignation',
    name: 'The Drag-Down Resignation',
    category: 'exit',
    categoryLabel: 'Exit Plays',
    categoryIcon: '🚪',
    severity: 'high',
    surfaceBehavior: 'On their way out, poisons team morale by sharing grievances, recruiting allies to also leave, and creating an atmosphere of distrust toward the company',
    underlyingIntent: 'Validates their own decision to leave by convincing others to follow. Also retaliates against the organization by destabilizing the team they\'re leaving behind.',
    redFlags: [
      'Suddenly becomes vocal about company problems they never mentioned before',
      'Has private "coffee chats" with team members where they share insider complaints',
      'Encourages others to "start looking" or drops hints about their new company hiring',
      'Shares confidential information or internal gossip with unusual openness',
      'Creates urgency: "Things are about to get worse — I\'d get out now if I were you"'
    ],
    whyItWorks: 'People leaving have nothing to lose, which makes them seem like truth-tellers. Their "inside knowledge" carries weight because they\'re no longer playing the political game. Team members who are already unhappy latch onto this validation.',
    counterMoves: {
      acknowledge: 'Listen politely but don\'t absorb their narrative as fact: "I appreciate you sharing your perspective. I\'ll form my own view over time."',
      document: 'If they share truly concerning information (illegal activity, safety issues), document it separately. If it\'s just grievance-sharing, let it go.',
      redirect: 'Focus on your own experience: "My experience here has been [X]. I\'m going to evaluate things on my own timeline."'
    },
    sampleScript: '"Thanks for sharing your thoughts. I know transitions can be emotional. I\'m going to keep focusing on my own goals here and see how things develop. I wish you the best in your next role."',
    whatNotToDo: [
      'Don\'t join the pile-on — it feels good in the moment but damages your reputation',
      'Don\'t repeat their claims to others — you become the gossip source',
      'Don\'t make career decisions based on someone else\'s exit emotions',
      'Don\'t burn your own bridges because someone else is burning theirs'
    ],
    culturalBlindSpot: 'In tight-knit cultural communities, loyalty to colleagues can feel stronger than loyalty to the company. A departing colleague from your home country who says "this company is bad for people like us" can be especially persuasive. Always evaluate your own experience independently.',
    commonIn: ['corporate', 'startup', 'academic'],
    videoResources: [
      { title: 'How to Handle Toxic Coworkers', creator: 'Dr. Grace Lee', url: 'https://www.youtube.com/@DrGraceLee' },
      { title: 'Workplace Gossip and How to Navigate It', creator: 'Ginny Clarke', url: 'https://www.youtube.com/@GinnyClarke' }
    ]
  },

  // ──────────────────────────────────────────────
  // CATEGORY: Authority Plays (👑)
  // ──────────────────────────────────────────────
  {
    id: 'backchannel',
    name: 'The Backchannel',
    category: 'authority',
    categoryLabel: 'Authority Plays',
    categoryIcon: '👑',
    severity: 'high',
    surfaceBehavior: 'Uses private conversations with leadership (hallway chats, private Slack messages, lunches) to influence decisions before they\'re officially discussed in meetings',
    underlyingIntent: 'Pre-sells their preferred outcome so that by the time the meeting happens, the decision is already made. The meeting becomes theater — the audience thinks there\'s a discussion, but the conclusion was predetermined.',
    redFlags: [
      'Decisions are "announced" in meetings rather than discussed',
      'Leadership references conversations you weren\'t part of: "As [Name] and I discussed..."',
      'Your colleague seems to know about decisions before they\'re communicated',
      'Meeting agendas mysteriously align with one person\'s preferences',
      'You propose alternatives in meetings and get a quick "we\'ve already considered that"'
    ],
    whyItWorks: 'American corporate culture rewards relationship-building and "managing up." The backchannel player isn\'t technically breaking any rules — they\'re just building stronger relationships with decision-makers. The problem is that it creates an unfair advantage and makes formal processes meaningless.',
    counterMoves: {
      acknowledge: 'Build your own relationships with leadership. Don\'t just work hard — make your work visible to the people who matter.',
      document: 'Before meetings, send your proposals via email to all attendees: "Ahead of tomorrow\'s discussion, here are my thoughts on [topic]." This creates a record and forces your ideas into the official conversation.',
      redirect: 'In meetings, surface the pre-decision: "It sounds like there\'s been some preliminary discussion on this. Can we make sure all perspectives are on the table before we finalize?"'
    },
    sampleScript: '"I want to make sure we\'re all working from the same information. Can we take a few minutes to hear everyone\'s perspective on this before we move forward? I have some data I\'d like to share."',
    whatNotToDo: [
      'Don\'t assume the backchannel is malicious — sometimes it\'s just how things work',
      'Don\'t confront the backchanneler publicly — work on building your own access',
      'Don\'t wait for meetings to share important ideas — send them in advance',
      'Don\'t underestimate the power of informal relationships'
    ],
    culturalBlindSpot: 'In many cultures (German, Dutch, Scandinavian), formal meetings are where real decisions happen, and backdoor lobbying is frowned upon. In American workplaces, informal influence is not only accepted — it\'s expected. The meeting is often just the ratification ceremony. Learning to "pre-sell" your ideas is a critical skill.',
    commonIn: ['corporate', 'government', 'academic'],
    videoResources: [
      { title: 'How Decisions Really Get Made', creator: 'Simon Sinek', url: 'https://www.youtube.com/@SimonSinek' },
      { title: 'Managing Up: Building Relationships with Leadership', creator: 'Ginny Clarke', url: 'https://www.youtube.com/@GinnyClarke' }
    ]
  },

  {
    id: 'going-over-head',
    name: 'Going Over Your Head',
    category: 'authority',
    categoryLabel: 'Authority Plays',
    categoryIcon: '👑',
    severity: 'high',
    surfaceBehavior: 'Bypasses you to talk directly to your boss or skip-level manager, undermining your authority and making decisions about your work without your input',
    underlyingIntent: 'Erodes your positional authority by establishing a direct line to your superiors. Positions themselves as more credible, competent, or trustworthy than you in the eyes of your leadership.',
    redFlags: [
      'Your manager references conversations with your peer that you weren\'t aware of',
      'Decisions about your projects are made without consulting you',
      'A colleague sends emails to your boss that should have come to you first',
      'You learn about changes to your work from your manager, not from the person who requested them',
      'The person says "I just wanted to give [boss] a heads up" about things in your domain'
    ],
    whyItWorks: 'In flat or matrixed organizations, reporting lines are fuzzy. The person going over your head exploits this ambiguity. They frame it as "keeping leadership informed" or "being proactive," which sounds positive. But the effect is that your authority is gradually eroded.',
    counterMoves: {
      acknowledge: 'Address it directly with the person first: "I noticed you connected with [boss] about [topic]. I\'d appreciate being looped in on things that touch my area."',
      document: 'Talk to your manager: "I want to make sure our communication flow is clear. If [Name] has concerns about [project], I\'d prefer they come to me first so I can address them."',
      redirect: 'Establish yourself as the primary contact: "Going forward, anything related to [project/area] should come through me first. I\'ll escalate to [boss] if needed."'
    },
    sampleScript: '"Hey [Name], I saw you chatted with [boss] about the timeline change on [project]. I want to make sure we\'re coordinated — could you loop me in next time? I can usually resolve these things quickly, and it saves everyone time."',
    whatNotToDo: [
      'Don\'t retaliate by going over THEIR head — it creates an escalation war',
      'Don\'t ignore it and hope it stops — it won\'t',
      'Don\'t be passive-aggressive about it — address it professionally and directly',
      'Don\'t assume your manager will automatically defend your authority — you need to ask for it'
    ],
    culturalBlindSpot: 'In cultures with strong hierarchical respect (Japan, Korea, India, much of Latin America), going to someone\'s boss without their knowledge would be seen as a severe breach of protocol. In American workplaces, it\'s more common and sometimes even encouraged as "transparency." But it still undermines authority — you just need to address it more diplomatically.',
    commonIn: ['corporate', 'government'],
    videoResources: [
      { title: 'What to Do When Someone Goes Over Your Head', creator: 'Dr. Grace Lee', url: 'https://www.youtube.com/@DrGraceLee' },
      { title: 'Managing Peer Conflicts', creator: 'Communication Coach Alexander Lyon', url: 'https://www.youtube.com/@CommunicationCoachAlexLyon' }
    ]
  },

  // ──────────────────────────────────────────────
  // CATEGORY: Ambiguity Plays (🌫️)
  // ──────────────────────────────────────────────
  {
    id: 'floating-role',
    name: 'The Floating Role',
    category: 'ambiguity',
    categoryLabel: 'Ambiguity Plays',
    categoryIcon: '🌫️',
    severity: 'medium',
    surfaceBehavior: 'Keeps their responsibilities deliberately vague — no clear job description, fluid project involvement, undefined accountability — so they can claim credit for wins and avoid blame for losses',
    underlyingIntent: 'Maximum flexibility with minimum accountability. When things go well, they were "involved." When things go badly, it "wasn\'t their area."',
    redFlags: [
      'Their role description is a vague collection of buzzwords ("strategic initiatives," "cross-functional alignment")',
      'They attend many meetings but own few deliverables',
      'When asked what they do, they give different answers to different people',
      'They volunteer for high-visibility projects but disappear when the work gets hard',
      'Their manager can\'t clearly articulate what they\'re responsible for'
    ],
    whyItWorks: 'In large organizations, role ambiguity is incredibly common — and some people exploit it masterfully. The floating role person is always "busy" and "involved" but never concretely responsible. They survive by being politically connected rather than productively accountable.',
    counterMoves: {
      acknowledge: 'Don\'t try to define their role for them — instead, sharpen the definition of YOUR role so there\'s no overlap.',
      document: 'When collaborating, establish clear ownership in writing: "Just to confirm — I\'ll own [deliverable A], and you\'ll own [deliverable B]. Sound right?"',
      redirect: 'If they claim credit for your area, respond with specifics: "Thanks — my contribution was [specific work]. What was your piece?"'
    },
    sampleScript: '"I want to make sure we\'re clear on the division of work here. I\'ll take ownership of [specific deliverable] and have it ready by [date]. What will you be delivering, and by when?"',
    whatNotToDo: [
      'Don\'t let role ambiguity between you and them go unaddressed',
      'Don\'t assume good faith — if someone resists defining their role, there\'s usually a reason',
      'Don\'t complain about their vague role — instead, make your own role crystal clear',
      'Don\'t try to expose them — focus on protecting your own clarity'
    ],
    culturalBlindSpot: 'In many cultures, your role is what your boss tells you to do — job descriptions are less rigid. In American workplaces, role clarity is your responsibility to establish and maintain. If your role is vague, YOU are the one who suffers — through scope creep, credit theft, and invisible labor.',
    commonIn: ['corporate', 'government'],
    videoResources: [
      { title: 'How to Define Your Role at Work', creator: 'Jennifer Brick', url: 'https://www.youtube.com/@JenniferBrick' },
      { title: 'Career Strategy for Corporate Professionals', creator: 'Ginny Clarke', url: 'https://www.youtube.com/@GinnyClarke' }
    ]
  },

  {
    id: 'initiative-trap',
    name: 'The Initiative Trap',
    category: 'ambiguity',
    categoryLabel: 'Ambiguity Plays',
    categoryIcon: '🌫️',
    severity: 'high',
    surfaceBehavior: 'Assigns you a vague, unscoped project with no clear success criteria, timeline, or resources — then judges you harshly when you "fail" to deliver something they never defined',
    underlyingIntent: 'Creates a no-win situation. If you succeed despite the vagueness, they take credit for "empowering" you. If you fail, they blame your execution. Either way, they look good and you look bad.',
    redFlags: [
      'The assignment is described in buzzwords: "Take the lead on our innovation strategy"',
      'No budget, timeline, or success metrics are provided',
      'When you ask clarifying questions, you get "Just run with it" or "Show some initiative"',
      'Similar vague projects have been given to others before — and those people are no longer in the role',
      'There\'s no written brief or project charter'
    ],
    whyItWorks: 'In American workplaces, "initiative" and "ownership" are highly valued. Asking too many questions can be perceived as lacking drive. The initiative trap exploits this cultural pressure — you feel you have to figure it out on your own, even when the task is genuinely undefined.',
    counterMoves: {
      acknowledge: 'Accept the project enthusiastically, then immediately create structure: "I\'d love to take this on. Let me put together a brief proposal with scope, timeline, and success criteria for your review."',
      document: 'Always respond to vague assignments with a written scope document: "Based on our conversation, here\'s my understanding of the project scope, key deliverables, and timeline. Please confirm or adjust."',
      redirect: 'If they resist scoping, escalate with positive framing: "I want to make sure this initiative succeeds. Can we align on what success looks like so I can prioritize effectively?"'
    },
    sampleScript: '"I\'m excited about this opportunity. Before I dive in, I want to set us up for success. I\'ll draft a one-page scope document with proposed deliverables, timeline, and success metrics. Can we review it together next [day]?"',
    whatNotToDo: [
      'Don\'t start working without a written scope — you\'re building on sand',
      'Don\'t assume that asking questions shows weakness — it shows professionalism',
      'Don\'t accept "just figure it out" as final direction — push diplomatically for clarity',
      'Don\'t spend weeks on something before checking alignment'
    ],
    culturalBlindSpot: 'In many cultures, questioning your manager\'s assignment is disrespectful. If the boss says "handle it," you handle it. In American workplaces, defining scope is YOUR responsibility, and clarifying questions are expected. A manager who refuses to scope a project is either testing you or setting you up — and the remedy is the same: create the scope yourself.',
    commonIn: ['corporate', 'startup'],
    videoResources: [
      { title: 'How to Manage Up and Clarify Expectations', creator: 'Dr. Grace Lee', url: 'https://www.youtube.com/@DrGraceLee' },
      { title: 'Project Management for New Employees', creator: 'A Life After Layoff', url: 'https://www.youtube.com/@ALifeAfterLayoff' }
    ]
  },

  // ──────────────────────────────────────────────
  // CATEGORY: Communication Plays (🗣️)
  // ──────────────────────────────────────────────
  {
    id: 'selective-forward',
    name: 'The Selective Forward',
    category: 'communication',
    categoryLabel: 'Communication Plays',
    categoryIcon: '🗣️',
    severity: 'high',
    surfaceBehavior: 'Forwards emails strategically — removing context, selectively quoting, or adding misleading commentary — to change the narrative and make you look bad or them look good',
    underlyingIntent: 'Weaponizes email as a political tool. By controlling what gets forwarded and what gets omitted, they construct a version of events that serves their interests.',
    redFlags: [
      'You receive a forwarded email chain and notice your messages are cut or summarized inaccurately',
      'Someone references something you "said in an email" that was taken out of context',
      'The forwarder adds commentary above the chain: "Just wanted to flag this..." with a misleading frame',
      'You\'re suddenly CC\'d on chains where the opening summary doesn\'t match the actual thread',
      'People react to your emails in ways that suggest they\'re reading a different version'
    ],
    whyItWorks: 'Email is the primary evidence system in American workplaces. Most people trust forwarded emails at face value — they don\'t scroll down to read the full chain. The selective forwarder exploits this laziness to control perception.',
    counterMoves: {
      acknowledge: 'Always write emails as if they\'ll be forwarded — because they might be. Be precise, professional, and avoid ambiguous phrasing.',
      document: 'If you discover a selective forward, reply-all with the full context: "I want to make sure everyone has the complete picture. Here\'s the full thread for reference."',
      redirect: 'For sensitive topics, have the conversation in a meeting (with notes you write afterward) rather than in email threads that can be selectively forwarded.'
    },
    sampleScript: '"I noticed the forwarded version may not include all the context from our original discussion. I\'m attaching the full email thread so everyone can review. I want to make sure we\'re all on the same page."',
    whatNotToDo: [
      'Don\'t write emotional or sarcastic emails — they will be forwarded',
      'Don\'t assume email threads stay between you and the recipient',
      'Don\'t let a mischaracterized forward go uncorrected — the false narrative becomes "truth"',
      'Don\'t retaliate with your own selective forwarding — rise above it'
    ],
    culturalBlindSpot: 'In many cultures, email is considered semi-private communication between the sender and recipient. In American workplaces, email is essentially a public document that can (and will) be forwarded, screenshotted, and used in HR investigations. Write every email as if it\'s going to be read by the CEO.',
    commonIn: ['corporate', 'government', 'academic'],
    videoResources: [
      { title: 'Email Communication Skills', creator: 'Communication Coach Alexander Lyon', url: 'https://www.youtube.com/@CommunicationCoachAlexLyon' },
      { title: 'Protecting Yourself at Work', creator: 'A Life After Layoff', url: 'https://www.youtube.com/@ALifeAfterLayoff' }
    ]
  },

  {
    id: 'verbal-only-agreement',
    name: 'The Verbal-Only Agreement',
    category: 'communication',
    categoryLabel: 'Communication Plays',
    categoryIcon: '🗣️',
    severity: 'high',
    surfaceBehavior: 'Makes commitments, promises, or agreements only verbally — never in email or writing — so they can later deny, modify, or reinterpret what was agreed upon',
    underlyingIntent: 'Maintains maximum deniability. Without a paper trail, it\'s your word against theirs — and in corporate disputes, the person with documentation wins.',
    redFlags: [
      'They prefer to discuss important decisions in person or by phone, never in writing',
      'When you send a recap email, they don\'t respond or say "that\'s not quite what I said"',
      'Past agreements are "misremembered" or "reinterpreted" when convenient',
      'They avoid Slack/email and pull you into hallway conversations for important topics',
      'You notice a pattern: anything that benefits them gets documented; anything that commits them doesn\'t'
    ],
    whyItWorks: 'Verbal communication is inherently ambiguous. People remember conversations differently, and without documentation, there\'s no way to prove what was said. The verbal-only player knows that in any dispute, the person who documented wins.',
    counterMoves: {
      acknowledge: 'After every important verbal conversation, send a recap email within 30 minutes: "Great talking with you. Here\'s my understanding of what we agreed on..."',
      document: 'If they resist email, take notes during the conversation and share them: "I took some notes during our chat for my own reference. Let me know if I captured anything incorrectly."',
      redirect: 'For critical agreements, insist on written confirmation: "This sounds great. Can you send me a quick email confirming the plan so I can make sure I execute correctly?"'
    },
    sampleScript: '"I really appreciate you walking me through that. I want to make sure I capture everything accurately — I\'ll send a quick summary email so we\'re aligned. Just flag anything I got wrong."',
    whatNotToDo: [
      'Don\'t accept verbal agreements as final — always follow up in writing',
      'Don\'t assume the other person is acting in good faith just because they seem friendly',
      'Don\'t let the fear of being "too formal" stop you from documenting — it\'s professional, not paranoid',
      'Don\'t wait days to send the recap — the longer you wait, the more room for reinterpretation'
    ],
    culturalBlindSpot: 'In many cultures (Middle Eastern, South Asian, Latin American), verbal agreements carry the weight of honor — a person\'s word is their bond. In American workplaces, if it\'s not in writing, it doesn\'t exist. This is not a judgment on anyone\'s character — it\'s how the system works. Protect yourself by making everything written.',
    commonIn: ['corporate', 'startup', 'academic'],
    videoResources: [
      { title: 'The Importance of Documentation at Work', creator: 'A Life After Layoff', url: 'https://www.youtube.com/@ALifeAfterLayoff' },
      { title: 'Protect Yourself with Paper Trails', creator: 'Ginny Clarke', url: 'https://www.youtube.com/@GinnyClarke' }
    ]
  },

  // ──────────────────────────────────────────────
  // CATEGORY: Alliance Plays (🤝)
  // ──────────────────────────────────────────────
  {
    id: 'false-mentor',
    name: 'The False Mentor',
    category: 'alliance',
    categoryLabel: 'Alliance Plays',
    categoryIcon: '🤝',
    severity: 'critical',
    surfaceBehavior: 'Poses as a supportive mentor — offering advice, sharing insider knowledge, being your "go-to person" — while actually gathering intelligence about your plans, vulnerabilities, and ambitions to use against you or report to others',
    underlyingIntent: 'Gains your trust to extract information. Uses your vulnerabilities as leverage, your ambitions as threat intelligence, and your openness as a weapon. Often reports back to management or competing colleagues.',
    redFlags: [
      'They approached YOU early and enthusiastically — real mentors let relationships develop naturally',
      'They ask probing personal questions: "What frustrated you about that meeting?" "Do you trust your manager?"',
      'Their advice subtly discourages you from being visible or ambitious: "Don\'t push too hard" or "Just keep your head down"',
      'They share "confidential" information to build trust and encourage you to reciprocate',
      'Other people seem to know things you only told this person',
      'They have a history of being "close" to new employees who later struggle or leave'
    ],
    whyItWorks: 'New employees — especially non-native speakers navigating unfamiliar cultural terrain — desperately need guidance. The false mentor fills that need perfectly, making the target feel safe and supported. By the time the pattern becomes clear, significant damage has been done.',
    counterMoves: {
      acknowledge: 'Don\'t reject their friendship — just limit what you share. Keep conversations professional and avoid sharing frustrations, ambitions, or vulnerabilities.',
      document: 'If you suspect information is being leaked, test it: share a specific, harmless piece of information only with this person, and see if it comes back to you from another source.',
      redirect: 'Build a diverse network of advisors so you\'re not dependent on any single person. Seek mentors outside your immediate team or organization.'
    },
    sampleScript: '"I really appreciate your guidance. I\'m still getting my bearings, so I\'m keeping things pretty focused on the work for now. I\'d love your advice on [specific, safe work topic] though."',
    whatNotToDo: [
      'Don\'t share your salary, job frustrations, or career ambitions with anyone you\'ve known less than 6 months',
      'Don\'t trust someone just because they\'re from your home country or cultural background',
      'Don\'t reciprocate "confidential" sharing — that\'s the hook',
      'Don\'t burn the bridge if you discover they\'re false — just quietly limit information flow',
      'Don\'t share negative opinions about managers, colleagues, or the company'
    ],
    culturalBlindSpot: 'In many cultures, a senior colleague who takes interest in you is fulfilling a respected social role — the elder, the senpai, the mentor. In American workplaces, while genuine mentorship exists, it\'s less common than the false version. The key difference: genuine mentors challenge you to grow; false mentors make you feel comfortable while gathering information.',
    commonIn: ['corporate', 'academic', 'government'],
    videoResources: [
      { title: 'How to Identify a False Mentor at Work', creator: 'Ginny Clarke', url: 'https://www.youtube.com/@GinnyClarke' },
      { title: 'Trust and Workplace Relationships', creator: 'Simon Sinek', url: 'https://www.youtube.com/@SimonSinek' },
      { title: 'Navigating Office Relationships as a New Employee', creator: 'Dr. Grace Lee', url: 'https://www.youtube.com/@DrGraceLee' }
    ]
  }
];
