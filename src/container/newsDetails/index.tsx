import React from 'react'
import NewsDetails from './components/NewsDetails'

interface NewsDetailsProps {
  slug: string
}
const NewsDetailsContainer = ({slug}:NewsDetailsProps) => {
  return (
    <section>
        <NewsDetails slug={slug}/>
    </section>
  )
}

export default NewsDetailsContainer