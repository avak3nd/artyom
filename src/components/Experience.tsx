import { Briefcase } from "@boxicons/react"
import { LocationAlt } from "@boxicons/react"

import SectionHeader from "./ui/SectionHeader";

function Experience() {
    const experiences = [
        {
            title: "Frontend Developer",
            company: "Unite Venture Studio",
            employment: "Full-Time",
            period: "Aug 2025 - Present",
            location: "Ashgabat, Ahal, Turkmenistan",
            description:
                "Developed subscription management, payment, and customer dashboard features for a SaaS platform, delivering responsive, scalable user experiences while collaborating closely with backend engineers to build and integrate reliable APIs.",
        },
        {
            title: "Frontend Developer",
            company: "ORLAN",
            employment: "Full-Time",
            period: "Jun 2024 - Aug 2025",
            location: "Ashgabat, Ahal, Turkmenistan",
            description:
                "Developed scalable frontend solutions for a consulting platform, building reusable dashboard components, client management features, and secure authentication while collaborating with backend engineers to deliver reliable and maintainable applications.",
        },
        {
            title: "Frontend Developer",
            company: "Breakthrough Academy",
            employment: "Full-Time",
            period: "Sep 2023 - Jun 2024",
            location: "Johor Bahru, Johor, Malaysia",
            description:
                "Developed responsive frontend solutions for a consulting platform, building client onboarding, consultation workflows, and interactive forms while collaborating with backend engineers to deliver accessible and user-friendly experiences.",
        },
    ];

    return (
        <div className="px-6 pt-6 pb-10 border border-[#ededee] bg-white rounded-2xl flex flex-col justify-between w-full max-w-225 mx-auto" id="Experience">
            <SectionHeader
                icon={Briefcase}
                title="Work Experience"
                description="Leveraging my software development background, I help clients present their experience with confidence."
            />

            <div className="flex flex-col">
                {experiences.map((experience, index) => (
                    <div
                        key={`${experience.company}-${experience.period}`}
                        className={`border-l-2 border-[#ededee] ${index !== experiences.length - 1 ? "pb-8" : ""
                            }`}
                    >
                        <div className="relative pl-6">
                            <div className="flex gap-4 justify-between items-center flex-wrap">
                                <div>
                                    <p className="font-medium">{experience.title}</p>
                                    <p className="mt-1.5 text-[#77777d] text-[13.5px]">
                                        {experience.company} • {experience.employment}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 px-3 py-2 border border-[#ededee] text-[12px] text-[#33333b] font-medium">
                                    <Briefcase size="xs" />
                                    <p className="text-nowrap">{experience.period}</p>
                                </div>
                            </div>

                            <div className="text-[12px] text-[#77777d] flex items-center gap-2 my-4">
                                <LocationAlt color="#77777d" size="xs" />
                                <p>{experience.location}</p>
                            </div>

                            <div className="absolute top-0 -left-1 w-1.5 h-1.5 rounded-full bg-[#8e8e92]" />

                            <p className="text-[12px] text-[#77777d] max-w-100">
                                {experience.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience