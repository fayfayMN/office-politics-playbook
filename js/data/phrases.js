// ============================================================
// PlayBook — Office Politics Decoder: Lost in Translation Phrases
// 30 corporate phrases that mean something different than they seem
// ============================================================
window.PlaybookData = window.PlaybookData || {};

window.PlaybookData.phrases = [

  // ──────────────────────────────────────────────
  // CATEGORY: Deflection
  // ──────────────────────────────────────────────
  {
    id: 'lets-circle-back',
    phrase: "Let's circle back on this",
    literalMeaning: "Let's return to discuss this topic later",
    actualMeaning: "I'm shelving this. I don't want to deal with it now — and possibly never.",
    whyItMatters: "Non-native speakers often keep waiting for the follow-up that never comes. You may spend weeks expecting a response.",
    example: "In a meeting, your proposal gets 'let's circle back.' Don't wait passively. Follow up in writing within 24 hours: 'Following up on our discussion — when would be a good time to revisit?'",
    category: 'deflection'
  },
  {
    id: 'lets-take-offline',
    phrase: "Let's take this offline",
    literalMeaning: "Let's discuss this outside of this meeting",
    actualMeaning: "Stop talking about this right now. You're either going too deep, creating conflict, or raising something I don't want others to hear.",
    whyItMatters: "You might think it's a scheduling suggestion. It's actually a shut-down signal. The 'offline' conversation often never happens.",
    example: "You raise a concern about project timeline in a team meeting. Manager says 'let's take this offline.' Translation: you've made someone uncomfortable. Follow up privately within 24 hours.",
    category: 'deflection'
  },
  {
    id: 'put-a-pin-in-it',
    phrase: "Let's put a pin in that",
    literalMeaning: "Let's mark this to come back to later",
    actualMeaning: "This idea is probably dead, but I'm not going to say that directly. Moving on.",
    whyItMatters: "Similar to 'circle back' but even less likely to be revisited. The 'pin' is permanent — your idea has been pinned to the graveyard board.",
    example: "You suggest a new approach in a brainstorm. Lead says 'let's put a pin in that.' If you care about the idea, send a follow-up email with a one-page proposal. Force visibility.",
    category: 'deflection'
  },
  {
    id: 'parking-lot',
    phrase: "Let's add that to the parking lot",
    literalMeaning: "We'll save this topic for later in the meeting or a future discussion",
    actualMeaning: "Your topic isn't a priority right now. It may or may not be addressed — usually not.",
    whyItMatters: "The 'parking lot' is where ideas go to die in American meetings. Items rarely get pulled back from it. If your idea ends up there, you need to actively champion it afterward.",
    example: "Your question gets 'parking lotted' during a sprint planning. After the meeting, email the facilitator: 'I'd like to make sure my parking lot item gets addressed. When can we discuss?'",
    category: 'deflection'
  },

  // ──────────────────────────────────────────────
  // CATEGORY: Disagreement
  // ──────────────────────────────────────────────
  {
    id: 'thats-interesting',
    phrase: "That's interesting",
    literalMeaning: "That's fascinating, tell me more",
    actualMeaning: "I disagree but I'm not going to say so directly. I may think this is a bad idea.",
    whyItMatters: "In many cultures, 'interesting' is genuine praise. In American corporate-speak, it's often a polite way to dismiss without confrontation.",
    example: "You present a design and the VP says 'that's interesting.' Watch their body language and follow-up actions. If they change the subject or don't ask questions, they probably disagree.",
    category: 'disagreement'
  },
  {
    id: 'thats-one-approach',
    phrase: "That's one approach",
    literalMeaning: "That's a valid method among many options",
    actualMeaning: "That's a bad approach. I have a different (better) one in mind.",
    whyItMatters: "This sounds neutral but is actually negative. The emphasis on 'one' implies there are better options. You're being politely told your approach is wrong.",
    example: "You describe your implementation plan. Senior engineer says 'that's one approach.' Ask directly: 'What approach would you recommend?' They're waiting for you to ask.",
    category: 'disagreement'
  },
  {
    id: 'let-me-push-back',
    phrase: "Let me push back a little",
    literalMeaning: "I have a small objection",
    actualMeaning: "I strongly disagree and I'm about to explain why you're wrong — but I want to sound collaborative about it.",
    whyItMatters: "The word 'little' is a softener. The pushback is not little. Prepare for significant disagreement.",
    example: "In a design review, someone says 'let me push back a little on that architecture choice.' They're about to fundamentally challenge your approach. Listen carefully and don't get defensive.",
    category: 'disagreement'
  },
  {
    id: 'with-all-due-respect',
    phrase: "With all due respect...",
    literalMeaning: "I respect you and what follows is said with that respect",
    actualMeaning: "I'm about to disagree strongly or say something critical. The 'respect' prefix is armor.",
    whyItMatters: "This is a universally recognized warning signal. Whatever follows 'with all due respect' is usually neither respectful nor agreeable.",
    example: "'With all due respect, I think we need to reconsider the timeline.' Translation: 'Your timeline is unrealistic and I'm frustrated about it.'",
    category: 'disagreement'
  },
  {
    id: 'i-hear-you',
    phrase: "I hear you",
    literalMeaning: "I understand what you're saying",
    actualMeaning: "I understand, but I'm not going to do anything about it. I've acknowledged your point — now I'm moving on.",
    whyItMatters: "Non-native speakers may think acknowledgment means agreement or action. 'I hear you' is often the end of the conversation, not the beginning of change.",
    example: "You express concern about workload. Manager says 'I hear you.' If nothing changes in the next week, the concern was received but filed away. Follow up in writing.",
    category: 'disagreement'
  },

  // ──────────────────────────────────────────────
  // CATEGORY: Criticism
  // ──────────────────────────────────────────────
  {
    id: 'going-forward',
    phrase: "Going forward...",
    literalMeaning: "From this point on, let's do this",
    actualMeaning: "You messed up. I'm not going to dwell on the mistake, but I need you to stop doing it. This is a correction disguised as future planning.",
    whyItMatters: "You may miss that you're being corrected. 'Going forward' is often used after a mistake to redirect without explicitly calling out the error.",
    example: "'Going forward, let's make sure all client communications go through me first.' Translation: 'You sent something to the client that you shouldn't have.'",
    category: 'criticism'
  },
  {
    id: 'per-my-last-email',
    phrase: "Per my last email...",
    literalMeaning: "As I mentioned in my previous email",
    actualMeaning: "I already told you this and you didn't read it or forgot. I'm irritated.",
    whyItMatters: "This is passive-aggressive in American work culture. If someone uses this phrase with you, they're annoyed. If you see it directed at you, re-read the original email carefully.",
    example: "'Per my last email, the deadline is Friday.' Translation: 'I already communicated this. Pay attention.'",
    category: 'criticism'
  },
  {
    id: 'just-to-clarify',
    phrase: "Just to clarify...",
    literalMeaning: "I want to make sure we understand each other",
    actualMeaning: "You're wrong and I'm correcting you, but I'm framing it as a mutual misunderstanding.",
    whyItMatters: "The word 'just' is a minimizer. The clarification isn't minor — it's a correction. Pay attention to what follows.",
    example: "'Just to clarify, the API endpoint should return JSON, not XML.' Translation: 'You're doing it wrong. Fix it.'",
    category: 'criticism'
  },
  {
    id: 'appreciate-enthusiasm',
    phrase: "I appreciate your enthusiasm",
    literalMeaning: "I admire your energy and passion",
    actualMeaning: "You're being too much. Dial it back. You may be coming across as naive, aggressive, or overstepping.",
    whyItMatters: "In many cultures, enthusiasm is always positive. In American corporate settings, 'too much enthusiasm' can signal that you don't understand the political landscape or are stepping on toes.",
    example: "You volunteer for extra projects and propose big changes in your first month. Manager says 'I appreciate your enthusiasm, but let's focus on your core responsibilities first.' Translation: 'Slow down. You're overstepping.'",
    category: 'criticism'
  },
  {
    id: 'can-i-give-feedback',
    phrase: "Can I give you some feedback?",
    literalMeaning: "Would you like to hear my thoughts?",
    actualMeaning: "I'm about to criticize you. The question is rhetorical — I'm going to give the feedback regardless.",
    whyItMatters: "The framing as a question makes it seem optional, but saying 'no' is not socially acceptable. Prepare for criticism, not a compliment.",
    example: "'Can I give you some feedback on the presentation?' What follows will be negative. Respond: 'Of course, I'd love to improve.' Then listen without defending.",
    category: 'criticism'
  },
  {
    id: 'as-per-our-discussion',
    phrase: "As per our discussion...",
    literalMeaning: "Following up on what we talked about",
    actualMeaning: "I'm creating a paper trail. This email exists so there's a written record of what was agreed upon verbally.",
    whyItMatters: "When someone sends this, they're protecting themselves. It means the conversation was important enough to document. You should save this email and reply with any corrections.",
    example: "'As per our discussion today, you'll deliver the prototype by March 15.' If you don't agree with any detail, reply immediately. Silence = agreement in American business culture.",
    category: 'criticism'
  },

  // ──────────────────────────────────────────────
  // CATEGORY: Rejection
  // ──────────────────────────────────────────────
  {
    id: 'ill-think-about-it',
    phrase: "I'll think about it",
    literalMeaning: "I need time to consider your proposal",
    actualMeaning: "No. But I don't want to say no to your face right now.",
    whyItMatters: "Non-native speakers may genuinely wait for the thinking process to conclude. In many cases, 'I'll think about it' is the final answer — and the answer is no.",
    example: "You ask for a raise and your manager says 'I'll think about it.' If you don't hear back in one week, it's a no. Follow up: 'Have you had a chance to think about our conversation regarding compensation?'",
    category: 'rejection'
  },
  {
    id: 'not-the-right-time',
    phrase: "It's not the right time for that",
    literalMeaning: "The timing isn't ideal; let's wait for a better moment",
    actualMeaning: "No, and there may never be a 'right time.' I'm using timing as an excuse to avoid the topic.",
    whyItMatters: "There's no clear signal for when the 'right time' arrives. If you hear this, ask: 'When would be the right time? Can we put it on the calendar?'",
    example: "You propose a new initiative. Director says 'it's not the right time.' Pin them down: 'I understand. What conditions would make the timing right? I'd like to revisit in Q2.'",
    category: 'rejection'
  },
  {
    id: 'lets-be-strategic',
    phrase: "Let's be strategic about this",
    literalMeaning: "Let's think carefully about our approach",
    actualMeaning: "Let's do it my way. Your approach is too direct/simple/naive, and I want to redirect without saying that.",
    whyItMatters: "'Strategic' sounds collaborative but often means 'I'm taking control of the direction.' The person saying this usually already has a plan in mind.",
    example: "'Let's be strategic about how we roll this out.' Ask: 'What strategy do you have in mind?' Force them to share their actual plan instead of vaguely overriding yours.",
    category: 'rejection'
  },

  // ──────────────────────────────────────────────
  // CATEGORY: Praise (that isn't really praise)
  // ──────────────────────────────────────────────
  {
    id: 'happy-to-help',
    phrase: "Happy to help!",
    literalMeaning: "I genuinely enjoy assisting you",
    actualMeaning: "This is a social obligation, not genuine joy. I'm helping because it's expected, and I may be tracking this favor.",
    whyItMatters: "Don't mistake this for friendship. 'Happy to help' is a professional courtesy. Don't over-rely on the person or assume they'll always be available.",
    example: "A colleague helps you with a deployment and says 'happy to help!' Don't ask them for help every week. Return the favor when you can — that's the unspoken contract.",
    category: 'praise'
  },
  {
    id: 'great-question',
    phrase: "That's a great question",
    literalMeaning: "Excellent inquiry, very insightful",
    actualMeaning: "I need a moment to think because I don't have a good answer. It may also mean 'everyone else is wondering too' or 'I'm stalling.'",
    whyItMatters: "Sometimes this is genuine, but often it's a filler while the person formulates a response. Don't be flattered — listen to what follows.",
    example: "You ask 'why did we choose this vendor?' and get 'great question.' Watch whether the answer is direct or evasive. An evasive answer after 'great question' means they don't want to answer.",
    category: 'praise'
  },
  {
    id: 'youre-a-rockstar',
    phrase: "You're a rockstar!",
    literalMeaning: "You're exceptional at your job",
    actualMeaning: "Thanks for doing something hard/extra, but this praise probably won't translate into a raise, promotion, or reduced workload. It's verbal payment.",
    whyItMatters: "Non-native speakers may take this as a signal of upcoming promotion or reward. In reality, it's often given in place of tangible recognition. Track whether praise turns into concrete outcomes.",
    example: "You work a weekend to hit a deadline. Manager says 'you're a rockstar!' Smile, say thanks — then track it in your wins log. At review time, reference the specific work, not the compliment.",
    category: 'praise'
  },

  // ──────────────────────────────────────────────
  // CATEGORY: Urgency
  // ──────────────────────────────────────────────
  {
    id: 'when-you-get-a-chance',
    phrase: "When you get a chance...",
    literalMeaning: "Whenever it's convenient for you, no rush",
    actualMeaning: "Do this soon. It's not literally 'whenever' — there's an implicit deadline, usually today or tomorrow.",
    whyItMatters: "Non-native speakers may take this literally and wait days. In American work culture, 'when you get a chance' usually means 'within a few hours.'",
    example: "Manager says 'when you get a chance, can you review this doc?' Do it today. If you genuinely can't, reply: 'I can get to this by tomorrow morning — does that work?'",
    category: 'urgency'
  },
  {
    id: 'no-rush-but',
    phrase: "No rush, but...",
    literalMeaning: "Take your time, this isn't urgent",
    actualMeaning: "There IS a rush. I'm being polite about it, but I need this sooner rather than later.",
    whyItMatters: "The 'but' cancels the 'no rush.' Treat this with medium-high urgency. If you take too long, they'll follow up — and then it becomes urgent with added tension.",
    example: "'No rush, but could you send me the quarterly numbers?' Get them the numbers within 24 hours. Anything longer risks being perceived as slow or unresponsive.",
    category: 'urgency'
  },
  {
    id: 'end-of-day',
    phrase: "Can you get this to me by end of day?",
    literalMeaning: "Please complete this by 5:00 PM",
    actualMeaning: "This is urgent. I need it before I leave, which might be 4:00 PM. 'End of day' is often earlier than you think.",
    whyItMatters: "In some cultures, 'end of day' means midnight. In American workplaces, it usually means 4-5 PM local time. If the person is on the East Coast and you're on the West Coast, it's even tighter.",
    example: "If you get this request at 2 PM and can't deliver by 5 PM, say so immediately: 'I can have a draft by 5 PM and a final version by tomorrow 10 AM. Which works better?'",
    category: 'urgency'
  },

  // ──────────────────────────────────────────────
  // CATEGORY: Power
  // ──────────────────────────────────────────────
  {
    id: 'i-want-to-be-transparent',
    phrase: "I want to be transparent with you",
    literalMeaning: "I'm about to be honest and open",
    actualMeaning: "I'm about to deliver bad news or tell you something you won't like. The 'transparency' framing makes it seem virtuous.",
    whyItMatters: "This phrase is a warning bell. Whatever follows will be negative — a rejected proposal, a restructuring, a performance concern. Prepare yourself.",
    example: "'I want to be transparent — we're reorganizing the team.' Translation: changes are coming that will affect you, and this is the polite pre-announcement.",
    category: 'power'
  },
  {
    id: 'above-my-pay-grade',
    phrase: "That's above my pay grade",
    literalMeaning: "That's a decision for someone more senior than me",
    actualMeaning: "I don't want responsibility for this decision, OR I know the answer but I'm not authorized to tell you, OR I'm avoiding involvement.",
    whyItMatters: "This phrase deflects accountability. The person may actually know the answer but doesn't want to be the one to deliver it — especially if it's bad news.",
    example: "You ask about budget approval and hear 'that's above my pay grade.' Go to the person whose pay grade it IS. Don't wait for someone to volunteer the answer.",
    category: 'power'
  },
  {
    id: 'we-should-touch-base',
    phrase: "We should touch base",
    literalMeaning: "We should catch up and talk",
    actualMeaning: "I need to check on you, control the narrative, or deliver information that I want to frame carefully in a 1-on-1 setting.",
    whyItMatters: "'Touch base' from a manager often means they have concerns. From a peer, it might be genuine collaboration — or political positioning. Context matters.",
    example: "If your manager says 'let's touch base this week,' prepare for the conversation. Have your updates ready, anticipate questions, and don't be caught off guard.",
    category: 'power'
  },
  {
    id: 'we-need-to-align',
    phrase: "We need to align on this",
    literalMeaning: "We need to make sure we're on the same page",
    actualMeaning: "You're not doing what I want, and I need you to change direction. 'Align' means 'agree with my position.'",
    whyItMatters: "Non-native speakers may see 'align' as collaborative. In practice, the person calling for alignment usually has a fixed position and expects you to move toward it.",
    example: "'We need to align on the product roadmap.' Before the meeting, ask: 'What's your current thinking on the roadmap? I'd like to prepare.' This reveals their position before you walk into a 'negotiation.'",
    category: 'power'
  },
  {
    id: 'open-door-policy',
    phrase: "I have an open door policy",
    literalMeaning: "You can come talk to me anytime",
    actualMeaning: "This is often a symbolic statement. The door may be 'open' but using it frequently can signal that you're needy, can't handle things independently, or are a problem employee.",
    whyItMatters: "Non-native speakers may take this literally and visit their manager frequently. Use it sparingly and for truly important matters. Most communication should go through normal channels.",
    example: "Your VP says 'my door is always open.' Use it once or twice for genuinely important issues, not for routine questions. For routine matters, use email or your direct manager.",
    category: 'power'
  }
];
