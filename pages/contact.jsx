 
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cont3 from "../assets/cont3.webp";
import './contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSubmitted(true);
    console.log(e,'qwertyuio');
    
navigate('/')
    // // Optional: reset form fields
    // setTimeout(() => setSubmitted(false), 5000); // hide after 5 seconds
  };

  

  return (
    <section className="contact-form1">
       <div className="contact-form-header">
         <img src={Cont3} alt="co1" id="Co1" />
         <div className="contact-text">
           <h3>Contact us</h3>
         </div>
       </div>

         <section className="contact-form2">
          <div className="contact-touch">
     <div className="touch-sheet">
         {submitted && (
            <div className="thank-you-message">
              Thank you for your application!
            </div>
          )}

           <h3>Get in touch</h3>
           <p id="toup">
             Please provide the following information and we will put you <br />
             in touch with the right person.
           </p>

           <form onSubmit={handleSubmit}>
             <div className="touch-input">
               <label htmlFor="industry">Inquiry Type*</label>
               <select id="Opp" required>
                 <option value="">Select a role</option>
                 <option value="Software Engineer developer">Software Engineer developer</option>
                 <option value="Software Engineer  C++ developer">Software Engineer C++ developer</option>
                 <option value="Software developer">Software developer</option>
                 <option value="Full-stack developer">Full-stack developer</option>
                 <option value="Full-stack developer | 2 to 4 years">Full-stack developer | 2 to 4 years</option>
                 <option value="C++ developer | 6 to 9 years">C++ developer | 6 to 9 years</option>
                 <option value="Java Developer |2 to 3 years">Java Developer |2 to 3 years</option>
                 <option value="Python Developer">Python Developer</option>
               </select>
             </div>

             <div className="tinput">
               <h2>About you</h2>
               <div className="tinp">
                 <label>First name*</label>
                 <input type="text" placeholder="Enter first name" name="fname" required id="inbox" />

                 <label>Last name*</label>
                 <input type="text" placeholder="Enter last name" name="lname" required id="inbox" />

                 <label>Email ID*</label>
                 <input type="email" placeholder="Enter email" name="email" required  id="inbox"/>

                 <label>Phone Number*</label>
                 <input type="tel" placeholder="Enter phone number" name="phone" required id="inbox" />

                 <label>State*</label>
                 <select id="cou" name="state" required>
                   <option value="">Select state</option>
                   <option value="Bangalore">Bangalore</option>
                   <option value="Chennai">Chennai</option>
                   <option value="Maharashtra">Maharashtra</option>
                   <option value="Hyderabad">Hyderabad</option>
                   <option value="Pune">Pune</option>
                   <option value="Coimbatore">Coimbatore</option>
                   <option value="Erode">Erode</option>
                   <option value="Madurai">Madurai</option>
                 </select>

                 <label>How can we help you*</label>
                 <textarea name="help" id="Addr" rows="5" required></textarea>
               </div>
             </div>

             <button type="submit" id="Cosub">Submit</button>
           </form>
         </div>
          </div>
         </section>
    </section> 
  );
};

export default Contact;



