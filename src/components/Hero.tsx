import { useState } from 'react';



export default function Hero (){
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        if (!email.includes("@")) {
            alert("Please enter a valid email");
            return
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setEmail("");
        }, 1200);
    }


    return (
        <section 
        className='relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden'
        >

                {/* Background */}
                <div className='absolute inset-0'>
                    <img
                        src='https://images.unsplash.com/photo-1517649763962-0c623066013b'
                        alt='Skateboarding'
                        className='w-full h-full object-cover opacity-40'
                     />
                     <div className='absolute inset-0 bg-gradient-to-b from-black/70 to-black'/>
                     </div>
 {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Raw Skate Culture
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto">
          Weekly underground skate news, local spot highlights, and raw stories
          from the streets.
        </p>

        {/* Email Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 w-full sm:w-80 rounded-lg bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 hover:scale-105 transition rounded-lg font-bold disabled:opacity-50"
          >
            {loading ? "Joining..." : "Join the Crew"}
          </button>
        </form>

        {success && (
          <p className="mt-4 text-green-400">
            You're in! Check your inbox for the next drop.
          </p>
        )}

        <p className='mt-4 text-sm text-gray-400'>
            Join 1,200+ skaters getting weekly street drops.
        </p>

      </div>
    </section>
    )

}