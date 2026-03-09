'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Database, Cpu, BarChart3, Monitor, CheckCircle, ArrowRight, Bot,
} from 'lucide-react';
import { siteData } from '@/data/content';
import { Section, SectionHeader, Badge } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ContactCTASection } from '@/components/sections/CTASection';
import { staggerContainer, staggerItem } from '@/animations/variants';

const layerIcons = [Database, Cpu, BarChart3, Monitor];
const layerColors = [
    { bg: 'from-violet-500 to-purple-700', text: 'text-violet-300', border: 'border-violet-500/20' },
    { bg: 'from-cyan-500 to-blue-600', text: 'text-cyan-300', border: 'border-cyan-500/20' },
    { bg: 'from-amber-400 to-orange-500', text: 'text-amber-300', border: 'border-amber-500/20' },
    { bg: 'from-emerald-400 to-teal-600', text: 'text-emerald-300', border: 'border-emerald-500/20' },
];

export function PlatformPage() {
    const { platform } = siteData;

    return (
        <>
            {/* Hero */}
            <section className="relative pt-36 pb-24 bg-[#030305] overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-violet-600/8 blur-[150px] pointer-events-none" />

                <div className="relative container-section text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-violet-500/25 bg-violet-500/8"
                    >
                        <Database className="w-3.5 h-3.5 text-violet-400" />
                        <span className="text-xs font-medium text-violet-300 tracking-wider uppercase">
                            Enterprise Platform
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                    >
                        {platform.hero.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.7 }}
                        className="mt-6 text-lg text-white/50 max-w-2xl mx-auto leading-relaxed"
                    >
                        {platform.hero.description}
                    </motion.p>

                    {/* Feature pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 flex flex-wrap justify-center gap-3"
                    >
                        {platform.hero.features.map((f) => (
                            <span
                                key={f}
                                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 bg-white/4 text-sm text-white/60"
                            >
                                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                                {f}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* GRID Layers */}
            <Section className="section-py bg-[#030305]">
                <SectionHeader
                    eyebrow="Architecture"
                    title={<>What Is <span className="gradient-text">Jocata GRID™?</span></>}
                    description={platform.gridDescription}
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-cards"
                >
                    {platform.layers.map((layer, index) => {
                        const Icon = layerIcons[index];
                        const colors = layerColors[index];
                        return (
                            <motion.div
                                key={layer.id}
                                variants={staggerItem}
                                whileHover={{ y: -4 }}
                                className={`relative rounded-2xl border ${colors.border} bg-white/3 card-pad overflow-hidden group`}
                            >
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ background: 'radial-gradient(circle at top left, rgba(124,109,250,0.05), transparent)' }}
                                />

                                <div
                                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${colors.bg} mb-6 shadow-lg`}
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </div>

                                <div className={`text-xs font-bold tracking-widest uppercase ${colors.text} mb-1`}>
                                    {layer.title}
                                </div>
                                <h3 className="font-display text-xl font-bold text-white mb-4">
                                    {layer.subtitle}
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {layer.items.map((item) => (
                                        <Badge key={item} className="bg-white/5 text-white/50 border-white/8">
                                            {item}
                                        </Badge>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <p className="mt-8 text-sm text-white/35 text-center max-w-2xl mx-auto">
                    {platform.gridNote}
                </p>
            </Section>

            {/* Verticals */}
            <Section className="section-py bg-[#030305]">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <SectionHeader
                    eyebrow="Solutions"
                    title={<>What Can the Platform <span className="gradient-text">Do for You?</span></>}
                    description="Here's how our solutions built using Jocata GRID can help you with digital transformation initiatives across several or all of your verticals"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-cards">
                    {platform.verticals.map((v, index) => (
                        <motion.div
                            key={v.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="rounded-2xl border border-white/7 bg-white/3 card-pad hover:border-white/14 transition-all duration-300"
                        >
                            <h3 className="font-display text-xl font-bold text-white mb-3">{v.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-5">
                                {v.tags.map((tag) => (
                                    <Badge key={tag} variant="violet">{tag}</Badge>
                                ))}
                            </div>
                            <p className="text-sm text-white/45 leading-relaxed">{v.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* AI Section */}
            <Section className="section-py bg-[#030305]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/8 to-violet-500/8 overflow-hidden card-pad-lg"
                >
                    <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

                    <div className="relative grid md:grid-cols-2 gap-10 items-start">
                        <div>
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-6 shadow-lg">
                                <Bot className="w-7 h-7 text-white" />
                            </div>
                            <h2 className="font-display text-3xl font-bold text-white mb-4">
                                {platform.ai.title}
                            </h2>
                            <p className="text-white/50 leading-relaxed text-sm mb-4">
                                {platform.ai.description}
                            </p>
                            <div className="mt-6">
                                <Link href="/contact">
                                    <Button className="gap-2">
                                        Contact Us <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-white/7 bg-black/30 p-6 space-y-4">
                            <div className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 w-3/4" />
                            <div className="text-sm text-white/60 leading-relaxed">{platform.ai.detail}</div>

                            {/* Stat highlight */}
                            <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/8 px-5 py-4 flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                                <span className="text-sm text-emerald-300 font-medium">
                                    Reduces false positives by over <strong>75%</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Section>

            <ContactCTASection />
        </>
    );
}
