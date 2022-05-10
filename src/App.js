
import React from "react";
import "./App.css";
// import Banner from "./components/Banner";
// import Nav from "./components/Nav";
// import Services from "./components/Services";
// import About from "./components/About";
import Img from "./images/man-01.png";
import Main from "./components/Main";

// import Contact from "./components/Contact";

function App() {
  return (
    // 
    <div className="appfull">
       <div className="col-6">
      <div className="banner__img">
              <img className="myimg" src={Img} alt="man" />
              
              </div>
            </div>

            
      {/* <Banner />
      <Nav />
      <Services />
      <About />
      <Contact /> */}
      <Main/>
    </div>
  );
}

export default App;