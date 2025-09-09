import { Icon } from "@iconify/react"
import { Languages } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

interface content {
    point: string
}

interface roleType {
    name: string,
    content: string[]
}

interface CardProps {
    image: string
    alt: string
    name: string
    language: string
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
    language,
}: CardProps) {
    return (
        <div className="w-full p-[2px] bg-linear-to-r from-secondary to-accent rounded-md">
            <div className="w-full flex flex-col gap-6 bg-black px-2 pt-2 pb-6 rounded-md">
                <Image
                    src={image}
                    width={1470}
                    height={830}
                    alt={alt}
                    className="rounded-md"
                />
                <div className="w-full flex flex-col gap-6 px-4">
                    <Link
                        href={link}
                        target="_blank"
                        className="w-full flex justify-between items-center"
                    >
                        <div className="flex flex-col gap-2">
                            <span className="text-xl lg:text-2xl font-manrope text-white">{name}</span>
                            <div className="text-white text-sm font-bold">
                                <span className="font-light">
                                    Language :
                                </span>
                                {language}
                            </div>
                        </div>
                        <div className="flex gap-1 items-center border border-accent/80 text-xs text-secondary px-3 py-1 rounded-sm font-bold">
                            <Icon icon="pepicons-pencil:internet" />
                            {type}
                        </div>
                    </Link>
                    <p className="text-sm text-white text-justify">{brief}</p>
                    {
                        roles.map((role, index) => (
                            <div className="flex flex-col gap-3">
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
            </div>
        </div>
    )
}

export default Card
