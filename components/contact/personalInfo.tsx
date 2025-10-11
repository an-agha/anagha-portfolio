import PrimaryButton from '@/components/core/button/Primary'
import React from 'react'
import Card from './Card'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'

function PersonalInfo() {
  const personalDetails = [
    {
      title: 'Email',
      value: 'anaghanisakar@gmail.com',
      icon: 'mage:email-fill',
      link: 'mailto:anaghanisakar@gmail.com'
    },
    {
      title: 'Phone',
      value: '+91 9072144202',
      icon: 'lets-icons:phone-duotone',
      link: 'tel:+919072144202'
    },
    {
      title: 'Location',
      value: 'Kozhikode',
      icon: 'ic:twotone-location-on'
    },
  ]

   const socailmedia = [
        {
            link: 'https://www.linkedin.com/in/anagha-nisakar/',
            icon: 'basil:linkedin-outline',
        },
        {
            link: 'https://github.com/an-agha',
            icon: 'mdi:github',
        },
        {
            link: 'mailto:anaghanisakar@gmail.com',
            icon: 'material-symbols:mail-outline',
        },
    ]

  return (
    <div className="w-full flex flex-col bg-[rgb(29,40,57)] border border-borderDark rounded-lg p-4 gap-4">
      <h2 className="text-lg lg:text-xl text-accent/60 font-geologica">
        Personal Information
      </h2>
      <div className="w-full flex flex-col gap-4 items-center">
        {personalDetails.map((item, index) => (
          <Card title={item.title} value={item.value} icon={item.icon} link={item.link} key={index} />
        ))}
      </div>
      <PrimaryButton download content='Download My Resume' icon="material-symbols:download" link="/images/files/AnaghaNisakar.pdf" />
      <div className='w-full flex justify-center items-center gap-4 py-5 text-accent/90'>
        - - -
        {
          socailmedia.map((item, index) => (
            <Link href={item.link}
              key={index}
              className='w-10 h-10 rounded-md bg-[#1d2839] hover:bg-linear-to-r from-backgroundDark via-accent/15 to-backgroundDark border-[0.5] border-borderDark flex flex-col items-center justify-center hover:border-accent/40 group'>
              <Icon icon={item.icon} className='text-accent/50 text-xl group-hover:text-accent' />
            </Link>
          ))
        }
        - - -
      </div>
    </div>
  )
}

export default PersonalInfo
