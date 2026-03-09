// Navigation Types
export interface NavItem {
    href: string;
    label: string;
}

// Company Types
export interface CompanyInfo {
    name: string;
    tagline: string;
    description: string;
    phone: string;
    email: string;
    location: string;
}

// Home Page Types
export interface HeroPillar {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface GridLayer {
    id: string;
    title: string;
    subtitle: string;
    items: string[];
    description: string;
}

export interface StatItem {
    value: string;
    label: string;
}

export interface HomeData {
    hero: {
        headline: string;
        accent: string;
        subheadline: string;
        cta: string;
    };
    whatWeDo: {
        title: string;
        description: string;
        pillars: HeroPillar[];
    };
    grid: {
        title: string;
        subtitle: string;
        description: string;
        layers: GridLayer[];
    };
    clients: {
        title: string;
        subtitle: string;
        names: string[];
    };
    testimonial: {
        quote: string;
        author: string;
        role: string;
    };
    careers: {
        title: string;
        headline: string;
        subtitle: string;
    };
    stats: StatItem[];
}

// Platform Page Types
export interface PlatformLayer {
    id: string;
    title: string;
    subtitle: string;
    items: string[];
}

export interface PlatformVertical {
    id: string;
    title: string;
    tags: string[];
    description: string;
}

export interface PlatformData {
    hero: {
        title: string;
        description: string;
        features: string[];
    };
    gridDescription: string;
    gridNote: string;
    layers: PlatformLayer[];
    verticals: PlatformVertical[];
    ai: {
        title: string;
        description: string;
        detail: string;
    };
    clients: {
        title: string;
        description: string;
    };
}

// About Page Types
export interface TeamMember {
    name: string;
    role: string;
}

export interface ValueItem {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface AboutData {
    whoWeAre: {
        title: string;
        description: string;
    };
    team: TeamMember[];
    workingHere: {
        title: string;
        description: string;
    };
    values: ValueItem[];
}

// Success Stories Types
export interface SuccessStory {
    id: string;
    client: string;
    project: string;
    highlights: string[];
    stat: { value: string; label: string };
    category: string;
}

// Careers Types
export interface Perk {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface JobOpening {
    id: string;
    title: string;
    category: string;
    experience: string;
    location: string;
    type: string;
    requirements: string[];
}

export interface CareersData {
    hero: {
        headline: string;
        subheadline: string;
        ctaText: string;
    };
    perks: Perk[];
    openings: JobOpening[];
}

// AI Scoring Types
export interface SwaraScore {
    id: string;
    title: string;
    subtitle: string;
    target: string;
    description: string;
    color: string;
}

export interface SwararPillar {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface FormField {
    id: string;
    label: string;
    type: string;
    required: boolean;
}

export interface AiScoringData {
    hero: {
        title: string;
        subtitle: string;
        description: string;
    };
    pillars: SwararPillar[];
    scores: SwaraScore[];
    form: {
        title: string;
        fields: FormField[];
    };
}

// Main Site Data Type
export interface SiteData {
    company: CompanyInfo;
    navbar: NavItem[];
    home: HomeData;
    platform: PlatformData;
    about: AboutData;
    successStories: SuccessStory[];
    careers: CareersData;
    aiScoring: AiScoringData;
}
