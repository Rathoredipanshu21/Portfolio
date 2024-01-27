import React, { useState, useEffect } from "react";
import "./Hero.css";



const HeroComponent = () => {
  const [downloadClicked, setDownloadClicked] = useState(false);
  const resumePDF = "/resumeDipanshu.pdf";

  const handleDownload = () => {
    console.log("Download button clicked");
    window.open(resumePDF, "_blank");
    setDownloadClicked(true);
  };



  return (
    <div id="hero">  
      <div className="hero">
      <video
        autoPlay
        loop
        muted
        src={require("../Images/video4.mp4")}
      ></video>

      <div className="hero-section">
        <div className="at-container">
          <div className="at-item">
            <h1>WELCOME TO DIPANSHU's PORTFOLIO</h1>
          </div>
        </div>

        <div className="at-container2">
          <div className="at-item2">
            <h4>
              I am a passionate web developer with a deep love for turning ideas
              into functional and visually appealing websites. With expertise in
              both front-end and back-end technologies. Continuously exploring
              new technologies to stay updated and deliver innovative solutions.
            </h4>

            {!downloadClicked && (
              <button className="download-button" onClick={handleDownload}>
                Download Resume
              </button>
            )}
          </div>
        </div>
        <div
          id="chartContainer"
          style={{ height: "370px", width: "100%" }}
        ></div>
        {/* <div className="social-site">
          <ul>
            <li>
              <a href="#">
                <img src={facebookImg} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instaImg} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={linkedinImg} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={githubImg} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={whatsappImg} alt="" />
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
    </div>

  );
};

export default HeroComponent;
