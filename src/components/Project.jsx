import React from "react";
import chatweb from '../assets/chatweb.png'
import SpicyBites from '../assets/SpicyBites.png'
import Digital from '../assets/Bookstore.png'
import memory from '../assets/memory.png'

import { FaGithub } from "react-icons/fa";


const Projects = () => {
  const projects = [
    {
      title: "InkcredibleBooks",
      description:
        "Developed an online book platform for exploring, and managing books with a responsive design and seamless user experience, deployed on Render.",
      techStack: ["React.js", "MongoDB", "Node.js", "Tailwind CSS"],
      link: "https://inkcredible-books-frontend.onrender.com/",
      github: 'https://github.com/xyz031/Inkcredible-Books',
      image: Digital, 
    },
    {
      title: "ChatWeb",
      description:
        "A real-time chat application with secure user authentication, responsive design, and scalable backend, deployed on Render.",
      techStack: ["React", "Node.js", "MongoDB", "daisyUI"],
      link: "https://chatapp-9isc.onrender.com/",
      github: 'https://github.com/xyz031/Chatapp',
      image: chatweb, 
    },
    {
      title: "MemoryNest",
      description:
        "MemoryNest is a digital platform designed to allow users to capture, store, and share meaningful moments in a secure.",

      techStack: ["React.js", "MongoDB", "Node.js"],
      link: "https://memorynest-1.onrender.com/",
      github: 'https://github.com/xyz031/MemoryNest',
      image: memory, 
    },
  ];

  return (
    <section id="project" className="bg-gradient-to-r bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-300 mb-12">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-950 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover px-3 pt-3 rounded-2xl"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                  >
                    View Project
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition-colors"
                  >
                    <FaGithub/> Github
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
