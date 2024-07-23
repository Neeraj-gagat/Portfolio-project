import React from "react"
import image1 from "../../public/image1.jpg"
import image2 from "../../public/image2.jpg"
import image3 from "../../public/image3.jpg"

import { LuGraduationCap, LuSchool } from "react-icons/lu"
// import { CgWorkAlt } from "react-icons/cg"

export const projectsdata = [
    {
        title: "Blogging Web App",
        description:
        "The Medium.com Clone, with React and Cloudflare Workers, enables secure sign-in, content creation, and discovery of articles.",
        tags: ["ReactJS", "JWT", "Typescript", "PostgreSQL" , "Serverless"],
        imageUrl:`${image1}?q=95`,
        linkToProject:"www.google.com",

    },
    {
        title: "Blogging Web App",
        description:
        "The Medium.com Clone, with React and Cloudflare Workers, enables secure sign-in, content creation, and discovery of articles.",
        tags: ["ReactJS", "JWT", "Typescript", "PostgreSQL" , "Serverless"],
        imageUrl:`${image2}?q=95`,
        linkToProject:"www.google.com",
    },
    {title: "Blogging Web App",
        description:
        "The Medium.com Clone, with React and Cloudflare Workers, enables secure sign-in, content creation, and discovery of articles.",
        tags: ["ReactJS", "JWT", "Typescript", "PostgreSQL" , "Serverless"],
        imageUrl:`${image3}?q=95`,
        linkToProject:"www.google.com",
    },
]

export const experiencesData = [
    {
      title: "100xDevs",
      location:"Remote",
      description:
        "Enrolled as a Student to learn Full Stack development at 100xDevs,Learning Full Stack development in MERN Stack, Making Full Stack Projects End to End, And Upskilling My Stack Eveyday",
      icon: React.createElement(LuGraduationCap),
      date: "2023 - 2024 - Present",
    },
  
    {
      title: "Bachelor of Computer Application,Punjabi University, Patiala",
      location: "Pataila, Punjab, India",
      description:
        "Completed my Graduation in Computer Science from Punjabi University Pataila. I learned C, C++, Java, Data Structures, Algorithms, DBMS, SQL, OS, Computer Networks, Web Development, Software Engineering, etc.",
      icon: React.createElement(LuGraduationCap),
      date: "2020-2023",
    },
  
    {
      title: "High School 10 & 12",
      location: "Sangrur,Punjab, India",
      description:
        "I completed my matriculation from Sewa Dall Public School with 7 CGPA and my senior secondary from Same  School with 88.60% marks where I studied Accountancy, Business Studies, Economics, Mathematics, English",
      icon: React.createElement(LuSchool),
      date: "2017-2019",
    },
  ]