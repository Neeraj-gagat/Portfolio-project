import { motion } from "framer-motion";
import { skillsarr } from "../data/data";


export const Skills = () => {
    
    return <motion.div 
    initial={{ opacity: 0, y: 100 , filter: 'blur(10px)'}}
    whileInView={{
                opacity: 1,
                y:0,
                filter: 'blur(0px)'
                }}
                transition={{
                duration: 0.5,
                delay:0.3
                }}
    viewport={{ once: true, amount:0.3 }}
    id="skills" className="flex justify-center bg-transparent z-10">
                <div className="mb-28 justify-center max-w-[53rem] scroll-mt-28 text-center sm:mb:40">
                    <div className="text-3xl text-white font-serif"> My Skills</div>
                        <div className=" mt-12 w-[350px] md:w-[610px] text-justify">
                            <ul className="flex flex-wrap justify-center gap-1.5 text-xs md:text-sm uppercase font-medium text-white">
                                {skillsarr.map((skill, index) => (
                                    <li
                                    className="bg-white/10 backdrop-blur-[0.2rem] border-black/[0.1] rounded-lg px-3 py-1 hover:text-black hover:bg-zinc-300 transition-colors duration-200 cursor-default"
                                    key={index}
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                </div>
            </motion.div>
}