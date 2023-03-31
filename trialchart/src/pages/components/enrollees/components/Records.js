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
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: '#3A302A !important',
      color:'white !important'
    },
  },
});


function Records({ label, key, onChange, checked }) {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState('student');
  const [selectTab, setSelectedTab] = useState('student')
  const classes = useStyles();
  const [selectedId, setSelectedId] = useState(null);

   const handleButtonClick = (tab, button) => {
    setActiveTab(tab);
  };

  const handleTabChange = (tabName) => {
    setSelectedTab(tabName);
  };


  useEffect(() => {
    fetch("http://localhost:3000/posts") // replace with your JSON Server endpoint
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  



  const columns = [
    { title: "Id", field: "id", key: "id"},
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

  const [selectedRowId, setSelectedRowId] = useState(null);
  
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
        onRowClick={(event, rowData) => {
          setSelectedRowId(rowData.id);
        }}
        detailPanel={(rowData) =>{
          return(
            <>
            <div style={{marginTop: 20}}>
              
              <Button className={classes.root} variant='contained' onClick={() => handleButtonClick('student')} sx={{backgroundColor: activeTab === "student" ? '#3A302A' : "white", color: activeTab === "student" ? 'white' : "#3A302A", borderRadius: 0, width: "29.2rem", border: 1, borderColor:"#3A302A", borderRight: 0}}>STUDENT INFORMATION</Button>
              <Button className={classes.root} variant='contained' onClick={() => handleButtonClick('subject')} sx={{backgroundColor: activeTab === "subject" ? '#3A302A' : "white", color: activeTab === "subject" ? 'white' : "#3A302A", borderRadius: 0, width: "29.2rem", border: 1, borderColor:"#3A302A", borderRight: 0}}>SUBJECTS ENROLLED</Button>
              <Button className={classes.root} variant='contained' onClick={() => handleButtonClick('parents')} sx={{backgroundColor: activeTab === "parents" ? '#3A302A' : "white", color: activeTab === "parents" ? 'white' : "#3A302A", borderRadius: 0, width: "29.2rem", border: 1, borderColor:"#3A302A", borderRight: 0}}>PARENT INFORMATION</Button>
              <Button className={classes.root} variant='contained' onClick={() => handleButtonClick('school')} sx={{backgroundColor: activeTab === "school" ? '#3A302A' : "white", color: activeTab === "school" ? 'white' : "#3A302A", borderRadius: 0, width: "29.2rem", border: 1, borderColor:"#3A302A"}} >SCHOOL ATTENDED</Button>
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
