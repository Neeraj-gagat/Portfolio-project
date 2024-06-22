import { AppBar } from "../components/AppBar"
import { Intro } from "../components/Intro"

export const LandingPage = () => {
    return <div className="bg-pink-100 min-h-screen">
        <div className="pt-2"> <AppBar/> </div>
        <Intro/>

    </div>
}