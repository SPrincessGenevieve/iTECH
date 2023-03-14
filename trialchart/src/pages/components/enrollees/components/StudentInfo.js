import React from 'react';
import MaterialTable from '@material-table/core';
import CheckBoxes from '../../enroll/finalForm/components/CheckBoxes';
import { useState, useEffect  } from 'react';
import axios from 'axios';
import InputBoxFinal from '../../enroll/finalForm/components/InputBoxFinal';
import SelectionForm from '../../enroll/finalForm/components/Selection';
import Religion from './../../json/religion.json'
import Gender from './../../json/gender.json'
import YearLevel from './../../json/YearLevel.json'
import Status from './../../json/status.json'
import { Button } from '@mui/material';


function StudentInfo(props) {
    const [data, setData] = useState([]);
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

    useEffect(() => {
        fetch("http://localhost:3000/posts") // replace with your JSON Server endpoint
          .then((response) => response.json())
          .then((json) => setData(json));
      }, []);
       
    return (
        <div>
            {show ? 
            <form>
            <div>
                <div>
                    <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                        <div><InputBoxFinal disabled label="Last name"/></div>
                        <div><InputBoxFinal disabled label="First name"/> </div>    
                    </div>
                    <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                        <div><InputBoxFinal disabled label="Middle Name"/></div>
                        <div><InputBoxFinal disabled label="Email Address"/></div>
                    </div>
                    <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                        <div><InputBoxFinal disabled label="Birthday" id="date" type="date" InputLabelProps={{shrink: true}}/></div>
                        <div><InputBoxFinal disabled label="Address"/></div>
                    </div>

                    <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                        <div><InputBoxFinal disabled label="Permanent Address"/></div>
                        <div><InputBoxFinal disabled label="Postal Code"/></div>
                    </div>
                    
                    <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                        <div><InputBoxFinal disabled type="number" label="Contact Number"/></div>
                        <div><SelectionForm disabled label="Religion" Label="Religion" data={Religion}/></div>
                    </div>
                    
                    <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                        <div><SelectionForm disabled label="Gender" Label="Gender" data={Gender}/></div>
                        <div style={{marginLeft:10}}>
                            <SelectionForm disabled label="Status" Label="Status" data={Status}></SelectionForm>
                        </div>
                    </div>
                </div>
            </div>
          </form>
            :
            <form>
                <div>
                    <div>
                        <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                            <div><InputBoxFinal label="Last name"/></div>
                            <div><InputBoxFinal label="First name"/> </div>    
                        </div>
                        <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                            <div><InputBoxFinal label="Middle Name"/></div>
                            <div><InputBoxFinal label="Email Address"/></div>
                        </div>
                        <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                            <div><InputBoxFinal label="Birthday" id="date" type="date" InputLabelProps={{shrink: true}}/></div>
                            <div><InputBoxFinal label="Address"/></div>
                        </div>

                        <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                            <div><InputBoxFinal label="Permanent Address"/></div>
                            <div><InputBoxFinal label="Postal Code"/></div>
                        </div>
                        
                        <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                            <div><InputBoxFinal type="number" label="Contact Number"/></div>
                            <div><SelectionForm label="Religion" Label="Religion" data={Religion}/></div>
                        </div>
                        
                        <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                            <div><SelectionForm label="Gender" Label="Gender" data={Gender}/></div>
                            <div style={{marginLeft:10}}>
                                <SelectionForm label="Status" Label="Status" data={Status}></SelectionForm>
                            </div>
                        </div>
                    </div>
                </div>
              </form>

            }
            
              <div>
              {show && <Button onClick={handleClick} variant='contained'>EDIT</Button>}
              
              {!show && <Button onClick={handleSaveClick} variant='contained'>SAVE</Button>}
            </div>
        </div>
    );
}

export default StudentInfo;