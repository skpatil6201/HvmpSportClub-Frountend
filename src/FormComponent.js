import React, { useState } from 'react';
import axios from 'axios';

const FormComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            await axios.post('http://localhost:3002/submitFormData', formData);
            alert(' Message sent successfully Wait Admin Call You....!');
            // Clear the form after successful submission
            setFormData({
                name: '',
                email: '',
                mobile: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form data:', error);
            alert('Error submitting form data');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} id="name" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} placeholder="Name" />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} id="email" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} placeholder="Email" />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="mobile" style={{ display: 'block', marginBottom: '5px' }}>Mobile</label>
                <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} id="mobile" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} placeholder="Mobile" />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} id="message" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} placeholder="Message"></textarea>
            </div>
           <center> <button type="submit" style={{ padding: '10px 20px',textAlign:'center', backgroundColor: '#007bff', color: '#fff',  borderRadius: '5px', cursor: 'pointer' }}>Submit</button></center>
        </form>
    );
};

export default FormComponent;
