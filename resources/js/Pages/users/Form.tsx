import { Container } from '@/Components/container';
import Header from '@/Components/header';
import InputError from '@/Components/InputError';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import Form from '@/Components/ui/form';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import { toast } from 'sonner';

interface PageSettingsProps {
    title: string;
    url: string;
    method: 'post' | 'put';
}

export default function Edit({ user, page_settings }: { user: any; page_settings: PageSettingsProps }) {
    const { data, setData, reset, post, errors } = useForm({
        name: user?.name ?? '',
        email: user?.email ?? '',
        password: '',
        _method: page_settings.method,
    });

    function submit() {
        post(page_settings.url, {
            onSuccess: (): void => {
                reset('name', 'email');
            },
        });
    }

    function onChange(e: any) {
        setData(e.target.name, e.target.value);
    }
    return (
        <>
            <Head title={page_settings.title} />
            <Header title={page_settings.title} />
            <Container>
                <Card className="mt-6 pt-6">
                    <CardContent className="max-w-xl">
                        <Form onSubmit={submit} className="space-y-6 [&>div>input]:my-1">
                            <div>
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" name="name" type="text" value={data.name} onChange={onChange} />
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" name="email" type="email" value={data.email} onChange={onChange} />
                                <InputError message={errors.email} className="mt-2" />
                            </div>
                            <div>
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" name="password" type="password" onChange={onChange} />
                            </div>
                            <Button>Save</Button>
                        </Form>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}
