export type Language = "en" | "nl";

interface Translations {
  nav: {
    home: string;
    work: string;
    writing: string;
    about: string;
    contact: string;
  };
  hero: {
    intro: string;
    title: string;
    subtitle: string;
    cta: string;
    scrollHint: string;
  };
  about: {
    title: string;
    subtitle: string;
    experience: string;
    education: string;
    skills: string;
    location: string;
    availability: string;
    viewDetails: string;
    clickToExpand: string;
  };
  work: {
    title: string;
    subtitle: string;
    filterAll: string;
    viewCaseStudy: string;
  };
  writing: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    linkedin: string;
    behance: string;
    availableForWork: string;
  };
  footer: {
    copyright: string;
    tagline: string;
  };
  common: {
    project: string;
    caseStudy: string;
    relatedExperience: string;
  };
}

const en: Translations = {
  nav: {
    home: "Home",
    work: "Work",
    writing: "Writing",
    about: "About",
    contact: "Contact",
  },
  hero: {
    intro: "› Hey, welcome to my little corner of the internet.",
    title: "I'm Nikel — a UI/UX designer who turns complex, messy problems into interfaces people actually enjoy using.",
    subtitle: "5+ years of experience across B2B SaaS, fintech, and e-commerce. Based in Belgium. Currently open to new work.",
    cta: "Let's talk →",
    scrollHint: "Press start to explore ↓",
  },
  about: {
    title: "About Me",
    subtitle: "UI/UX Designer",
    experience: "Experience",
    education: "Education",
    skills: "Skills & Tools",
    location: "Based in Belgium",
    availability: "Available for work",
    viewDetails: "View details",
    clickToExpand: "Click to expand",
  },
  work: {
    title: "Selected Work",
    subtitle: "A collection of projects I've worked on over the years.",
    filterAll: "All",
    viewCaseStudy: "View Case Study",
  },
  writing: {
    title: "Writing",
    subtitle: "Thoughts on design, development, and everything in between.",
  },
  contact: {
    title: "Get in Touch",
    subtitle: "Have a project in mind or just want to say hi? I'd love to hear from you.",
    email: "Email",
    linkedin: "LinkedIn",
    behance: "Behance",
    availableForWork: "Currently available for new projects",
  },
  footer: {
    copyright: "©2026 Nikel Design",
    tagline: "No pixels were harmed in the making of this portfolio.",
  },
  common: {
    project: "Project",
    caseStudy: "Case Study",
    relatedExperience: "Related Experience",
  },
};

const nl: Translations = {
  nav: {
    home: "Home",
    work: "Werk",
    writing: "Schrijven",
    about: "Over",
    contact: "Contact",
  },
  hero: {
    intro: "› Hey, welkom in mijn kleine hoekje van het internet.",
    title: "Ik ben Nikel — een UI/UX ontwerper die complexe, rommelige problemen omzet in interfaces waar mensen daadwerkelijk van genieten.",
    subtitle: "5+ jaar ervaring in B2B SaaS, fintech en e-commerce. Gevestigd in België. Momenteel open voor nieuw werk.",
    cta: "Laten we praten →",
    scrollHint: "Druk op start om te verkennen ↓",
  },
  about: {
    title: "Over Mij",
    subtitle: "UI/UX Ontwerper",
    experience: "Ervaring",
    education: "Opleiding",
    skills: "Vaardigheden & Tools",
    location: "Gevestigd in België",
    availability: "Beschikbaar voor werk",
    viewDetails: "Bekijk details",
    clickToExpand: "Klik om uit te klappen",
  },
  work: {
    title: "Geselecteerd Werk",
    subtitle: "Een collectie van projecten waar ik de afgelopen jaren aan heb gewerkt.",
    filterAll: "Alle",
    viewCaseStudy: "Bekijk Case Study",
  },
  writing: {
    title: "Schrijven",
    subtitle: "Gedachten over design, ontwikkeling en alles daartussenin.",
  },
  contact: {
    title: "Neem Contact Op",
    subtitle: "Heb je een project in gedachten of wil je gewoon hallo zeggen? Ik hoor graag van je.",
    email: "E-mail",
    linkedin: "LinkedIn",
    behance: "Behance",
    availableForWork: "Momenteel beschikbaar voor nieuwe projecten",
  },
  footer: {
    copyright: "©2026 Nikel Design",
    tagline: "Er zijn geen pixels geschaad bij het maken van deze portfolio.",
  },
  common: {
    project: "Project",
    caseStudy: "Case Study",
    relatedExperience: "Gerelateerde Ervaring",
  },
};

export const translations: Record<Language, Translations> = {
  en,
  nl,
};

export function getTranslation(lang: Language): Translations {
  return translations[lang];
}