import { Navbar } from '@/Components/navbar';
import React, { useEffect } from 'react';
import { Toaster } from '@/Components/ui/sonner';
import { usePage } from '@inertiajs/react';
import { icons } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';
import { FlashMessageData } from '@/types';

export function AppLayout({ children }: { children: React.ReactNode }) {
    const { flashMessage } = usePage<{ flashMessage: FlashMessageData }>().props;

    // Menentukan tipe meta tag untuk mendapatkan CSRF token
    const csrfToken = (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content;

    if (csrfToken) {
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
    } else {
        console.error('CSRF token not found');
    }

    useEffect(() => {
        if (flashMessage && flashMessage.title && flashMessage.message) {
            toast(flashMessage.title, {
                description: flashMessage.message,
                icon: flashMessage.icon,
            });
        }
    }, [flashMessage]);

    return (
        <div className="min-h-svh bg-muted/40">
            <Toaster />
            <Navbar />
            {children}
        </div>
    );
}
