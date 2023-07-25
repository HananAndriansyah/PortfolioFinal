import React from "react";
import WorkItems from "./WorkItems";

const data = [
  {
    year: 2023,
    title: "Harisenin Bootcamp",
    duration: "4 Month",
    details:
      "Performed UI/UX design by referring to renowned websites. Developed the Navbar, Hero section, and ensured responsive design for mobile websites. Implemented version control with GitHub. Created the final project using the React.js framework and utilized the Tailwind CSS framework.",
  },
  {
    year: 2023,
    title: "Udemy Online Course",
    duration: "2 Month",
    details:
      "I have learned the fundamental concepts of HTML, CSS, and Javascript. I have also studied Version Control using Git and created repositories on GitHub.Moreover, I have delved into the Frontend framework React.js and completed an individual project, creating a one-page landing website. Additionally, I have explored Backend development with Node.js and worked with MySQL databases.",
  },
  {
    year: 2022,
    title: "DICODING.com",
    duration: "2 Month",
    details:
      "Studied the fundamental concepts of JavaScript and learned about Node.js.",
  },
  {
    year: 2022,
    title: "Medical Care Planning",
    duration: "2 Years",
    details:
      "Performed physical condition checks for patients. Conducted medication administration and calculated the required caloric intake for each patient.Engaged in patient rehabilitation as recommended by the doctor.Compiled and generated reports on patient activities and progress.",
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
