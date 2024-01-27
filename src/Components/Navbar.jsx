import React from "react";
import './Navbar.css';

const Navbar = () => {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (

    <div className="navbar">
      <div className="logo">

      </div>
      <div className="list">
        <ul>
          <li onClick={() => handleScrollToSection("hero")}>HOME</li>
          <li onClick={() => handleScrollToSection("projects")}>PROJECTS</li>
          <li onClick={() => handleScrollToSection("skills")}>SKILLS</li>
          <li onClick={() => handleScrollToSection("contact")}>CONTACT US</li>
        </ul>
      </div>
    </div>
   
  );
};

export default Navbar;




