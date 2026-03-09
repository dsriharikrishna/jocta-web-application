'use client';

import { motion } from 'framer-motion';
import { Trophy, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import { siteData } from '@/data/content';
import { Section, SectionHeader, Badge } from '@/components/ui/Section';
import { ContactCTASection } from '@/components/sections/CTASection';
import { staggerContainer, staggerItem } from '@/animations/variants';
import type { SuccessStory } from '@/types';

const categoryColors: Record<string, string> = {
    'Digital Lending': 'violet',
    'Digital Onboarding': 'cyan',
    'AML Compliance': 'gold',
};

function StoryCard({ story, index }: { story: SuccessStory; index: number }) {
    const accent = index % 3 === 0
        ? 'from-violet-500 to-purple-700'
        : index % 3 === 1
            ? 'from-cyan-500 to-blue-600'
            : 'from-amber-400 to-orange-500';

    return (
        <motion.div
            variants={staggerItem}
            className="relative rounded-2xl border border-white/7 bg-white/3 overflow-hidden group hover:border-white/14 transition-all duration-300"
        >
            {/* Top accent */}
            <div className={`h-1 w-full bg-gradient-to-r ${accent}`} />

            <div className="card-pad">
                {/* Category + stat */}
                <div className="flex items-start justify-between mb-5">
                    <Badge variant={categoryColors[story.category] as 'violet' | 'cyan' | 'gold' ?? 'default'}>
                        {story.category}
                    </Badge>
                    <div className="text-right">
                        <div className={`font-display text-3xl font-bold bg-gradient-to-r ${accent} bg-clip-text text-transparent`}>
                            {story.stat.value}
                        </div>
                        <div className="text-sm text-white/35">{story.stat.label}</div>
                    </div>
                </div>

                {/* Client */}
                <div className="text-xs font-semibold text-white/35 uppercase tracking-widest mb-2">
                    {story.client}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-6 leading-tight">
                    {story.project}
                </h3>

                {/* Highlights */}
                <ul className="space-y-2.5">
                    {story.highlights.slice(0, 4).map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-white/50">
                            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            {h}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}

export function SuccessStoriesPage() {
    const { successStories } = siteData;

    return (
        <>
            {/* Hero */}
            <section className="relative pt-36 pb-24 bg-[#030305] overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-600/6 blur-[130px] pointer-events-none" />

                <div className="relative container-section text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-amber-500/25 bg-amber-500/8"
                    >
                        <Trophy className="w-3.5 h-3.5 text-amber-400" />
                        <span className="text-xs font-medium text-amber-300 tracking-wider uppercase">
                            Success Stories
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                    >
                        Real Results for{' '}
                        <span className="gradient-text-gold">Real Clients</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="mt-6 text-base md:text-lg text-white/45 max-w-xl mx-auto"
                    >
                        Since 2010, we have successfully partnered with some of the largest financial institutions in their digital transformation journeys.
                    </motion.p>
                </div>
            </section>

            {/* Overall Stats */}
            <Section className="pb-10 bg-[#030305]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-cards">
                    {[
                        { value: '50%', label: 'Loans via Digital' },
                        { value: '85%', label: 'Faster Onboarding' },
                        { value: '5B+', label: 'Transactions/Year' },
                        { value: '75%', label: 'Less False Positives' },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-2xl border border-white/7 bg-white/3 card-pad-sm text-center"
                        >
                            <div className="font-display text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                            <div className="text-xs text-white/35 font-medium uppercase tracking-wide">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Stories */}
            <Section className="section-py bg-[#030305]">
                <SectionHeader
                    eyebrow="Case Studies"
                    title={<>Transformations That <span className="gradient-text">Redefined Industries</span></>}
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-cards"
                >
                    {successStories.map((story, index) => (
                        <StoryCard key={story.id} story={story} index={index} />
                    ))}
                </motion.div>
            </Section>

            <ContactCTASection />
        </>
    );
}
