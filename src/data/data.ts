import React from "react"
import zapier from "../../public/zapier.png"
import portfolio from "../../public/portfolio.png"
import medium from "../../public/medium.png"
import atlantic from "../../public/atlantic.png"
import tripwiz from "../../public/tripwiz.png"
import biryaniculture from "../../public/biryaniculture.png"
import passoports from "../../public/passoports.png"
import affoda from "../../public/affoda.png"

import { LuGraduationCap, LuSchool } from "react-icons/lu"
import { SiFreelancer } from "react-icons/si";
// import { CgWorkAlt } from "react-icons/cg"

export const projectsdata = [
     {
      title: "TripWiz - Hackathon project",
      description:
      "TripWiz is an AI-powered hotel discovery app built using Tambo.ai, enabling users to find hotels through natural language queries like “Find hotels in New York under $70 for next week,” and instantly view structured, real-time results.",
      tags: ["Tambo", "Next.JS", "Typescript", "Edge-server","express", "node.js", "ec2", "backend", "API-integration"],
      imageUrl:tripwiz,
      linkToProject:"https://github.com/Neeraj-gagat/TripWiz",
      liveLink:"https://tripwiz.neerajgagat.com",
    },
    {
      title: "Freelancing project - Hotel booking website",
      description:
      "Affoda is an affordable travel and hotel booking platform that helps users search, compare, and book hotels with ease. It focuses on providing a seamless booking experience with real-time data, smooth date selection, and a clean, responsive design.",
      tags: ["Next.JS", "Typescript",  "jwt-auth", "Edge-server", "Amazon SES", "express", "postgres", "node.js", "ec2", "backend", "API-integration"],
      imageUrl:affoda,
      linkToProject:"",
      liveLink:"https://affoda.com",
    },
    {
      title: "Freelancing project",
      description:
      "Designed and developed a high-performance, responsive website for a Dubai-based immigration company, enhancing brand presence and user experience.",
      tags: ["Next.JS", "Typescript",  "Vercel", "Edge-server", "s3"],
      imageUrl:atlantic,
      linkToProject:"",
      liveLink:"https://atlanticglobalvisa.com",
    },
    {
      title: "Freelancing project",
      description:
      "A modern, responsive web app built for a Dubai-based immigration consultancy. Enables users to explore citizenship and residency programs, upload documents securely, and submit inquiries seamlessly. ",
      tags: ["Next.JS", "Typescript", "Framer-Motion",  "Vercel", "Edge-server", "s3"],
      imageUrl:passoports,
      linkToProject:"",
      liveLink:"https://Passoports.com",
    },
    {
      title: "Biryani Ordering Website – Dubai",
      description:
      "Built a responsive food ordering site for a Dubai-based biryani brand, allowing users to browse the menu and place orders on both desktop and mobile.",
      tags: ["Next.JS", "Typescript", "Vercel", "Edge-server", "s3"],
      imageUrl:biryaniculture,
      linkToProject:"",
      liveLink:"https://biryaniculture.ae",
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
        liveLink:"https://www.neerajgagat.com",
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
    title: "Freelance Full-Stack Web Developer",
    location:"National & International Clients | Remote]",
    description:
      "As a freelance full-stack web developer, I collaborate with a diverse range of clients across national and international clients to build full-stack web applications tailored to their needs. From backend architecture to responsive frontend design, I deliver scalable and efficient solutions using modern technologies.",
    icon: React.createElement(SiFreelancer),
    date: "2024 jan - Present",
  },
    {
      title: "100xDevs",
      location:"",
      description:
        "Enrolled as a Student to learn Full Stack Web development and web3 development at 100xDevs,Learning Full Stack development in MERN Stack & Next.js and leraning about web3 solana and solidity, Making Full Stack Projects End to End, And Upskilling My Stack Eveyday",
      icon: React.createElement(LuGraduationCap),
      date: "2023 dec - Present",
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