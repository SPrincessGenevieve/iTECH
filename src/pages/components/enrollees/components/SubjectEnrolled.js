import MaterialTable from '@material-table/core';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function SubjectEnrolled({props}) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch data from API and set it to the state
    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(data => setStudents(data));
  }, []);

  



  return (
    <div>
       <table>
      <thead>
        <tr>
          <th>Student No</th>
          <th>Name</th>
          <th>Subjects Enrolled</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student.id}>
            <td>{student.studno}</td>
            <td>{student.firstname} {student.lastname}</td>
            <td>
              <ul>
                {student.subjectsEnrolled.map(subject => (
                  <li key={subject.subData}>{subject.subData}</li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
export default SubjectEnrolled;
