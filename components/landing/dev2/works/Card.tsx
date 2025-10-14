import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CardProps {
    image: string
    alt: string
    name: string
    type: string
    brief: string
    link: string
    sourceCode?: string
    languages: string[]
}

function Card({ image, alt, link, name, languages, type, brief, sourceCode }: CardProps) {
    return (
        <div className='relative w-full flex flex-col gap-3 bg-[#1d2839] border border-borderDark rounded-2xl shadow-2xl p-2'>
            <Image
                src={image}
                width={1470}
                height={830}
                alt={alt}
                className=" rounded-md w-full"
            />

            <div className='w-full flex justify-between'>
                <span className="text-xl lg:text-xl font-geologica text-white">{name}</span>
                <div className='w-min py-[2px] flex items-center gap-1  px-2  text-xs font-extralight font-geologica text-white/70 border border-white/30 rounded-full justify-center'>
                    <Icon icon="mdi:internet" />
                    {type}
                </div>
            </div>
            <span className='text-white/50 text-sm font-geologica'>
                {brief}
            </span>
            <div className='w-full flex gap-1.5 flex-wrap'>
                {
                    languages.map((item, index) => (
                        <Link href={link || ""}
                            key={index}
                            className="bg-[#2d3f5a]/60 flex gap-1.5 items-center text-[13px] font-light font-geologica px-3.5 py-1 rounded-md text-white/60 border border-[#2c4263] shadow-lg hover:text-accent"
                        >
                            {item}
                        </Link>
                    ))
                }
            </div>
            <div className='w-full flex gap-3 flex-wrap'>
                <Link href={link} target='blank' className='w-auto flex items-center gap-1 h-8 px-4 rounded-md bg-accent font-geologica font-medium text-sm border border-accent hover:bg-accent/60'>
                    <Icon icon="octicon:link-external-16" />
                    Live Demo
                </Link>
                {
                    sourceCode ?
                        (
                            <Link href={sourceCode || ""} target='blank' className='w-auto flex items-center gap-1 h-8 px-4 rounded-md border border-darkBackground bg-darkBackground font-geologica font-light text-sm text-white/70 hover:border-accent/40'>
                                <Icon icon="mdi:github" />
                                Source Code
                            </Link>
                        )
                        : ""
                }

            </div>
        </div>
    )
}

export default Card