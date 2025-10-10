import React from 'react'
import Card from './Card'
import worksData from '@/data/works.json'
import PrimaryButton from '@/components/core/button/Primary'

function index() {
    return (
        <section id="works" className='main-container bg-darkBackground'>
            <div className='w-[90%] flex flex-col items-center gap-15 max-w-[850px] bg-[#111723] border border-borderDark rounded-sm p-8'>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center justify-center gap-3'>
                        <h2 className='text-2xl lg:text-5xl font-geologica font-bold text-center gradient-text'>
                            Featured Projects
                        </h2>
                    </div>
                    <p className='text-white/70 text-center font-light font-geologica'>
                        A selection of projects showcasing my skills and experience
                    </p>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {
                        worksData?.map((item, index) => (
                            <Card
                                image={item.image}
                                alt={item.alt}
                                name={item.name}
                                type={item.type}
                                link={item.link}
                                brief={item.brief}
                                key={index}
                                languages={item.languages}
                            />
                        ))
                    }
                </div>
                <PrimaryButton 
                content='Explore More' 
                icon="vaadin:angle-right" 
                link="/projects"
                className='max-w-60'
                 />
            </div>
        </section>
    )
}

export default index