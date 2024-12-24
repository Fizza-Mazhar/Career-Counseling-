import React from 'react';
import './styles/Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
     
 
        <div className="logo">
          <img src="https://media.istockphoto.com/id/871461336/vector/icon-for-business-management-recruitment-of-employees-team-work.jpg?s=612x612&w=0&k=20&c=FRna_epaMZsMGJN8ubve0pvEStVWQNzIyMy0lla91Ow=" alt="Logo" /> {/* Replace with your logo */}
        
        </div> 
       
        

       
       <div className="contact-info">

<button className="login-btn">LOGIN</button>
<button className="signup-btn">SIGNUP</button>


</div>
      

    </nav>
  );
};

export default Navbar;
