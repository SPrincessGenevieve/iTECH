import Navbar from '../Navbar';
import React, { useState } from 'react';
import ChangeProfile from './components/profile/Changeprofile';
import './../pages/components/profile/Changeprofile.css'
import { Button } from '@mui/material';
import PropsCompile from './components/profile/PropsCompile';


const Profiles = () => {

  const [show, setShow] = useState(true)
  const [edit, setEdit] = useState(false)

  const handleClick = () =>{
    setEdit(true);
    setShow(false)
  }
  const handleSaveClick = () =>{
    setEdit(false);
    setShow(true)
  }

  return (
    <>
    <Navbar></Navbar>
    <div
      style={{
        display: 'flex',
        height: '100vh'
      }}
    >
      <div>
          <ChangeProfile/>
          </div>
          <div style={{marginLeft:"20rem", marginTop: "3.5rem", height:"40rem", width: "70rem"}}>
            <div style={{backgroundColor:"#39302A", padding: 10, color:"white"}}><h1>PROFILE INFORMATION</h1></div>
            
            
            {show ? 
            <>
            <PropsCompile disabled></PropsCompile>
            </>
            :
            <>
            <PropsCompile></PropsCompile>
            </>
            }
            
            
            <div style={{marginTop: 20, display:"flex", flexDirection:"row"}}>
              {show && <Button onClick={handleClick} variant='contained'>EDIT</Button>}
              
              {!show && <Button onClick={handleSaveClick} variant='contained'>SAVE</Button>}
              
            </div>
            
    

          </div>
    </div>
    </>
  );
};
  
export default Profiles;