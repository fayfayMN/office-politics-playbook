// ============================================================
// PlayBook — Office Politics Decoder: Scenario Simulator Data
// 5 interactive branching scenarios
// ============================================================
window.PlaybookData = window.PlaybookData || {};

window.PlaybookData.scenarios = [

  // ──────────────────────────────────────────────
  // SCENARIO 1: The Stolen Idea
  // ──────────────────────────────────────────────
  {
    id: 'idea-stolen',
    title: 'The Stolen Idea',
    category: 'credit-authorship',
    difficulty: 'medium',
    description: 'You shared an innovative idea during a team brainstorm last Tuesday. Today, in a leadership meeting with the VP present, your colleague Alex presents that same idea as their own — complete with a polished slide deck and implementation timeline.',
    context: 'You are a software engineer, 6 months into the role. Alex has been at the company for 3 years and has a strong relationship with the director. There are 12 people in the meeting, including two VPs. You have the original Slack messages where you shared the idea, timestamped.',
    choices: [
      {
        id: 'confront-publicly',
        text: 'Speak up in the meeting: "Actually, I proposed this concept in our brainstorm last Tuesday. I\'m glad it\'s moving forward."',
        signal: 'Signals assertiveness and ownership — but can look confrontational and create awkwardness in front of leadership.',
        escalationPath: 'Alex may deny it, say "we discussed it together," or become defensive. Leadership feels uncomfortable. The meeting\'s focus shifts from the idea to the conflict. Even if you\'re right, you may be perceived as the person who caused drama.',
        isRecommended: false,
        feedback: 'Public confrontation rarely works — even when you\'re 100% right. In American corporate culture, the audience remembers the awkwardness more than the justice. You might win the battle but lose political capital. Exception: if you have a pattern of being sidelined and need to establish yourself, a calm, brief claim ("I\'m glad to see the concept from our Tuesday brainstorm getting traction") can work — but only once.'
      },
      {
        id: 'say-nothing',
        text: 'Stay silent and let it go — one idea isn\'t worth the conflict.',
        signal: 'Signals passivity and sets a precedent that your contributions can be taken without consequence.',
        escalationPath: 'This will happen again. And again. Your ideas become Alex\'s talking points. Over time, leadership sees Alex as the innovator and you as someone who "does good work but doesn\'t show initiative." Your promotion case weakens while Alex\'s strengthens — built on your intellectual output.',
        isRecommended: false,
        feedback: 'Silence is interpreted as consent in American workplace culture. Every time you let credit theft go unchallenged, you train your environment to expect it. This isn\'t about one idea — it\'s about establishing a pattern. Once you\'re seen as someone who doesn\'t advocate for yourself, the exploitation accelerates.'
      },
      {
        id: 'follow-up-email',
        text: 'After the meeting, send a professional email: "Great to see the brainstorm idea moving forward! I\'d love to stay involved since I originated the concept — here\'s the original Slack thread from Tuesday."',
        signal: 'Signals professionalism, creates a documented paper trail, claims ownership without confrontation, and positions you as collaborative rather than combative.',
        escalationPath: 'Alex now knows you\'re tracking attribution. Your manager (CC\'d) has documentation of your contribution. Leadership sees you as a professional who follows up thoughtfully. Future credit theft becomes much harder because there\'s a precedent of you documenting your ideas.',
        isRecommended: true,
        feedback: 'The pro move: document, claim, and redirect — all without drama. CC your manager and the meeting organizer. Attach the timestamped evidence (Slack screenshot, original notes). Frame it as collaboration, not accusation: "I\'m excited to continue developing this." You\'ve now created a paper trail that makes future theft much harder, without burning any bridges.'
      },
      {
        id: 'talk-to-manager',
        text: 'Go to your manager privately: "I wanted to flag that the idea Alex presented today was one I shared in our brainstorm last week."',
        signal: 'Signals trust in the reporting chain, but without documentation it\'s your word against Alex\'s.',
        escalationPath: 'Your manager may or may not act on it. Without a paper trail (email, timestamps, witnesses), managers often can\'t or won\'t intervene — it becomes "he said, she said." But you\'ve planted awareness. If it happens again, your manager has context.',
        isRecommended: false,
        feedback: 'Better than silence, but insufficient on its own. Managers are busy and may not act on verbal complaints without evidence. Always bring documentation: "Here\'s the Slack thread from Tuesday where I proposed this." Verbal complaints are forgotten; written evidence is permanent. Combine this approach with the email follow-up for maximum effect.'
      }
    ]
  },

  // ──────────────────────────────────────────────
  // SCENARIO 2: The Scope Creep
  // ──────────────────────────────────────────────
  {
    id: 'scope-creep',
    title: 'The Scope Creep',
    category: 'ambiguity',
    difficulty: 'medium',
    description: 'Your colleague Jordan keeps asking you to help with tasks that are clearly their responsibility — "Can you just update this spreadsheet?" "Could you take notes in this meeting?" "Would you mind reviewing this before I send it?" Each request seems small, but you\'ve realized you\'re now spending 8-10 hours per week doing Jordan\'s work on top of your own.',
    context: 'You and Jordan are at the same level. Your manager has noticed you\'re falling behind on your own deliverables but doesn\'t know why. Jordan is well-liked by the team and frames every request as "helping the team." Saying no feels like being a bad team player.',
    choices: [
      {
        id: 'keep-helping',
        text: 'Continue helping — being a team player is important, and these tasks don\'t take that long individually.',
        signal: 'Signals agreeableness but also vulnerability. You\'re training Jordan (and the team) that you\'ll absorb extra work without pushback.',
        escalationPath: 'The requests will increase. Your own performance reviews will suffer because you\'re behind on YOUR deliverables. Meanwhile, Jordan\'s performance looks great — because you\'re doing part of their job. If your manager notices you\'re behind, you get blamed, not Jordan.',
        isRecommended: false,
        feedback: 'This is the "helpful workhorse" trap, and non-native speakers fall into it disproportionately — partly because saying no feels culturally rude, and partly because being helpful feels like the safest way to build goodwill. But in American workplaces, being a pushover doesn\'t earn respect; it earns more requests. Your performance is measured on YOUR deliverables, not on how much you helped Jordan.'
      },
      {
        id: 'refuse-bluntly',
        text: 'Tell Jordan directly: "These are your tasks, not mine. I can\'t keep doing your work."',
        signal: 'Signals strong boundaries but can come across as harsh, uncooperative, and politically risky — especially if Jordan is well-liked.',
        escalationPath: 'Jordan may tell others you\'re "not a team player" or "difficult to work with." The social cost can be high. Your reputation may take a hit even though you\'re right.',
        isRecommended: false,
        feedback: 'Direct refusal without framing is risky in American corporate culture. Even when you\'re completely right, HOW you say it matters as much as WHAT you say. A blunt refusal gives Jordan ammunition to paint you as uncooperative. The content of your message is correct; the delivery needs work.'
      },
      {
        id: 'redirect-with-bandwidth',
        text: 'Respond to the next request: "I\'d like to help, but I\'m at capacity with [specific project]. Can you check with [manager] about priorities? I want to make sure I\'m focusing on the right things."',
        signal: 'Signals professionalism, creates accountability without confrontation, and redirects the decision to management — where it belongs.',
        escalationPath: 'Jordan now has to justify the request through proper channels. Your manager becomes aware of the workload dynamic. If Jordan keeps asking, you have a pattern of documented redirections. The behavior typically stops because it\'s no longer easy.',
        isRecommended: true,
        feedback: 'The pro move: redirect to process, not personality. By mentioning capacity and your own projects, you\'re not saying "no" — you\'re saying "not without manager approval." This forces Jordan to either ask the manager (exposing the delegation pattern) or stop asking you (solving the problem). Either way, you win. Bonus: email your manager: "Jordan asked me to handle X. I want to confirm my priorities are still A, B, C."'
      },
      {
        id: 'talk-to-manager-first',
        text: 'Go to your manager: "I want to flag that I\'ve been spending significant time on tasks outside my role, which is affecting my core deliverables."',
        signal: 'Signals awareness and initiative, but framing matters — don\'t name Jordan directly or it looks like tattling.',
        escalationPath: 'Your manager may redistribute workload or clarify role boundaries. They may also ask you to "work it out yourself" — which puts you back at square one. But you\'ve planted awareness that your bandwidth isn\'t infinite.',
        isRecommended: false,
        feedback: 'This is a solid supporting move but not sufficient on its own. Frame it around YOUR workload, not Jordan\'s behavior: "I want to make sure I\'m prioritizing correctly — I\'ve been pulled into some adjacent tasks and I want to confirm my core focus." Let the manager connect the dots. Then combine this with the redirect technique for future requests.'
      }
    ]
  },

  // ──────────────────────────────────────────────
  // SCENARIO 3: The Blame Game
  // ──────────────────────────────────────────────
  {
    id: 'blame-game',
    title: 'The Blame Game',
    category: 'communication',
    difficulty: 'hard',
    description: 'A project launch went poorly — the feature had bugs that affected 500 customers. In the post-mortem meeting, your team lead Sam says: "The QA process was supposed to catch this. [Your name] was responsible for the test plan." In reality, Sam changed the requirements 3 days before launch without updating the test criteria, and you weren\'t informed of the changes.',
    context: 'Sam is your team lead (one level above you). The engineering director and product manager are in the post-mortem. You have Slack messages showing the last-minute requirement changes, but Sam\'s statement was made confidently and the room seems to accept it. You feel blindsided.',
    choices: [
      {
        id: 'defend-immediately',
        text: 'Immediately respond: "That\'s not accurate. The requirements were changed three days before launch and I wasn\'t notified. I have the Slack messages to prove it."',
        signal: 'Signals defensiveness. Even though you\'re right, immediately contradicting your team lead in front of senior leadership creates tension.',
        escalationPath: 'Sam may double down or claim the changes were communicated. The room becomes uncomfortable. The director may see this as finger-pointing rather than problem-solving. You look reactive rather than composed.',
        isRecommended: false,
        feedback: 'Being right doesn\'t mean you should respond immediately with emotion. In American post-mortem culture, blame is less important than solutions. A defensive reaction — even a factually correct one — can make you look like you\'re more concerned with self-preservation than fixing the problem. The director is watching HOW you handle pressure, not just WHAT happened.'
      },
      {
        id: 'accept-blame',
        text: 'Accept responsibility: "You\'re right, the test plan should have been more comprehensive. I\'ll make sure we have better coverage next time."',
        signal: 'Signals extreme passivity and accepts blame you don\'t deserve. Creates a false record that you were at fault.',
        escalationPath: 'This becomes the official narrative. In your performance review, "failed to catch critical bugs before launch" may appear. Sam faces no accountability for the requirement changes. You\'ve set a precedent as someone who absorbs blame.',
        isRecommended: false,
        feedback: 'Never accept blame for something that wasn\'t your fault. In American workplaces, accepting responsibility for someone else\'s mistake doesn\'t make you look noble — it makes you the scapegoat. Once blame is documented (and post-mortems often are), it follows you to performance reviews and promotion discussions.'
      },
      {
        id: 'redirect-to-process',
        text: '"That\'s an important point. I want to make sure we get the full picture — can we walk through the timeline of the requirement changes and the test plan updates? I want us to identify the process gap so we can fix it."',
        signal: 'Signals composure, solution-orientation, and redirects attention to PROCESS without directly contradicting Sam. The timeline will reveal the truth organically.',
        escalationPath: 'Walking through the timeline naturally reveals that requirements changed 3 days before launch. The director sees YOU as the person seeking solutions while Sam was finger-pointing. Your reputation is enhanced, not damaged.',
        isRecommended: true,
        feedback: 'The pro move: redirect to process and timeline. By asking to "walk through the timeline," you\'re not defending yourself — you\'re helping the team. The facts will speak for themselves when the timeline reveals the last-minute changes. The director will notice that YOU were solution-oriented while Sam was blame-oriented. After the meeting, send a follow-up email with the complete timeline documented. This creates a permanent record.'
      },
      {
        id: 'follow-up-after',
        text: 'Stay quiet in the meeting, then send a follow-up email to the director with the full timeline and Slack evidence.',
        signal: 'Signals composure in the moment but risks the blame narrative becoming "official" if the follow-up comes too late.',
        escalationPath: 'The director may have already formed their opinion based on the meeting. Your email may look like after-the-fact excuse-making. However, it does create a written record.',
        isRecommended: false,
        feedback: 'Staying completely silent while being publicly blamed is dangerous. The room will assume you accept the narrative. A follow-up email is necessary, but it works best as a supplement to speaking up in the meeting — not as a replacement. Combine: speak up calmly in the meeting (redirect to timeline), then send the follow-up email with documentation.'
      }
    ]
  },

  // ──────────────────────────────────────────────
  // SCENARIO 4: The Exclusion
  // ──────────────────────────────────────────────
  {
    id: 'exclusion',
    title: 'The Exclusion',
    category: 'control',
    difficulty: 'hard',
    description: 'You discover that key decisions about YOUR project are being made in meetings you\'re not invited to. Your manager and two senior colleagues have been having weekly "alignment" meetings where they discuss project direction, stakeholder feedback, and resource allocation — all for the project you\'re the tech lead on. You found out from a calendar invite that was accidentally forwarded to you.',
    context: 'You\'ve been the tech lead on this project for 4 months. The project is going well technically. The meetings have been happening for 3 weeks. The attendees are your manager, a senior architect, and a product lead. None of them have mentioned these meetings to you.',
    choices: [
      {
        id: 'demand-inclusion',
        text: 'Go to your manager: "I found out there are weekly meetings about my project that I\'m not invited to. As the tech lead, I should be in those meetings."',
        signal: 'Signals directness but can come across as confrontational. The focus on "I should be" centers on your ego rather than the project\'s needs.',
        escalationPath: 'Your manager may get defensive ("we were just doing high-level alignment") or acknowledge the oversight. Either way, you\'ve revealed that you found out through unofficial channels, which may make them more careful about information — not more inclusive.',
        isRecommended: false,
        feedback: 'The instinct is right but the framing is wrong. "I should be in those meetings" centers the conversation on your status, not the project\'s success. Managers often exclude ICs from "alignment" meetings because they see them as management-level. The question isn\'t whether you should be there — it\'s whether the project benefits from your presence.'
      },
      {
        id: 'ignore-it',
        text: 'Don\'t say anything — maybe there\'s a good reason you\'re not included and raising it could make things worse.',
        signal: 'Signals passivity and acceptance of being marginalized. Decisions will continue to be made without your input.',
        escalationPath: 'You\'ll receive decisions as directives without context. Your technical judgment gets bypassed. Over time, your role shifts from "tech lead" to "tech executor" — you implement decisions made by others. Your growth trajectory narrows.',
        isRecommended: false,
        feedback: 'Being excluded from decisions about your own project is a serious red flag. Ignoring it doesn\'t make it go away — it accelerates the pattern. In American corporate culture, the people in the room are the ones with influence. If you\'re not in the room, you\'re being positioned as an implementer, not a decision-maker.'
      },
      {
        id: 'ask-for-context',
        text: '"I want to make sure I\'m aligned with the project direction. I\'ve noticed some decisions coming through that I don\'t have context on — could I join the weekly sync, or would it help if I sent a brief status update beforehand?"',
        signal: 'Signals professionalism and solution-orientation. You\'re not accusing anyone of excluding you — you\'re offering to help with alignment.',
        escalationPath: 'Your manager may invite you to future meetings or establish a communication bridge. By offering alternatives (join the meeting OR send updates), you give them a face-saving option. Either way, the information gap closes.',
        isRecommended: true,
        feedback: 'The pro move: frame the request around the project\'s needs, not your ego. "I want to be aligned" and "I want to make sure we\'re on the same page" are collaborative frames. Offering to send a status update gives them an alternative if they truly don\'t want you in the meeting — but it also makes your contribution visible. If they accept the update option, make those updates EXCELLENT and include questions that require them to loop you in.'
      },
      {
        id: 'build-parallel-channel',
        text: 'Start scheduling your own 1-on-1s with each attendee to get the information you need, without addressing the exclusion directly.',
        signal: 'Signals political savvy but is indirect. You get the information but don\'t address the structural problem.',
        escalationPath: 'You stay informed through back-channels, but you\'re spending extra time doing it. The exclusion pattern isn\'t addressed. However, you build individual relationships with each stakeholder.',
        isRecommended: false,
        feedback: 'This is a viable short-term tactic but not a long-term solution. Getting information through 1-on-1s is smart — but it doesn\'t address why you\'re being excluded. Use this alongside the direct ask to cover both bases: address the exclusion professionally AND build individual relationships as insurance.'
      }
    ]
  },

  // ──────────────────────────────────────────────
  // SCENARIO 5: The Overwork Trap
  // ──────────────────────────────────────────────
  {
    id: 'overwork-trap',
    title: 'The Overwork Trap',
    category: 'status-sympathy',
    difficulty: 'easy',
    description: 'Your manager keeps praising you effusively — "You\'re the backbone of this team!" "I don\'t know what we\'d do without you!" — while steadily increasing your workload. You\'re now working 55-60 hours per week. When you mentioned feeling overwhelmed, your manager said: "I hear you, and I appreciate your dedication. We\'re almost through this crunch. You\'re doing amazing work."',
    context: 'You\'ve been at the company for 1 year. The "crunch" has been going on for 4 months. Your manager recently hired a new team member but assigned them to a different project. Two teammates left in the past 6 months and weren\'t replaced. You\'re doing the work of 2.5 people.',
    choices: [
      {
        id: 'keep-going',
        text: 'Keep going — the manager clearly values you, and the crunch will end eventually.',
        signal: 'Signals loyalty and work ethic, but also signals that you\'ll accept unsustainable conditions indefinitely.',
        escalationPath: 'The crunch won\'t end. "Almost through" is always 2-3 months away. Your health deteriorates. You burn out. When you eventually break down or leave, you\'ll be replaced and the manager will say "it\'s unfortunate, they were great." The machine doesn\'t stop.',
        isRecommended: false,
        feedback: 'The praise IS the trap. "You\'re the backbone" means "you\'re the cheapest solution to our understaffing problem." The 4-month crunch is not a crunch — it\'s the new normal that nobody has acknowledged. American managers often use verbal praise as a substitute for structural solutions (hiring, redistribution, reduced scope). Track whether praise ever converts to tangible outcomes: raises, promotions, reduced hours. If it doesn\'t, it\'s verbal currency with no real value.'
      },
      {
        id: 'threaten-to-quit',
        text: '"If the workload doesn\'t change, I\'ll have to consider other options."',
        signal: 'Signals ultimatum, which is high-risk. You may be seen as disloyal or difficult. If you\'re not prepared to actually leave, the bluff can backfire.',
        escalationPath: 'Your manager may panic and make promises (which may not be kept), or they may begin quietly planning for your replacement. Ultimatums in American workplaces are treated as irreversible — once you\'ve said it, the relationship changes.',
        isRecommended: false,
        feedback: 'Never threaten to quit unless you genuinely have another offer or are prepared to leave. In American corporate culture, threats are remembered and held against you. Even if your manager gives in, you\'re now "a flight risk" and may be deprioritized for promotions or key projects. If you want to leave, start job searching — but don\'t use it as a negotiating tactic.'
      },
      {
        id: 'present-data',
        text: '"I want to set us up for sustainable success. I\'ve mapped out my current workload — I\'m carrying responsibilities for 2.5 roles. Can we prioritize together? Here\'s what I recommend we defer, delegate, or drop."',
        signal: 'Signals professionalism, solution-orientation, and data-driven communication. You\'re not complaining — you\'re presenting a business case.',
        escalationPath: 'Your manager now has to engage with specific facts, not vague reassurance. They can\'t say "I hear you" to a spreadsheet showing 60 hours of work assigned to a 40-hour position. The conversation shifts from emotional to operational.',
        isRecommended: true,
        feedback: 'The pro move: replace emotion with data. Document every task, estimate hours, and show the gap between capacity and demand. Managers can dismiss feelings ("I hear you") but they can\'t dismiss a spreadsheet. Frame it as a business problem, not a personal complaint: "I want to deliver quality work, and at this volume, quality is at risk. Let\'s prioritize." Send the workload analysis in an email after the conversation — paper trail is protection.'
      },
      {
        id: 'just-say-no',
        text: 'Start declining new requests: "I don\'t have bandwidth for that. Can you assign it to someone else?"',
        signal: 'Signals boundary-setting, but without context or a transition plan, it can look sudden and uncooperative.',
        escalationPath: 'Your manager may respect the boundary or be caught off guard. If you\'ve never said no before, a sudden shift can feel jarring to them. They may question your commitment or see you as "checking out."',
        isRecommended: false,
        feedback: 'The instinct is right — you DO need to say no. But a sudden change without explanation or data creates confusion. Start with the data-driven conversation, get alignment on priorities, and THEN declining becomes easier because you can reference the agreed-upon priority list: "As we discussed, my focus this sprint is X and Y. Should Z replace one of those?"'
      }
    ]
  }
];
