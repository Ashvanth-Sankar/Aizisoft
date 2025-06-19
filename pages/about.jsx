import React,{useState} from "react";
import { FaArrowRight,FaArrowLeft,FaCheck,FaStar} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import CountUp from "react-countup";
import ITBACK from "../assets/itback.webp";
import CME from "../assets/cme.jpg";
import HA1 from "../assets/ha1.jpg";
import HA2 from "../assets/ha2.jpg";
import HA3 from "../assets/ha3.jpg";
import HA4 from "../assets/ha4.jpg";
import HA5 from "../assets/ha5.webp";
import HA6 from "../assets/ha6.avif";
import HAC from "../assets/hac.jpg";
import ITG1 from "../assets/itg1.jpg";
import ITG2 from "../assets/itg2.jpg";

import './about.css';
const About = () => {
   const navigate = useNavigate(); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const gameData = [
  {
    title: "Introduction to JupSoft",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, id!",
    image: ITG1
  },
  {
    title: "Next Page: Features",
    desc: "Description for second slide...",
    image: ITG2
  }
];

const handleNext = () => {
  if (currentIndex < gameData.length - 1) {
    setCurrentIndex(currentIndex + 1);
  }
};

const handlePrev = () => {
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1);
  }
};
  



    return (
    <section className="about">
      <div className="about-sheet">
         <div className="about-sheet-image">
        <img src={ITBACK} alt="I1" id="ITB" />
        <div className="about-text">
            <h2>About us</h2>
        </div>
    </div>
      </div>


    <section className="about-sheet2">
       <div className="about-sheet-second">
             <div className="about-sec-title">
            <h2> Large Enterprises in AI Economy.</h2>
            <div className="sec-two">
            <div className="left-sec-text">
                <h2>JupSoft Helps SMEs and Large Enterprises Compete and Win in the AI Economy.</h2>
                <p id="Secp">
                    JupSoft seasoned, skilled data analysts, data scientists and software developers provide complex data annotation, machine learning and AI model development, and software development services for web and mobile apps to enterprises in health care, finance, and other industries. Headquartered in Cambridge, MA, JupSoft dedicated, integrated team of subject matter and technical experts are located in Jup of India, serving 100-plus clients in more than 35 various industries.
                </p>
                <button id="sebt">Read more <span className="arow"><FaArrowRight/></span></button>
            </div>
             <div className="sec-img">
            <img src={CME} alt="Cme"  id="CM1"/>
           </div>
            </div>
        </div>
       </div>
    </section>

    <section className="about-sheet3">
      <div className="com-project">
           <div className="count">
        <h2>Our Projects</h2>
            <div className="count-project">   
      <div className="Ccolor1">
        <span id="couN"><CountUp end={50} duration={2} />+</span>
        <p id="couP">Active Projects</p>
      </div>
      <div className="Ccolor2">
        <span id="couN"><CountUp end={100} duration={2.5} />+</span>
        <p id="couP">Global Clients</p>
      </div>
      <div className="Ccolor3">
        <span id="couN3"><CountUp end={50} duration={3} suffix="M" /></span>
        <p id="couP">Data Points Analyzed</p>
      </div>
      <div className="Ccolor4">
        <span id="couN4"><CountUp end={35} duration={2} /></span>
        <p id="couP">Industries Served</p>
      </div>
    </div>
        </div>
        </div> 
    </section>

    <section className="about-sheet4">
      <div className="happie">
         <div className="hap-face">
            <h2>We Are</h2>
          <div className="hap-img">
      <div className="hap-photo-grid">
        <img src={HA1} alt="H1" id="Happ1" />
        <img src={HA2} alt="H1" id="Happ2" />
        <img src={HA3} alt="H1" id="Happ3" />
         <div className="hap-text1"><h3>Who we are</h3></div>
        <img src={HAC} alt="Hac" id="Happ4" />
        <div className="hap-text2"><h3>Technology partners</h3></div>
        <img src={HA4} alt="H1" id="Happ5" />
        <img src={HA5} alt="H1" id="Happ6" />
        <img src={HA6} alt="H1" id="Happ7" />
      </div>
    </div>
        </div> 
      </div>
    </section>

    <section className="about-sheet5">
  <div className="game">
        <div className="game-form">
            <h2>Explore JupSoft</h2>
    <div className="game-sheet">
  <div className="game-text">
    <h3>{gameData[currentIndex].title}</h3>
    <p id="gamep">{gameData[currentIndex].desc}</p>
    <div className="game-btn">
      <button onClick={handlePrev} id="RLB2"><FaArrowLeft /></button>
      <button onClick={handleNext} id="RLB"><FaArrowRight /></button>
    </div>
  </div>

  <div className="game-img">
    <img src={gameData[currentIndex].image} alt="Game Slide" id="Gam1" />
  </div>
</div>
        </div>
    </div>
  
    </section>

      
    </section>
    );
};
export default About;



