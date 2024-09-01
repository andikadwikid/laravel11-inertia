import { Container } from '@/Components/container';
import Header from '@/Components/header';
import InputError from '@/Components/InputError';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import Form from '@/Components/ui/form';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Head, router, useForm } from '@inertiajs/react';

export default function Create() {
    const { data, setData, reset, post, errors } = useForm({
        name: '',
        email: '',
        password: '',
    });

    function store() {
        post(route('users.store'), {
            onSuccess: () => {
                reset('name', 'email', 'password');
            },
        });
    }

    function onChange(e: any) {
        setData(e.target.name, e.target.value);
    }
    return (
        <>
            <Head title="New User" />
            <Header title="New User" />
            <Container>
                <Card className="mt-6">
                    <CardHeader>
                        <CardTitle>New User</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent className="max-w-xl">
                        <Form onSubmit={store} className="space-y-6 [&>div>input]:my-1">
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
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={data.password}
                                    onChange={onChange}
                                />
                            </div>
                            <Button>Save</Button>
                        </Form>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}
