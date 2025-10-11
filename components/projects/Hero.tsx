import React from 'react'
import List from './List'

function Hero() {
    return (
        <section id="about" className='main-container bg-darkBackground'>
            <div className='w-[90%] flex flex-col items-center gap-10 max-w-[850px] bg-[#111723] border border-borderDark rounded-sm p-8'>
               <div className='w-full flex flex-col gap-2 items-center'>
                 <h1 className='text-3xl h-[60px] md:text-5xl font-geologica font-semibold gradient-text'>
                    Projects
                </h1>
                <span className='w-full max-w-[500px] text-sm text-white/70 font-geologica text-center'>
                    Every project tells a story — of design, code, and creativity. Take a look at the work I’ve built and the ideas I’ve brought to life.
                </span>
               </div>
                <List />
            </div>
        </section>
    )
}

export default Hero