import Hero from '@/components/contact/Hero'
import React from 'react'

function page() {
    return (
        <main className="max-w-screen flex flex-col items-center min-h-screen bg-darkBackground">
            <div className="bg-darkBackground border-r-1 border-l-1 border-dashed border-borderDark  h-40 w-[90%] max-w-[850px]" />
            <section className=" border-t-1 border-b-1 border-dashed border-borderDark">
                <Hero />
            </section>
        </main>
    )
}

export default page