import type { SiteData } from '@/types';

export const siteData: SiteData = {
    company: {
        name: 'Jocata',
        tagline: 'Fintech Ecosystem of the Future',
        description: 'Innovative technology for end-to-end digital transformation of your financial services',
        phone: '+91 40-23385581',
        email: 'info@jocata.com',
        location: 'Jocata, Hyderabad',
    },

    navbar: [
        { href: '/', label: 'Home' },
        { href: '/platform', label: 'Our Platform' },
        { href: '/about', label: 'About Us' },
        { href: '/success-stories', label: 'Success Stories' },
        { href: '/careers', label: 'Careers' },
        { href: '/ai-scoring', label: 'AI-Scoring' },
        { href: '/contact', label: 'Contact Us' },
    ],

    home: {
        hero: {
            headline: 'Fintech Ecosystem of the',
            accent: 'Future.',
            subheadline: 'Innovative technology for end-to-end digital transformation of your financial services',
            cta: 'Request Demo',
        },
        whatWeDo: {
            title: 'What We Do',
            description: 'Our technology platform, Jocata GRID™, is a fast, adaptive digital ecosystem that handles millions of transactions per day, delivering solutions that drive business growth, streamline operations, provide risk-adjusted insights, and ensure regulatory compliance.',
            pillars: [
                {
                    id: 'business',
                    title: 'Business',
                    description: 'We boost your Retail and MSME / SME book expansion through real-time data acquisition across internal & external sources, smart underwriting and best in-class customer experience.',
                    icon: 'TrendingUp',
                },
                {
                    id: 'risk',
                    title: 'Risk',
                    description: 'We deliver real-time actionable insights, running relevant customer information through your on-boarding and credit policies configured on the platform.',
                    icon: 'Shield',
                },
                {
                    id: 'operations',
                    title: 'Operations',
                    description: 'Our configurable workflow engine brings all key operational stakeholders onto one unique virtual platform for efficient management and monitoring of business processes.',
                    icon: 'Settings',
                },
                {
                    id: 'compliance',
                    title: 'Compliance',
                    description: 'Our AI-based analytics engine helps you not only risk-categorise customers, but also monitor for and report potentially suspicious financial activity including money laundering and real-time fraud.',
                    icon: 'CheckCircle',
                },
            ],
        },
        grid: {
            title: 'Jocata GRID™',
            subtitle: 'with its plug-and-play capabilities, builds a robust ecosystem across all your business verticals.',
            description: 'From pulling in customer-related information from multiple sources like financial institutions, watchlists, statutory authorities, credit bureaus and social networks, to processing and analyzing it using the latest technologies, and finally, presenting it in the manner most convenient to your customers and you; the GRID does it all.',
            layers: [
                {
                    id: 'aggregation',
                    title: 'Aggregation',
                    subtitle: 'Do you need to source your data digitally?',
                    items: ['Identity', 'Address', 'Financial', 'Social', 'Legal', 'Custom'],
                    description: 'It Is a Stack of Digital APIs',
                },
                {
                    id: 'processing',
                    title: 'Processing',
                    subtitle: 'What do you want to do with your data?',
                    items: ['OCR', 'Underwrite', 'Workflow', 'Robotics', 'NLP'],
                    description: 'A Collection of Data Processing Engines',
                },
                {
                    id: 'analytics',
                    title: 'Analytics',
                    subtitle: 'What insights do you need from your data?',
                    items: ['Rule Engine', 'AI', 'Profiling', 'Visualisation'],
                    description: 'With Analytical Capabilities',
                },
                {
                    id: 'presentation',
                    title: 'Presentation',
                    subtitle: 'How do you want to view your data?',
                    items: ['IVR', 'Websites', 'Microsites', 'Apps'],
                    description: 'Delivered Seamlessly Across Multiple Channels',
                },
            ],
        },
        clients: {
            title: 'Our Clients',
            subtitle: 'Since 2010, we have successfully partnered with some of the largest financial institutions in their digital transformation journeys.',
            names: ['Axis Bank', 'Airtel Payments Bank', 'American Express', 'IndusInd Bank', 'RBL Bank', 'Tata Capital'],
        },
        testimonial: {
            quote: 'Jocata has been instrumental in transforming our digital lending capabilities. Their platform has significantly reduced our time-to-market and improved customer experience.',
            author: 'Mani Mulki',
            role: 'Chief Information Officer, Tata Capital Limited',
        },
        careers: {
            title: 'Careers',
            headline: 'Excited about what we do and want to join our team?',
            subtitle: 'We are always looking for great talent!',
        },
        stats: [
            { value: '5B+', label: 'Transactions/Year' },
            { value: '75%', label: 'False Positive Reduction' },
            { value: '85%', label: 'Faster Onboarding' },
            { value: '2010', label: 'Founded' },
        ],
    },

    platform: {
        hero: {
            title: 'One Platform, Multiple Apps',
            description: 'Jocata GRID is a sophisticated enterprise ecosystem technology platform that strives to provide an integrated real-time view of business, risk, operations and compliance.',
            features: ['Modular', 'Scalable', 'Flexible', 'Secure'],
        },
        gridDescription: 'It is designed as a multi-layered stack of technology capabilities that help financial institutions in their digital transformation initiatives, with each layer solving a specific challenge. Although the individual feature sets of the GRID are mapped to discrete products, its architecture allows for them to be deployed separately or all together or in specific combinations, depending on your solution requirements.',
        gridNote: 'The GRID plugs into your backend systems through a secure interface, and brings you the benefits of Jocata\'s cutting-edge software while substantially reducing upfront costs for training, setup, and infrastructure.',
        layers: [
            {
                id: 'aggregation',
                title: 'AGGREGATION',
                subtitle: 'It Is a Stack of Digital APIs',
                items: ['Identity', 'Address', 'Financial', 'Social', 'Legal', 'Custom'],
            },
            {
                id: 'processing',
                title: 'PROCESSING',
                subtitle: 'A Collection of Data Processing Engines',
                items: ['OCR', 'Underwrite', 'Workflow', 'Robotics', 'NLP'],
            },
            {
                id: 'analytics',
                title: 'ANALYTICS',
                subtitle: 'With Analytical Capabilities',
                items: ['Rule Engine', 'AI', 'Profiling', 'Visualisation'],
            },
            {
                id: 'presentation',
                title: 'PRESENTATION',
                subtitle: 'Delivered Seamlessly Across Multiple Channels',
                items: ['IVR', 'Websites', 'Microsites', 'Apps'],
            },
        ],
        verticals: [
            {
                id: 'business',
                title: 'Business',
                tags: ['Digital Lending', 'Digital Verification', 'TReDs'],
                description: 'We boost your Retail and MSME / SME book expansion through real-time data acquisition across internal & external sources, smart underwriting and best in-class customer experience.',
            },
            {
                id: 'risk',
                title: 'Risk',
                tags: ['Underwriting', 'Monitoring', 'Screening'],
                description: 'We deliver real-time actionable insights, running relevant customer information through your on-boarding and credit policies configured on the platform.',
            },
            {
                id: 'operations',
                title: 'Operations',
                tags: ['Data Analytics', 'Customer Onboarding', 'KYC Remediation'],
                description: 'Our configurable workflow engine brings all key operational stakeholders onto one unique virtual platform for efficient management and monitoring of business processes.',
            },
            {
                id: 'compliance',
                title: 'Compliance',
                tags: ['Financial Crime', 'Demonetization'],
                description: 'Our AI-based analytics engine helps you not only risk-categorise customers, but also monitor for and report potentially suspicious financial activity including money laundering and real-time fraud.',
            },
        ],
        ai: {
            title: 'How Jocata\'s AI Can Help You',
            description: 'We understand the importance of speed, accuracy, and cost efficiency in various aspects of banking, both internal and external. We harness the power of AI to help financial institutions improve customer experience, increase process efficiency and fight financial crime. Our AI solution works with existing systems, thereby requiring minimal changes.',
            detail: 'For example, to navigate increasingly complex AML compliance requirements, our platform includes an AI Ensemble that iteratively learns to identify complex patterns of anomalous behaviour by analysing huge amounts of data in real time. Using machine learning vs traditional rules-based processes efficiently cuts down costs and human involvement, saving you time and valuable resources without compromising regulatory obligations. Currently our model reduces false positives by over 75%.',
        },
        clients: {
            title: 'Axis Bank, Airtel Payments Bank, American Express, IndusInd Bank, RBL Bank',
            description: 'Find out more about how Jocata helped them achieve their specific digital transformation goals.',
        },
    },

    about: {
        whoWeAre: {
            title: 'Who We Are',
            description: 'Our name Jocata and our logo of birds flying in a V are inspired by the scientific name of a bird. Just as this formation helps birds save energy and reduce fatigue over long distances and through ever-changing environments, we aspire to help financial institutions run more smoothly by reducing overhead, automating processes and ensuring compliance with increasingly demanding consumer needs and complicated regulatory requirements.',
        },
        team: [
            { name: 'Prashant Muddu', role: 'Chief Executive Officer' },
            { name: 'Narasimhan V', role: 'Chief Financial Officer' },
            { name: 'Akshay Chopra', role: 'Chief Business Officer' },
            { name: 'Sundari Vedula', role: 'Chief Technology Officer' },
            { name: 'Karthigeyan S', role: 'Senior Director - Products' },
            { name: 'Anjali Jhajj', role: 'Director - Delivery' },
        ],
        workingHere: {
            title: 'Working Here',
            description: 'Even as Jocata has grown from a tiny startup in a one-room office to a leading FinTech firm in an expansive ultramodern space, the one constant has been the smart, talented and hardworking people here who focus on the singular aim of making our clients happy. While having a bit of fun, of course!',
        },
        values: [
            {
                id: 'build-fast',
                title: 'BUILD FAST, BUILD RIGHT',
                description: 'We balance risk taking and speed to market with thoughtful design and sound development practices. Our aim is to offer transformational tech that not only is responsive to market trends and other technologies but also has been evaluated for its impact on stakeholders.',
                icon: 'Zap',
            },
            {
                id: 'partnership',
                title: 'PARTNERSHIP',
                description: 'We embrace our client\'s challenges as our own and we work collaboratively to deliver value through the right solution, because their success is our success. Building a lasting partnership means that at all times we listen, are responsive and act with integrity and respect.',
                icon: 'Handshake',
            },
            {
                id: 'thoughtful',
                title: 'THOUGHTFUL BY DESIGN',
                description: 'We aim for thoughtfulness in everything we do. This should be felt by everyone we interact with – both internal and external.',
                icon: 'Lightbulb',
            },
            {
                id: 'own-it',
                title: 'OWN IT',
                description: 'Employees are empowered and encouraged to take initiative, get to work and make well-thought-out decisions that lead to the right results for the right reasons. We discourage stagnation and waiting to be told what to do.',
                icon: 'Target',
            },
            {
                id: 'one-jocata',
                title: 'ONE JOCATA',
                description: 'We are stronger when our team operates as one. Our wins (and losses) are a "we" thing. We are transparent and speak the truth without fear of offense or disagreement. We motivate and align our people with ongoing opportunities for success, development, and growth.',
                icon: 'Users',
            },
        ],
    },

    successStories: [
        {
            id: 'large-private-bank',
            client: 'Large Private Sector Bank',
            project: 'Digital Lending Platform for Retail and SME',
            highlights: [
                'End to End Digital Customer Experience and Middleware platform to digitize the Personal & SME lending space',
                'Single platform caters to multiple products powering significant loan book growth for the bank.',
                'Instant eligibility and disbursement of funds to customers via the platform.',
                'Multi-channel omnideployment across phone banking, website, internet banking and mobile banking.',
                'Integrated workflow, underwriting and record management platform.',
            ],
            stat: { value: '50%', label: 'Personal Loans via Digital' },
            category: 'Digital Lending',
        },
        {
            id: 'global-corporate-card',
            client: 'Leading Global Corporate Card Organisation',
            project: 'Digital Corporate and SME On-Boarding',
            highlights: [
                'Transformation from a manual to a complete digital experience.',
                'Ecosystem platform for on-boarding, screening, under-writing corporates.',
                '85% reduction in time taken for acquiring corporate card customers.',
                'Seamless integration with alternate trusted data sources for real time data aggregation and verification.',
                'Single Ecosystem platform for bank\'s Partners, Corporates and internal to bank teams.',
            ],
            stat: { value: '85%', label: 'Faster Customer Acquisition' },
            category: 'Digital Onboarding',
        },
        {
            id: 'digital-payment-bank',
            client: 'New-Age Digital Payment Bank',
            project: 'AML Compliance',
            highlights: [
                'AI and ML powered analytics platform to revamp and digitally transform AML Transaction Monitoring.',
                'Multi system integration to allow for a 360 degree view of the customer and their transactions.',
                'On-demand data visualisations for efficient alert review significantly reducing operational TATs.',
                'Platform delivery at scale to handle over 5 Billion transactions in a year.',
                'Comprehensive configuration capability inherent to the platform empowering higher flexibility.',
            ],
            stat: { value: '5B+', label: 'Transactions/Year' },
            category: 'AML Compliance',
        },
    ],

    careers: {
        hero: {
            headline: 'It takes an entire team working hard together to change the FinTech industry like we are.',
            subheadline: 'If you\'re a smart and passionate individual eager to make a difference, check out our openings and apply today!',
            ctaText: 'Working Here',
        },
        perks: [
            {
                id: 'salaries',
                title: 'Competitive Salaries',
                description: 'We take pride in rewarding great work with great compensation, and know what it takes to attract and keep the best talent.',
                icon: 'DollarSign',
            },
            {
                id: 'development',
                title: 'Professional Development',
                description: 'You get to work with the latest technologies for some of the biggest financial institutions in India, and have the chance to make a real difference.',
                icon: 'BookOpen',
            },
            {
                id: 'recognition',
                title: 'Rewards and Recognition',
                description: 'Anyone going above and beyond the normal expectations of their role is recognized and rewarded for their outstanding contribution.',
                icon: 'Award',
            },
            {
                id: 'vacation',
                title: 'Vacation and Leaves',
                description: 'Generous vacation and maternity/ paternity/ adoption leave. We believe you\'re at your professional best when you have a healthy work-life balance.',
                icon: 'Umbrella',
            },
            {
                id: 'team',
                title: 'Team Events',
                description: 'Festival celebrations, team outings, sports days, contests, snacks in the cafeteria - you\'ll always feel like part of the Jocata family.',
                icon: 'PartyPopper',
            },
            {
                id: 'medical',
                title: 'Medical Insurance',
                description: 'Comprehensive medical coverage for you and your dependents. Your health and that of your family is as much a priority for us as it is for you.',
                icon: 'HeartPulse',
            },
            {
                id: 'location',
                title: 'Great Location',
                description: 'Hyderabad is one of the top choices in India for young professionals — lakes, parks, amazing food options (including world-famous biryani), cafés, and live music scenes.',
                icon: 'MapPin',
            },
        ],
        openings: [
            {
                id: 'java-tech-leads',
                title: 'Java Tech Leads',
                category: 'Development',
                experience: '8-12 Years',
                location: 'Hyderabad',
                type: 'Full-time',
                requirements: [
                    'Exceptional knowledge in Core Java: OOPS, Collection Framework, Threads, and Exception Handling',
                    'Must have knowledge of J2EE: Servlets, JSPs, and MVC frameworks',
                    'Hands-on experience with web application frameworks: Struts 2.x, JSF, Spring MVC',
                    'Hands-on experience in Spring framework: Dependency Injection, IoC, MVC, AOP, and Connection pooling',
                    'Experience in Hibernate: ORM, portability, different mappings, annotations, transactions',
                    'Web related: jQuery, HTML, JavaScript, CSS, JSON',
                    'Database: MySQL, MSSQL, PostgreSQL and Oracle',
                ],
            },
        ],
    },

    aiScoring: {
        hero: {
            title: 'SWARA',
            subtitle: 'Behavioural Scores to Power Retail and MSME Lending',
            description: 'Jocata SWARA harnesses AI/ML-based scoring & analytics for deep behavioural insights on Retail individuals, Self-Employed individuals & MSMEs.',
        },
        pillars: [
            {
                id: 'underwriting',
                title: 'Credit Underwriting',
                description: 'Make informed decisions while underwriting credit applications.',
                icon: 'FileSearch',
            },
            {
                id: 'decisioning',
                title: 'Decisioning',
                description: 'Make better policy decisions such as rolling out new products and upselling to deserving and healthy customers.',
                icon: 'Brain',
            },
            {
                id: 'monitoring',
                title: 'Continuous Monitoring',
                description: 'Take precautionary and corrective measures by continuously monitoring to strategize exposure and collections at both, loan and portfolio levels.',
                icon: 'Activity',
            },
        ],
        scores: [
            {
                id: 'sme-dna',
                title: 'SME DNA',
                subtitle: 'GST-based Score',
                target: 'MSME Customers',
                description: 'Advanced scoring model leveraging GST data for deep insights into MSME creditworthiness and business health.',
                color: 'from-violet-500 to-purple-700',
            },
            {
                id: 'retail-persona',
                title: 'Retail Persona Score',
                subtitle: 'Banking-based Score',
                target: 'Salaried & Non-salaried Customers',
                description: 'Behavioral scoring model for retail customers using banking transaction patterns for comprehensive risk assessment.',
                color: 'from-cyan-500 to-blue-700',
            },
        ],
        form: {
            title: 'Request a Demo',
            fields: [
                { id: 'name', label: 'Name', type: 'text', required: true },
                { id: 'company', label: 'Company', type: 'text', required: true },
                { id: 'email', label: 'Email', type: 'email', required: true },
                { id: 'designation', label: 'Designation', type: 'text', required: true },
            ],
        },
    },
};
