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
    className="group mb-3 sm:mb-8 last:mb-0"
    style={{
    scale: scaleProgress,
    opacity: opacityProgress,
    }}
    >      
    <CardContainer className="inter-var bg-gray-100 rounded-lg max-w-[42rem] border overflow-hidden sm:pr-8 relative sm:h-[24rem]  hover:bg-gray-300 transition group-even:pl-8">
        <CardBody className="relative group/card w-auto h-auto rounded-xl mt-4 p-6">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
            <ul className="flex flex-wrap gap-2 mt-5">
              {tags.map((tag, index) => (
                <CardItem key={index}>
                  <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">
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
              // quality={95}
              className="shadow-2xl absolute top-14 -right-40 w-[28.25rem] h-[18rem] rounded-t-lg transition group-hover:scale-[1.04]  group-even:right-[initial] group-even:-left-40"
            />
          </a>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}
