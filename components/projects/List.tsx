import React from 'react'
import Card from '@/components/landing/dev2/works/Card'
import worksData from '@/data/works.json'

function List() {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-7'>
                    {
                        worksData?.map((item, index) => (
                            <Card
                                image={item.image}
                                alt={item.alt}
                                name={item.name}
                                type={item.type}
                                link={item.link}
                                sourceCode={item.sourceCode}
                                brief={item.brief}
                                key={index}
                                languages={item.languages}
                            />
                        ))
                    }
                </div>
    )
}

export default List