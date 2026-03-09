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
            whileHover={{ y: -6 }}
            className="relative rounded-3xl border border-border-color bg-surface-color overflow-hidden group hover:border-accent/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-accent/5"
        >
            {/* Top accent */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${accent}`} />

            <div className="card-pad pb-10">
                {/* Category + stat */}
                <div className="flex items-start justify-between mb-8">
                    <Badge variant={categoryColors[story.category] as 'violet' | 'cyan' | 'gold' ?? 'default'}>
                        {story.category}
                    </Badge>
                    <div className="text-right">
                        <div className={`font-display text-4xl font-bold bg-gradient-to-r ${accent} bg-clip-text text-transparent`}>
                            {story.stat.value}
                        </div>
                        <div className="text-sm font-bold text-text-muted uppercase tracking-wider mt-1">{story.stat.label}</div>
                    </div>
                </div>

                {/* Client */}
                <div className="text-sm font-bold text-accent uppercase tracking-[0.2em] mb-3">
                    {story.client}
                </div>
                <h3 className="font-display text-2xl font-bold text-text-primary mb-8 leading-tight">
                    {story.project}
                </h3>

                {/* Highlights */}
                <ul className="space-y-4">
                    {story.highlights.slice(0, 4).map((h, i) => (
                        <li key={i} className="flex items-start gap-3.5 text-base text-text-secondary font-medium leading-relaxed">
                            <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
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
            <section className="relative pt-40 pb-24 bg-background overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold/10 blur-[130px] pointer-events-none" />

                <div className="relative container-section text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-gold/25 bg-gold/10"
                    >
                        <Trophy className="w-4 h-4 text-gold" />
                        <span className="text-xs font-bold text-gold tracking-widest uppercase">
                            Success Stories
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="font-display text-5xl md:text-7xl font-bold text-text-primary leading-tight"
                    >
                        Real Results for{' '}
                        <span className="gold-text">Real Clients</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.7 }}
                        className="mt-8 text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        Since 2010, we have successfully partnered with some of the largest financial institutions in their digital transformation journeys.
                    </motion.p>
                </div>
            </section>

            {/* Overall Stats */}
            <Section className="pb-12 bg-background">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-cards max-w-6xl mx-auto">
                    {[
                        { value: '50%', label: 'Loans via Digital' },
                        { value: '85%', label: 'Faster Onboarding' },
                        { value: '5B+', label: 'Transactions/Year' },
                        { value: '75%', label: 'Less False Positives' },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-3xl border border-border-color bg-surface-color p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <div className="font-display text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                            <div className="text-sm font-bold text-text-muted uppercase tracking-widest">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Stories */}
            <Section className="section-py bg-surface-color">
                <div className="absolute inset-0 bg-grid opacity-20" />
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
