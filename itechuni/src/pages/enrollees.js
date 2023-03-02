import React from 'react';
import Navbar from '../Navbar';
import TableRecord from './components/enrollees/table';

const Enrollees = () => {
  return (
    <>
    <Navbar></Navbar>

      <TableRecord></TableRecord>
    </>
  );
};
  
export default Enrollees;