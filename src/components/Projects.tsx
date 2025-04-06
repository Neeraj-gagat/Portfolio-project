
import React from "react";
import { projectsdata } from "../data/data";
import { Project } from "./Project";
import { JSX } from "react/jsx-runtime";

export const Projects = () => {
  
  return (
    <div className="flex justify-center bg-black">
    <div id="projects" className="scroll-mt-28 mb-24 max-w-sm sm:max-w-3xl">
      <div className="flex justify-center text-4xl mb-12 font-semibold text-white font-serif">My Projects</div>
      <div>
        {projectsdata.map((project: JSX.IntrinsicAttributes & { title: string; description: string; tags: string[]; imageUrl: string; linkToProject: string; }, index: React.Key | null | undefined) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </div>
    </div>
  );
}