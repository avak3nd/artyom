import { ArrowUpRightStroke, CurrencyNote } from "@boxicons/react"

function Pricing() {
    return (
        <div className="px-6 pt-6 pb-10 border border-[#ededee] bg-white rounded-2xl flex flex-col justify-between w-full max-w-225 mx-auto" id="Pricing">
            <div className="border-b border-[#ededee] pb-8 mb-10">
                <div
                    className="flex h-13.5 w-13.5 items-center justify-center rounded-xl border border-[#ededee] bg-[#f6f6f6] text-white mb-8"
                >
                    <CurrencyNote size="base" color="#77777d" />
                </div>
                <p className="text-[21px] font-medium">Pricing</p>
                <p className="text-[#77777d] text-[14px] mt-3 font-medium max-w-100 ">Transparent pricing for professional resume and career services, designed to help you take the next step.</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <div className="border border-[#ededee] p-6 rounded-2xl">
                    <p className="font-medium">Career Resume Refresh — $20</p>
                    <ul className="mt-3 text-[#77777d] text-[13.5px] gap-1 flex flex-col">
                        <li>- Resume review</li>
                        <li>- Full rewrite</li>
                        <li>- ATS-friendly formatting</li>
                        <li>- One revision</li>
                        <li>- Delivery within 2 days</li>
                    </ul>
                    <a href="#" className="mt-4 flex items-center w-fit px-4 py-2.5 rounded-xl bg-[#ededee] text-[14px] font-medium gap-2 hover:bg-[#e3e3e4] transition-all duration-200">
                        <ArrowUpRightStroke />
                        <span>Show Details</span>
                    </a>
                </div>

                <div className="border border-[#ededee] p-6 rounded-2xl">
                    <p className="font-medium">Inexpensive extras — $5 each</p>
                    <ul className="mt-3 text-[#77777d] text-[13.5px] gap-1 flex flex-col">
                        <li>- LinkedIn optimization</li>
                        <li>- Tailor resume to one job posting</li>
                        <li>- Cover letter</li>
                        <li>- GitHub profile review (for developers)</li>
                        <li>- Additional revisions</li>
                    </ul>
                    <a href="#" className="mt-4 flex items-center w-fit px-4 py-2.5 rounded-xl bg-[#ededee] text-[14px] font-medium gap-2 hover:bg-[#e3e3e4] transition-all duration-200">
                        <ArrowUpRightStroke />
                        <span>Show Details</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Pricing