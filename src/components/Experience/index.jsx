import React from "react";
import resumeData from "../../data";
function Experience() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4 text-red-900 border-b-2 border-red-900 pb-2 inline-block w-fit">
        Professional Experience
      </h2>
      {resumeData.experience.map((job, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{job.company}</h3>
          <p className="text-sm text-gray-600">
            {job.position} | {job.duration}
          </p>
          <ul className="list-disc list-inside mt-2">
            {job.responsibilities.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;
