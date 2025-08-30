import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section className='max-container min-h-screen px-10 py-20 flex flex-col lg:flex-row gap-10 lg:gap-20 lg:justify-items lg:items-center'>
      <div className='w-full flex flex-col lg:w-1/2 gap-4 lg:gap-6'>
        <h1 className='text-2xl lg:text-5xl font-bold text-white text-right leading-15'>
          Hi, Welcome<br />
          to my . portfolio <br />
          Anagha Nisakar
        </h1>
        <h3 className='text-xl lg:text-2xl font-semibold text-white text-right'>
          Frontend Developer
        </h3>
        <span className='text-sm lg:text-base font-light text-white text-right'>
          A Frontend Developer is responsible for building engaging, responsive, and user-friendly interfaces for web applications. They work closely with designers and backend developers to translate design mockups and functional requirements into efficient, interactive, and visually appealing web experiences.
        </span>
      </div>
      <div className='w-1 h-full max-h-[60vh] bg-white hidden lg:block' />
        <Image 
        src="/images/hero.png"
        width={600}
        height={800}
        alt="anagha nisakar profile image"
        className='h-[500px] object-contain object-left'
         />
    </section>
  )
}

export default Hero