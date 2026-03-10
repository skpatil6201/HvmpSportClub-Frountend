import React from "react";
import Navigation from "../../../Module/Navigation";
import { Carousel } from "react-bootstrap";
import Jogging1 from './jogging1.jpg';
import Jogging2 from './jogging3.jpg';
import Jogging3 from './jogging3.jpg';
import Footer from "../../../Module/Footer";
function Jogging(){
    return(<>
    <Navigation/>
    
       
<div style={{fontFamily:"Arial ,sans-serif", fontSize:"16px", color:"#333", lineHeight:"1.5" }}>
  <h3 style={{textAlign:"center"}}>Jogging</h3>
    <p> Jogging, a simple yet effective form of exercise, has become a popular activity embraced by people of all ages and fitness levels. Whether it's a brisk morning run through a neighborhood park or a leisurely jog along a scenic trail, jogging offers numerous physical and mental benefits. The rhythmic pounding of feet against the pavement serves as a soothing soundtrack to the meditative solitude or shared camaraderie of the activity. Beyond its cardiovascular advantages, jogging provides an opportunity to connect with nature, relieve stress, and clear the mind. With minimal equipment required, it's an accessible form of exercise that can be enjoyed virtually anywhere, anytime. From beginners seeking to improve their health to seasoned runners training for marathons, jogging offers a versatile and fulfilling way to stay active and energized. As a cornerstone of many fitness routines, jogging continues to inspire individuals to lace up their sneakers and hit the open road, pursuing personal wellness and a sense of accomplishment with each stride.</p>
  </div>
    <Carousel>
      <Carousel.Item>
        <img src={Jogging1} alt="HVPM Slider 1" className="d-block w-100" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Jogging2} alt="HVPM Slider 2" className="d-block w-100" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Jogging3} alt="HVPM Slider 3" className="d-block w-100" />
      </Carousel.Item>
    </Carousel>
    <br/>
  
   <Footer/> </>)
}
export default Jogging;