import { CurrencyNote, ArrowUpRightStroke } from "@boxicons/react"

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

            <div className="grid grid-cols-2 gap-3 max-[600px]:grid-cols-1">

                {/* Card one */}
                <div className="border border-[#ededee] p-6 rounded-2xl h-fit">
                    <p className="font-medium">
                        Career Resume Refresh — $30
                    </p>

                    <div className="mt-3 text-[#77777d] text-[13.5px] flex flex-col gap-5">
                        <p>I will build your resume from scratch: organize your experience, highlight key achievements, add measurable metrics, rewrite the content, and deliver a fully formatted final PDF document.</p>

                        <div>
                            <p>How it works:</p>
                            <ul className="flex flex-col gap-1.5 mt-2">
                                <li>— Initial consultation: We’ll discuss your job search goals, experience, key roles, project contributions, and your preferences.</li>
                                <li>— Share your materials: Brief notes on your roles & responsibilities, portfolio links (if relevant).</li>
                            </ul>
                        </div>

                        <div>
                            <p>Final delivery:</p>
                            <ul className="flex flex-col gap-1.5 mt-2">
                                <li>— ATS-friendly formatting</li>
                                <li>— Structuring your experience and projects</li>
                                <li>— Framing your main achievements</li>
                                <li>— Describing your contribution, tasks, and results</li>
                                <li>— Integrating relevant metrics and missing details</li>
                                <li>— Rewriting the text in a clear, confident tone</li>
                                <li>— Clean, easy-to-read layout</li>
                                <li>— One free revision</li>
                                <li>— Delivery within 2–3 days</li>
                            </ul>
                        </div>

                        <a
                            href="#"
                            className="flex items-center w-fit text-black px-4 py-2.5 rounded-xl bg-[#ededee] text-[14px] font-medium gap-2 hover:bg-[#e5e5e7] transition-all duration-200"
                        >
                            <ArrowUpRightStroke />
                            <span>Show Details</span>
                        </a>
                    </div>
                </div>

                {/* Card two */}
                <div className="border border-[#ededee] p-6 rounded-2xl h-fit">
                    <p className="font-medium">
                        Inexpensive extras — $7 each
                    </p>

                    <div className="mt-3 text-[#77777d] text-[13.5px] flex flex-col gap-5">
                        <p>If you would like to expand your application toolkit, I can customize your core materials for high-priority roles, enhance your professional profiles, and deliver supplemental files.</p>

                        <div>
                            <p>Additional services:</p>
                            <ul className="flex flex-col gap-1.5 mt-2">
                                <li>— LinkedIn optimization</li>
                                <li>— Cover letter</li>
                                <li>— Resume tailored to one job posting</li>
                                <li>— GitHub profile review (if relevant)</li>
                                <li>— Portfolio website review (if relevant)</li>
                                <li>— Bonus revisions</li>
                                <li>— 30-minute additional consultation</li>
                                <li>— Resume translation (English, Russian)</li>
                                <li>— Priority delivery (24 hours)</li>
                            </ul>
                        </div>

                        <a
                            href="#"
                            className="flex items-center w-fit text-black px-4 py-2.5 rounded-xl bg-[#ededee] text-[14px] font-medium gap-2 hover:bg-[#e5e5e7] transition-all duration-200"
                        >
                            <ArrowUpRightStroke />
                            <span>Show Details</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing