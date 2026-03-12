import ArticleCard from "../components/ArticleCard"
import { articles } from "../data/articles"

export default function Articles() {
  return (
    <section 
    id="articles"
    className="bg-black text-white py-20 px-6">

      <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
        Latest Skate Stories
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
            <ArticleCard
            key={article.id}
            article={article}
            />
        ))}
      </div>
    </section>
  )
}