'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Cpu, BarChart3, Monitor, ChevronRight } from 'lucide-react';
import { siteData } from '@/data/content';
import { Section, SectionHeader, Badge } from '@/components/ui/Section';

const layerIcons = [Database, Cpu, BarChart3, Monitor];
const layerColors = [
    'from-violet-500 to-purple-700',
    'from-cyan-500 to-blue-600',
    'from-amber-400 to-orange-500',
    'from-emerald-400 to-teal-600',
];
const layerGlows = [
    'rgba(124,109,250,0.2)',
    'rgba(6,182,212,0.2)',
    'rgba(244,156,42,0.2)',
    'rgba(52,211,153,0.2)',
];

export function GridSection() {
    const { grid } = siteData.home;
    const [activeLayer, setActiveLayer] = useState(0);

    return (
        <Section id="grid" className="section-py bg-background">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

            <SectionHeader
                eyebrow="Jocata GRID™"
                title={
                    <>
                        The Intelligence{' '}
                        <span className="gradient-text">Stack</span>
                    </>
                }
                description={grid.description}
            />

            <div className="mt-8 relative max-w-6xl mx-auto">
                {/* Layer selector tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {grid.layers.map((layer, index) => {
                        const Icon = layerIcons[index];
                        const isActive = activeLayer === index;
                        return (
                            <motion.button
                                key={layer.id}
                                onClick={() => setActiveLayer(index)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl text-base font-bold border transition-all duration-300 shadow-sm ${isActive
                                    ? `bg-gradient-to-r ${layerColors[index]} text-white border-transparent shadow-xl shadow-accent/20`
                                    : 'bg-surface-color border-border-color text-text-muted hover:text-text-primary hover:bg-surface-2-color'
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                {layer.title}
                            </motion.button>
                        );
                    })}
                </div>

                {/* Layer detail card */}
                <div className="relative min-h-[500px]">
                    <AnimatePresence mode="wait">
                        {grid.layers.map((layer, index) => {
                            if (index !== activeLayer) return null;
                            const Icon = layerIcons[index];
                            return (
                                <motion.div
                                    key={layer.id}
                                    initial={{ opacity: 0, y: 30, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -30, scale: 0.98 }}
                                    transition={{ duration: 0.5, ease: "circOut" }}
                                    className="relative rounded-[2.5rem] border border-border-color bg-surface-color overflow-hidden card-pad-lg shadow-2xl shadow-accent/5"
                                >
                                    {/* Glow orb */}
                                    <div
                                        className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-20"
                                        style={{ background: `linear-gradient(135deg, ${layerGlows[index]}, transparent)` }}
                                    />

                                    <div className="relative grid md:grid-cols-2 gap-16 items-center">
                                        {/* Left */}
                                        <div>
                                            <div
                                                className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${layerColors[index]} mb-10 shadow-xl`}
                                            >
                                                <Icon className="w-10 h-10 text-white" />
                                            </div>
                                            <h3 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
                                                {layer.title}
                                            </h3>
                                            <p className="text-xl text-text-secondary mb-4 leading-relaxed font-medium">{layer.description}</p>
                                            <p className="text-lg text-text-muted font-bold tracking-tight">{layer.subtitle}</p>
                                        </div>

                                        {/* Right - Items grid */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {layer.items.map((item, i) => (
                                                <motion.div
                                                    key={item}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1, duration: 0.4 }}
                                                    whileHover={{ x: 5 }}
                                                    className="flex items-center gap-4 rounded-2xl border border-border-color bg-background/50 backdrop-blur-sm px-6 py-5 shadow-sm group/item"
                                                >
                                                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover/item:bg-accent/20 transition-colors">
                                                        <ChevronRight className="w-5 h-5 text-accent" />
                                                    </div>
                                                    <span className="text-base font-bold text-text-primary">{item}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Stack visual */}
                <div className="mt-16 flex items-center justify-center gap-4 flex-wrap">
                    {grid.layers.map((layer, index) => (
                        <div key={layer.id} className="flex items-center gap-4">
                            <button
                                onClick={() => setActiveLayer(index)}
                                className={`px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-200 ${activeLayer === index
                                    ? 'text-accent'
                                    : 'text-text-muted hover:text-text-secondary'
                                    }`}
                            >
                                {layer.title}
                            </button>
                            {index < grid.layers.length - 1 && (
                                <div className="w-12 h-px bg-border-color" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
