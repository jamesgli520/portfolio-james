import './App.css';
import Home from './pages/Home';
import Project from './pages/Project';
import Resume from './pages/Resume'; 
import Contact from './pages/Contact';
import About from './pages/About';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
      <div className='App'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="project" element={<Project />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Routes>
      </div>
  );
}

export default App;
