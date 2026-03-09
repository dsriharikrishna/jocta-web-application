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
        <Section id="grid" className="section-py bg-[#030305]">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

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

            <div className="mt-4 relative">
                {/* Layer selector tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {grid.layers.map((layer, index) => {
                        const Icon = layerIcons[index];
                        const isActive = activeLayer === index;
                        return (
                            <motion.button
                                key={layer.id}
                                onClick={() => setActiveLayer(index)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${isActive
                                    ? `bg-gradient-to-r ${layerColors[index]} text-white border-transparent shadow-lg`
                                    : 'bg-white/4 border-white/8 text-white/50 hover:text-white hover:bg-white/8'
                                    }`}
                            >
                                <Icon className="w-4 h-4" />
                                {layer.title}
                            </motion.button>
                        );
                    })}
                </div>

                {/* Layer detail card */}
                <AnimatePresence mode="wait">
                    {grid.layers.map((layer, index) => {
                        if (index !== activeLayer) return null;
                        const Icon = layerIcons[index];
                        return (
                            <motion.div
                                key={layer.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                                className="relative rounded-3xl border border-white/8 bg-white/3 overflow-hidden card-pad-lg"
                                style={{
                                    boxShadow: `0 0 80px ${layerGlows[index]}`,
                                }}
                            >
                                {/* Glow orb */}
                                <div
                                    className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-30"
                                    style={{ background: `linear-gradient(135deg, ${layerGlows[index]}, transparent)` }}
                                />

                                <div className="relative grid md:grid-cols-2 gap-16 items-center">
                                    {/* Left */}
                                    <div>
                                        <div
                                            className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${layerColors[index]} mb-8 shadow-lg`}
                                        >
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                                            {layer.title}
                                        </h3>
                                        <p className="text-lg text-white/50 mb-3">{layer.description}</p>
                                        <p className="text-base text-white/35">{layer.subtitle}</p>
                                    </div>

                                    {/* Right - Items grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        {layer.items.map((item, i) => (
                                            <motion.div
                                                key={item}
                                                initial={{ opacity: 0, scale: 0.85 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: i * 0.05, duration: 0.3 }}
                                                className="flex items-center gap-3 rounded-xl border border-white/7 bg-white/4 px-5 py-4"
                                            >
                                                <ChevronRight className="w-4 h-4 text-violet-400 shrink-0" />
                                                <span className="text-sm font-medium text-white/70">{item}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>

                {/* Stack visual */}
                <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
                    {grid.layers.map((layer, index) => (
                        <div key={layer.id} className="flex items-center gap-3">
                            <button
                                onClick={() => setActiveLayer(index)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${activeLayer === index
                                    ? 'text-white'
                                    : 'text-white/30 hover:text-white/60'
                                    }`}
                            >
                                {layer.title}
                            </button>
                            {index < grid.layers.length - 1 && (
                                <div className="w-8 h-px bg-white/10" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
