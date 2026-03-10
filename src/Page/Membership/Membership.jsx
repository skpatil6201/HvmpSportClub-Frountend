import React from "react";
import Navigation from "../../Module/Navigation";
import Footer from "../../Module/Footer";
function Membership() {
  return (
    <>
      <Navigation />
      <br/>
      <table >
        <tbody style={{ borderStyle: "double", borderWidth: "2px", borderColor: "#000" , lineHeight: "2"}}>
          <tr style={{ borderStyle: "double", borderWidth: "2px", borderColor: "#000" }}>
            <td  style={{ borderStyle: "double", borderWidth: "2px", borderColor: "#000" }}>
              <div className="membership">
                <h2>1 Month Membership</h2>
                <ul>
                  <li>Access to all club facilities and amenities for 1 month.</li>
                  <li>Participation in club activities, classes, and events during the membership period.</li>
                  <li>Option to renew membership at the end of the month.</li>
                  
                </ul>
              </div>
            </td>
            <td>
              <div className="membership">
                <h2>3 Months Membership</h2>
                <ul>
                  <li>Access to all club facilities and amenities for 3 months.</li>
                  <li>Participation in club activities, classes, and events during the membership period.</li>
                  <li>Discounts on merchandise or additional services offered by the club.</li>
                  <li>Option to renew membership at the end of the 3-month period.</li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ borderStyle: "double", borderWidth: "2px", borderColor: "#000" }}>
              <div className="membership">
                <h2>1 Year Membership</h2>
                <ul>
                  <li>Access to all club facilities and amenities for 1 year.</li>
                  <li>Unlimited participation in club activities, classes, and events throughout the year.</li>
                  <li>Priority booking for facilities and classes.</li>
                  <li>Special discounts or promotions for annual members.</li>
                  <li>Option to pay in installments or upfront for the entire year.</li>
                </ul>
              </div>
            </td>
            <td>
              <div className="membership">
                <h2>5 Years Membership</h2>
                <ul>
                  <li>Access to all club facilities and amenities for 5 years.</li>
                  <li>Unlimited participation in club activities, classes, and events throughout the membership period.</li>
                  <li>Exclusive access to members-only events or facilities.</li>
                  <li>Guaranteed rates for the entire 5-year period, protecting against price increases.</li>
                  <li>Additional perks or benefits for long-term members, such as free guest passes or personalized training sessions.</li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <div className="container text-center">
      <a href="/ContactUs" className="btn btn-primary">JOINT OUT CLUB</a>
      </div>
   <Footer/> </>
  );
}

export default Membership;
