import { GridPlus } from "@boxicons/react"
import { Check } from "@boxicons/react"

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
            "Career Consulting",
            "Personal Branding",
            "Agile",
            "Scrum",
        ],
    };

    return (
        <div className="px-6 pt-6 pb-10 border border-[#ededee] bg-white rounded-2xl flex flex-col justify-between w-full max-w-225 mx-auto" id="Skills">
            <div className="border-b border-[#ededee] pb-8 mb-10">
                <div
                    className="flex h-13.5 w-13.5 items-center justify-center rounded-xl border border-[#ededee] bg-[#f6f6f6] text-white mb-8"
                >
                    <GridPlus size="base" color="#77777d" />
                </div>
                <p className="text-[21px] font-medium">Professional Skills</p>
                <p className="text-[#77777d] text-[14px] mt-3 font-medium max-w-100 ">My competencies essential for navigating and excelling in various professional contexts.</p>
            </div>

            <div className="flex flex-col gap-8">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                        <p className="font-medium">{category}</p>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {items.map((skill) => (
                                <div
                                    key={skill}
                                    className="flex items-center gap-1.5 px-2 py-2 border border-[#ededee] bg-white text-[12px] text-[#33333b] rounded-lg font-medium"
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