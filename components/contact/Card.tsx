import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import React from 'react'

interface CardProps {
  title: string
  value: string
  icon: string
  link?: string
}

function Card({ title, value, icon, link }: CardProps) {
  return (
    <Link href={link || ""} className="w-full flex gap-3 items-start bg-[#14181f]/40 border border-[#2e405b]/50 p-3 rounded-md">
      <div className="w-10 flex items-center justify-center bg-[#2e405b] aspect-square border border-borderDark rounded-md">
        <Icon icon={icon} className="text-lg text-accent/70" />
      </div>
      <div className="w-full flex flex-col">
        <span className="text-md md:text-lg text-white/90 font-semibold font-geologica leading-5">
          {title}
        </span>
        <span className="text-white/70 text-sm md:text-base font-extralight font-geologica">
          {value}
        </span>
      </div>
    </Link>
  )
}

export default Card
