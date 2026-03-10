import React from "react";
import Navigation from "../../Module/Navigation";
import Footer from "../../Module/Footer";
import { Carousel } from "react-bootstrap";
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';
import img7 from './img7.jpg';
import img8 from './img8.jpg';

function Home() {
    return (
        <>
            <Navigation />



            <div className="container text-center">
                <h4>Welcome to......!</h4><br />
                <h1 className="text-navy font-weight-bold">Shreee Hanuman Yvayam Prasarak Mandal Amravati</h1>
                <p>Shree Hanuman Vyayam Prasak Mandal, one of the oldest and most prestigious clubs in the country, has completed 110 glorious years of history since 1914 and is ideal for family membership.</p><br />
                <a href="/History" className="btn btn-primary">READ MORE</a>
            </div>
            <br />


            <Carousel>
                <Carousel.Item>
                    <img src={img1} alt="HVPM Slider 1" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img2} alt="HVPM Slider 2" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img3} alt="HVPM Slider 3" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img4} alt="HVPM Slider 4" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img5} alt="HVPM Slider 5" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img6} alt="HVPM Slider 6" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img7} alt="HVPM Slider 7" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img8} alt="HVPM Slider 8" className="d-block w-100" />
                </Carousel.Item>
            </Carousel><br />




            <Footer />
        </>
    );
}

export default Home;
