type Article = {
    title: string,
    description: string,
    image: string,
    category: string
}


export default function ArticleCard({ article }: { article: Article }){
    return (
       <div className="group relative overflow-hidden rounded-xl">

        <img
         src={article.image}
         alt={article.title}
         className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
         />

         <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
         
         <span className="text-xs bg-red-600 px-2 py-1 w-fit mb-2 rounded">
            {article.category}
         </span>

         <h3 className="text-white text-lg font-bold">
            {article.title}
         </h3>

         <p className="text-gray-300 text-sm">
            {article.description}
         </p>

         </div>
       </div>
    )
}