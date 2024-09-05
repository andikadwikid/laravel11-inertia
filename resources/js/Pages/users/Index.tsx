import { Container } from '@/Components/container';
import Header from '@/Components/header';
import { buttonVariants } from '@/Components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu';

import { Head, Link, useForm, usePage } from '@inertiajs/react';
import DeleteUser from './Delete';
import { IconDotsVertical, IconHighlight, IconOpenLink, IconTrash } from '@irsyadadl/paranoid';
import ResourcePagination from '@/Components/resource-pagination';
import { UserData } from '@/types';

export default function Index(props: any) {
    const { data: users, meta, links } = props.users;
    return (
        <>
            <Head title="Users" />
            <Header title="Users" />
            <Container>
                <div className="flex justify-end">
                    <Link className={buttonVariants()} href={route('users.create')}>
                        Add User
                    </Link>
                </div>

                <Table className="my-6">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-0">#</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Joined</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.length > 0 ? (
                            users.map((user: UserData, index: number) => (
                                <TableRow key={user.id}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center">
                                            <img
                                                src={user.gravatar}
                                                alt={user.name}
                                                className="img mr-2 size-4 shrink-0 rounded"
                                            />
                                            {user.name}
                                        </div>
                                    </TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.created_at}</TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger>
                                                    <IconDotsVertical className="size-4" />
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent className="w-48 [&_svg]:mr-2" align="end">
                                                    <DropdownMenuLabel>User ID: {user.id}</DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem asChild>
                                                        <Link href={route('users.show', user.id)}>
                                                            <IconOpenLink />
                                                            Show
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem asChild>
                                                        <Link href={route('users.edit', user.id)}>
                                                            <IconHighlight />
                                                            Edit
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                                        <IconTrash />
                                                        <DeleteUser user={user}></DeleteUser>
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center">
                                    No users found
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>

                <ResourcePagination meta={meta} />
            </Container>
        </>
    );
}
