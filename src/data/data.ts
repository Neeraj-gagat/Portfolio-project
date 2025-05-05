import React from "react"
import zapier from "../../public/zapier.png"
import portfolio from "../../public/portfolio.png"
import medium from "../../public/medium.png"
import atlantic from "../../public/atlantic.png"

import { LuGraduationCap, LuSchool } from "react-icons/lu"
// import { CgWorkAlt } from "react-icons/cg"

export const projectsdata = [
    {
      title: "Freelancing project",
      description:
      "Designed and developed a high-performance, responsive website for a Dubai-based immigration company, enhancing brand presence and user experience.",
      tags: ["Next.JS", "Framer-motion", "Typescript", "AWS", "ec2", "s3"],
      imageUrl:atlantic,
      linkToProject:"",
      liveLink:"https://atlanticglobalvisa.com",
    },
    {
        title: "Zapier Web App",
        description:
        "The Zapier.com Clone, with Next.js and Node.js and Micro-Services, enables secure sign-in, Task automation, Boost Productivity and Save Time.",
        tags: ["Next.JS", "JWT", "Typescript", "PostgreSQL", "Node.JS", "Microservices", "kafka"],
        imageUrl:zapier,
        linkToProject:"https://github.com/Neeraj-gagat/zapier",
        liveLink:"",
    },
    {
        title: "Portfolio Web App",
        description:
        "This is Portfolio Website, with React.js , To Showcase My Projects and Skills and Experience .",
        tags: ["ReactJS", "framer-motion", "Typescript", "Tailwind CSS" , "Aceternity UI"],
        imageUrl:portfolio,
        linkToProject:"https://github.com/Neeraj-gagat/Portfolio-project",
        liveLink:"https://portfolio-project-sand-nine.vercel.app/",
    },
    {title: "Blogging Web App",
        description:
        "The Medium.com Clone, with React and Cloudflare Workers, enables secure sign-in, content creation, and discovery of articles.",
        tags: ["ReactJS", "JWT", "Typescript", "PostgreSQL" , "Serverless"],
        imageUrl:medium,
        linkToProject:"https://github.com/Neeraj-gagat",
        liveLink:"https://medium-frontend-neeraj-gagats-projects.vercel.app/",
    },
]

export const experiencesData = [
    {
      title: "100xDevs",
      location:"",
      description:
        "Enrolled as a Student to learn Full Stack Web development at 100xDevs,Learning Full Stack development in MERN Stack & Next.js, Making Full Stack Projects End to End, And Upskilling My Stack Eveyday",
      icon: React.createElement(LuGraduationCap),
      date: "2023 - 2024 - Present",
    },
  
    {
      title: "Bachelor of Computer Application,Punjabi University, Patiala",
      location: "Patiala, Punjab, India",
      description:
        "Completed my Graduation in Computer Science from Punjabi University Patiala. I learned C, C++, Java, Data Structures, Algorithms, DBMS, SQL, OS, Computer Networks, Web Development, Software Engineering, etc.",
      icon: React.createElement(LuGraduationCap),
      date: "2020-2023",
    },
  
    {
      title: "High School 10 & 12",
      location: "Sangrur,Punjab, India",
      description:
        "I completed my matriculation from Sewa Dall Public School with 7 CGPA and my senior secondary from Same  School with 70.60% marks where I studied Accountancy, Business Studies, Economics, Mathematics, English",
      icon: React.createElement(LuSchool),
      date: "2017-2019",
    },
  ]