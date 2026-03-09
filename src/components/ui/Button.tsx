'use client';

import { motion } from 'framer-motion';
import { cn } from '@/utils';
import type { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'ghost' | 'outline' | 'gold';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    href?: string;
}

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    className,
    onClick,
    type = 'button',
    disabled = false,
}: ButtonProps) {
    const baseStyles =
        'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 select-none whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

    const sizeStyles = {
        sm: 'btn-size-sm',
        md: 'btn-size-md',
        lg: 'btn-size-lg',
    };

    const variantStyles = {
        primary:
            'bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-[0_0_30px_rgba(124,109,250,0.4)] hover:shadow-[0_0_50px_rgba(124,109,250,0.6)] hover:-translate-y-0.5',
        ghost:
            'bg-transparent text-white/70 border border-white/10 hover:text-white hover:border-white/25 hover:bg-white/5',
        outline:
            'bg-transparent text-white border border-violet-500/50 hover:border-violet-400 hover:bg-violet-500/10',
        gold: 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-[0_0_30px_rgba(244,156,42,0.4)] hover:shadow-[0_0_50px_rgba(244,156,42,0.6)] hover:-translate-y-0.5',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        >
            {children}
        </motion.button>
    );
}
