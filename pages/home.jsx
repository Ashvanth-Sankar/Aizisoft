import React,{ useState } from "react";
import pro1 from '../assets/pro-1.png';
import Testimonials from "../assets/testimonials-1.jpg";
import Testimonialss from "../assets/testimonials-4.jpg";
import Testimonialsss from "../assets/testimonials-5.jpg";
import Softp from "../assets/softp.webp";
import Softpp from "../assets/softpp.webp";
import Softppp from "../assets/softppp.webp";
import Client1 from "../assets/client-1.png";
import Client2 from "../assets/client-3.png";
import Client3 from "../assets/client-4.png";
import Client4 from "../assets/client-8.png";
import Client5 from "../assets/client-6.png";
import Client6 from "../assets/client-5.png";
import Client7 from "../assets/client-8.png";
import Client8 from "../assets/client-7.png";
import Client9 from "../assets/client-2.png";
import Blog1 from "../assets/blog-recent-1.jpg";
import Blog2 from "../assets/blog-recent-5.jpg";
import Services from "../assets/services-5.jpg";
import AI1 from "../assets/ai1.jpg";
import AI2 from "../assets/ai2.jpg";
import AI3 from "../assets/ai3.jpg";
import Back from "../assets/back.avif";

import { FaArrowRight,FaCheck,FaStar
  } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './home.css';
const Home = () => {
 const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
    const [hovered, setHovered] = useState(false);
     const [hovered2, setHovered2] = useState(false);
      const [hovered3, setHovered3] = useState(false);
      const [showSecondContent, setShowSecondContent] = useState(false);
       const [showSecondContent2, setShowSecondContent2] = useState(false);
        const [showSecondContent3, setShowSecondContent3] = useState(false);


  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300); // Reset after animation
  };

return(
    <div className="home-page-backg">
    <div className="home-page-sheet">        
        <div className="first-sheet">
            <img src={pro1} alt="pro-1"  id="fim"/>
            <div className="first-content">
                <div className="left-content">
                <h2>TOGETHER WITH</h2>
               <h1>Aizi <span className="rotate-s">S</span>OFT</h1>
              </div>
              <div className="right-content">
                 <h2>Join-Us</h2>
              <button className="arrow-button" onMouseMove={handleClick}>
      <FaArrowRight className={clicked ? 'arrow move' : 'arrow'} />
    </button>
              </div>
            </div>
        </div>


        <div className="second-sheet">
            <div className="second-sheet-form">
            <h3>BULIDERS</h3>
            <div className="center-second">
              <div className="second-sheet-topic">
                <h3>A Deeper Level of Secure Enterprise AI.Unleash the power of AI to generate creative and engaging text with AI Text.</h3>
           
                <div className="container2">
      {!showSecondContent ? (
        <div className="left-second-pages">
          <h4><span className="tick"><FaCheck /></span>AI Debate Generator Craft sincere and thoughtful apologies with the AI Generator.</h4>
          <p>AiziSoft MadeAi Platform provides the foundation for JupSoft GenAI services and a bespoke customer solutions. MadeAi harnesses years of AI knowledge to tribute that captures their life and legacy.</p>

          <h4><span className="tick"><FaCheck /></span>AI Acronym Generator Create heartfelt and respectful obituaries with  AI Generator</h4>
          <p>Generate structured and compelling debate arguments with the AI Debate Generator. Perfect for debate of teams, educators, and anyone looking to develop persuasive arguments on various topics.</p>

          <button id="corbtn" onClick={() => setShowSecondContent(true)}>Ullamco</button>
           <button id="corbtn" onClick={() => setShowSecondContent(false)}>Corrupti</button>
        </div>
      ) : (
        <div className="left-second-pages">
          <h4><span className="tick"><FaCheck /></span>More AI Tools use in Unlimited Original Content Ideas On-Demand  to your audience </h4>
          <p>Our Content Idea Generator provides a constant stream of fresh, unique content ideas you can turn into blog posts, social media updates, and more. Just enter a few keywords and let our AI-powered.</p>

          <h4><span className="tick"><FaCheck /></span>More Details and a Constant Stream of Fresh Content Ideas to industry experts </h4>
          <p>The Content Idea Generator provides an endless supply of unique content topics so you never run out of ideas. Simply enter a few keywords and let the tool work its magic to deliver suggestions.</p>
          
          <button id="corbtn" onClick={() => setShowSecondContent(true)}>Ullamco</button>
          <button id="corbtn" onClick={() => setShowSecondContent(false)}>Corrupti</button>
        </div>
      )}
    </div>
            </div>
      
          <div
      className="second-pages-sheet"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}   
      onTouchEnd={() => setHovered(false)}    
    >
      {!hovered && (
         <div className="box-image">
          <img src={AI1} alt="Ai-1" id="a1" />
          <div className="ai-text">
       <h2>
          Making Reinvention Real  <br />With Gen 
          AI
        </h2>
        </div>
        </div>
      )}

      {hovered && (
        <div className="foun-back">
          <img src={Back} alt="bac" id="Ba1" />
        <div className="foun-img">
          <img src={Testimonials} alt="AI Data" className="fou1" />
          <p id="name">Gladson Eick</p>
          <p>Lorem ipsum dolor sit amet.</p>
           <span id="star"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
        </div>
        </div>
      )}
    </div>   



          <div
      className="second2-pages-sheet"
      onMouseEnter={() => setHovered2(true)}
      onMouseLeave={() => setHovered2(false)}
      onTouchStart={() => setHovered2(true)}   
      onTouchEnd={() => setHovered2(false)}    
    >
      {!hovered2 && (
        <div className="box2-image">
          <img src={AI2} alt="Ai-1" id="a2" />
          <div className="ai2-text">
       <h2>
          Making Reinvention Real  <br />With Gen 
          AI
        </h2>
        </div>
        </div>
     
      )}

      {hovered2 && (
          <div className="foun-back">
          <img src={Back} alt="bac" id="Ba1" />
        <div className="foun-img2">
          <img src={Testimonialss} alt="AI Data" className="fou1" />
          <p id="name">Herinklen jack</p>
          <p>Lorem ipsum dolor sit amet.</p>
           <span id="star"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
        </div>
        </div>
      )}
    </div>   
    <div className="right-second-pages">
          <h3>CapeStart Research and Analysis Services offer solutions that enhance data-driven decision-making across industries.</h3>
          
                <div className="container22">
      {!showSecondContent2 ? (
        <div className="right-second-pages">
          <h4><span className="tick"><FaCheck /></span>AiziSoft MadeAi Platform provides the foundation for AiziSoft GenAI.</h4>
          <p>Whether you need inspiration for your next viral article or want to brainstorm new topics to cover, our generator delivers original suggestions and creative spins on existing concepts in seconds.</p>

          <h4><span className="tick"><FaCheck /></span>MadeAi harnesses years of AI knowledge and customer expertise. </h4>
          <p>Generate structured and compelling debate arguments with the AI Debate Generator. Perfect for debate of teams, educators, and anyone looking to develop persuasive arguments on various topics.</p>

          <button id="corbtn" onClick={() => setShowSecondContent2(true)}>Ullamco</button>
           <button id="corbtn" onClick={() => setShowSecondContent2(false)}>Corrupti</button>
        </div>
      ) : (
        <div className="right-second-pages">
          <h4><span className="tick"><FaCheck /></span>More AI Tools use in Unlimited Original Content Ideas On-Demand  audience </h4>
          <p>Our Content Idea Generator provides a constant stream of fresh, unique content ideas you can turn into blog posts, social media updates, and more. Just enter a few keywords and let our AI-powered.</p>

          <h4><span className="tick"><FaCheck /></span>More Details and a Constant Stream of Fresh Content Ideas to industry. </h4>
          <p>The Content Idea Generator provides an endless supply of unique content topics so you never run out of ideas. Simply enter a few keywords and let the tool work its magic to deliver suggestions.</p>
          
          <button id="corbtn" onClick={() => setShowSecondContent2(true)}>Ullamco</button>
          <button id="corbtn" onClick={() => setShowSecondContent2(false)}>Corrupti</button>
        </div>
      )}
    </div>
            </div>






             <div className="left-second-pages">
            <h3>Generate compelling, unique content instantly with AiziSoft AI Content Generator. Perfect for blogs, social media, and marketing material.</h3>
             <div className="container222">
      {!showSecondContent3 ? (
        <div className="right-seconds2-pages">
          <h4><span className="tick"><FaCheck /></span>AI Text to Human Text Converter and generator delivers original for article. </h4>
          <p>Whether you need inspiration for your next viral article or want to brainstorm new topics to cover, our generator delivers original suggestions and creative spins on existing concepts.</p>

          <h4><span className="tick"><FaCheck /></span>MadeAi harnesses years of AI knowledge and customer expertise on topics. </h4>
          <p>Generate structured and compelling debate arguments with the AI Debate Generator. Perfect for debate of teams, educators, and anyone looking to develop persuasive arguments on various topisc.</p>

          <button id="corbtn" onClick={() => setShowSecondContent3(true)}>Ullamco</button>
           <button id="corbtn" onClick={() => setShowSecondContent3(false)}>Corrupti</button>
        </div>
      ) : (
        <div className="right-seconds2-pages">
          <h4><span className="tick"><FaCheck /></span>More AI Tools use in Unlimited Original Content Ideas On-Demand. </h4>
          <p>Our Content Idea Generator provides a constant stream of fresh, unique content ideas you can turn into blog posts, social media updates, and more. Just enter a few keywords and AI-powered.</p>

          <h4><span className="tick"><FaCheck /></span>More Details and a Constant Stream of Fresh Content Ideas to industry. </h4>
          <p>The Content Idea Generator provides an endless supply of unique content topics so you never run out of ideas. Simply enter a few keywords and let the tool work its magic to delivering.</p>
          
          <button id="corbtn" onClick={() => setShowSecondContent3(true)}>Ullamco</button>
          <button id="corbtn" onClick={() => setShowSecondContent3(false)}>Corrupti</button>
        </div>
      )}
    </div>
            </div>
          <div
      className="second3-pages-sheet"
      onMouseEnter={() => setHovered3(true)}
      onMouseLeave={() => setHovered3(false)}
      onTouchStart={() => setHovered3(true)}   
      onTouchEnd={() => setHovered3(false)}    
    >
      {!hovered3 && (
          <div className="box3-image">
          <img src={AI3} alt="Ai-1" id="a3" />
          <div className="ai3-text">
       <h2>
          Making Reinvention Real  <br />With Gen 
          AI
        </h2>
        </div>
        </div>
      )}

      {hovered3 && (
         <div className="foun-back">
          <img src={Back} alt="bac" id="Ba1" />
        <div className="foun-img3">
          <img src={Testimonialsss} alt="AI Data" className="fou1" />
          <p id="name">Francis Herk</p>
          <p>Lorem ipsum dolor sit amet.</p>
           <span id="star"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
        </div>
        </div>
      )}
    </div>     
    </div> 
        </div>
        </div>





        <div className="third-sheet">
        <div className="third-pages">
            <h2>Featured Trends and Insights</h2>
            <div className="third-pages-form">
            <div className="third-pages-content1">
           <img src={Softp} alt="AI-APP"  id="Tsoft1"/>
           <h3>Article | Feb 1,2025</h3>
           <p id="tit">Agentic AI: Enhancing human <br /> decision making in financial <br /> services and beyord</p> 
           <p id="titp">We deliver industry-leading capabilities to clients across all major verticals, including Financial Services, Manufacturing, Technology and Services, and Healthcare and Public Services.</p>
      
       <div className="container">
  <div className="arrow-box11">
    <FaArrowRight className="arrow-icon11" />
    <span className="read-article11">Read the article</span>
  </div>
</div>

            </div>
             <div className="third-pages-content1">
           <img src={Softpp} alt="AI-APP"  id="Tsoft1"/>
           <h3>Article | Feb 1,2025</h3>
           <p id="tit">Agentic AI: Enhancing human <br /> decision making in financial <br /> services and beyord</p> 
           <p id="titp">We deliver industry-leading capabilities to clients across all major verticals, including Financial Services, Manufacturing, Technology and Services, and Healthcare and Public Services.</p>
      
      
    <div className="container">
  <div className="arrow-box22">
    <FaArrowRight className="arrow-icon22" />
    <span className="read-article22">Read the article</span>
  </div>
</div>

            </div>
             <div className="third-pages-content1">
           <img src={Softppp} alt="AI-APP"  id="Tsoft1"/>
           <h3>Article | Feb 1,2025</h3>
           <p id="tit">Agentic AI: Enhancing human <br /> decision making in financial <br /> services and beyord</p> 
           <p id="titp">We deliver industry-leading capabilities to clients across all major verticals, including Financial Services, Manufacturing, Technology and Services, and Healthcare and Public Services.</p>
    <div className="container">
  <div className="arrow-box33">
    <FaArrowRight className="arrow-icon33" />
    <span className="read-article33">Read the article</span>
  </div>
</div>
            </div>
            <button id="Rbtn">Read more <FaArrowRight className="arrow-iconR" /></button>
            </div> 
            <div className="third-pages2">
            
              <div className="third-pages-sheet">
              <div className="third-min-left">
                <h4>Orientation Program</h4>
                <p>April 15-17 | Canada</p>
                <span>Employee Learn Moto Vision <br /> U.S.A 2025</span>
                  </div>
                <div className="arrow-boxms">
                  <span className="read-articlems">Join us for the program</span>
    <FaArrowRight className="arrow-iconms" />
         </div>    
            </div>
            
        <div className="third-pages2-sheet">
            <div className="third-min-right">
                <h4>Events</h4>
                <p>May 20-22 | Florida</p>
                <span>AIZISOFT Software <br />Technology 2025</span>
              </div>
                 <div className="arrow-boxms">
                  <span className="read-articlems">Join us for the program</span>
    <FaArrowRight className="arrow-iconms" />
         </div> 
              </div>
            </div>
             <button id="Rbtn2">Read more <FaArrowRight className="arrow-iconR" /></button>
            </div>
        </div>

        <div className="four-sheet">
          <div className="four-sheet-center">
            <h2>Strategic Partners</h2>
            <div className="four-scroll-page">
              <div className="four-scroll-sheet">
              <div className="scroll-inside">
              <div className="cimg1">
                <img src={Client1} alt="cL-1" id="cS-1" />
              </div>
              <div className="cimg1">
                <img src={Client2} alt="cL-1" id="cS-1" />
              </div>
              <div className="cimg1">
                <img src={Client4} alt="cL-1" id="cS-1" />
              </div>
              <div className="cimg1">
                <img src={Client6} alt="cL-1" id="cS-1" />
              </div>
              <div className="cimg1">
                <img src={Client8} alt="cL-1" id="cS-1" />
              </div>
              <div className="cimg1">
                <img src={Client9} alt="cL-1" id="cS-1" />
              </div>
              <div className="cimg1">
                <img src={Client3} alt="cL-1" id="cS-1" />
              </div>
              <div className="cimg1">
                <img src={Client5} alt="cL-1" id="cS-1" />
              </div>
              <div className="cimg1">
                <img src={Client7} alt="cL-1" id="cS-1" />
              </div>
            <div className="fade"></div>
             </div>
             </div>
            </div>
          </div>
        </div>
        
        <div className="inside-companies">
          <h2>Inside stories</h2>
            <div className="inside-four">
  <div className="image-type">
    <img src={Blog1} alt="B-1" id="FB-1" />
    <div className="inside-lesson1">
      <p id="Futu">- Future-shaping projects -</p>
      <span id="tech">Tech lessons for positive futures</span>
      <p>The lasting value of a team tech challenge</p>
    </div>
  </div>

  {/* RIGHT side - Two smaller images stacked */}
  <div className="inside-four-img">
    <div className="inside-right">
      <div className="image-type">
        <img src={Blog2} alt="B-2" id="FB-2" />
         <div className="inside-lesson2">
      <p id="Futu2">-  Life at AiziSoft -</p>
      <span id="tech2">New career, new you</span>
      <p>Changing careers to change your life</p>
    </div>
      </div>
      <div className="image-type">
        <img src={Services} alt="B-3" id="FB-22" />
         <div className="inside-lesson2">
      <p id="Futu2">- Environment  -</p>
      <span id="tech2">A forum for sustainability</span>
      <p>Getting the sustainability message heard by world leaders</p>
    </div>
      </div>
    </div>
  </div>
</div>
</div>
       
       
    
    </div>
</div>
);
};
export default Home;
