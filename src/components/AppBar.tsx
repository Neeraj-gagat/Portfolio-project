import AnchorLink from "react-anchor-link-smooth-scroll";
import {motion} from "framer-motion"

export const AppBar = () =>{

    return <motion.div 
    className="shadow-xl left-1/2 h-[4rem] top-1 sm:top-2 sm:h-[3.25rem] sm:w-[35rem] rounded-xl sm:rounded-full flex pt-4 backdrop-blur-[0.3rem] border-opacity-40 bg-opacity-60 justify-center fixed sm:fixed z-[999] mx-auto  w-[22rem] py-3 bg-white mt-5"
    initial={{ y: -100, x: "-50%", opacity: 0 }}
    animate={{ y: 0, x: "-50%", opacity: 1 }}
    >
    <nav className="flex justify-center w-[20rem] space-x-4 sm:space-x-10 sm:w-[30rem] mt-2 sm:mt-0">
      <AnchorLink offset={100} href="#home" className="text-gray-900 focus:text-black hover:text-black pt-0.5 rounded-md text-xs md:text-sm font-medium">
        Home
      </AnchorLink>
      <AnchorLink offset={100} href="#about" className="text-gray-900 focus:text-black hover:text-black pt-0.5 rounded-md text-xs md:text-sm font-medium">
        About
      </AnchorLink>
      <AnchorLink offset={100} href="#projects" className="text-gray-900 focus:text-black hover:text-black pt-0.5 rounded-md text-xs md:text-sm font-medium">
        Projects
      </AnchorLink>
      <AnchorLink offset={100} href="#skills" className="text-gray-900 focus:text-black hover:text-black pt-0.5 rounded-md text-xs md:text-sm font-medium">
        Skills
      </AnchorLink>
      <AnchorLink offset={100} href="#experience" className="text-gray-900 focus:text-black hover:text-black pt-0.5 rounded-md text-xs md:text-sm font-medium">
        Experience
      </AnchorLink>
      <AnchorLink offset={100} href="#contact" className="text-gray-900 focus:text-black hover:text-black pt-0.5 rounded-md text-xs md:text-sm font-medium">
        Contact
      </AnchorLink>
    </nav>
  </motion.div>
}