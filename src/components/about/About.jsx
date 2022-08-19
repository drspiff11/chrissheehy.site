import "./about.css";
import graduation from '../.././img/graduation.jpg';
import Image from 'react-bootstrap/Image'
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import me2 from '../.././img/me2.jpg';
import me3 from '../.././img/me3.jpg';

const About = () =>{
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
    <section className="about">
      <h1>About Me</h1>
      
      <Carousel activeIndex={index} onSelect={handleSelect} >
        <Carousel.Item className="carousel">
          <img src={graduation} alt="me in a grad photo taken by a friend"></img>
        </Carousel.Item>
        
        <Carousel.Item className="carousel">
          <img src={me2} alt="me on a cruise around lake champlain"></img>
        </Carousel.Item>

        <Carousel.Item className="carousel">
          <img src={me3} alt="me with a burrito at a taco place"></img>
        </Carousel.Item>

      </Carousel>
  
      <article>
          <h2>My Background</h2>
          <p>I grew up in Portland, Maine. From an early age I had a fascination with computers and video games that, during high school, turned into an avid interest computer science and game programming. Then in college my studies brought me to front-end development and software engineering. Throughout school, I've worked in service and trade industries. Now that I'm nearing the completion of my degree, I'm looking for development  experience in a professional setting.</p>

          <h2>Education</h2>
          <p>Since 2018, I have attended the University of Vermont, where I study Computer Science and History. My college experience has been challenging and far from straightforward, but one highlight has certainly been my time in UVM's CS program. There I received a well rounded introduction to the fundamentals of computer science; from architecture, networking, human-computer interaction, and relational databases - to APIs, algorithms, computational complexity, and principles of software engineering. I am still completing coursework for a history minor, although I expect to have my diploma by May 2023. </p>

          <h2>Career Goals</h2>
          <p> Despite my aspirations in computing and software, I've always had an interest in humanities and social sciences - particularly history, political science, economics, and sociology. In college I tried to incorporate these into projects wherever possible. I used datasets from archives, conducted ehtnographic studies and personal interviews. After pursuing an internship and graduating, I would like to find a stable position on a development team to further acquiant myself with industry standards and best practices. At some point, I would also like to go back to school and undertake a graduate history program.</p>
      </article>

    </section>
    );
  }

  export default About;