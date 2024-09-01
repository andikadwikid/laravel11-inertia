import { Navbar } from '@/Components/navbar';
import React, { useEffect } from 'react';
import { Toaster } from '@/Components/ui/sonner';
import { usePage } from '@inertiajs/react';
import { icons } from 'lucide-react';
import { toast } from 'sonner';

interface FlashMessageProps {
    title: string;
    message: string;
    icon?: string;
}
export function AppLayout({ children }: { children: React.ReactNode }) {
    const { flash_message } = usePage<{ flash_message: FlashMessageProps }>().props;

    useEffect(() => {
        if (flash_message && flash_message.title && flash_message.message) {
            toast(flash_message.title, {
                description: flash_message.message,
                icon: flash_message.icon,
            });
        }
    }, [flash_message]);

    return (
        <div className="min-h-svh bg-muted/40">
            <Toaster />
            <Navbar />
            {children}
        </div>
    );
}
