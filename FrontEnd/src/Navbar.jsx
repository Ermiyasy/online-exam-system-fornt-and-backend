 import "./navbar.css"
 import { Link } from "react-router-dom";
 import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

 function Navbar(){
    return (
        <>
        <div className="nav">
                <div className="nav-title">
                    <h1>ONLINE EXAMINATION SYSTEM</h1>
                </div> 
                <div className="nav-main"></div>
                <div className="nav-menu">

                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/Feedback">Feedback</Link></li>
                    </ul>
                </div>    
              
        </div>
    
        </>
     
    );
 }
 export default Navbar