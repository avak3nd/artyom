import { EnvelopeAlt } from "@boxicons/react"
import { ArrowUpRightStroke } from "@boxicons/react"

function Hero() {
    return (
        <div className="pt-20 flex flex-col gap-2">
            <div className="flex items-center gap-2 px-4 py-2 mx-auto border border-[#ededee] bg-white w-fit text-[12px] text-[#33333b] rounded-lg font-medium">
                <div className="relative flex items-center justify-center w-2 h-2">
                    <span className="absolute inline-flex w-2 h-2 rounded-full bg-[#cbf7df] animate-ping"></span>
                    <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#2ede7f]"></span>
                </div>
                <p>Available for Work</p>
            </div>
            <center>
                <p className="text-[48px] font-medium leading-14 my-2 max-[600px]:text-[40px] max-[600px]:leading-12">Artyom Agadzhanyan</p>
            </center>
            <center>
                <p className="text-[#77777d] text-[18px] font-medium">Middle Frontend Dev & Resume Writer</p>
            </center>
            <div className="flex items-center justify-center gap-2 flex-wrap mt-6">
                <a
                    href="mailto:artyom.dev250@gmail.com"
                    className="flex items-center w-fit gap-2 rounded-xl bg-[#1d1d26] px-4 py-2.5 h-10 font-medium text-white transition-all duration-200 hover:opacity-90 text-[14px]"
                >
                    <EnvelopeAlt size="xs" />
                    <span>Send email</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/artyom-agadzhanyan-0779ba3a7/"
                    target="_blank"
                    className="flex items-center w-fit gap-2 rounded-xl bg-[#ededee] px-4 py-2.5 h-10 font-medium text-[14px] transition-all duration-200 hover:bg-[#e5e5e7]"
                >
                    <ArrowUpRightStroke size="xs" />
                    <span>Learn more</span>
                </a>
            </div>
        </div>
    );
}

export default Hero;