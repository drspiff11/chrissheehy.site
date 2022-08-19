import "./icons.css";
import github from '../.././img/github.png';
import linkedin from '../.././img/linkedin.png';
import { FaGithub, FaLinkedin} from 'react-icons/fa';





const Icons = () =>{
    return (
    <>
    
    <section className="icons">
    
   <a href="https://github.com/drspiff11"><FaGithub color="#1c1d1f" size="50px"/></a>
   <a href="https://www.linkedin.com/in/chris-sheehy-/"><FaLinkedin color="#0768f0" size="50px"/></a>
    
    </section>

    </>
    );
  }
  export default Icons;