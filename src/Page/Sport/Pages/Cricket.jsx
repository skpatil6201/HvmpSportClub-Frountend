import React from "react";
import Navigation from "../../../Module/Navigation";
import Footer from "../../../Module/Footer";
import { Carousel } from "react-bootstrap";
import Cricket1 from './Cricket1.jpg';
import Cricket2 from './Cricket2.jpg';
import Cricket3 from './Cricket3.jpg';
function Cricket (){
    return(<>
    <Navigation/>
       
    <Carousel>
            <Carousel.Item>
              <img src={Cricket1} alt="HVPM Slider 1" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Cricket2} alt="HVPM Slider 2" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Cricket3} alt="HVPM Slider 3" className="d-block w-100" />
            </Carousel.Item>
          </Carousel>
          <br/>
        <div style={{fontFamily:"Arial ,sans-serif", fontSize:"16px", color:"#333", lineHeight:"1.5" }}>
        <h3 style={{textAlign:"center"}}>Cricket and Athletics</h3>
          <p>Cricket, often hailed as a gentleman's game, is a beloved sport steeped in tradition and history. Originating in England during the 16th century, cricket has evolved into a global phenomenon with passionate followers across continents. Played on grass pitches or synthetic surfaces, it combines elements of strategy, skill, and endurance. The game's intricate rules and nuances add to its complexity, making it as much a mental battle as a physical one. Cricket is characterized by its various formats, including Test matches, One Day Internationals (ODIs), and the fast-paced excitement of Twenty20 (T20) cricket. Each format offers its own unique spectacle, from the slow, strategic battles of Test cricket to the explosive hitting of T20 games. Whether played in iconic stadiums or on makeshift pitches in backyards, cricket fosters a sense of community and camaraderie among players and fans alike. With its rich heritage and timeless appeal, cricket continues to capture the imagination of millions, transcending borders and cultures to unite people in a shared passion for the sport.</p>
        </div>
     
   
   <Footer/></>)

}
export default Cricket;