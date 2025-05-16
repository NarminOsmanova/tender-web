import NewsDetailsContainer from '@/container/newsDetails'
import React from 'react'

const NewsDetailsPage = ({ params }: any) => {
  const { slug } = params;
  return (
    <main>
      <NewsDetailsContainer slug={slug}/>
    </main>
  )
}

export default NewsDetailsPage