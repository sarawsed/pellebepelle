import React from "react";
import resumeData from "../../data";
function Projects() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4 text-red-900 border-b-2 border-red-900 pb-2 inline-block w-fit">
        Projects
      </h2>
      {resumeData.projects.map((project, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <p className="text-gray-600">{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
