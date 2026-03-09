'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { siteData } from '@/data/content';
import { Section, SectionHeader } from '@/components/ui/Section';

const clientLogos = [
    'Axis Bank',
    'Airtel Payments Bank',
    'American Express',
    'IndusInd Bank',
    'RBL Bank',
    'Tata Capital',
];

export function ClientsSection() {
    const { clients, testimonial } = siteData.home;

    return (
        <Section id="clients" className="section-py bg-[#030305]">
            {/* Subtle divider */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

            <SectionHeader
                eyebrow="Our Clients"
                title={
                    <>
                        Trusted by India&apos;s{' '}
                        <span className="gradient-text">Leading Institutions</span>
                    </>
                }
                description={clients.subtitle}
            />

            {/* Client logo grid */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.08 } },
                }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20"
            >
                {clientLogos.map((name) => (
                    <motion.div
                        key={name}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        }}
                        whileHover={{ scale: 1.04, borderColor: 'rgba(124,109,250,0.3)' }}
                        className="flex items-center justify-center rounded-2xl border border-white/7 bg-white/3 card-pad-sm text-center text-sm font-semibold text-white/40 cursor-default transition-all duration-300 hover:text-white/70 hover:bg-white/6"
                    >
                        {name}
                    </motion.div>
                ))}
            </motion.div>

            {/* Testimonial */}
            <motion.div
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative rounded-3xl border border-white/8 bg-gradient-to-br from-white/4 to-white/2 overflow-hidden card-pad-lg"
            >
                {/* Glow */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />

                <div className="relative text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-violet-500/15 border border-violet-500/25 mb-8">
                        <Quote className="w-6 h-6 text-violet-400" />
                    </div>

                    <blockquote className="text-xl md:text-3xl font-medium text-white/80 leading-relaxed mb-10 italic">
                        &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    <div className="flex items-center justify-center gap-5">
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 text-sm font-bold text-white shadow-xl">
                            MM
                        </div>
                        <div className="text-left">
                            <div className="text-sm font-semibold text-white">{testimonial.author}</div>
                            <div className="text-xs text-white/40">{testimonial.role}</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
}
