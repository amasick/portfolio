import Image from "next/image";
import HomePage from "./pages/HomePage";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Tech from "./pages/Tech";
import Contact from "./pages/Contact";
import Linkedin from "./pages/Linkedin";
import CodingProfiles from "./pages/codingplatforms";
import SkillsGraph from "./pages/skill-graph";
Experience
export default function Home() {
  return (
    <>
     <HomePage/>
     <About/>
     <Experience/>
     <Projects/>
     <Tech/>
     <SkillsGraph/>
     <Linkedin/>
     <CodingProfiles/>
     <Contact/>
     
    </>
  );
}
