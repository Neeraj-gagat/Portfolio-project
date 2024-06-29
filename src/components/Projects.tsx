
import React from "react";
import { projectsdata } from "../data/data";
import { Project } from "./Project";
import { JSX } from "react/jsx-runtime";

export default function Projects() {
  
  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <div className="flex justify-center text-4xl font-serif">My Projects</div>
      <div>
        {projectsdata.map((project: JSX.IntrinsicAttributes & { title: string; description: string; tags: string[]; imageUrl: string; linkToProject: string; }, index: React.Key | null | undefined) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}