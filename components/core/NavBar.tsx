import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import React from 'react'
import PrimaryButton from '@/components/core/button/Primary'
import Image from 'next/image'

function NavBar() {
    return (
        <nav className='w-[90%] max-w-[450px] border border-borderDark h-12 fixed top-4  left-1/2 translate-x-[-50%] rounded-md flex justify-between items-center pl-3 p-1 z-100 bg-darkBackground shadow-md'>
            <div className='flex gap-4 items-center'>
                <Image 
                src="/anaghanisakar-logo.png"
                width={300}
                height={300}
                className='h-9 w-9 rounded-full'
                alt="logo of anagha nisakar portfolio"
                 />
                <Link href="/" className='text-white/80 text-sm font-light'>
                    <Icon icon="bitcoin-icons:home-outline" className='text-2xl text-white/70 hover:text-accent' />
                </Link>
                <Link href="#about" className='text-white/80 text-sm font-light'>
                    <Icon icon="fluent:person-32-light" className='text-2xl text-white/70 hover:text-accent' />
                </Link>
                <Link href="#works" className='text-white/80 text-sm font-light'>
                    <Icon icon="ph:suitcase-thin" className='text-2xl text-white/70 hover:text-accent' />
                </Link>
                 <Link href="#experience" className='text-white/80 text-sm font-light'>
                    <Icon icon="lets-icons:tie-light" className='text-2xl text-white/70 hover:text-accent' />
                </Link>
                <Link href="contact" className='text-white/80 text-sm font-light'>
                    <Icon icon="solar:call-chat-outline" className='text-2xl text-white/50 hover:text-accent' />
                </Link>
            </div>
            <PrimaryButton link="#contact" content='Hire Me' className="h-9" />
        </nav>
    )
}

export default NavBar