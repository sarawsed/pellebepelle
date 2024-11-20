import React from "react";
import resumeData from "../../data";
function Education() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4 text-red-900 border-b-2 border-red-900 pb-2 inline-block w-fit">
        Education
      </h2>
      {resumeData.education.map((edu, index) => (
        <div key={index} className="mb-4">
          <p className="font-semibold">{edu.year}</p>
          <p>{edu.degree}</p>
          <p className="text-gray-600">{edu.institute}</p>
        </div>
      ))}
    </div>
  );
}

export default Education;
