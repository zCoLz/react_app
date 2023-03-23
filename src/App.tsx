import { Link } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Skill from "./components/Skills/Skill";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
