import type { Metadata } from 'next';
import { ContactPage } from '@/components/pages/ContactPage';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with Jocata — request a demo, ask questions, or discuss your fintech transformation journey.',
};

export default function Contact() {
    return (
            <ContactPage />
    );
}
