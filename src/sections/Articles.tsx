import ArticleCard from "../components/ArticleCard"
import { articles } from "../data/articles"

export default function Articles() {
  return (
    <section className="bg-black text-white py-20 px-6">

      <h2 className="text-5xl font-bold text-center mb-12">
        Latest Skate Stories
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {articles.map((article,index) => (
            <ArticleCard
            key={index}
            title={article.title}
            description={article.description}
            image={article.image}
            />
        ))}
      </div>
    </section>
  )
}