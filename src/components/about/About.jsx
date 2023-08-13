import React from 'react';
import "./about.css";
import AboutBox from "./AboutBox";
import Resume from "../../Assets/AbhishekJha-resume-updated.pdf"
const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__data grid">
        <div className="about__info">
          <p className="about__description">I am Abhishek Jha, web developer from Bengaluru, India. I have experience in web site design and building and customization. </p>
          <a href={Resume} target='_blank'rel='noreferrer' className="btn">Download CV</a>
        </div>
        
      <div className="about__skills grid">
        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">Development</h3>
            <span className="skills__number">90%</span>
            </div>

            <div className="skills__bar">
              <span className="skills__percentage development"></span>
            </div>
          </div>

        </div>
      </div>

      <AboutBox />
    </section>
    
  );
};

export default About;