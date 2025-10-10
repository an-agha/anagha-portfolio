import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {

    const socailmedia = [
        {
            link: 'https://www.linkedin.com/in/anagha-nisakar/',
            icon: 'basil:linkedin-outline',
        },
        {
            link: 'https://github.com/an-agha',
            icon: 'mdi:github',
        },
        {
            link: 'mailto:anaghanisakar@gmail.com',
            icon: 'material-symbols:mail-outline',
        },
        {
            link: '',
            icon: 'icon-park-outline:code',
        },
    ]

    return (
        <section className='main-container bg-darkBackground'>
            <div className="relative max-container  flex flex-col items-center justify-center">
                <div className='w-[90%] flex flex-col items-center bg-[#111723] max-w-[850px] border border-borderDark text-geologica rounded-sm px-10 py-20 gap-15'>
                    <div className='flex flex-col gap-4 items-center'>
                        <span className='font-geologica text-white/50'>
                            WELCOME TO
                        </span>
                        <Image 
                        src="/images/profile.png"
                        width={100}
                        height={100} 
                        className='w-20 h-20 rounded-full object-cover' 
                        alt="Anagha profile" 
                        />
                        <h1 className='font-geologica text-4xl lg:text-6xl font-extrabold gradient-text'>
                            ANAGHA NISAKAR
                        </h1>
                        <span className='text-xl text-white font-geologica font-medium'>
                            Developer Portfolio
                        </span>
                        <span className='text-md text-white/60'>
                            Converting curious into code
                        </span>
                    </div>
                    <div className='flex gap-3'>
                        {
                            socailmedia.map((item,index) => (
                                <Link href={item.link} 
                                key={index}
                                className='w-10 h-10 rounded-md bg-[#1d2839] border-[0.5] border-borderDark flex flex-col items-center justify-center'>
                                    <Icon icon={item.icon} className='text-accent/50 text-xl' />
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero