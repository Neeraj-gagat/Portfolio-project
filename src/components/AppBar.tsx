

export const AppBar = () =>{
    return <div className="border-b flex justify-center mx-auto px-0 w-3/6 py-4 bg-white rounded-full mt-4 space-x-4 ">
    <nav className="flex justify-center space-x-4">
      <a href="#home" className="text-gray-500 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
        Home
      </a>
      <a href="#about" className="text-gray-500 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
        About
      </a>
      <a href="#projects" className="text-gray-500 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
        Projects
      </a>
      <a href="#skills" className="text-gray-500 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
        Skills
      </a>
      <a href="#experience" className="text-gray-500 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
        Experience
      </a>
      <a href="#contact" className="text-gray-500 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
        Contact
      </a>
    </nav>
  </div>
}