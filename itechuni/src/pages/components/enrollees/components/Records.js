import './../../../../App.css'
import MaterialTable from '@material-table/core';
import React from 'react';
import { useState } from 'react';

function Records() {
  const [data, setData] = useState([
    {
      enrollNo: "23011401",
      studNo: "1010203940",
      lastname: "Sagrado",
      firstname: "Princess Genevieve",
      year: "1st Year",
      term: "1st Semester",
      balance: "₱10,000"
    },
    {
      enrollNo: "230114045",
      studNo: "1010223340",
      lastname: "Santos",
      firstname: "Aarone Rodel",
      year: "3rd Year",
      term: "2nd Semester",
      balance: "₱15,000"
    },
    {
      enrollNo: "23011433",
      studNo: "1010234340",
      lastname: "Fabores",
      firstname: "Margie",
      year: "4th Year",
      term: "2nd Semester",
      balance: "₱15,000"
    },
    {
      enrollNo: "23011422",
      studNo: "1010223340",
      lastname: "Bagongon",
      firstname: "Trisha",
      year: "2nd Year",
      term: "2nd Semester",
      balance: "₱15,000"
    }
  ]);



  const columns = [
    { title: "Enrollment No.", field: "enrollNo"},
    { title: "Student No.", field: "studNo" },
    { title: "Lastname", field: "lastname" },
    { title: "Firstname", field: "firstname" },
    { title: "Year Level", field: "year" },
    { title: "Term", field: "term" },
    { title: "Balance", field: "balance" },

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
          pageSize: 10,
          paginationPosition: "both",
          actionsColumnIndex: -1,
        }}
        detailPanel={rowData =>{
          return(
            <MaterialTable/>
          )
        }}
      >
      </MaterialTable>
    </div>
  );
}


export default Records;
