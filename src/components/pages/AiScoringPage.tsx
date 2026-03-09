'use client';

import { motion } from 'framer-motion';
import { Brain, FileSearch, Activity, CheckCircle, Sparkles } from 'lucide-react';
import { siteData } from '@/data/content';
import { Section, SectionHeader } from '@/components/ui/Section';
import { ContactForm } from '@/components/sections/ContactForm';
import { staggerContainer, staggerItem } from '@/animations/variants';
import type { SwararPillar, SwaraScore } from '@/types';

const iconMap: Record<string, React.ElementType> = {
    FileSearch, Brain, Activity,
};

const pillarColors = [
    'from-violet-500 to-purple-700',
    'from-cyan-500 to-blue-600',
    'from-amber-400 to-orange-500',
];

function PillarCard({ pillar, index }: { pillar: SwararPillar; index: number }) {
    const Icon = iconMap[pillar.icon] || Brain;
    const gradient = pillarColors[index % pillarColors.length];

    return (
        <motion.div
            variants={staggerItem}
            whileHover={{ y: -5 }}
            className="group relative rounded-2xl border border-white/7 bg-white/3 p-8 overflow-hidden hover:border-white/14 transition-all duration-300"
        >
            <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
            <div className={`inline-flex items-center justify-center w-13 h-13 rounded-xl bg-gradient-to-br ${gradient} mb-6 shadow-lg`}>
                <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-display text-lg font-bold text-white mb-3">{pillar.title}</h3>
            <p className="text-sm text-white/45 leading-relaxed">{pillar.description}</p>
        </motion.div>
    );
}

function ScoreCard({ score }: { score: SwaraScore }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl border border-white/8 overflow-hidden p-8 md:p-10"
            style={{ background: 'rgba(255,255,255,0.02)' }}
        >
            {/* Gradient glow */}
            <div
                className={`absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${score.color}`}
            />

            <div className="relative">
                <div
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6 bg-gradient-to-r ${score.color}`}
                >
                    {score.target}
                </div>

                <div
                    className={`text-xs font-bold tracking-widest uppercase bg-gradient-to-r ${score.color} bg-clip-text text-transparent mb-1`}
                >
                    {score.subtitle}
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-5">
                    {score.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">{score.description}</p>

                {/* Visual scorecard mockup */}
                <div className="mt-7 rounded-xl border border-white/7 bg-white/4 p-5 space-y-3">
                    {['Credit Score', 'Behavioral Index', 'Risk Category'].map((label, i) => (
                        <div key={label} className="flex items-center gap-3">
                            <div className="text-xs text-white/35 w-32 shrink-0">{label}</div>
                            <div className="flex-1 h-1.5 rounded-full bg-white/8 overflow-hidden">
                                <div
                                    className={`h-full rounded-full bg-gradient-to-r ${score.color}`}
                                    style={{ width: `${[72, 85, 60][i]}%` }}
                                />
                            </div>
                            <div className="text-xs text-white/40 w-8 text-right">{[72, 85, 60][i]}%</div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export function AiScoringPage() {
    const { aiScoring } = siteData;

    return (
        <>
            {/* Hero */}
            <section className="relative pt-36 pb-24 bg-[#030305] overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
                <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-600/8 blur-[120px] pointer-events-none" />

                <div className="relative container-section text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-violet-500/25 bg-violet-500/8"
                    >
                        <Brain className="w-3.5 h-3.5 text-violet-400" />
                        <span className="text-xs font-medium text-violet-300 tracking-wider uppercase">
                            AI-Powered Scoring
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center gap-2 mb-4"
                    >
                        <Sparkles className="w-5 h-5 text-amber-400" />
                        <span className="font-display text-sm font-semibold tracking-widest text-amber-400 uppercase">
                            {aiScoring.hero.title}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                    >
                        {aiScoring.hero.subtitle}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 text-base md:text-lg text-white/45 max-w-xl mx-auto leading-relaxed"
                    >
                        {aiScoring.hero.description}
                    </motion.p>
                </div>
            </section>

            {/* Pillars */}
            <Section className="section-py bg-[#030305]">
                <SectionHeader
                    eyebrow="Core Capabilities"
                    title={<>Built to <span className="gradient-text">Drive Better Decisions</span></>}
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {aiScoring.pillars.map((pillar, index) => (
                        <PillarCard key={pillar.id} pillar={pillar} index={index} />
                    ))}
                </motion.div>
            </Section>

            {/* Score Cards */}
            <Section className="section-py bg-[#030305]">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <SectionHeader
                    eyebrow="Scoring Models"
                    title={<>Source, Watch and <span className="gradient-text">Risk Analyse</span></>}
                    description="Jocata SWARA harnesses AI/ML-based scoring & analytics for deep behavioural insights"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {aiScoring.scores.map((score) => (
                        <ScoreCard key={score.id} score={score} />
                    ))}
                </div>
            </Section>

            {/* Demo Request Form */}
            <Section className="section-py bg-[#030305]">
                <div className="relative rounded-3xl border border-white/8 bg-white/3 overflow-hidden p-10 md:p-14">
                    <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-violet-600/8 blur-3xl" />

                    <div className="relative grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-violet-500/25 bg-violet-500/8">
                                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                                <span className="text-xs font-medium text-violet-300 tracking-wider uppercase">
                                    Request Demo
                                </span>
                            </div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                                See SWARA in Action
                            </h2>
                            <p className="text-white/50 leading-relaxed mb-8 text-sm">
                                Experience how AI/ML-powered behavioural scoring can transform your lending decisions.
                            </p>

                            <div className="space-y-4">
                                {[
                                    'Reduce credit risk with AI insights',
                                    'Score MSME customers using GST data',
                                    'Continuous portfolio monitoring',
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                                        <span className="text-sm text-white/55">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <ContactForm
                            fields={aiScoring.form.fields}
                            title=""
                            subtitle=""
                        />
                    </div>
                </div>
            </Section>
        </>
    );
}
