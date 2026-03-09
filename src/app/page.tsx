import { HeroSection } from '@/components/sections/HeroSection';
import { WhatWeDoSection } from '@/components/sections/WhatWeDoSection';
import { GridSection } from '@/components/sections/GridSection';
import { ClientsSection } from '@/components/sections/ClientsSection';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <WhatWeDoSection />
            <GridSection />
            <ClientsSection />
            <CTASection />
        </>
    );
}
