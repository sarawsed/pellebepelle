import React from "react";
import resumeData from "../../data";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
function Contact() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4 text-red-900 border-b-2 border-red-900 pb-2 inline-block w-fit">
        My Contact
      </h2>
      <div className="flex mb-3">
        <span className="mr-2">
          {" "}
          <AlternateEmailIcon />
        </span>
        <p> {resumeData.contact.email}</p>
      </div>
      <div className="flex mb-3">
        <span className="mr-2">
          {" "}
          <LinkedInIcon />
        </span>
        <p> {resumeData.contact.linkedin}</p>
      </div>
      <div className="flex mb-3">
        <span className="mr-2">
          <LocalPhoneIcon />
        </span>
        <p>{resumeData.contact.phone}</p>
      </div>
      <div className="flex mb-3">
        <span className="mr-2">
          <LocationOnIcon />
        </span>
        <p> {resumeData.contact.location}</p>
      </div>{" "}
    </div>
  );
}

export default Contact;
