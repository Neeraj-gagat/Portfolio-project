
import React from "react";
import { projectsdata } from "../data/data";
import { Project } from "./Project";
import { JSX } from "react/jsx-runtime";

export const Projects = () => {
  
  return (
    <div className="flex justify-center bg-black">
    <div id="projects" className="scroll-mt-28 mb-24 max-w-sm sm:max-w-3xl">
      <div className="flex justify-center text-3xl mb-12  text-white font-serif">My Projects</div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {projectsdata.map((project: JSX.IntrinsicAttributes & { title: string; description: string; tags: string[]; imageUrl: string; linkToProject: string; liveLink: string }, index: React.Key | null | undefined) => (
          <div key={index}>
            <Project {...project} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}