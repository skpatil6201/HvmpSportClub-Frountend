import React, { useState } from "react";
import Navigation from "../../Module/Navigation";
import { Modal, Button } from 'react-bootstrap';
import Footer from "../../Module/Footer";

// Import all images dynamically
const images = require.context('./', false, /\.(jpg|jpeg|png|svg)$/);
const imagePaths = images.keys().map(images);

function chunkArray(array, size) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
        chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
}

function News() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const imageRows = chunkArray(imagePaths, 3); // Split images into rows with 3 columns

    return (
        <>
            <Navigation />

            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <tbody>
                    {imageRows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((image, columnIndex) => (
                                <td key={columnIndex} style={{ border: '1px solid #ddd', padding: '8px' }}>
                                    <img style={{ height: "300px", width: "300px" }} src={image} alt={`Image ${rowIndex * 3 + columnIndex + 1}`} className="img-fluid" onClick={() => handleImageClick(image)} />
                                </td>
                            ))}
                        </tr>
                    ))}
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
            <Footer />
        </>
    );
}

export default News;
