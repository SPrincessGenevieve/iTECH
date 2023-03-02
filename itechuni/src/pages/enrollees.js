import Navbar from '../Navbar';
import React from 'react';
  
const Enrollees = () => {
  return (
    <>
    <Navbar></Navbar>
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1>Enrollees</h1>
    </div>
    </>
  );
};
  
export default Enrollees;