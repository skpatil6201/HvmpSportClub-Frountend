import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navigation from "../../Module/Navigation";
import Footer from "../../Module/Footer";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ground1 from './graund1.jpg';
import ground2 from './ground2.jpg';
import ground3 from './ground3.jpg';
import indoor1 from './indoor1.jpg';
import indoor2 from './indoor2.jpg';
import indoor3 from './indoor3.jpg';
import { Carousel } from "react-bootstrap";

function Facility() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3002/api/getFormData');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navigation />
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        {/* tab one */}
        <Tab eventKey="PlayGround" title="PlayGround">
          <div className="text-center">
            <h3>PLAYGROUND</h3>
            <p>Parents may believe that indoor games are restricted. However, indoor games have many benefits for children and adults as well.</p>
          </div>
          <Carousel>
            <Carousel.Item>
              <img src={ground1} alt="HVPM Slider 1" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={ground2} alt="HVPM Slider 2" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={ground3} alt="HVPM Slider 3" className="d-block w-100" />
            </Carousel.Item>
          </Carousel>
        </Tab>

        {/* tab two */}
        <Tab eventKey="IndoorGame" title="IndoorGame">
          <div className="text-center">
            <h2><strong>The Benefits of Indoor Games</strong></h2>
            <p>Parents may believe that indoor games are restricted. However, indoor games have many benefits for children and adults as well.</p>
            <div style={{ textAlign: 'left', margin: '0 auto', maxWidth: '600px', wordSpacing: "2.0" }}>
              <ol style={{ paddingLeft: '20px' }}>
                <li>They encourage learning and provide children with new skills.</li>
                <li>Compared to outdoor games, they take up less room.</li>
                <li>Children are safe at home with parental supervision.</li>
                <li>You can always engage your kids in fun no matter what the weather is like - rain or shine.</li>
                <li>Indoor games keep your child busy and allow them to express their creativity, allowing them to think outside the box.</li>
                <li>Mindfully, indoor games increase mental stability.</li>
              </ol>
            </div>
          </div>
          <Carousel>
            <Carousel.Item>
              <img src={indoor1} alt="HVPM Slider 1" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={indoor2} alt="HVPM Slider 2" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={indoor3} alt="HVPM Slider 3" className="d-block w-100" />
            </Carousel.Item>
          </Carousel>
        </Tab>
      </Tabs>

      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ marginBottom: '20px' }}>Our Facilities</h2>
        <p style={{ fontSize: '18px' }}>Explore our top-notch facilities that cater to all your needs:</p>
        <table className="table">
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="facility" style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f5f5f5' }}>
                    <h3 style={{ color: 'blue' }}>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default Facility;
