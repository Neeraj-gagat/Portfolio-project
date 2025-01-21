import  { WordsFlip }  from "./ui/WordsFlip";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import profile from "../../public/profilepic.jpg"



export const Intro = () => {
    const words = ["Full Stack Developer", "Software Engineer", "MERN Stack Developer", "Tech Enthusiast", "Open Source Contributer", "NextJS Developer"];

    return <div className=" content-center bg-customstag  text-neutral-950 text-4xl text-center" id="home">
        <div className="flex justify-center pt-36">
            <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <img src={profile} className="size-28 rounded-full border-4 border-customcream" alt="image is not available" />
            </motion.div>
            
            </div>
        <motion.div className="flex items-center justify-center pt-5"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        >
            <div className="space-y-3 text-sm sm:text-3xl">
                <div className="overflow-y-hidden">
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
        </motion.div>
        <div className="flex flex-col justify-center gap-[1.3rem] px-4 sm:flex-row items-center text-lg font-medium mx-11 mt-10">
            <AnchorLink href="#contact" className="focus:scale-[1.10] hover:scale-[1.10] transition bg-black hover:bg-black border-none text-white gap-2 px-7 py-2 text-lg rounded-full shadow-xl flex" >Contact Me Here 
                 <div className="flex pt-1.5 size-8 text-white pl-2"><BsArrowRight/></div>
            </AnchorLink>
            <a href="../../public/Resume-Neeraj.pdf" download={"Resume-Neeraj.pdf"} className="focus:scale-[1.10] hover:scale-[1.10] transition hover:bg-customcreamd active:scale-105 text-black bg-customcream px-7 py-2.5 text-lg border-black rounded-full shadow-xl flex">Download CV
                <div className="pt-1.5 text-gray-500 mx-1"><HiDownload/></div>
            </a>
            <div className="flex gap-[1.3rem]">
            <a className="group border-black/10 p-4 items-center text-[1.35rem] shadow-xl bg-customcream rounded-full flex gap-2 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:bg-customcreamd active:scale-105 transition cursor-pointer border" href="https://github.com/Neeraj-gagat" target="_blank" ><GrGithub /> </a>
            <a className="group border-black/10 p-4 items-center text-[1.35rem] shadow-xl bg-customcream rounded-full flex gap-2 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:bg-customcreamd active:scale-105 transition cursor-pointer border" href="https://in.linkedin.com/in/neeraj-gagat-6b59b8210?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank"><FaLinkedin /></a>
            <a className="group border-black/10 p-4 items-center text-[1.35rem] shadow-xl bg-customcream rounded-full flex gap-2 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:bg-customcreamd active:scale-105 transition cursor-pointer border" href="https://x.com/Neeraj_tw" target="_blank"><FaSquareXTwitter /></a>
            </div>
        </div>
    </div>
}