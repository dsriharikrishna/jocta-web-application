'use client';

import { motion } from 'framer-motion';
import { Users, Zap, Handshake, Lightbulb, Target } from 'lucide-react';
import { siteData } from '@/data/content';
import { Section, SectionHeader } from '@/components/ui/Section';
import { ContactCTASection } from '@/components/sections/CTASection';
import { staggerContainer, staggerItem } from '@/animations/variants';
import { getInitials } from '@/utils';
import type { ValueItem } from '@/types';

const iconMap: Record<string, React.ElementType> = {
    Zap, Handshake: Handshake || Users, Lightbulb, Target, Users,
};

const valueColors = [
    { gradient: 'from-violet-500 to-purple-700', glow: 'rgba(124,109,250,0.15)', border: 'hover:border-violet-500/25' },
    { gradient: 'from-blue-500 to-cyan-600', glow: 'rgba(6,182,212,0.15)', border: 'hover:border-cyan-500/25' },
    { gradient: 'from-amber-400 to-orange-500', glow: 'rgba(244,156,42,0.15)', border: 'hover:border-amber-500/25' },
    { gradient: 'from-emerald-400 to-teal-600', glow: 'rgba(52,211,153,0.15)', border: 'hover:border-emerald-500/25' },
    { gradient: 'from-pink-500 to-rose-600', glow: 'rgba(236,72,153,0.15)', border: 'hover:border-pink-500/25' },
];

function ValueCard({ value, index }: { value: ValueItem; index: number }) {
    const Icon = iconMap[value.icon] || Zap;
    const colors = valueColors[index % valueColors.length];

    return (
        <motion.div
            variants={staggerItem}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className={`group relative rounded-2xl border border-white/7 bg-white/3 p-7 overflow-hidden transition-all duration-300 ${colors.border}`}
        >
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at top left, ${colors.glow}, transparent 60%)` }}
            />
            <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

            <div className={`mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} text-white`}>
                <Icon className="w-5 h-5" />
            </div>

            <h3 className="font-display text-base font-bold text-white mb-3">{value.title}</h3>
            <p className="text-sm text-white/45 leading-relaxed">{value.description}</p>
        </motion.div>
    );
}

export function AboutPage() {
    const { about } = siteData;

    return (
        <>
            {/* Hero */}
            <section className="relative pt-36 pb-24 bg-[#030305] overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/8 blur-[120px] pointer-events-none" />

                <div className="relative container-section">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-violet-500/25 bg-violet-500/8"
                    >
                        <Users className="w-3.5 h-3.5 text-violet-400" />
                        <span className="text-xs font-medium text-violet-300 tracking-wider uppercase">
                            About Jocata
                        </span>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
                            >
                                {about.whoWeAre.title}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25 }}
                                className="text-base text-white/50 leading-relaxed"
                            >
                                {about.whoWeAre.description}
                            </motion.p>
                        </div>

                        {/* Decorative panel */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="relative rounded-3xl border border-white/8 bg-white/3 p-10 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-violet-600/10 blur-3xl" />
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: 'Founded', value: '2010' },
                                    { label: 'Clients', value: '20+' },
                                    { label: 'Team Members', value: '200+' },
                                    { label: 'Transactions/yr', value: '5B+' },
                                ].map((s) => (
                                    <div
                                        key={s.label}
                                        className="rounded-2xl border border-white/6 bg-white/3 p-5 text-center"
                                    >
                                        <div className="font-display text-2xl font-bold gradient-text">{s.value}</div>
                                        <div className="text-xs text-white/30 mt-1">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <Section className="section-py bg-[#030305]">
                <SectionHeader
                    eyebrow="Our Values"
                    title={<>What Drives <span className="gradient-text">Everything We Do</span></>}
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {about.values.map((value, index) => (
                        <ValueCard key={value.id} value={value} index={index} />
                    ))}
                </motion.div>
            </Section>

            {/* Team */}
            <Section className="section-py bg-[#030305]">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <SectionHeader
                    eyebrow="Our Team"
                    title={<>The People <span className="gradient-text">Behind Jocata</span></>}
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5"
                >
                    {about.team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            variants={staggerItem}
                            className="group text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 mx-auto mb-4 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:shadow-[0_0_30px_rgba(124,109,250,0.4)] transition-shadow duration-300">
                                {getInitials(member.name)}
                            </div>
                            <div className="text-sm font-semibold text-white/80 leading-tight">{member.name}</div>
                            <div className="text-xs text-white/35 mt-1 leading-snug">{member.role}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </Section>

            {/* Working Here */}
            <Section className="section-py bg-[#030305]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative rounded-3xl border border-white/8 bg-gradient-to-br from-amber-500/8 to-orange-500/5 overflow-hidden p-10 md:p-16"
                >
                    <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-amber-500/8 blur-3xl" />
                    <div className="relative max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-amber-500/25 bg-amber-500/8">
                            <Zap className="w-3.5 h-3.5 text-amber-400" />
                            <span className="text-xs font-medium text-amber-300 tracking-wider uppercase">
                                {about.workingHere.title}
                            </span>
                        </div>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                            Life at Jocata
                        </h2>
                        <p className="text-white/50 leading-relaxed">{about.workingHere.description}</p>
                    </div>
                </motion.div>
            </Section>

            <ContactCTASection />
        </>
    );
}
