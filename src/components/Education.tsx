import { School } from "@boxicons/react";
import { CalendarDetail } from "@boxicons/react"

import SectionHeader from "./ui/SectionHeader";

function Education() {
    return (
        <div className="px-6 pt-6 pb-10 border border-[#ededee] bg-white rounded-2xl flex flex-col justify-between w-full max-w-225 mx-auto" id="Education">
            <SectionHeader
                icon={School}
                title="Education"
                description="Bachelor’s degree in the specialized field of information technology."
            />

            <div>
                <div className="flex flex-wrap gap-4 justify-between items-center">
                    <div>
                        <p className="font-medium">Universiti Tenaga Nasional</p>
                        <p className="mt-1.5 text-[#77777d] text-[13.5px]">Bachelor’s degree • Information Technology</p>
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