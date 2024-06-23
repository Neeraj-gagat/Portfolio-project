import { motion } from "framer-motion";

export const AboutMe = () => {
    return <div className="flex justify-center">
            <motion.section
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 text-lg scroll-mt-28 justify-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <div className="pb-10 font-serif text-4xl">About Me</div>
            <p className="mb-3">
            Completed My Bachelor of Technology degree in{" "}
            <span className="font-medium">Computer Science and Computer Applications</span> at
            Punjabi University, Patiala. I am skilled in{" "}
            <span className="font-medium">
            full-stack web development and problem solving
            </span>
            . <span className="italic">My favorite part of programming</span> is the
            problem-solving aspect. I <span className="underline">love</span> the
            feeling of finally figuring out a solution to a problem. My core stack
            is{" "}
            <span className="font-medium">
            Java, JavaScript, React, Next.js, Node.js, and MongoDB
            </span>
            . I am also familiar with<span className="font-medium"> Recoil, postgreSQL, TypeScript and Prisma.</span> I
            am always looking to learn new technologies. I am currently looking for
            a <span className="font-medium">full-time position</span> as a software
            developer/engineer.
        </p>

        <p>
            <span className="italic">When I&apos;m not coding</span>, I enjoy
            playing video games, watching movies, and go to the gym. I also 
            enjoy Reading About AI & WEB 3{" "}
        </p>
        </motion.section>
    </div>
}