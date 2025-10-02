import { projectsdata } from "../data/data";
// import { useScroll, useTransform } from "framer-motion";
// import  { useRef } from "react";
import { IoLogoGithub } from "react-icons/io";
import { GoGlobe } from "react-icons/go";
// import Image from '../..public/image1.jpg'
// import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { motion } from "framer-motion";


type ProjectProps = (typeof projectsdata)[number]; 


export const Project = ({
    title,
    description,
    tags,
    imageUrl,
    linkToProject,
    liveLink,
}:ProjectProps) => {
    // const sectionRef = useRef<HTMLDivElement>(null);
    // const { scrollYProgress } = useScroll({
    //   target: sectionRef,
    //   offset: ["0 1", "1.33 1"],
    // });

    // const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    // const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
    // ref={sectionRef}
    // style={{
    // scale: scaleProgress,
    // opacity: opacityProgress,
    // }}
    className=" mb-3 sm:mb-8 last:mb-0"
    >      
    <div className="bg-transparent w-[370px] md:w-[350px] h-[490px] border-opacity-20 backdrop-blur-[0.3rem] border-[0.1px] border-white rounded-xl overflow-hidden p-0">
      <img src={imageUrl} alt="image" />
      <div className="p-3">
        <p className="text-base text-white font-black pt-4">{title}</p>
        <p className="text-white text-[13px] pt-1 text-opacity-50">{description}</p>
        
        <div className="bottom-2 fixed">
        <div className="flex flex-wrap gap-2 mt-2 pt-5">{tags.map( (tag, index) => (
          <div className="" key={index}>
              <ul className="text-white text-[9px] font-semibold bg-white/[0.1] px-2 py-1 uppercase tracking-wider rounded-lg">{tag}</ul>
          </div>
        ))}</div>
        {linkToProject && (
          <a
          href={linkToProject}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 mr-2 text-black text-[9px] w-[80px] font-bold bg-white/[0.8] px-2 py-1 uppercase tracking-wider rounded-lg"
        >
          <div className="flex items-center gap-1">
            <IoLogoGithub size={15} />
            <p className="text-[9.5px] font-bold">source</p>
          </div>
        </a>
        )}
        
        {liveLink && (
          <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 text-black text-[9px] w-[80px] font-bold bg-white/[0.8] px-2 py-1 uppercase tracking-wider rounded-lg"
        >
          <div className="flex items-center gap-1">
            <GoGlobe size={15} />
            <p className="text-[9.5px]">website</p>
          </div>
        </a>
        )}
        
        </div>
        
      </div>
    </div>
    </motion.div>
  );
}
