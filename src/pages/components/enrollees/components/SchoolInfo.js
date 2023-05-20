import React from 'react';
import SchoolAttended from '../../enroll/finalForm/SchoolAttended';
import { useState, useEffect  } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';


function SchoolInfo({schoolAddressElemAdd, schoolAddressElemName, schoolAddressJuniorAdd, schoolNameJuniorName, schoolNameSeniorName, schoolAddressSeniorAdd, schoolNameCollageName, schoolAddressCollegeAdd}) {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(true)
    const [edit, setEdit] = useState(false)
    const [updatedData, setUpdatedData] = useState([]);
    const specificId = 1;

    const handleEdit = (field, value) => {
        setUpdatedData((prevState) => ({
          ...prevState,
          [field]: value,
        }));
      };

    const handleClick = () =>{
        setEdit(true);
        setShow(false);
    }
    const handleSaveClick = () =>{
        setEdit(false);
        setShow(true)
        axios
        .put('http://localhost:3000/posts', updatedData)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
    }

    useEffect(() => {
        axios
        .get('http://localhost:3000/posts')
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));
    }, []);

    const filteredData = data.filter(item => item.id === specificId);


    return (
        <div style={{marginLeft: "13rem"}}>

            {filteredData.map(item =>(
                <>
                {show ? 
                <>
                <div style={{display:"flex", flexDirection:"row", marginBottom: -20}}>
                    <SchoolAttended 
                    disabled 
                    schoolAddress={schoolAddressElemAdd} 
                    schoolName={schoolAddressElemName} 
                    label1="School name" 
                    label2="Address" 
                    title="ELEMENTARY"
                   
                    
                    ></SchoolAttended>
                    <SchoolAttended 
                    disabled 
                    schoolAddress={schoolAddressJuniorAdd} 
                    schoolName={schoolNameJuniorName} 
                    label1="School name" 
                    label2="Address" 
                    title="JUNIOR HIGH SCHOOL" 
                    
                    ></SchoolAttended>
                </div>
                <div style={{display:"flex", flexDirection:"row"}}>
                    <SchoolAttended 
                    disabled schoolName={schoolNameSeniorName} 
                    schoolAddress={schoolAddressSeniorAdd} 
                    label1="School name" 
                    label2="Address" 
                    title="SENIOR JUNIOR HIGH SCHOOL"
                   
                    ></SchoolAttended>
                    <SchoolAttended 
                    disabled 
                    schoolName={schoolNameCollageName} 
                    schoolAddress={schoolAddressCollegeAdd} 
                    label1="School name" 
                    label2="Address" 
                    title="COLLEGE"
                    
                    ></SchoolAttended>
                </div>
                </>
                :
                <>
                <div style={{display:"flex", flexDirection:"row", marginBottom: -20}}>
                    <SchoolAttended 
                    schoolAddress={schoolAddressElemAdd} 
                    schoolName={schoolAddressElemName} 
                    label1="School name" 
                    label2="Address" 
                    title="ELEMENTARY"
                    
                    ></SchoolAttended>
                    <SchoolAttended 
                    schoolAddress={schoolAddressJuniorAdd} 
                    schoolName={schoolNameJuniorName} 
                    label1="School name" 
                    label2="Address" 
                    title="JUNIOR HIGH SCHOOL"
                    
                    ></SchoolAttended>
                </div>
                <div style={{display:"flex", flexDirection:"row"}}>
                    <SchoolAttended 
                    schoolName={schoolNameSeniorName} 
                    schoolAddress={schoolAddressSeniorAdd} 
                    label1="School name" 
                    label2="Address" 
                    title="SENIOR JUNIOR HIGH SCHOOL"
                    
                    ></SchoolAttended>
                    <SchoolAttended 
                    schoolName={schoolNameCollageName} 
                    schoolAddress={schoolAddressCollegeAdd} 
                    label1="School name" 
                    label2="Address" 
                    title="COLLEGE"
                    
                    ></SchoolAttended>
                </div>
                </>
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

export default SchoolInfo;