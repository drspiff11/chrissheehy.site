import "./home.css";
import banner from '../.././img/banner.jpg';
import me1 from '../.././img/me1.jpg';
import Image from 'react-bootstrap/Image'


const Home = () =>{
    return (
    <>
    
    <section className="home">

        <article className="banner"> <img src={banner} alt="" className="home"></img></article>

        <article className="home-content">
            <h1>Who am I?</h1>
            <Image src={me1} alt="me behind a door in my apartment" roundedCircle="true"></Image>
            <h2 className="right" id="scrolltext">Software Engineer</h2>
            <h2 className="left" id="scrolltext">Web Developer</h2>
            <h2 className="right" id="scrolltext">Student</h2>
            <h2 className="left" id="scrolltext">Community Organizer</h2>

        </article>

    </section>

    </>
    );
  }
  export default Home;