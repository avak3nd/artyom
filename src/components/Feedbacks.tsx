import { MessageDetail } from "@boxicons/react"

import SectionHeader from "./ui/SectionHeader";

function Feedbacks() {
    const feedbacks = [
        {
            name: "Ylyas Bayramov",
            role: "Backend Developer",
            date: "Aug 2026",
            message:
                "I've had the chance to work with Artyom in two different ways. We worked together on an outsourced project where he was a frontend developer, and later I became his client for resume writing. In both cases, he was easy to work with, reliable, and always delivered quality work. He did a great job rewriting my resume, making it much clearer and more professional while keeping it true to my experience. Whether you're looking for a frontend developer or someone to help improve your resume, I'd definitely recommend Artyom. He's skilled, approachable, and genuinely cares about doing a good job.",
            color: "border-[#2ede7f]",
            link: "https://www.linkedin.com/in/artyom-agadzhanyan-0779ba3a7/",
        },
        {
            name: "Maksat Gurbanov",
            role: "Marketing Manager",
            date: "Aug 2026",
            message:
                "I had the pleasure of working with Artyom as his client. He created a resume that not only looked professional but also effectively highlighted my experience, skills, and achievements. Artyom took the time to understand my background, asked thoughtful questions, and provided valuable suggestions that made my resume much stronger. His attention to detail, knowledge of current hiring trends, and ability to present information clearly were evident throughout the process. I highly recommend Artyom to anyone looking for a high-quality resume. He's professional, responsive, and genuinely invested in helping his clients succeed.",
            color: "border-[#2e7fde]",
            link: "https://www.linkedin.com/in/artyom-agadzhanyan-0779ba3a7/",
        },
    ];

    return (
        <div className="px-6 pt-6 pb-10 border border-[#ededee] bg-white rounded-2xl flex flex-col justify-between w-full max-w-225 mx-auto" id="Feedbacks">
            <SectionHeader
                icon={MessageDetail}
                title="Feedbacks"
                description="Feedback from clients who trusted me to strengthen their resumes and job application materials."
            />

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