import { AboutMe } from "../components/AboutMe"
import { AppBar } from "../components/AppBar"
import { Intro } from "../components/Intro"
import SectionDivider from "../components/SectionDevider"

export const LandingPage = () => {
    return <div className="bg-pink-100 min-h-screen">
        <div className="pt-2"> <AppBar/> </div>
        <Intro/>
        <SectionDivider/>
        <AboutMe/>

    </div>
}