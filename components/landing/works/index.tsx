import React from 'react'
import Card from './Card'

function index() {

  const cardItem = [
    {
      image: "/images/works/nomik-legal.png",
      alt: "Nomik Legal website",
      name: "Nomik Legal",
      language: 'React js, next js, Tailwind css',
      type: "Website",
      brief: "I was responsible for front-end development and SEO optimization of the Nomik Legal website, built using React.js, Next.js, and Node.js.",
      roles: [
        {
          name: "Frontend Development",
          content: [
            'Built responsive, user-friendly pages using React.js and Next.js.',
            'Implemented reusable components for consistent design and faster development.',
            'Ensured cross-browser compatibility and smooth animations for better UX.'
          ]
        },
        {
          name: "SEO Development",
          content: [
            'Added structured metadata, OpenGraph, and Twitter cards for improved social sharing.',
            'Implemented canonical URLs, multi-language alternates, and robots directives.',
            'Integrated Google Ads and Google Analytics tracking to measure traffic and ad performance.',
            'Optimized page structure and performance for better search engine ranking.'
          ]
        },
      ],
      link: 'https://nomiklegal.com/',
    },
    {
      image: "/images/works/eza.png",
      alt: "Eza Corporate Service Provider",
      name: "Eza Corporate",
      language: 'Vue js, Nuxt Js, Tailwind css',
      type: "Website",
      brief: "I was responsible for front-end development and SEO optimization of the Nomik Legal website, built using React.js, Next.js, and Node.js.",
      roles: [
        {
          name: "Eza Corporate Service Provider",
          content: [
            'Built responsive, user-friendly pages using React.js and Next.js.',
            'Implemented reusable components for consistent design and faster development.',
            'Ensured cross-browser compatibility and smooth animations for better UX.'
          ]
        },
        {
          name: "SEO Development",
          content: [
            'Added structured metadata, OpenGraph, and Twitter cards for improved social sharing.',
            'Implemented canonical URLs, multi-language alternates, and robots directives.',
            'Integrated Google Ads and Google Analytics tracking to measure traffic and ad performance.',
            'Optimized page structure and performance for better search engine ranking.'
          ]
        },
      ],
      link: 'https://nomiklegal.com/',
    },
        {
      image: "/images/works/ci-tech.png",
      alt: "Eza Corporate Service Provider",
      name: "CI Tech",
      language: 'Vue js, Nuxt Js, Tailwind css',
      type: "Website",
      brief: "I was responsible for front-end development and SEO optimization of the Nomik Legal website, built using React.js, Next.js, and Node.js.",
      roles: [
        {
          name: "Eza Corporate Service Provider",
          content: [
            'Built responsive, user-friendly pages using React.js and Next.js.',
            'Implemented reusable components for consistent design and faster development.',
            'Ensured cross-browser compatibility and smooth animations for better UX.'
          ]
        },
        {
          name: "SEO Development",
          content: [
            'Added structured metadata, OpenGraph, and Twitter cards for improved social sharing.',
            'Implemented canonical URLs, multi-language alternates, and robots directives.',
            'Integrated Google Ads and Google Analytics tracking to measure traffic and ad performance.',
            'Optimized page structure and performance for better search engine ranking.'
          ]
        },
      ],
      link: 'https://nomiklegal.com/',
    },
  ]

  return (
    <section className='main-container relative py-10 xl:py-[100px]'>
      <div className='max-container flex flex-col items-end'>
        <div className='w-full relative'>
          <h2 className='text-white text-3xl text-right lg:text-4xl font-medium'>
            Works
          </h2>
          <div className='absolute hidden md:block right-[-100px] h-1 w-[20%] bg-white' />
          <div className='grid grid-cols-1 lg:grid-cols-2 py-10 gap-10'>
            {
              cardItem.map((item, index) => (
                <Card
                  image={item.image}
                  alt={item.alt}
                  name={item.name}
                  type={item.type}
                  brief={item.brief}
                  roles={item.roles}
                  link={item.link}
                  key={index}
                  language={item.language}
                />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default index