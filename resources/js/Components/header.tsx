import React from 'react';
import { Container } from './container';

export default function Header({ title }: { title: string }) {
    return (
        <header className="mb-5 border-b py-6">
            <Container>
                <h1 className="text-3xl font-semibold tracking-tight text-foreground">{title}</h1>
            </Container>
        </header>
    );
}
