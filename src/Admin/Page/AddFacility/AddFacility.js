import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavigation from '../AdminNavigation/AdminNavigation';

const AddFacility = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    });

    const [data, setData] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            await axios.post('http://localhost:3002/submitFormDataa', formData);
            alert('Form data submitted successfully');
            // Clear the form after successful submission
            setFormData({
                title: '',
                description: ''
            });
        } catch (error) {
            console.error('Error submitting form data:', error);
            alert('Error submitting form data');
        }
    };


    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3002/api/getFormData'); // Adjusted endpoint
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    
    useEffect(() => {
        fetchData();
    }, []); // Fetch data when component mounts


    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3002/api/deleteFormData/${id}`);
            alert('Data deleted successfully');
            // Fetch updated data after deletion
            fetchData();
            
        } catch (error) {
            console.error('Error deleting data:', error);
            alert('Error deleting data');
        }
    };


    return (
        <>
            <AdminNavigation />

            <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="title" style={{ display: 'block', marginBottom: '5px' }}>Title</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} id="title" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} placeholder="Title" />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="description" style={{ display: 'block', marginBottom: '5px' }}>Description</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} id="description" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} placeholder="Description"></textarea>
                </div>
                <button type="submit" style={{ padding: '10px 20px', textAlign: 'center', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
            </form>


            <div className="admin-container">
    <div className="admin-table">
        <h2>Added Facilities</h2>

            <table className="table">
                <thead>
                    <tr>
                        <th>TITLE</th>
                        <th>DESCRIPTION</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,index) => ( 
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
</div>
        </>
    );
};

export default AddFacility;
