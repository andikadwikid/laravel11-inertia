import { cn } from '@/lib/utils';
import { InertiaLinkProps, Link, usePage } from '@inertiajs/react';
import Logo from './logo';
import NavLink from './NavLink';
import { Container } from './container';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { useTheme } from './theme-provider';
import { PageData } from '@/types';

export function Navbar() {
    const { auth } = usePage<PageData>().props;

    const { setTheme } = useTheme();

    return (
        <nav className="border-b bg-background py-4 shadow-sm">
            <Container>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <Link className="mr-8" href="/">
                            <Logo />
                            <span className="sr-only">Go to home page.</span>
                        </Link>

                        <NavbarLink current={route().current('home')} href={route('home')}>
                            Home
                        </NavbarLink>

                        <NavbarLink
                            only={['users']}
                            current={route().current('users.index')}
                            href={route('users.index')}
                        >
                            Users
                        </NavbarLink>

                        <NavbarLink current={route().current('dashboard')} href={route('dashboard')}>
                            Dashboard
                        </NavbarLink>
                    </div>

                    {auth.user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger className="group flex items-center gap-x-4 text-sm text-muted-foreground hover:text-foreground focus:outline-none data-[state=open]:text-foreground">
                                {auth.user.name}
                                <ChevronDown className="size-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuLabel>
                                    <div>{auth.user.name}</div>
                                    <div className="text-muted-foreground">{auth.user.email}</div>
                                </DropdownMenuLabel>

                                <DropdownMenuSeparator></DropdownMenuSeparator>

                                <DropdownMenuItem asChild>
                                    <Link href={route('dashboard')}>Dashboard</Link>
                                </DropdownMenuItem>

                                <DropdownMenuItem asChild>
                                    <Link href={route('profile.edit')}>Edit Profile</Link>
                                </DropdownMenuItem>

                                <DropdownMenuSeparator></DropdownMenuSeparator>

                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>
                                        <span>Switch theme</span>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem onSelect={(e) => setTheme('system')}>
                                                System
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onSelect={(e) => setTheme('dark')}>Dark</DropdownMenuItem>
                                            <DropdownMenuItem onSelect={(e) => setTheme('light')}>
                                                Light
                                            </DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>

                                <DropdownMenuSeparator></DropdownMenuSeparator>

                                <DropdownMenuItem asChild>
                                    <Link href={route('logout')} method="post" as="button">
                                        Logout
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <div className="flex items-center">
                            <NavbarLink href={route('login')}>Login</NavbarLink>

                            <NavbarLink href={route('register')}>Register</NavbarLink>
                        </div>
                    )}
                </div>
            </Container>
        </nav>
    );
}

interface NavbarProps extends InertiaLinkProps {
    current?: boolean;
    className?: string;
}

export function NavbarLink({ current, className, ...props }: NavbarProps) {
    return (
        <Link
            className={cn(
                'rounded-full px-3 py-1.5 text-sm tracking-tight transition-colors duration-200 hover:bg-secondary hover:text-secondary-foreground',
                current
                    ? 'bg-secondary font-medium text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary'
                    : 'text-muted-foreground',
                className,
            )}
            {...props}
        />
    );
}
