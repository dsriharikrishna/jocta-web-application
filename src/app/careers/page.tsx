import type { Metadata } from 'next';
import { CareersPage } from '@/components/pages/CareersPage';

export const metadata: Metadata = {
    title: 'Careers',
    description: 'Join the Jocata team — where smart, passionate people are changing the future of fintech.',
};

export default function Careers() {
    return (
        <CareersPage />
    );
}
