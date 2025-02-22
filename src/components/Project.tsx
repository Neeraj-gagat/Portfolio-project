import { projectsdata } from "../data/data";
import { useScroll, useTransform } from "framer-motion";
import  { useRef } from "react";
// import Image from '../..public/image1.jpg'
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { motion } from "framer-motion";


type ProjectProps = (typeof projectsdata)[number]; 


export const Project = ({
    title,
    description,
    tags,
    imageUrl,
    linkToProject,
}:ProjectProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["0 1", "1.33 1"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
    ref={sectionRef}
    style={{
    scale: scaleProgress,
    opacity: opacityProgress,
    }}
    className=" mb-3 sm:mb-8 last:mb-0"
    >      
    <CardContainer className="inter-var bg-customcream shadow-2xl rounded-lg max-w-[42rem] overflow-hidden pr-10 sm:pr-8 relative h-[13rem] sm:h-[24rem]  hover:bg-customcreamd transition ">
        <CardBody className="relative group/card w-[21rem] sm:w-[35rem] h-[15] sm:h-[23rem] rounded-xl mt-4 p-6 ">
          <div className="pt-4 pb-7 px-5 pl-0 sm:pl-2 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex justify-center flex-col h-full group-even:ml-[18rem]">
            <h3 className="text-sm sm:text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-xs sm:text-[1rem] text-black/[0.9] pr-24  sm:pr-10">{description}</p>
            <ul className="flex flex-wrap gap-2  pr-16 sm:pr-4 mt-5">
              {tags.map((tag, index) => (
                <CardItem key={index}>
                  <li
                  className="bg-black/[0.9] px-3 py-1 text-[0.4rem] sm:text-[0.6rem] uppercase tracking-wider text-white rounded-full">
                  {tag}
                </li>
                </CardItem>
              ))}
            </ul>
          </div>
          <a href={linkToProject} target="_blank" style={{ cursor: "pointer" }}>
            <img
              src={imageUrl}
              alt="Project I worked on :-)"
              className="shadow-2xl absolute top-14 -right-36 w-[18] sm:w-[28.25rem] h-[8rem] sm:h-[15rem] rounded-t-lg transition group-hover:scale-[1.04]"
            />
          </a>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}
