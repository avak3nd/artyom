import { GridPlus } from "@boxicons/react"
import { Check } from "@boxicons/react"

import SectionHeader from "./ui/SectionHeader";

function Skills() {
    const skills = {
        Frontend: [
            "HTML5",
            "CSS3",
            "Sass/SCSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Tailwind CSS",
            "styled-components",
            "Redux Toolkit",
            "Context API",
            "Zustand",
            "TanStack Query",
            "Responsive Web Design",
            "Mobile-First",
            "REST API",
            "Axios",
            "Fetch API",
            "npm",
            "Vite",
            "Webpack",
            "React Hook Form",
        ],

        Backend: [
            "Node.js",
            "Express.js",
            "JWT",
            "OAuth",
            "SQL",
            "MySQL",
            "PostgreSQL",
            "GraphQL",
            "MongoDB",
            "Postman",
        ],

        Tools: [
            "Figma",
            "Cursor",
            "Claude",
            "ChatGPT",
            "Gemini",
            "Git",
            "GitHub",
            "GitLab",
            "Docker",
        ],

        Other: [
            "ATS Resume Optimization",
            "Resume Writing",
            "LinkedIn Profile Optimization",
            "Cover Letter Writing",
            "Resume Tailoring",
            "Agile",
            "Scrum",
        ],
    };

    return (
        <div className="px-6 pt-6 pb-10 border border-[#ededee] bg-white rounded-2xl flex flex-col justify-between w-full max-w-225 mx-auto" id="Skills">
            <SectionHeader
                icon={GridPlus}
                title="Professional Skills"
                description="My competencies essential for navigating and excelling in various professional contexts."
            />

            <div className="flex flex-col gap-8">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                        <p className="font-medium">{category}</p>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {items.map((skill) => (
                                <div
                                    key={skill}
                                    className="flex items-center gap-1.5 px-2 py-2 border border-[#ededee] text-[12px] text-[#33333b] rounded-lg font-medium"
                                >
                                    <Check size="xs" />
                                    <p>{skill}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills