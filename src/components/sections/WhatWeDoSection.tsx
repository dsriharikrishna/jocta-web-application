'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    TrendingUp, Shield, Settings, CheckCircle, ArrowRight,
} from 'lucide-react';
import { siteData } from '@/data/content';
import { Section, SectionHeader } from '@/components/ui/Section';
import { staggerContainer, staggerItem } from '@/animations/variants';
import type { HeroPillar } from '@/types';

const iconMap: Record<string, React.ElementType> = {
    TrendingUp,
    Shield,
    Settings,
    CheckCircle,
};

const accentMap: Record<string, string> = {
    business: 'from-violet-500 to-violet-700',
    risk: 'from-cyan-500 to-blue-600',
    operations: 'from-amber-400 to-orange-500',
    compliance: 'from-emerald-400 to-teal-600',
};

const glowMap: Record<string, string> = {
    business: 'rgba(124,109,250,0.15)',
    risk: 'rgba(6,182,212,0.15)',
    operations: 'rgba(244,156,42,0.15)',
    compliance: 'rgba(52,211,153,0.15)',
};

function PillarCard({ pillar, index }: { pillar: HeroPillar; index: number }) {
    const Icon = iconMap[pillar.icon] || TrendingUp;
    const accent = accentMap[pillar.id] || 'from-violet-500 to-cyan-500';
    const glow = glowMap[pillar.id] || 'rgba(124,109,250,0.15)';

    return (
        <motion.div
            variants={staggerItem}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group relative rounded-[2rem] border border-border-color bg-surface-color card-pad overflow-hidden transition-all duration-300 hover:border-accent/30 shadow-sm hover:shadow-xl hover:shadow-accent/5"
        >
            {/* Hover glow */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at top left, ${glow}, transparent 60%)` }}
            />

            {/* Top accent line */}
            <div
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />

            {/* Icon */}
            <div
                className={`mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg`}
            >
                <Icon className="w-7 h-7" />
            </div>

            <h3 className="font-display text-2xl font-bold text-text-primary mb-5">
                {pillar.title}
            </h3>

            <p className="text-base text-text-secondary leading-relaxed font-medium mb-8">
                {pillar.description}
            </p>

            <Link
                href="/platform"
                className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-accent-2 transition-colors group/link uppercase tracking-widest"
            >
                Learn More
                <ArrowRight className="w-5 h-5 -translate-x-1 group-hover/link:translate-x-0 transition-transform" />
            </Link>
        </motion.div>
    );
}

export function WhatWeDoSection() {
    const { pillars, description } = siteData.home.whatWeDo;

    return (
        <Section id="what-we-do" className="section-py bg-background">
            <SectionHeader
                eyebrow="What We Do"
                title={
                    <>
                        One Platform,{' '}
                        <span className="gradient-text">Four Pillars</span>
                    </>
                }
                description={description}
            />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-cards"
            >
                {pillars.map((pillar, index) => (
                    <PillarCard key={pillar.id} pillar={pillar} index={index} />
                ))}
            </motion.div>
        </Section>
    );
}
