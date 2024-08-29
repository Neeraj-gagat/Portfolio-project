import { AboutMe } from "../components/AboutMe"
import { AppBar } from "../components/AppBar"
import { ContactMe } from "../components/ContactMe"
import { Experience } from "../components/Experience"
import { Intro } from "../components/Intro"
import { Projects } from "../components/Projects"
import SectionDivider from "../components/SectionDevider"
import { Skills } from "../components/Skills"

export const LandingPage = () => {
    return <div className="bg-violet-200 max-h-screen w-full ">
        <AppBar/>
        <Intro/>
        <SectionDivider/>
        <AboutMe/>
        <Projects/>
        <Skills/>
        <Experience/>
        <ContactMe/>
        
    </div>
}