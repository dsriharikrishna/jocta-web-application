'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Zap, ArrowUpRight, Twitter, Linkedin, Github } from 'lucide-react';
import { siteData } from '@/data/content';
import { Divider } from '@/components/ui/Section';

const footerLinks = [
    {
        heading: 'Product',
        links: [
            { label: 'Our Platform', href: '/platform' },
            { label: 'AI Scoring', href: '/ai-scoring' },
            { label: 'GRID™ Technology', href: '/platform' },
        ],
    },
    {
        heading: 'Company',
        links: [
            { label: 'About Us', href: '/about' },
            { label: 'Success Stories', href: '/success-stories' },
            { label: 'Careers', href: '/careers' },
        ],
    },
    {
        heading: 'Legal',
        links: [
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Security Policy', href: '/security' },
        ],
    },
];

const socials = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
];

export function Footer() {
    const { company } = siteData;

    return (
        <footer className="relative bg-[#030305] border-t border-white/6 overflow-hidden">
            {/* Subtle gradient orbs */}
            <div className="absolute -top-40 left-1/4 w-80 h-80 rounded-full bg-violet-600/5 blur-3xl pointer-events-none" />
            <div className="absolute -top-40 right-1/4 w-80 h-80 rounded-full bg-cyan-600/5 blur-3xl pointer-events-none" />

            <div className="container-section py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2.5 mb-5 group w-fit">
                            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500">
                                <Zap className="w-5 h-5 text-white" fill="white" />
                            </div>
                            <span className="font-display text-xl font-bold text-white">Jocata</span>
                        </Link>
                        <p className="text-sm text-white/40 leading-relaxed mb-7 max-w-xs">
                            {company.description}
                        </p>

                        {/* Contact */}
                        <div className="space-y-3">
                            <a
                                href={`tel:${company.phone}`}
                                className="flex items-center gap-3 text-sm text-white/40 hover:text-white/70 transition-colors"
                            >
                                <Phone className="w-4 h-4 text-violet-400 shrink-0" />
                                {company.phone}
                            </a>
                            <a
                                href={`mailto:${company.email}`}
                                className="flex items-center gap-3 text-sm text-white/40 hover:text-white/70 transition-colors"
                            >
                                <Mail className="w-4 h-4 text-violet-400 shrink-0" />
                                {company.email}
                            </a>
                            <div className="flex items-center gap-3 text-sm text-white/40">
                                <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
                                {company.location}
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    {footerLinks.map((group) => (
                        <div key={group.heading}>
                            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-5">
                                {group.heading}
                            </h4>
                            <ul className="space-y-3">
                                {group.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-white/50 hover:text-white flex items-center gap-1 group transition-colors"
                                        >
                                            <span>{link.label}</span>
                                            <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-60 transition-all duration-200" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <Divider className="my-10" />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
                    <p className="text-xs text-white/25">
                        © {new Date().getFullYear()} Jocata Technologies. All rights reserved.
                    </p>

                    <div className="flex items-center gap-3">
                        {socials.map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                aria-label={label}
                                whileHover={{ y: -2 }}
                                className="w-9 h-9 rounded-xl border border-white/8 bg-white/4 flex items-center justify-center hover:border-white/20 hover:bg-white/8 transition-colors"
                            >
                                <Icon className="w-4 h-4 text-white/40" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
