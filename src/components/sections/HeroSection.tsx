'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { siteData } from '@/data/content';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
    const { hero } = siteData.home;
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Animated particle canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Function to get current theme colors
        const getThemeColors = () => {
            const styles = getComputedStyle(document.documentElement);
            const accent = styles.getPropertyValue('--accent-rgb').trim() || '124, 109, 250';
            return {
                accent: `rgba(${accent},`,
                accent2: 'rgba(6,182,212,',
                gold: 'rgba(244,156,42,',
            };
        };

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: {
            x: number;
            y: number;
            vx: number;
            vy: number;
            r: number;
            alpha: number;
            color: string;
        }[] = [];

        const themeColors = getThemeColors();
        const colorOptions = [themeColors.accent, themeColors.accent2, themeColors.gold];

        for (let i = 0; i < 70; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                r: Math.random() * 2 + 0.5,
                alpha: Math.random() * 0.3 + 0.1,
                color: colorOptions[Math.floor(Math.random() * colorOptions.length)],
            });
        }

        let animId: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `${p.color}${p.alpha})`;
                ctx.fill();
            });

            // Draw connections
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach((p2) => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        const currentAccent = getThemeColors().accent;
                        ctx.strokeStyle = `${currentAccent}${0.08 * (1 - dist / 150)})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                });
            });

            animId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Particle canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none"
                aria-hidden
            />

            {/* Background grid */}
            <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />

            {/* Gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-accent-2/8 blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto container-section text-center pt-32 pb-24 md:pt-40">
                {/* Eyebrow badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 mb-10 rounded-full border border-accent/25 bg-accent/10 backdrop-blur-md shadow-xl shadow-accent/5"
                >
                    <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-sm font-bold text-accent tracking-[0.2em] uppercase">
                        AI-Powered Fintech Platform
                    </span>
                </motion.div>

                {/* Main headline */}
                <div className="mb-8">
                    <h1
                        className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-4"
                    >
                        <span className="text-text-primary block">{hero.headline}</span>
                        <span className="shimmer-text block mt-4">{hero.accent}</span>
                    </h1>
                </div>

                {/* Subheadline */}
                <p
                    className="mt-8 text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-medium"
                >
                    {hero.subheadline}
                </p>

                {/* CTAs */}
                <div
                    className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Link href="/contact">
                        <Button size="lg" className="h-16 px-10 rounded-2xl text-xl shadow-2xl shadow-accent/20">
                            {hero.cta}
                            <ArrowRight className="ml-2 w-6 h-6" />
                        </Button>
                    </Link>
                    <Link href="/platform">
                        <Button variant="ghost" size="lg" className="h-16 px-10 rounded-2xl text-xl border-border-color bg-surface-color/50 backdrop-blur-sm">
                            <Play className="mr-2 w-6 h-6" />
                            Explore Platform
                        </Button>
                    </Link>
                </div>

                {/* Stats strip */}
                <div
                    className="mt-20 pt-16 border-t border-border-color flex flex-wrap items-center justify-center gap-12 md:gap-20"
                >
                    {siteData.home.stats.map((stat) => (
                        <div key={stat.label} className="text-center group">
                            <div className="font-display text-3xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                                {stat.value}
                            </div>
                            <div className="text-sm font-bold text-text-muted uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 hidden lg:flex"
            >
                <span className="text-xs font-bold text-text-muted tracking-[0.3em] uppercase">Scroll</span>
                <div className="w-1 h-16 rounded-full bg-gradient-to-b from-accent to-transparent" />
            </motion.div>
        </section>
    );
}
