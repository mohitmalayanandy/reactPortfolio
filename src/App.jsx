import './App.css';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Education from './components/Education';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Education />
      <Internships/>
      <Projects />
      <Skills />
      <Certifications />
      <Footer />
    </div>
  )
}

export default App
