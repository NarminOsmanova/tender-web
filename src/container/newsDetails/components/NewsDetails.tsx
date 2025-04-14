'use client'
import type React from "react"
import { mockNews } from "@/data/news"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Linkedin, Twitter, Send, Instagram } from "lucide-react"
import { useRouter } from "next/navigation"

interface NewsDetailsProps {
  slug: string
}

const NewsDetails: React.FC<NewsDetailsProps> = ({ slug }) => {
  const newsItem = mockNews.find((news) => news.slug === slug)

  if (!newsItem) {
    return <div>News not found</div>
  }
  const router = useRouter()
  const shareUrl = `https://tender.com/news/${slug}`

  return (
    <div className="py-16 bg-[#fafafb]">
      <div className="container mx-auto px-4 md:px-6">
        {/* News Header */}
        <div className="  ">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm mb-8">
            <h1 className="text-3xl font-bold mb-2">{newsItem.title}</h1>
            <p className="text-gray-500 text-sm mb-6">{newsItem.date}</p>
            <div className="prose max-w-none mb-8">
              <p className="text-gray-700">{newsItem.description}</p>
            </div>
          </div>

          {/* Social Share Section */}
          <div className="mt-10 mb-6 bg-white p-6 md:p-8 rounded-lg shadow-sm flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-xl font-semibold mb-4">Göstərilən platformalarda paylaş:</h2>
            <div className="flex space-x-4">
              <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                <Facebook className="w-5 h-5 text-gray-700" />
              </Link>
              <Link href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(newsItem.title)}`} target="_blank" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
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

        {/* Related News Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6">Digər</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {mockNews
              .filter((news) => news.slug !== slug)
              .slice(0, 3)
              .map((relatedNews) => (
                <div key={relatedNews.id} className="bg-gradient-to-r from-[#EAFFFC] to-[#FFFFFF] rounded-lg overflow-hidden shadow-md" onClick={() => { router.push(`/news/${relatedNews.slug}`) }}>
                  <div className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 flex justify-center">
                      <Image
                        width={80}
                        height={80}
                        src={relatedNews.image || "/placeholder.svg"}
                        alt={relatedNews.title}
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                    <p className="text-gray-700 text-sm mb-2">{relatedNews.date}</p>
                    <h3 className="text-lg font-semibold">{relatedNews.title}</h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsDetails
