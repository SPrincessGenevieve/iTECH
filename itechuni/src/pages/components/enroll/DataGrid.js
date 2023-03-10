import MaterialTable from '@material-table/core';
import React, { useState } from 'react';




function DataGrid() {
    const column=[
    ]
    const [data, setData] = useState([
    ])
    return (
        <div>
            <MaterialTable columns={column} data={data} title="SUBJECTS ENROLLED"
                editable={{
                    
                    onRowDelete: oldData =>
                      new Promise((resolve, reject) => {
                        setTimeout(() => {
                          resolve();
                        }, 1000);
                      }),     
                  }}
                  options={{
                    exportButton: true,
                    exportAllData: true,
                    exportFileName: "ENROLLMENT RECORDS",
                    pageSizeOptions: [7],
                    pageSize: 7,
                    paginationPosition: "both",
                    actionsColumnIndex: -1,
                    search:false
                  }}
            ></MaterialTable>
        </div>
    );
}

export default DataGrid;