import React from "react";
import ProjectItems from "./ProjectItems";
import hoobankImg from "../assets/hoobank.png";
import fabiraImg from "../assets/fabiraMovies.png";
import westonImg from "../assets/weston.png";
import portfolioImg from "../assets/portfolio.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className=" text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8 text-base font-normal text-stone-500">
        This recent project represents the culmination of my journey as a
        frontend developer.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItems
          img={fabiraImg}
          title="Fabira app"
          link={`https://final-project-kelompok-8.vercel.app/`}
        />

        <ProjectItems
          img={hoobankImg}
          title="Hoobank app"
          link={`https://hoobank-app-chi.vercel.app/`}
        />
        <ProjectItems img={westonImg} title="Weston app" link={``} />
        <ProjectItems img={portfolioImg} title="Portfolio app" link={``} />
      </div>
    </div>
  );
};

export default Projects;
