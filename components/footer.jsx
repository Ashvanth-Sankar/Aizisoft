import React from "react";
import { FaArrowRight,FaTractor, FaLeaf,FaPagelines,FaTree, FaWhatsapp,FaInstagram,FaTwitter,FaYoutube} from "react-icons/fa";

import './footer.css';

function Footer() {
      // const navigate = useNavigate();  
    return (
<div className="fixed-page">
        <div className="container14">
      <div className="last1">
        <h2>AiziSoft</h2>

        <div className="first">
          <p>Our brands:</p>
          <h3>AiziSoft-Pune</h3>
          <h3>AiziSoft-Mumbai</h3>
          <h3>AiziSoft-Japan</h3>
          <div className="email">
          <p>
            <strong>+1 8200 2845 6549</strong> 
          </p>
          <p>
            <strong>aiziSoftHr@gmail.com</strong> 
          </p>
</div>
          
        </div>
      </div>

      {/* ─────────── Right column ─────────── */}
      <div className="second">
        <div className="second1">
          {/* Useful Links */}
          <div className="second2">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Contact</li>
              <li>Career</li>
              <li>Blog</li>
              <li>Scientific Research</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="second2">
            <h3>Software Services</h3>
            <ul>
               <li>Software Developer</li>
                <li>Machine Learning</li>
                 <li>Mobile Application</li>
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Data Science</li>
              <li>Web Solution</li>
              <li>Graphic Design</li>
            </ul>
          </div>

          {/* Hic solutasetp */}
          <div className="second2">
            <h3>Cloud & IT Services</h3>
            <ul>
              <li>Cloud Management</li>
              <li>DevOps | MLOps</li>
              <li>SecOps | DevSecOps</li>
              <li>Production Supports</li>
              <li>On-permises Manager</li>
            </ul>
          </div>

          {/* Nobis illum */}
          <div className="second2">
            <h3>Uses</h3>
            <ul>
               <li>Terms of use</li>
              <li>Accessibility</li>
              <li>Cookie policy</li>
              <li>Cookie settings</li>
              <li>Security vulnerability notification</li>
              <li>Fraud alert</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* ─────────── Bottom bar ─────────── */}
    <div className="third">
      <div className="line" />
      <div className="third1">
        <p>
          © <strong>JupSoft</strong> — All Rights Reserved
        </p>
        <span>
          Designed by <strong>Ashvanth</strong>
        </span>
      </div>
    </div>
    </div>
    );
};
export default Footer;  




// import React from "react";
// import {
//   FaArrowRight,
//   FaTractor,
//   FaLeaf,
//   FaPagelines,
//   FaTree,
//   FaWhatsapp,
//   FaInstagram,
//   FaTwitter,
//   FaYoutube
// } from "react-icons/fa";

// import './footer.css';

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="container14">
//         <div className="last1">
//           <h2>AiziSoft</h2>
//           <div className="first">
//             <p>Our brands:</p>
//             <h3>AiziSoft-Pune</h3>
//             <h3>AiziSoft-Mumbai</h3>
//             <h3>AiziSoft-Japan</h3>
//             <div className="email">
//               <p><strong>+1 8200 2845 6549</strong></p>
//               <p><strong>aiziSoftHr@gmail.com</strong></p>
//             </div>
//           </div>
//         </div>

//         <div className="second">
//           <div className="second1">
//             <div className="second2">
//               <h3>Quick Links</h3>
//               <ul>
//                 <li>Home</li>
//                 <li>About us</li>
//                 <li>Contact</li>
//                 <li>Career</li>
//                 <li>Blog</li>
//                 <li>Scientific Research</li>
//                 <li>Privacy Policy</li>
//                 <li>Terms & Condition</li>
//               </ul>
//             </div>

//             <div className="second2">
//               <h3>Software Services</h3>
//               <ul>
//                 <li>Software Developer</li>
//                 <li>Machine Learning</li>
//                 <li>Mobile Application</li>
//                 <li>Web Design</li>
//                 <li>Web Development</li>
//                 <li>Data Science</li>
//                 <li>Web Solution</li>
//                 <li>Graphic Design</li>
//               </ul>
//             </div>

//             <div className="second2">
//               <h3>Cloud & IT Services</h3>
//               <ul>
//                 <li>Cloud Management</li>
//                 <li>DevOps | MLOps</li>
//                 <li>SecOps | DevSecOps</li>
//                 <li>Production Supports</li>
//                 <li>On-permises Manager</li>
//               </ul>
//             </div>

//             <div className="second2">
//               <h3>Uses</h3>
//               <ul>
//                 <li>Terms of use</li>
//                 <li>Accessibility</li>
//                 <li>Cookie policy</li>
//                 <li>Cookie settings</li>
//                 <li>Security vulnerability notification</li>
//                 <li>Fraud alert</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="third">
//         <div className="line" />
//         <div className="third1">
//           <p>© <strong>JupSoft</strong> — All Rights Reserved</p>
//           <span>Designed by <strong>Ashvanth</strong></span>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
