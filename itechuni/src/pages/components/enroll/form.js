import * as React from 'react';
import InputBox from './InputBox';
import Selection from './Select';
import YL from './../json/YearLevel.json'
import Semester from './../json/Semester.json'
import SearchBtn from './PropsBtn';
import DataGrid from './DataGrid';
import PropsBtn from './PropsBtn';
import FormEnroll from './FormEnroll';
import FinalForm from './finalForm';


export default function Form() {

  const [show, setShow] = React.useState(false)
  const [showForm, setShowForm] = React.useState(false)

  
    return(
      
      <div>
        {show ? (
          <>
          <FormEnroll onClick={() => setShow(!show)}></FormEnroll>
        </>
      
        ) : null
      }

          {showForm ? (
              <>
              <FinalForm onClick={() => setShowForm(!showForm)}></FinalForm>
            </>
          
            ) : null
          }

        <div style={{margin:20, padding: 20, display:"block", marginTop:50, marginLeft: "30%", marginRight:"30%", borderRadius: 30, border: "1px solid #3A302A"}}>
          <div style={{marginTop: 10, display:"flex", flexDirection:"row", marginBottom:"2%", paddingBottom: 20, borderBottom: "1px solid black"}}>
            <InputBox
              title1="LastName"
              label="Last name"
            />
          <div style={{marginLeft: -32}}>
            <InputBox
              title1="FirstName"
              label="First name"
            />
          </div>
          <div>
            <SearchBtn props="Search Student"></SearchBtn>
          </div>
        </div>
        <div style={{marginLeft:"12%"}}>
          <div style={{display:"flex", flexDirection:"row"}}>
            <div style={{marginTop: 10}}>
              <InputBox
                title1="EnrollmentNo"
                label="Enrollment No."
              />
            </div>
            <div>
              <Selection data={YL} label="Select Year Level"></Selection>
            </div>
          </div>
            <div style={{display:"flex", flexDirection:"row"}}>
              <div style={{marginTop: 5}}>
                <InputBox
                  title1="StudentNo"
                  label="Student No."
                />
              </div>
              <div style={{marginTop: -5}}>
                <Selection data={Semester} label="Select Term"></Selection>
              </div>
            </div>
          </div>
        </div>

        <div style={{display:"flex", flexDirection:"row", marginLeft:"85%"}}>

          <div style={{display:"flex"}}>
            <PropsBtn backgroundColor="#00A200" props="Add Subject" onClick={() => setShow(!show)}></PropsBtn>
          </div>
          <div style={{display:"flex"}}>
            <PropsBtn props="Proceed" onClick={() => setShowForm(!showForm)}></PropsBtn>
          </div>
        </div>

        <div style={{margin: 30}}>
          <DataGrid></DataGrid>
        </div>
      </div>
    )
}


