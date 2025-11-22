import Hero from '@/components/projects/Hero'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Projects | Anagha Nisakar – Frontend Developer",
  description:
    "Explore projects by Anagha Nisakar, a Frontend Developer skilled in Vue, Nuxt, React, and Next.js. Showcasing responsive, user-focused, and high-performance web applications.",
};

function page() {
    return (
        <main className="max-w-screen flex flex-col items-center min-h-screen bg-darkBackground">
            <div className="bg-darkBackground border-r-1 border-l-1 border-dashed border-borderDark  h-40 w-[90%] max-w-[850px]" />
            <section className=" border-t-1 border-b-1 border-dashed border-borderDark">
                <Hero />
            </section>
            <div className="bg-darkBackground border-r-1 border-l-1 border-dashed border-borderDark  h-40 w-[90%] max-w-[850px]" />
        </main>
    )
}

export default page