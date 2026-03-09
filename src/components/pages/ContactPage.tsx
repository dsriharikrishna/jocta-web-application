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
            <section className="relative pt-40 pb-24 bg-background overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/8 blur-[130px] pointer-events-none" />

                <div className="relative container-section text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-10 rounded-full border border-accent/25 bg-accent/10 backdrop-blur-md shadow-xl shadow-accent/5"
                    >
                        <MessageSquare className="w-4 h-4 text-accent" />
                        <span className="text-sm font-bold text-accent tracking-[0.2em] uppercase">
                            Connect with our experts
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary leading-[0.95] tracking-tight"
                    >
                        Start Your <span className="gradient-text">Transformation</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.7 }}
                        className="mt-8 text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-medium"
                    >
                        Ready to join the next generation of fintech? Let&apos;s talk about how Jocata GRID™ can power your digital lending journey.
                    </motion.p>
                </div>
            </section>

            {/* Form + Info */}
            <Section className="section-py bg-background">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-cards items-start max-w-7xl mx-auto">
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
                            className="rounded-[2.5rem] border border-border-color bg-surface-color card-pad-lg shadow-2xl shadow-accent/5"
                        >
                            <ContactForm
                                fields={fullFormFields}
                                title="Request a Demo"
                                subtitle="Tailored solutions for your institution's specific needs."
                            />
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* Map Section */}
            <Section className="section-py bg-surface-color">
                <div className="grid lg:grid-cols-3 gap-20 items-center max-w-7xl mx-auto">
                    <div className="lg:col-span-1">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-8 rounded-full border border-accent/25 bg-accent/10">
                            <span className="w-2 h-2 rounded-full bg-accent" />
                            <span className="text-xs font-bold text-accent tracking-widest uppercase">Our Headquarters</span>
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-8 leading-tight">Visit Us In <span className="gradient-text">Hyderabad</span></h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-5">
                                <div className="p-4 rounded-xl bg-accent/10 border border-accent/20 shadow-lg">
                                    <MessageSquare className="w-8 h-8 text-accent" />
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-text-primary mb-1">Global HQ</div>
                                    <div className="text-text-secondary leading-relaxed font-medium">Jocata Financial Advisory and Technology Services Private Limited</div>
                                    <div className="text-accent font-bold mt-2 uppercase tracking-widest text-xs">Hitech City, Hyderabad, India</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="rounded-[2.5rem] border border-border-color overflow-hidden h-[550px] shadow-2xl grayscale dark:grayscale-0 contrast-[1.1] dark:contrast-100 transition-all duration-500 hover:grayscale-0 hover:contrast-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2894563810!2d78.375681676182!3d17.44510008345717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e17627443d%3A0xe90e8c6be91e9f1a!2sJocata%20Financial%20Advisory%20and%20Technology%20Services%20Private%20Limited!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
