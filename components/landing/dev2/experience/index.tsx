import { section } from 'motion/react-client'
import Image from 'next/image'
import React from 'react'
import { TimelineDemo } from './TimeLine'

function index() {
    return (
        <div className="main-container bg-darkBackground">
            <div className='w-[90%] flex flex-col gap-15 max-w-[850px] bg-[#111723] border border-borderDark rounded-sm p-8'>
                <div className='flex items-center gap-3'>
                    <Image
                        src="/images/profile.png"
                        width={100}
                        height={100}
                        className='w-10 h-10 rounded-full object-cover'
                        alt="Anagha profile"
                    />
                    <h2 className='gradient-text text-2xl font-geologica'>
                        Work Experience
                    </h2>
                </div>
                <div>
                    <TimelineDemo />
                </div>
            </div>
        </div>
    )
}

export default index