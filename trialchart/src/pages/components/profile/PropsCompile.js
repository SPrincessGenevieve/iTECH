import React, { useState } from 'react';
import InputLong from './InputLong';
import InputProfile from './InputProfile';


function PropsCompile({disabled, value}) {
    const [data, setData] = useState([
        {firstname : "Aarone"},
        {lastname : "Santos"},
        {suffix : ""},
        {username : "admin"},
        {password : "admin"},
        {confirmPass : "*****"},
        {email : "example@gmail.com"},
        {contact : "09072345654"},
        {Address : "Somewhere in CDO"},
        {Region : "Region X"},
        {City : "CDO"},
        {barangay : "Lapasan"},
        {zip : "9000"},
    ])
    return (
        <div>
            
                <>
                <div style={{display:"flex", flexDirection:"row"}}>
              <div style={{marginTop: 20, marginLeft:"-2.45rem", marginRight: 157}}>
                <InputProfile value={data[0].firstname} label="First name" disabled = {disabled}></InputProfile>
              </div>
              <div style={{marginTop: 20, marginLeft:"-2.45rem", marginRight: 157}}>
                <InputProfile value={data[1].lastname} label="Last name" disabled = {disabled}></InputProfile>
              </div>
              <div style={{marginTop: 20, marginLeft:"-2.45rem"}}>
                <InputProfile value={data[2].suffix} label="Suffix" disabled = {disabled}></InputProfile>
              </div>
              
            </div>

            <div style={{display:"flex", flexDirection:"row"}}>
              <div style={{marginTop: 20, marginLeft:"-2.45rem", marginRight: 157}}>
                <InputProfile value={data[3].username} label="Username" disabled = {disabled}></InputProfile>
              </div>
              <div style={{marginTop: 20, marginLeft:"-2.45rem", marginRight: 157}}>
                <InputProfile value={data[4].password} label="Password" type="password" disabled = {disabled}></InputProfile>
              </div>
              <div style={{marginTop: 20, marginLeft:"-2.45rem"}}>
                <InputProfile value={data[5].confirmPass} label="Confirm Password" type="password" disabled = {disabled}></InputProfile>
              </div>
            </div>


              <div style={{marginTop: 20, marginLeft:"-2.45rem", marginRight: 157}}>
                <InputLong value={data[6].email} label="Email Addresss" disabled = {disabled}></InputLong>
              </div>

              <div style={{display:"flex", flexDirection:"row"}}>
                <div style={{marginTop: 20, marginLeft:"-2.45rem", marginRight: 157}}>
                  <InputProfile value={data[7].contact} label="Contact no." disabled = {disabled}></InputProfile>
                </div>
                <div style={{marginTop: 20, marginLeft:"-2.45rem", marginRight: 157}}>
                  <InputProfile value={data[8].Address} label="Address" disabled = {disabled}></InputProfile>
                </div>
                <div style={{marginTop: 20, marginLeft:"-2.45rem"}}>
                  <InputProfile value={data[9].Region} label="Region" disabled = {disabled}></InputProfile>
                </div>
            </div>

            <div style={{display:"flex", flexDirection:"row"}}>
                <div style={{marginTop: 20, marginLeft:"-2.45rem", marginRight: 157}}>
                  <InputProfile value={data[10].City} label="City/Province" disabled = {disabled}></InputProfile>
                </div>
                <div style={{marginTop: 20, marginLeft:"-2.45rem", marginRight: 157}}>
                  <InputProfile value={data[11].barangay} label="Barangay" disabled = {disabled}></InputProfile>
                </div>
                <div style={{marginTop: 20, marginLeft:"-2.45rem"}}>
                  <InputProfile value={data[12].zip} label="Zipcode" disabled = {disabled}></InputProfile>
                </div>
            </div></>
            
        </div>
    );
}

export default PropsCompile;