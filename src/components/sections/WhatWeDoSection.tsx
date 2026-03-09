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
            className="group relative rounded-2xl border border-white/7 bg-white/3 p-7 overflow-hidden hover:border-white/14 transition-all duration-300"
            style={{ '--glow': glow } as React.CSSProperties}
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
                className={`mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${accent} text-white shadow-lg`}
            >
                <Icon className="w-5 h-5" />
            </div>

            <h3 className="font-display text-lg font-bold text-white mb-3">
                {pillar.title}
            </h3>

            <p className="text-sm text-white/45 leading-relaxed mb-5">
                {pillar.description}
            </p>

            <Link
                href="/platform"
                className="inline-flex items-center gap-1 text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors group/link"
            >
                Learn More
                <ArrowRight className="w-3.5 h-3.5 -translate-x-0.5 group-hover/link:translate-x-0.5 transition-transform" />
            </Link>
        </motion.div>
    );
}

export function WhatWeDoSection() {
    const { pillars, title, description } = siteData.home.whatWeDo;

    return (
        <Section id="what-we-do" className="section-py bg-[#030305]">
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
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {pillars.map((pillar, index) => (
                    <PillarCard key={pillar.id} pillar={pillar} index={index} />
                ))}
            </motion.div>
        </Section>
    );
}
