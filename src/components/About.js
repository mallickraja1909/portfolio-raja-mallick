import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      " I'm Raja Mallick, a front-end web developer and designer. currently pursuing my B-Tech in Computer Science Engineering Degree (Batch 2019-2022).",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Raja Mallick" },
    { id: 2, title: "Email:", text: "mallickraja1909@gmail.com" },
    { id: 3, title: "Phone:", text: "+91 9679193059"},
    { id: 4, title: "Linkedin", text: "https://www.linkedin.com/in/raja-mallick-2b62a0131/" },
  ]);
  return (
    <div className="about">
    
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/man-02.png" alt="man" />
            </div>
            {/*  */}
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
              I'm Raja Mallick, a front-end web developer and designer. currently pursuing my B-Tech in Computer Science Engineering Degree (Batch 2019-2022) 
              </div>
             
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
