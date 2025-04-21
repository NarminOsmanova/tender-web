'use client'
import { mockNews } from '@/data/news'
import Image from 'next/image'
import React, { useState } from 'react'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/shared/components/ui/pagination'
import { useRouter } from 'next/navigation'

const News = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

//   const totalPages = Math.ceil(mockNews.length / itemsPerPage)
const router=useRouter()

  const currentItems = mockNews.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const totalPages = Math.ceil(mockNews.length / itemsPerPage);

  // Ensure currentPage is valid after filtering
  if (currentPage > totalPages && totalPages > 0) {
    setCurrentPage(totalPages); // Go to last page if current page is out of bounds
  } else if (currentPage < 1 && totalPages > 0) {
    setCurrentPage(1); // Go to first page if current page is out of bounds
  }

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <div className="py-16 px-4 container" >
      <h1 className="text-2xl md:text-4xl font-bold mb-6">Xəbərlər</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.map((news) => (
          <div key={news.id} className="bg-gradient-to-r from-[#EAFFFC] to-[#FFFFFF] shadow-lg rounded-lg overflow-hidden cursor-pointer" onClick={()=>{router.push(`/news/${news.slug}`)}}>
            <Image width={300} height={300} src={news.image} alt={news.title} className="w-full h-64 object-contain" />
            <div className="p-4">
              <p className="text-gray-500 text-sm">{news.date}</p>
              <h2 className="text-lg font-semibold mt-2">{news.title}</h2>
            </div>
          </div>
        ))}
      </div>
       {/* Pagination Section */}
       {totalPages > 1 && (
        <div className="mt-12">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  size="sm"
                  href="#"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); handlePageChange(currentPage - 1); }}
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
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); handlePageChange(page); }}
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
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); handlePageChange(currentPage + 1); }}
                  aria-disabled={currentPage === totalPages}
                  className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  )
}

export default News