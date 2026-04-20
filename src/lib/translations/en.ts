import type { Translations } from '../types'

const en: Translations = {
  nav: {
    services: 'Services',
    work: 'Projects',
    about: 'About',
    contact: 'Contact',
    cta: 'Get in Touch',
  },
  hero: {
    badge: 'World-Class Creative Tech Agency',
    headline1: 'We Build',
    headline2: 'Digital Futures',
    craftLabel: 'We craft',
    rotatingWords: [
      'Digital Experiences',
      'Intelligent Systems',
      'Global Brands',
      'Futuristic Products',
    ],
    cta1: 'View Our Work',
    cta2: 'Start a Project →',
    scrollLabel: 'Scroll',
    stats: [
      { value: '150+', label: 'Projects' },
      { value: '8+', label: 'Years' },
      { value: '40+', label: 'Clients' },
      { value: '12', label: 'Countries' },
    ],
  },
  services: {
    badge: 'What We Do',
    title1: 'Services That',
    title2: 'Move Brands',
    subtitle: 'We offer a full spectrum of digital services — from strategy to execution — designed to transform your vision into a competitive advantage.',
    learnMore: 'Learn more',
    items: [
      { icon: '⚡', title: 'Web Development', description: 'Blazing-fast, pixel-perfect web experiences built with Next.js, React, and modern tooling.', color: '#00D4FF' },
      { icon: '📱', title: 'Mobile Apps', description: 'Native and cross-platform mobile applications that users love to engage with daily.', color: '#7B2FBE' },
      { icon: '🎨', title: 'UI/UX Design', description: 'Human-centered design systems that balance aesthetics with frictionless usability.', color: '#00D4FF' },
      { icon: '🤖', title: 'AI Integration', description: 'Embed intelligent automation, NLP, and ML models directly into your product workflows.', color: '#7B2FBE' },
      { icon: '🚀', title: 'Digital Strategy', description: 'Data-driven roadmaps, market positioning, and go-to-market strategies that convert.', color: '#00D4FF' },
      { icon: '✦', title: 'Brand Identity', description: 'Cohesive visual identities, logos, and brand systems that command premium positioning.', color: '#7B2FBE' },
    ],
  },
  portfolio: {
    badge: 'Our Work',
    title1: 'Selected',
    title2: 'Projects',
    subtitle: 'A curated showcase of digital experiences we have crafted for ambitious brands worldwide.',
    viewProject: 'View Project',
    items: [
      { title: 'NexCommerce', category: 'E-Commerce', description: 'Full-stack e-commerce redesign with AI-powered product recommendations and lightning-fast checkout.', tag: 'Web Development' },
      { title: 'FinFlow Dashboard', category: 'Fintech', description: 'Real-time financial analytics dashboard with live market data, portfolio tracking, and predictive modeling.', tag: 'UI/UX + Dev' },
      { title: 'Aria AI Assistant', category: 'AI Integration', description: 'Context-aware enterprise chatbot with GPT-4 backbone, multilingual support, and CRM integration.', tag: 'AI Integration' },
      { title: 'MediSync', category: 'Healthcare', description: 'Patient-centric mobile health app with appointment scheduling, telemedicine, and health record management.', tag: 'Mobile App' },
      { title: 'LaunchPad SaaS', category: 'SaaS', description: 'Conversion-optimized landing page with A/B testing, dynamic pricing, and seamless onboarding flow.', tag: 'Brand + Web' },
      { title: 'TrackRoute', category: 'Logistics', description: 'Real-time logistics tracking platform with route optimization, fleet management, and driver analytics.', tag: 'Digital Strategy' },
    ],
  },
  partners: {
    heading: 'Trusted by the World\'s Best Teams',
  },
  about: {
    badge: 'Why Choose Us',
    title1: 'Built for the',
    title2: 'Future of Digital',
    stats: [
      { value: 150, suffix: '+', label: 'Projects Delivered' },
      { value: 8, suffix: '+', label: 'Years of Excellence' },
      { value: 40, suffix: '+', label: 'Clients Worldwide' },
      { value: 12, suffix: '', label: 'Countries Reached' },
    ],
    manifesto: [
      'We are GlobalDijital — a collective of strategists, engineers, and designers who believe that every brand deserves a world-class digital presence.',
      'From ambitious startups to Fortune 500 enterprises, we have partnered with organizations that refuse to be ordinary. Our process is collaborative, our execution is relentless, and our results speak for themselves.',
      'This is not just about building websites. It is about building legacies.',
    ],
    features: [
      'Agile, iterative delivery model',
      'Dedicated team with full ownership',
      'Post-launch support and optimization',
      'Transparent reporting and communication',
    ],
  },
  testimonials: {
    badge: 'Client Stories',
    items: [
      { quote: 'GlobalDijital completely transformed our digital presence. The final product exceeded every expectation — their attention to detail is unmatched.', name: 'Sarah Mitchell', company: 'NexCommerce CEO', avatar: 'SM', stars: 5 },
      { quote: 'Working with this team was a pleasure from day one. They delivered our fintech dashboard on time, on budget, and it looks absolutely stunning.', name: 'James Hargreaves', company: 'FinFlow CTO', avatar: 'JH', stars: 5 },
      { quote: 'The AI chatbot they built for us has reduced our support load by 60%. Incredible engineering paired with thoughtful UX design.', name: 'Priya Sharma', company: 'Aria Technologies', avatar: 'PS', stars: 5 },
      { quote: 'Our patient app went from concept to App Store in under 4 months. The team\'s communication and professionalism was world-class.', name: 'Dr. Emre Yilmaz', company: 'MediSync Founder', avatar: 'EY', stars: 5 },
      { quote: 'GlobalDijital\'s strategic insights alone were worth the investment. Then the execution? Flawless. 10/10 would recommend to any tech leader.', name: 'Clara Fontaine', company: 'LaunchPad CPO', avatar: 'CF', stars: 5 },
    ],
  },
  contact: {
    headline1: 'Let\'s Build',
    headline2: 'Something Great',
    subtitle: 'Ready to transform your digital presence? Drop us a message and we\'ll get back to you within 24 hours.',
    emailLabel: 'Email Us',
    followLabel: 'Follow Us',
    expectLabel: 'What to Expect',
    expects: ['Response within 24 hours', 'Free 30-minute discovery call', 'Custom project proposal', 'No commitment required'],
    form: {
      nameLabel: 'Your Name',
      namePlaceholder: 'John Smith',
      emailLabel: 'Email Address',
      emailPlaceholder: 'john@company.com',
      messageLabel: 'Your Message',
      messagePlaceholder: 'Tell us about your project...',
      submit: 'Send Message →',
      sending: 'Sending...',
      successTitle: 'Message Sent!',
      successText: 'We\'ll be in touch within 24 hours. Get ready to build something great.',
    },
  },
  footer: {
    copyright: '© 2025 GlobalDijital. All rights reserved.',
  },
  pages: {
    "projects": {
        "title": "Our Projects",
        "subtitle": "A curated showcase of digital experiences crafted for ambitious brands worldwide.",
        "filterAll": "All",
        "backToHome": "Back to Home",
        "viewDetail": "View Project →",
        "projectItems": [
            {
                "slug": "nexcommerce",
                "title": "NexCommerce",
                "category": "E-Commerce",
                "tag": "Web Development",
                "description": "Full-stack e-commerce redesign with AI-powered product recommendations and lightning-fast checkout.",
                "fullDescription": "NexCommerce was designed to transform a legacy e-commerce platform into a modern, AI-driven shopping experience. Powered by Next.js 14, Stripe, and OpenAI, the platform increased conversion rates by 240%.",
                "challenge": "High bounce rates, slow page load times, and a mobile-incompatible interface were the key problems.",
                "solution": "Rebuilt from scratch using Next.js App Router, edge caching, and a personalized product recommendations engine.",
                "results": [
                    "Conversion +240%",
                    "Page load 0.8s",
                    "Mobile revenue +180%",
                    "Cart abandonment -45%"
                ],
                "tech": [
                    "Next.js 14",
                    "TypeScript",
                    "Stripe",
                    "OpenAI",
                    "Tailwind CSS",
                    "PostgreSQL"
                ]
            },
            {
                "slug": "finflow",
                "title": "FinFlow Dashboard",
                "category": "Fintech",
                "tag": "UI/UX + Dev",
                "description": "Real-time financial analytics dashboard with live market data and predictive modeling.",
                "fullDescription": "FinFlow is an enterprise-grade analytics dashboard system that enables portfolio managers to monitor real-time market data, run predictive models, and set alerts.",
                "challenge": "The existing system updated data daily, making real-time analysis impossible.",
                "solution": "Developed a WebSocket-based live data stream, D3.js charts, and a customizable widget system.",
                "results": [
                    "Live data with 0ms delay",
                    "Decision time -60%",
                    "User satisfaction 4.9/5",
                    "License from 12 agencies"
                ],
                "tech": [
                    "React",
                    "D3.js",
                    "WebSocket",
                    "Node.js",
                    "Redis",
                    "TimescaleDB"
                ]
            },
            {
                "slug": "aria-ai",
                "title": "Aria AI Assistant",
                "category": "AI Integration",
                "tag": "AI Integration",
                "description": "Context-aware enterprise chatbot with GPT-4 backbone and multilingual support.",
                "fullDescription": "Aria is a context-aware enterprise AI assistant built on GPT-4, designed to automate customer support operations. It supports 18 languages and provides full CRM integration.",
                "challenge": "A scalable system was needed to respond to high-volume support requests without interruption.",
                "solution": "Built using RAG architecture, a vector database, and a fine-tuned domain model.",
                "results": [
                    "Support cost -60%",
                    "Response time 2.1s",
                    "Customer satisfaction +34%",
                    "18 languages supported"
                ],
                "tech": [
                    "GPT-4",
                    "LangChain",
                    "Pinecone",
                    "FastAPI",
                    "React",
                    "Docker"
                ]
            },
            {
                "slug": "medisync",
                "title": "MediSync",
                "category": "Healthcare",
                "tag": "Mobile App",
                "description": "Patient-centric health app with appointment scheduling, telemedicine, and health record management.",
                "fullDescription": "MediSync is a comprehensive health platform where patients can connect with doctors, track their medications, and receive telemedicine services via secure video.",
                "challenge": "HIPAA compliance, secure data storage, and low-latency video connection were the requirements.",
                "solution": "React Native with end-to-end encrypted WebRTC video and a FHIR-compliant health data model.",
                "results": [
                    "500K+ downloads",
                    "Clinical efficiency +45%",
                    "Video quality score 98%",
                    "Integration with 47 clinics"
                ],
                "tech": [
                    "React Native",
                    "WebRTC",
                    "Node.js",
                    "PostgreSQL",
                    "AWS",
                    "HIPAA"
                ]
            },
            {
                "slug": "launchpad",
                "title": "LaunchPad SaaS",
                "category": "SaaS",
                "tag": "Brand + Web",
                "description": "Conversion-optimized landing page platform with A/B testing and dynamic pricing.",
                "fullDescription": "LaunchPad is a comprehensive platform template system developed to rapidly create testable, conversion-focused landing pages for new SaaS products.",
                "challenge": "Designing a separate landing page for each product was time-consuming and produced inconsistent quality.",
                "solution": "Developed an A/B testing engine with CMS-based customization and a drag-and-drop editor with Stripe integration.",
                "results": [
                    "Average conversion rate 8.4%",
                    "Setup time 2 days → 4 hours",
                    "200+ active subscriptions",
                    "Churn rate -23%"
                ],
                "tech": [
                    "Next.js",
                    "Framer Motion",
                    "Stripe",
                    "Sanity CMS",
                    "Vercel",
                    "PostHog"
                ]
            },
            {
                "slug": "trackroute",
                "title": "TrackRoute",
                "category": "Logistics",
                "tag": "Digital Strategy",
                "description": "Real-time logistics tracking platform with route optimization and fleet management.",
                "fullDescription": "TrackRoute is an enterprise-grade operations platform that tracks logistics fleets in real time, automatically optimizes routes, and analyzes driver performance.",
                "challenge": "Fragmented GPS data, manual route planning, and lack of reporting were the main problems.",
                "solution": "Applied Google Maps Platform integration, WebSocket-based live tracking, and ML-based route optimization.",
                "results": [
                    "Fuel cost -28%",
                    "Delivery time -35%",
                    "1200+ vehicles tracked",
                    "Customer complaints -60%"
                ],
                "tech": [
                    "React",
                    "Google Maps API",
                    "WebSocket",
                    "Python",
                    "TensorFlow",
                    "PostgreSQL"
                ]
            }
        ]
    },
    "about": {
        "badge": "Our Story",
        "title": "Redefining Digital",
        "subtitle": "A team that combines vision, technology, and design to take brands into the future.",
        "storyBadge": "Origins",
        "storyTitle": "How We Started",
        "storyText": [
            "In 2017, three entrepreneurs began questioning why even the world's best brands struggled so much with digital transformation. The answer was always the same: strategy, design, and technology were disconnected.",
            "The purpose of founding GlobalDijital was to close this gap. An agency that combines strategic thinking with aesthetic excellence and technical power.",
            "Today we work with over 40 brands in 12 countries and have brought more than 150 projects to life. But we haven't done our best project yet — it could be yours."
        ],
        "valuesBadge": "Our Values",
        "valuesTitle": "What Makes Us Us",
        "values": [
            {
                "icon": "🎯",
                "title": "Purpose-Driven",
                "text": "Every pixel, every line of code serves a purpose. Conversion, not decoration."
            },
            {
                "icon": "🚀",
                "title": "Speed & Quality",
                "text": "We deliver fast and flawlessly. Neither is sacrificed for the other."
            },
            {
                "icon": "🤝",
                "title": "Transparency",
                "text": "Our clients know at every stage what is being done and why."
            },
            {
                "icon": "🧠",
                "title": "Continuous Learning",
                "text": "Technology evolves fast. So do we. We give every team member regular time for training and exploration."
            },
            {
                "icon": "🌍",
                "title": "Global Perspective",
                "text": "Our experience in 12 countries gives us deep cultural understanding while maintaining a global vision."
            },
            {
                "icon": "💡",
                "title": "Creativity",
                "text": "Standard solutions produce standard results. We look at every project with fresh eyes."
            }
        ],
        "teamBadge": "Our Team",
        "teamTitle": "The People Behind It",
        "team": [
            {
                "name": "Kemal Bircan",
                "role": "Founder & CEO",
                "avatar": "KB"
            },
            {
                "name": "Lena Müller",
                "role": "Design Director",
                "avatar": "LM"
            },
            {
                "name": "Amir Hassan",
                "role": "CTO",
                "avatar": "AH"
            },
            {
                "name": "Priya Nair",
                "role": "Strategy Director",
                "avatar": "PN"
            },
            {
                "name": "Carlos Reis",
                "role": "Lead Developer",
                "avatar": "CR"
            },
            {
                "name": "Yuki Tanaka",
                "role": "UX Researcher",
                "avatar": "YT"
            }
        ],
        "timelineBadge": "Our Journey",
        "timelineTitle": "Milestones",
        "timeline": [
            {
                "year": "2017",
                "title": "Founded",
                "text": "GlobalDijital was founded in Istanbul with 3 partners."
            },
            {
                "year": "2019",
                "title": "Global Growth",
                "text": "Expanded into Europe and the Middle East, reached our first 20 clients."
            },
            {
                "year": "2021",
                "title": "AI Services",
                "text": "Launched our AI & Automation service line."
            },
            {
                "year": "2023",
                "title": "150+ Projects",
                "text": "Completed 150 projects with 40+ brands across 12 countries."
            },
            {
                "year": "2025",
                "title": "New Era",
                "text": "Launched our own SaaS platforms, beginning the transition to a product company."
            }
        ],
        "ctaTitle": "Let's Build Your Next Big Project Together",
        "ctaText": "Your story starts here. Reach out to us.",
        "ctaButton": "Get in Touch →"
    },
    "contact": {
        "badge": "Contact Us",
        "title": "Let's Talk",
        "subtitle": "We're ready to discuss your project. Fill out the form or reach out directly.",
        "officeLabel": "Our Office",
        "officeAddress": "Maslak Mah. Büyükdere Cad. No:237, 34485 Sarıyer, Istanbul, Turkey",
        "phoneLabel": "Phone",
        "faqBadge": "FAQ",
        "faqTitle": "Frequently Asked Questions",
        "faqs": [
            {
                "q": "How long does a project take?",
                "a": "It varies between 4 weeks and 6 months depending on scope. We provide a clear timeline in the first meeting."
            },
            {
                "q": "How does pricing work?",
                "a": "We offer project-based pricing or a monthly retainer model. The first consultation is free."
            },
            {
                "q": "What technologies do you use?",
                "a": "Next.js, React, Node.js, Python, Three.js, AI/ML, and more. We choose the best stack for your project."
            },
            {
                "q": "Is there post-launch support?",
                "a": "Yes. All projects are delivered with a guaranteed 3-month support package."
            },
            {
                "q": "Do you work remotely?",
                "a": "Yes, we work fully remote with clients in 12 different countries."
            }
        ]
    }
},
}

export default en
