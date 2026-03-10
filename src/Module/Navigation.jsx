import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import  Offcanvas  from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom';
// import LoginForm from '../Module/Navigation';
// import { Routes, Route } from 'react-router-dom';
function Navigation() {

  
  return (
    <>

<div className="bg-dark text-center">
<marquee scrollamount="10" direction="left" onmouseover="stop()" onmouseout="start()">
    <span style={{ fontSize: '40px', color: 'orange', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
      श्री हनुमान व्यायाम प्रसारक मंडळ
    </span>
  </marquee>
</div>


      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Brand href="/">श्री हनुमान V.P.M Sport Club</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          
            <Nav.Link href="/Gallery">Gallery</Nav.Link>
            <Nav.Link href="/News">News</Nav.Link>
            <NavDropdown title="AffilatedClub" bg="dark" id={`offcanvasNavbarDropdown-expand`}>
              <NavDropdown.Item href="/RuleFact">Rules and fact Sheet for Affiliated Member</NavDropdown.Item>
              <NavDropdown.Divider /> </NavDropdown>
            
              <Nav.Link href="/Facility">Facility</Nav.Link>
            <Nav.Link href="/ContactUs">ContactUs</Nav.Link>
            <Nav.Link href="/History">History</Nav.Link>
            <NavDropdown title="Sport" bg="dark" id={`offcanvasNavbarDropdown-expand`}>
              <NavDropdown.Item href="/Basketball">Basketball </NavDropdown.Item>
              <NavDropdown.Item href="/Badmonton"> Badminton  </NavDropdown.Item>
              <NavDropdown.Item href="/Cricket"> Cricket & Athletics </NavDropdown.Item>
              <NavDropdown.Item href="/Gymnasium"> Gymnasium  </NavDropdown.Item>
              <NavDropdown.Item href="/Swiming"> Swiming  </NavDropdown.Item>
              <NavDropdown.Item href="/VolleyBall"> VolleyBall  </NavDropdown.Item>
              <NavDropdown.Item href="/Jogging"> Jogging Track</NavDropdown.Item></NavDropdown>
            <Nav.Link href="/Membership">Membership</Nav.Link>
            <Nav.Link href="/LoginForm">Admin</Nav.Link>

          


            

          </Nav>
 </Navbar.Collapse>
      </Navbar>

      


    </>
  );
}

export default Navigation;