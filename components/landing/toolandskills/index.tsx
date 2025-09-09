import React from 'react'
import Card from './Card'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

function ToolAndSkills() {

    const skills = [
        {
            icon: 'uil:react',
            skill: 'React JS',
        },
        {
            icon: 'iconoir:vue-js',
            skill: 'Vue JS',
        },
        {
            icon: 'proicons:html',
            skill: 'HTML',
        },
        {
            icon: 'akar-icons:css-fill',
            skill: 'CSS',
        },
        {
            icon: 'vscode-icons:file-type-scss',
            skill: 'SCSS',
        },
        {
            icon: 'flowbite:tailwind-solid',
            skill: 'Tailwind',
        },
    ]

    const skillDetails = [
       {
        key: 'react',
        description: 'I’m currently focusing on React.js as my primary frontend framework. So far, I’ve built 3 projects using React and Next.js, where I worked on creating responsive UIs, handling state management, and optimizing performance for smooth user experiences. React has become the core of my frontend development journey, and I’m continuously exploring its ecosystem to build scalable and modern web applications.',
       },
       {
        key: 'vue',
        description: 'I have nearly 3 years of experience as a frontend developer specializing in Vue.js. During this time, I’ve worked on numerous projects using Vue and Nuxt.js, building dynamic, user-friendly interfaces and delivering scalable applications. My experience with Vue has given me a strong foundation in component-based architecture, state management, and modern frontend best practices.',
       },
       {
        key: 'html',
        description: 'I have a strong foundation in HTML5, with the ability to structure clean, semantic, and accessible markup. My expertise ensures that web applications are well-optimized, responsive, and aligned with modern web standards. I also apply SEO best practices in HTML, including semantic elements, optimized headings, alt attributes for images, meta tags, and structured data, to improve search engine visibility and user experience.',
       },
       {
        key: 'css',
        description: 'Styling is one of my strongest skills. I have a solid command of CSS, enabling me to create responsive, visually appealing, and user-friendly interfaces. I’m proficient in modern CSS techniques such as Flexbox, Grid, animations, and transitions, and I focus on writing clean, maintainable styles that enhance both design and usability.',
       },
       {
        key: 'scss',
        description: 'I have hands-on experience working with SCSS (Sass), which allows me to write more structured, maintainable, and scalable styles. By using features like variables, mixins, nesting, and partials, I make styling more efficient and reusable across projects. SCSS helps me maintain cleaner code while speeding up development for complex UI designs.',
       },
       {
        key: 'tailwind',
        description: 'I work extensively with Tailwind CSS, which helps me build modern, responsive, and consistent user interfaces quickly. By leveraging its utility-first approach, I can create clean designs with minimal custom CSS, while still keeping projects highly customizable and scalable. Tailwind allows me to maintain both speed and flexibility in development.',
       },

    ]

    return (
        <section className='relative main-container w-full h-screen flex flex-col'>
            <div className='w-auto max-container max-w-min px-10 lg:px-[100px]'>
                <h2 className='text-white text-3xl lg:text-4xl font-medium'>
                    TOOLS & SKILLS
                </h2>
                <div className='absolute hidden md:block lg:max-w-[36%] left-0 h-1 w-[calc(100%+100px)] bg-white' />
                <TabGroup>
                    <TabList className='w-full flex flex-col md:flex-row md:flex-wrap gap-y-4 gap-x-16 justify-start py-10'>
                        {
                            skills.map((item, index) => (
                                <Card
                                    skill={item.skill}
                                    icon={item.icon}
                                    key={index}
                                />
                            ))
                        }
                    </TabList>
                    <TabPanels>
                        {
                            skillDetails.map((item) => (
                                <TabPanel key={item.key}>
                                    <div className='text-white font-extralight text-justify lg:px-20'>
                                        {item.description}
                                    </div>
                                </TabPanel>
                            ))
                        }
                    </TabPanels>
                </TabGroup>
            </div>
        </section>
    )
}

export default ToolAndSkills