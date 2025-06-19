  import React from "react";
import { Link } from 'react-router-dom';
 import { FaArrowRight,FaTractor, FaLeaf,FaPagelines,FaTree} from "react-icons/fa";
import './Navbar.css';

function Navbar() {
   return (
     <div className="page-nav">
            
     <div className="con-nav">
             <h1 id="azih1">AiziSoft</h1>
             {/* <span>Software Pvt Solution</span> */}
    <div className="nav-list">
         <li ><Link to="/">Home</Link></li>
         <li ><Link to="/about">About</Link></li>
         <li ><Link to="/career"> Career</Link></li>
         <li ><Link to="/contact"> Contact</Link></li>
         </div>
         </div>
         </div>
     );
};
 export default Navbar; 
