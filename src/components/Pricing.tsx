import { CurrencyNote } from "@boxicons/react"

import SectionHeader from "./ui/SectionHeader"

const pricingCards = [
    {
        title: "Resume Builder — $40",
        description:
            "I'll create a professional, ATS-friendly resume from scratch by organizing your experience, highlighting your achievements, and presenting your skills in a way that attracts recruiters and hiring managers.",
        heading: "Final delivery:",
        items: [
            "ATS-friendly formatting",
            "Professional resume structure",
            "Achievement-focused bullet points",
            "Quantified impact and metrics",
            "Clear, confident writing",
            "Clean, modern layout",
            "One free revision",
            "Delivery within 2–3 business days",
        ],
    },
    {
        title: "Extras — $10 each",
        description:
            "If you would like to expand your application toolkit, I can customize your core materials for high-priority roles, enhance your professional profiles, and deliver supplemental files.",
        heading: "Additional services:",
        items: [
            "LinkedIn optimization",
            "Cover letter",
            "Resume tailored to one job posting",
            "GitHub profile review (if any)",
            "Portfolio website review (if any)",
            "Bonus revisions",
            "Resume translation (English, Russian)",
            "Priority delivery (24 hours)",
        ],
    },
    // {
    //     title: "Resume Consultation — $15",
    //     description:
    //         "You can get professional feedback on your existing resume with clear, actionable recommendations to improve its structure, content, and ATS compatibility before applying to your next role.",
    //     heading: "Topics of discussion:",
    //     items: [
    //         "ATS compatibility review",
    //         "Resume formatting",
    //         "Work experience structure",
    //         "Skills section optimization",
    //         "Keyword suggestions",
    //         "Written improvement summary",
    //         "40-minute chat consultation",
    //         "Q&A session",
    //     ],
    // },
]

function Pricing() {
    return (
        <div
            className="px-6 pt-6 pb-10 border border-[#ededee] bg-white rounded-2xl flex flex-col justify-between w-full max-w-225 mx-auto"
            id="Pricing"
        >
            <SectionHeader
                icon={CurrencyNote}
                title="Pricing"
                description="Transparent pricing for resume writing and application materials. Perfect for students, graduates, and career professionals looking to build stronger resumes and job application materials."
            />

            <div className="grid grid-cols-2 gap-3 max-[800px]:grid-cols-2 max-[600px]:grid-cols-1">
                {pricingCards.map((card) => (
                    <div key={card.title} className="card">
                        <p className="font-medium">{card.title}</p>

                        <div className="mt-3 text-[#77777d] text-[13.5px] flex flex-col gap-5">
                            <p>{card.description}</p>

                            <div>
                                <p>{card.heading}</p>

                                <ul className="flex flex-col gap-1.5 mt-2">
                                    {card.items.map((item) => (
                                        <li key={item}>— {item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* <a
                                href="#"
                                className="flex items-center w-fit text-black px-4 py-2.5 rounded-xl bg-[#ededee] text-[14px] font-medium gap-2 hover:bg-[#e5e5e7] transition-all duration-200"
                            >
                                <ArrowUpRightStroke />
                                <span>Show Details</span>
                            </a> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing