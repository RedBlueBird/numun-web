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
    numun2026: string;
    register: string;
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
    importantPolicies: string;
    contactUs: string;
    copyright: string;
  };
  home: {
    comingSoon: string;
    numun2026: string;
    quote: string;
    recruitingMessage: string;
    learnAboutButton: string;
    viewGalleryButton: string;
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
    goBack: string;
    events: {
      OpeningCeremony: string;
      FAO: string;
      NetworkingEvent: string;
    };
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
  timeline: {
    title: string;
    description: string;
    events: {
      earlyBirdDelegate: {
        title: string;
        description: string;
      };
      staffRecruitment: {
        title: string;
        description: string;
      };
      numunCafe: {
        title: string;
        description: string;
      };
      unmoderatedCookoff: {
        title: string;
        description: string;
      };
    };
  };
  social: {
    instagramTitle: string;
    instagramDescription: string;
    followUs: string;
  };
  register: {
    title: string;
    individual: {
      title: string;
      description: string;
      earlyBird: string;
      button: string;
    };
    group: {
      title: string;
      description: string;
      downloadForm: string;
      emailUs: string;
    };
    discount: {
      title: string;
      description: string;
    };
    process: {
      title: string;
      step1: string;
      step2: string;
      step3: string;
      step4: string;
    };
  };
  policy: {
    title: string;
    sections: {
      refundPolicy: {
        title: string;
        body: string;
        refundPolicyLinkText: string;
      };
      aiUsage: {
        title: string;
        body: string;
        rulesLinkText: string;
      };
      lateSubmissions: {
        title: string;
        body: string;
      };
      upToDate: {
        title: string;
        body: string;
        followUp: string;
      };
    };
  };
  conference: {
    title: string;
    hero: {
      quote: string;
      date: string;
      location: string;
      earlyBird: string;
      registerNow: string;
      downloadHandbook: string;
      downloadRules: string;
      emblemAlt: string;
    };
    sections: {
      committees: string;
      awards: string;
      merchandise: string;
      lunchOptions: string;
      scheduleOverview: string;
      swag: string;
    };
    committeeList: {
      ecosoc: { name: string; description: string; level: string; };
      unep: { name: string; description: string; level: string; };
      unhcr: { name: string; description: string; level: string; };
      unsc: { name: string; description: string; level: string; };
      who: { name: string; description: string; level: string; };
    };
    swag: {
      description1Part1: string;
      description1Bold: string;
      description1Part2: string;
      description2: string;
      items: {
        notebook: string;
        lanyard: string;
        stickerPack: string;
        bookmark: string;
        pen: string;
      };
    };
  };
}
