import React from 'react';
import CheckBoxes from './components/CheckBoxes'
import InputBoxFinal from './components/InputBoxFinal';
import SelectionForm from './components/Selection'
import Religion from './../../json/religion.json'
import Gender from './../../json/gender.json'
import Status from './../../json/status.json'
import YearLevel from './../../json/YearLevel.json'
import registrationForm from './../../json/registrationForm.json'

function FormDetail({onChange, enrollnum, studnum, balance, year, lastname, firstname, middlename, email, bday, address, perAdd, postal, contact, religion, gender, status}) {
    

    return (
        <div style={{}}>
            <div  style={{display:"flex", flexDirection:"row", marginLeft: 50}}>
                <div><CheckBoxes label="PSA/NSO"></CheckBoxes></div>
                <div><CheckBoxes label="Form 138/ Report Card"></CheckBoxes></div>
                <div><CheckBoxes label="TOR"></CheckBoxes></div>
                <div><CheckBoxes label="COR/ Previous School ID"></CheckBoxes></div>
                <div><CheckBoxes label="2x2 Picture"></CheckBoxes></div>
            </div>

            <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div><InputBoxFinal name="enrollNo" value={enrollnum} onChange={onChange} label="Enrollment No."/></div>
                <div><InputBoxFinal name="studNo" value={studnum} onChange={onChange} label="Student No."/> </div>    
            </div>

            <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div><InputBoxFinal name="balance" value={balance} onChange={onChange} type="number" label="Balance"/></div>
                <div><SelectionForm name="year" value={year} onChange={onChange} label="Year Level" Label="Year Level" data={YearLevel}></SelectionForm></div>
            </div>
            
            <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div><InputBoxFinal name="lastname" value={lastname} onChange={onChange} label="Last name"/></div>
                <div><InputBoxFinal name="firstname" value={firstname} onChange={onChange} label="First name"/> </div>    
            </div>
            
            <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div><InputBoxFinal name="middlename" value={middlename} onChange={onChange} label="Middle Name"/></div>
                <div><InputBoxFinal name="email" value={email} onChange={onChange} label="Email Address"/></div>
            </div>
                                
            <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div><InputBoxFinal name="bday" value={bday} onChange={onChange} label="Birthday" id="date" type="date" InputLabelProps={{shrink: true}}/></div>
                <div><InputBoxFinal name="address" value={address} onChange={onChange} label="Address"/></div>
            </div>

            <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div><InputBoxFinal name="perAdd" value={perAdd} onChange={onChange} label="Permanent Address"/></div>
                <div><InputBoxFinal name="postalcode" value={postal} onChange={onChange} label="Postal Code"/></div>
            </div>
             
             <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div><InputBoxFinal name="contactno" value={contact} onChange={onChange} type="number" label="Contact Number"/></div>
                <div><SelectionForm name="religion" value={religion} onChange={onChange} label="Religion" Label="Religion" data={Religion}/></div>
            </div>
            
            <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div><SelectionForm name="gender" value={gender} onChange={onChange} label="Gender" Label="Gender" data={Gender}/></div>
                <div style={{marginLeft:10}}><SelectionForm name="status" value={status} onChange={onChange} label="Status" Label="Status" data={Status}></SelectionForm></div>
            </div>
        </div>
    );
}

export default FormDetail;