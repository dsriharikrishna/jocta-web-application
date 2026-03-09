import type { Metadata } from 'next';
import { SuccessStoriesPage } from '@/components/pages/SuccessStoriesPage';

export const metadata: Metadata = {
    title: 'Success Stories',
    description: 'Discover how Jocata has helped banks and financial institutions modernize with AI-powered fintech solutions.',
};

export default function SuccessStories() {
    return (
            <SuccessStoriesPage />
    );
}
