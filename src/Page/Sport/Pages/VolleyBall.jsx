import React from "react";
import Navigation from "../../../Module/Navigation";

import { Carousel } from "react-bootstrap";
import vol1 from './vol1.jpg';
import vol2 from './vol2.jpg';
import vol3 from './vol3.jpg';
import Footer from "../../../Module/Footer";
function VolleyBall(){
    return(<>
  <Navigation/>
    
       
    <div style={{fontFamily:"Arial ,sans-serif", fontSize:"16px", color:"#333", lineHeight:"1.5" }}>
      <h2 style={{textAlign:"center"}}>VolleyBall</h2>
        <p> Volleyball, a dynamic and exhilarating sport, is beloved for its fast-paced action and intense teamwork. Played on indoor or beach courts, it requires a combination of skill, strategy, and coordination. With origins dating back to the late 19th century, volleyball has evolved into a global sensation, captivating audiences with its thrilling rallies and gravity-defying spikes. The game is characterized by precise passes, powerful serves, and lightning-quick reflexes, demanding players to anticipate and react swiftly to the ball's trajectory. Whether played casually at a backyard barbecue or in professional tournaments on the world stage, volleyball fosters camaraderie and sportsmanship among players. From the strategic blocks to the acrobatic digs, each play showcases the athleticism and determination of its participants. As a sport that celebrates both individual talent and collective effort, volleyball continues to unite people of diverse backgrounds and cultures in the shared pursuit of victory and joy on the court.</p>
      </div>
        <Carousel>
          <Carousel.Item>
            <img src={vol1} alt="HVPM Slider 1" className="d-block w-100" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={vol2} alt="HVPM Slider 2" className="d-block w-100" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={vol3} alt="HVPM Slider 3" className="d-block w-100" />
          </Carousel.Item>
        </Carousel>
        <br/>
      
       <Footer/></>)
}
export default VolleyBall;