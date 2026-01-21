import {motion} from "framer-motion"

export const Contributions = () => {
    return <motion.div
            className="bg-transparent flex justify-center px-5 mb-20 sm:mb-28"
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
    viewport={{ once: true, amount:0.3 }}>
        <div className="max-w-[45rem]">
            <p className="flex justify-center text-3xl scroll-mt-24 mb-12  text-white font-serif">Open Source Work</p>
            <div className="flex flex-row justify-center items-start gap-4 md:gap-8">
               <div className="bg-white rounded-full p-1 flex items-center justify-center mt-1">
                  <img className="w-[30px] md:w-[40px] h-[30px] md:h-[40px]" src="https://avatars.githubusercontent.com/u/7253637?s=200&v=4" alt="" />
               </div>
            <div className="flex-1 min-w-0 text-[#8B8B8B] text-sm md:text-base text-left break-words leading-relaxed">
                <p>Top Contributer at <a href="https://github.com/CCExtractor/ccsync"><b className="text-white">CCExtractor/ccsync</b></a> Contributed <b className="text-white"> 25+ merged Pull Requests </b> in open-source codebase Delivered <b className="text-white">new features, bug fixes, refactors, and test improvements</b> Participated in code reviews, issue reporting, and discussion-based collaboration Total contributions: 75+ (PRs + reviews + issues)</p>
            </div>
        </div>
        </div>
    
    </motion.div>
}