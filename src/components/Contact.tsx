import { NoteBook } from "@boxicons/react"

function Contact() {
    return (
        <div className="pt-20 flex flex-col" id="Contact">
            <center>
                <a
                    href="#"
                    className="flex h-20 w-20 mb-6 items-center justify-center rounded-xl border border-indigo-700 bg-indigo-400 text-white"
                >
                    <NoteBook size="lg" />
                </a>
            </center>
            <center>
                <p className="text-[22px] font-medium mb-1">Feel Free to Reach Out</p>
            </center>
            <center>
                <p className="text-[#77777d] text-[18px] font-medium">Let's start a productive conversation</p>
            </center>
        </div>
    )
}

export default Contact