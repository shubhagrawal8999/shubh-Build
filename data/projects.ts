
export interface Project {
  slug: string
  name: string
  tagline: string
  status: 'live' | 'beta' | 'paused' | 'archived'
  category: string
  tags: string[]
  hero: {
    problem: string
    solution: string
  }
  features: string[]
  howItWorks: string
  architecture?: string
  layer2: {
    origin: string
    decisions: string[]
    failures: string[]
    retrospective: string
    currentState: string
    nextSteps: string
  }
  links: {
    live?: string
    github?: string
    demo?: string
  }
}

// ============================================================
// ADD A NEW PROJECT: Copy the template below, fill it in,
// and push it into this array. That's it.
// ============================================================

export const projects: Project[] = [
  {
    slug: 'zubhai',
    name: 'Zubhai',
    tagline: 'An AI-skills EdTech platform that teaches by doing, not watching.',
    status: 'beta',
    category: 'EdTech',
    tags: ['Next.js', 'OpenAI', 'Education'],
    hero: {
      problem: 'Most AI courses are passive video dumps. People finish them and still can\'t build.',
      solution: 'Zubhai is a hands-on workspace where you learn AI tools by actually automating real tasks with guided n8n and Make.com workflows.',
    },
    features: [
      'Interactive workflow builder with AI tutor',
      'Real-world project templates (CRM automation, content pipelines)',
      'Progress tracked by automations shipped, not videos watched',
      'Community workspace for sharing builds',
    ],
    howItWorks: 'Students pick a use case → get a pre-built workflow scaffold → modify it with AI guidance → deploy to their own stack → get reviewed by peers.',
    architecture: 'Next.js frontend + Node API + PostgreSQL. OpenAI for the tutor layer. n8n webhooks for live workflow execution.',
    layer2: {
      origin: 'I watched friends buy $500 AI courses and still struggle to build a simple Zapier flow. The gap between "I watched a video" and "I shipped something" is massive.',
      decisions: [
        'Chose n8n over Make.com for the free self-hosted tier — students in India need zero-cost entry.',
        'Built the tutor as a structured prompt chain rather than a chatbot. Chatbots wander; chains keep learners on track.',
        'Decided against video entirely. If you need a video, the product has failed.',
      ],
      failures: [
        'First version was just a Notion database + Loom videos. Zero retention. People bookmarked and left.',
        'Tried to build a custom workflow engine from scratch. Wasted 3 weeks. n8n exists.',
        'Initially targeted "AI enthusiasts" — too broad. Narrowed to "Indian freelancers who want to offer automation services."',
      ],
      retrospective: 'The hardest part was killing my own video content. I had recorded 20+ tutorials. Sunk cost is real. Once I deleted them and forced the product to teach through doing, engagement 3x\'d.',
      currentState: 'Beta with 40 active users. 12 have shipped their first client automation. No paid plans yet — validating that people actually get value before charging.',
      nextSteps: 'Add DeepSeek API support for cost-sensitive users. Build a "hire a Zubhai graduate" marketplace for freelancers.',
    },
    links: {
      live: 'https://zubhai.in',
    },
  },

  {
    slug: 'outreach-automation',
    name: 'Outreach Engine',
    tagline: 'Cold outreach that feels like a warm intro — automated at scale.',
    status: 'live',
    category: 'Automation',
    tags: ['n8n', 'Make.com', 'OpenAI', 'Sales'],
    hero: {
      problem: 'Cold emails are trash. Everyone knows it. But warm intros don\'t scale.',
      solution: 'A system that researches prospects deeply, writes hyper-personalized outreach, and follows up intelligently — without sounding like a robot.',
    },
    features: [
      'LinkedIn + company news scraping for personalization hooks',
      'AI-generated emails that cite specific recent events',
      'Smart follow-up sequences based on reply sentiment',
      'CRM auto-update and lead scoring',
    ],
    howItWorks: 'Input a target list → system scrapes 5+ data sources per prospect → GPT-4 crafts unique opener → sends via rotating SMTP → monitors replies → escalates warm leads to calendar booking.',
    architecture: 'n8n orchestration + Airtable CRM + OpenAI API + Apollo.io for data enrichment. Runs on a $20 DigitalOcean droplet.',
    layer2: {
      origin: 'I was doing manual outreach for Zubhai and hated it. Spent 2 hours personalizing 10 emails. There had to be a way to automate the research without losing the human signal.',
      decisions: [
        'Used GPT-4 for writing, but constrained it with a strict "one fact, one ask" rule. Prevents the AI from over-selling.',
        'Built reply sentiment analysis to auto-pause sequences on negative replies. Preserves sender reputation.',
        'Chose n8n over Zapier for the visual debugging. When a workflow breaks at 2 AM, you need to see where.',
      ],
      failures: [
        'First version sent emails that mentioned "your recent LinkedIn post" to people who hadn\'t posted in months. Scraping lag killed credibility.',
        'Over-automated the follow-up. Sent 7 emails to someone who replied "not interested." Had to build kill-switch logic.',
        'Tried to sell this as a SaaS. Too much support overhead for a solo builder. Now it\'s a done-for-you service + template.',
      ],
      retrospective: 'The biggest lesson: automation magnifies mistakes at scale. I sent 400 bad emails in 2 hours once. Now every workflow has a "send to me first" gate for the first 10 prospects.',
      currentState: 'Running for 3 clients. ~12% reply rate (industry average is 1-3%). Generating $2K MRR as a service. Considering productizing the template.',
      nextSteps: 'Add voice call follow-up via Bland AI for high-intent leads. Build a self-serve version for indie hackers.',
    },
    links: {
      github: 'https://github.com/shubhagrawal/outreach-engine',
    },
  },

  {
    slug: 'voice-assistant',
    name: 'Voice Agent',
    tagline: 'A phone assistant that actually books meetings and answers questions.',
    status: 'paused',
    category: 'AI Agent',
    tags: ['Python', 'Twilio', 'OpenAI', 'FastAPI'],
    hero: {
      problem: 'Small businesses in India miss 40%+ of incoming calls. Hiring a full-time receptionist is expensive.',
      solution: 'An AI voice agent that answers calls, answers FAQs, and books appointments directly into Google Calendar — in Hindi and English.',
    },
    features: [
      'Real-time speech-to-text with Whisper',
      'Conversational AI with function calling for calendar booking',
      'Bilingual support (Hindi + English code-switching)',
      'Call transcript and summary emailed after every call',
    ],
    howItWorks: 'Call comes in → Twilio streams audio → Whisper transcribes → GPT-4 decides intent → responds via ElevenLabs TTS → if booking needed, calls Google Calendar API → sends transcript to owner.',
    architecture: 'FastAPI backend + Twilio for telephony + OpenAI GPT-4 + Whisper + ElevenLabs TTS + Google Calendar API. Deployed on Railway.',
    layer2: {
      origin: 'My family runs a small clinic. They lose patients because no one answers the phone during busy hours. I wanted to fix that for them, then realized every small business has this problem.',
      decisions: [
        'Chose ElevenLabs over Google TTS for naturalness. Indian customers hang up on robotic voices.',
        'Built a "human handoff" where the AI says "let me get the doctor" and patches to a real line if confidence is low.',
        'Used function calling strictly — no open-ended chat. Keeps calls under 90 seconds.',
      ],
      failures: [
        'Latency was brutal initially — 4-5 second gaps between sentences. Fixed by switching to streaming + sentence-level buffering.',
        'Hindi code-switching broke the intent parser. "Kal appointment chahiye" (I want an appointment tomorrow) was parsed as "chahiye" = unknown. Had to fine-tune the system prompt heavily.',
        'ElevenLabs costs scaled fast. At 100 calls/day, TTS alone was $150/month. Business model didn\'t work for Indian price sensitivity.',
      ],
      retrospective: 'Technically it worked beautifully. Economically, it failed. Indian SMBs won\'t pay $100/month for this. I paused it to explore a B2B2C model through clinic software providers instead.',
      currentState: 'Paused. Core system works. Looking for a distribution partner (clinic management software) rather than selling direct.',
      nextSteps: 'Rebuild on cheaper TTS (DeepSeek or local models). Partner with a clinic SaaS for white-label distribution.',
    },
    links: {
      github: 'https://github.com/shubhagrawal/voice-agent',
    },
  },

  // ============================================================
  // TEMPLATE FOR NEW PROJECTS — copy from here to the closing bracket,
  // paste above this comment, and fill in your details.
  // ============================================================
  /*
  {
    slug: 'your-project-slug',
    name: 'Your Project Name',
    tagline: 'One line describing what it does.',
    status: 'live', // or 'beta' | 'paused' | 'archived'
    category: 'Category',
    tags: ['Tag1', 'Tag2'],
    hero: {
      problem: 'The problem you saw.',
      solution: 'How your thing solves it.',
    },
    features: [
      'Feature one',
      'Feature two',
    ],
    howItWorks: 'Brief explanation of the flow.',
    architecture: 'Optional: tech stack overview.',
    layer2: {
      origin: 'Why you built this.',
      decisions: [
        'Key decision one and why.',
      ],
      failures: [
        'What broke or didn\'t work.',
      ],
      retrospective: 'What you learned.',
      currentState: 'Where it stands now.',
      nextSteps: 'What comes next.',
    },
    links: {
      live: 'https://...',
      github: 'https://github.com/...',
    },
  },
  */
]
