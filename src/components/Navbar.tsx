export default function Navbar () {
    return (
        <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center border-b border-zinc-800">

            <h1 className="text-xl font-black tracking-wider text-red-500">
                KICKPUSH
            </h1>

            <div className="flex gap-8 text-sm">
                <a href="#articles" 
                className="relative group">
                    Stories
                    <span className="absolute left-0 -botton-1 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full"></span>
                    </a>
                <a href="#newsletter" 
                className="relative group">
                    Subscribe
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full"></span>
                    </a>
            </div>


        </nav>
    )
}