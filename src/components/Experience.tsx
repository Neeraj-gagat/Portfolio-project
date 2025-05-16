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
    className="scroll-mt-28 mb-16 sm:mb-20 bg-black"
  >
    <div className="flex justify-center text-white text-4xl mb-14 font-serif">My Experience</div>
    <VerticalTimeline lineColor="black">
      {experiencesData.map((item, index) => (
        <React.Fragment key={index}>
          <VerticalTimelineElement
            visible={true}
            contentStyle={{
              background: "black",
              boxShadow: "none",
              border: "0.5px solid white",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight: "0.4rem solid black",
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
            <p className="!mt-1 text-sm text-slate-300">
              {item.description}
            </p>
          </VerticalTimelineElement>
        </React.Fragment>
      ))}
    </VerticalTimeline>
  </motion.section>
} 
