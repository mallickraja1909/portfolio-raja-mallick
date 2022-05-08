// import React from "react";
// import "./App.css";
// import Banner from "./components/Banner";
// import Nav from "./components/Nav";
// import Services from "./components/Services";
// import About from "./components/About";
// import Prices from "./components/Prices";
// import Contact from "./components/Contact";
// import Home from "./components/Banner";
// import Nav from "./components/Nav";
// import Services from "./components/Services";
// import About from "./components/About";

// import Contact from "./components/Contact";
// import {BrowserRouter as Router,  Route, Routes} from "react-router-dom"
// function App() {
//   return (
    // <div>
    //   <Banner />
    //   <Nav />
    //   <Services />
    //   <About />
    //   <Prices />
    //   <Contact />
    // </div>

// function App() {
//   return (
    
//   <Router>
  
//     <Routes>
//       <Route path="/" element={<Home/>} />
//     </Routes>
//     <Routes>
//       <Route path="/About" element={<About/>} />
//     </Routes>
//     <Routes>
//       <Route path="/Contact" element={<Contact/>} />
//     </Routes>
//     <Routes>
//       <Route path="/Services" element={<Services/>} />
//     </Routes>
    
//   </Router>
 
//   );
//   }

// export default App;
// 
// 
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
      <div className="banner__img">
              <img className="myimg" src={Img} alt="man" />
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