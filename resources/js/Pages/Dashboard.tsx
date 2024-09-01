import { Head, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import { AppLayout } from '@/Layouts/app-layout';
import Header from '@/Components/header';

export default function Dashboard({ auth }: PageProps) {
    return (
        <>
            <Head title="Home" />

            <Header title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="border-b border-gray-200 p-6 text-black">You're logged in!</div>
                    </div>
                </div>
            </div>
        </>
    );
}
