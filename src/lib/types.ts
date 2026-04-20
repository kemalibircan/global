// Shared type for all translation files
export interface Translations {
  nav: {
    services: string
    work: string
    about: string
    contact: string
    cta: string
  }
  hero: {
    badge: string
    headline1: string
    headline2: string
    craftLabel: string
    rotatingWords: string[]
    cta1: string
    cta2: string
    scrollLabel: string
    stats: Array<{ value: string; label: string }>
  }
  services: {
    badge: string
    title1: string
    title2: string
    subtitle: string
    learnMore: string
    items: Array<{ icon: string; title: string; description: string; color: string }>
  }
  portfolio: {
    badge: string
    title1: string
    title2: string
    subtitle: string
    viewProject: string
    items: Array<{ title: string; category: string; description: string; tag: string }>
  }
  partners: {
    heading: string
  }
  about: {
    badge: string
    title1: string
    title2: string
    stats: Array<{ value: number; suffix: string; label: string }>
    manifesto: string[]
    features: string[]
  }
  testimonials: {
    badge: string
    items: Array<{ quote: string; name: string; company: string; avatar: string; stars: number }>
  }
  contact: {
    headline1: string
    headline2: string
    subtitle: string
    emailLabel: string
    followLabel: string
    expectLabel: string
    expects: string[]
    form: {
      nameLabel: string
      namePlaceholder: string
      emailLabel: string
      emailPlaceholder: string
      messageLabel: string
      messagePlaceholder: string
      submit: string
      sending: string
      successTitle: string
      successText: string
    }
  }
  footer: {
    copyright: string
  }

  // ── Inner pages ──────────────────────────────────────────
  pages: {
    projects: {
      title: string
      subtitle: string
      filterAll: string
      backToHome: string
      viewDetail: string
      projectItems: Array<{
        slug: string
        title: string
        category: string
        tag: string
        description: string
        fullDescription: string
        challenge: string
        solution: string
        results: string[]
        tech: string[]
      }>
    }
    about: {
      badge: string
      title: string
      subtitle: string
      storyBadge: string
      storyTitle: string
      storyText: string[]
      valuesBadge: string
      valuesTitle: string
      values: Array<{ icon: string; title: string; text: string }>
      teamBadge: string
      teamTitle: string
      team: Array<{ name: string; role: string; avatar: string }>
      timelineBadge: string
      timelineTitle: string
      timeline: Array<{ year: string; title: string; text: string }>
      ctaTitle: string
      ctaText: string
      ctaButton: string
    }
    contact: {
      badge: string
      title: string
      subtitle: string
      officeLabel: string
      officeAddress: string
      phoneLabel: string
      faqBadge: string
      faqTitle: string
      faqs: Array<{ q: string; a: string }>
    }
  }
}
