import React from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/MyProjects";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <section className=" w-[95%] mx-auto my-4 rounded-xl shadow-2xl">
      <Header />
      <div className="flex flex-col-reverse sm:flex-row mt-5">
        <div className="lg:w-[30%]">
          <Contact />
          <Skills />
          <Education />
        </div>
        <div className="lg:w-[70%]">
          <AboutMe />
          <Experience />
          <Projects />
        </div>
      </div>
    </section>
  );
}

export default App;
