import { motion } from "framer-motion";

export const AboutMe = () => {
    return <div id="about" className="flex bg-black justify-center px-5 md:px-10">
            <motion.section
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 text-base scroll-mt-28 justify-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
        >
            <div className="pb-10 font-serif text-white text-3xl">About Me</div>
            <p className="mb-3 text-white text-sm md:text-base text-justify">
            Completed My Bachelor of Technology degree in{" "}
            <span className="">Computer Science and Computer Applications</span> at
            Punjabi University, Patiala. I am skilled in{" "}
            <span className="">
            full-stack web development and problem solving
            </span>
            . <span className="">My favorite part of programming</span> is developing new things. I <span className="underline">love</span> the
            feeling of finally figuring out a solution to a problem. My core stack
            is{" "}
            <span className="">
            Typescript, JavaScript, React, Next.js, Tailwind, Node.js, Express, Postgres,  and Prisma orms
            </span>
            . I am have good experience with<span className=""> Edge server(VERCEL), postgreSQL, MongoDB and AWS.</span> I
            am always looking to learn new technologies. I am currently looking for
            a <span className="">full-time position</span> as a software
            developer/engineer.
        </p>

        <p className="text-white text-justify text-sm md:text-base">
            <span className="">When I&apos;m not coding</span>, I enjoy
            playing video games, watching movies, and go to the gym. I also 
            enjoy Reading About AI & WEB 3{" "}
        </p>
        </motion.section>
    </div>
}