import type { Translations } from '../types'

const en: Translations = {
  nav: {
    services: 'Services',
    work: 'Projects',
    about: 'About',
    contact: 'Contact',
    cta: 'Get in Touch',
    packages: 'Packages',
    packagesWeb: 'Website Packages',
    packagesMobile: 'Mobile App Packages',
    packagesSocial: 'Social Media Packages',
    templates: 'Ready Templates',
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
    phone: '+90 534 612 46 42',
    phone2: '+90 552 248 99 71',
    phoneLabel: 'Phone',
    email: 'infoglobaldijital@gmail.com',
    emailLabel: 'Email',
    addressLabel: 'Address',
    address: 'Maslak Mah. Büyükdere Cad. No:237, 34485 Sarıyer, Istanbul',
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
    },
    packages: {
      web: {
        badge: 'Website Packages',
        title: 'Build Your Professional Website',
        subtitle: 'Choose the website package that fits your business. All packages include responsive design, SSL certificate, and basic SEO optimization.',
        cta: 'Get Started',
        popular: 'Most Popular',
        currency: '₺',
        features: 'Features',
        plans: [
          {
            name: 'Starter Package',
            price: '8,500',
            period: 'one-time',
            description: 'Ideal starter package for small businesses and personal websites.',
            features: ['5 Page Design', 'Responsive (Mobile-Friendly)', 'Basic SEO Optimization', 'SSL Certificate', 'Contact Form', '1 Year Hosting', 'WhatsApp Integration', '5 Stock Images'],
            highlighted: false,
          },
          {
            name: 'Professional Package',
            price: '17,500',
            period: 'one-time',
            description: 'Comprehensive and powerful web solution for growing businesses.',
            features: ['10 Page Design', 'Responsive Design', 'Advanced SEO Optimization', 'Blog System', 'Admin Panel', 'Google Analytics Integration', 'Live Chat Integration', 'Social Media Integration', '1 Year Hosting + Domain', '3 Months Free Support'],
            highlighted: true,
          },
          {
            name: 'Enterprise Package',
            price: '32,000',
            period: 'one-time',
            description: 'Custom solution for large-scale projects and corporate companies.',
            features: ['Unlimited Page Design', 'Custom UI/UX Design', 'E-Commerce Infrastructure', 'Multi-Language Support', 'Custom Software Development', 'API Integrations', 'Advanced Security', 'Performance Optimization', '24/7 Technical Support', '1 Year Hosting + Domain', '6 Months Free Support', 'Training & Documentation'],
            highlighted: false,
          },
        ],
      },
      mobile: {
        badge: 'Mobile App Packages',
        title: 'Bring Your Mobile App to Life',
        subtitle: 'Strengthen your digital presence with our professional mobile app development packages for iOS and Android.',
        cta: 'Get a Quote',
        popular: 'Most Popular',
        currency: '₺',
        features: 'Features',
        plans: [
          {
            name: 'Starter',
            price: '25,000',
            period: 'one-time',
            description: 'Basic mobile app solution for a single platform.',
            features: ['Single Platform (iOS or Android)', '5 Screen Design', 'Push Notifications', 'Basic API Integration', 'App Store / Play Store Upload', 'User Login System', '3 Months Technical Support', 'Basic Analytics'],
            highlighted: false,
          },
          {
            name: 'Business',
            price: '45,000',
            period: 'one-time',
            description: 'Cross-platform app to be present on both platforms.',
            features: ['iOS + Android (Cross-Platform)', '10+ Screen Design', 'Admin Panel', 'Advanced API Integration', 'Payment System Integration', 'Push & In-App Notifications', 'Analytics Dashboard', 'Social Media Login', 'Map Integration', '6 Months Technical Support'],
            highlighted: true,
          },
          {
            name: 'Enterprise',
            price: '85,000',
            period: 'one-time',
            description: 'Enterprise solution with scalable architecture and custom development.',
            features: ['Native iOS + Android', 'Custom Backend Development', 'Real-Time Data Sync', 'Scalable Cloud Infrastructure', 'Chat / Messaging System', 'Video Call Integration', 'Multi-Language Support', 'AI Integration', 'CI/CD Pipeline', '12 Months Technical Support', 'Source Code Delivery', 'SLA Guarantee'],
            highlighted: false,
          },
        ],
      },
      social: {
        badge: 'Social Media Packages',
        title: 'Professional Social Media Management',
        subtitle: 'Grow your brand on social media with follower growth, content creation, and community management.',
        cta: 'Get Started',
        popular: 'Most Popular',
        currency: '₺',
        features: 'Features',
        plans: [
          {
            name: 'Follower Growth',
            price: '4,500',
            period: 'monthly',
            description: 'Organic follower growth and brand awareness package.',
            features: ['2 Platform Management', '15 Posts / Month', 'Hashtag Strategy', 'Organic Follower Growth', 'Story Shares (10/month)', 'Basic Competitor Analysis', 'Monthly Performance Report', 'Account Optimization'],
            highlighted: false,
          },
          {
            name: 'Content Management',
            price: '8,500',
            period: 'monthly',
            description: 'Professional content creation and comprehensive social media management.',
            features: ['3 Platform Management', '30 Posts / Month', 'Professional Visual Design', 'Story Design (20/month)', 'Ad Management (up to ₺2000 budget)', 'Community Management', 'DM & Comment Management', 'Detailed Monthly Report', 'Content Calendar', 'A/B Testing Strategies'],
            highlighted: true,
          },
          {
            name: 'Full Management',
            price: '15,000',
            period: 'monthly',
            description: 'Comprehensive social media strategy and management across all platforms.',
            features: ['All Platforms (5+)', 'Unlimited Posts', 'Video Content (Reels/TikTok)', 'Influencer Collaborations', 'Ad Management (Unlimited)', 'Crisis Management', 'PR & Press Releases', 'Weekly Strategy Meetings', 'Dedicated Social Media Consultant', 'Brand Ambassador Program', 'Detailed ROI Analysis', 'Competitor Monitoring & Benchmark'],
            highlighted: false,
          },
        ],
      },
    },
    templates: {
      badge: 'Ready Solutions',
      title: 'Industry-Specific Ready Templates',
      subtitle: 'Fast delivery, low cost. Pick a web or mobile app template tailored to your business and go live in days.',
      filterAll: 'All',
      filterWeb: 'Website',
      filterMobile: 'Mobile App',
      ctaLabel: 'Ready to start your project?',
      ctaButton: 'Get Free Consultation →',
      items: [
        {
          slug: 'doktor-web-sitesi',
          type: 'web',
          sector: 'Healthcare',
          title: 'Doctor & Clinic Website',
          description: 'A professional clinic website that greets patients with an online booking system, specialty areas, and expert team introduction.',
          tag: 'Website',
          color: '#0EA5E9',
          features: ['Online Booking System', 'Doctor Profile Pages', 'Services & Specialties', 'Patient Reviews', 'Google Maps Integration', 'Mobile Responsive', 'WhatsApp Line', 'SEO Optimized'],
          price: '12,500',
          deliveryTime: '5-7 business days',
          heroDesc: 'Patients are searching for you on Google. Build trust with a professional website, accept online appointments, and boost your occupancy rate.',
          highlights: [
            { icon: '📅', title: 'Online Booking', text: '24/7 appointment scheduling. Increase occupancy without extra staff.' },
            { icon: '👨‍⚕️', title: 'Doctor Profiles', text: 'Bio, certificates, and specialty page for every doctor.' },
            { icon: '⭐', title: 'Patient Reviews', text: 'Automatically collected patient ratings via Google integration.' },
            { icon: '📱', title: 'Full Mobile Compatibility', text: '70% of patients search on mobile. Be ready.' },
          ],
        },
        {
          slug: 'kafe-mobil-uygulamasi',
          type: 'mobile',
          sector: 'Cafe & Restaurant',
          title: 'Cafe Mobile Ordering App',
          description: 'A modern cafe app offering table-side ordering, loyalty points, and pre-order for your customers.',
          tag: 'Mobile App',
          color: '#F59E0B',
          features: ['QR Menu & Table Order', 'Loyalty Points System', 'Pre-Order (Takeaway)', 'Push Notifications', 'Campaign Management', 'Payment Integration', 'Admin Panel', 'iOS & Android'],
          price: '18,500',
          deliveryTime: '10-14 business days',
          heroDesc: 'Eliminate the queue at your cafe. Let customers order from their phones while you focus on great experiences.',
          highlights: [
            { icon: '📲', title: 'QR Table Ordering', text: 'Place QR codes on tables, customers scan and order from their phone.' },
            { icon: '🎁', title: 'Loyalty System', text: 'Earn points on every order. Multiply customer retention.' },
            { icon: '⚡', title: 'Fast Checkout', text: 'Credit card, digital wallet integration — pay in seconds.' },
            { icon: '📊', title: 'Sales Analytics', text: 'Best-sellers, peak hours — make data-driven decisions.' },
          ],
        },
        {
          slug: 'avukat-web-sitesi',
          type: 'web',
          sector: 'Law',
          title: 'Lawyer & Law Firm Website',
          description: 'A prestigious law firm website that radiates trust, highlights practice areas and success stories.',
          tag: 'Website',
          color: '#1E3A5F',
          features: ['Practice Area Pages', 'Attorney Biographies', 'Case Studies', 'Online Form & Application', 'Blog & Legal Articles', 'Privacy-Focused Design', 'SEO & Google Ads Ready', 'SSL Security'],
          price: '14,500',
          deliveryTime: '7-10 business days',
          heroDesc: 'Clients research their lawyers online first. Win the first impression with a strong online presence and increase case inquiries.',
          highlights: [
            { icon: '⚖️', title: 'Prestige Design', text: 'Dark navy & gold palette. Visually projects seriousness and trust.' },
            { icon: '📝', title: 'Online Application', text: 'Prospective clients can pre-apply 24/7, you send proposals.' },
            { icon: '📰', title: 'Legal Blog', text: 'SEO-optimized legal articles — the key to top Google rankings.' },
            { icon: '🔒', title: 'GDPR Compliant', text: 'Privacy policy, cookie management, and data security fully integrated.' },
          ],
        },
        {
          slug: 'restoran-mobil-uygulamasi',
          type: 'mobile',
          sector: 'Restaurant',
          title: 'Restaurant Order & Reservation App',
          description: 'A restaurant solution combining table reservation, delivery ordering, and menu management in one app.',
          tag: 'Mobile App',
          color: '#DC2626',
          features: ['Table Reservation', 'Delivery Order', 'Digital Menu Management', 'Waiter Call Button', 'Chef Specials', 'Live Order Tracking', 'Kitchen Display Integration', 'iOS & Android'],
          price: '22,000',
          deliveryTime: '14-21 business days',
          heroDesc: 'Increase your restaurant\'s occupancy and average order value. Digital menus with photography open appetites.',
          highlights: [
            { icon: '🍽️', title: 'Table Ordering', text: 'Zero waiter wait time. Customers place their own order.' },
            { icon: '🚗', title: 'Delivery', text: 'Package delivery with your own fleet or integrated courier system.' },
            { icon: '👨‍🍳', title: 'Kitchen Display', text: 'Orders auto-pushed to kitchen screen, error rate drops to zero.' },
            { icon: '📈', title: 'Revenue Analytics', text: 'Daily, weekly, monthly sales reports — see your whole restaurant in one screen.' },
          ],
        },
        {
          slug: 'emlak-web-sitesi',
          type: 'web',
          sector: 'Real Estate',
          title: 'Real Estate Agency Website',
          description: 'A professional real estate website equipped with listing management, virtual tours, and lead capture.',
          tag: 'Website',
          color: '#059669',
          features: ['Listing Management Panel', 'Map-Based Search', 'Virtual Tour Integration', 'Agent Profiles', 'Lead Capture Form', 'WhatsApp Integration', 'SEO Optimized', 'Mobile Responsive'],
          price: '16,500',
          deliveryTime: '7-12 business days',
          heroDesc: 'Buyers and renters start their search online. Get ahead of competitors with a website that showcases your portfolio and captures leads.',
          highlights: [
            { icon: '🏠', title: 'Listing Management', text: 'Add, edit, and upload photos from the admin panel — one click.' },
            { icon: '🗺️', title: 'Map Search', text: 'Users filter listings by selecting areas on the map.' },
            { icon: '🎬', title: 'Virtual Tour', text: 'Showcase properties with 360° photos or video, reduce physical visits.' },
            { icon: '📬', title: 'Lead Capture', text: 'Automatically send interested buyer contact info to your CRM.' },
          ],
        },
        {
          slug: 'spor-salonu-mobil-uygulamasi',
          type: 'mobile',
          sector: 'Sports & Fitness',
          title: 'Gym & Fitness App',
          description: 'A premium fitness app combining member management, class schedules, PT booking, and motivation tools.',
          tag: 'Mobile App',
          color: '#7C3AED',
          features: ['Member Card & QR Entry', 'Class Schedule & Booking', 'PT Appointment System', 'Workout Tracker', 'Nutrition Journal', 'Badge & Reward System', 'Push Notifications', 'iOS & Android'],
          price: '24,500',
          deliveryTime: '14-21 business days',
          heroDesc: 'Stop losing members. Connect your athletes to the gym with a digital membership card, class booking, and motivation system.',
          highlights: [
            { icon: '💪', title: 'Digital Member Card', text: 'QR code turnstile entry. Prevent member loss and unauthorized access.' },
            { icon: '📆', title: 'Class Booking', text: 'Auto-manage group class capacity. Members reserve spots via app.' },
            { icon: '🏆', title: 'Badge System', text: 'In-app achievements motivate members and drive social media sharing.' },
            { icon: '📊', title: 'Progress Tracking', text: 'Weight, measurements, body fat charts — members see results and stay.' },
          ],
        },
      ],
    },
  },
}

export default en
