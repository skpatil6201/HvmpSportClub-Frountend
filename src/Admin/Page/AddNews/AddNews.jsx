import { createRoot } from 'react-dom/client';

import AdminNavigation from '../AdminNavigation/AdminNavigation';
import React, { useState, useEffect } from "react";
import axios from 'axios';
function AddNews(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [salary, setSalary] = useState("");
  const [file, setFile] = useState()
  const [msg, setMsg] = useState("");
     
 
  const upload = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("salary", salary);
    formData.append('file', file);
  
    axios.post('http://localhost:3001/create', formData)
      .then((response) => {
        console.log(response);
        if (response.data.status === 'Success') {
          setMsg("File Successfully Uploaded");
        } else {
          setMsg("Error: File not uploaded");
        }
      })
      .catch(error => {
        console.error("Error uploading file:", error);
        setMsg("Error: File not uploaded");
      });
  };
  


  return (<>
                <AdminNavigation/>
      <div className="col-12">
        <label className="form-label">Upload File</label>
        <input className="form-control form-control-lg" type="file" onChange={(e) => setFile(e.target.files[0])}/>
      </div>
       
    <button type="button" className="btn btn-primary btn-lg" onClick={upload} style={{marginTop: '20px'}}>Upload</button>
    <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{msg}</h1>
 
  

  </>)
}
  export default AddNews;
