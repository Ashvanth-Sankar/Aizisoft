import React,{useState} from "react";
import { FaArrowRight, FaArrowLeft,FaNetworkWired,FaSearch,FaLaptopCode,FaMicrochip, FaUserCog, FaCube,FaGlobe, FaLayerGroup, FaChartLine, FaUsers , FaProjectDiagram,FaSmileBeam} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Back from "../assets/thinbac.png";
import Carthink1 from "../assets/carthink1.webp";
import Carthink2 from "../assets/carthink2.jpg";
import White from "../assets/white.avif";

import './career.css';

const Career = () => {
  const navigate = useNavigate();
const [currentIndex, setCurrentIndex] = useState(0);
  const carThink = [
    {
      title: "Introduction to JupSoft",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, id!",
      image: Carthink1,
    },
    {
      title: "Next Page: Features",
      desc: "Description for second slide...",
      image: Carthink2,
    },
  ];

  const handleNext = () => {
    if (currentIndex < carThink.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };



const jobData = [
  {
    job: "Software Engineer developer",
    country: "India",
    location: "Chennai",
    level: "Experience",
    contract: "Permanent",
  },
  {
    job: "Software Engineer C++ Developer",
    country: "India",
    location: "Bangalore",
    level: "Fresher",
    contract: "Permanent",
  }, 
   {
    job: "Software Developer",
    country: "India",
    location: "Bangalore",
    level: "Fresher",
    contract: "Permanent",
  }, 
   {
    job: "Full-stack developer",
    country: "India",
    location: "Chennai",
    level: "Fresher",
    contract: "Permanent",
  },  
  {
    job: "Full-stack developer | 2 to 4 years",
    country: "India",
    location: "Bangalore",
    level: "Experience",
    contract: "Permanent",
  }, 
   {
    job: "C++ developer | 6 to 9 years ",
    country: "India",
    location: "Chennai",
    level: "Experience",
    contract: "Permanent",
  },
    {
    job: "Java Developer |2 to 3 years",
    country: "India",
    location: "Bangalore",
    level: "Experience",
    contract: "Permanent",
  }, 
   {
    job: "Python Developer",
    country: "India",
    location: "Chennai",
    level: "Fresher",
    contract: "Permanent",
  }, 
   {
    job: "Java Backend Developer",
    country: "India",
    location: "Bangalore",
    level: "Fresher",
    contract: "Permanent",
  }, 
   {
    job: "Python Backend Developer ",
    country: "India",
    location: "Chennai",
    level: "Fresher",
    contract: "Permanent",
  },  
  {
    job: "Senior Software Engineer",
    country: "India",
    location: "Pune",
    level: "Experience",
    contract: "Permanent",
  },
    {
    job: "Senior Java  Developer",
    country: "India",
    location: "Pune",
    level: "Experience",
    contract: "Permanent",
  }, 
   {
    job: "Senior Python  Developer",
    country: "India",
    location: "Coimbatore",
    level: "Experience",
    contract: "Permanent",
  },  
  {
    job: "Senior C++  Developer",
    country: "India",
    location: "Coimbatore",
    level: "Experience",
    contract: "Permanent",
  }, 
   {
    job: "Junior Java  Developer",
    country: "India",
    location: "Hosur",
    level: "Fresher",
    contract: "Permanent",
  }, 
   {
    job: "Junior React-js Developer",
    country: "India",
    location: "Coimbatore",
    level: "Fresher",
    contract: "Permanent",
  }, 
   {
    job: "SAP Developer",
    country: "India",
    location: "Coimbatore",
    level: "Fresher",
    contract: "Permanent",
  },  
  {
    job: "Angular Developer",
    country: "India",
    location: "Erode",
    level: "Fresher",
    contract: "Permanent",
  },
    {
    job: "Front-end Developer",
    country: "India",
    location: "Coimbatore",
    level: "Fresher",
    contract: "Permanent",
  },
    {
    job: "UI/UX Designer",
    country: "India",
    location: "Salem",
    level: "Fresher",
    contract: "Permanent",
  },
  // add all 20 here in the same format
];


   const [searchTerm, setSearchTerm] = useState("");
const [filteredJobs, setFilteredJobs] = useState([]);

{/*const handleSearch = () => {
  const results = jobData.filter(job =>
    job.job.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredJobs(results);
};/*/}








const [visibleCount, setVisibleCount] = useState(5);
 const filtered = jobData.filter(({ job }) =>
    job.toLowerCase().includes(searchTerm.toLowerCase())
  );
const shownRows = filtered.slice(0, visibleCount);  


  return (
  <section className="career-sheet1">
     <div className="career-image">
       <img src={Back} alt="Bat" id="bac" />
         <div className="image-text">
           <h2>find your future <span><FaArrowRight /></span></h2>
         </div>
       </div>

        <section className="career-sheet2">
           <div className="opening">
         <div className="opening-text">
           <h2>Current Opening</h2>
 <div className="opening-center">
   <div className="openings-grid">
     <div className="opening-back">
       <div className="opening-image">
           <span className="Sicon"><FaLaptopCode /></span>
         <p className="op">Software Developer</p>
       </div>
     </div>

     <div className="opening-back">
       <div className="opening-image">
         <span className="Sicon"><FaSearch /></span>
         <p className="op">Research & Analysis</p>
       </div>
     </div>

     <div className="opening-back">
       <div className="opening-image">
          <span className="Sicon"><FaNetworkWired /></span>
         <p className="op">IT Services</p>
       </div>
     </div>

     <div className="opening-back">
       <div className="opening-image">
          <span className="Sicon">< FaMicrochip/></span>
         <p className="op">Software Services</p>
       </div>
     </div> 

     <div className="opening-back">
       <div className="opening-image">
          <span className="Sicon"><  FaUserCog/></span>
         <p className="op">Artifical Intelligence</p>
       </div>
     </div>

       <div className="opening-back">
       <div className="opening-image">
          <span className="Sicon">< FaCube/></span>
         <p className="op">Cloud Computing</p>
       </div>
     </div>

     <div className="opening-back">
       <div className="opening-image">
          <span className="Sicon">< FaGlobe/></span>
         <p className="op">.Net</p>
       </div>
     </div>

      <div className="opening-back">
       <div className="opening-image">
          <span className="Sicon">< FaLayerGroup/></span>
         <p className="op">Database </p>
       </div>
     </div>
   </div>
 </div>
         </div>
            </div> 
        </section>


     <section className="career-sheet3">
      <div className="search-sheet">
      <div className="search-back">
          <h2>Job Search</h2>
         <div className="job-box">
   <input
     type="text"
     placeholder="Enter your job"      value={searchTerm}     onChange={(e) => {
      setSearchTerm(e.target.value);
       setVisibleCount(5);        // reset page on new search
     }}
   />
   <span className="inser-btn"><FaSearch /></span>
 </div>
  {shownRows.length > 0 && (
   <>
     {/* Move the X button outside the table */}
     {visibleCount > 5 && (
       <button
         className="reduce-btn"
         onClick={() => setVisibleCount((c) => Math.max(5, c - 5))}
       >
         X
       </button>
     )}

     <table className="job-table">
      <thead>
         <tr>
           <th>Job Name</th><th>Country</th><th>Location</th>
           <th>Level</th><th>Contract</th>
         </tr>
       </thead>
       <tbody>
         {shownRows.map((row, i) => (
           <tr key={i}>
             <td>{row.job}</td>
             <td>{row.country}</td>
             <td>{row.location}</td>
             <td>{row.level}</td>
             <td>{row.contract}</td>
           </tr>
         ))}
       </tbody>
     </table>

     {visibleCount < filtered.length && (
       <button
         className="see-more"
         onClick={() => setVisibleCount((c) => c + 5)}
       >
         See more
       </button>
     )}
   </>
 )}
        {/*</div>1/*/} 
     </div>
      </div>
     </section>




     <section className="career-sheet4">
      <div className="car-think">
       <div className="car-form">
           <h2>Explore JupSoft</h2>
           <div className="car-sheet">
             <div className="car-text">
               <h3>{carThink[currentIndex].title}</h3>
               <p id="carp">{carThink[currentIndex].desc}</p>
               <div className="car-btn">
                <button onClick={handlePrev} id="CLB2">
                   <FaArrowLeft />
                 </button>
                 <button onClick={handleNext} id="CLB">
                   <FaArrowRight />
                 </button>
               </div>
             </div>
             <div className="car-img">
               <img src={carThink[currentIndex].image} alt="Slide" id="Car1" />
            </div>
           </div>
         </div> 
      </div>
     </section>



   <section className="career-sheet5">
      <div className="looking-for">
         <div className="looking-sheet">
                 <h2>Qualities We are  <span>Looking</span> for.</h2>
              <div className="looking-center">
                     <div className="looking-text">
                         <span className="Look">< FaChartLine/></span>
                     <h3>Inspiration</h3>
                     <p>You have a fire in your heart, a drive to do great things and an overwhelming desire to improve the world.</p>
                     </div>

                    <div className="looking-text">
                         <span className="Look">< FaUsers/></span>
                     <h3>Character</h3>
                     <p>You have an intuitive sense of yourself and the world around you. You know how to admit when you're wrong and follow through when you are right.</p>
                     </div>

                       <div className="looking-text">
                         <span className="Look"><FaProjectDiagram/></span>
                     <h3>Technical Skills</h3>
                     <p>You are dedicated to your craft and continually refine your skills as per industry best practices. You embrace the challenge of working outside your comfort zone.</p>
                     </div>

                         <div className="looking-text">
                         <span className="Look">< FaSmileBeam/></span>
                     <h3>Coolness</h3>
                     <p>You approach your work with a zest for life, an abiding respect for your peers, and a healthy dose of fun.</p>
                     </div>
                 </div>
             </div>
      </div>
   </section>

  </section>
  );
};

export default Career;


