import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components'
import { SectionWrapper } from "./hoc";
import Contacts from "./components/Contacts";



function App() {
  return (
    <div>
      <BrowserRouter>
       <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat ">
            <Navbar/>
            <Hero/>
          </div>
         
          <About/>         
          <Experience/>
          {/* <Tech/> */}
          {/* <Works/> */}
          <Feedbacks/>
         
          <div className="relative z-0">
              <Contacts/>       
            <StarsCanvas/>
          </div>
       </div>
      </BrowserRouter>
    </div>
  )
}

export default App
