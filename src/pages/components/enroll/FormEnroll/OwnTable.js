import React, { useState } from 'react';
import './../../css/table.css';
import data from './../../json/list.json'

function OwnTable(props) {


    return (
        <div>
            <div style={{display:"flex", position:"fixed", marginTop: 100}}>
                
                <table>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Faculty</th>
                            <th>Schedule</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {data.map((data) =>(
                            <tr>
                                <td>{data.subject}</td>
                                <td>{data.faculty}</td>
                                <td>{data.schedule}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OwnTable;