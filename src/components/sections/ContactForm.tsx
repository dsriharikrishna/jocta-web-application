'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import { siteData } from '@/data/content';
import { Button } from '@/components/ui/Button';
import type { FormField } from '@/types';

interface ContactFormProps {
    fields?: FormField[];
    title?: string;
    subtitle?: string;
}

export function ContactForm({
    fields = siteData.aiScoring.form.fields,
    title = 'Get in Touch',
    subtitle = 'Fill out the form below and we\'ll get back to you shortly.',
}: ContactFormProps) {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (id: string, value: string) => {
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise((r) => setTimeout(r, 1500));
        setIsLoading(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
            >
                <div className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-8">
                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="font-display text-3xl font-bold text-text-primary mb-4">
                    Message Sent!
                </h3>
                <p className="text-text-secondary max-w-sm text-lg">
                    Thank you for reaching out. Our team will contact you within 24 business hours.
                </p>
                <Button
                    className="mt-10"
                    variant="ghost"
                    onClick={() => setIsSubmitted(false)}
                >
                    Back to Form
                </Button>
            </motion.div>
        );
    }

    return (
        <div>
            {title && (
                <div className="mb-10 text-center lg:text-left">
                    <h3 className="font-display text-3xl font-bold text-text-primary mb-3">{title}</h3>
                    <p className="text-base text-text-secondary">{subtitle}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {fields.map((field) => (
                        <div key={field.id} className={field.id === 'message' ? 'sm:col-span-2' : ''}>
                            <label
                                htmlFor={field.id}
                                className="block text-sm font-bold text-text-muted uppercase tracking-widest mb-2.5"
                            >
                                {field.label}
                                {field.required && <span className="text-accent-color ml-1">*</span>}
                            </label>
                            {field.type === 'textarea' ? (
                                <textarea
                                    id={field.id}
                                    required={field.required}
                                    rows={4}
                                    value={formData[field.id] || ''}
                                    onChange={(e) => handleChange(field.id, e.target.value)}
                                    className="w-full rounded-2xl border border-border-color bg-surface-color px-5 py-4 text-base text-text-primary placeholder-text-muted/40 focus:outline-none focus:ring-2 focus:ring-accent-color/30 focus:border-accent-color transition-all duration-300 resize-none shadow-sm"
                                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                                />
                            ) : (
                                <input
                                    id={field.id}
                                    type={field.type}
                                    required={field.required}
                                    value={formData[field.id] || ''}
                                    onChange={(e) => handleChange(field.id, e.target.value)}
                                    className="w-full rounded-2xl border border-border-color bg-surface-color px-5 py-4 text-base text-text-primary placeholder-text-muted/40 focus:outline-none focus:ring-2 focus:ring-accent-color/30 focus:border-accent-color transition-all duration-300 shadow-sm"
                                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                                />
                            )}
                        </div>
                    ))}
                </div>

                <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full gap-3 h-14 text-lg" disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                                Processing...
                            </>
                        ) : (
                            <>
                                Send Message
                                <Send className="w-5 h-5" />
                            </>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}

export function ContactInfoPanel() {
    const { company } = siteData;

    const infoItems = [
        { icon: Phone, label: 'Call Us', value: company.phone, href: `tel:${company.phone}` },
        { icon: Mail, label: 'Email Us', value: company.email, href: `mailto:${company.email}` },
        { icon: MapPin, label: 'Visit Us', value: company.location, href: '#' },
    ];

    return (
        <div className="space-y-10 lg:pr-10">
            <div>
                <h3 className="font-display text-4xl font-bold text-text-primary mb-5">
                    Let&apos;s Connect
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                    Ready to transform your fintech ecosystem? Our team of experts is dedicated to powering your digital lending journey.
                </p>
            </div>

            <div className="space-y-6">
                {infoItems.map(({ icon: Icon, label, value, href }) => (
                    <motion.a
                        key={label}
                        href={href}
                        whileHover={{ x: 6 }}
                        className="flex items-center gap-6 group p-4 rounded-3xl border border-transparent hover:border-border-color hover:bg-surface-color transition-all duration-300"
                    >
                        <div className="w-14 h-14 rounded-2xl border border-border-color bg-surface-color flex items-center justify-center shrink-0 group-hover:border-accent-color/40 group-hover:bg-accent-color/10 group-hover:shadow-[0_0_20px_rgba(124,109,250,0.15)] transition-all duration-300">
                            <Icon className="w-6 h-6 text-accent-color" />
                        </div>
                        <div>
                            <div className="text-sm text-text-muted font-bold tracking-widest uppercase mb-1">{label}</div>
                            <div className="text-lg font-semibold text-text-primary group-hover:text-accent-color transition-colors">
                                {value}
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>

            {/* Decorative element */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-accent-color/15 bg-accent-color/5 p-8 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-color/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                    <div className="text-lg font-bold text-accent-color mb-3">Global Response Status</div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-sm font-semibold text-text-primary">Operational — Average response: 2h</span>
                    </div>
                    <div className="text-sm text-text-secondary leading-relaxed font-medium">
                        Our experts are available across multiple time zones to ensure seamless integration and support.
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
