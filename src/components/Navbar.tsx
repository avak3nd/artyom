import { Pen } from "@boxicons/react"
import { NoteBook } from "@boxicons/react"

function Navbar() {
    return (
        <div className="mx-auto w-full max-w-225 pt-6">
            <nav className="relative flex w-full items-center justify-between rounded-xl border border-[#ededee] bg-white p-1.5 shadow-[0_6px_12px_rgba(29,29,38,0.04)]">
                <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-700 bg-indigo-400 text-white"
                >
                    <NoteBook size="base" />
                </a>

                <ul className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center flex max-lg:hidden">
                    <li><a href="#" className="link">Profile</a></li>
                    <li><a href="#Experience" className="link">Experience</a></li>
                    <li><a href="#Education" className="link">Education</a></li>
                    <li><a href="#" className="link">Skills</a></li>
                    <li><a href="#" className="link">Pricing</a></li>
                    <li><a href="#" className="link">Feedbacks</a></li>
                </ul>

                <a
                    href="#"
                    className="flex items-center gap-2 rounded-xl bg-[#1d1d26] px-4 py-2.5 h-10 font-medium text-white transition-all duration-200 hover:opacity-90 text-[14px]"
                >
                    <Pen size="xs" />
                    <span>Contact me</span>
                </a>
            </nav>
        </div>
    )
}

export default Navbar