import { Button} from '@mui/material';
import React, { useState } from 'react';
import ParentInfo from './finalForm/ParentInfo.js'
import SchoolAttended from './../enroll/finalForm/SchoolAttended.js';
import FormDetail from './finalForm/FormDetail.js';
import PropsBtn from './PropsBtn'
import { FaArrowCircleRight } from "react-icons/fa";
import FormEnroll from './FormEnroll.js';

function FinalForm({onClick}) {
    const [value, setValue] = React.useState();
    const [show, setShow] =useState(false);

    const handleChange = ({newValue}) => {
        setValue(newValue);
      };
    
    return (
        <div>
            {show ? (
                <>
                <div style={{backgroundColor:"black", height: "155rem", width:"100%", display:"flex", position:"absolute", zIndex: 6, marginTop: -60, opacity: 0.5}}></div>
                <div style={{position:"fixed", display:"flex", zIndex: 6}}>
                    <FormEnroll  onClick={() =>setShow(!show)} clickConfirm={() =>setShow(!show)}></FormEnroll>
                </div>
                </>
            ) : null}
            

            
            <div>
            
            <div id='outer' className='outer' 
            style= {{
                    backgroundColor:"white",  
                    zIndex: 2,
                    width: "100%",
                    height: "150rem",
                    position:"absolute",
                    paddingLeft: 200,
                    }}>
                        <div>
                            <FormDetail></FormDetail>
                            <ParentInfo title="Maternal Information" />
                            <ParentInfo title="Paternal Information" />
                            <div style={{marginLeft: 46, marginTop: 50}}>
                                <text style={{fontSize: 30}}>Schools Attended by the Applicant</text>
                            </div>
                            <div style={{display:"flex", flexDirection:"row", marginBottom: -20}}>
                                <SchoolAttended label1="School name" label2="Address" title="ELEMENTARY"></SchoolAttended>
                                <SchoolAttended label1="School name" label2="Address" title="JUNIOR HIGH SCHOOL"></SchoolAttended>
                            </div>
                            <div style={{display:"flex", flexDirection:"row"}}>
                                <SchoolAttended label1="School name" label2="Address" title="SENIOR JUNIOR HIGH SCHOOL"></SchoolAttended>
                                <SchoolAttended label1="School name" label2="Address" title="COLLEGE"></SchoolAttended>
                            </div>
                            <div style={{display:"flex", flexDirection:"row", marginLeft: "73rem"}}>
                                <PropsBtn onClick={onClick} backgroundColor='red' props="CANCEL"></PropsBtn>
                                <PropsBtn onClick={() =>setShow(!show)} backgroundColor='#00B050' props="PROCEED"></PropsBtn>
                            </div>
                            
                        </div>
                    </div>
            </div>
    </div>
    );
}


export default FinalForm;