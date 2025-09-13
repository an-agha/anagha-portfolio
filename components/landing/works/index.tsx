import React from 'react'
import Card from './Card'
import worksData from '@/data/works.json'

function index() {

  return (
    <section className='main-container w-full relative py-10 xl:py-[100px] px-10 md:px-0'>
      <div className='absolute hidden md:block right-0 h-1 top-[160px] w-[20%] bg-white' />
      <div className='w-full max-container flex flex-col items-end'>
        <div className='w-full relative'>
          <h2 className='text-white text-3xl text-right lg:text-6xl font-medium'>
            Works
          </h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 py-10 gap-10 items-start'>
            {
              worksData.map((item, index) => (
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