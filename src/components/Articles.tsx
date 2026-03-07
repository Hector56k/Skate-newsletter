const articles = [
    {
        title: "Top 5 DIY Skate Spots",
        description: "Secret skate spots built by skaters for skaters.",
        image: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d"
    },
    {
        title: "Why Stair Sets Define Skaters",
        description: "The psychology behind committing to big tricks.",
        image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf"
    },
    {
        title: "Underground Skate Brands",
        description: "Brands keeping skate culture raw.",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952"
    },
    {
        title: "Who Is The Next Up And Coming Ams.",
        description: "Get to know the future.",
        image: "https://i.ytimg.com/vi/l8-JItoo5pw/hqdefault.jpg"
    },
    {
        title: "Is The Industry Going Under",
        description: "Why these companies are dying.",
        image: "https://hips.hearstapps.com/hmg-prod/images/articles/2016/01/panic-1508866251.jpg?crop=0.845xw:1xh;center,top&resize=1200:*"
    }
]

import ArticleCard from "./ArticleCard"

export default function Articles() {
  return (
    <section className="bg-black text-white py-20 px-6">

      <h2 className="text-4xl font-bold text-center mb-12">
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