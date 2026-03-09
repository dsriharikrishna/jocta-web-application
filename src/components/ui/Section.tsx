'use client';

import { motion } from 'framer-motion';
import { cn } from '@/utils';
import type { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    fullWidth?: boolean;
}

export function Section({ children, className, id, fullWidth = false }: SectionProps) {
    return (
        <section
            id={id}
            className={cn('relative overflow-hidden', className)}
        >
            {fullWidth ? (
                <div>{children}</div>
            ) : (
                <div className="container-section">
                    {children}
                </div>
            )}
        </section>
    );
}


interface SectionHeaderProps {
    eyebrow?: string;
    title: ReactNode;
    description?: string;
    className?: string;
    centered?: boolean;
}

export function SectionHeader({
    eyebrow,
    title,
    description,
    className,
    centered = true,
}: SectionHeaderProps) {
    return (
        <div className={cn('mb-10 md:mb-14', centered && 'text-center', className)}>
            {eyebrow && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 mb-5"
                >
                    <span className="h-px w-8 bg-gradient-to-r from-violet-400 to-cyan-400" />
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400">
                        {eyebrow}
                    </span>
                    <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-violet-400" />
                </motion.div>
            )}

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
                {title}
            </motion.h2>

            {description && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={cn(
                        'mt-5 text-base md:text-lg text-white/50 leading-relaxed',
                        centered && 'max-w-2xl mx-auto'
                    )}
                >
                    {description}
                </motion.p>
            )}
        </div>
    );
}

interface BadgeProps {
    children: ReactNode;
    variant?: 'default' | 'violet' | 'cyan' | 'gold';
    className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
    const variants = {
        default: 'bg-white/8 text-white/60 border-white/10',
        violet: 'bg-violet-500/15 text-violet-300 border-violet-500/25',
        cyan: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/25',
        gold: 'bg-amber-500/15 text-amber-300 border-amber-500/25',
    };

    return (
        <span
            className={cn(
                'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border',
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    );
}

interface DividerProps {
    className?: string;
}

export function Divider({ className }: DividerProps) {
    return (
        <div
            className={cn(
                'h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent',
                className
            )}
        />
    );
}
