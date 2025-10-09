import Link from 'next/link'
import React from 'react'

function Chip({skill, link}:{skill:string, link?:string}) {

  return (
    <Link href={link||""}
    className="bg-darkBackground/30 text-[13px] font-light font-geologica px-4 py-1.5 rounded-lg text-white/60 border border-borderDark shadow-2xl hover:bg-accent hover:text-black"
    >
        {skill}
    </Link>
  )
}

export default Chip