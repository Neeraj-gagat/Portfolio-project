import { AboutMe } from "../components/AboutMe"
import { AppBar } from "../components/AppBar"
import { Intro } from "../components/Intro"
import { Projects } from "../components/Projects"
import SectionDivider from "../components/SectionDevider"
import { Skills } from "../components/Skills"

export const LandingPage = () => {
    return <div className="bg-gray-50 min-h-screen">
        <div className="pt-2"> <AppBar/> </div>
        <Intro/>
        <SectionDivider/>
        <AboutMe/>
        <Projects/>
        <Skills/>

    </div>
}