import { motion } from "framer-motion";

export const AboutMe = () => {
    return <div id="about" className="flex bg-black justify-center px-5 md:px-10">
            <motion.section
            whileInView={{opacity: 1, y: 0, filter: 'blur(0px)'}}
            // initial={{ opacity: 0, x: -100 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{ duration: 1.5, ease: 'easeOut' }}
            className="mb-16 max-w-[45rem] text-center leading-8 sm:mb-20 text-base scroll-mt-28 justify-center"
            initial={{ opacity: 0, y: 100 ,filter: 'blur(10px)'}}
            // animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3,ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="pb-10 font-serif text-white text-3xl">About Me</div>
            <p className="mb-3 text-[#8B8B8B] text-sm md:text-base text-justify px-3">
            Completed My Bachelor of Technology degree in Computer Science and Computer Applications at Punjabi University, Patiala. I’m a <span className="text-white font-bold">freelance</span> full-stack web developer working with clients both nationally and <span className="text-white font-bold">internationally</span> to build modern, scalable web applications. With experience across the entire development stack, I deliver end-to-end solutions tailored to each project's needs. Currently, I’m also expanding my skills in Web3 development to stay at the forefront of emerging technologies.. My favorite part of programming is developing new things. I love the feeling of finally figuring out a solution to a problem. <span className="text-white font-bold">My core stack is Typescript, JavaScript, React, Next.js, Tailwind, Node.js, Express, Postgres, and Prisma orms.</span> I also have good experience with Edge server(VERCEL), postgreSQL, MongoDB and AWS. I am always looking to learn new technologies. I am currently looking for a full-time position as a software developer/engineer.
        </p>

        <p className="text-[#8B8B8B] text-justify text-sm md:text-base px-3">
            <span className="">When I&apos;m not coding</span>, I enjoy
            playing video games, watching movies, and go to the gym. I also 
            enjoy Reading About AI & WEB 3{" "}
        </p>
        </motion.section>
    </div>
}