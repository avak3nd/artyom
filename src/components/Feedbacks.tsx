import { MessageDetail } from "@boxicons/react"

function Feedbacks() {
    const feedbacks = [
        {
            name: "Abby Nichols",
            role: "Data Engineer",
            date: "Oct 2023",
            message:
                "Developed subscription management, payment, and customer dashboard features for a SaaS platform, delivering responsive, scalable user experiences while collaborating closely with backend engineers to build and integrate reliable APIs.",
            color: "border-[#2ede7f]",
            link: "#",
        },
        {
            name: "John Smith",
            role: "Senior Product Manager",
            date: "Jan 2024",
            message:
                "Artyom consistently delivered high-quality frontend solutions with excellent attention to detail. His communication, technical expertise, and ability to collaborate across teams made him a valuable part of the project.",
            color: "border-[#2e7fde]",
            link: "#",
        },
    ];

    return (
        <div className="px-6 pt-6 pb-10 border border-[#ededee] bg-white rounded-2xl flex flex-col justify-between w-full max-w-225 mx-auto" id="Feedbacks">
            <div className="border-b border-[#ededee] pb-8 mb-10">
                <div
                    className="flex h-13.5 w-13.5 items-center justify-center rounded-xl border border-[#ededee] bg-[#f6f6f6] text-white mb-8"
                >
                    <MessageDetail size="base" color="#77777d" />
                </div>
                <p className="text-[21px] font-medium">Feedbacks</p>
                <p className="text-[#77777d] text-[14px] mt-3 font-medium max-w-100 ">Endorsements and testimonials highlighting professional aptitude and contributions from clients.</p>
            </div>

            <div className="flex flex-col gap-3">
                {feedbacks.map((feedback) => (
                    <a
                        key={`${feedback.name}-${feedback.date}`}
                        href={feedback.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`border ${feedback.color} p-6 rounded-2xl hover:bg-[#f6f6f6] transition-all duration-200`}
                    >
                        <p className="font-medium">{feedback.name}</p>

                        <p className="mt-1.5 mb-4 text-[#77777d] text-[13.5px]">
                            {feedback.role} • {feedback.date}
                        </p>

                        <p className="text-[12px] text-[#77777d] max-w-140">
                            {feedback.message}
                        </p>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Feedbacks