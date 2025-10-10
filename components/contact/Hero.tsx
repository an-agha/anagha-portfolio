import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import PersonalInfo from './personalInfo';
import Form from './Form';

function Hero() {
    return (
        <section id="about" className='main-container bg-darkBackground'>
            <div className='w-[90%] flex flex-col items-center gap-5 max-w-[850px] bg-[#111723] border border-borderDark rounded-sm p-8'>
                <span className='flex items-center justify-center gap-2 font-geologica text-accent/70 text-xs px-4 py-1 rounded-full border-[0.5px] border-accent/40 bg-[#1d2839]'>
                    <Icon icon="akar-icons:radio-fill" className='text-accent/40' />
                    Open to work
                </span>
                <div className='w-full flex flex-col gap-2 items-center'>
                    <h1 className='text-3xl md:text-5xl font-geologica font-semibold gradient-text'>
                        Get In Touch
                    </h1>
                    <span className='text-white/70 font-geologica'>
                        Let&apos;s discuss your next project or just say hello
                    </span>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 pt-5'>
                    <PersonalInfo />
                    <Form />
                </div>
            </div>
        </section>
    )
}

export default Hero