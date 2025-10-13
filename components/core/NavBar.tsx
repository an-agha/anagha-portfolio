"use client"

import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import React from 'react'
import PrimaryButton from '@/components/core/button/Primary'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

function NavBar() {

    const path = usePathname()

    const navItems = [
        {
            name: 'Home',
            icon: 'bitcoin-icons:home-outline',
            path: '/',
        },
        {
            name: 'About',
            icon: 'fluent:person-32-light',
            path: '/#about',
        },
        {
            name: 'Projects',
            icon: 'ph:suitcase-thin',
            path: '/projects',
        },
        {
            name: 'Experience',
            icon: 'lets-icons:tie-light',
            path: '/#experience',
        },
         {
            name: 'Contact',
            icon: 'solar:call-chat-outline',
            path: '/contact',
        },
    ]
        
    return (
        <nav className='w-[90%] max-w-[450px] border border-borderDark h-12 fixed top-4  left-1/2 translate-x-[-50%] rounded-md flex justify-between items-center pl-3 p-1 z-100 bg-darkBackground shadow-md overflow-visible'>
            <div className='flex gap-4 items-center overflow-visible'>
                <Image
                    src="/anaghanisakar-logo.png"
                    width={300}
                    height={300}
                    className='h-9 w-9 rounded-full'
                    alt="logo of anagha nisakar portfolio"
                />
                {
                    navItems.map((item,index) => (
                        <Link href={item.path} className='relative text-white/80 text-sm font-light group overflow-visible'>
                            <Icon icon={item.icon} 
                            className={cn('text-2xl text-white/70 hover:text-accent', {"text-accent":path === item.path})}
                            key={index}
                             />
                             <span className='hidden absolute top-[-10px] left-[50%] translate-[-50%] z-20 group-hover:flex  text-[11px] text-accent bg-darkBackground/90 rounded-sm'>
                                {item.name}
                             </span>
                        </Link>
                    ))
                }
            </div>
            <PrimaryButton link="#contact" content='Hire Me' className="h-9" />
        </nav>
    )
}

export default NavBar