import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  
  FaBootstrap,
  // 
 
} from "react-icons/fa";
const Banner = () => {
  const  [state] = React.useState({
    title: "I am Raja Mallick",
    title1:"Hello",
    text:
      "I'm a Front-end developer specilizing in building web front-end .​",
    image: "/images/man-01.png",
  });
  
  return (
    <header className="header">
      
      <div className="container">
        <div className="row">


          
          <div className="col-5">
            <div className="header__content">
              <div className="header__section">

             




                <ul className="header__ul">

                
                  <li>
                    <FaFacebookF className="headerIcon1 " />
                  </li>
                  <li>
                    <FaTwitter className="headerIcon2" />
                  </li>
                  <li>
                    <FaPinterest className="headerIcon3" />
                  </li>
                  <li>
                    <FaBootstrap className="headerIcon4" />
                    {/*  */}
                  </li>
                </ul>
                <h1 className="bnr-h">{state.title1}</h1>
                
                <h1 className="bnr-h1">{state.title}</h1>
                <p className="bnr-p">{state.text}</p>
                <div className="header__buttons">
                
                  &nbsp;&nbsp;&nbsp;
                  

                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
          {/* <div className="banner__img">
              <img className="myimg" src={state.image} alt="man" />
            </div> */}




{/* 
            <ul className="header__u2">

                
<li>
  <FaHtml5 className="ic1 " />
</li>
<li>
  <FaCss3 className="ic2" />
</li>
<li>
  <FaReact className="ic3" />
</li>
<li>
  <FaInstagram className="ic4" />
  
</li>
</ul> */}






          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
