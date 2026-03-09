import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { PageLayout } from '@/components/layout/PageLayout';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: 'Jocata | Fintech Ecosystem of the Future',
        template: '%s | Jocata',
    },
    description:
        'Jocata GRID™ — innovative technology for end-to-end digital transformation of financial services. AI-powered lending, compliance, and risk management.',
    keywords: [
        'Jocata',
        'Fintech',
        'Digital Lending',
        'AI Scoring',
        'MSME',
        'Compliance',
        'Risk Management',
        'GRID Platform',
    ],
    openGraph: {
        title: 'Jocata | Fintech Ecosystem of the Future',
        description:
            'Innovative technology for end-to-end digital transformation of your financial services',
        type: 'website',
        locale: 'en_IN',
        siteName: 'Jocata',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Jocata | Fintech Ecosystem of the Future',
        description:
            'Innovative technology for end-to-end digital transformation of your financial services',
    },
    robots: { index: true, follow: true },
};

import { ThemeProvider } from '@/components/providers/ThemeProvider';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`} suppressHydrationWarning>
            <body className={`${inter.className} antialiased`}>
                <ThemeProvider
                    attribute="data-theme"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <PageLayout>{children}</PageLayout>
                </ThemeProvider>
            </body>
        </html>
    );
}
