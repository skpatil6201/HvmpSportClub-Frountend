import React from "react";
import  './Event.css'
import { Carousel } from 'react-bootstrap';
// import ambadas from '../Event/ambasa.jpg'
import Navigation from "../../Module/Navigation";
import ev1 from './ev1.jpg'
import ev2 from './ev2.jpg'
import ev3 from './ev3.jpg'
import Footer from "../../Module/Footer";
function Event() {
    return (<>
<Navigation/>
        event








        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 p-center"
      src={ev1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Nationnal Sport Day</h3>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ev2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>International Sport Day</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ev3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>National Sport Athletic</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>







        
 <Footer/>   </>)
}
export default Event;