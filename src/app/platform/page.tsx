import type { Metadata } from 'next';
import { PlatformPage } from '@/components/pages/PlatformPage';

export const metadata: Metadata = {
    title: 'Our Platform',
    description:
        'Jocata GRID™ — a modular, scalable enterprise ecosystem for digital lending, risk, compliance, and AML.',
};

export default function Platform() {
    return (
            <PlatformPage />
    );
}
