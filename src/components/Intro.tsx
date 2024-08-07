import  { WordsFlip }  from "./ui/WordsFlip";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
// import { CgProfile } from "react-icons/cg";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import profile from "../../public/profilepic.jpg"



export const Intro = () => {
    const words = ["Full Stack Developer", "Software Engineer", "MERN Stack Developer", "Tech Enthusiast", "Open Source Enthusiast", "NextJS Developer"];

    return <div className="content-center bg-gradient-to-b from-purple-200 via-pink-100 to-white  text-neutral-950 text-4xl text-center" id="home">
        <div className="flex justify-center pt-36">
                <img src={profile} className="size-28 rounded-full border-8 border-white" alt="image is not available" />
            </div>
        <div className="flex items-center justify-center pt-5 mx-auto">
            <div className="space-y-3">
            <div>
                <span className="font-bold ">Hello, I&apos;m Neeraj.</span> I&apos;m a
                <span className="font-bold"><WordsFlip className="!text-black" duration={2000} words={words} /></span>
            </div>
            <div>
                with
                <span className="font-bold"> Freelancing</span> experience. I enjoy
                building 
            </div>
            <div>
                <span className="italic">websites</span>.My focus is
                <span className="underline"> Full Stack in MERN &(Next.js)</span>.
            </div>
            </div>
        </div>
        <div className="flex flex-col justify-center gap-[1.3rem] px-4 sm:flex-row items-center text-lg font-medium mx-11 mt-10">
            <button className="focus:scale-[1.10] hover:scale-[1.10] transition bg-gray-900 hover:bg-black text-white gap-2 px-7 py-2 text-lg border rounded-full shadow-xl flex">Contact Me Here
                 <div className="flex pt-1.5 size-8 text-white pl-2"><BsArrowRight/></div>
            </button>
            <button className="focus:scale-[1.10] hover:scale-[1.10] transition hover:bg-gray-200 active:scale-105 text-black bg-slate-100 px-7 py-2.5 text-lg border rounded-full shadow-xl flex">Download CV
                <div className="pt-1.5 text-gray-500 mx-1"><HiDownload/></div>
            </button>
            <div className="group border-black/10 p-4 items-center text-[1.35rem] shadow-xl rounded-full flex gap-2 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:bg-gray-200 active:scale-105 transition cursor-pointer border" ><GrGithub /> </div>
            <div className="group border-black/10 p-4 items-center text-[1.35rem] shadow-xl rounded-full flex gap-2 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:bg-gray-200 active:scale-105 transition cursor-pointer border"><FaLinkedin /></div>
        </div>
    </div>
}