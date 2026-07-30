import { School } from "@boxicons/react";
import { CalendarDetail } from "@boxicons/react"

function Education() {
    return (
        <div className="px-6 pt-6 pb-10 border border-[#ededee] bg-white rounded-2xl flex flex-col justify-between w-full max-w-225 mx-auto" id="Education">
            <div className="border-b border-[#ededee] pb-8 mb-10">
                <div
                    className="flex h-13.5 w-13.5 items-center justify-center rounded-xl border border-[#ededee] bg-[#f6f6f6] text-white mb-8"
                >
                    <School size="base" color="#77777d" />
                </div>
                <p className="text-[21px] font-medium">Education</p>
                <p className="text-[#77777d] text-[14px] mt-3 font-medium max-w-100 ">Degree and certification in the specialized field of information technology.</p>
            </div>

            <div>
                <div className="flex gap-3 justify-between items-center">
                    <div>
                        <p className="font-medium">Universiti Tenaga Nasional</p>
                        <p className="mt-1.5 text-[#77777d] text-[12px]">Bachelor’s degree * Information Technology</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 border border-[#ededee] text-[12px] text-[#33333b] font-medium">
                        <CalendarDetail size="xs" />
                        <p className="text-nowrap">Oct 2019 - Jun 2024</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education