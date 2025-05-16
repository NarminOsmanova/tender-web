'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { useNewsPagination } from '@/lib/hooks/useNews'
import Pagination from './Pagination'
import { useLocale } from 'next-intl'
import { useTranslations } from 'next-intl'
import { formatDate } from '@/lib/utils'
const News = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const { data, isLoading, error } = useNewsPagination(currentPage, itemsPerPage)
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations("news")
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading news</div>
  if (!data) return null

  const currentItems = data.items
  const totalPages = data.totalPages

  return (
    <div className="py-16 px-4 container mx-auto" >
      <div className='max-w-7xl mx-auto'>
        <h1 className="text-2xl md:text-4xl font-bold mb-6">{t("title")}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.map((news) => (
          <div key={news.id} className="bg-gradient-to-r from-[#EAFFFC] to-[#FFFFFF] shadow-lg rounded-lg overflow-hidden cursor-pointer" onClick={() => { router.push(`/${locale}/news/${news.slug}`) }}>
            <Image width={300} height={300} src={news.coverImage} alt={news.newsSets?.title || 'news'} className="w-full h-64 object-cover" />
            <div className="p-4">
              {/* Tarix və başlıq üçün newsSet-dən uyğun dili seçə bilərsiniz */}
              <p className="text-gray-500 text-sm">{formatDate(news.createdDate)}</p>
              <h2 className="text-lg font-semibold mt-2">{news.newsSets?.title}</h2>
              <p className="text-sm mt-1">{news.newsSets?.description}</p>
            </div>
            <span className='p-4 flex items-center  gap-2'>{t("more")} <ChevronRight className="w-4 h-4" /></span>
          </div>
        ))}
      </div>
      {/* Pagination Section */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
      </div>
    </div>
  )
}

export default News