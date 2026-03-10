import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import  Offcanvas  from 'react-bootstrap/Offcanvas';
// import NavDropdown from 'react-bootstrap/NavDropdown';
function AdminNavigation() {
  return (<>  
  

  <div style={{ backgroundColor: 'black', width: '100%', overflow: 'hidden' }}>
        <marquee scrollamount="4" direction="left">
          <span style={{ fontSize: '40px', color: 'orange', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
            श्री हनुमान व्यायाम प्रसारक मंडळ
          </span>
        </marquee>
      </div>
  <Navbar collapseOnSelect expand="sm" bg="black" variant="dark">
        <Navbar.Brand href="/">श्री हनुमान V.P.M Sport Club</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="/AdminHome">Home</Nav.Link>
            <Nav.Link href="/MessageData"> Message Requests</Nav.Link>
            {/* <Nav.Link href="/AddNews">Add News</Nav.Link> */}
            <Nav.Link href="/AddFacility"> Add Facilities</Nav.Link>
            <Nav.Link href="/LoginForm">Logout</Nav.Link>

            

          


            

          </Nav>
 </Navbar.Collapse>
      </Navbar>

      


  </>  )
}

export default AdminNavigation
