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
        <Section id="clients" className="section-py bg-background">
            {/* Subtle divider */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-color to-transparent" />

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
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-24 max-w-6xl mx-auto"
            >
                {clientLogos.map((name) => (
                    <motion.div
                        key={name}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "circOut" } },
                        }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="flex items-center justify-center rounded-[2rem] border border-border-color bg-surface-color p-8 text-center text-sm font-bold text-text-muted uppercase tracking-widest cursor-default transition-all duration-300 hover:text-text-primary hover:border-accent/30 hover:bg-surface-2-color shadow-sm hover:shadow-xl hover:shadow-accent/5"
                    >
                        {name}
                    </motion.div>
                ))}
            </motion.div>

            {/* Testimonial */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-[3rem] border border-border-color bg-gradient-to-br from-surface-color to-surface-2-color overflow-hidden card-pad-lg shadow-2xl shadow-accent/5 max-w-5xl mx-auto"
            >
                {/* Glow */}
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

                <div className="relative text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 mb-10 shadow-lg">
                        <Quote className="w-8 h-8 text-accent" />
                    </div>

                    <blockquote className="text-2xl md:text-4xl font-bold text-text-primary leading-relaxed mb-12 italic tracking-tight">
                        &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    <div className="flex items-center justify-center gap-6">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-2 text-lg font-bold text-white shadow-xl">
                            MM
                        </div>
                        <div className="text-left">
                            <div className="text-lg font-bold text-text-primary">{testimonial.author}</div>
                            <div className="text-sm font-bold text-accent uppercase tracking-widest">{testimonial.role}</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
}
