'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { siteData } from '@/data/content';
import { cn } from '@/utils';
import { useScrollProgress } from '@/hooks';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const pathname = usePathname();
    const scrollProgress = useScrollProgress();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = isMobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMobileOpen]);

    const navItems = siteData.navbar;

    return (
        <>
            {/* Scroll Progress */}
            <motion.div
                className="scroll-progress"
                style={{ scaleX: scrollProgress, transformOrigin: 'left' }}
            />

            <nav
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                    isScrolled
                        ? 'bg-surface-color/70 backdrop-blur-xl border-b border-border-color'
                        : 'bg-transparent'
                )}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2.5 group">
                            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 shadow-[0_0_20px_rgba(124,109,250,0.5)]">
                                <Zap className="w-5 h-5 text-white" fill="white" />
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 blur-md opacity-50 group-hover:opacity-80 transition-opacity" />
                            </div>
                            <span className="font-display text-xl font-bold text-text-primary tracking-tight">
                                Jocata
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        'relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                                        pathname === item.href
                                            ? 'text-text-primary bg-accent-color/8'
                                            : 'text-text-secondary hover:text-text-primary hover:bg-surface-2-color'
                                    )}
                                >
                                    {pathname === item.href && (
                                        <motion.div
                                            layoutId="nav-indicator"
                                            className="absolute inset-0 rounded-lg bg-accent-color/8"
                                        />
                                    )}
                                    <span className="relative">{item.label}</span>
                                </Link>
                            ))}
                        </div>

                        {/* CTA + Mobile Toggle */}
                        <div className="flex items-center gap-3">
                            <div className="hidden sm:block">
                                <ThemeToggle />
                            </div>

                            <Link href="/contact" className="hidden lg:block">
                                <Button size="sm">Request Demo</Button>
                            </Link>

                            <button
                                onClick={() => setIsMobileOpen(!isMobileOpen)}
                                className="lg:hidden relative flex items-center justify-center w-10 h-10 rounded-xl border border-border-color bg-surface-color hover:bg-surface-2-color transition-colors"
                                aria-label="Toggle menu"
                            >
                                <AnimatePresence mode="wait">
                                    {isMobileOpen ? (
                                        <motion.span
                                            key="close"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.15 }}
                                        >
                                            <X className="w-5 h-5 text-text-primary" />
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="menu"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.15 }}
                                        >
                                            <Menu className="w-5 h-5 text-text-primary" />
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
                            onClick={() => setIsMobileOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
                            className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-bg-color border-l border-border-color lg:hidden"
                        >
                            <div className="flex flex-col h-full p-8 pt-24">
                                <div className="flex items-center justify-between mb-8 pb-8 border-b border-border-color lg:hidden">
                                    <span className="text-sm font-semibold uppercase tracking-wider text-text-muted">Settings</span>
                                    <ThemeToggle />
                                </div>

                                <nav className="flex flex-col gap-2">
                                    {navItems.map((item, index) => (
                                        <motion.div
                                            key={item.href}
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05, duration: 0.3 }}
                                        >
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    'block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200',
                                                    pathname === item.href
                                                        ? 'text-text-primary bg-accent-color/10'
                                                        : 'text-text-secondary hover:text-text-primary hover:bg-surface-2-color'
                                                )}
                                            >
                                                {item.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>

                                <div className="mt-auto">
                                    <Link href="/contact" className="block">
                                        <Button size="md" className="w-full justify-center">
                                            Request Demo
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
