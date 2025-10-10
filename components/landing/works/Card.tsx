import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

interface roleType {
    name: string,
    content: string[]
}

interface CardProps {
    image: string
    alt: string
    name: string
    languages: string[]
    type: string
    brief: string
    roles: roleType[]
    link: string
}

function Card({
    image,
    alt,
    name,
    type,
    brief,
    roles,
    link,
    languages,
}: CardProps) {
    return (
        <div className="relative w-full p-[2px] bg-linear-to-r from-secondary to-accent rounded-md">
            <div className="w-full flex flex-col gap-6 bg-black px-2 pt-2 pb-6 rounded-md">
                <Disclosure>
                    <DisclosureButton className="w-fullflex flex-col gap-4">
                        <div className="absolute flex items-center justify-center top-0 right-0 w-10 h-10 bg-linear-to-r from-secondary to-accent rounded-bl-xl rounded-tr-md cursor-pointer">
                            <Icon 
                            icon="mdi-light:chevron-down"
                            className="text-white text-3xl"
                             />
                        </div>
                        <Image
                            src={image}
                            width={1470}
                            height={830}
                            alt={alt}
                            className="rounded-md w-full"
                        />
                        <Link
                            href={link}
                            target="_blank"
                            className="w-full flex justify-between items-center px-2 pt-4"
                        >
                            <div className="w-full items-start flex flex-col gap-2">
                                <span className="text-xl lg:text-2xl font-manrope text-white">{name}</span>
                                <div className="text-white text-sm font-bold">
                                    <span className="font-light">
                                        Language :
                                    </span>
                                    {languages}
                                </div>
                            </div>
                            <div className="flex gap-1 items-center border border-accent/80 text-xs text-secondary px-3 py-1 rounded-sm font-bold">
                                <Icon icon="pepicons-pencil:internet" />
                                {type}
                            </div>
                        </Link>
                        <p className="text-sm text-white text-justify px-2">{brief}</p>
                    </DisclosureButton>
                    <DisclosurePanel className="text-gray-500">


                        <div className="w-full flex flex-col gap-6 px-4">
                            {
                                roles.map((role, index) => (
                                    <div key={index} className="flex flex-col gap-3">
                                        <span className="text-secondary font-semibold text-base">{role.name}</span>
                                        <ul className="flex flex-col gap-2">
                                            {role.content.map((item, roleIndex) => (
                                                <li
                                                    className="flex gap-2 text-sm text-white"
                                                    key={roleIndex}
                                                >
                                                    <Icon
                                                        icon="solar:star-bold-duotone"
                                                        className="text-accent text-lg"
                                                    />
                                                    <div>{item}</div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))
                            }
                        </div>
                    </DisclosurePanel>
                </Disclosure>
            </div>
        </div>
    )
}

export default Card
