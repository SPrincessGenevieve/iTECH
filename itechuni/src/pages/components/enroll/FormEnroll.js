import { Button, Input, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SelectionSub from './FormEnroll/SelectionSub';
import FacultyText from './FormEnroll/FacultyText';
import OwnTable from './FormEnroll/OwnTable';
import facultyData from './../json/facultyJSON.json'
import subData from './../json/subjects.json'
import schedData from './../json/schedJSON.json'
import PropsBtn from './PropsBtn';
import Confirm from './Confirm';

function FormEnroll({onClick, clickConfirm}) {
    const [show, setShow] = useState(false)

    return (

        <div>
            {show ? (<>
                <Confirm onClick={clickConfirm}></Confirm>
            <div style={{backgroundColor:"black",  width: "100%", height: '70rem'}}></div></>
            ) : null}
            

            <div style={{backgroundColor:"black", position:'absolute', display:'flex', width: "100%", height: '70rem', opacity: 0.6, marginTop: -50, marginBottom: 60, zIndex: 2,}}></div>
                <div id='outer' className='outer' style= {{borderRadius: 20, backgroundColor:"white",  position:"fixed", display:"flex", width: "50%", height: "80%", zIndex: 2, marginTop:"-2%", marginLeft:"25%", marginRight:"25%"}}> 
                    <div className='inner' style= {{ backgroundColor:"white", position:"fixed", display:"flex", width: "47.5%", height: "75%", margin: 25, zIndex: 2 }}>
                        <div>
                            <Button onClick={onClick}>CLOSE</Button>
                        </div>
                        <div>
                            <div style={{position:"fixed", marginTop: 50, marginLeft: 50}}>
                                <FacultyText title="SUBJECT"></FacultyText>
                                <FacultyText title="FACULTY"></FacultyText>
                                <FacultyText title="SCHEDULE"></FacultyText>
                            </div>
                            <div>
                                <SelectionSub  name="subject"  className="subject" options={subData} title="Subject" ></SelectionSub>
                                <SelectionSub  name="faculty"  className="faculty" options={facultyData} title="Faculty"></SelectionSub>
                                <SelectionSub  name="schedule" className="sched"   options={schedData} title="Schedule"></SelectionSub>
                            </div>
                            <div style={{display:"flex", position:"fixed", marginTop: 50, marginLeft: "44.5rem"}}>
                                <Button variant='contained'>Add</Button>
                            </div>
                            <div style={{display:"flex", position:"fixed", marginLeft: "-1.5rem"}}>
                                <OwnTable></OwnTable>
                                <div style={{marginTop: "25rem", marginLeft: "20rem"}}>
                                    <PropsBtn onClick={() => setShow(!show)} props="ENROLL STUDENT"></PropsBtn>
                                </div>
                            </div>
                            
                            
                        </div>  
                    </div>
                </div>
        </div>
    );
}


export default FormEnroll;