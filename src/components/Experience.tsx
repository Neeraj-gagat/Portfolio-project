import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { experiencesData } from "../data/data";
import React from "react";



export const Experience = () =>{
    return <motion.section
    initial={{  opacity: 0, y: 100}}
    whileInView={{ opacity: 1, y: 0}}
    transition={{ type:"tween" , duration: 1, delay: 0.2}}
    viewport={{ once: true }}
    id="experience"
    className="scroll-mt-28 mb-16 sm:mb-20 bg-transparent"
  >
    <div className="flex justify-center text-white text-3xl mb-14 font-serif">My Experience</div>
    <VerticalTimeline lineColor="white">
      {experiencesData.map((item, index) => (
        <React.Fragment key={index}>
          <VerticalTimelineElement
            visible={true}
            contentStyle={{
              background: "transparent",
              boxShadow: "none",
              border: "0.1px solid #121D42",
              textAlign: "left",
              padding: "1rem 1rem",
            }}
            contentArrowStyle={{
              borderRight: "0.4rem solid transparent",
            }}
            date={item.date}
            dateClassName="text-white"
            icon={item.icon}
            iconStyle={{
              viewTimeline:"white",
              background: "white",
              fontSize: "1.5rem",
              color: "black",
              boxShadow:"inherit"
            }}
          >
            <h3 className="text-white capitalize">{item.title}</h3>
            <p className=" text-white !mt-0">{item.location}</p>
            <p className="!mt-1 text-[12px] text-slate-300">
              {item.description}
            </p>
          </VerticalTimelineElement>
        </React.Fragment>
      ))}
    </VerticalTimeline>
  </motion.section>
} 
