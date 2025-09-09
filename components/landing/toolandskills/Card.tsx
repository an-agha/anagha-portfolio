import { Icon } from "@iconify/react"
import React from "react"
import { Tab } from '@headlessui/react'


interface CardProps {
  icon: string
  skill: string
}

function Card({ icon, skill }: CardProps) {
  return (
    <Tab className="flex items-center gap-2 border-b-0 hover:border-b pb-4 cursor-pointer border-[#00FFDE] hover:scale-110 transition-all outline-0">
      <Icon 
        icon={icon}
        className="text-white text-4xl" 
      />
      <span className="text-xl font-medium text-[#98CD00]/80">
        {skill}
      </span>
    </Tab>
  )
}

export default Card
