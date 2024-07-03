import React from "react"
import image1 from "../../public/image1.jpg"
import image2 from "../../public/image2.jpg"
import image3 from "../../public/image3.jpg"
import image4 from "../../public/image4.jpg"
import { LuGraduationCap, LuSchool } from "react-icons/lu"
import { CgWorkAlt } from "react-icons/cg"

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
      title: "Associate Software Engineer, Urbint",
      location: "Bengaluru, Karnataka, India",
      description:
        "Working as an Full Stack Engineer at Urbint, in the worker safety team to build a platform that helps in reducing the risk of accidents for field workers. I work on the backend using FastAPI, GraphQL with Python and Strawberry, PostgreSQL, and the frontend using Next.js, React.js, and Tailwind CSS.",
      icon: React.createElement(CgWorkAlt),
      date: "June 2024 - Present",
    },
    {
      title: "Intern, Caterpillar Inc.",
      location: "Bengaluru, Karnataka, India",
      description:
        "Worked as an Automation Testing Intern at Caterpillar Inc. for 3 months. I automated the testing of a web application using Selenium WebDriver and Java. I also worked on a project to automate the testing of a REST API using Postman.",
      icon: React.createElement(CgWorkAlt),
      date: "June 2023 - Aug 2023",
    },
    {
      title: "Bachelor of Computer Application,Punjabi University, Patiala",
      location: "Dharwad, Karnataka, India",
      description:
        "Currently in my final year pursuing B.Tech in Computer Science and Engineering from IIIT Dharwad. I learned C, C++, Java, Data Structures, Algorithms, DBMS, SQL, OS, Computer Networks, Web Development, Software Engineering, etc.",
      icon: React.createElement(LuGraduationCap),
      date: "2020-2024",
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