import './NavBar.css';
import linkedInIcon from './images/linkedinicon.png';
import githubIcon from './images/github-mark.png';
import emailIcon from './images/email-icon.png';    
import { Link } from 'react-router-dom';
function NavBar(){
    return(
        <nav>
            <div id = "name">Jeffrey Ye</div>
            <ul id="mainTabs">
                <li className = "navTabs">
                    <Link to = '/'><button>Home</button></Link>
                </li>
                <li className = "navTabs">
                    <Link to = '/about'><button>About</button></Link>
                </li>
                <li className = "navTabs">
                    <Link to = '/experience'><button>Experience</button></Link>
                </li>
                <li className = "navTabs">
                    <Link to = '/projects'><button>Projects</button></Link>
                </li>
                <li className = "navTabs">
                    <a title = "My resume" target = "_blank" href = "https://docs.google.com/document/d/1YRJ-vUNGAyBfOiB_vn6mo11jyowS8YKxvRN81dNxnu8/edit?usp=sharing">
                        <button>Resume</button>
                    </a>
                </li>
            </ul>
            <ul id="iconTabs">
                <li className = "iconList">
                    <a title = "LinkedIn" target = "_blank" href = "https://www.linkedin.com/in/jeffrey-ye-b6721b2a0/">
                        <img src = {linkedInIcon} alt = "LinkedIn"></img>
                    </a>
                </li>
                <li className = "iconList">
                    <a title = "Github" target = "_blank" href = "https://github.com/JeffreyYeet1">
                        <img src = {githubIcon} alt = "Github"></img>
                    </a>
                </li>
                <li className = "iconList">
                    <a title = "Email" href = "mailto:jeffrey.ye@torontomu.ca">
                        <img src = {emailIcon} alt = "Email"></img>
                    </a>
                </li>
            </ul>
        </nav>
);

}
export default NavBar;