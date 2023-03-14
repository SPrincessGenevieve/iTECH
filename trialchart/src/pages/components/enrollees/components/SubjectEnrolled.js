import MaterialTable from '@material-table/core';
import React from 'react';
import { useState, useEffect  } from 'react';

function SubjectEnrolled(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/enrolled") // replace with your JSON Server endpoint
          .then((response) => response.json())
          .then((json) => setData(json));
      }, []);

      const columns = [
        { title: "Subject", field: "subject"},
        { title: "Faculty", field: "faculty" },
        { title: "Schedule", field: "schedule" },
    
      ]
    


    return (
        <div>
            <MaterialTable
            data={data}
            columns={columns}
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
            >
            </MaterialTable>
        </div>
    );
}

export default SubjectEnrolled;