import React from 'react'
import {
  Pagination as UiPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/shared/components/ui/pagination'

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="mt-12">
      <UiPagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              size="sm"
              href="#"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); onPageChange(currentPage - 1); }}
              aria-disabled={currentPage === 1}
              className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            const showPage = page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1;
            const showEllipsis = Math.abs(page - currentPage) === 2 && totalPages > 5;

            if (showEllipsis) {
              const isEllipsisBefore = page < currentPage;
              const showThisEllipsis = (isEllipsisBefore && Math.abs(page - 1) > 1) || (!isEllipsisBefore && Math.abs(page - totalPages) > 1);
              if (showThisEllipsis) {
                return <PaginationItem key={`ellipsis-${page}`}><PaginationEllipsis /></PaginationItem>;
              }
            }

            if (showPage) {
              return (
                <PaginationItem key={page}>
                  <PaginationLink
                    size="sm"
                    href="#"
                    isActive={currentPage === page}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); onPageChange(page); }}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              );
            }
            return null;
          })}
          <PaginationItem>
            <PaginationNext
              size="sm"
              href="#"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); onPageChange(currentPage + 1); }}
              aria-disabled={currentPage === totalPages}
              className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
        </PaginationContent>
      </UiPagination>
    </div>
  )
}

export default Pagination