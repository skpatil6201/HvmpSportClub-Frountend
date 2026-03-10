import React, { useState } from "react";
import Navigation from "../../Module/Navigation";
import { Modal, Button } from 'react-bootstrap';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';
import img7 from './img7.jpg';
import img8 from './img8.jpg';
import Footer from "../../Module/Footer";
function Gallery() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    return (
        <>
            <Navigation />

            <table className="table">
                <tbody>
                    <tr>
                        <td><img src={img1} alt="Image 1" className="img-fluid" onClick={() => handleImageClick(img1)} /></td>
                        <td><img src={img2} alt="Image 2" className="img-fluid" onClick={() => handleImageClick(img2)} /></td>
                        <td><img src={img3} alt="Image 3" className="img-fluid" onClick={() => handleImageClick(img3)} /></td>
                        <td><img src={img4} alt="Image 4" className="img-fluid" onClick={() => handleImageClick(img4)} /></td>
                    </tr>
                    <tr>
                        <td><img src={img5} alt="Image 5" className="img-fluid" onClick={() => handleImageClick(img5)} /></td>
                        <td><img src={img6} alt="Image 6" className="img-fluid" onClick={() => handleImageClick(img6)} /></td>
                        <td><img src={img7} alt="Image 7" className="img-fluid" onClick={() => handleImageClick(img7)} /></td>
                        <td><img src={img8} alt="Image 8" className="img-fluid" onClick={() => handleImageClick(img8)} /></td>
                    </tr>
                </tbody>
            </table>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Body>
                    <img src={selectedImage} alt="Full Size Image" className="img-fluid" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
       <Footer/> </>
    );
}

export default Gallery;
