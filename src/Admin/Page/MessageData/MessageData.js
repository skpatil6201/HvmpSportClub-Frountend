import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css'; // Import CSS file
import AdminNavigation from '../AdminNavigation/AdminNavigation';
function MessageData() {
    const [data, setData] = useState([]);

    const loadData = async () => {
        try {
            const response = await axios.get("http://localhost:3002/api/get");
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);



    return (<>
 
<AdminNavigation/>
 <div className="admin-container">
    <div className="admin-table">
        <h2>Message Request</h2> {/* Added heading "Ram" */}
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>MOBILE</th>
                    <th>MASSAGE</th>
                    
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>{item.message}</td>
       
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>

        </>  );
}

export default MessageData;
