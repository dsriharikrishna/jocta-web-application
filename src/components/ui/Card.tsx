'use client';

import { motion } from 'framer-motion';
import { cn } from '@/utils';
import type { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    glowing?: boolean;
    onClick?: () => void;
    hover?: boolean;
    as?: 'div' | 'article' | 'section';
}

export function Card({
    children,
    className,
    glowing = false,
    hover = true,
    onClick,
}: CardProps) {
    return (
        <motion.div
            whileHover={hover ? { y: -4, scale: 1.01 } : {}}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={onClick}
            className={cn(
                'relative rounded-2xl border border-white/7 bg-white/3 backdrop-blur-sm overflow-hidden',
                glowing && 'shadow-[0_0_40px_rgba(124,109,250,0.15)]',
                onClick && 'cursor-pointer',
                className
            )}
        >
            {/* Subtle gradient overlay at top */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/2 to-transparent" />
            {children}
        </motion.div>
    );
}

interface GlassCardProps {
    children: ReactNode;
    className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
    return (
        <div
            className={cn(
                'relative rounded-2xl border border-white/8 overflow-hidden',
                'bg-gradient-to-br from-white/6 to-white/2',
                'backdrop-blur-xl',
                className
            )}
        >
            {children}
        </div>
    );
}

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    className?: string;
    delay?: number;
    accent?: string;
}

export function FeatureCard({
    icon,
    title,
    description,
    className,
    delay = 0,
    accent = 'from-violet-500 to-cyan-500',
}: FeatureCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
            whileHover={{ y: -6 }}
            className={cn(
                'group relative rounded-2xl border border-white/7 bg-white/3 card-pad overflow-hidden',
                'transition-all duration-300 hover:border-violet-500/30 hover:bg-white/5',
                'hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]',
                className
            )}
        >
            {/* Top accent line */}
            <div
                className={cn(
                    'absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300',
                    accent
                )}
            />

            {/* Glow orb */}
            <div
                className={cn(
                    'absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl bg-gradient-to-br',
                    accent
                )}
            />

            <div
                className={cn(
                    'mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br text-white shadow-lg',
                    accent
                )}
            >
                {icon}
            </div>

            <h3 className="font-display text-xl font-bold text-white mb-4">{title}</h3>
            <p className="text-base text-white/50 leading-relaxed">{description}</p>
        </motion.div>
    );
}

interface StatCardProps {
    value: string;
    label: string;
    className?: string;
    delay?: number;
}

export function StatCard({ value, label, className, delay = 0 }: StatCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={cn(
                'rounded-2xl border border-white/7 bg-white/3 card-pad text-center',
                className
            )}
        >
            <div className="text-4xl font-display font-bold gradient-text mb-2">{value}</div>
            <div className="text-sm text-white/40 font-medium tracking-wide uppercase">{label}</div>
        </motion.div>
    );
}
