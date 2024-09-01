import { Container } from '@/Components/container';
import Header from '@/Components/header';
import { Button, buttonVariants } from '@/Components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu';

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/Components/ui/pagination';

import { Head, Link, useForm } from '@inertiajs/react';
import DeleteUser from './Delete';
import { IconDotsVertical, IconHighlight, IconTrash } from '@irsyadadl/paranoid';

export default function Index(props: any) {
    const { data: users, meta, links } = props.users;
    console.log(users, meta, links);
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
                            users.map((user: any, index: number) => (
                                <TableRow key={user.id}>
                                    <TableCell className="text-center">{index + 1}</TableCell>
                                    <TableCell className="text-center">{user.name}</TableCell>
                                    <TableCell className="text-center">{user.email}</TableCell>
                                    <TableCell className="text-center">{user.created_at}</TableCell>
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
                {/* {meta.links.map((link: any, index: number) => (
                    <Link href={link.url} key={index}>
                        {link.label}
                    </Link>
                ))} */}

                <Pagination className="py-8">
                    <PaginationContent>
                        {meta.links.map((link: any, index: number) => (
                            <PaginationItem key={index}>
                                {link.url == null ? (
                                    <Button variant={'ghost'} disabled>
                                        {link.label}
                                    </Button>
                                ) : (
                                    <PaginationLink
                                        as="button"
                                        disabled={link.active}
                                        isActive={link.active}
                                        size={link.label === 'Previous' || link.label === 'Next' ? 'default' : 'icon'}
                                        href={link.url}
                                    >
                                        {link.label}
                                    </PaginationLink>
                                )}
                            </PaginationItem>
                        ))}
                    </PaginationContent>
                </Pagination>
            </Container>
        </>
    );
}
