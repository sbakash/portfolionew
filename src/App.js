import logo from './logo.svg';
import './App.css';
import Header  from './components/header/Header';
import Home  from './components/home/Home';
import About   from './components/about/About';
import Skills   from './components/skills/Skills';
import Qualification   from './components/qualification/Qualification';
import Contact   from './components/contact/Contact';
import Work   from './components/Portfolio/Work';
import Footer from './components/footer/Footer';


const App = () => {
    return (
      <><Header/>
      <Home/>
      <About/> 
      <Skills/>
      <Qualification/>  
      <Work />
      <Contact/>
      <Footer/>      </>


    )
  }
 

export default App;
