import type { Metadata } from 'next';
import { AboutPage } from '@/components/pages/AboutPage';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about Jocata — our mission, values, and the team behind India\'s leading fintech platform.',
};

export default function About() {
    return (
        <AboutPage />
    );
}
