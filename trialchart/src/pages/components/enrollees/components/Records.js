import './../../../../App.css'
import MaterialTable from '@material-table/core';
import React from 'react';
import { useState, useEffect  } from 'react';
import CheckBoxes from './../../enroll/finalForm/components/CheckBoxes'
import axios from 'axios';
import ParentsInfo from './ParentsInfo.js'
import { Button } from '@mui/material';
import StudentInfo from './StudentInfo';
import SubjectEnrolled from './SubjectEnrolled';
import SchoolInfo from './SchoolInfo';

function Records({ label, key, onChange, checked }) {
  const [data, setData] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const [activeTab, setActiveTab] = React.useState('student');

  const handleButtonClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    fetch("http://localhost:3000/posts") // replace with your JSON Server endpoint
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);



  const columns = [
    { title: "Enrollment No.", field: "enrollno"},
    { title: "Student No.", field: "studno" },
    { title: "Last name", field: "lastname" },
    { title: "First name", field: "firstname" },
    { title: "Year Level", field: "year" },
    { title: "Balance", field: "balance" },

  ]

  const subcolumns = [
    { title: "Last name", field: "Mlastname" },
    { title: "First name", field: "Mfirstname" },
    { title: "Age", field: "Mage" },
    { title: "Educational Attainment", field: "MeducAttain" },
    { title: "Address", field: "Maddres" },
    { title: "Average Income", field: "Mincome" },

  ]



  return (
    <div className="App">

      <MaterialTable
        className="violationTable"
        columns={columns}
        data={data}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
                
                resolve();
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
  
                resolve();
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                
                resolve()
              }, 1000)
            }),
        }}
        options={{
          exportButton: true,
          showTitle: false,
          exportAllData: true,
          exportFileName: "ENROLLMENT RECORDS",
          pageSizeOptions: [5, 10, 20, 25, 50, 100],
          pageSize: 7,
          paginationPosition: "both",
          actionsColumnIndex: -1,
        }}
        detailPanel={rowData =>{
          return(
            <>
            <div style={{marginRight: 10}}>
              
              <Button variant='contained' onClick={() => handleButtonClick('student')} sx={{marginRight: 2}}>STUDENT INFORMATION</Button>
              <Button variant='contained' onClick={() => handleButtonClick('subject')} sx={{marginRight: 2}}>SUBJECTS ENROLLED</Button>
              <Button variant='contained' onClick={() => handleButtonClick('parents')} sx={{marginRight: 2}}>PARENT INFORMATION</Button>
              <Button variant='contained' onClick={() => handleButtonClick('school')} >SCHOOL ATTENDED</Button>
            </div>

            {activeTab === 'student' && (
              <StudentInfo></StudentInfo>
            )}
            
            {activeTab === 'parents' && (
              <ParentsInfo></ParentsInfo>
            )}
            {activeTab === 'subject' && (
              <SubjectEnrolled></SubjectEnrolled>
            )}

            {activeTab === 'school' && (
              <SchoolInfo></SchoolInfo>
            )}
                </>
              )
            }}
      >
      </MaterialTable>
    </div>
  );
}


export default Records;
