import { width } from '@mui/system';
import React from 'react';
import Navbar from '../Navbar';
import './../pages/profile.css';
import Edit from './../pages/Edit.js';
import ChangeProfile from './../pages/Changeprofile.js'

  
function Profiles() {
  return (
    <>
    <Navbar></Navbar>
    
    <div className='Prof-Info'>
      <h1>PROFILE INFORMATION</h1>
      <div>
          <ChangeProfile/>
          </div>
    </div>
    <div>
    <form>
      <div className='input-form'>
        <div className='input-name'>
          <h1>First Name</h1>
            <input  className='input-style' type='text' id='name' placeholder='Firstname'></input>
            </div>
            <div className='input-name'>
          <h1>Lastname</h1>
            <input  className='input-style' type='text' id='name' placeholder='Lastname'></input>
            </div>
            <div className='input-name'>
          <h1>Suffix</h1>
            <input  className='input-style' type='text' id='name' placeholder='Suffix'></input>
            </div>
          </div>
          <div className='input-form'>
          <div className='input-name'>
          <h1>Username</h1>
            <input  className='input-style' type='text' id='name' placeholder='Username'></input>
            </div>
            <div className='input-name'>
          <h1>Password</h1>
            <input type="password" class="form-control" placeholder='Password'></input>
            </div>
            <div className='input-name'>
          <h1>Confirm Password</h1>
            <input type="password" class="form-control" placeholder='Confirm Password'></input>
            </div>
          </div>
          <div className='input-form'>
              <div className='input-name'>
                <h1>Email Address</h1>
                <input className='input-address' type='text' id='name' placeholder='@gmail'></input>
              </div>
            </div>
            <div className='input-form'>
              <div className='input-name'>
                <h1>Contact Number</h1>
                <input className='input-number' type='text' id='name' placeholder='Number'></input>
              </div>
            </div>
            <div className='input-form'>
              <div className='input-name'>
                <h1>Pemanent Address</h1>
                <input className='input-add' type='text' id='name' placeholder='Address'></input>
              </div>
            </div>
            <div className='input-form'>
          <div className='input-name'>
          <h1>Region</h1>
            <input  className='input-style' type='text' id='name' placeholder='Region'></input>
            </div>
            <div className='input-name'>
          <h1>City/Province</h1>
            <input  className='input-style' type='text' id='name' placeholder='City/Province'></input>
            </div>
          </div>
          <div className='input-form'>
          <div className='input-name'>
          <h1>Barangay</h1>
            <input  className='input-style' type='text' id='name' placeholder='Barangay'></input>
            </div>
            <div className='input-name'>
          <h1>Zip Code</h1>
            <input  className='input-style' type='text' id='name' placeholder='Zip Code'></input>
            </div>
          </div>
          <div classname = 'button-edit'>
            <button Variant ='contained' as = "input" type = 'button' className='btn-edit'>
            <text className='button-text'>
              EDIT
            </text>
            </button>
          </div>
          <div classname = 'button-edit'>
            <button Variant ='contained' as = "input" type = 'button' className='btn-edit'>
            <text className='button-text'>
              SAVE
            </text>
            </button>
          </div>
    </form>
    </div>
    
    
    </>
  );
};
  
export default Profiles;