import React from 'react'
import portfolio from "../public/portfolio-image.jpg"
import Image from 'next/image';

const projectlist = [
  {
    image: { portfolio },
    title: "Mern Memory",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta sequi quidem et ipsum distinctio. Adipisci fugiat omnis distinctio quam. Fugiat at maxime rerum ducimus amet? Modi pariatur dolorum porro fugiat!",
    stack: ["Mongo", "Express", "React.js"],
  },
  {
    image: { portfolio },
    title: " E-Commerce ",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta sequi quidem et ipsum distinctio. Adipisci fugiat omnis distinctio quam. Fugiat at maxime rerum ducimus amet? Modi pariatur dolorum porro fugiat!",
    stack: ["Mongo", "Express", "React.js"],
  },
  {
    image: { portfolio },
    title: " Web Rtc App",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta sequi quidem et ipsum distinctio. Adipisci fugiat omnis distinctio quam. Fugiat at maxime rerum ducimus amet? Modi pariatur dolorum porro fugiat!",
    stack: ["Mongo", "Express", "React.js"],
  },
  {
    image: { portfolio },
    title: " Unichat",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta sequi quidem et ipsum distinctio. Adipisci fugiat omnis distinctio quam. Fugiat at maxime rerum ducimus amet? Modi pariatur dolorum porro fugiat!",
    stack: ["Mongo", "Express", "React.js"],
  },
];

const Projects = () => {
  return (
    <>
      <h1 className="text-white mx-10 my-5 text-5xl font-semibold">Projects</h1>
      <div id="projects" className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:grid-cols-3 2xl:grid-cols-4">
        {projectlist.map((project) => (
          <div key={project.title} className="text-white px-2 border border-slate-500 rounded-lg shadow-md shadow-slate-50">
            <Image
              src={project.image.portfolio}
              width={400}
              height={300}
              alt="photo"
            />
            <h1 className="text-center text-2xl font-semibold my-2">
              {project.title}
            </h1>
            <p className="my-1">{project.description}</p>
            <div className="flex justify-evenly text-white my-2">
              {project.stack.map((projectstack) => (
                <span key={projectstack} className="font-semibold">{projectstack}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects