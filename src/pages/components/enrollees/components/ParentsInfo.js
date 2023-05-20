import React from 'react';
import MaterialTable from '@material-table/core';
import CheckBoxes from '../../enroll/finalForm/components/CheckBoxes';
import { useState, useEffect  } from 'react';
import axios from 'axios';

function DropMaternal(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/posts") // replace with your JSON Server endpoint
          .then((response) => response.json())
          .then((json) => setData(json));
      }, []);
      
    const maternalcolumn = [
      { title: "Last name", field: "Mlastname" },
      { title: "First name", field: "Mfirstname" },
      { title: "Age", field: "Mage" },
      { title: "Educational Attainment", field: "MeducAttain" },
      { title: "Address", field: "Maddres" },
      { title: "Average Income", field: "Mincome" },
      ]
      const paternalcolumn = [
        { title: "Last name", field: "Plastname" },
        { title: "First name", field: "Pfirstname" },
        { title: "Age", field: "Page" },
        { title: "Educational Attainment", field: "PeducAttain" },
        { title: "Address", field: "Paddres" },
        { title: "Average Income", field: "Pincome" },
      ]
    return (
        <div>
            <div  style={{display:"flex", flexDirection:"row", marginLeft: 50}}>
                <div><CheckBoxes label="PSA/NSO"></CheckBoxes></div>
                <div><CheckBoxes label="Form 138/ Report Card"></CheckBoxes></div>
                <div><CheckBoxes label="TOR"></CheckBoxes></div>
                <div><CheckBoxes label="COR/ Previous School ID"></CheckBoxes></div>
                <div><CheckBoxes label="2x2 Picture"></CheckBoxes></div>
            </div>
            <MaterialTable
              title="Maternal Information"
              columns={maternalcolumn}
              data={data}
              options={{ 
                search: false,
                actionsColumnIndex: -1,
                pageSizeOptions: [1, 10, 20, 25, 50, 100],
                pageSize: 1,
              }}
              editable={{
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
              >
            </MaterialTable>
            <MaterialTable
              title="Paternal Information"
              columns={paternalcolumn}
              data={data}
              options={{ 
                search: false,
                actionsColumnIndex: -1,
                pageSizeOptions: [1, 10, 20, 25, 50, 100],
                pageSize: 1,
              }}
              editable={{
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
              >
            </MaterialTable>
        </div>
    );
}

export default DropMaternal;