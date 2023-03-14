import React from 'react';
import SchoolAttended from '../../enroll/finalForm/SchoolAttended';
import { useState, useEffect  } from 'react';
import { Button } from '@mui/material';
function SchoolInfo(props) {
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
        fetch("http://localhost:3000/enrolled") // replace with your JSON Server endpoint
          .then((response) => response.json())
          .then((json) => setData(json));
      }, []);
    return (
        <div>
            
            {show ? 
            <>
            <div style={{display:"flex", flexDirection:"row", marginBottom: -20}}>
                <SchoolAttended disabled label1="School name" label2="Address" title="ELEMENTARY"></SchoolAttended>
                <SchoolAttended disabled label1="School name" label2="Address" title="JUNIOR HIGH SCHOOL"></SchoolAttended>
            </div>
            <div style={{display:"flex", flexDirection:"row"}}>
                <SchoolAttended disabled label1="School name" label2="Address" title="SENIOR JUNIOR HIGH SCHOOL"></SchoolAttended>
                <SchoolAttended disabled label1="School name" label2="Address" title="COLLEGE"></SchoolAttended>
            </div>
            </>
            :
            <>
            <div style={{display:"flex", flexDirection:"row", marginBottom: -20}}>
                <SchoolAttended label1="School name" label2="Address" title="ELEMENTARY"></SchoolAttended>
                <SchoolAttended label1="School name" label2="Address" title="JUNIOR HIGH SCHOOL"></SchoolAttended>
            </div>
            <div style={{display:"flex", flexDirection:"row"}}>
                <SchoolAttended label1="School name" label2="Address" title="SENIOR JUNIOR HIGH SCHOOL"></SchoolAttended>
                <SchoolAttended label1="School name" label2="Address" title="COLLEGE"></SchoolAttended>
            </div>
            </>
            }
            <div>
              {show && <Button onClick={handleClick} variant='contained'>EDIT</Button>}
              
              {!show && <Button onClick={handleSaveClick} variant='contained'>SAVE</Button>}
            </div>
        </div>
    );
}

export default SchoolInfo;