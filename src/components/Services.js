import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaBootstrap,
//  
} from "react-icons/fa";
import {SiJavascript} from "react-icons/si";
import {DiResponsive} from "react-icons/di";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "These are the technologies I've worked with",
    subHeading: "Skills",
    text:
      "",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaHtml5 className="commonIcons1" />,
      heading: "HTML",
     
    },
    {
      id: 2,
      icon: <FaCss3 className="commonIcons2" />,
      heading: "CSS",
     
    },
    {
      id: 3,
      icon: <FaReact className="commonIcons3" />,
      heading: "React Js",
      
    },
    {
      id: 4,
      icon: <SiJavascript className="commonIcons4" />,
      heading: "Javascript",
      // text:
      //   "Lorem Ipsum is simply dummy text of the printing typesetting\
      //   industry. simply dummy",
    },
    {
      id: 5,
      icon: <FaBootstrap className="commonIcons5" />,
      heading: "Bootstrap",
    //   text:
    //     "Lorem Ipsum is simply dummy text of the printing typesetting\
    //     industry. simply dummy",
    },
    {
      id: 6,
      icon: <DiResponsive className="commonIcons6" />,
      heading: "Responsive",
      // text:
      //   "Lorem Ipsum is simply dummy text of the printing typesetting\
      //   industry. simply dummy",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
           
            <h1 className="mainHeader">{header.subHeading}</h1>
            <h3 className="heading-skill">{header.mainHeader}</h3>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
