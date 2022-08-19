import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {  Link } from "react-router-dom";
import './nav.css'

const Nav = () =>{

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
  <>
  <nav>

  <style type="text/css">
        {`
    .offcanvas {
      background-color: #114c08;
    }
    `}
    </style>

      <Button variant="success" className="d-lg-none" onClick={handleShow}>
      <span class="material-symbols-outlined">
      menu
      </span>
      </Button>

      <Offcanvas show={show} onHide={handleClose} responsive="md" placement='end' backdrop='true'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

            <div className='mobile'>
              <Link to="/">Home</Link>
              <br></br>
              <Link to="/about">About Me</Link>
              <br></br>
              <Link to="/projects">My Projects</Link>
              <br></br>
              <Link to="/contact">Contact Me</Link>
              

            </div>
           

        </Offcanvas.Body>
      </Offcanvas>

    <li>
      <Link to="/contact">Contact Me</Link>
    </li>
    <li>
      <Link to="/projects">My Projects</Link>
    </li>
    <li>
      <Link to="/about">About Me</Link>
    </li>
    <li>
      <Link to="/">Home</Link>
    </li>
    
  </nav>

  </>
  );
};

export default Nav;






