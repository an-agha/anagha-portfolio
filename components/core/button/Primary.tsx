import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import React from 'react'

interface ButtonProps {
    link: string
  content: string
  icon?: string
  className?: string
  download?: boolean
}


function Primary({ content, icon, className, link, download }: ButtonProps) {
    return (
        <Link 
        href={link} 
         {...(download ? { download: true } : {})}
        className={`text-accent gap-2 border border-accent/60 px-4 py-2 rounded-lg font-geologica flex items-center justify-center glow-box hover:bg-linear-to-r from-backgroundDark via-accent/30 to-backgroundDark ${className || ''}`}>
           {content}
            <Icon icon={icon || ""} className='text-accent' />
        </Link>
    )
}

export default Primary