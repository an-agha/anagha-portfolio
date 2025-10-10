import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "Current",
            content: (
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg text-white font-geologica">
                        Software Developer (Freelance)
                    </h3>
                    <div className="flex flex-col">
                        <p className="mb-8 text-xs font-normal text-white/60 md:text-sm dark:text-neutral-200">
                            Handling end-to-end freelance projects including requirement gathering, design, development, and SEO Integration.
                        </p>
                        <p className="mb-8 text-xs font-normal text-white/60 md:text-sm dark:text-neutral-200">
                            Tech stack: React.js, Next.js, Vue.js, Nuxt.js, SEO optimization.
                        </p>
                        <p className="mb-8 text-xs font-normal text-white/60 md:text-sm dark:text-neutral-200">
                            Gained hands-on exposure to project ownership, problem solving, and meeting deadlines independently.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/images/works/nomik-legal.png"
                            alt="hero template"
                            width={1470}
                            height={830}
                            className="w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src="/images/works/eza.png"
                            alt="hero template"
                            width={1470}
                            height={830}
                            className="w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src="/images/works/ci-tech.png"
                            alt="Hero template"
                            width={1470}
                            height={830}
                            className="w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src="/images/works/alam-engaz.png"
                            alt="Hero template"
                            width={1470}
                            height={830}
                            className="w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2022 - 2024",
            content: (
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-geologica text-white">
                        Iocod Infotech, Cyber Park, Kozhikode
                    </h3>
                    <span className="text-white/60 text-md font-geologica">
                        Software Developer | Jun 2022 – Dec 2024 (2.5 years)
                    </span>
                    </div>
                    <ol className="flex flex-col gap-2">
                        <li className="text-xs font-normal text-white/60 md:text-sm dark:text-neutral-200">
                             Developed front-end features for enterprise web applications.
                        </li>
                        <li className="text-xs font-normal text-white/60 md:text-sm dark:text-neutral-200">
                            Collaborated with designers using Figma to deliver responsive, pixel-perfect UI.
                        </li>
                        <li className="text-xs font-normal text-white/60 md:text-sm dark:text-neutral-200">
                            Optimized websites for SEO and performance, improving rankings and speed.
                        </li>
                        <li className="text-xs font-normal text-white/60 md:text-sm dark:text-neutral-200">
                            Integrated REST APIs and built reusable components in Vue.js.
                        </li>
                    </ol>
                </div>
            ),
        },
                {
            title: "2021 - 2022",
            content: (
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg text-white font-geologica">
                        Optimist Tech Hub, Kozhikode
                    </h3>
                    <span className="text-white/60 text-md  font-geologica">
                        UI Designer & Frontend Developer | Sep 2021 – Jan 2022 (5 Months)
                    </span>
                    </div>
                    <ol className="flex flex-col gap-2">
                        <li className="text-xs font-normal text-white/60 md:text-sm dark:text-neutral-200">
                             Designed and developed user interfaces for web applications  and Mobile Application (Design)
                        </li>
                        <li className="text-xs font-normal text-white/60 md:text-sm dark:text-neutral-200">
                            Created wireframes and prototypes to enhance usability and user experience.
                        </li>
                        <li className="text-xs font-normal text-white/60 md:text-sm dark:text-neutral-200">
                           Implemented responsive designs with HTML, CSS, and JavaScript frameworks.
                        </li>
                        <li className="text-xs font-normal text-white/60 md:text-sm dark:text-neutral-200">
                            Worked closely with developers and designers to translate UI/UX requirements into functional applications.
                        </li>
                    </ol>
                </div>
            ),
        },
        {
            title: " 2017 – 2021",
            content: (
                <div className="bg-background flex flex-col gap-y-4">
                    <h3 className="text-lg text-white font-bold">
                        Education
                    </h3>
                    <div className="flex flex-col gap-2">
                        <span className="text-white/70 font-bold text-md">
                            B.Tech in Computer Science
                        </span>
                        <div className="text-white/60">
                            Completed undergraduate degree with focus on software engineering, algorithms, and web technologies.
                            Built academic projects that laid the foundation for real-world development.
                        </div>
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}
