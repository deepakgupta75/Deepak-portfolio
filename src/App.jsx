
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/skills";
import Projects from "./components/projects/projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
   

    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      
      
    </div>
  );
}

export default App;
