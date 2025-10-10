import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import React from 'react'
import PrimaryButton from '@/components/core/button/Primary'

function index() {
  return (
   <section id="contact" className='main-container bg-darkBackground'>
            <div className='w-[90%] flex flex-col items-center gap-4 max-w-[850px] bg-[#111723] border border-borderDark rounded-sm p-8'>
                <h2 className='text-2xl lg:text-3xl text-white/80 font-extralight font-geologica'>
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
                <div className='w-full flex flex-col items-center justify-center md:flex-row gap-4'>
                    <PrimaryButton download content='Download My Resume' icon="material-symbols:download" link="/images/files/AnaghaNisakar.pdf" />
                    <PrimaryButton 
                    link="/contact" 
                    content='Connect With Me' 
                    icon="healthicons:communication-outline" 
                    className='!bg-accent/15  text-accent  !border-accent/50'
                    />
                </div>
                <div className='flex items-center gap-4 text-accent/50 pt-10'>
                    - - - - 
                    <Link href="" className='text-accent text-xl'>
                        <Icon icon="ri:linkedin-fill" className='text-accent/60 hover:text-accent' />
                    </Link>
                    <Link href="">
                        <Icon icon="mdi:github" className='text-accent/60 text-xl hover:text-accent' />
                    </Link>
                    - - - - 
                </div>
            </div>
        </section>
  )
}

export default index