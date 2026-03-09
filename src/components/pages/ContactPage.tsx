'use client';

import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { ContactForm, ContactInfoPanel } from '@/components/sections/ContactForm';
import { siteData } from '@/data/content';

export function ContactPage() {
    const fullFormFields = [
        { id: 'name', label: 'Name', type: 'text', required: true },
        { id: 'company', label: 'Company', type: 'text', required: true },
        { id: 'email', label: 'Email', type: 'email', required: true },
        { id: 'designation', label: 'Designation / Role', type: 'text', required: true },
        { id: 'message', label: 'Message', type: 'textarea', required: false },
    ];

    return (
        <>
            {/* Hero */}
            <section className="relative pt-36 pb-16 bg-[#030305] overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/8 blur-[130px] pointer-events-none" />

                <div className="relative container-section text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-violet-500/25 bg-violet-500/8"
                    >
                        <MessageSquare className="w-3.5 h-3.5 text-violet-400" />
                        <span className="text-xs font-medium text-violet-300 tracking-wider uppercase">
                            Contact Us
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-5xl md:text-6xl font-bold text-white leading-tight"
                    >
                        Start Your{' '}
                        <span className="gradient-text">Transformation</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="mt-5 text-base md:text-lg text-white/45 max-w-lg mx-auto"
                    >
                        Let&apos;s talk about how Jocata GRID™ can power your digital lending journey.
                    </motion.p>
                </div>
            </section>

            {/* Form + Info */}
            <Section className="section-py bg-[#030305]">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
                    {/* Contact Info */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <ContactInfoPanel />
                        </motion.div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-3">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="rounded-3xl border border-white/8 bg-white/3 p-8 md:p-10"
                        >
                            <ContactForm
                                fields={fullFormFields}
                                title="Request a Demo"
                                subtitle="Our team will get back to you within 24 business hours."
                            />
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* Map / Location visual */}
            <Section className="pb-24 bg-[#030305]">
                <div className="rounded-2xl border border-white/7 bg-white/3 overflow-hidden h-48 flex items-center justify-center">
                    <div className="text-center">
                        <div className="text-3xl mb-2">📍</div>
                        <div className="text-sm font-semibold text-white/60">{siteData.company.location}</div>
                        <div className="text-xs text-white/30 mt-1">Hyderabad, Telangana, India</div>
                    </div>
                </div>
            </Section>
        </>
    );
}
