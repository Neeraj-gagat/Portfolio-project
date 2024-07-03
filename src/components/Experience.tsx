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
    className="scroll-mt-28 mb-28 sm:mb-40"
  >
    <div className="flex justify-center text-4xl mb-14 font-serif">My Experience</div>
    <VerticalTimeline lineColor="#e5e7eb">
      {experiencesData.map((item, index) => (
        <React.Fragment key={index}>
          <VerticalTimelineElement
            visible={true}
            contentStyle={{
              background: "#f3f4f6",
              boxShadow: "none",
              border: "1px solid rgba(0,0,0,0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight: "0.4rem solid #9ca3af",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: "white",
              fontSize: "1.5rem",
            }}
          >
            <h3 className="font-semibold capitalize">{item.title}</h3>
            <p className="font-normal !mt-0">{item.location}</p>
            <p className="!mt-1 !font-normal text-gray-700">
              {item.description}
            </p>
          </VerticalTimelineElement>
        </React.Fragment>
      ))}
    </VerticalTimeline>
  </motion.section>
} 
