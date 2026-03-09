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
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group rounded-3xl border border-border-color bg-surface-color card-pad overflow-hidden transition-all duration-300 hover:border-accent/30 shadow-sm hover:shadow-xl hover:shadow-accent/5"
        >
            <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} text-white mb-8 shadow-lg`}
            >
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="font-display text-2xl font-bold text-text-primary mb-5">{perk.title}</h3>
            <p className="text-base text-text-secondary leading-relaxed font-medium">{perk.description}</p>
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
            className="rounded-[2.5rem] border border-border-color bg-surface-color overflow-hidden shadow-sm hover:border-accent/20 transition-all duration-300"
        >
            <button
                onClick={() => setExpanded(!expanded)}
                className="w-full flex items-center justify-between gap-6 p-8 md:p-10 text-left hover:bg-accent/5 transition-colors"
            >
                <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4 flex-wrap">
                        <Badge variant="violet">{job.category}</Badge>
                        <div className="flex items-center gap-2 text-sm font-bold text-text-muted uppercase tracking-widest">
                            <MapPinIcon className="w-4 h-4 text-accent" />
                            {job.location}
                        </div>
                        <div className="flex items-center gap-2 text-sm font-bold text-text-muted uppercase tracking-widest">
                            <Clock className="w-4 h-4 text-accent" />
                            {job.type}
                        </div>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-text-primary mb-2">{job.title}</h3>
                    <p className="text-base font-bold text-text-muted">Experience: <span className="text-text-primary">{job.experience}</span></p>
                </div>
                <div className="shrink-0 p-3 rounded-full bg-accent/10 border border-accent/20">
                    {expanded ? (
                        <ChevronUp className="w-6 h-6 text-accent" />
                    ) : (
                        <ChevronDown className="w-6 h-6 text-accent" />
                    )}
                </div>
            </button>

            {expanded && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    className="border-t border-border-color p-8 md:p-10 bg-background/30 backdrop-blur-sm"
                >
                    <h4 className="text-sm font-bold text-text-primary uppercase tracking-widest mb-6 flex items-center gap-2">
                        <div className="w-8 h-1 bg-accent rounded-full" />
                        Requirements
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {job.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-3.5 text-base text-text-secondary leading-relaxed font-medium">
                                <div className="w-2 h-2 rounded-full bg-accent shrink-0 mt-2.5" />
                                {req}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10 pt-8 border-t border-border-color flex justify-end">
                        <button className="h-14 px-8 rounded-2xl bg-accent text-white font-bold text-lg shadow-xl shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-1 transition-all duration-300">
                            Apply for this Position
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
            <section className="relative pt-40 pb-24 bg-background overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/8 blur-[130px] pointer-events-none" />

                <div className="relative container-section text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-accent/25 bg-accent/10"
                    >
                        <Briefcase className="w-4 h-4 text-accent" />
                        <span className="text-xs font-bold text-accent tracking-widest uppercase">
                            Careers
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="font-display text-5xl md:text-7xl font-bold text-text-primary leading-tight max-w-5xl mx-auto"
                    >
                        {careers.hero.headline}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.7 }}
                        className="mt-8 text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        {careers.hero.subheadline}
                    </motion.p>
                </div>
            </section>

            {/* Perks */}
            <Section className="section-py bg-background">
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
            <Section className="section-py bg-surface-color">
                <div className="absolute inset-0 bg-grid opacity-20" />
                <SectionHeader
                    eyebrow="Open Roles"
                    title={<>Current <span className="gradient-text">Openings</span></>}
                    description="Find out more about what life at Jocata is like and apply today!"
                />

                <div className="space-y-6 max-w-5xl mx-auto">
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
