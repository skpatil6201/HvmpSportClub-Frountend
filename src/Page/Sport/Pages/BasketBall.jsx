import React from "react";
import Navigation from "../../../Module/Navigation";
import Footer from "../../../Module/Footer";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Carousel } from "react-bootstrap";
import Basket1 from './Basket1.jpg';
import Basket2 from './Basket2.jpg';
import Basket3 from './Basket3.jpg';
// import Footer from "../../../Module/Footer";
function BasketBall(){
    return(<>
<Navigation/>
    
<div style={{fontFamily:"Arial ,sans-serif", fontSize:"16px", color:"#333", lineHeight:"1.5" }}>
  <h3 style={{textAlign:"center"}}>BasketBall</h3>
    <p> A quintessential team sport, holds a special place in the hearts of millions worldwide. Played on indoor or outdoor courts, it epitomizes athleticism, coordination, and teamwork. With origins dating back to the late 19th century, basketball has evolved into a global phenomenon, captivating audiences with its fast-paced action and electrifying plays. The game is characterized by dribbling, passing, shooting, and defense, each requiring a unique set of skills and strategy. Whether played competitively in professional leagues or casually on neighborhood courts, basketball fosters camaraderie and sportsmanship among players. From the thunderous dunks to pinpoint three-pointers, each moment on the court is filled with excitement and anticipation. As one of the most popular sports in the world, basketball transcends boundaries of age, gender, and culture, uniting fans in a shared love for the game.</p>
  </div>
    <Carousel>
      <Carousel.Item>
        <img src={Basket1} alt="HVPM Slider 1" className="d-block w-100" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Basket2} alt="HVPM Slider 2" className="d-block w-100" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Basket3} alt="HVPM Slider 3" className="d-block w-100" />
      </Carousel.Item>
    </Carousel>
    <br/>
  

<Footer/> </>)
}
export default BasketBall;