import React from "react";
import resumeData from "../../data";
function Skills() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4 text-red-900 border-b-2 border-red-900 pb-2 inline-block w-fit">
        Skills
      </h2>
      <ul className="list-disc list-inside">
        {resumeData.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
