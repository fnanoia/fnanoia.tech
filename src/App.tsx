import './App.css'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Navbar from "./pages/NavBar";
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>

  )
}

export default App;
