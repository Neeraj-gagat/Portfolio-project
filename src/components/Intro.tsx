import  { WordsFlip }  from "./ui/WordsFlip";
// import AnchorLink from "react-anchor-link-smooth-scroll";
import { GrGithub } from "react-icons/gr";
// import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaSquareXTwitter } from "react-icons/fa6";
// import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
// import profile from "../../public/profilepic.jpg"
import Avatar from "./ui/Avatar-animation";



export const Intro = () => {
    const words = ["Full Stack Developer", "Software Engineer", "MERN Stack Developer", "Tech Enthusiast", "Open Source Contributer", "NextJS Developer"];

    return <div className=" content-center bg-black  text-white text-4xl text-center" id="home">
        <div className="flex justify-center pt-36">
            <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            {/* <img src={profile} className="size-28 rounded-full border-4 border-customcream" alt="image is not available" /> */}
            <Avatar/>
            </motion.div>
            
            </div>
        <motion.div className="flex items-center justify-center font-sans pt-5"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        >
            <div className="space-y-3 text-base sm:text-2xl">
                <div className="overflow-y-hidden flex">
                    <p className="font-bold text-blue-600">Hello, I&apos;m Neeraj.</p> 
                </div>
                <div className="flex">
                <p className="text-[#8B8B8B]">I&apos;m a <WordsFlip className="!text-white" duration={2000} words={words} /></p>
                </div>
                <div className="flex text-[#8B8B8B]">
                    <p>with <strong className="text-white"> Freelancing</strong> experience. I enjoy building </p>
                </div>
                <div className="flex">
                    <p className=" pr-1 text-[#8B8B8B]">websites.My focus is</p>
                    <p className="underline decoration-blue-600"> Full Stack in MERN &(Next.js)</p>.
                </div>
            </div>
        </motion.div>
        <div className="flex flex-col justify-center gap-[1.3rem] px-4 sm:flex-row text-lg font-medium mx-11 mt-10">
            <div className="flex flex-row  space-x-8">
            {/* <AnchorLink href="#contact" className="focus:scale-[1.10] hover:scale-[1.10] transition bg-white hover:bg-zinc-300 border-none text-black gap-1 px-5 py-2 text-sm md:text-lg rounded-full shadow-xl flex" >Contact 
                 <div className="flex pt-1 size-8 text-black pl-2"><BsArrowRight/></div>
            </AnchorLink> */}
            <a href="/Resume.pdf" download="Resume.pdf" className="items-center focus:scale-[1.10] hover:scale-[1.10] transition hover:bg-zinc-300 active:scale-105 text-black bg-white px-5  text-sm md:text-lg border-black rounded-full shadow-xl flex">Resume
                <div className="pt-1 md:pt-1.5 text-gray-500 mx-1"><HiDownload color="black"/></div>
            </a>    
            <a className="group border-black/10 p-2 items-center text-[1.35rem] shadow-xl bg-white rounded-full flex gap-2 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:bg-zinc-300 active:scale-105 transition cursor-pointer border" href="https://github.com/Neeraj-gagat" target="_blank" ><GrGithub color="black"  /> </a>
            <a className="group border-black/10 p-2 items-center text-[1.35rem] shadow-xl bg-white rounded-full flex gap-2 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:bg-zinc-300 active:scale-105 transition cursor-pointer border" href="https://x.com/Neeraj_tw" target="_blank"><FaSquareXTwitter color="black" /></a>
            </div>
            
            <div className="flex gap-[1.3rem]">
            {/* <a className="group border-black/10 p-2 items-center text-[1.35rem] shadow-xl bg-white rounded-full flex gap-2 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:bg-zinc-300 active:scale-105 transition cursor-pointer border" href="https://github.com/Neeraj-gagat" target="_blank" ><GrGithub color="black"  /> </a> */}
            {/* <a className="group border-black/10 p-2 items-center text-[1.35rem] shadow-xl bg-white rounded-full flex gap-2 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:bg-zinc-300 active:scale-105 transition cursor-pointer border" href="https://in.linkedin.com/in/neeraj-gagat-6b59b8210?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank"><FaLinkedin color="black" /></a>
            <a className="group border-black/10 p-2 items-center text-[1.35rem] shadow-xl bg-white rounded-full flex gap-2 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:bg-zinc-300 active:scale-105 transition cursor-pointer border" href="https://x.com/Neeraj_tw" target="_blank"><FaSquareXTwitter color="black" /></a> */}
            </div>
        </div>
    </div>
}