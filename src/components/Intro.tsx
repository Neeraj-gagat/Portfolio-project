import  { WordsFlip }  from "./ui/WordsFlip";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";





export const Intro = () => {
    const words = ["Full Stack Developer", "Software Engineer", "MERN Stack Developer", "Tech Enthusiast", "NextJS Developer"];

    return <div className="content-center  text-neutral-950 text-4xl text-center">
        <div className="flex justify-center pt-10">
            <CgProfile className="size-32"/>
            </div>
        <div className="flex items-center justify-center pt-10 mx-auto">
            <div>
            <span className="font-bold">Hello, I&apos;m Neeraj.</span> I&apos;m a
            <span className="font-bold"><WordsFlip className="!text-black" duration={2000} words={words} /></span>
            <br />
            with
            <span className="font-bold">2 years</span> of experience. I enjoy
            building 
            <br />
            <span className="italic">websites</span>. My focus is
            <span className="underline">React (Next.js)</span>.
            </div>
        </div>
        <div className="flex justify-center space-x-8 mt-16">
            <button className="bg-black text-white px-7 py-3 text-xl rounded-3xl">Contact Me Here</button>
            <button className=" text-black bg-slate-100 px-7 py-3 text-xl rounded-3xl">Downlod cv</button>
            <div><GrGithub /> </div>
            <div><FaLinkedin /></div>
        </div>
    </div>
}