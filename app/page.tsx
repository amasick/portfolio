import HomePage from "./pages/HomePage";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Tech from "./pages/Tech";
import Contact from "./pages/Contact";
import SkillsGraph from "./pages/skill-graph";
import BlogsPreview from "./pages/BlogsPreview";
import Entrepreneurship from "./pages/Entrepreneurship";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
     <HomePage/>
     <About/>
     <Entrepreneurship/>
     <Experience/>
     <Projects/>
     <Tech/>
     <BlogsPreview/>
     <SkillsGraph/>
     <Contact/>
     <Footer/>
    </>
  );
}
