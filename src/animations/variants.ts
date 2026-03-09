import type { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
    },
};

export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
    },
};

export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
    },
};

export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
    },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
    },
};

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
    },
};

export const cardHover = {
    rest: { scale: 1, y: 0 },
    hover: {
        scale: 1.02,
        y: -4,
        transition: { duration: 0.3, ease: 'easeOut' },
    },
};

export const glowPulse: Variants = {
    initial: { opacity: 0.5 },
    animate: {
        opacity: [0.5, 1, 0.5],
        scale: [1, 1.05, 1],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

export const slideInMobile: Variants = {
    closed: { x: '100%', opacity: 0 },
    open: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] },
    },
};

export const textReveal: Variants = {
    hidden: { y: '100%' },
    visible: {
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
    },
};

export const navbarVariants: Variants = {
    top: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderBottomColor: 'rgba(255, 255, 255, 0)',
        backdropFilter: 'blur(0px)',
    },
    scrolled: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderBottomColor: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(20px)',
    },
};
