import { Briefcase } from "@boxicons/react"
import { LocationAlt } from "@boxicons/react"

function Experience() {
    return (
        <div className="px-6 pt-6 pb-10 border border-[#ededee] bg-white rounded-2xl flex flex-col justify-between w-full max-w-225 mx-auto" id="Experience">
            <div className="border-b border-[#ededee] pb-8 mb-10">
                <div
                    className="flex h-13.5 w-13.5 items-center justify-center rounded-xl border border-[#ededee] bg-[#f6f6f6] text-white mb-8"
                >
                    <Briefcase size="base" color="#77777d" />
                </div>
                <p className="text-[21px] font-medium">Work Experience</p>
                <p className="text-[#77777d] text-[14px] mt-3 font-medium max-w-100 ">Experienced in software development, I help clients showcase their expertise and advance their careers.</p>
            </div>

            <div className="border-l-2 border-[#ededee] pb-8">
                <div className="relative pl-6">
                    <div className="flex gap-3 justify-between items-center">
                        <div>
                            <p className="font-medium">Frontend Developer</p>
                            <p className="mt-1.5 text-[#77777d] text-[12px]">Unite Venture Studio * Full-Time</p>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2 border border-[#ededee] text-[12px] text-[#33333b] font-medium">
                            <Briefcase size="xs" />
                            <p className="text-nowrap">Aug 2025 - present</p>
                        </div>
                    </div>
                    <div className="text-[12px] text-[#77777d] flex items-center gap-2 my-4">
                        <LocationAlt color="#77777d" size="xs" />
                        <p>Ashgabat, Ahal, Turkmenistan</p>
                    </div>
                    <div className="absolute top-0 -left-1 w-1.5 h-1.5 rounded-full bg-[#8e8e92]" />
                    <p className="text-[12px] text-[#77777d] max-w-100">Developed subscription management, payment, and customer dashboard features for a SaaS platform, delivering responsive, scalable user experiences while collaborating closely with backend engineers to build and integrate reliable APIs.</p>
                </div>
            </div>

            <div className="border-l-2 border-[#ededee] pb-8">
                <div className="relative pl-6">
                    <div className="flex gap-3 justify-between items-center">
                        <div>
                            <p className="font-medium">Frontend Developer</p>
                            <p className="mt-1.5 text-[#77777d] text-[12px]">ORLAN * Full-Time</p>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2 border border-[#ededee] text-[12px] text-[#33333b] font-medium">
                            <Briefcase size="xs" />
                            <p className="text-nowrap">Jun 2024 - Aug 2025</p>
                        </div>
                    </div>
                    <div className="text-[12px] text-[#77777d] flex items-center gap-2 my-4">
                        <LocationAlt color="#77777d" size="xs" />
                        <p>Ashgabat, Ahal, Turkmenistan</p>
                    </div>
                    <div className="absolute top-0 -left-1 w-1.5 h-1.5 rounded-full bg-[#8e8e92]" />
                    <p className="text-[12px] text-[#77777d] max-w-100">Developed scalable frontend solutions for a consulting platform, building reusable dashboard components, client management features, and secure authentication while collaborating with backend engineers to deliver reliable and maintainable applications.</p>
                </div>
            </div>

            <div className="border-l-2 border-[#ededee]">
                <div className="relative pl-6">
                    <div className="flex gap-3 justify-between items-center">
                        <div>
                            <p className="font-medium">Frontend Developer</p>
                            <p className="mt-1.5 text-[#77777d] text-[12px]">Breakthrough Academy * Full-Time</p>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2 border border-[#ededee] text-[12px] text-[#33333b] font-medium">
                            <Briefcase size="xs" />
                            <p className="text-nowrap">Sep 2023 - Jun 2024</p>
                        </div>
                    </div>
                    <div className="text-[12px] text-[#77777d] flex items-center gap-2 my-4">
                        <LocationAlt color="#77777d" size="xs" />
                        <p>Johor Bahru, Johor, Malaysia</p>
                    </div>
                    <div className="absolute top-0 -left-1 w-1.5 h-1.5 rounded-full bg-[#8e8e92]" />
                    <p className="text-[12px] text-[#77777d] max-w-100">Developed responsive frontend solutions for a consulting platform, building client onboarding, consultation workflows, and interactive forms while collaborating with backend engineers to deliver accessible and user-friendly experiences.</p>
                </div>
            </div>
        </div>
    )
}

export default Experience