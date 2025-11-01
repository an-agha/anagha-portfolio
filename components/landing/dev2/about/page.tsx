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
                { name: 'SCSS', link: 'https://sass-lang.com/'  },
                { name: 'Markdown', link: 'https://www.markdownguide.org/'  },
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

    const about = [
        'I am a passionate Frontend Developer with over 3.6 years of professional experience in building modern, responsive, and user-focused web applications. My expertise spans across React.js, Vue.js, and Nuxt.js, with a strong focus on clean UI development and optimized performance.',
        'I take pride in transforming complex requirements into intuitive, visually appealing digital experiences. Along with my proficiency in frontend engineering, I also specialize in developer-side SEO and performance optimization, ensuring that every project I deliver is both user-friendly and search-friendly.',
        'Throughout my career, I’ve collaborated closely with designers, backend engineers, and project managers to bring seamless, high-quality products to life. Whether working independently or as part of a team, I’m driven by the goal of creating meaningful web experiences that connect technology with people.'
    ]

    return (
        <section id="about" className='main-container bg-darkBackground'>
            <div className='w-[90%] flex flex-col gap-15 max-w-[850px] bg-[#111723] border border-borderDark rounded-sm p-8'>
                <div className='flex flex-col gap-3 items-center'>
                    <div className='w-full flex items-center gap-3'>
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
                    <div className='flex flex-col gap-3'>
                        {
                            about.map((item, index) => (
                                <p key={index} className='text-white/70 font-light font-geologica'>
                                    {item}
                                </p>
                            ))
                        }
                    </div>
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