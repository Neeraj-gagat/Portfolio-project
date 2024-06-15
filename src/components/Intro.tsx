import  { WordsFlip }  from "./ui/WordsFlip";


export const Intro = () => {
    const words = ["Full Stack Developer", "Software Engineer", "MERN Stack Developer", "Tech Enthusiast", "NextJS Developer"];

    return <div className="p-8 content-center flex text-neutral-950 text-2xl text-center mt-10 ">
        <div className="justify-center content-around">
            <span className="font-bold">Hello, I&apos;m Neeraj.</span> I&apos;m a
            <span className="font-bold"><WordsFlip className="!text-black" duration={2000} words={words} /></span> with
            <span className="font-bold">2 years</span> of experience. I enjoy
            building <span className="italic">websites</span>. My focus is
            <span className="underline">React (Next.js)</span>.
        </div>
    </div>
}