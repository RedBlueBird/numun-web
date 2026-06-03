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
    overview: string;
    rulesOfProcedure: string;
    register: string;
    about: string;
    aboutNumun: string;
    ourTeam: string;
    team: string;
    sponsors: string;
    currentSponsors: string;
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
    supporters: {
      title: string;
      viewAll: string;
    };
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
  currentSponsors: {
    title: string;
    description: string;
    tiers: {
      diamond: string;
      gold: string;
      silver: string;
      partner: string;
      supporter: string;
    };
  };
  pastSponsors: {
    title: string;
    description: string;
    tiers: {
      diamond: string;
      gold: string;
      silver: string;
      partner: string;
      supporter: string;
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
      springIntoMunWorkshop: {
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
  rop: {
    title: string;
    description: string;
    downloadNote: string;
    downloadRules: string;
    houseRules: {
      sectionTitle: string;
      intro: string;
      rules: Array<{ text: string; subs?: string[] }>;
    };
    cheatsheet: {
      sectionTitle: string;
      rollCall: {
        title: string;
        subtitle: string;
        instruction: string;
        presentVoting: { label: string; desc: string };
        present: { label: string; desc: string };
        quorumTitle: string;
        quorumSubtitle: string;
        majority: { label: string; desc: string };
        simpleMajority: { label: string; desc: string };
        twothirdsMajority: { label: string; desc: string; conditions?: string[] };
      };
      raisingPoints: {
        title: string;
        intro: string;
        phrase: string;
        points: Array<{ label: string; circumstance: string }>;
      };
      raisingMotions: {
        title: string;
        intro: string;
        phrase: string;
        motions: Array<{ label: string; circumstance: string }>;
      };
      makingSpeeches: {
        title: string;
        addressingTitle: string;
        addressPhrases: string[];
        yieldingTitle: string;
        yieldingNote: string;
        yields: Array<{ text: string; note?: string }>;
        whenTitle: string;
        speechTypes: Array<{ title: string; desc: string }>;
      };
      writingWorkingPapers: {
        title: string;
        purposeTitle: string;
        purposes: string[];
        structureTitle: string;
        structureNote: string;
        structureItems: string[];
        submissionTitle: string;
        submissionDesc: string;
      };
      writingDraftResolutions: {
        title: string;
        purposeTitle: string;
        purposes: string[];
        structureTitle: string;
        structureNotes: string[];
        heading: { label: string; items: string[]; signatoryNote: string };
        preamb: { label: string; items: string[] };
        operative: { label: string; item: string };
        amendmentsTitle: string;
        amendments: string[];
      };
      preambulatoryPhrases: {
        title: string;
        intro: string;
        phrases: string[];
      };
      operativePhrases: {
        title: string;
        intro: string;
        phrases: string[];
      };
      phraseGuide?: {
        title: string;
        categories: Array<{
          categoryLabel: string;
          phrases: Array<{ phrase: string; hint: string }>;
        }>;
      };
      amendments: {
        title: string;
        purposeTitle: string;
        purposes: string[];
        typeTitle: string;
        types: Array<{
          label: string;
          forClause?: string;
          desc?: string;
          phrase?: string;
          note?: string;
          steps?: string[];
        }>;
      };
      voting: {
        title: string;
        items: Array<{ text: string; subs?: string[] }>;
      };
      glossary: {
        title: string;
        terms: Array<{ word: string; definition: string }>;
      };
      commonPhrases: {
        title: string;
        phrases: Array<{ phrase: string; circumstance: string }>;
      };
    };
    fullRop: {
      sectionTitle: string;
      generalRules: {
        title: string;
        scope: { title: string; body: string[]; committees: { name: string; topic: string }[] };
        officers: { title: string; intro: string; table: { committee: string; chair: string; coChairs: string[] }[] };
        quorum: { title: string; body: string };
      };
      conduct: {
        title: string;
        languageOfDebate: { title: string; body: string[]; english: string[]; japanese: string[] };
        credentials: { title: string; body: string };
        courtesy: { title: string; body: string };
        chairAuthority: { title: string; body: string };
        agenda: { title: string; body: string[] };
        attendance: { title: string; body: string };
        decorum: { title: string; body: string };
        officialDocuments: { title: string; body: string };
        observers: { title: string; body: string };
        technologyAI: { title: string; body: string[] };
      };
      debate: {
        title: string;
        speeches: { title: string; body: string };
        yields: { title: string; body: string };
        relevance: { title: string; body: string };
        closureSpeakersList: { title: string; body: string };
        reopeningSpeakersList: { title: string; body: string };
        points: { title: string; intro: string; items: { point: string; circumstance: string }[] };
        motions: { title: string; intro: string; items: { motion: string; circumstance: string }[] };
        precedence: {
          title: string;
          intro: string;
          items: string[];
          tableItems?: Array<{ name: string; voteRequired: string; canInterrupt: string }>;
          tableHeaders?: { priority: string; voteRequired: string; canInterrupt: string };
        };
      };
      caucuses: {
        title: string;
        moderated: { title: string; body: string[] };
        unmoderated: { title: string; body: string[] };
        extension: { title: string; body: string };
        caucusTermination?: { title: string; body: string };
      };
      workingPapersResolutions: {
        title: string;
        workingPapers: { title: string; body: string };
        draftResolutions: { title: string; body: string };
        amendments: {
          title: string;
          body: string;
          friendly: { label: string; desc: string };
          unfriendly: { label: string; desc: string };
          further: string[];
        };
        mergingWithdrawal: { title: string; body: string };
      };
      voting: {
        title: string;
        votingBloc: { title: string; body: string };
        votingRights: { title: string; body: string };
        conductDuringVoting: { title: string; body: string };
        rollCallVotes: { title: string; body: string };
        motionsDuringBloc: { title: string; body: string };
        majorityRequirements: { title: string; body: string };
        abstentionsAndPasses: { title: string; body: string };
        divisionOfQuestion: { title: string; body: string };
        reconsideration: { title: string; body: string };
      };
      specialRules: {
        title: string;
        suspensionOfRules: { title: string; body: string };
        rightOfReply: { title: string; body: string };
        appealChair: { title: string; body: string };
      };
      closureOfDebate: {
        title: string;
        closure: { title: string; body: string };
        adjournment: { title: string; body: string };
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
      downloadBackground: string;
      emblemAlt: string;
      seatsProgress: {
        label: string;
        registered: string;
        total: string;
        lastUpdated: string;
      };
    };
    sections: {
      committees: string;
      awards: string;
      merchandise: string;
      lunchOptions: string;
      scheduleOverview: string;
      swag: string;
      socialNight: string;
      visit: string;
    };
    committeeButtons: {
      backgroundGuide: string;
      submitPaper: string;
    };
    committeeList: {
      ecosoc: { name: string; description: string; level: string; };
      unep: { name: string; description: string; level: string; };
      unhcr: { name: string; description: string; level: string; };
      unsc: { name: string; description: string; level: string; };
      who: { name: string; description: string; level: string; };
    };
    awards: {
      descriptionPart1: string;
      descriptionBold1: string;
      descriptionPart2: string;
      descriptionBold2: string;
      descriptionPart3: string;
      descriptionBold3: string;
      descriptionPart4: string;
      subheading: string;
      closing: string;
      medalAlt: string;
      bestDelegate: {
        title: string;
        role: string;
        subtitle: string;
        quality1: string;
        quality2: string;
        quality3: string;
        quality4: string;
      };
      outstandingDelegate: {
        title: string;
        role: string;
        subtitle: string;
        quality1: string;
        quality2: string;
        quality3: string;
      };
      bestPositionPaper: {
        title: string;
        quality1: string;
        quality2: string;
        quality3: string;
      };
    };
    visit: {
      nearbyFood: {
        title: string;
        subtitle: string;
        description: string;
        mapLink: string;
      };
      tourismSpots: {
        title: string;
        subtitle: string;
        description: string;
        mapLink: string;
      };
      emergencyNumbers: {
        title: string;
        description: string;
        policeLabel: string;
        policeNumber: string;
        fireLabel: string;
        fireNumber: string;
        aichiLabel: string;
        aichiNumber: string;
      };
      medicalAssistance: {
        title: string;
        description1: string;
        description2Part1: string;
        description2Bold1: string;
        description2Part2: string;
        description2Bold2: string;
        description2Part3: string;
        description2Bold3: string;
        description2Part4: string;
        description2Bold4: string;
        description2Part5: string;
      };
      evacuation: {
        title: string;
        description: string;
        step1Label: string;
        step1Text: string;
        step2Label: string;
        step2Text: string;
        step3Label: string;
        step3Text: string;
        step4Label: string;
        step4Text: string;
      };
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
    socialNight: {
      date: string;
      time: string;
      location: string;
      description: string;
      feeLabel: string;
      free: string;
      freeFor: string;
      noRegistration: string;
      performersTitle: string;
      partyAgendaTitle: string;
    };
  };
}
