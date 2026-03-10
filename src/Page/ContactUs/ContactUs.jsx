import React from "react";
import Navigation from "../../Module/Navigation";
import FormComponent from "../../FormComponent";
import Footer from "../../Module/Footer";

function ContactUs(){
    return(<>
    <Navigation/>
    <h3 style={{textAlign : 'center',fontSize: '24px' ,color: '#333' ,marginTop: '20px'}}>Get It Now</h3>
    <FormComponent/>
  <Footer/>  </>)
}
export default ContactUs;