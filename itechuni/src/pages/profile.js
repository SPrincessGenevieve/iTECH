import Navbar from '../Navbar';
import React from 'react';
  
const Profiles = () => {
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
      <h1>Profiles</h1>
    </div>
    </>
  );
};
  
export default Profiles;