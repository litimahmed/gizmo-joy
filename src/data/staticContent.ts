/**
 * Static Content Data
 * Hardcoded multilingual content for all pages and sections
 * Languages: English (en), French (fr), Arabic (ar)
 */

// Partner logos from assets
import AirAlgerieLogo from "@/assets/Air_Algérie_logo.png";
import BankOfAlgeriaLogo from "@/assets/Bank_of_Algeria.png";
import DjezzyLogo from "@/assets/Djezzy_Logo.png";
import SonatrachLogo from "@/assets/Flag_of_Sonatrach.png";
import MobilisLogo from "@/assets/Logo_Mobilis.png";
import OoredooLogo from "@/assets/Ooredoo_logo.svg";
import SonelgazLogo from "@/assets/Sonlgaz.png";
import CnasLogo from "@/assets/cnas.png";

export interface MultilingualText {
  en: string;
  fr: string;
  ar: string;
}

export interface Partner {
  id: string;
  name: MultilingualText;
  description: MultilingualText;
  logo: string;
  industry: MultilingualText;
  website?: string;
}

export interface AboutUsContent {
  title: MultilingualText;
  content: MultilingualText;
  mission: MultilingualText;
  vision: MultilingualText;
  values: MultilingualText;
  whoWeServe: MultilingualText;
  whyChooseUs: MultilingualText;
}

export interface ContactContent {
  title: MultilingualText;
  welcomeMessage: MultilingualText;
  email: string;
  phone1: string;
  phone2: string;
  fax: string;
  address: MultilingualText;
  city: MultilingualText;
  state: MultilingualText;
  hours: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    tiktok?: string;
  };
}

export interface PrivacySection {
  id: string;
  title: MultilingualText;
  content: MultilingualText;
}

export interface PrivacyPolicyContent {
  title: MultilingualText;
  introduction: MultilingualText;
  sections: PrivacySection[];
  lastUpdated: string;
}

export interface TermsSection {
  id: string;
  title: MultilingualText;
  content: MultilingualText;
}

export interface TermsOfServiceContent {
  title: MultilingualText;
  introduction: MultilingualText;
  sections: TermsSection[];
  additionalTerms: {
    modifications: MultilingualText;
    governing: MultilingualText;
    contact: MultilingualText;
  };
  lastUpdated: string;
}

// ============================================
// PARTNERS DATA
// ============================================
export const staticPartners: Partner[] = [
  {
    id: "air-algerie",
    name: {
      en: "Air Algérie",
      fr: "Air Algérie",
      ar: "الخطوط الجوية الجزائرية"
    },
    description: {
      en: "Air Algérie is the national airline of Algeria, providing domestic and international flight services. Our partnership enables seamless queue management at airport counters and boarding gates.",
      fr: "Air Algérie est la compagnie aérienne nationale d'Algérie, offrant des services de vols domestiques et internationaux. Notre partenariat permet une gestion fluide des files d'attente aux comptoirs d'aéroport et aux portes d'embarquement.",
      ar: "الخطوط الجوية الجزائرية هي شركة الطيران الوطنية للجزائر، تقدم خدمات الرحلات المحلية والدولية. شراكتنا تمكن من إدارة سلسة للطوابير في مكاتب المطار وبوابات الصعود."
    },
    logo: AirAlgerieLogo,
    industry: {
      en: "Aviation",
      fr: "Aviation",
      ar: "الطيران"
    },
    website: "https://www.airalgerie.dz"
  },
  {
    id: "bank-of-algeria",
    name: {
      en: "Bank of Algeria",
      fr: "Banque d'Algérie",
      ar: "بنك الجزائر"
    },
    description: {
      en: "The Bank of Algeria is the central bank of the country, responsible for monetary policy and financial stability. We help optimize customer service queues across all banking branches.",
      fr: "La Banque d'Algérie est la banque centrale du pays, responsable de la politique monétaire et de la stabilité financière. Nous aidons à optimiser les files d'attente du service client dans toutes les agences bancaires.",
      ar: "بنك الجزائر هو البنك المركزي للبلاد، المسؤول عن السياسة النقدية والاستقرار المالي. نساعد في تحسين طوابير خدمة العملاء في جميع الفروع المصرفية."
    },
    logo: BankOfAlgeriaLogo,
    industry: {
      en: "Banking & Finance",
      fr: "Banque & Finance",
      ar: "البنوك والمالية"
    }
  },
  {
    id: "djezzy",
    name: {
      en: "Djezzy",
      fr: "Djezzy",
      ar: "جيزي"
    },
    description: {
      en: "Djezzy is one of Algeria's leading telecommunications operators, providing mobile and internet services to millions of customers. Our solution manages customer queues at retail stores and service centers.",
      fr: "Djezzy est l'un des principaux opérateurs de télécommunications d'Algérie, fournissant des services mobiles et internet à des millions de clients. Notre solution gère les files d'attente dans les magasins et centres de service.",
      ar: "جيزي هي واحدة من أبرز شركات الاتصالات في الجزائر، توفر خدمات الهاتف المحمول والإنترنت لملايين العملاء. حلنا يدير طوابير العملاء في متاجر البيع بالتجزئة ومراكز الخدمة."
    },
    logo: DjezzyLogo,
    industry: {
      en: "Telecommunications",
      fr: "Télécommunications",
      ar: "الاتصالات"
    },
    website: "https://www.djezzy.dz"
  },
  {
    id: "sonatrach",
    name: {
      en: "Sonatrach",
      fr: "Sonatrach",
      ar: "سوناطراك"
    },
    description: {
      en: "Sonatrach is Algeria's national oil and gas company, one of the largest energy companies in Africa. We provide queue management solutions for administrative services and visitor management.",
      fr: "Sonatrach est la compagnie nationale pétrolière et gazière d'Algérie, l'une des plus grandes entreprises énergétiques d'Afrique. Nous fournissons des solutions de gestion de files d'attente pour les services administratifs et la gestion des visiteurs.",
      ar: "سوناطراك هي شركة النفط والغاز الوطنية الجزائرية، واحدة من أكبر شركات الطاقة في أفريقيا. نقدم حلول إدارة الطوابير للخدمات الإدارية وإدارة الزوار."
    },
    logo: SonatrachLogo,
    industry: {
      en: "Energy & Oil",
      fr: "Énergie & Pétrole",
      ar: "الطاقة والنفط"
    },
    website: "https://sonatrach.com"
  },
  {
    id: "mobilis",
    name: {
      en: "Mobilis",
      fr: "Mobilis",
      ar: "موبيليس"
    },
    description: {
      en: "Mobilis is Algeria's first mobile telecommunications operator, offering comprehensive mobile and digital services. Our partnership streamlines customer service across their nationwide network of stores.",
      fr: "Mobilis est le premier opérateur de télécommunications mobiles d'Algérie, offrant des services mobiles et numériques complets. Notre partenariat rationalise le service client dans leur réseau national de magasins.",
      ar: "موبيليس هي أول شركة اتصالات متنقلة في الجزائر، تقدم خدمات محمولة ورقمية شاملة. شراكتنا تبسط خدمة العملاء عبر شبكتها الوطنية من المتاجر."
    },
    logo: MobilisLogo,
    industry: {
      en: "Telecommunications",
      fr: "Télécommunications",
      ar: "الاتصالات"
    },
    website: "https://www.mobilis.dz"
  },
  {
    id: "ooredoo",
    name: {
      en: "Ooredoo Algeria",
      fr: "Ooredoo Algérie",
      ar: "أوريدو الجزائر"
    },
    description: {
      en: "Ooredoo Algeria is a major telecommunications provider offering mobile, fixed-line, and internet services. We help manage customer flow at their service points and retail locations.",
      fr: "Ooredoo Algérie est un fournisseur majeur de télécommunications offrant des services mobiles, fixes et internet. Nous aidons à gérer le flux de clients dans leurs points de service et points de vente.",
      ar: "أوريدو الجزائر هي مزود رئيسي للاتصالات تقدم خدمات المحمول والثابت والإنترنت. نساعد في إدارة تدفق العملاء في نقاط الخدمة ومواقع البيع بالتجزئة."
    },
    logo: OoredooLogo,
    industry: {
      en: "Telecommunications",
      fr: "Télécommunications",
      ar: "الاتصالات"
    },
    website: "https://www.ooredoo.dz"
  },
  {
    id: "sonelgaz",
    name: {
      en: "Sonelgaz",
      fr: "Sonelgaz",
      ar: "سونلغاز"
    },
    description: {
      en: "Sonelgaz is Algeria's national electricity and gas distribution company, serving millions of households and businesses. Our solution optimizes customer service queues at payment and service centers.",
      fr: "Sonelgaz est la société nationale de distribution d'électricité et de gaz d'Algérie, desservant des millions de foyers et d'entreprises. Notre solution optimise les files d'attente du service client dans les centres de paiement et de service.",
      ar: "سونلغاز هي الشركة الوطنية لتوزيع الكهرباء والغاز في الجزائر، تخدم ملايين المنازل والشركات. حلنا يحسن طوابير خدمة العملاء في مراكز الدفع والخدمة."
    },
    logo: SonelgazLogo,
    industry: {
      en: "Utilities",
      fr: "Services publics",
      ar: "المرافق"
    },
    website: "https://www.sonelgaz.dz"
  },
  {
    id: "cnas",
    name: {
      en: "CNAS",
      fr: "CNAS",
      ar: "الصندوق الوطني للتأمينات الاجتماعية"
    },
    description: {
      en: "CNAS (Caisse Nationale des Assurances Sociales) is Algeria's national social insurance fund, providing healthcare and social security services. We help manage visitor queues at their service centers nationwide.",
      fr: "La CNAS (Caisse Nationale des Assurances Sociales) est le fonds national d'assurance sociale d'Algérie, fournissant des services de santé et de sécurité sociale. Nous aidons à gérer les files d'attente des visiteurs dans leurs centres de service à travers le pays.",
      ar: "الصندوق الوطني للتأمينات الاجتماعية هو صندوق التأمين الاجتماعي الوطني في الجزائر، يقدم خدمات الرعاية الصحية والضمان الاجتماعي. نساعد في إدارة طوابير الزوار في مراكز خدمتهم على المستوى الوطني."
    },
    logo: CnasLogo,
    industry: {
      en: "Social Services",
      fr: "Services sociaux",
      ar: "الخدمات الاجتماعية"
    }
  }
];

// ============================================
// ABOUT US CONTENT
// ============================================
export const staticAboutUs: AboutUsContent = {
  title: {
    en: "About Toorrii",
    fr: "À propos de Toorrii",
    ar: "عن توريي"
  },
  content: {
    en: "Toorrii is an innovative queue management platform that transforms the waiting experience for businesses and their customers. Founded with the vision of eliminating frustrating wait times, we provide intelligent and efficient visitor flow management solutions that enhance customer satisfaction and operational efficiency.\n\nOur platform leverages cutting-edge technology including real-time monitoring, smart scheduling, and predictive analytics to help organizations of all sizes deliver exceptional service experiences. From government agencies to healthcare facilities, banks to telecommunications companies, Toorrii is trusted by Algeria's leading organizations.",
    fr: "Toorrii est une plateforme innovante de gestion des files d'attente qui transforme l'expérience d'attente pour les entreprises et leurs clients. Fondée avec la vision d'éliminer les temps d'attente frustrants, nous fournissons des solutions intelligentes et efficaces de gestion des flux de visiteurs qui améliorent la satisfaction client et l'efficacité opérationnelle.\n\nNotre plateforme exploite une technologie de pointe incluant la surveillance en temps réel, la planification intelligente et l'analyse prédictive pour aider les organisations de toutes tailles à offrir des expériences de service exceptionnelles. Des agences gouvernementales aux établissements de santé, des banques aux entreprises de télécommunications, Toorrii est approuvé par les principales organisations algériennes.",
    ar: "توريي هي منصة مبتكرة لإدارة الطوابير تحول تجربة الانتظار للشركات وعملائها. تأسست برؤية القضاء على أوقات الانتظار المحبطة، نقدم حلولاً ذكية وفعالة لإدارة تدفق الزوار تعزز رضا العملاء والكفاءة التشغيلية.\n\nتستفيد منصتنا من التكنولوجيا المتطورة بما في ذلك المراقبة في الوقت الفعلي والجدولة الذكية والتحليلات التنبؤية لمساعدة المؤسسات من جميع الأحجام على تقديم تجارب خدمة استثنائية. من الوكالات الحكومية إلى مرافق الرعاية الصحية، من البنوك إلى شركات الاتصالات، توريي موثوق به من قبل المؤسسات الرائدة في الجزائر."
  },
  mission: {
    en: "Our mission is to simplify and optimize queue management to improve customer experience and operational efficiency for businesses. We believe that no one should waste valuable time waiting in line, and we're committed to making that vision a reality through innovative technology solutions.",
    fr: "Notre mission est de simplifier et d'optimiser la gestion des files d'attente pour améliorer l'expérience client et l'efficacité opérationnelle des entreprises. Nous croyons que personne ne devrait perdre un temps précieux à faire la queue, et nous nous engageons à concrétiser cette vision grâce à des solutions technologiques innovantes.",
    ar: "مهمتنا هي تبسيط وتحسين إدارة الطوابير لتحسين تجربة العملاء والكفاءة التشغيلية للشركات. نؤمن بأنه لا ينبغي لأحد أن يضيع وقتاً ثميناً في الانتظار في الطوابير، ونحن ملتزمون بتحقيق هذه الرؤية من خلال حلول تكنولوجية مبتكرة."
  },
  vision: {
    en: "To become the global reference in intelligent and accessible queue management solutions. We envision a world where waiting times are minimized, customer journeys are seamless, and businesses can focus on delivering value rather than managing crowds.",
    fr: "Devenir la référence mondiale en matière de solutions de gestion de files d'attente intelligentes et accessibles. Nous envisageons un monde où les temps d'attente sont minimisés, les parcours clients sont fluides, et les entreprises peuvent se concentrer sur la création de valeur plutôt que sur la gestion des foules.",
    ar: "أن نصبح المرجع العالمي في حلول إدارة الطوابير الذكية والمتاحة. نتصور عالماً تُقلل فيه أوقات الانتظار إلى الحد الأدنى، وتكون رحلات العملاء سلسة، ويمكن للشركات التركيز على تقديم القيمة بدلاً من إدارة الحشود."
  },
  values: {
    en: "Innovation: We constantly push boundaries to develop cutting-edge solutions.\nExcellence: We strive for the highest quality in everything we do.\nCustomer Satisfaction: Our clients' success is our success.\nTransparency: We believe in honest, open communication.\nCommitment: We are dedicated to our partners and their goals.",
    fr: "Innovation : Nous repoussons constamment les limites pour développer des solutions de pointe.\nExcellence : Nous visons la plus haute qualité dans tout ce que nous faisons.\nSatisfaction client : Le succès de nos clients est notre succès.\nTransparence : Nous croyons en une communication honnête et ouverte.\nEngagement : Nous sommes dévoués à nos partenaires et à leurs objectifs.",
    ar: "الابتكار: نتجاوز الحدود باستمرار لتطوير حلول متطورة.\nالتميز: نسعى لأعلى جودة في كل ما نقوم به.\nرضا العملاء: نجاح عملائنا هو نجاحنا.\nالشفافية: نؤمن بالتواصل الصادق والمفتوح.\nالالتزام: نحن مكرسون لشركائنا وأهدافهم."
  },
  whoWeServe: {
    en: "We serve a diverse range of organizations including government agencies, healthcare facilities, banks and financial institutions, telecommunications companies, utilities, educational institutions, and any establishment looking to optimize visitor management and reduce wait times.",
    fr: "Nous servons une gamme diversifiée d'organisations, notamment les agences gouvernementales, les établissements de santé, les banques et institutions financières, les entreprises de télécommunications, les services publics, les établissements d'enseignement, et tout établissement cherchant à optimiser la gestion des visiteurs et réduire les temps d'attente.",
    ar: "نخدم مجموعة متنوعة من المؤسسات بما في ذلك الوكالات الحكومية ومرافق الرعاية الصحية والبنوك والمؤسسات المالية وشركات الاتصالات والمرافق والمؤسسات التعليمية وأي مؤسسة تتطلع إلى تحسين إدارة الزوار وتقليل أوقات الانتظار."
  },
  whyChooseUs: {
    en: "Choose Toorrii for a reliable, intuitive, and customizable solution that adapts to your specific needs. We offer dedicated technical support, seamless integration capabilities, real-time analytics, and a proven track record with Algeria's most prestigious organizations. Our platform is designed to scale with your business while maintaining the highest standards of security and performance.",
    fr: "Choisissez Toorrii pour une solution fiable, intuitive et personnalisable qui s'adapte à vos besoins spécifiques. Nous offrons un support technique dédié, des capacités d'intégration transparentes, des analyses en temps réel et une expérience éprouvée avec les organisations les plus prestigieuses d'Algérie. Notre plateforme est conçue pour évoluer avec votre entreprise tout en maintenant les plus hauts standards de sécurité et de performance.",
    ar: "اختر توريي للحصول على حل موثوق وبديهي وقابل للتخصيص يتكيف مع احتياجاتك الخاصة. نقدم دعماً فنياً مخصصاً وقدرات تكامل سلسة وتحليلات في الوقت الفعلي وسجلاً حافلاً مع أكثر المؤسسات المرموقة في الجزائر. منصتنا مصممة للتوسع مع عملك مع الحفاظ على أعلى معايير الأمان والأداء."
  }
};

// ============================================
// CONTACT CONTENT
// ============================================
export const staticContact: ContactContent = {
  title: {
    en: "Contact Us",
    fr: "Contactez-Nous",
    ar: "اتصل بنا"
  },
  welcomeMessage: {
    en: "We're here to help! Whether you have questions about our queue management solutions, need technical support, or want to explore partnership opportunities, our dedicated team is ready to assist you. Reach out to us through any of the channels below.",
    fr: "Nous sommes là pour vous aider ! Que vous ayez des questions sur nos solutions de gestion de files d'attente, besoin d'un support technique, ou que vous souhaitiez explorer des opportunités de partenariat, notre équipe dédiée est prête à vous assister. Contactez-nous via l'un des canaux ci-dessous.",
    ar: "نحن هنا للمساعدة! سواء كانت لديك أسئلة حول حلول إدارة الطوابير لدينا، أو تحتاج إلى دعم فني، أو ترغب في استكشاف فرص الشراكة، فإن فريقنا المتفاني جاهز لمساعدتك. تواصل معنا عبر أي من القنوات أدناه."
  },
  email: "contact@toorrii.com",
  phone1: "+213 23 45 67 89",
  phone2: "+213 23 45 67 90",
  fax: "+213 23 45 67 91",
  address: {
    en: "123 Business District, Hydra",
    fr: "123 Quartier des Affaires, Hydra",
    ar: "123 حي الأعمال، حيدرة"
  },
  city: {
    en: "Algiers",
    fr: "Alger",
    ar: "الجزائر العاصمة"
  },
  state: {
    en: "Algiers Province",
    fr: "Wilaya d'Alger",
    ar: "ولاية الجزائر"
  },
  hours: "Sun - Thu: 8:00 AM - 5:00 PM",
  socialLinks: {
    facebook: "https://facebook.com/toorrii",
    instagram: "https://instagram.com/toorrii",
    linkedin: "https://linkedin.com/company/toorrii",
    twitter: "https://twitter.com/toorrii"
  }
};

// ============================================
// PRIVACY POLICY CONTENT
// ============================================
export const staticPrivacyPolicy: PrivacyPolicyContent = {
  title: {
    en: "Privacy Policy",
    fr: "Politique de Confidentialité",
    ar: "سياسة الخصوصية"
  },
  introduction: {
    en: "At Toorrii, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our queue management platform and services. Please read this policy carefully to understand our practices regarding your personal data.",
    fr: "Chez Toorrii, nous nous engageons à protéger votre vie privée et à assurer la sécurité de vos informations personnelles. Cette Politique de Confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre plateforme de gestion de files d'attente et nos services. Veuillez lire attentivement cette politique pour comprendre nos pratiques concernant vos données personnelles.",
    ar: "في توريي، نحن ملتزمون بحماية خصوصيتك وضمان أمان معلوماتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا والكشف عن معلوماتك وحمايتها عند استخدامك لمنصة إدارة الطوابير وخدماتنا. يرجى قراءة هذه السياسة بعناية لفهم ممارساتنا المتعلقة ببياناتك الشخصية."
  },
  sections: [
    {
      id: "data-collection",
      title: {
        en: "Information We Collect",
        fr: "Informations que nous collectons",
        ar: "المعلومات التي نجمعها"
      },
      content: {
        en: "We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include your name, email address, phone number, organization details, and any other information you choose to provide. We also automatically collect certain information when you use our platform, including device information, IP address, and usage data.",
        fr: "Nous collectons les informations que vous nous fournissez directement, par exemple lorsque vous créez un compte, utilisez nos services ou nous contactez pour obtenir de l'aide. Cela peut inclure votre nom, adresse e-mail, numéro de téléphone, détails de l'organisation et toute autre information que vous choisissez de fournir. Nous collectons également automatiquement certaines informations lorsque vous utilisez notre plateforme, notamment les informations sur l'appareil, l'adresse IP et les données d'utilisation.",
        ar: "نجمع المعلومات التي تقدمها لنا مباشرة، مثل عند إنشاء حساب أو استخدام خدماتنا أو الاتصال بنا للحصول على الدعم. قد يشمل ذلك اسمك وعنوان بريدك الإلكتروني ورقم هاتفك وتفاصيل المؤسسة وأي معلومات أخرى تختار تقديمها. نجمع أيضاً تلقائياً بعض المعلومات عند استخدامك لمنصتنا، بما في ذلك معلومات الجهاز وعنوان IP وبيانات الاستخدام."
      }
    },
    {
      id: "data-use",
      title: {
        en: "How We Use Your Information",
        fr: "Comment nous utilisons vos informations",
        ar: "كيف نستخدم معلوماتك"
      },
      content: {
        en: "We use the information we collect to provide, maintain, and improve our services, process transactions and send related information, send technical notices and support messages, respond to your comments and questions, and analyze usage patterns to enhance user experience. We may also use your information to send promotional communications, though you can opt out at any time.",
        fr: "Nous utilisons les informations que nous collectons pour fournir, maintenir et améliorer nos services, traiter les transactions et envoyer les informations associées, envoyer des avis techniques et des messages d'assistance, répondre à vos commentaires et questions, et analyser les habitudes d'utilisation pour améliorer l'expérience utilisateur. Nous pouvons également utiliser vos informations pour envoyer des communications promotionnelles, bien que vous puissiez vous désinscrire à tout moment.",
        ar: "نستخدم المعلومات التي نجمعها لتوفير خدماتنا وصيانتها وتحسينها، ومعالجة المعاملات وإرسال المعلومات ذات الصلة، وإرسال الإشعارات الفنية ورسائل الدعم، والرد على تعليقاتك وأسئلتك، وتحليل أنماط الاستخدام لتعزيز تجربة المستخدم. قد نستخدم أيضاً معلوماتك لإرسال اتصالات ترويجية، على الرغم من أنه يمكنك إلغاء الاشتراك في أي وقت."
      }
    },
    {
      id: "data-security",
      title: {
        en: "Data Security",
        fr: "Sécurité des données",
        ar: "أمان البيانات"
      },
      content: {
        en: "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes encryption of data in transit and at rest, regular security assessments, access controls, and secure data centers. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.",
        fr: "Nous mettons en œuvre des mesures de sécurité conformes aux normes de l'industrie pour protéger vos informations personnelles contre l'accès non autorisé, la modification, la divulgation ou la destruction. Cela comprend le chiffrement des données en transit et au repos, des évaluations de sécurité régulières, des contrôles d'accès et des centres de données sécurisés. Cependant, aucune méthode de transmission sur Internet n'est sécurisée à 100 %, et nous ne pouvons garantir une sécurité absolue.",
        ar: "نطبق إجراءات أمنية متوافقة مع معايير الصناعة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الكشف أو التدمير. يشمل ذلك تشفير البيانات أثناء النقل وفي حالة السكون، والتقييمات الأمنية المنتظمة، وضوابط الوصول، ومراكز البيانات الآمنة. ومع ذلك، لا توجد طريقة نقل عبر الإنترنت آمنة بنسبة 100٪، ولا يمكننا ضمان الأمان المطلق."
      }
    },
    {
      id: "data-sharing",
      title: {
        en: "Information Sharing",
        fr: "Partage des informations",
        ar: "مشاركة المعلومات"
      },
      content: {
        en: "We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our platform, conducting our business, or servicing you. We may also disclose your information when required by law, to protect our rights, or in connection with a merger or acquisition.",
        fr: "Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager vos informations avec des prestataires de services qui nous aident à exploiter notre plateforme, à mener nos activités ou à vous servir. Nous pouvons également divulguer vos informations lorsque la loi l'exige, pour protéger nos droits, ou dans le cadre d'une fusion ou d'une acquisition.",
        ar: "لا نبيع أو نتاجر أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك مع مزودي الخدمات الذين يساعدوننا في تشغيل منصتنا أو إدارة أعمالنا أو خدمتك. قد نكشف أيضاً عن معلوماتك عندما يقتضي القانون ذلك، لحماية حقوقنا، أو فيما يتعلق بعملية اندماج أو استحواذ."
      }
    },
    {
      id: "your-rights",
      title: {
        en: "Your Rights",
        fr: "Vos droits",
        ar: "حقوقك"
      },
      content: {
        en: "You have the right to access, correct, or delete your personal information at any time. You can update your account information through your profile settings or contact us directly. You also have the right to object to processing, request data portability, and withdraw consent where applicable. To exercise these rights, please contact us using the information provided below.",
        fr: "Vous avez le droit d'accéder, de corriger ou de supprimer vos informations personnelles à tout moment. Vous pouvez mettre à jour les informations de votre compte via les paramètres de votre profil ou nous contacter directement. Vous avez également le droit de vous opposer au traitement, de demander la portabilité des données et de retirer votre consentement le cas échéant. Pour exercer ces droits, veuillez nous contacter en utilisant les informations fournies ci-dessous.",
        ar: "لديك الحق في الوصول إلى معلوماتك الشخصية أو تصحيحها أو حذفها في أي وقت. يمكنك تحديث معلومات حسابك من خلال إعدادات ملفك الشخصي أو الاتصال بنا مباشرة. لديك أيضاً الحق في الاعتراض على المعالجة وطلب نقل البيانات وسحب الموافقة عند الاقتضاء. لممارسة هذه الحقوق، يرجى الاتصال بنا باستخدام المعلومات المقدمة أدناه."
      }
    }
  ],
  lastUpdated: "2024-01-15"
};

// ============================================
// TERMS OF SERVICE CONTENT
// ============================================
export const staticTermsOfService: TermsOfServiceContent = {
  title: {
    en: "Terms of Service",
    fr: "Conditions d'Utilisation",
    ar: "شروط الخدمة"
  },
  introduction: {
    en: "Welcome to Toorrii. These Terms of Service govern your use of our queue management platform and services. By accessing or using our services, you agree to be bound by these terms. Please read them carefully before using our platform. If you do not agree to these terms, you may not access or use our services.",
    fr: "Bienvenue chez Toorrii. Ces Conditions d'Utilisation régissent votre utilisation de notre plateforme de gestion de files d'attente et de nos services. En accédant ou en utilisant nos services, vous acceptez d'être lié par ces conditions. Veuillez les lire attentivement avant d'utiliser notre plateforme. Si vous n'acceptez pas ces conditions, vous ne pouvez pas accéder ou utiliser nos services.",
    ar: "مرحباً بك في توريي. تحكم شروط الخدمة هذه استخدامك لمنصة إدارة الطوابير وخدماتنا. من خلال الوصول إلى خدماتنا أو استخدامها، فإنك توافق على الالتزام بهذه الشروط. يرجى قراءتها بعناية قبل استخدام منصتنا. إذا كنت لا توافق على هذه الشروط، فلا يجوز لك الوصول إلى خدماتنا أو استخدامها."
  },
  sections: [
    {
      id: "acceptance",
      title: {
        en: "Acceptance of Terms",
        fr: "Acceptation des conditions",
        ar: "قبول الشروط"
      },
      content: {
        en: "By creating an account or using any part of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service, our Privacy Policy, and any additional terms that may apply to specific features or services. If you are using our services on behalf of an organization, you represent and warrant that you have authority to bind that organization to these terms.",
        fr: "En créant un compte ou en utilisant une partie de nos services, vous reconnaissez avoir lu, compris et accepté d'être lié par ces Conditions d'Utilisation, notre Politique de Confidentialité et toutes conditions supplémentaires pouvant s'appliquer à des fonctionnalités ou services spécifiques. Si vous utilisez nos services au nom d'une organisation, vous déclarez et garantissez que vous avez l'autorité de lier cette organisation à ces conditions.",
        ar: "من خلال إنشاء حساب أو استخدام أي جزء من خدماتنا، فإنك تقر بأنك قد قرأت وفهمت ووافقت على الالتزام بشروط الخدمة هذه وسياسة الخصوصية الخاصة بنا وأي شروط إضافية قد تنطبق على ميزات أو خدمات محددة. إذا كنت تستخدم خدماتنا نيابة عن مؤسسة، فإنك تقر وتضمن أن لديك السلطة لإلزام تلك المؤسسة بهذه الشروط."
      }
    },
    {
      id: "user-responsibilities",
      title: {
        en: "User Responsibilities",
        fr: "Responsabilités de l'utilisateur",
        ar: "مسؤوليات المستخدم"
      },
      content: {
        en: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate. You must not use our services for any unlawful purpose or in any way that could damage, disable, or impair our platform.",
        fr: "Vous êtes responsable du maintien de la confidentialité de vos identifiants de compte et de toutes les activités qui se produisent sous votre compte. Vous acceptez de fournir des informations exactes, actuelles et complètes lors de l'inscription et de mettre à jour ces informations pour les maintenir exactes. Vous ne devez pas utiliser nos services à des fins illégales ou de toute manière qui pourrait endommager, désactiver ou altérer notre plateforme.",
        ar: "أنت مسؤول عن الحفاظ على سرية بيانات اعتماد حسابك وعن جميع الأنشطة التي تحدث تحت حسابك. توافق على تقديم معلومات دقيقة وحالية وكاملة أثناء التسجيل وتحديث هذه المعلومات للحفاظ على دقتها. يجب ألا تستخدم خدماتنا لأي غرض غير قانوني أو بأي طريقة يمكن أن تضر أو تعطل أو تضعف منصتنا."
      }
    },
    {
      id: "intellectual-property",
      title: {
        en: "Intellectual Property",
        fr: "Propriété intellectuelle",
        ar: "الملكية الفكرية"
      },
      content: {
        en: "All content, features, and functionality of our platform, including but not limited to text, graphics, logos, icons, images, audio clips, software, and data, are the exclusive property of Toorrii or our licensors and are protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.",
        fr: "Tout le contenu, les fonctionnalités et la fonctionnalité de notre plateforme, y compris mais sans s'y limiter le texte, les graphiques, les logos, les icônes, les images, les clips audio, les logiciels et les données, sont la propriété exclusive de Toorrii ou de nos concédants de licence et sont protégés par les lois internationales sur le droit d'auteur, les marques et autres propriétés intellectuelles. Vous ne pouvez pas reproduire, distribuer, modifier ou créer des œuvres dérivées sans notre consentement écrit préalable.",
        ar: "جميع المحتويات والميزات والوظائف الخاصة بمنصتنا، بما في ذلك على سبيل المثال لا الحصر النصوص والرسومات والشعارات والأيقونات والصور ومقاطع الصوت والبرامج والبيانات، هي ملكية حصرية لتوريي أو مرخصينا ومحمية بموجب قوانين حقوق النشر والعلامات التجارية والملكية الفكرية الدولية الأخرى. لا يجوز لك إعادة الإنتاج أو التوزيع أو التعديل أو إنشاء أعمال مشتقة دون موافقتنا الخطية المسبقة."
      }
    },
    {
      id: "limitation-liability",
      title: {
        en: "Limitation of Liability",
        fr: "Limitation de responsabilité",
        ar: "تحديد المسؤولية"
      },
      content: {
        en: "To the maximum extent permitted by law, Toorrii shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services. Our total liability shall not exceed the amount you paid us in the twelve months preceding the claim.",
        fr: "Dans toute la mesure permise par la loi, Toorrii ne sera pas responsable des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs, ou de toute perte de profits ou de revenus, encourus directement ou indirectement, ou de toute perte de données, d'utilisation, de clientèle ou d'autres pertes immatérielles résultant de votre utilisation de nos services. Notre responsabilité totale ne dépassera pas le montant que vous nous avez payé au cours des douze mois précédant la réclamation.",
        ar: "إلى أقصى حد يسمح به القانون، لن تكون توريي مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية، أو أي خسارة في الأرباح أو الإيرادات، سواء تكبدتها بشكل مباشر أو غير مباشر، أو أي خسارة في البيانات أو الاستخدام أو السمعة أو غيرها من الخسائر غير الملموسة الناتجة عن استخدامك لخدماتنا. لن تتجاوز مسؤوليتنا الإجمالية المبلغ الذي دفعته لنا في الاثني عشر شهراً السابقة للمطالبة."
      }
    },
    {
      id: "termination",
      title: {
        en: "Termination",
        fr: "Résiliation",
        ar: "الإنهاء"
      },
      content: {
        en: "We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms of Service. Upon termination, your right to use our services will immediately cease. All provisions of these terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.",
        fr: "Nous pouvons résilier ou suspendre votre compte et l'accès à nos services immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, y compris sans limitation si vous violez ces Conditions d'Utilisation. À la résiliation, votre droit d'utiliser nos services cessera immédiatement. Toutes les dispositions de ces conditions qui, par leur nature, devraient survivre à la résiliation, survivront, y compris les dispositions relatives à la propriété, les exclusions de garantie et les limitations de responsabilité.",
        ar: "يجوز لنا إنهاء أو تعليق حسابك والوصول إلى خدماتنا فوراً، دون إشعار مسبق أو مسؤولية، لأي سبب، بما في ذلك على سبيل المثال لا الحصر إذا انتهكت شروط الخدمة هذه. عند الإنهاء، سيتوقف حقك في استخدام خدماتنا فوراً. جميع أحكام هذه الشروط التي يجب بطبيعتها أن تبقى بعد الإنهاء ستبقى، بما في ذلك أحكام الملكية وإخلاء المسؤولية عن الضمانات وتحديد المسؤولية."
      }
    }
  ],
  additionalTerms: {
    modifications: {
      en: "We reserve the right to modify or replace these Terms of Service at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. Your continued use of our services after any changes constitutes your acceptance of the new terms.",
      fr: "Nous nous réservons le droit de modifier ou de remplacer ces Conditions d'Utilisation à tout moment à notre seule discrétion. Si une révision est importante, nous fournirons un préavis d'au moins 30 jours avant l'entrée en vigueur des nouvelles conditions. Votre utilisation continue de nos services après tout changement constitue votre acceptation des nouvelles conditions.",
      ar: "نحتفظ بالحق في تعديل أو استبدال شروط الخدمة هذه في أي وقت وفقاً لتقديرنا الخاص. إذا كانت المراجعة جوهرية، سنقدم إشعاراً قبل 30 يوماً على الأقل من دخول أي شروط جديدة حيز التنفيذ. استمرارك في استخدام خدماتنا بعد أي تغييرات يشكل قبولك للشروط الجديدة."
    },
    governing: {
      en: "These Terms of Service shall be governed by and construed in accordance with the laws of Algeria, without regard to its conflict of law provisions. Any disputes arising from or relating to these terms shall be resolved exclusively in the courts of Algiers, Algeria.",
      fr: "Ces Conditions d'Utilisation seront régies et interprétées conformément aux lois de l'Algérie, sans égard à ses dispositions en matière de conflit de lois. Tout litige découlant de ou lié à ces conditions sera résolu exclusivement devant les tribunaux d'Alger, Algérie.",
      ar: "تخضع شروط الخدمة هذه وتُفسر وفقاً لقوانين الجزائر، بغض النظر عن أحكام تعارض القوانين. أي نزاعات ناشئة عن هذه الشروط أو متعلقة بها يتم حلها حصرياً في محاكم الجزائر العاصمة، الجزائر."
    },
    contact: {
      en: "If you have any questions about these Terms of Service, please contact us at legal@toorrii.com or through the contact information provided on our website. We are committed to resolving any concerns you may have.",
      fr: "Si vous avez des questions concernant ces Conditions d'Utilisation, veuillez nous contacter à legal@toorrii.com ou via les coordonnées fournies sur notre site web. Nous nous engageons à résoudre toutes vos préoccupations.",
      ar: "إذا كانت لديك أي أسئلة حول شروط الخدمة هذه، يرجى الاتصال بنا على legal@toorrii.com أو من خلال معلومات الاتصال المقدمة على موقعنا الإلكتروني. نحن ملتزمون بحل أي مخاوف قد تكون لديك."
    }
  },
  lastUpdated: "2024-01-15"
};

// Helper function to get translated text
export const getStaticTranslation = (
  field: MultilingualText,
  language: 'en' | 'fr' | 'ar'
): string => {
  return field[language] || field.en || '';
};

// ============================================
// PUBLIC PAGE EXPORTS (for hooks compatibility)
// ============================================
import { AboutUsData } from "@/types/aboutUs";
import { PrivacyPolicyData } from "@/types/privacyPolicy";
import { TermsOfServiceData } from "@/types/termsOfService";
import { ContactData } from "@/types/contact";

export const staticAboutUsPublic: AboutUsData = {
  titre: [
    { lang: "fr", value: "À Propos de Toorrii" },
    { lang: "ar", value: "عن توريي" },
    { lang: "en", value: "About Toorrii" }
  ],
  slogan: [
    { lang: "fr", value: "Votre temps est précieux, Toorrii le protège." },
    { lang: "ar", value: "وقتك ثمين، توريي يحميه." },
    { lang: "en", value: "Your time is precious, Toorrii protects it." }
  ],
  contenu: [
    { lang: "fr", value: staticAboutUs.content.fr },
    { lang: "ar", value: staticAboutUs.content.ar },
    { lang: "en", value: staticAboutUs.content.en }
  ],
  mission: [
    { lang: "fr", value: staticAboutUs.mission.fr },
    { lang: "ar", value: staticAboutUs.mission.ar },
    { lang: "en", value: staticAboutUs.mission.en }
  ],
  vision: [
    { lang: "fr", value: staticAboutUs.vision.fr },
    { lang: "ar", value: staticAboutUs.vision.ar },
    { lang: "en", value: staticAboutUs.vision.en }
  ],
  valeurs: [
    { lang: "fr", value: staticAboutUs.values.fr },
    { lang: "ar", value: staticAboutUs.values.ar },
    { lang: "en", value: staticAboutUs.values.en }
  ],
  pourquoi_choisir_nous: [
    { lang: "fr", value: staticAboutUs.whyChooseUs.fr },
    { lang: "ar", value: staticAboutUs.whyChooseUs.ar },
    { lang: "en", value: staticAboutUs.whyChooseUs.en }
  ],
  qui_nous_servons: [
    { lang: "fr", value: staticAboutUs.whoWeServe.fr },
    { lang: "ar", value: staticAboutUs.whoWeServe.ar },
    { lang: "en", value: staticAboutUs.whoWeServe.en }
  ],
  version: 1,
  active: true
};

export const staticPrivacyPolicyPublic: PrivacyPolicyData = {
  politique_id: "privacy-001",
  titre: {
    fr: staticPrivacyPolicy.title.fr,
    ar: staticPrivacyPolicy.title.ar,
    en: staticPrivacyPolicy.title.en
  },
  contenu: {
    fr: staticPrivacyPolicy.introduction.fr + "\n\n" + staticPrivacyPolicy.sections.map(s => `## ${s.title.fr}\n\n${s.content.fr}`).join("\n\n"),
    ar: staticPrivacyPolicy.introduction.ar + "\n\n" + staticPrivacyPolicy.sections.map(s => `## ${s.title.ar}\n\n${s.content.ar}`).join("\n\n"),
    en: staticPrivacyPolicy.introduction.en + "\n\n" + staticPrivacyPolicy.sections.map(s => `## ${s.title.en}\n\n${s.content.en}`).join("\n\n")
  },
  version: 1,
  active: true,
  date_creation: staticPrivacyPolicy.lastUpdated
};

export const staticTermsOfServicePublic: TermsOfServiceData = {
  condition_id: "terms-001",
  titre: {
    fr: staticTermsOfService.title.fr,
    ar: staticTermsOfService.title.ar,
    en: staticTermsOfService.title.en
  },
  contenu: {
    fr: staticTermsOfService.introduction.fr + "\n\n" + staticTermsOfService.sections.map(s => `## ${s.title.fr}\n\n${s.content.fr}`).join("\n\n"),
    ar: staticTermsOfService.introduction.ar + "\n\n" + staticTermsOfService.sections.map(s => `## ${s.title.ar}\n\n${s.content.ar}`).join("\n\n"),
    en: staticTermsOfService.introduction.en + "\n\n" + staticTermsOfService.sections.map(s => `## ${s.title.en}\n\n${s.content.en}`).join("\n\n")
  },
  version: 1,
  active: true,
  date_creation: staticTermsOfService.lastUpdated
};

export const staticContactPublic: ContactData = {
  titre: {
    fr: staticContact.title.fr,
    ar: staticContact.title.ar,
    en: staticContact.title.en
  },
  email: staticContact.email,
  telephone_1: staticContact.phone1,
  telephone_2: staticContact.phone2,
  telephone_fixe: staticContact.fax,
  adresse: {
    fr: staticContact.address.fr,
    ar: staticContact.address.ar,
    en: staticContact.address.en
  },
  ville: {
    fr: staticContact.city.fr,
    ar: staticContact.city.ar,
    en: staticContact.city.en
  },
  wilaya: {
    fr: staticContact.state.fr,
    ar: staticContact.state.ar,
    en: staticContact.state.en
  },
  horaires: staticContact.hours,
  site_web: "https://www.toorrii.com",
  facebook: staticContact.socialLinks.facebook,
  instagram: staticContact.socialLinks.instagram,
  tiktok: staticContact.socialLinks.tiktok,
  linkedin: staticContact.socialLinks.linkedin,
  x: staticContact.socialLinks.twitter,
  message_acceuil: {
    fr: staticContact.welcomeMessage.fr,
    ar: staticContact.welcomeMessage.ar,
    en: staticContact.welcomeMessage.en
  }
};
