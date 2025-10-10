import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import React from 'react'

function index() {
    return (
        <section id="#contact" className='main-container py-10'>
            <div className='max-container flex flex-col items-center gap-4 border-t border-secondary/40 py-20'>
                <h2 className='text-2xl lg:text-3xl text-white'>
                    Connect With Me
                </h2>
                <Link href="mailto:anaghanisakar@gmail.com" className='text-white/60 flex gap-2 items-center'>
                    <Icon icon="fontisto:email" className='text-secondary' />
                    anaghanisakar@gmail.com
                </Link>
                <Link href='tel:+919072144202' className='text-white/60 flex items-center gap-2'>
                    <Icon icon="mdi-light:phone" className='text-secondary' />
                    +91 9072144202
                </Link>
                <div className='flex items-center gap-4 text-accent/50'>
                    - - - - 
                    <Link href="" className='text-accent text-xl'>
                        <Icon icon="ri:linkedin-fill" className='text-accent' />
                    </Link>
                    <Link href="">
                        <Icon icon="mdi:github" className='text-accent text-xl' />
                    </Link>
                    - - - - 
                </div>
            </div>
        </section>
    )
}

export default index