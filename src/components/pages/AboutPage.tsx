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
            className={`group relative rounded-2xl border border-white/7 bg-white/3 card-pad overflow-hidden transition-all duration-300 ${colors.border}`}
        >
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at top left, ${colors.glow}, transparent 60%)` }}
            />
            <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

            <div className={`mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${colors.gradient} text-white shadow-lg`}>
                <Icon className="w-6 h-6" />
            </div>

            <h3 className="font-display text-xl font-bold text-white mb-4">{value.title}</h3>
            <p className="text-base text-white/45 leading-relaxed">{value.description}</p>
        </motion.div>
    );
}

export function AboutPage() {
    const { about } = siteData;

    return (
        <>
            {/* Hero */}
            <section className="relative pt-40 pb-24 bg-background overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/8 blur-[120px] pointer-events-none" />

                <div className="relative container-section">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-accent/25 bg-accent/10"
                    >
                        <Users className="w-4 h-4 text-accent" />
                        <span className="text-xs font-bold text-accent tracking-widest uppercase">
                            About Jocata
                        </span>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.8 }}
                                className="font-display text-5xl md:text-7xl font-bold text-text-primary leading-tight mb-8"
                            >
                                {about.whoWeAre.title}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25, duration: 0.7 }}
                                className="text-xl text-text-secondary leading-relaxed"
                            >
                                {about.whoWeAre.description}
                            </motion.p>
                        </div>

                        {/* Decorative panel */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="relative rounded-[2.5rem] border border-border-color bg-surface-color p-12 overflow-hidden shadow-2xl shadow-accent/5"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 blur-[100px]" />
                            <div className="grid grid-cols-2 gap-6 relative">
                                {[
                                    { label: 'Founded', value: '2010' },
                                    { label: 'Clients', value: '20+' },
                                    { label: 'Team Members', value: '200+' },
                                    { label: 'Transactions/yr', value: '5B+' },
                                ].map((s) => (
                                    <div
                                        key={s.label}
                                        className="rounded-3xl border border-border-color bg-background/50 backdrop-blur-md p-6 text-center shadow-sm"
                                    >
                                        <div className="font-display text-3xl font-bold gradient-text mb-1">{s.value}</div>
                                        <div className="text-sm font-bold text-text-muted uppercase tracking-wider">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <Section className="section-py bg-background">
                <SectionHeader
                    eyebrow="Our Values"
                    title={<>What Drives <span className="gradient-text">Everything We Do</span></>}
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-cards"
                >
                    {about.values.map((value, index) => {
                        const Icon = iconMap[value.icon] || Zap;
                        const colors = valueColors[index % valueColors.length];
                        return (
                            <motion.div
                                key={value.id}
                                variants={staggerItem}
                                whileHover={{ y: -6 }}
                                transition={{ duration: 0.3 }}
                                className={`group relative rounded-[2rem] border border-border-color bg-surface-color card-pad overflow-hidden transition-all duration-300 hover:border-accent/30 shadow-sm hover:shadow-xl hover:shadow-accent/5`}
                            >
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                                    style={{ background: `radial-gradient(circle at top left, ${colors.glow}, transparent 60%)` }}
                                />
                                <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

                                <div className={`mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.gradient} text-white shadow-lg`}>
                                    <Icon className="w-7 h-7" />
                                </div>

                                <h3 className="font-display text-2xl font-bold text-text-primary mb-5">{value.title}</h3>
                                <p className="text-base text-text-secondary leading-relaxed font-medium">{value.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </Section>

            {/* Team */}
            <Section className="section-py bg-surface-color">
                <div className="absolute inset-0 bg-grid opacity-20" />
                <SectionHeader
                    eyebrow="Our Team"
                    title={<>The People <span className="gradient-text">Behind Jocata</span></>}
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-cards"
                >
                    {about.team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            variants={staggerItem}
                            className="group text-center"
                        >
                            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-500 mx-auto mb-6 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-[0_0_30px_rgba(124,109,250,0.4)] transition-all duration-300">
                                {getInitials(member.name)}
                            </div>
                            <div className="text-lg font-bold text-text-primary leading-tight mb-1">{member.name}</div>
                            <div className="text-sm font-bold text-text-muted uppercase tracking-widest">{member.role}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </Section>

            {/* Working Here */}
            <Section className="section-py bg-background">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative rounded-[2.5rem] border border-border-color bg-gradient-to-br from-amber-500/5 to-orange-500/5 overflow-hidden card-pad-lg shadow-2xl shadow-orange-500/5"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-orange-500/8 blur-[100px]" />
                    <div className="relative max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-amber-500/25 bg-amber-500/10">
                            <Zap className="w-4 h-4 text-orange-500" />
                            <span className="text-xs font-bold text-orange-500 tracking-widest uppercase">
                                {about.workingHere.title}
                            </span>
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
                            Life at Jocata
                        </h2>
                        <p className="text-xl text-text-secondary leading-relaxed font-medium">{about.workingHere.description}</p>
                    </div>
                </motion.div>
            </Section>

            <ContactCTASection />
        </>
    );
}
