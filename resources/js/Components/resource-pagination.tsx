import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/Components/ui/pagination';
import { Button, buttonVariants } from '@/Components/ui/button';

export default function ResourcePagination({ meta }: any) {
    return (
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
    );
}
