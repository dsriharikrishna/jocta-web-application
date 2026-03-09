import type { Metadata } from 'next';
import { AiScoringPage } from '@/components/pages/AiScoringPage';

export const metadata: Metadata = {
    title: 'AI Scoring — SWARA',
    description: 'SWARA by Jocata — AI/ML-based scoring & analytics for deep behavioural insights on Retail, Self-Employed, and MSME customers.',
};

export default function AiScoring() {
    return (
        <AiScoringPage />
    );
}
