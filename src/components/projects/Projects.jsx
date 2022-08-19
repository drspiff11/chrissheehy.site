import "./projects.css";
import Accordion from 'react-bootstrap/Accordion';



const Projects = () =>{
    return (
    <>
    <section className="projects">
        
            
        <Accordion defaultActiveKey="0" flush="true" bsClass= "accordion">
            <Accordion.Item eventKey="0">
                <Accordion.Header><h1 className="projects-caption">Mapping Phoenician Urban Settlements in the Western Mediterrainean</h1></Accordion.Header>
                <Accordion.Body>
                <p>This program is part of a personal research project in which I'm generating a mySQL table of ancienct Phoenician urban settlements in the western Mediterranean. The Phoenicians built a little known but extensive network of cities, market towns, and settlments all across Spain, Portugual, Sicily, Libya, Tunisia, Algeria, and Morrocco. I am compiling and categorizing as many quantitative figures about each of these ancient cities as possible to better research social and economic trends.</p>
                <a href="https://chrissheehy.site/phoenicians/phoenicians.php/"><h4>View Here</h4></a>
                <h2 className="projects-caption">Uses:</h2>
                <p>PHP, SQL</p>
                <h2 className="projects-caption">Development:</h2>
                <p>Originally this was written for a simple programming assignment, but I expanded on the original scope, adding a mysql component and storing the datasets I'm compiling in a relational database. </p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header><h1 className="projects-caption">Farmhouse Fightclub</h1></Accordion.Header>
                <Accordion.Body>
                <p>This 2D platform brawler was my final project for my software engineering course.</p>
                <a href="https://github.com/drspiff11/Farmhouse-Fightclub"><h4>View Here</h4></a>
                <h2 className="projects-caption">Uses:</h2>
                <p>Python, Pygame</p>
                <h2 className="projects-caption">Development:</h2>
                <p>I worked in a group of four using scrum development practices to build the game in pygame over the course of five weeks. This experience not only taught me so much more about the development cycle, but also how to better hold myself accountable to teammates with a deadline and real stakes attached to our project.</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header><h1 className="projects-caption">Catify</h1></Accordion.Header>
                <Accordion.Body>
                <p>Catify was my final project for a relational databases course. The site is meant to be for sharing spotify playlists between UVM students. Built entirely in PHP, the site draws records from a mySQL database of Spotify playlists.</p>
                <a href="https://csheehy.w3.uvm.edu/cs148/live-finalproject/index.php"><h4>View Here</h4></a>
                <h2 className="projects-caption">Uses:</h2>
                <p>PHP, SQL</p>
                <h2 className="projects-caption">Development:</h2>
                <p>This was my first major group project, where I learned many hard lessons about group work;communication, deadlines, and debugging to name a few. </p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        
    </section>
    </>
    );
  }
  export default Projects;