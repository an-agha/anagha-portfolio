import PrimaryButton from '@/components/core/button/Primary'
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
            link: 'https://github.com/an-agha/anagha-portfolio',
            icon: 'icon-park-outline:code',
        },
    ]

    return (
        <section className='main-container bg-darkBackground'>
            <div className="relative max-container  flex flex-col items-center justify-center">
                <div className='w-[90%] flex flex-col items-center bg-[#111723] max-w-[850px] border border-borderDark text-geologica rounded-sm px-10 py-20 gap-15'>
                    <div className='flex flex-col gap-2 md:gap-4 items-center'>
                        <span className='font-geologica text-sm md:text-base text-white/50'>
                            WELCOME TO
                        </span>
                        <Image 
                        src="/images/profile.png"
                        width={100}
                        height={100} 
                        className='w-20 h-20 rounded-full object-cover' 
                        alt="Anagha profile" 
                        />
                        <h1 className='font-geologica text-center text-[26px] md:text-4xl lg:text-6xl font-extrabold gradient-text'>
                            ANAGHA NISAKAR
                        </h1>
                        <span className='text-lg md:text-xl text-center text-white font-geologica font-medium'>
                            Developer Portfolio
                        </span>
                        <span className='text-sm md:text-md text-center text-white/60'>
                            Converting curious into code
                        </span>
                        <PrimaryButton download content='Download My Resume' icon="material-symbols:download" link="/images/files/AnaghaNisakar.pdf" />
                    </div>
                    <div className='flex gap-3'>
                        {
                            socailmedia.map((item,index) => (
                                <Link href={item.link} 
                                key={index}
                                target='blank'
                                className='w-10 h-10 rounded-md bg-[#1d2839] hover:bg-linear-to-r from-backgroundDark via-accent/15 to-backgroundDark border-[0.5] border-borderDark flex flex-col items-center justify-center hover:border-accent/40 group'>
                                    <Icon icon={item.icon} className='text-accent/50 text-xl group-hover:text-accent' />
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