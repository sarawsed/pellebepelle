import React from "react";
import resumeData from "../../data";
function AboutMe() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4 text-red-900 border-b-2 border-red-900 pb-2 inline-block w-fit">
        About Me
      </h2>
      <p>{resumeData.about}</p>
    </div>
  );
}

export default AboutMe;
