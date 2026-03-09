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
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                    Message Sent!
                </h3>
                <p className="text-white/50 max-w-xs">
                    Thank you for reaching out. Our team will contact you within 24 hours.
                </p>
            </motion.div>
        );
    }

    return (
        <div>
            {title && (
                <div className="mb-8">
                    <h3 className="font-display text-2xl font-bold text-white mb-2">{title}</h3>
                    <p className="text-sm text-white/45">{subtitle}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {fields.map((field) => (
                        <div key={field.id} className={field.id === 'message' ? 'sm:col-span-2' : ''}>
                            <label
                                htmlFor={field.id}
                                className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2"
                            >
                                {field.label}
                                {field.required && <span className="text-violet-400 ml-0.5">*</span>}
                            </label>
                            {field.type === 'textarea' ? (
                                <textarea
                                    id={field.id}
                                    required={field.required}
                                    rows={4}
                                    onChange={(e) => handleChange(field.id, e.target.value)}
                                    className="w-full rounded-xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/6 transition-all duration-200 resize-none"
                                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                                />
                            ) : (
                                <input
                                    id={field.id}
                                    type={field.type}
                                    required={field.required}
                                    onChange={(e) => handleChange(field.id, e.target.value)}
                                    className="w-full rounded-xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/6 transition-all duration-200"
                                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                                />
                            )}
                        </div>
                    ))}
                </div>

                <Button type="submit" size="lg" className="w-full gap-2" disabled={isLoading}>
                    {isLoading ? (
                        <>
                            <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            Send Message
                            <Send className="w-4 h-4" />
                        </>
                    )}
                </Button>
            </form>
        </div>
    );
}

export function ContactInfoPanel() {
    const { company } = siteData;

    const infoItems = [
        { icon: Phone, label: 'Phone', value: company.phone, href: `tel:${company.phone}` },
        { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
        { icon: MapPin, label: 'Location', value: company.location, href: '#' },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                    Let&apos;s Talk
                </h3>
                <p className="text-sm text-white/45 leading-relaxed">
                    Whether you&apos;re an existing client or looking to partner with us, we&apos;d love to connect.
                </p>
            </div>

            <div className="space-y-5">
                {infoItems.map(({ icon: Icon, label, value, href }) => (
                    <motion.a
                        key={label}
                        href={href}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-4 group"
                    >
                        <div className="w-11 h-11 rounded-xl border border-white/8 bg-white/4 flex items-center justify-center shrink-0 group-hover:border-violet-500/30 group-hover:bg-violet-500/10 transition-all duration-200">
                            <Icon className="w-5 h-5 text-violet-400" />
                        </div>
                        <div>
                            <div className="text-xs text-white/30 font-medium mb-0.5">{label}</div>
                            <div className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                                {value}
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>

            {/* Decorative element */}
            <div className="rounded-2xl border border-violet-500/15 bg-violet-500/5 p-6">
                <div className="text-sm font-semibold text-violet-300 mb-2">Office Hours</div>
                <div className="text-sm text-white/40">Monday — Friday</div>
                <div className="text-sm text-white/40">9:00 AM — 6:00 PM IST</div>
            </div>
        </div>
    );
}
