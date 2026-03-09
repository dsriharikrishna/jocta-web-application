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

        const colors = ['rgba(124,109,250,', 'rgba(6,182,212,', 'rgba(244,156,42,'];

        for (let i = 0; i < 60; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                r: Math.random() * 1.5 + 0.3,
                alpha: Math.random() * 0.4 + 0.1,
                color: colors[Math.floor(Math.random() * colors.length)],
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
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(124,109,250,${0.06 * (1 - dist / 120)})`;
                        ctx.lineWidth = 0.5;
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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030305]">
            {/* Particle canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none"
                aria-hidden
            />

            {/* Background grid */}
            <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />

            {/* Gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-600/8 blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet-900/15 blur-[150px] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center pt-28 pb-24 md:pt-36">
                {/* Eyebrow badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-violet-500/25 bg-violet-500/8 backdrop-blur-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                    <span className="text-xs font-medium text-violet-300 tracking-wider uppercase">
                        AI-Powered Fintech Platform
                    </span>
                </motion.div>

                {/* Main headline */}
                <div className="overflow-hidden mb-4">
                    <motion.h1
                        initial={{ y: '100%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                        className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight"
                    >
                        <span className="text-white">{hero.headline}</span>
                        <br />
                        <span className="shimmer-text">{hero.accent}</span>
                    </motion.h1>
                </div>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mt-7 text-base md:text-xl text-white/45 max-w-2xl mx-auto leading-relaxed"
                >
                    {hero.subheadline}
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.55 }}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link href="/contact">
                        <Button size="lg" className="gap-2">
                            {hero.cta}
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                    <Link href="/platform">
                        <Button variant="ghost" size="lg" className="gap-2">
                            <Play className="w-4 h-4" />
                            Explore Platform
                        </Button>
                    </Link>
                </motion.div>

                {/* Stats strip */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.75 }}
                    className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-14"
                >
                    {siteData.home.stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="font-display text-2xl md:text-3xl font-bold gradient-text">
                                {stat.value}
                            </div>
                            <div className="text-xs text-white/30 mt-1 tracking-wide">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-white/20 tracking-widest uppercase">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
            </motion.div>
        </section>
    );
}
