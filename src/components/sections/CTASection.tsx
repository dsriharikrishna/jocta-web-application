'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { siteData } from '@/data/content';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

interface CTASectionProps {
    title?: string;
    subtitle?: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
}

export function CTASection({
    title = "Excited about what we do and want to join our team?",
    subtitle = "We are always looking for great talent!",
    primaryCta = { label: 'View Openings', href: '/careers' },
    secondaryCta = { label: 'Learn More', href: '/about' },
}: CTASectionProps) {
    return (
        <Section className="section-py bg-[#030305]">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

            <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-violet-600/20 via-[#0a0a14] to-cyan-600/20 border border-white/8 card-pad-lg text-center"
            >
                {/* Orbs */}
                <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-violet-600/15 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-cyan-600/15 blur-3xl pointer-events-none" />

                {/* Grid inside */}
                <div className="absolute inset-0 bg-grid opacity-30" />

                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full border border-violet-500/25 bg-violet-500/8"
                    >
                        <span className="w-2 h-2 rounded-full bg-violet-400" />
                        <span className="text-xs font-medium text-violet-300 tracking-wider uppercase">
                            {siteData.home.careers.title}
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight"
                    >
                        {title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-5 text-lg text-white/50"
                    >
                        {subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-12 flex flex-wrap items-center justify-center gap-6"
                    >
                        <Link href={primaryCta.href}>
                            <Button size="lg" className="gap-2">
                                {primaryCta.label}
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href={secondaryCta.href}>
                            <Button variant="ghost" size="lg">
                                {secondaryCta.label}
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </Section>
    );
}

export function ContactCTASection() {
    return (
        <CTASection
            title="Ready to Transform Your Financial Services?"
            subtitle="Let's discuss how Jocata GRID™ can power your digital lending journey."
            primaryCta={{ label: 'Request Demo', href: '/contact' }}
            secondaryCta={{ label: 'Our Platform', href: '/platform' }}
        />
    );
}
