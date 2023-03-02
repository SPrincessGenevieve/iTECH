import React from 'react';
import CheckBoxes from './components/CheckBoxes'
import InputBoxFinal from './components/InputBoxFinal';
import SelectionForm from './components/Selection'
import Religion from './../../json/religion.json'
import Gender from './../../json/gender.json'
import Status from './../../json/status.json'
function FormDetail(props) {
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
                <div><InputBoxFinal label="Last name"></InputBoxFinal></div>
                <div><InputBoxFinal label="First name"></InputBoxFinal> </div>    
            </div>
            
            <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div><InputBoxFinal label="Middle Name"></InputBoxFinal></div>
                <div><InputBoxFinal label="Email Address"></InputBoxFinal></div>
            </div>
                                
            <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div><InputBoxFinal label="Birthday" id="date" type="date" InputLabelProps={{shrink: true}}></InputBoxFinal></div>
                <div><InputBoxFinal label="Address"></InputBoxFinal></div>
            </div>

            <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div><InputBoxFinal label="Permanent Address"></InputBoxFinal></div>
                <div><InputBoxFinal label="Postal Code"></InputBoxFinal></div>
            </div>
             
             <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div><InputBoxFinal type="number" label="Contact Number"></InputBoxFinal></div>
                <div><SelectionForm label="Religion" Label="Religion" data={Religion}></SelectionForm></div>
            </div>
            
            <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div><SelectionForm label="Gender" Label="Gender" data={Gender}></SelectionForm></div>
                <div style={{marginLeft:10}}><SelectionForm label="Status" Label="Status" data={Status}></SelectionForm></div>
            </div>
        </div>
    );
}

export default FormDetail;