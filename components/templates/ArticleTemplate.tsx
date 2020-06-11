import * as React from 'react'

import { Navigation, Title, Content, Footer } from '~/components/organisms'
import { AnimatedRoute } from '~/components/atoms'

type Props = { article: Article }

export const ArticleTemplate: React.FC<Props> = ({ article }) => {
  return (
    <AnimatedRoute>
      <div className="flex flex-col min-h-screen">
        <div className="relative">
          <div className="absolute w-full h-480px max-h-900 bg-gray-900 -z-1" />
          <Navigation />
          <Title title={article.title} date={article.publishDate} />
          <Content article={article} />
        </div>
      </div>
      <Footer />
    </AnimatedRoute>
  )
}
