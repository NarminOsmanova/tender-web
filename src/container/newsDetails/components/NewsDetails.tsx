'use client'
import React from "react"
import Image from "next/image"
import { useNewsByIdOrSlug } from "@/lib/hooks/useNews"
import Link from "next/link"
import { Facebook, Linkedin, Send, Instagram } from "lucide-react"
import { useRouter } from "next/navigation"
import { useNews } from "@/lib/hooks/useNews"
import { ChevronRight } from "lucide-react"
import { useLocale } from "next-intl"
import { useTranslations } from "next-intl"
import { formatDate } from "@/lib/utils"

interface NewsDetailsProps {
  slug: string
}

const NewsDetails: React.FC<NewsDetailsProps> = ({ slug }) => {
  const { data: news, isLoading, error } = useNewsByIdOrSlug({ slug });
  const { data: allNews, isLoading: isAllLoading } = useNews();
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations("news")

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading news</div>
  if (!news) return <div>News not found</div>

  // Dilə görə başlıq və təsviri seçmək üçün (məsələn, EN)
  const currentSet = Array.isArray(news.newsSets)
    ? news.newsSets.find(set => set.language === "EN") || news.newsSets[0]
    : news.newsSets;


  const shareUrl = `https://tender.com/news/${slug}`

  // Related news (current slug-u çıx)
  const relatedNews = (allNews || [])
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  return (
    <div className="py-16 bg-[#fafafb]">
      <div className="container mx-auto px-4 md:px-6">
        {/* News Header */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm mb-8">
            <h1 className="text-3xl font-bold mb-2">{currentSet?.title}</h1>
            <p className="text-gray-500 text-sm mb-6">{formatDate(news.createdDate)}</p>
            <div className="prose max-w-none mb-8">
              <p className="text-gray-700">{currentSet?.description}</p>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap mb-8">
          {Array.isArray(news.images) && news.images.map((img, idx) => {
            if (typeof img === 'string') {
              return (
                <Image
                  key={idx}
                  src={img}
                  alt={currentSet?.title || 'news-image'}
                  width={200}
                  height={120}
                  className="rounded"
                />
              );
            } else {
              return (
                <Image
                  key={img.id ?? idx}
                  src={img.imageUrl || ''}
                  alt={currentSet?.title ||'news-image'}
                  width={200}
                  height={120}
                  className="rounded"
                />
              );
            }
          })}
        </div>
          {/* Social Share Section */}
          <div className="mt-10 mb-6 bg-white p-6 md:p-8 rounded-lg shadow-sm flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-xl font-semibold mb-4">{t("platform")}:</h2>
            <div className="flex space-x-4">
              <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                <Facebook className="w-5 h-5 text-gray-700" />
              </Link>
              <Link
                href={`https://www.instagram.com/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Instagram className="w-5 h-5 text-gray-700" />
              </Link>
              <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-700" />
              </Link>
              <Link href={`https://wa.me/?text=${encodeURIComponent(shareUrl)}`} target="_blank" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                <Send className="w-5 h-5 text-gray-700" />
              </Link>
            </div>
          </div>
        </div>

        {/* diger news */}
        <div className="mt-10 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">{t("other")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedNews.map((relatedNews) => {
              const relatedSet = Array.isArray(relatedNews.newsSets)
                ? relatedNews.newsSets.find(set => set.language === "EN") || relatedNews.newsSets[0]
                : relatedNews.newsSets;
              return (
                <div key={relatedNews.id} className="cursor-pointer bg-gradient-to-r from-[#EAFFFC] to-[#FFFFFF] rounded-lg overflow-hidden shadow-md" onClick={() => { router.push(`/${locale}/news/${relatedNews.slug}`) }}>
                  <div className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 flex justify-center">
                      <Image
                        width={80}
                        height={80}
                        src={relatedNews.coverImage}
                        alt={relatedSet?.title || "news"}
                        className="w-40 h-28 object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold">{relatedSet?.title}</h3>
                    <span className='p-4 flex items-center  gap-2'>{t("more")} <ChevronRight className="w-4 h-4" /></span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsDetails
