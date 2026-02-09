import { AboutMe } from "../components/AboutMe"
import { AppBar } from "../components/AppBar"
import { ContactMe } from "../components/ContactMe"
import { Contributions } from "../components/Contributions"
import { Experience } from "../components/Experience"
import { Intro } from "../components/Intro"
import { Projects } from "../components/Projects"
import SectionDivider from "../components/SectionDevider"
import { Skills } from "../components/Skills"
import Snowfall from 'react-snowfall'

export const LandingPage = () => {
    return <div className="relative bg-gradient-to-br from-slate-950 via-black to-blue-950 overflow-hidden">
        <div className="fixed inset-0 pointer-events-none z-0">
           <Snowfall color="white" snowflakeCount={20}/>
           <Snowfall color="blue" snowflakeCount={20}/>
        </div>
        <AppBar/>
        <Intro/>
        <SectionDivider/>
        <AboutMe/>
        <Projects/>
        <Skills/>
        <Experience/>
        <Contributions/>
        <ContactMe/>
    </div>
}