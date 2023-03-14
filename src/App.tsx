import "./App.css";
import About from "./components/About/About";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
    </div>
  );
}

export default App;
