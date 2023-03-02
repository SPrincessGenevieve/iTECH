import Navbar from '../Navbar';
import React from 'react';
import Form from './components/enroll/form';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';







const Enroll = () => {


  return (
    <>
    <Navbar></Navbar>
    <div>
      
      <div
        style={{
          display: 'flex',
          fontSize: 30,
          paddingLeft: 10,
          backgroundColor:'#39302A',
          padding: 5,
          paddingBottom: 10,
          color:"white"
        }}>College Enrollment Form
        
      </div>
      <div style={{height: "100%", width:"100%", display:"flex", position:"absolute", alignItems:"center"}}>
          <img className='mini' style=
            {{
              opacity: 0.1,
              width: "100%",
              Maxwidth:"100%",
              display:"flex",
            }} src={require('./../Images/logoLarge.png')} />
        </div>
      
      <div>
        
        <div style={{padding: 10, marginLeft:"80%", marginBottom: -60}}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="SearchStud" label="search student" variant="standard" />
          </Box>
        </div>

        <div>
          <Form ></Form>
        </div>
      </div>
      
    </div></>
  );
};
  
export default Enroll;