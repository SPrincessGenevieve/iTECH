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
        axios.get('http://localhost:3000/posts')
          .then(response => setData(response.data))
          .catch(error => console.log(error));
      }, []);

      
       
    return (
        <div style={{marginLeft: "13rem"}}>
            {data.map(item =>(

                <>
                {show ? 
            
            <form>
            <div>
                <div>
                    <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                        <div><InputBoxFinal focused value={item.lastname} disabled label="Last name"/></div>
                        <div><InputBoxFinal focused value={item.firstname} disabled label="First name"/> </div>    
                    </div>
                    <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                        <div><InputBoxFinal focused value={item.middlename} disabled label="Middle Name"/></div>
                        <div><InputBoxFinal focused value={item.email} disabled label="Email Address"/></div>
                    </div>
                    <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                        <div><InputBoxFinal focused value={item.bday} disabled label="Birthday" id="date" type="date" InputLabelProps={{shrink: true}}/></div>
                        <div><InputBoxFinal focused value={item.address} disabled label="Address"/></div>
                    </div>

                    <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                        <div><InputBoxFinal focused value={item.perAdd} disabled label="Permanent Address"/></div>
                        <div><InputBoxFinal focused value={item.postalcode} disabled label="Postal Code"/></div>
                    </div>
                    
                    <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                        <div><InputBoxFinal focused value={item.contactno} disabled type="number" label="Contact Number"/></div>
                        <div><SelectionForm focused value={item.religion} disabled label="Religion" Label="Religion" data={Religion}/></div>
                    </div>
                    
                    <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                        <div><SelectionForm focused value={item.gender} disabled label="Gender" Label="Gender" data={Gender}/></div>
                        <div style={{marginLeft:10}}>
                            <SelectionForm focused value={item.status} disabled label="Status" Label="Status" data={Status}></SelectionForm>
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
                            <div><InputBoxFinal focused label="Last name"/></div>
                            <div><InputBoxFinal focused label="First name"/> </div>    
                        </div>
                        <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                            <div><InputBoxFinal focused label="Middle Name"/></div>
                            <div><InputBoxFinal focused label="Email Address"/></div>
                        </div>
                        <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                            <div><InputBoxFinal focused label="Birthday" id="date" type="date" InputLabelProps={{shrink: true}}/></div>
                            <div><InputBoxFinal focused label="Address"/></div>
                        </div>

                        <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                            <div><InputBoxFinal focused label="Permanent Address"/></div>
                            <div><InputBoxFinal focused label="Postal Code"/></div>
                        </div>
                        
                        <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                            <div><InputBoxFinal focused type="number" label="Contact Number"/></div>
                            <div><SelectionForm focused label="Religion" Label="Religion" data={Religion}/></div>
                        </div>
                        
                        <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                            <div><SelectionForm focused label="Gender" Label="Gender" data={Gender}/></div>
                            <div style={{marginLeft:10}}>
                                <SelectionForm focused label="Status" Label="Status" data={Status}></SelectionForm>
                            </div>
                        </div>
                    </div>
                </div>
              </form>

            }
                </>


            ))}


            
            
              <div>
              {show && <Button onClick={handleClick} variant='contained' style={{width: "15rem", margin: 50}}>EDIT</Button>}
              
              {!show && <Button onClick={handleSaveClick} variant='contained' style={{width: "15rem", margin: 50}}>SAVE</Button>}
            </div>
        </div>
    );
}

export default StudentInfo;