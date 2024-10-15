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
    className="scroll-mt-28 mb-28 sm:mb-40 bg-customstag"
  >
    <div className="flex justify-center text-4xl mb-14 font-semibold font-serif">My Experience</div>
    <VerticalTimeline lineColor="#c3c9a1">
      {experiencesData.map((item, index) => (
        <React.Fragment key={index}>
          <VerticalTimelineElement
            visible={true}
            contentStyle={{
              background: "#c3c9a1",
              boxShadow: "none",
              border: "3px solid black",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight: "0.4rem solid #c3c9a1",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: "#c3c9a1",
              fontSize: "1.5rem",
              color: "black",
              boxShadow:"inherit"
            }}
          >
            <h3 className="font-semibold capitalize">{item.title}</h3>
            <p className="font-normal !mt-0">{item.location}</p>
            <p className="!mt-1 !font-normal text-gray-900">
              {item.description}
            </p>
          </VerticalTimelineElement>
        </React.Fragment>
      ))}
    </VerticalTimeline>
  </motion.section>
} 
