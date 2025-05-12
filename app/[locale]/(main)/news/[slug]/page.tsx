import NewsDetailsContainer from '@/container/newsDetails'
import React from 'react'
import { mockNews } from '@/data/news'

const NewsDetailsPage = ({ params }:any) => {
  const { slug } = params;

  return (
    <main>
        <NewsDetailsContainer slug={slug}/>
    </main>
  )
}

export async function generateStaticParams() {
    // Use slugs from mockNews
    const slugs = mockNews.map(news => news.slug)

    return slugs.map((slug) => ({
        slug,
    }));
}

export default NewsDetailsPage