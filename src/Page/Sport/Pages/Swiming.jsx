import React from "react";
import Navigation from "../../../Module/Navigation";
import { Carousel } from "react-bootstrap";
import Swimming1 from './Swimming1.jpg';
import Swimming2 from './Swimming2.jpg';
import Swimming3 from './Swimming3.jpg';import Footer from "../../../Module/Footer";
function Swiming (){
    return(<>
    <Navigation/>
    
    <Carousel>
            <Carousel.Item>
              <img src={Swimming1} alt="HVPM Slider 1" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Swimming2} alt="HVPM Slider 2" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Swimming3} alt="HVPM Slider 3" className="d-block w-100" />
            </Carousel.Item>
          </Carousel>
          <br/>
        <div style={{fontFamily:"Arial ,sans-serif", fontSize:"16px", color:"#333", lineHeight:"1.5" }}>
        <h3 style={{textAlign:"center"}}>Swimming</h3>
          <p>Swimming, often referred to as the ultimate full-body workout, is a refreshing and invigorating activity enjoyed by people of all ages. Whether gliding through calm waters in a serene pool or braving the waves of the open ocean, swimming offers a unique blend of exercise, relaxation, and adventure. As one of the most low-impact forms of exercise, it provides a gentle yet effective way to improve cardiovascular health, strengthen muscles, and increase flexibility. The rhythmic motion of strokes against the water creates a sense of weightlessness, offering a therapeutic escape from the stresses of daily life. Beyond its physical benefits, swimming promotes mental well-being, boosting mood and reducing anxiety. From leisurely laps to competitive races, swimming caters to a wide range of interests and abilities, making it a truly inclusive and accessible sport. Whether as a recreational pastime or a serious athletic pursuit, the joy of swimming lies in the freedom and fluidity of movement, as swimmers glide effortlessly through the water, embracing the sensation of freedom and tranquility that only swimming can provide.</p>
        </div>
     
    <Footer/></>)
}
export default Swiming;