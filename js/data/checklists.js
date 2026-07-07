// ============================================================
// PlayBook — Office Politics Decoder: Red Flag Radar Checklists
// Weighted checklist items across 6 categories
// ============================================================
window.PlaybookData = window.PlaybookData || {};

window.PlaybookData.checklists = [

  // ──────────────────────────────────────────────
  // CATEGORY 1: Role Clarity (weight: high)
  // ──────────────────────────────────────────────
  {
    category: 'Role Clarity',
    weight: 'high',
    icon: '🎯',
    description: 'Clear roles prevent exploitation. If your boundaries are fuzzy, others will define them for you — and rarely in your favor.',
    items: [
      {
        id: 'rc-1',
        question: 'Is my job description documented and agreed upon?',
        redFlag: 'No written job description, or it doesn\'t match your actual daily work',
        greenFlag: 'Clear, written job description that matches your daily responsibilities and was discussed during onboarding',
        tip: 'Ask for it on Day 1. If it doesn\'t exist, write one yourself and send it to your manager: "I want to confirm my understanding of my role — here\'s what I see as my core responsibilities. Does this align with your expectations?"'
      },
      {
        id: 'rc-2',
        question: 'Are my success metrics clearly defined?',
        redFlag: 'Vague goals like "do great work" or "support the team" with no measurable criteria',
        greenFlag: 'Specific, measurable goals documented in a performance system, reviewed regularly',
        tip: 'If your manager says "just do good work," push for specifics: "What does success look like for me in 6 months? What metrics will my review be based on?" Get it in writing.'
      },
      {
        id: 'rc-3',
        question: 'Do I know who makes decisions about my work and career?',
        redFlag: 'Multiple people giving you direction with no clear chain of command',
        greenFlag: 'One clear reporting line with defined decision-making authority',
        tip: 'If you\'re getting direction from multiple people, email your manager: "I want to confirm — when I get requests from [Person A] and [Person B], should I prioritize based on your guidance?"'
      },
      {
        id: 'rc-4',
        question: 'Is there clarity about what is NOT my responsibility?',
        redFlag: 'You\'re frequently asked to do tasks that feel outside your role, and nobody seems to notice',
        greenFlag: 'Clear boundaries between your role and adjacent roles, understood by the team',
        tip: 'Document tasks that fall outside your role. When asked to do something that isn\'t yours: "I\'m happy to help this time. For future instances, should we clarify who owns this?"'
      },
      {
        id: 'rc-5',
        question: 'Was my onboarding structured with clear milestones?',
        redFlag: 'Thrown into work immediately with "figure it out" mentality',
        greenFlag: '30-60-90 day plan with clear expectations, check-ins, and a designated mentor',
        tip: 'If no onboarding plan exists, create your own 30-60-90 day plan and share it with your manager for alignment. This shows initiative and creates accountability.'
      }
    ]
  },

  // ──────────────────────────────────────────────
  // CATEGORY 2: Credit & Visibility (weight: high)
  // ──────────────────────────────────────────────
  {
    category: 'Credit & Visibility',
    weight: 'high',
    icon: '📝',
    description: 'Who gets credit and who gets visibility determines who gets promoted. If your work is invisible, it doesn\'t exist in the eyes of leadership.',
    items: [
      {
        id: 'cv-1',
        question: 'Is there a norm for attributing individual contributions?',
        redFlag: 'Manager presents team work as their own, or one person consistently gets credit for group efforts',
        greenFlag: 'Individuals are named and recognized for their specific contributions in meetings and reports',
        tip: 'Start a practice of naming contributors in your own communications: "Thanks to [colleague] for the analysis on this." Model the behavior you want to see.'
      },
      {
        id: 'cv-2',
        question: 'Do I present my own work, or does someone else present it?',
        redFlag: 'Your manager or a senior colleague consistently presents your work to leadership without involving you',
        greenFlag: 'You present your own work directly to stakeholders and leadership',
        tip: 'If someone else presents your work, ask: "Would it be helpful if I presented the technical details in the next review? I can speak to the implementation specifics."'
      },
      {
        id: 'cv-3',
        question: 'Are my contributions tracked in a shared, transparent system?',
        redFlag: 'No project tracking, or contributions are noted in private documents you can\'t access',
        greenFlag: 'Clear project management tool where individual contributions are visible and linked to names',
        tip: 'If there\'s no tracking system, keep your own wins log. Weekly, send a brief update to your manager: "This week I delivered: X, Y, Z." This creates a paper trail of your output.'
      },
      {
        id: 'cv-4',
        question: 'Do I have access to leadership visibility (skip-levels, demos, reviews)?',
        redFlag: 'You never interact with anyone above your immediate manager',
        greenFlag: 'Regular opportunities to present to or interact with senior leadership',
        tip: 'Ask for a skip-level 1-on-1 with your manager\'s manager once per quarter. If not available, volunteer to present at team-wide meetings or demos.'
      },
      {
        id: 'cv-5',
        question: 'When things go well, am I included in the celebration? When things go wrong, am I included in the blame?',
        redFlag: 'You\'re invisible during wins but visible during failures',
        greenFlag: 'Balanced recognition — you\'re acknowledged for contributions and supported during setbacks',
        tip: 'Track the pattern. If you\'re only mentioned during failures, document it and raise it in your next 1-on-1: "I\'d love to be more visible during project wins. Can I present at the next retrospective?"'
      }
    ]
  },

  // ──────────────────────────────────────────────
  // CATEGORY 3: Communication Patterns (weight: medium)
  // ──────────────────────────────────────────────
  {
    category: 'Communication Patterns',
    weight: 'medium',
    icon: '💬',
    description: 'How information flows reveals who has power and who is being managed. Healthy teams communicate openly; political teams control information.',
    items: [
      {
        id: 'cp-1',
        question: 'Are important decisions communicated broadly and transparently?',
        redFlag: 'Decisions appear from nowhere, you learn about changes through rumors or side conversations',
        greenFlag: 'Decisions are communicated in team meetings or shared channels with context and rationale',
        tip: 'If decisions are made in back-channels, start asking: "Can you share the context behind this decision? I want to understand the rationale so I can support it better."'
      },
      {
        id: 'cp-2',
        question: 'Is there transparency about who knows what?',
        redFlag: 'Some team members have information advantages — they know things others don\'t',
        greenFlag: 'Information is shared equitably in team channels, not whispered in 1-on-1s',
        tip: 'If you notice information asymmetry, don\'t confront it directly. Instead, ask questions in public channels: "Has there been any update on [topic]?" Force information into the open.'
      },
      {
        id: 'cp-3',
        question: 'Are 1-on-1 conversations followed up with written summaries?',
        redFlag: 'Important agreements happen verbally with no documentation',
        greenFlag: 'Verbal agreements are followed up with "per our conversation" emails',
        tip: 'Always send a follow-up email after important conversations: "Great chatting today. To summarize what we discussed: [points]. Let me know if I missed anything."'
      },
      {
        id: 'cp-4',
        question: 'Is feedback given directly and constructively?',
        redFlag: 'You hear about problems with your work from third parties, or feedback is vague and indirect',
        greenFlag: 'Direct, specific, timely feedback given in 1-on-1 settings with actionable next steps',
        tip: 'If you\'re getting secondhand feedback, address it: "I heard from [person] that there were concerns about X. I\'d prefer to hear feedback directly — can we set up a regular check-in?"'
      }
    ]
  },

  // ──────────────────────────────────────────────
  // CATEGORY 4: Workload Distribution (weight: high)
  // ──────────────────────────────────────────────
  {
    category: 'Workload Distribution',
    weight: 'high',
    icon: '⚖️',
    description: 'Unequal workload is the #1 path to burnout. If you\'re doing more work for the same recognition, you\'re being exploited — even if it\'s unintentional.',
    items: [
      {
        id: 'wd-1',
        question: 'Is the workload distribution visible and roughly fair?',
        redFlag: 'Some people are overloaded while others have light loads, and no one acknowledges it',
        greenFlag: 'Workload is tracked, visible, and discussed in team planning sessions',
        tip: 'If workload isn\'t tracked, start making it visible: "I\'d like to share my current task list in our next standup so we can coordinate. Would others be open to doing the same?"'
      },
      {
        id: 'wd-2',
        question: 'Can I say "no" to requests outside my role without negative consequences?',
        redFlag: 'Saying no leads to being labeled "not a team player" or passive-aggressive retaliation',
        greenFlag: 'Declining tasks outside your scope is treated as normal prioritization, not insubordination',
        tip: 'Frame "no" as a priority question: "I can take this on, but it would mean delaying [current priority]. Should I reprioritize, or should we find another owner for this?"'
      },
      {
        id: 'wd-3',
        question: 'Are weekend/evening work expectations explicitly stated?',
        redFlag: 'Nobody says overtime is expected, but everyone works late and you feel pressure to do the same',
        greenFlag: 'Clear communication about when overtime is expected (sprints, launches) and when it\'s not',
        tip: 'Ask during onboarding or in your first 1-on-1: "What are the team\'s norms around working hours? Are there seasons where extended hours are expected?"'
      },
      {
        id: 'wd-4',
        question: 'When someone leaves the team, is their work redistributed fairly?',
        redFlag: 'The departed person\'s work quietly lands on your desk with no discussion or compensation',
        greenFlag: 'Departures trigger a formal redistribution discussion with the team and temporary measures',
        tip: 'If extra work lands on you without discussion: "I want to make sure we handle [departed person]\'s responsibilities intentionally. Can we discuss redistribution as a team?"'
      },
      {
        id: 'wd-5',
        question: 'Is "crunch time" temporary or permanent?',
        redFlag: 'The team has been in "crunch mode" for 3+ months with no end date',
        greenFlag: 'Crunch periods have clear start/end dates and are followed by recovery time',
        tip: 'Ask: "When do we expect to exit crunch mode?" If there\'s no answer, the crunch IS the job. Plan accordingly — update your resume and set hard boundaries.'
      }
    ]
  },

  // ──────────────────────────────────────────────
  // CATEGORY 5: Management Style (weight: medium)
  // ──────────────────────────────────────────────
  {
    category: 'Management Style',
    weight: 'medium',
    icon: '👔',
    description: 'Your manager is the single biggest factor in your work experience. A good manager protects and develops you. A bad manager exploits or ignores you.',
    items: [
      {
        id: 'ms-1',
        question: 'Does my manager have regular 1-on-1 meetings with me?',
        redFlag: '1-on-1s are frequently canceled, skipped, or used only for status updates',
        greenFlag: 'Regular, protected 1-on-1 time that includes career development, feedback, and your concerns',
        tip: 'If your 1-on-1s keep getting canceled, email your manager: "I value our 1-on-1 time — can we reschedule? I have a few items I\'d like to discuss."'
      },
      {
        id: 'ms-2',
        question: 'Does my manager advocate for me in rooms I\'m not in?',
        redFlag: 'You never hear about your manager mentioning your work to leadership',
        greenFlag: 'Your manager regularly references your contributions to senior leaders and stakeholders',
        tip: 'Ask directly: "When leadership discusses our team\'s work, does my name come up? I want to make sure my contributions are visible." A good manager will start name-dropping you.'
      },
      {
        id: 'ms-3',
        question: 'Does my manager give me growth opportunities or just maintenance work?',
        redFlag: 'You\'re only assigned routine, low-visibility tasks while others get challenging, high-profile projects',
        greenFlag: 'Balanced mix of maintenance and stretch assignments with clear growth trajectory',
        tip: 'Ask for specific stretch assignments: "I\'d like to work on something more challenging this quarter. Is there a project where I could take on more ownership or learn a new skill?"'
      },
      {
        id: 'ms-4',
        question: 'Does my manager protect me from organizational politics?',
        redFlag: 'Your manager throws you under the bus, forwards angry emails to you without context, or uses you as a buffer',
        greenFlag: 'Your manager shields you from unnecessary political drama and handles escalations themselves',
        tip: 'Watch how your manager handles conflict: do they step in front of you or push you into the line of fire? If they expose you to political crossfire, build your own relationships with stakeholders as insurance.'
      }
    ]
  },

  // ──────────────────────────────────────────────
  // CATEGORY 6: Team Dynamics (weight: medium)
  // ──────────────────────────────────────────────
  {
    category: 'Team Dynamics',
    weight: 'medium',
    icon: '👥',
    description: 'Healthy teams have psychological safety — you can speak up, make mistakes, and disagree without fear. Unhealthy teams have hidden hierarchies and silent rules.',
    items: [
      {
        id: 'td-1',
        question: 'Is there psychological safety to speak up or disagree?',
        redFlag: 'People who disagree with the majority are punished, excluded, or labeled as "not a culture fit"',
        greenFlag: 'Dissent is welcomed, ideas are debated openly, and people feel safe raising concerns',
        tip: 'Test the waters with small disagreements first. If even minor pushback is met with resistance, be strategic about when and how you voice concerns.'
      },
      {
        id: 'td-2',
        question: 'Are there visible cliques or in-groups that control information?',
        redFlag: 'A small group makes decisions together and announces them to the rest of the team',
        greenFlag: 'Decision-making is inclusive, or at minimum, transparent and documented',
        tip: 'Don\'t try to break into cliques — build your own relationships. Schedule coffee chats with people across the team. Information flows through relationships.'
      },
      {
        id: 'td-3',
        question: 'How does the team handle mistakes?',
        redFlag: 'Mistakes lead to blame, public shaming, or being "managed out"',
        greenFlag: 'Blameless post-mortems focused on process improvement, not individual fault',
        tip: 'Watch how the team handles the FIRST mistake you make. If the response is supportive, that\'s a good sign. If it\'s punitive, start documenting everything.'
      },
      {
        id: 'td-4',
        question: 'Are social events inclusive or exclusionary?',
        redFlag: 'Social events (lunches, happy hours, activities) consistently exclude certain people or favor in-group members',
        greenFlag: 'Social events are open to all, and there\'s awareness of diverse preferences (non-drinkers, dietary needs)',
        tip: 'If you\'re being excluded from social events, don\'t force your way in. Instead, organize your own inclusive events: "I\'m organizing a team lunch — everyone\'s welcome!"'
      },
      {
        id: 'td-5',
        question: 'Is there diversity in leadership and decision-making roles?',
        redFlag: 'Leadership is homogeneous and people who don\'t "fit the mold" hit a glass ceiling',
        greenFlag: 'Diverse leadership with visible paths for people from different backgrounds to advance',
        tip: 'Look at who gets promoted. If no one who looks like you has been promoted, ask about it (carefully): "What does the path to [next level] look like? Can you share examples of people who\'ve successfully made that transition?"'
      }
    ]
  }
];
