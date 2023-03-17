import React, { useState } from 'react';
import MaternalInfo from './finalForm/MaternalInfo'
import PaternalInfo from './finalForm/ParentalInfo'
import SchoolAttended from './../enroll/finalForm/SchoolAttended.js';
import PropsBtn from './PropsBtn'
import FormEnroll from './FormEnroll.js';
import CheckBoxes from './finalForm/components/CheckBoxes'
import InputBoxFinal from './finalForm/components/InputBoxFinal';
import Religion from './../json/religion.json'
import Gender from './../json/gender.json'
import SelectionForm from './finalForm/components/Selection';
import YearLevel from './../json/YearLevel.json'
import Status from './../json/status.json'
import axios from 'axios';




export default function Form() {
  const [value, setValue] = React.useState();
  const [show, setShow] =useState(false);
  

  const [Card, setCard] = useState(false)
  const [TOR, setTOR] = useState(false)
  const [COR, setCOR] = useState(false)
  const [Pic, setPic] = useState(false)
  const [PSA, setPSA] = useState(false)

  const [enrollno, setenrollno] = useState('')
  const [studno, setstudno] = useState('')
  const [firstname, setFname] = useState('')
  const [lastname, setLname] = useState('')
  const [middlename, setmiddlename] = useState('')
  const [year, setyear] = useState('')
  const [balance, setbalance] = useState('')
  const [email, setemail] = useState('')
  const [bday, setbday] = useState('')
  const [address, setadd] = useState('')
  const [perAdd, setaperAdd] = useState('')
  const [postalcode, setpostal] = useState('')
  const [contactno, setcontactno] = useState('')
  const [religion, setreligion] = useState('')
  const [gender, setgender] = useState('')
  const [status, setstatus] = useState('')
  const [Mlastname, setMlastname] = useState('')
  const [Mfirstname, setMfirstname] = useState('')
  const [Mage, setMage] = useState('')
  const [MeducAttain, setMeducAttain] = useState('')
  const [Maddres, setMaddres] = useState('')
  const [Mincome, setMincome] = useState('')
  const [MEmail, setMEmail] = useState('')
  const [MContact, setMContact] = useState('')
  const [Plastname, setPlastname] = useState('')
  const [Pfirstname, setPfirstname] = useState('')
  const [Page, setPage] = useState('')
  const [PeducAttain, setPeducAttain] = useState('')
  const [Paddres, setPaddres] = useState('')
  const [Pincome, setPincome] = useState('')
  const [PEmail, setPEmail] = useState('')
  const [PContact, setPContact] = useState('')
  const [ElemName, setElemName] = useState('')
  const [ElemAdd, setElemAdd] = useState('')
  const [JunioName, setJunioName] = useState('')
  const [JuniorAdd, setJuniorAdd] = useState('')
  const [SeniorName, setSeniorName] = useState('')
  const [SeniorAdd, setSeniorAdd] = useState('')
  const [CollageName, setCollageName] = useState('')
  const [CollegeAdd, setCollegeAdd] = useState('')
  
  const handleSubmit =(e) =>{
    e.preventDefault();
    const data = 
    {
      Card,
      TOR,
      COR,
      Pic,
      PSA,
      enrollno, 
      studno, 
      firstname, 
      lastname, 
      middlename, 
      year, 
      balance, 
      email, 
      bday,
      address,
      perAdd,
      postalcode,
      contactno,
      religion,
      gender,
      status, 
      Mlastname, 
      Mfirstname, 
      Mage, 
      MeducAttain, 
      Maddres, 
      Mincome, 
      MEmail,
      MContact,
      Plastname, 
      Pfirstname, 
      Page, 
      PeducAttain,
      Paddres,
      Pincome,
      PEmail,
      PContact,
      ElemName, 
      ElemAdd, 
      JunioName, 
      JuniorAdd, 
      SeniorName, 
      SeniorAdd, 
      CollageName, 
      CollegeAdd
    };
    axios.post('http://localhost:3000/posts', data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    
  }

  const handleCard = (event) =>{
    setCard(event.target.value);
  }

  const handleTOR = (event) =>{
    setTOR(event.target.value);
  }

  const handleCOR = (event) =>{
    setCOR(event.target.value);
  }

  const handlePic = (event) =>{
    setPic(event.target.value);
  }

  const handlePSA = (event) =>{
    setPSA(event.target.value);
  }
 
  const handleenrollno = (event) =>{
    setenrollno(event.target.value);
  }

  const handlestudno = (event) =>{
    setstudno(event.target.value);
  }

  const handleFnameChange = (event) =>{
    setFname(event.target.value);
  }

  const handleLnameChange = (event) =>{
    setLname(event.target.value);
  }

  const handlemiddlename = (event) =>{
    setmiddlename(event.target.value);
  }

  const handleyear = (event) =>{
    setyear(event.target.value);
  }

  const handlebalance = (event) =>{
    setbalance(event.target.value);
  }

  const handleemail = (event) =>{
    setemail(event.target.value);
  }

  const handlebday = (event) =>{
    setbday(event.target.value);
  }

  const handleAdd = (event) =>{
    setadd(event.target.value);
  }

  const handleperAdd = (event) =>{
    setaperAdd(event.target.value);
  }

  const handlepostalcode = (event) =>{
    setpostal(event.target.value);
  }

  const handlecontactno = (event) =>{
    setcontactno(event.target.value);
  }

  const handlereligion = (event) =>{
    setreligion(event.target.value);
  }

  const handlegender = (event) =>{
    setgender(event.target.value);
  }

  const handlestatus = (event) =>{
    setstatus(event.target.value);
  }

  const handleMlastname = (event) =>{
    setMlastname(event.target.value);
  }

  const handleMage = (event) =>{
    setMage(event.target.value);
  }

  const handleMeducAttain = (event) =>{
    setMeducAttain(event.target.value);
  }

  const handleMaddres = (event) =>{
    setMaddres(event.target.value);
  }

  const handleMincome = (event) =>{
    setMincome(event.target.value);
  }

  const handleMEmail = (event) =>{
    setMEmail(event.target.value);
  }

  const handleMContact = (event) =>{
    setMContact(event.target.value);
  }

  const handlePlastname = (event) =>{
    setPlastname(event.target.value);
  }

  const handlePfirstname = (event) =>{
    setPfirstname(event.target.value);
  }

  const handlePage = (event) =>{
    setPage(event.target.value);
  }

  const handlePeducAttain = (event) =>{
    setPeducAttain(event.target.value);
  }

    const handlePaddres = (event) =>{
    setPaddres(event.target.value);
  }

  const handlePincome = (event) =>{
    setPincome(event.target.value);
  }

  const handlePEmail = (event) =>{
    setPEmail(event.target.value);
  }

  const handlePContact = (event) =>{
    setPContact(event.target.value);
  }


  const handleElemName = (event) =>{
    setElemName(event.target.value);
  }

  const handleElemAdd = (event) =>{
    setElemAdd(event.target.value);
  }

  const handleJunioName = (event) =>{
    setJunioName(event.target.value);
  }

  const handleJuniorAdd = (event) =>{
    setJuniorAdd(event.target.value);
  }

  const handleSeniorName = (event) =>{
    setSeniorName(event.target.value);
  }

  const handleSeniorAdd = (event) =>{
    setSeniorAdd(event.target.value);
  }

  const handleCollageName = (event) =>{
    setCollageName(event.target.value);
  }

  const handleCollegeAdd = (event) =>{
    setCollegeAdd(event.target.value);
  }

  



  
  
  return (
      <div>
          {show ? (
              <>
              <div style={{backgroundColor:"black", height: "155rem", width:"100%", display:"flex", position:"absolute", zIndex: 6, marginTop: -60, opacity: 0.5}}></div>
              <div style={{position:"fixed", display:"flex", zIndex: 6}}>
                  <FormEnroll  onClick={() =>setShow(!show)} clickConfirm={() =>setShow(!show)}></FormEnroll>
              </div>
              </>
          ) : null}
          
        <div>
          <div id='outer' className='outer' 
            style= {{backgroundColor:"white", zIndex: 2, width: "100%", height: "150rem", position:"absolute", paddingLeft: 200,}}>
            <form onSubmit={handleSubmit}>
                <div>
                <div>

                    <>
              <div  style={{display:"flex", flexDirection:"row", marginLeft: 50}}>
                  
                  <div><CheckBoxes onChange={handlePSA} label="PSA/NSO"></CheckBoxes></div>
                  <div><CheckBoxes onChange={handleCard} label="Form 138/ Report Card"></CheckBoxes></div>
                  <div><CheckBoxes onChange={handleTOR} label="TOR"></CheckBoxes></div>
                  <div><CheckBoxes onChange={handleCOR} label="COR/ Previous School ID"></CheckBoxes></div>
                  <div><CheckBoxes onChange={handlePic} label="2x2 Picture"></CheckBoxes></div>
              </div>

              <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                  <div><InputBoxFinal disabled onChange={handleenrollno} label="Enrollment No."/></div>
                  <div><InputBoxFinal onChange={handlestudno} label="Student No."/> </div>    
              </div>

              <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                  <div><InputBoxFinal onChange={handlebalance} type="number" label="Balance"/></div>
                  <div><SelectionForm onChange={handleyear} label="Year Level" Label="Year Level" data={YearLevel}></SelectionForm></div>
              </div>
              
              <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                  <div><InputBoxFinal onChange={handleLnameChange} label="Last name"/></div>
                  <div><InputBoxFinal onChange={handleFnameChange} label="First name"/> </div>    
              </div>
              
              <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                  <div><InputBoxFinal onChange={handlemiddlename} label="Middle Name"/></div>
                  <div><InputBoxFinal onChange={handleemail} label="Email Address"/></div>
              </div>
                                  
              <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                  <div><InputBoxFinal onChange={handlebday} label="Birthday" id="date" type="date" InputLabelProps={{shrink: true}}/></div>
                  <div><InputBoxFinal onChange={handleAdd} label="Address"/></div>
              </div>

              <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                  <div><InputBoxFinal onChange={handleperAdd} label="Permanent Address"/></div>
                  <div><InputBoxFinal onChange={handlepostalcode} label="Postal Code"/></div>
              </div>
              
              <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                  <div><InputBoxFinal onChange={handlecontactno} type="number" label="Contact Number"/></div>
                  <div><SelectionForm onChange={handlereligion} label="Religion" Label="Religion" data={Religion}/></div>
              </div>
              
              <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                  <div><SelectionForm onChange={handlegender} label="Gender" Label="Gender" data={Gender}/></div>
                  <div style={{marginLeft:10}}>
                    <SelectionForm onChange={handlestatus} label="Status" Label="Status" data={Status}></SelectionForm>
                  </div>
              </div>
                    </>
            </div>
                  <MaternalInfo 
                  parentalFName ={handlePfirstname}
                  parentalLName ={handleMlastname}
                  parentalAge ={handleMage}
                  parentalEducAttain ={handleMeducAttain}
                  parentalAdd ={handleMaddres}
                  parentalIncome ={handleMincome}
                  parentalEmail ={handleMEmail}
                  parentalContact ={handleMContact}
                  title="Maternal Information" 
                  />

                  <PaternalInfo 
                  parentalFName ={handlePfirstname}
                  parentalLName ={handlePlastname}
                  parentalAge ={handlePage}
                  parentalEducAttain ={handlePeducAttain}
                  parentalAdd ={handlePaddres}
                  parentalIncome ={handlePincome}
                  parentalEmail ={handlePEmail}
                  parentalContact ={handlePContact}
                  title="Paternal Information" 

                  />
                  <div style={{marginLeft: 46, marginTop: 50}}>
                      <text style={{fontSize: 30}}>Schools Attended by the Applicant</text>
                  </div>
                  <div style={{display:"flex", flexDirection:"row", marginBottom: -20}}>
                      <SchoolAttended onChangeName={handleElemName} onChangeAdd={handleElemAdd} label1="School name" label2="Address" title="ELEMENTARY"></SchoolAttended>
                      <SchoolAttended onChangeName={handleJunioName} onChangeAdd={handleJuniorAdd} label1="School name" label2="Address" title="JUNIOR HIGH SCHOOL"></SchoolAttended>
                  </div>
                  <div style={{display:"flex", flexDirection:"row"}}>
                      <SchoolAttended onChangeName={handleSeniorName} onChangeAdd={handleSeniorAdd} label1="School name" label2="Address" title="SENIOR JUNIOR HIGH SCHOOL"></SchoolAttended>
                      <SchoolAttended onChangeName={handleCollageName} onChangeAdd={handleCollegeAdd} label1="School name" label2="Address" title="COLLEGE"></SchoolAttended>
                  </div>
                  <div style={{display:"flex", flexDirection:"row", marginLeft: "73rem"}}>
                      <PropsBtn backgroundColor='red' props="CANCEL"></PropsBtn>
                      <PropsBtn type="submit" onClick={() =>setShow(!show)} backgroundColor='#00B050' props="PROCEED"></PropsBtn>
                  </div>
                  
                </div>
              </form>
            </div>
        </div>
  </div>
  );
}



