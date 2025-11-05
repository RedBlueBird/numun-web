export type Locale = 'en' | 'jp';

export interface Translations {
  common: {
    numun: string;
    nagoyaUniversity: string;
    inquireHere: string;
    learnMore: string;
    comingSoon: string;
  };
  header: {
    logoAlt: string;
  };
  navigation: {
    home: string;
    about: string;
    team: string;
    sponsors: string;
    partnerWithUs: string;
    pastSponsors: string;
    gallery: string;
    contact: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    contactUs: string;
    copyright: string;
  };
  home: {
    comingSoon: string;
    numun2026: string;
    quote: string;
    recruitingMessage: string;
    learnAboutButton: string;
    contactButton: string;
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    imageAlt: string;
    quote: {
      title: string;
      description: string;
    };
  };
  numun2026: {
    title: string;
    subtitle: string;
    quote: string;
    description: string;
    stats: {
      meetOur: string;
      from: string;
      delegates: string;
      countries: string;
    };
    socialMedia: {
      title: string;
      description: string;
    };
    sponsorship: {
      title: string;
      description: string;
      tiers: {
        silver: string;
        gold: string;
        diamond: string;
      };
    };
    cta: {
      title: string;
      inquire: string;
      pastSponsors: string;
    };
  };
  contact: {
    title: string;
    intro: string;
    inquiryBox: string;
    form: {
      name: {
        label: string;
        placeholder: string;
      };
      email: {
        label: string;
        placeholder: string;
      };
      subject: {
        label: string;
        placeholder: string;
        options: {
          general: string;
          sponsorship: string;
          delegate: string;
          committee: string;
          volunteer: string;
          other: string;
        };
      };
      message: {
        label: string;
        placeholder: string;
      };
      required: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  team: {
    title: string;
    subtitle: string;
    roles: {
      secretaryGeneral: string;
      deputySecretaryGeneral: string;
      organizingCommittees: string;
    };
    greetings: string;
  };
  gallery: {
    title: string;
    description: string;
    photoAlt: string;
  };
  pastSponsors: {
    title: string;
    description: string;
    tiers: {
      diamond: string;
      gold: string;
      silver: string;
    };
  };
}
