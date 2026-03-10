import {  useState } from 'react'


export default function NewsletterSignup () {
    const [email,setEmail] = useState("")
    const [success,setSuccess] = useState(false)
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)


function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()


    if (!email.includes("@")) {
        setError("Please enter a valid email")
        return
    }

    setError("")
    setLoading(true)
   
    setTimeout(() => {
        setLoading(false)
        setSuccess(true)
        setEmail("")
    }, 1500)
}
    return (
        <section
        id='newsletter'
         className='bg-zinc-900 text-white py-20 px-6 text-center'>
            <h2 className='text-4xl font-bold mb-6'>
                Join the Underground
            </h2>

            <p className='text-gray-400 mb-8'>
                Get weekly skate news, hidden spots, and raw street clips.
            </p>

            <form
            onSubmit={handleSubmit}
            className='flex flex-col sm:flex-row gap-4 justify-center'
            >
                <input 
                type="email"
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='px-4 py-3 rounded-lg text-black w-full sm:w-80'
                />

                <button
                type='submit'
                disabled={loading}
                className='px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-bold'
                >
                    {loading ? "Subscribing..." : "Subscribe"}
                </button>
            </form>

            {error && (
                <p className='text-red-400 mt-4'>
                    {error}
                </p>
            )}

            {success && (
                <p className='text-green-400 mt-6'>
                    You're in! Check your email for the next drop.
                </p>
            )}
        </section>
    )
}