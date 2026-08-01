
export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string[]
}

export const posts: Post[] = [
  {
    slug: 'why-i-build-in-public',
    title: 'Why I Build in Public (Even When It\'s Embarrassing)',
    date: '2026-07-15',
    excerpt: 'Shipping half-baked projects feels vulnerable. That\'s exactly why it works.',
    content: [
      'I used to hide my projects until they were "ready." They never were.',
      'The first version of Zubhai was a Notion page with a Stripe link. I didn\'t ship it because I was embarrassed. Then I realized: the people who judge a Notion-page MVP are not your users. They\'re spectators.',
      'Your users are the ones with the problem. They don\'t care about your stack. They care if you understand their pain.',
      'Building in public does three things:',
      '1. It forces clarity. If you can\'t explain what you\'re building in one tweet, you don\'t know yet.',
      '2. It attracts allies. Other builders reach out. "I had the same problem" is the start of every good partnership I\'ve had.',
      '3. It kills perfectionism. When 50 people have seen your ugly MVP, you stop pretending it needs to be beautiful before it can be useful.',
      'The voice assistant I built? I tweeted the latency problem before I fixed it. Someone from Twilio DMed me a config tweak that cut response time by 60%.',
      'You don\'t lose respect by showing work in progress. You lose respect by claiming expertise you haven\'t earned. Building in public is how you earn it.',
    ],
  },
  {
    slug: 'the-automation-trap',
    title: 'The Automation Trap',
    date: '2026-06-28',
    excerpt: 'Automating a broken process just makes failure faster. I learned this the expensive way.',
    content: [
      'I love n8n. I have 47 workflows running right now. But I\'ve learned a dangerous lesson: automation is a multiplier, not a fixer.',
      'When I built the first version of my outreach engine, I automated a terrible cold email template. The result? I sent 400 bad emails in 2 hours instead of 10 bad emails in 2 hours.',
      'The trap is this: automating feels like progress. It\'s not. It\'s acceleration.',
      'Now I have a rule: manual first, automate second. If I can\'t do it manually for a week and get results, I don\'t automate it. Because if the logic is broken, automation just breaks it at scale.',
      'This applies to life too. Don\'t build a Notion productivity system if you don\'t have a task worth tracking. Don\'t buy a CRM if you have no customers.',
      'Start messy. Start manual. Start slow. Then automate what works.',
    ],
  },
  {
    slug: 'studying-vs-building',
    title: 'Studying vs Building: The JEE Lie',
    date: '2026-05-10',
    excerpt: 'I spent a year studying 11 hours a day for an exam. Then I started building. One of these taught me how to think.',
    content: [
      'For a year I studied 11 hours a day. 6 hours coaching, 5 hours self-study. My friends who studied less scored higher. I was confused and angry.',
      'Then I started building things. Real things that real people used. And I realized: studying for exams and building products use completely different mental muscles.',
      'Exams reward recall. Building rewards reasoning.',
      'Exams have known answers. Building has unknown problems.',
      'Exams are solo. Building is social — you have to talk to users, argue with co-founders, persuade customers.',
      'I\'m not saying exams are useless. I\'m saying they\'re a specific kind of game. If you\'re bad at that game, it doesn\'t mean you\'re bad at thinking. It might mean you\'re built for a different game.',
      'The best builders I know were mediocre students. They were too impatient to memorize — they needed to manipulate.',
      'I still study. But I no longer let exam scores tell me what I\'m capable of. My users tell me that. And they\'re a harder, fairer judge.',
    ],
  },
]
