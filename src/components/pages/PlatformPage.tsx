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
            <section className="relative pt-40 pb-24 bg-background overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-accent/8 blur-[150px] pointer-events-none" />

                <div className="relative container-section text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-accent/25 bg-accent/10"
                    >
                        <Database className="w-3.5 h-3.5 text-accent" />
                        <span className="text-xs font-bold text-accent tracking-widest uppercase">
                            Enterprise Platform
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight"
                    >
                        {platform.hero.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.7 }}
                        className="mt-6 text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
                    >
                        {platform.hero.description}
                    </motion.p>

                    {/* Feature pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-10 flex flex-wrap justify-center gap-3"
                    >
                        {platform.hero.features.map((f) => (
                            <span
                                key={f}
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border-color bg-surface-color text-sm font-semibold text-text-secondary shadow-sm"
                            >
                                <CheckCircle className="w-4 h-4 text-emerald-500" />
                                {f}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* GRID Layers */}
            <Section className="section-py bg-background">
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
                                whileHover={{ y: -6 }}
                                className={`relative rounded-3xl border border-border-color bg-surface-color card-pad overflow-hidden group hover:border-accent/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-accent/5`}
                            >
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ background: 'radial-gradient(circle at top left, rgba(124,109,250,0.05), transparent)' }}
                                />

                                <div
                                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.bg} mb-8 shadow-lg`}
                                >
                                    <Icon className="w-7 h-7 text-white" />
                                </div>

                                <div className={`text-sm font-bold tracking-widest uppercase ${colors.text} mb-2`}>
                                    {layer.title}
                                </div>
                                <h3 className="font-display text-2xl font-bold text-text-primary mb-5">
                                    {layer.subtitle}
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {layer.items.map((item) => (
                                        <Badge key={item} className="bg-surface-2-color text-text-secondary border-border-color font-medium">
                                            {item}
                                        </Badge>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <p className="mt-12 text-base text-text-muted text-center max-w-2xl mx-auto font-medium">
                    {platform.gridNote}
                </p>
            </Section>

            {/* Verticals */}
            <Section className="section-py bg-surface-color">
                <div className="absolute inset-0 bg-grid opacity-20" />
                <SectionHeader
                    eyebrow="Solutions"
                    title={<>What Can the Platform <span className="gradient-text">Do for You?</span></>}
                    description="Here's how our solutions built using Jocata GRID can help you with digital transformation initiatives."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-cards">
                    {platform.verticals.map((v, index) => (
                        <motion.div
                            key={v.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="rounded-3xl border border-border-color bg-background card-pad hover:border-accent/20 transition-all duration-300 shadow-sm"
                        >
                            <h3 className="font-display text-2xl font-bold text-text-primary mb-4">{v.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {v.tags.map((tag) => (
                                    <Badge key={tag} variant="violet">{tag}</Badge>
                                ))}
                            </div>
                            <p className="text-base text-text-secondary leading-relaxed">{v.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* AI Section */}
            <Section className="section-py bg-background">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-[2.5rem] border border-accent/20 bg-gradient-to-br from-accent/5 to-accent-2/5 overflow-hidden card-pad-lg shadow-2xl shadow-accent/5"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

                    <div className="relative grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-2 mb-8 shadow-lg">
                                <Bot className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="font-display text-4xl font-bold text-text-primary mb-6">
                                {platform.ai.title}
                            </h2>
                            <p className="text-text-secondary leading-relaxed text-lg mb-8">
                                {platform.ai.description}
                            </p>
                            <div className="flex items-center gap-4">
                                <Link href="/contact">
                                    <Button className="gap-2 h-14 px-8 text-lg" size="lg">
                                        Contact Us <ArrowRight className="w-5 h-5" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-border-color bg-background/50 backdrop-blur-md p-8 shadow-xl">
                            <div className="h-3 rounded-full bg-gradient-to-r from-accent to-accent-2 w-3/4 mb-8 shadow-sm" />
                            <div className="text-base text-text-secondary leading-relaxed font-medium mb-8 italic">"{platform.ai.detail}"</div>

                            {/* Stat highlight */}
                            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 px-6 py-5 flex items-center gap-4">
                                <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
                                <span className="text-base text-text-primary font-bold">
                                    Reduces false positives by over <span className="text-emerald-500 text-xl tracking-tight">75%</span>
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
