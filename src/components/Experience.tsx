import { Briefcase } from "@boxicons/react"

function Experience() {
    return (
        <div className="px-6 pt-6 pb-8 border border-[#ededee] bg-white rounded-2xl flex flex-col justify-between gap-5 w-full max-w-225 mx-auto">
            <div className="border-b border-[#ededee] pb-8">
                <div
                    className="flex h-13.5 w-13.5 items-center justify-center rounded-xl border border-[#ededee] bg-[#f6f6f6] text-white mb-8"
                >
                    <Briefcase size="base" color="#77777d" />
                </div>
                <p className="text-[21px] font-medium">Work Experience</p>
                <p className="text-[#77777d] text-[14px] mt-3 font-medium max-w-100 ">Experienced in software development, I help clients showcase their expertise and advance their careers.</p>
            </div>
        </div>
    )
}

export default Experience