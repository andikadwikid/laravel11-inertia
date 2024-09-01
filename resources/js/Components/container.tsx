import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
    className?: string;
    children?: React.ReactNode;
}
export function Container({ className, children }: Props) {
    return <div className={cn('mx-auto max-w-7xl px-4 sm:px-6', className)}>{children}</div>;
}
