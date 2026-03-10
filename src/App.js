import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Home from './Page/Home/Home';
import Sport from './Page/Sport/Sport';
import BasketBall from './Page/Sport/Pages/BasketBall';
import RuleFact from './Page/AffilatedClub/RuleFact';
import ContactUs from './Page/ContactUs/ContactUs';

import Gallery from './Page/Gallery/Gallery';
import News from './Page/News/News';
import Facility from './Page/Facility/Facility';
import Badmonton from './Page/Sport/Pages/Badminton';

import Swiming from './Page/Sport/Pages/Swiming';
import VolleyBall from './Page/Sport/Pages/VolleyBall';
import Cricket from './Page/Sport/Pages/Cricket';
import Jogging from './Page/Sport/Pages/Jogging';
// import GuestRoom from './Page/Facility/pages/GuestRoom';
// import BanquetHall from './Page/Facility/pages/BanquetHall';
// import TalimPationHall from './Page/Facility/pages/TalimPavitionHall';
// import ConferenceHall from './Page/Facility/pages/ConferenceHall';
import Membership from './Page/Membership/Membership';
import History from './Page/History/History';
import AdminHome from './Admin/Page/Home/AdminHome';
import AdminNavigation from './Admin/Page/AdminNavigation/AdminNavigation';
import LoginForm from './Admin/Page/LoginForm/LoginForm';
import MessageData from './Admin/Page/MessageData/MessageData';
import FormComonent from './FormComponent';
import AddFacility from './Admin/Page/AddFacility/AddFacility';
import AddNews from './Admin/Page/AddNews/AddNews';


function App() {
  return (
    <div>
      <Router>
        {/* All routes should be wrapped inside the Router component */}
        <Route exact path="/History" component={History} />
        <Route exact path="/RuleFact" component={RuleFact} />
        <Route exact path="/ContactUs" component={ContactUs} />
        
        <Route exact path="/Gallery" component={Gallery} />
        <Route exact path="/" component={Home} />
        <Route exact path="/News" component={News} />
        <Route exact path="/Facility" component={Facility} />
        <Route exact path="/Sport" component={Sport} />
        <Route exact path="/FormComonent" component={FormComonent} />
        {/* Sport */}
        <Route exact path="/Basketball" component={BasketBall} />
        <Route exact path="/Badmonton" component={Badmonton} />
        <Route exact path="/Cricket" component={Cricket} />
        <Route exact path="/Membership" component={Membership} />
        <Route exact path="/Swiming" component={Swiming} />
        <Route exact path="/VolleyBall" component={VolleyBall} />
        <Route exact path="/Jogging" component={Jogging} />
        {/* facility */}
     {/* Admin */}

        <Route exact path="/AdminHome" component={AdminHome} />
        <Route exact path="/AdminNavigation" component={AdminNavigation} />
        <Route exact path="/LoginForm" component={LoginForm} />
        <Route exact path="/MessageData" component={MessageData} />
        <Route exact path="/AddNews" component={AddNews} />
        <Route exact path="/AddFacility" component={AddFacility} />
      </Router>
    </div>
  );
}

export default App;
