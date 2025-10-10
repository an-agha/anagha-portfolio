import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import React from 'react'
import Chip from './Chip'

function About() {

    const skills = [
        {
            title: 'Language',
            skill: [
                { name: 'Javascript' },
                { name: 'HTML5' },
                { name: 'CSS3' },
            ]
        },
        {
            title: 'Frameworks & Libraries',
            skill: [
                { 
                name: 'React', 
                link: 'https://react.dev/',
                },
                { name: 'Next', link: 'https://nextjs.org/'  },
                { name: 'Vue', link: 'https://vuejs.org/'  },
                { name: 'Nuxt', link: 'https://nuxt.com/'  },
                { name: 'Tailwind CSS', link: 'https://tailwindcss.com/'  },
            ]
        },
        {
            title: 'Tools & Technologies',
            skill: [
                { 
                    name: 'Git',
                 },
                { name: 'Rest Api' },
                { 
                    name: 'Vercel',
                    link: 'https://vercel.com/anagha-nisakars-projects-74833319',
                 },
                { 
                    name: 'Netlify',
                    link: 'https://app.netlify.com/teams/an-agha',
                 },
                { 
                    name: 'Headless',
                    link: 'https://headlessui.com/',
                 },
                { 
                    name: 'shadcn',
                    link: 'https://ui.shadcn.com/',
                 },
                { 
                    name: 'AOS',
                    link: 'https://michalsnik.github.io/aos/',
                 },
                 { 
                    name: 'Motion Dev',
                    link: 'https://motion.dev/',
                 },
            ]
        },
        {
            title: 'Design & UX',
            skill: [
                { name: 'Responsive Design' },
                { name: 'Figma' },
                { name: 'Accessibility' },
                { name: 'UI/UX Principle' }
            ]
        },
        {
            title: 'SEO & Optimization',
            skill: [
                { name: 'Semantic HTML' },
                { name: 'SEO Best Practices' },
                { name: 'On-page Optimization' },
                { name: 'Performance Optimization' }
            ]
        },
    ]

    return (
        <section id="about" className='main-container bg-darkBackground'>
            <div className='w-[90%] flex flex-col gap-15 max-w-[850px] bg-[#111723] border border-borderDark rounded-sm p-8'>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-3'>
                        <Image
                            src="/images/profile.png"
                            width={100}
                            height={100}
                            className='w-10 h-10 rounded-full object-cover'
                            alt="Anagha profile"
                        />
                        <h2 className='gradient-text text-2xl font-geologica'>
                            About
                        </h2>
                    </div>
                    <p className='text-white/70 font-light font-geologica'>
                        A Frontend Developer is responsible for building engaging, responsive, and user-friendly interfaces for web applications. They work closely with designers and backend developers to translate design mockups and functional requirements into efficient, interactive, and visually appealing web experiences.
                    </p>
                </div>
                <div className='w-full flex flex-col gap-4'>
                    <div className='flex items-center gap-3'>
                        <div className='w-10 h-10 flex justify-center items-center border border-accent rounded-full'>
                            <Icon
                                icon="ph:suitcase-light"
                                className="text-2xl text-secondary"
                            />
                        </div>
                        <h2 className='gradient-text text-2xl font-geologica'>
                            Skills
                        </h2>
                    </div>
                    <div className='w-full flex flex-col gap-4 p-2'>
                        {
                            skills.map((skill, index) => (
                                <div className='w-full flex flex-col gap-4 border border-borderDark p-4 rounded-md bg-[#1d2839]' key={index}>
                                    <h3 className='text-xl text-accent/70 font-light font-geologica'>
                                        {skill.title}
                                    </h3>
                                    <div className='w-full flex gap-2 flex-wrap'>
                                        {
                                            skill.skill.map((item, index) => (
                                                <Chip skill={item.name} link={item.link} key={index} />
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About