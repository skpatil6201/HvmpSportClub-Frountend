import React from 'react';
import linkedin from './Linkedin.png'; // Import the LinkedIn image
import youtube from './Youtube.png'; // Import the YouTube image
import github from './Github.png'; // Import the GitHub image

function Footer() {
  return (<>


<div style={{textAlign:"center", fontSize:"10px" , background:"black" , color:"white"}}>
<p>© Copyrights 2024 Reserved to Shree Hanuman Vyayam Prasarak Mandal </p>

</div>


<div>

</div>





    <div style={{ textAlign: "center" }}>
      
        <a href="https://www.youtube.com/" target="_blank">
          <img src={youtube} style={{ width: "3%" }} alt="YouTube Logo" />
        </a>
        <a href="https://github.com/skpatil6201" target="_blank" >
          <img src={github} style={{ width: "3%" }} alt="GitHub Logo" />
        </a>
        <a href="https://www.linkedin.com/feed/" target="_blank"  >
          <img src={linkedin} style={{ width: "3%" }} alt="LinkedIn Logo" />
        </a>
      
    </div>
    </> );
}

export default Footer;
