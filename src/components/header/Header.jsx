import './header.css';
import {BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Nav from "../nav/Nav";
import Home from "../home/Home";
import About from "../about/About";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import Icons from "../socials/Icons";

const Header = () => {
    return (
         
            <Router>
                <header>
                <Link to='/' style={{ textDecoration: 'none' }} ><h1 className='logo'>Chris Sheehy</h1></Link>
                
                <h3 className='tagline'>breathing life into the humanities with code</h3>
                <Nav />
                
                </header>
                <Icons></Icons>
                <main>
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route exact path='/about' element={<About/>} />
                    <Route exact path='/projects' element={<Projects/>} />
                    <Route exact path='/contact' element={<Contact/>} />
                </Routes>
                </main>
            </Router>
        
    );
};


export default Header;
