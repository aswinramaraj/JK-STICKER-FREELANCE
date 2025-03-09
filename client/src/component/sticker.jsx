
import Navbar1 from './Navbar';
import Main from './Main';
import Workflow from './Workflow';
import About from './About';
import Purchase from './Purchase';
import Footer from './Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import './App.css'
function Sticker() {
  const scrolltoView = (id) =>{
    const sec = document.getElementById(id)
    if(sec)
    {
      sec.scrollIntoView({behavior:"smooth"})
    }
  }
  return (
    <div >
    <Navbar1/>
    <Main/>
    <About/>
  
    <Purchase/>
       <Workflow/> 
       <div className='foot'>
       <button className="up-btn" onClick={() => scrolltoView("nav")}>
      <FontAwesomeIcon icon={faArrowUp} size="lg" />
    </button>
        <Footer/></div>
       
    </div>
  );
}

export default Sticker;
