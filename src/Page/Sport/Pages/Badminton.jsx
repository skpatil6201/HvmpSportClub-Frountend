import React from "react"
import Navigation from "../../../Module/Navigation";
import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
import { Carousel } from "react-bootstrap";
import Badminton1 from './Badminton1.jpg';
import Badminton2 from './Badminton2.jpg';
import Badminton3 from './Badminton3.jpg';
import Footer from "../../../Module/Footer";
function Badmonton(){
    return(<>
    <Navigation/>
    
          <Carousel>
            <Carousel.Item>
              <img src={Badminton1} alt="HVPM Slider 1" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Badminton2} alt="HVPM Slider 2" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Badminton3} alt="HVPM Slider 3" className="d-block w-100" />
            </Carousel.Item>
          </Carousel>
          <br/>
        <div style={{fontFamily:"Arial ,sans-serif", fontSize:"16px", color:"#333", lineHeight:"1.5" }}>
        <h3 style={{textAlign:"center"}}>Badminton</h3>
          <p> A dynamic and exhilarating sport, is enjoyed by millions around the globe. Played indoors or outdoors, it demands agility, precision, and strategy. With its roots tracing back to ancient civilizations, badminton has evolved into a highly competitive sport governed by strict rules and regulations. The game is characterized by lightning-fast rallies, requiring players to possess impeccable hand-eye coordination and swift footwork. Whether played casually with friends or in intense professional tournaments, badminton offers a thrilling combination of athleticism and finesse. From the powerful smashes to delicate drop shots, each stroke is executed with precision and finesse. Badminton's popularity continues to soar, captivating enthusiasts of all ages and skill levels with its fast-paced action and exhilarating gameplay.</p>
        </div>
    
  <Footer/>  </>)
}
export default Badmonton;