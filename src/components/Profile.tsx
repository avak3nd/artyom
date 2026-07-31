import { LocationAlt } from "@boxicons/react"
import { UserIdCard } from "@boxicons/react"

function Profile() {
    return (
        <div className="mt-25 w-full max-w-225 mx-auto flex gap-3 max-[600px]:flex-col" id="Profile">
            <div className="max-w-66.25 w-full max-[600px]:max-w-full">
                <img src="/profile.jpg" alt="profile" className="rounded-2xl w-full h-full object-cover" />
            </div>
            <div className="px-6 pt-6 pb-8 border border-[#ededee] bg-white w-full rounded-2xl flex flex-col justify-between gap-5">
                <div>
                    <div
                        className="flex h-13.5 w-13.5 items-center justify-center rounded-xl border border-[#ededee] bg-[#f6f6f6] text-white mb-8"
                    >
                        <UserIdCard size="base" color="#77777d" />
                    </div>
                    <p className="text-[21px] font-medium">Professional Profile</p>
                    <p className="text-[#77777d] text-[14px] mt-3 font-medium">With 3+ years of commercial experience in software development, I combine technical expertise with a passion for helping people advance their careers. I create ATS-friendly resumes and career materials that highlight your strengths, communicate your impact, and help you stand out in today's job market. My goal is to help you present your experience with clarity and confidence.</p>
                </div>
                <div className="text-[12px] text-[#77777d] flex items-center gap-2">
                    <LocationAlt color="#77777d" size="xs" />
                    <p>Based in Ashgabat, Ahal, Turkmenistan</p>
                </div>
            </div>
        </div>
    )
}

export default Profile