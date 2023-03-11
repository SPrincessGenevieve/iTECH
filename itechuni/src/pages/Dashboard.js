import Navbar from '../Navbar';
import React from 'react';
import './components/dashboard/dashboard.css'
import Container from './components/dashboard/Container';

const Dashboard = () => {
  return (
    <>
      <Navbar></Navbar>
      <div style={{ backgroundColor: "#EBECF0", width: "96%", height: 10, padding: "20%", margin: 40, borderRadius: 20 }} >
        <div style={{ display: "flex", flexDirection: "row", marginTop: "-20.5rem", marginLeft: "-20.5rem" }}>
          <div><Container title="Total Students Enrolled"></Container></div>

        </div>
        <div style={{ display: "flex", flexDirection: "row", marginTop: "3rem", marginLeft: "-20.5rem" }}>
          <div><Container title="1ST Year"></Container></div>
          <div><Container title="2ND YEAR"></Container></div>
          <div><Container title="3RD YEAR"></Container></div>
          <div><Container title="4TH YEAR"></Container></div>
        </div>

      </div>
    </>
  );
};

export default Dashboard;