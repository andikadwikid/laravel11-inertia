import { Link, Head, usePage } from '@inertiajs/react';
import Header from '@/Components/header';
import { PageProps } from '@/types';
import { AppLayout } from '@/Layouts/app-layout';
import { Container } from '@/Components/container';

export default function Home({ auth, page_settings, users }: any) {
    // const { page_settings, users } = usePage<any>().props;
    return (
        <>
            <Head title={page_settings.title} />
            {/* <Header title={page_settings.title} /> */}
            <Container>
                {users.length > 0 ? (
                    <div className="mt-5 grid grid-cols-3 gap-6">
                        {users.map((user: any) => (
                            <div key={user.id}>{user.name}</div>
                        ))}
                    </div>
                ) : (
                    <div>No users</div>
                )}
            </Container>
        </>
    );
}

Home.layout = (page: any) => (
    <AppLayout>
        <Header title={page.props.page_settings.title} />
        {page}
    </AppLayout>
);
