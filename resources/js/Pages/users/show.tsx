import { Container } from '@/Components/container';
import Header from '@/Components/header';
import { Button, buttonVariants } from '@/Components/ui/button';
import { Link, router, usePage } from '@inertiajs/react';

import React from 'react';

export default function Show({ user, articles }: any) {
    function reloadArticle(e: any) {
        e.preventDefault();
        router.reload({ only: ['articles'] });
    }
    return (
        <div>
            <Header title={user.name} />
            <Container>
                {articles &&
                    articles.length > 0 &&
                    articles.map((article: any, index: number) => <p key={article.id}>{article.title}</p>)}
                <Button onClick={reloadArticle} className="my-6">
                    Reload Article
                </Button>
            </Container>
        </div>
    );
}
