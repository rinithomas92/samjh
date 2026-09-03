import type { Scenario, Scores } from "@/types/game";

const s = (
  socialAwareness: number,
  boundaries: number,
  empathy: number,
  sarcasm: number,
  assertiveness: number,
  escalationRisk: number
): Scores => ({ socialAwareness, boundaries, empathy, sarcasm, assertiveness, escalationRisk });

const baseResponses = {
  gentle: {
    id: "gentle",
    scores: s(8, 7, 9, 2, 6, 1),
    feedback: "CALM SAMJH UNLOCKED 🧠",
    psychology: "You acknowledge the person without surrendering your boundary. That keeps the temperature low and the message clear."
  },
  savage: {
    id: "savage",
    scores: s(7, 9, 3, 10, 8, 7),
    feedback: "SAVAGE MODE ACTIVATED 🌶️",
    psychology: "A sharp line can protect you, but public sarcasm raises the chance of social consequences."
  },
  escape: {
    id: "escape",
    scores: s(5, 5, 5, 4, 2, 1),
    feedback: "INVISIBLE MODE ENABLED 🏃",
    psychology: "Avoidance prevents instant conflict, but the pattern can leave the actual issue unresolved."
  },
  please: {
    id: "please",
    scores: s(4, 1, 8, 1, 1, 1),
    feedback: "PEOPLE-PLEASER XP +1 😭",
    psychology: "Keeping everyone comfortable can cost you clarity. Social intelligence includes your comfort too."
  }
};

function responses(a: string, b: string, c: string, d: string) {
  return [
    { ...baseResponses.please, scores: { ...baseResponses.please.scores }, id: "a", text: a, emoji: "😭" },
    { ...baseResponses.savage, scores: { ...baseResponses.savage.scores }, id: "b", text: b, emoji: "💀" },
    { ...baseResponses.gentle, scores: { ...baseResponses.gentle.scores }, id: "c", text: c, emoji: "🧠" },
    { ...baseResponses.escape, scores: { ...baseResponses.escape.scores }, id: "d", text: d, emoji: "🏃" }
  ];
}

export const scenarios: Scenario[] = [
  {
    id: "cm-friday-call",
    characterId: "corporate-majdoor",
    category: "OFFICE MODE 💻",
    context: "Friday, 5:57 PM. Teams status: technically green, spiritually gone.",
    speaker: "Manager",
    situation: "Hi. Quick call?",
    question: "What would YOU do?",
    responses: responses("Sure, joining now.", "Only if the call comes with overtime and biryani.", "Can it wait till Monday? I can respond async if urgent.", "Laptop suddenly begins a 47-minute update.")
  },
  {
    id: "cm-deadline",
    characterId: "corporate-majdoor",
    category: "DEADLINE MODE 🗓️",
    speaker: "Manager",
    situation: "This should be done by EOD. It is only a small integration with six teams.",
    question: "Your move?",
    responses: responses("Yes, I will try somehow.", "Small? Then it can wait for small Monday.", "I can do a realistic estimate after dependency confirmation.", "Mute notifications and become a LinkedIn thought leader.")
  },
  {
    id: "cm-appraisal",
    characterId: "corporate-majdoor",
    category: "APPRAISAL MODE 📈",
    speaker: "Manager",
    situation: "You exceeded expectations, but budgets are tight. Take visibility instead.",
    question: "What would you say?",
    responses: responses("Thank you, visibility is also important.", "Amazing, I will pay rent with exposure coins.", "Can we document the compensation path and review date?", "Smile, update resume during lunch.")
  },
  {
    id: "cm-office-politics",
    characterId: "corporate-majdoor",
    category: "PANTRY MODE ☕",
    speaker: "Colleague",
    situation: "Between us, leadership thinks your project is messy.",
    question: "How do you respond?",
    responses: responses("Oh no, what should I do?", "Between us, leadership also thinks gossip has KPIs.", "Thanks for the heads-up. I will ask for concrete feedback directly.", "Say 'hmm' and leave to refill imaginary water.")
  },
  {
    id: "cm-jargon",
    characterId: "corporate-majdoor",
    category: "SYNERGY MODE 🧩",
    speaker: "Client",
    situation: "Can we leverage AI synergy to make this pop by tomorrow?",
    question: "Pick your reply.",
    responses: responses("Yes, sounds exciting.", "Sure, my keyboard has a magic button labelled synergy.", "Let's define the outcome first, then I can scope it.", "Pretend the meeting froze mid-smile.")
  },
  {
    id: "bb-button",
    characterId: "bossy-boss",
    category: "ONE BUTTON MODE 👔",
    speaker: "Boss",
    situation: "Why does changing this button take three days? Visually it is ONE button.",
    question: "Developer soul says?",
    responses: responses("Sorry, I will do it faster.", "Correct. Visually my salary is also one number.", "It touches six services, so I will map the risk and timeline.", "Open Figma and stare professionally.")
  },
  {
    id: "bb-urgent",
    characterId: "bossy-boss",
    category: "URGENT MODE 🚨",
    speaker: "Boss",
    situation: "Can you just push it live? QA can check later.",
    question: "Choose the least tragic path.",
    responses: responses("Okay, if you say so.", "Great, production is now our QA intern.", "I can ship after minimum checks or you can sign off on the risk.", "Lose internet exactly when deploy is mentioned.")
  },
  {
    id: "bb-ai",
    characterId: "bossy-boss",
    category: "AI MODE 🤖",
    speaker: "Boss",
    situation: "Can't ChatGPT write the whole feature by lunch?",
    question: "How do you answer?",
    responses: responses("Maybe, I can try.", "Yes, and it will also attend the standup for me.", "AI can accelerate parts, but we still need requirements, review, and testing.", "Say 'interesting' and create a folder called maybe-never.")
  },
  {
    id: "bb-scope",
    characterId: "bossy-boss",
    category: "SCOPE MODE 📌",
    speaker: "Boss",
    situation: "Just add login, wallet, referrals, dashboard, and dark mode. Same deadline.",
    question: "What would YOU do?",
    responses: responses("Okay, I will stretch.", "Perfect, shall I also add IPO by evening?", "We need to trade scope, timeline, or quality. Which one moves?", "Nod while quietly opening Jira.")
  },
  {
    id: "bb-demo",
    characterId: "bossy-boss",
    category: "DEMO MODE 🎤",
    speaker: "Boss",
    situation: "Can you demo the unfinished thing to investors in 10 minutes?",
    question: "Pick your strategy.",
    responses: responses("Sure, I will manage.", "Yes, suspense is a strong product strategy.", "I can demo stable flows and clearly label what's in progress.", "Become the person taking notes in the back.")
  },
  {
    id: "gz-ghost",
    characterId: "confused-gen-z",
    category: "DATING MODE 📱",
    speaker: "Situationship",
    situation: "Sorry, I disappeared for 12 days. Been busy. wyd?",
    question: "Reply?",
    responses: responses("No worries, I missed you.", "Welcome back from your emotional internship.", "I need consistency, not surprise attendance. What are you looking for?", "Leave them on seen and post a cryptic story.")
  },
  {
    id: "gz-career",
    characterId: "confused-gen-z",
    category: "CAREER MODE 🧭",
    speaker: "Friend",
    situation: "Everyone is doing AI, MBA, creator economy, or moving abroad. What are you doing?",
    question: "What is the socially intelligent response?",
    responses: responses("I am also panicking, maybe I should copy someone.", "Currently specializing in existential Excel.", "I am comparing options, but I am choosing based on fit, not fear.", "Open Instagram and make it worse.")
  },
  {
    id: "gz-texting",
    characterId: "confused-gen-z",
    category: "TEXTING MODE 💬",
    speaker: "Crush",
    situation: "They reply 'haha nice' after your carefully crafted paragraph.",
    question: "Your next move?",
    responses: responses("Send another paragraph explaining the paragraph.", "File an FIR for emotional minimalism.", "Match the energy and see if effort becomes mutual.", "Archive chat and become mysterious.")
  },
  {
    id: "gz-social-media",
    characterId: "confused-gen-z",
    category: "STORY MODE 📸",
    speaker: "Cousin",
    situation: "Why do you post so much? Family people are watching.",
    question: "What do you say?",
    responses: responses("Sorry, I will delete it.", "Good, finally my target audience found me.", "I keep it respectful, but my social media is my space.", "Make a close friends list named Witness Protection.")
  },
  {
    id: "gz-college",
    characterId: "confused-gen-z",
    category: "COLLEGE MODE 🎓",
    speaker: "Classmate",
    situation: "Bro, send assignment. I know we never talk, but urgent.",
    question: "Response?",
    responses: responses("Okay, take it.", "Amazing friendship subscription, activated before deadline.", "I can explain the approach, but I am not sending my full work.", "Say phone storage full and vanish.")
  },
  {
    id: "cu-values",
    characterId: "cheater-uncle",
    category: "VALUES MODE 🕶️",
    speaker: "Uncle",
    situation: "Today's generation has no loyalty. Anyway, don't tell aunty I was at that party.",
    question: "How do you handle the hypocrisy?",
    responses: responses("Yes uncle, I understand.", "Loyalty is apparently location-specific.", "I don't want to be involved in secrets that affect someone else.", "Laugh awkwardly and inspect the sofa pattern.")
  },
  {
    id: "cu-double",
    characterId: "cheater-uncle",
    category: "DOUBLE STANDARD MODE ⚖️",
    speaker: "Uncle",
    situation: "Girls should dress modestly. Men will be men.",
    question: "Pick a response.",
    responses: responses("Hmm, maybe.", "Wow, accountability took early retirement.", "Respect should apply to everyone. Behavior is a choice.", "Change the topic to cricket instantly.")
  },
  {
    id: "cu-whatsapp",
    characterId: "cheater-uncle",
    category: "WHATSAPP MODE 📲",
    speaker: "Uncle",
    situation: "He forwards a fake news message and says, 'Research karo beta.'",
    question: "Your move?",
    responses: responses("Forwarded, uncle.", "Research means not using WhatsApp University, shocking twist.", "This looks unreliable. I will share a verified source if you want.", "React with folded hands and mute for one year.")
  },
  {
    id: "cu-money",
    characterId: "cheater-uncle",
    category: "MONEY MODE 💸",
    speaker: "Uncle",
    situation: "He lectures you on savings, then asks to borrow money quietly.",
    question: "What do you say?",
    responses: responses("Sure, how much?", "Financial discipline has left the family group.", "I cannot lend right now, but I hope you sort it out.", "Pretend UPI is down nationwide.")
  },
  {
    id: "cu-image",
    characterId: "cheater-uncle",
    category: "IMAGE MODE 🎭",
    speaker: "Uncle",
    situation: "He says, 'Family reputation matters,' while asking you to hide his mess.",
    question: "Choose.",
    responses: responses("Okay, family comes first.", "Reputation seems to be doing unpaid overtime.", "I care about family, but I won't cover for harmful choices.", "Escape to help with plates.")
  },
  {
    id: "rge-pension",
    characterId: "retired-government-employee",
    category: "PENSION MODE 🏛️",
    speaker: "Retired uncle",
    situation: "Private job? No pension? Beta, what is this risky life?",
    question: "Your answer?",
    responses: responses("You're right, I made a mistake.", "My pension is anxiety with annual increments.", "Security matters, and I am building it differently through savings and skills.", "Smile and ask for more samosa.")
  },
  {
    id: "rge-startup",
    characterId: "retired-government-employee",
    category: "STARTUP MODE 🚀",
    speaker: "Retired uncle",
    situation: "Business? In our time people respected stable jobs.",
    question: "What do you say?",
    responses: responses("Maybe I should find a government job.", "In our time Wi-Fi also respected us sometimes.", "Stability is important; I am managing risk with a plan and runway.", "Say it is 'consulting' and move on.")
  },
  {
    id: "rge-youth",
    characterId: "retired-government-employee",
    category: "GENERATION MODE 🧓",
    speaker: "Retired uncle",
    situation: "Young people quit too easily. We stayed in one job for 35 years.",
    question: "Reply?",
    responses: responses("True, our generation is weak.", "We also stayed in one school uniform for 12 years, uncle.", "That loyalty worked then. Today growth and fit matter too.", "Nod at 0.75x speed.")
  },
  {
    id: "rge-property",
    characterId: "retired-government-employee",
    category: "PROPERTY MODE 🏠",
    speaker: "Retired uncle",
    situation: "Why rent? Buy flat. Loan builds character.",
    question: "Your move?",
    responses: responses("Yes, I should buy immediately.", "My character is already overqualified.", "I will buy when the math and life plan make sense.", "Point at traffic and say 'market is complex'.")
  },
  {
    id: "rge-office-time",
    characterId: "retired-government-employee",
    category: "TIME MODE ⏰",
    speaker: "Retired uncle",
    situation: "Work from home is not real work. Office means discipline.",
    question: "Respond.",
    responses: responses("Yes, I am probably lazy.", "Correct, my laptop only works after seeing a government stamp.", "Output matters more than location, but routine still matters to me.", "Open laptop very loudly.")
  },
  {
    id: "ga-body",
    characterId: "gym-aunty",
    category: "GYM MODE 🏋️‍♀️",
    speaker: "Gym aunty",
    situation: "Beta, tummy aa raha hai. I am only saying for your own good.",
    question: "What would YOU say?",
    responses: responses("Yes aunty, I know.", "Aunty, unsolicited feedback also burns calories?", "I am focusing on strength. Please don't comment on my body.", "Put headphones in with no music.")
  },
  {
    id: "ga-protein",
    characterId: "gym-aunty",
    category: "PROTEIN MODE 🥤",
    speaker: "Gym aunty",
    situation: "Protein powder? Kidney kharab ho jayega. Eat ten almonds.",
    question: "Choose.",
    responses: responses("Okay, I will stop.", "Ten almonds cannot deadlift my life, aunty.", "Thanks for caring. I am following evidence-based guidance.", "Hide shaker like contraband.")
  },
  {
    id: "ga-clothes",
    characterId: "gym-aunty",
    category: "OUTFIT MODE 👟",
    speaker: "Gym aunty",
    situation: "These clothes are too modern for gym. People notice.",
    question: "Reply?",
    responses: responses("Sorry, I will change.", "People also notice leg day skipping, but we survive.", "I wear what is comfortable for exercise. Let's keep comments off clothes.", "Become intensely interested in treadmill buttons.")
  },
  {
    id: "ga-marriage",
    characterId: "gym-aunty",
    category: "MARRIAGE MODE 💍",
    speaker: "Gym aunty",
    situation: "So much gym is fine, but marriage also needs attention beta.",
    question: "Your move?",
    responses: responses("Yes, I should think about it.", "Squats before rishtas, aunty.", "I will handle marriage decisions in my own time.", "Pretend trainer called you urgently.")
  },
  {
    id: "ga-trainer",
    characterId: "gym-aunty",
    category: "TRAINER MODE 📋",
    speaker: "Gym aunty",
    situation: "Your trainer is making you lift too much. Light weights are enough.",
    question: "What do you say?",
    responses: responses("Maybe I should reduce.", "My muscles and your opinions are both under tension.", "I appreciate concern, but my plan is supervised.", "Count reps in a language nobody asked for.")
  },
  {
    id: "ca-ambition",
    characterId: "competitive-aunty",
    category: "AMBITION MODE 👀",
    speaker: "Aunty",
    situation: "Promotion again? Nice. But why do you need to do so much?",
    question: "Pick your response.",
    responses: responses("Maybe I am overdoing it.", "I know, success is becoming very inconvenient.", "I enjoy growing, and I am pacing myself.", "Laugh and compliment her curtains.")
  },
  {
    id: "ca-marriage",
    characterId: "competitive-aunty",
    category: "RISHTA MODE 💌",
    speaker: "Aunty",
    situation: "Career is fine, but don't become too independent. Boys get scared.",
    question: "Reply?",
    responses: responses("Yes, I should be careful.", "Then boys need customer support, not a spouse.", "The right person won't be scared of my life.", "Find the nearest dessert table.")
  },
  {
    id: "ca-education",
    characterId: "competitive-aunty",
    category: "EDUCATION MODE 📚",
    speaker: "Aunty",
    situation: "Another course? Are you still not settled?",
    question: "Your move?",
    responses: responses("Maybe I am behind.", "Learning after 25, very illegal apparently.", "I like learning because my goals keep evolving.", "Say it was free and change the topic.")
  },
  {
    id: "ca-social",
    characterId: "competitive-aunty",
    category: "SOCIAL MEDIA MODE 📸",
    speaker: "Aunty",
    situation: "You travel so much. Saving also important, no?",
    question: "Choose.",
    responses: responses("You're right, I should stop.", "Yes aunty, joy has poor resale value.", "I budget for travel and savings. Both can exist.", "Post after she sleeps.")
  },
  {
    id: "ca-neighbour",
    characterId: "competitive-aunty",
    category: "NEIGHBOUR MODE 🏢",
    speaker: "Aunty",
    situation: "Our neighbour's son is already buying a house. You are still exploring?",
    question: "Respond.",
    responses: responses("I know, I am late.", "Please send his EMI also for inspiration.", "Good for him. I am choosing based on my timeline.", "Ask if she needs help finding parking.")
  },
  {
    id: "ir-salary",
    characterId: "indian-relative",
    category: "WEDDING MODE 💍",
    speaker: "Relative",
    situation: "Beta, salary kitni hai? Package toh achha hoga?",
    question: "What would YOU say?",
    responses: responses("Tell them your salary.", "Aunty, pehle aap property valuation batao.", "Enough to manage, but I keep exact numbers private.", "Smile and escape toward the biryani.")
  },
  {
    id: "ir-weight",
    characterId: "indian-relative",
    category: "FAMILY MODE 🍽️",
    speaker: "Relative",
    situation: "Thoda weight badh gaya? Happy life, haan?",
    question: "Reply?",
    responses: responses("Haha yes, I should reduce.", "Yes, and your audacity also gained muscle.", "I prefer not discussing bodies at lunch.", "Offer them gulab jamun and flee.")
  },
  {
    id: "ir-kids",
    characterId: "indian-relative",
    category: "TIMELINE MODE 👶",
    speaker: "Relative",
    situation: "Marriage done, now good news kab?",
    question: "What do you say?",
    responses: responses("Soon, hopefully.", "After your next intrusive question retires.", "That is private. We will share if and when we want to.", "Drop spoon and create diversion.")
  },
  {
    id: "ir-property",
    characterId: "indian-relative",
    category: "PROPERTY MODE 🏠",
    speaker: "Relative",
    situation: "Still renting? EMI is better than wasting money.",
    question: "Choose.",
    responses: responses("Yes, I should buy soon.", "Rent is temporary, but advice is forever.", "Buying has to fit my finances and plans.", "Say landlord is family friend and disappear.")
  },
  {
    id: "ir-wedding",
    characterId: "indian-relative",
    category: "WEDDING BUFFET MODE 🍛",
    speaker: "Relative",
    situation: "You came alone? No special friend?",
    question: "Your answer?",
    responses: responses("No, not yet.", "My special friend is the chaat counter.", "I will introduce someone when I am ready.", "Pretend the DJ needs you.")
  }
];

export function getScenariosByCharacter(characterId: string) {
  return scenarios.filter((scenario) => scenario.characterId === characterId);
}
