import React from "react";
import WorkItems from "./WorkItems";

const data = [
  {
    year: 2023,
    title: "Harisenin Bootcamp",
    duration: "4 Month",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi iure itaque facere tempora aliquid dolorem, quibusdam dignissimos magnam sequi ab quo hic non quaerat. Ad autem voluptatibus quis id sit?",
  },
  {
    year: 2023,
    title: "Fabira Movies",
    duration: "4 Month",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi iure itaque facere tempora aliquid dolorem, quibusdam dignissimos magnam sequi ab quo hic non quaerat. Ad autem voluptatibus quis id sit?",
  },
  {
    year: 2023,
    title: "Hoobanks",
    duration: "2 Month",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi iure itaque facere tempora aliquid dolorem, quibusdam dignissimos magnam sequi ab quo hic non quaerat. Ad autem voluptatibus quis id sit?",
  },
  {
    year: 2023,
    title: "Learning NodeJs",
    duration: "3 Month",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi iure itaque facere tempora aliquid dolorem, quibusdam dignissimos magnam sequi ab quo hic non quaerat. Ad autem voluptatibus quis id sit?",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Experience
      </h1>
      {data.map((item, idx) => (
        <WorkItems
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
