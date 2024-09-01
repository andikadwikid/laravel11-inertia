import './bootstrap';
import '../css/app.css';

import { createRoot, hydrateRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ThemeProvider } from './Components/theme-provider';
import { AppLayout } from './Layouts/app-layout';

import { Ziggy } from '@/ziggy';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const page = resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx'));
        page.then((module: any) => {
            //jika tidak ada layout, berarti layoutnya default
            if (!module.default.layout) {
                module.default.layout = (page: any) => <AppLayout>{page}</AppLayout>;
            }
        });

        return page;
    },
    setup({ el, App, props }) {
        const appElement = (
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <App {...props} />
            </ThemeProvider>
        );

        if (import.meta.env.DEV) {
            createRoot(el).render(appElement);
            return;
        }

        hydrateRoot(el, appElement);
    },
    progress: {
        color: '#4B5563',
        delay: 0,
        showSpinner: true,
    },
});
