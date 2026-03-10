type ArticleCardProps = {
    title: string,
    description: string,
    image: string
}


export default function ArticleCard({ title, description, image }: ArticleCardProps){
    return (
        <div className="bg-zinc-900 rounded-xl p-6 hover:scale-105 transition-transform duration-300">
            <img src={image} alt={title} className="w-full h-48 object-cover"/>

            <div className="p-4">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-400 mt-2">{description}</p>
            </div>
        </div>
    )
}