import AnchorLink from "react-anchor-link-smooth-scroll";


export const AppBar = () =>{
    return <div className="shadow-xl border-b flex justify-center fixed z-[999] top-0 left-0 right-0 mx-auto px-0 w-2/5 h-14 py-4 bg-white rounded-full mt-5 space-x-4 ">
    <nav className="flex space-x-10">
      <AnchorLink offset={100} href="#home" className="text-gray-500 hover:text-black pt-0.5 rounded-md text-sm font-medium">
        Home
      </AnchorLink>
      <AnchorLink offset={100} href="#about" className="text-gray-500 hover:text-black pt-0.5 rounded-md text-sm font-medium">
        About
      </AnchorLink>
      <AnchorLink offset={100} href="#projects" className="text-gray-500 hover:text-black pt-0.5 rounded-md text-sm font-medium">
        Projects
      </AnchorLink>
      <AnchorLink offset={100} href="#skills" className="text-gray-500 hover:text-black pt-0.5 rounded-md text-sm font-medium">
        Skills
      </AnchorLink>
      <AnchorLink offset={100} href="#experience" className="text-gray-500 hover:text-black pt-0.5 rounded-md text-sm font-medium">
        Experience
      </AnchorLink>
      <AnchorLink offset={100} href="#contact" className="text-gray-500 hover:text-black pt-0.5 rounded-md text-sm font-medium">
        Contact
      </AnchorLink>
    </nav>
  </div>
}