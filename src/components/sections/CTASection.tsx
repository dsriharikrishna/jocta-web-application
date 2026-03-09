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
        <Section className="section-py bg-background">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-color to-transparent" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-accent/10 via-surface-color/50 to-accent-2/10 border border-border-color card-pad-lg text-center shadow-2xl shadow-accent/5 max-w-6xl mx-auto"
            >
                {/* Orbs */}
                <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[150%] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[150%] rounded-full bg-accent-2/10 blur-[120px] pointer-events-none" />

                {/* Grid inside */}
                <div className="absolute inset-0 bg-grid opacity-30" />

                <div className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-10 rounded-full border border-accent/25 bg-accent/10 backdrop-blur-md shadow-xl shadow-accent/5"
                    >
                        <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                        <span className="text-sm font-bold text-accent tracking-[0.2em] uppercase">
                            Join Our Journey
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-text-primary max-w-4xl mx-auto leading-[0.95] tracking-tight mb-8"
                    >
                        {title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="mt-8 text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        {subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="mt-14 flex flex-wrap items-center justify-center gap-6"
                    >
                        <Link href={primaryCta.href}>
                            <Button size="lg" className="h-16 px-10 rounded-2xl text-xl shadow-2xl shadow-accent/20">
                                {primaryCta.label}
                                <ArrowRight className="ml-2 w-6 h-6" />
                            </Button>
                        </Link>
                        <Link href={secondaryCta.href}>
                            <Button variant="ghost" size="lg" className="h-16 px-10 rounded-2xl text-xl border-border-color bg-surface-color/50 backdrop-blur-sm">
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
