import Navbar from '../Navbar';
import React from 'react';
import './components/dashboard/dashboard.css'
import Container from './components/dashboard/Container';
import Chart from './components/dashboard/Chart';

const Dashboard = () => {
  return (
    <>
      <Navbar></Navbar>
      <div style={{ backgroundColor: "#EBECF0", width: "96%", height: 10, padding: "20%", margin: 40, borderRadius: 20 }} >
        <div style={{ display: "flex", flexDirection: "row", marginTop: "-20.5rem", marginLeft: "-20.5rem" }}>
          <div><Container amount="1620" title="Total Students Enrolled"></Container></div>
          <Chart></Chart>

        </div>
        <div style={{ display: "flex", flexDirection: "row", marginTop: "3rem", marginLeft: "-20.5rem" }}>
          <div><Container amount="575" title="1ST Year"></Container></div>
          <div><Container amount="430" title="2ND YEAR"></Container></div>
          <div><Container amount="365" title="3RD YEAR"></Container></div>
          <div><Container amount="250" title="4TH YEAR"></Container></div>
        </div>

      </div>
    </>
  );
};

export default Dashboard;