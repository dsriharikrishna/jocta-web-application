'use client';

import { motion } from 'framer-motion';
import {
    DollarSign, BookOpen, Award, Umbrella, PartyPopper, HeartPulse, MapPin,
    Briefcase, MapPinIcon, Clock, ChevronDown, ChevronUp,
} from 'lucide-react';
import { useState } from 'react';
import { siteData } from '@/data/content';
import { Section, SectionHeader, Badge } from '@/components/ui/Section';
import { CTASection } from '@/components/sections/CTASection';
import { staggerContainer, staggerItem } from '@/animations/variants';
import type { Perk, JobOpening } from '@/types';

const iconMap: Record<string, React.ElementType> = {
    DollarSign, BookOpen, Award, Umbrella, PartyPopper, HeartPulse, MapPin,
};

const perkColors = [
    'from-violet-500 to-purple-700',
    'from-cyan-500 to-blue-600',
    'from-amber-400 to-orange-500',
    'from-emerald-400 to-teal-600',
    'from-pink-500 to-rose-600',
    'from-indigo-500 to-violet-600',
    'from-orange-400 to-red-500',
];

function PerkCard({ perk, index }: { perk: Perk; index: number }) {
    const Icon = iconMap[perk.icon] || Award;
    const gradient = perkColors[index % perkColors.length];

    return (
        <motion.div
            variants={staggerItem}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="group rounded-2xl border border-white/7 bg-white/3 card-pad overflow-hidden hover:border-white/14 transition-all duration-300"
        >
            <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} text-white mb-6 shadow-lg`}
            >
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-4">{perk.title}</h3>
            <p className="text-base text-white/45 leading-relaxed">{perk.description}</p>
        </motion.div>
    );
}

function JobCard({ job }: { job: JobOpening }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/7 bg-white/3 overflow-hidden"
        >
            <button
                onClick={() => setExpanded(!expanded)}
                className="w-full flex items-center justify-between gap-4 card-pad text-left hover:bg-white/3 transition-colors"
            >
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <Badge variant="violet">{job.category}</Badge>
                        <div className="flex items-center gap-1.5 text-xs text-white/40">
                            <MapPinIcon className="w-3.5 h-3.5" />
                            {job.location}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-white/40">
                            <Clock className="w-3.5 h-3.5" />
                            {job.type}
                        </div>
                    </div>
                    <h3 className="font-display text-lg font-bold text-white">{job.title}</h3>
                    <p className="text-sm text-white/40 mt-1">Experience: {job.experience}</p>
                </div>
                <div className="shrink-0">
                    {expanded ? (
                        <ChevronUp className="w-5 h-5 text-white/40" />
                    ) : (
                        <ChevronDown className="w-5 h-5 text-white/40" />
                    )}
                </div>
            </button>

            {expanded && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-white/6 card-pad-sm"
                >
                    <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
                        Requirements
                    </h4>
                    <ul className="space-y-3">
                        {job.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-sm text-white/55">
                                <div className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0 mt-2" />
                                {req}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6">
                        <button className="btn-primary text-sm px-6 py-3 rounded-xl">
                            Quick Apply
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
}

export function CareersPage() {
    const { careers } = siteData;

    return (
        <>
            {/* Hero */}
            <section className="relative pt-36 pb-24 bg-[#030305] overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[130px] pointer-events-none" />

                <div className="relative container-section text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-violet-500/25 bg-violet-500/8"
                    >
                        <Briefcase className="w-3.5 h-3.5 text-violet-400" />
                        <span className="text-xs font-medium text-violet-300 tracking-wider uppercase">
                            Careers
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto"
                    >
                        {careers.hero.headline}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="mt-6 text-base md:text-lg text-white/45 max-w-xl mx-auto"
                    >
                        {careers.hero.subheadline}
                    </motion.p>
                </div>
            </section>

            {/* Perks */}
            <Section className="section-py bg-[#030305]">
                <SectionHeader
                    eyebrow="Why Jocata?"
                    title={<>Perks of Working <span className="gradient-text">at Jocata</span></>}
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-cards"
                >
                    {careers.perks.slice(0, 8).map((perk, index) => (
                        <PerkCard key={perk.id} perk={perk} index={index} />
                    ))}
                </motion.div>
            </Section>

            {/* Openings */}
            <Section className="section-py bg-[#030305]">
                <div className="absolute inset-0 bg-grid opacity-25" />
                <SectionHeader
                    eyebrow="Open Roles"
                    title={<>Current <span className="gradient-text">Openings</span></>}
                    description="Find out more about what life at Jocata is like and apply today!"
                />

                <div className="space-y-4">
                    {careers.openings.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
            </Section>

            <CTASection
                title="Don't see a role that fits?"
                subtitle="We're always looking for exceptional talent. Send us your resume and we'll be in touch."
                primaryCta={{ label: 'Contact Us', href: '/contact' }}
                secondaryCta={{ label: 'Learn About Us', href: '/about' }}
            />
        </>
    );
}
