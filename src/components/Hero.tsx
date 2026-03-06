import { useState } from 'react';



export default function Hero (){
    const [email, setEmail] = useState("");


    return (
        <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">

            {/* Background Image */}
            <div className='absolute inset-0'>
                <img 
                src='https://images.unsplash.com/photo-1517649763962-0c623066013b'
                alt='Skateboarding'
                className='w-full h-full object-cover opacity-40'
                />
                <div className='absolute inset-0 bg-gradient-to-b from-black/70 to-black'/>
            </div>

            {/* Content */}
            <div className='relative z-10 text-center px-6 max-w-3xl'>
                <h1 className='text-4xl md:text-6xl font-extrabold leading-tight'>
                    Skate Newsletter < span className='text-green-500'>Without the Filter</span>
                </h1>

                <p className='mt-6 text-lg md:text-xl text-gray-300'>
                    Weekly underground skate news, local spot highlights, and raw stories from the streets.
                </p>

                {/* Email Input */}
                <div className='mt-8 flex flex-col sm:flex-row gap-4 justify-center'>
                    <input
                    type='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='px-4 py-3 w-full sm:w-80 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 hover:ring-green-500'
                    />
                    <button
                    className='px-6 py-3 bg-green-500 hover:bg-green-600 transition duration-300 rounded-lg font-semibold '
                    >
                        Join the crew!
                    </button>
                </div>
            </div>
        </section>
    )

}