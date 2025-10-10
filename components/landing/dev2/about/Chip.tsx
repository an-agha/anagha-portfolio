import Link from 'next/link'
import React from 'react'

function Chip({skill, link}:{skill:string, link?:string}) {

  return (
    <Link href={link||""}
    className="w-min nowrap whitespace-nowrap bg-darkBackground/30 hover:bg-linear-to-r from-backgroundDark via-accent/30 to-backgroundDark text-[13px] font-light font-geologica px-4 py-1.5 rounded-lg text-white/60 border border-borderDark shadow-2xl  hover:text-accent hover:border-accent/40"
    >
        {skill}
    </Link>
  )
}

export default Chip