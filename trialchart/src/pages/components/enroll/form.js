import React, { useState, useEffect } from 'react';
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
import SelectionSub from './FormEnroll/SelectionSub';
import FacultyText from './FormEnroll/FacultyText';
import OwnTable from './FormEnroll/OwnTable';
import facultyData from './../json/facultyJSON.json'
import subData from './../json/subjects.json'
import schedData from './../json/schedJSON.json'
import Confirm from './Confirm';
import { Button, Input, TextField } from '@mui/material';
import Semester from './../json/Semester.json'
import './table.css'
import { FaTrashAlt, FaArrowUp, FaArrowDown } from 'react-icons/fa';




export default function Form() {
  const [showTable, setShowTable] = useState(false)
  

  const [Card, setCard] = useState(false)
  const [TOR, setTOR] = useState(false)
  const [COR, setCOR] = useState(false)
  const [Pic, setPic] = useState(false)
  const [PSA, setPSA] = useState(false)

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
  
  const clearForm = () => {
    setCard(false)
    setTOR(false)
    setCOR(false)
    setPic(false)
    setPSA(false)
    setstudno('');
    setFname('');
    setLname('');
    setmiddlename('');
    setyear('');
    setbalance('');
    setemail('');
    setbday('');
    setadd('');
    setaperAdd('');
    setpostal('');
    setcontactno('');
    setreligion('');
    setgender('');
    setstatus('');
    setMlastname('');
    setMfirstname('');
    setMage('');
    setMeducAttain('');
    setMaddres('');
    setMincome('');
    setMEmail('');
    setMContact('');
    setPlastname('');
    setPfirstname('');
    setPage('');
    setPeducAttain('');
    setPaddres('');
    setPincome('');
    setPEmail('');
    setPContact('');
    setElemName('');
    setElemAdd('');
    setJunioName('');
    setJuniorAdd('');
    setSeniorName('');
    setSeniorAdd('');
    setCollageName('');
    setCollegeAdd('');
    setTableData([]);
  }
  
  const handleSubmit =(e) =>{
    e.preventDefault();

    if (
      !PSA 
      || !Card 
      || !TOR 
      || !COR 
      || !Pic 
      || !studno 
      || !lastname 
      || !firstname 
      || !middlename
      || !year
      || !balance
      || !email
      || !bday
      || !address
      || !perAdd
      || !postalcode
      || !contactno
      || !religion
      || !gender
      || !status
      || !Mlastname
      || !Mfirstname
      || !Mage
      || !MeducAttain
      || !Maddres
      || !Mincome
      || !MEmail
      || !MContact
      || !Plastname
      || !Pfirstname
      || !Page
      || !PeducAttain
      || !Paddres
      || !Pincome
      || !PEmail
      || !PContact
      || !ElemName
      || !ElemAdd
      || !JunioName
      || !JuniorAdd
      || !SeniorName
      || !SeniorAdd
      || !CollageName
      || !CollegeAdd
      ) {
      alert('Please fill all required fields');
      return;
    }

    if (tableData.length === 0) {
      alert('Please add at least one subject.');
      return;
    }

    const requiredFields = {
      PSA,
      Card,
      TOR,
      COR,
      Pic
    };

    const isAllChecked = Object.values(requiredFields).every((value) => value);

    if (!isAllChecked) {
      alert('Please check all required fields');
      return;
    }


    const data = 
    {
      Card,
      TOR,
      COR,
      Pic,
      PSA,
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
      CollegeAdd,
      subjectsEnrolled: tableData
    };
    setShowTable(true);
    axios.post('http://localhost:3000/posts', data)
      .then(response => {
        console.log(response);
        clearForm();
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
  const handleMfirstname = (event) =>{
    setMfirstname(event.target.value);
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

  const handleYearLevelPost = (event) =>{
    setCollegeAdd(event.target.value);
  }

  const [yearLevel, setYearLevel] = useState(null);
  const [semester, setSemester] = useState(null);
  const [selectedOptionSub, setSelectedOptionSub] = useState(null);
  const [selectedOptionFac, setSelectedOptionFac] = useState(null);
  const [selectedOptionSched, setSelectedOptionSched] = useState(null);
  const [tableData, setTableData] = useState([]);

  const handleSubjectChange = (selectedOption) => {
    setSelectedOptionSub(selectedOption);
    //1ST YEAR
    if (selectedOption.value === "Introduction to Computing") {
      setOptionFacIntroCom(optionFacIntroCom);
    } else if (selectedOption.value === "Computer Programing 1") {
      setOptionComProg(optionComProg)}
      else {
      setOptionFac([
        
{ value: 'Dr. Smith', label: 'Dr. Smith', count: 0 },
{ value: 'Prof. Johnson', label: 'Prof. Johnson', count: 0 },
{ value: 'Ms. Davis', label: 'Ms. Davis', count: 0 },
{ value: 'Emanuel Jackson', label: 'Emanuel Jackson', count: 0 },
{ value: 'Kathryn Lyons', label: 'Kathryn Lyons', count: 0 },
{ value: 'Deanna Price', label: 'Deanna Price', count: 0 },
{ value: 'Jaylen Hutchinson', label: 'Jaylen Hutchinson', count: 0 },
{ value: 'Kaleigh Chambers', label: 'Kaleigh Chambers', count: 0 },
{ value: 'William Berg', label: 'William Berg', count: 0 },
{ value: 'Rohan Marsh', label: 'Rohan Marsh', count: 0 },
{ value: 'Dillon Terrell', label: 'Dillon Terrell', count: 0 },
{ value: 'Claire Nguyen', label: 'Claire Nguyen', count: 0 },
{ value: 'Kailee Huffman', label: 'Kailee Huffman', count: 0 },
{ value: 'Hayley Curry', label: 'Hayley Curry', count: 0 },
{ value: 'Makena Huynh', label: 'Makena Huynh', count: 0 },
{ value: 'Elliana Burton', label: 'Elliana Burton', count: 0 },
{ value: 'Cara Mcdaniel', label: 'Cara Mcdaniel', count: 0 },
{ value: 'Angelo Chavez', label: 'Angelo Chavez', count: 0 },
{ value: 'Franklin Daugherty', label: 'Franklin Daugherty', count: 0 },
{ value: 'Taylor Ingram', label: 'Taylor Ingram', count: 0 },
{ value: 'Colin Glass', label: 'Colin Glass', count: 0 },
{ value: 'Addisyn Sampson', label: 'Addisyn Sampson', count: 0 },
{ value: 'Rachael Campos', label: 'Rachael Campos', count: 0 },
{ value: 'Desiree Juarez', label: 'Desiree Juarez', count: 0 },
{ value: 'Trystan Ashley', label: 'Trystan Ashley', count: 0 },
{ value: 'Elvis Downs', label: 'Elvis Downs', count: 0 },
{ value: 'Naomi French', label: 'Naomi French', count: 0 },
{ value: 'Franklin Daugherty', label: 'Franklin Daugherty', count: 0 },
{ value: 'Taylor Ingram', label: 'Taylor Ingram', count: 0 },
{ value: 'Colin Glass', label: 'Colin Glass', count: 0 },
{ value: 'Addisyn Sampson', label: 'Addisyn Sampson', count: 0 },
{ value: 'Rachael Campos', label: 'Rachael Campos', count: 0 },
{ value: 'Desiree Juarez', label: 'Desiree Juarez', count: 0 },
{ value: 'Trystan Ashley', label: 'Trystan Ashley', count: 0 },
{ value: 'Elvis Downs', label: 'Elvis Downs', count: 0 },
{ value: 'Naomi French', label: 'Naomi French', count: 0 },
{ value: 'Dr. Smith', label: 'Dr. Smith', count: 0 },
{ value: 'Prof. Johnson', label: 'Prof. Johnson', count: 0 },
{ value: 'Ms. Davis', label: 'Ms. Davis', count: 0 },
{ value: 'Emanuel Jackson', label: 'Emanuel Jackson', count: 0 },
{ value: 'Kathryn Lyons', label: 'Kathryn Lyons', count: 0 },
{ value: 'Deanna Price', label: 'Deanna Price', count: 0 },
{ value: 'Jaylen Hutchinson', label: 'Jaylen Hutchinson', count: 0 },
{ value: 'Kaleigh Chambers', label: 'Kaleigh Chambers', count: 0 },
{ value: 'William Berg', label: 'William Berg', count: 0 },
{ value: 'Dr. Smith', label: 'Dr. Smith', count: 0 },
{ value: 'Prof. Johnson', label: 'Prof. Johnson', count: 0 },
{ value: 'Ms. Davis', label: 'Ms. Davis', count: 0 },
{ value: 'Jonas Peters', label: 'Jonas Peters', count: 0 },
{ value: 'Colten Meadows', label: 'Colten Meadows', count: 0 },
{ value: 'Laney Murray', label: 'Laney Murray', count: 0 },
{ value: 'Haiden Goodwin', label: 'Haiden Goodwin', count: 0 },
{ value: 'Kaleigh Chambers', label: 'Kaleigh Chambers', count: 0 },
{ value: 'Luke Rios', label: 'Luke Rios', count: 0 },
{ value: 'Mara Cross', label: 'Dr. Smith', count: 0 },
{ value: 'Jessie Day', label: 'Prof. Johnson', count: 0 },
{ value: 'Savanna Neal', label: 'Ms. Davis', count: 0 },
{ value: 'Charity Mcgee', label: 'Jonas Peters', count: 0 },
{ value: 'Colten Meadows', label: 'Colten Meadows', count: 0 },
{ value: 'Laney Ponce', label: 'Laney Murray', count: 0 },
{ value: 'Santiago Hopkins', label: 'Haiden Goodwin', count: 0 },
{ value: 'Giovanny Abbott', label: 'Kaleigh Chambers', count: 0 },
{ value: 'Kayla Joseph', label: 'Luke Rios', count: 0 }
      ]);
    }
    };
  
  const handleFacultyChange = (selectedOption) => {
    setSelectedOptionFac(selectedOption);
  
    // Update count of selected faculty member
    const newOptionFac = optionFac.map((faculty) =>
      faculty.value === selectedOption.value ? { ...faculty, count: faculty.count + 1 } : faculty
    );
    setOptionFac(newOptionFac);
  };

  const handleAddToTable = () => {
    if (!yearLevel || !selectedOptionSub || !selectedOptionFac || !selectedOptionSched) {
      return; // return if any of the fields are empty
    }
  
    const selectedFaculty = optionFac.find((faculty) => faculty.value === selectedOptionFac.value);
    if (selectedFaculty.count >= 3) {
      alert(`This professor ${selectedOptionFac.value} is already full`);
      return; // return if the selected faculty member has already been selected three times
    }
  
    const newTableData = [    ...tableData,    {    YearLevel: yearLevel.value,       Semester: semester.value,            subData: selectedOptionSub.value,      facultyData: selectedOptionFac.value,      schedData: selectedOptionSched.value,    },  ];
  
    setTableData(newTableData);
  
    // Remove selected option from options list
    setOptionSub(optionSub.filter((option) => option.value !== selectedOptionSub.value));
  
    // Update count of selected faculty member
    const newOptionFac = optionFac.map((faculty) =>
      faculty.value === selectedOptionFac.value ? { ...faculty, count: faculty.count + 1 } : faculty
    );
    setOptionFac(newOptionFac);
  
    setSelectedOptionSub(null);
    setSelectedOptionFac(null);
    setSelectedOptionSched(null);
    setYearLevel(null);
    setSemester(null);
  };

  const handleRemoveFromTable = (index) => {
    const newData = [...tableData];
    const removedOption = newData.splice(index, 1)[0];
  
    setTableData(newData);
  
    // Add removed option back to options list
    setOptionSub([...optionSub, { value: removedOption.subData, label: removedOption.subData }]);
  };

  const [isVisible, setIsVisible] = useState(false);

  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 500);
  }

  function handleClickUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleClickDown() {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  

  const [yearlevelSelection, setyearlevelSelection] = useState ([
    {value: 'First Year', label: 'First Year'},
    {value: 'Second Year', label: 'Second Year'},
    {value: 'Third Year', label: 'Third Year'},
    {value: 'Fourth Year', label: 'Fourth Year'}
  ]);

  const [semesterSelection, setSemesterSelection] = useState([
    {value: 'First Semester', label: 'First Semester'},
    {value: 'Second Semester', label: 'Second Semester'}
  ])

const optionSubjects = yearLevel && semester && yearLevel.value === 'First Year' && semester.value === 'First Semester'
    ? [
      { value: 'Introduction to Computing', label: 'Introduction to Computing' },
      { value: 'Computer Programing 1', label: 'Computer Programing 1' },
      { value: 'Purposive Communication', label: 'Purposive Communication' }
      ]
    : yearLevel && semester && yearLevel.value === 'First Year' && semester.value === 'Second Semester'
      ? [
        { value: 'Computer Programing 2', label: 'Computer Programing 2' },
        { value: 'Data Structures and Algorithms', label: 'Data Structures and Algorithms' },
        { value: 'Discrete Mathematics', label: 'Discrete Mathematics' }
        ]
    : yearLevel && semester && yearLevel.value === 'Second Year' && semester.value === 'First Semester' 
      ? [
        { value: 'Intro to Human Computer Interaction', label: 'Intro to Human Computer Interaction' },
        { value: 'Fundamentals of Database Systems', label: 'Fundamentals of Database Systems' },
        { value: 'Platform Technologies', label: 'Platform Technologies' }
      ]
    : yearLevel && semester && yearLevel.value === 'Second Year' && semester.value === 'Second Semester' 
      ? [
        { value: 'Information Management', label: 'Information Management' },
        { value: 'Networking 1', label: 'Networking 1' },
        { value: 'Web Systems and Technolgies', label: 'Web Systems and Technolgies' }
      ]
    : yearLevel && semester && yearLevel.value === 'Third Year' && semester.value === 'First Semester' 
      ? [
        { value: 'Information Assurance and Security', label: 'Information Assurance and Security' },
        { value: 'Computer Programing 1', label: 'Computer Programing 1' },
        { value: 'Mobile Programming', label: '	Mobile Programming' }
      ]
    : yearLevel && semester && yearLevel.value === 'Third Year' && semester.value === 'Second Semester' 
      ? [
        { value: 'CAPSTONE Project and Research 1', label: 'CAPSTONE Project and Research 1' },
        { value: 'Integrative Programming and Technologies', label: 'Integrative Programming and Technologies' },
        { value: 'Applications Development and Emerging Technologies', label: 'Applications Development and Emerging Technologies' }
      ]
    : yearLevel && semester && yearLevel.value === 'Fourth Year' && semester.value === 'First Semester' 
      ? [
        { value: 'CAPSTONE Project and Research 2', label: 'CAPSTONE Project and Research 2' },
        { value: 'System Administration and Maintenance', label: 'System Administration and Maintenance' },
        { value: 'Social and Professional Issues', label: 'Social and Professional Issues' }
      ]
    : yearLevel && semester && yearLevel.value === 'Fourth Year' && semester.value === 'Second Semester' 
      ? [
        { value: 'PRACTICUM(486 hrs.)', label: 'PRACTICUM(486 hrs.)', count: 0 },
      ]
      :[]
    ;

  

 



const [optionFacSub, setOptionFacSub] = useState([
  {
    label: "Introduction to Computing",
    options: [
      { value: 'Dr. Smith', label: 'Dr. Smith', count: 0 },
      { value: 'Prof. Johnson', label: 'Prof. Johnson', count: 0 },
      { value: 'Ms. Davis', label: 'Ms. Davis', count: 0 }
    ]},
    {
    label: "Computer Programing 1",
    options: [
    { value: 'Emanuel Jackson', label: 'Emanuel Jackson', count: 0 },
    { value: 'Kathryn Lyons', label: 'Kathryn Lyons', count: 0 },
    { value: 'Deanna Price', label: 'Deanna Price', count: 0 },
    ]},
    {
    label: "Purposive Communication",
    options: [
    { value: 'Jaylen Hutchinson', label: 'Jaylen Hutchinson', count: 0 },
    { value: 'Kaleigh Chambers', label: 'Kaleigh Chambers', count: 0 },
    { value: 'William Berg', label: 'William Berg', count: 0 },
    ]},
    {
    label: "Data Structures and Algorithms",
    options: [
    { value: 'Rohan Marsh', label: 'Rohan Marsh', count: 0 },
    { value: 'Dillon Terrell', label: 'Dillon Terrell', count: 0 },
    { value: 'Claire Nguyen', label: 'Claire Nguyen', count: 0 },
    ]},
    {
    label: "Discrete Mathematics",
    options: [
    { value: 'Kailee Huffman', label: 'Kailee Huffman', count: 0 },
    { value: 'Hayley Curry', label: 'Hayley Curry', count: 0 },
    { value: 'Makena Huynh', label: 'Makena Huynh', count: 0 },
    ]},
    {
    label: "Intro to Human Computer Interaction",
    options: [
    { value: 'Elliana Burton', label: 'Elliana Burton', count: 0 },
    { value: 'Cara Mcdaniel', label: 'Cara Mcdaniel', count: 0 },
    { value: 'Angelo Chavez', label: 'Angelo Chavez', count: 0 },
    ]},
    {
    label: "Fundamentals of Database Systems",
    options: [
    { value: 'Franklin Daugherty', label: 'Franklin Daugherty', count: 0 },
    { value: 'Taylor Ingram', label: 'Taylor Ingram', count: 0 },
    { value: 'Colin Glass', label: 'Colin Glass', count: 0 },
    ]},
    {
    label: "Platform Technologies",
    options: [
    { value: 'Addisyn Sampson', label: 'Addisyn Sampson', count: 0 },
    { value: 'Rachael Campos', label: 'Rachael Campos', count: 0 },
    { value: 'Desiree Juarez', label: 'Desiree Juarez', count: 0 },
    ]},
    {
    label: "Information Management",
    options: [
    { value: 'Trystan Ashley', label: 'Trystan Ashley', count: 0 },
    { value: 'Elvis Downs', label: 'Elvis Downs', count: 0 },
    { value: 'Naomi French', label: 'Naomi French', count: 0 },
    ]},
    {
    label: "Networking 1",
    options: [
    { value: 'Franklin Daugherty', label: 'Franklin Daugherty', count: 0 },
    { value: 'Taylor Ingram', label: 'Taylor Ingram', count: 0 },
    { value: 'Colin Glass', label: 'Colin Glass', count: 0 },
    ]},
    {
    label: "Web Systems and Technolgies",
    options: [
    { value: 'Addisyn Sampson', label: 'Addisyn Sampson', count: 0 },
    { value: 'Rachael Campos', label: 'Rachael Campos', count: 0 },
    { value: 'Desiree Juarez', label: 'Desiree Juarez', count: 0 },
    ]},
    {
    label: "Information Assurance and Security",
    options: [
    { value: 'Trystan Ashley', label: 'Trystan Ashley', count: 0 },
    { value: 'Elvis Downs', label: 'Elvis Downs', count: 0 },
    { value: 'Naomi French', label: 'Naomi French', count: 0 },
    ]},
    {
    label: "Networking 2",
    options: [
    { value: 'Dr. Smith', label: 'Dr. Smith', count: 0 },
    { value: 'Prof. Johnson', label: 'Prof. Johnson', count: 0 },
    { value: 'Ms. Davis', label: 'Ms. Davis', count: 0 },
    ]},
    {
    label: "	Mobile Programming",
    options: [
    { value: 'Emanuel Jackson', label: 'Emanuel Jackson', count: 0 },
    { value: 'Kathryn Lyons', label: 'Kathryn Lyons', count: 0 },
    { value: 'Deanna Price', label: 'Deanna Price', count: 0 },
    ]},
    {
    label: "CAPSTONE Project and Research 1",
    options: [
    { value: 'Jaylen Hutchinson', label: 'Jaylen Hutchinson', count: 0 },
    { value: 'Kaleigh Chambers', label: 'Kaleigh Chambers', count: 0 },
    { value: 'William Berg', label: 'William Berg', count: 0 },
    ]},
    {
    label: "Integrative Programming and Technologies",
    options: [
    { value: 'Dr. Smith', label: 'Dr. Smith', count: 0 },
    { value: 'Prof. Johnson', label: 'Prof. Johnson', count: 0 },
    { value: 'Ms. Davis', label: 'Ms. Davis', count: 0 },
    ]},
    {
    label: "Applications Development and Emerging Technologies",
    options: [
    { value: 'Jonas Peters', label: 'Jonas Peters', count: 0 },
    { value: 'Colten Meadows', label: 'Colten Meadows', count: 0 },
    { value: 'Laney Murray', label: 'Laney Murray', count: 0 },
    ]},
    {
    label: "CAPSTONE Project and Research 2",
    options: [
      { value: 'Haiden Goodwin', label: 'Haiden Goodwin', count: 0 },
      { value: 'Kaleigh Chambers', label: 'Kaleigh Chambers', count: 0 },
      { value: 'Luke Rios', label: 'Luke Rios', count: 0 },
    ]},
    {
    label: "System Administration and Maintenance",
    options: [
      { value: 'Mara Cross', label: 'Dr. Smith', count: 0 },
      { value: 'Jessie Day', label: 'Prof. Johnson', count: 0 },
      { value: 'Savanna Neal', label: 'Ms. Davis', count: 0 },
    ]},
    {
    label: "Social and Professional Issues	",
    options: [
    { value: 'Jonas Peters', label: 'Jonas Peters', count: 0 },
    { value: 'Colten Meadows', label: 'Colten Meadows', count: 0 },
    { value: 'Laney Murray', label: 'Laney Murray', count: 0 },
    ]},

    {
      label: "PRACTICUM(486 hrs.)",
      options: [
        { value: 'Santiago Hopkins', label: 'Haiden Goodwin', count: 0 },
        { value: 'Giovanny Abbott', label: 'Kaleigh Chambers', count: 0 },
        { value: 'Kayla Joseph', label: 'Luke Rios', count: 0 }
      ]},


  
])


//FIRST YEAR FIRST SEM
const [optionSubFFSem, setSubFFSem] = useState ([
  { value: 'Introduction to Computing', label: 'Introduction to Computing' },
  { value: 'Computer Programing 1', label: 'Computer Programing 1' },
  { value: 'Purposive Communication', label: 'Purposive Communication' }
]);

const [optionFacIntroCom, setOptionFacIntroCom] = useState([
  { value: 'Dr. Smith', label: 'Dr. Smith', count: 0 },
  { value: 'Prof. Johnson', label: 'Prof. Johnson', count: 0 },
  { value: 'Ms. Davis', label: 'Ms. Davis', count: 0 },
]);

const [optionComProg, setOptionComProg] = useState([
  { value: 'Emanuel Jackson', label: 'Emanuel Jackson', count: 0 },
  { value: 'Kathryn Lyons', label: 'Kathryn Lyons', count: 0 },
  { value: 'Deanna Price', label: 'Deanna Price', count: 0 },
]);

const [optionPurCom, setOptionPurCom] = useState([
  { value: 'Jaylen Hutchinson', label: 'Jaylen Hutchinson', count: 0 },
  { value: 'Kaleigh Chambers', label: 'Kaleigh Chambers', count: 0 },
  { value: 'William Berg', label: 'William Berg', count: 0 },
]);

const [optionSched11, setOptionSched11] = useState ([
  { value: 'MWF 9:00 AM - 10:00 AM', label: 'MWF 9:00 AM - 10:00 AM' },
  { value: 'MWF 10:00 AM - 11:00 AM', label: 'MWF 10:00 AM - 11:00 AM' },
  { value: 'TTH 1:00 PM - 2:30 PM', label: 'TTH 1:00 PM - 2:30 PM' },
]);




//FIRST YEAR SECOND SEM
const [optionSubFSSem, setSubFSSem] = useState ([
  { value: 'Computer Programing 2', label: 'Computer Programing 2' },
  { value: 'Data Structures and Algorithms', label: 'Data Structures and Algorithms' },
  { value: 'Discrete Mathematics', label: 'Discrete Mathematics' }
]);

const [optionFacComProg, setOptionFacComProg] = useState([
  { value: 'Rohan Marsh', label: 'Rohan Marsh', count: 0 },
  { value: 'Dillon Terrell', label: 'Dillon Terrell', count: 0 },
  { value: 'Claire Nguyen', label: 'Claire Nguyen', count: 0 },
]);

const [optionFacDataStruc, setOptionFacDataStruc] = useState([
  { value: 'Kailee Huffman', label: 'Kailee Huffman', count: 0 },
  { value: 'Hayley Curry', label: 'Hayley Curry', count: 0 },
  { value: 'Makena Huynh', label: 'Makena Huynh', count: 0 },
]);

const [optionMath, setOptionMath] = useState([
  { value: 'Elliana Burton', label: 'Elliana Burton', count: 0 },
  { value: 'Cara Mcdaniel', label: 'Cara Mcdaniel', count: 0 },
  { value: 'Angelo Chavez', label: 'Angelo Chavez', count: 0 },
]);

const [optionSched12, setOptionSched12] = useState ([
  { value: 'MThF 7:00 AM - 9:00 AM', label: 'MThF 7:00 AM - 9:00 AM' },
  { value: 'MThF 1:00 AM - 4:00 AM', label: 'MThF 1:00 AM - 4:00 AM' },
  { value: 'TW 1:30 PM - 4:30 PM', label: 'TW 1:30 PM - 4:30 PM' },
]);



//SECOND YEAR FIRST SEM
const [optionSubSFSem, setSubSFSem] = useState ([
  { value: 'Intro to Human Computer Interaction', label: 'Intro to Human Computer Interaction' },
  { value: 'Fundamentals of Database Systems', label: 'Fundamentals of Database Systems' },
  { value: 'Platform Technologies', label: 'Platform Technologies' }
]);

const [optionFacIntroHum, setOptionFacIntroHum] = useState([
  { value: 'Franklin Daugherty', label: 'Franklin Daugherty', count: 0 },
  { value: 'Taylor Ingram', label: 'Taylor Ingram', count: 0 },
  { value: 'Colin Glass', label: 'Colin Glass', count: 0 },
]);

const [optionFacFDS, setOptionFDS] = useState([
  { value: 'Addisyn Sampson', label: 'Addisyn Sampson', count: 0 },
  { value: 'Rachael Campos', label: 'Rachael Campos', count: 0 },
  { value: 'Desiree Juarez', label: 'Desiree Juarez', count: 0 },
]);

const [optionPlatTech, setOptionPlatTech] = useState([
  { value: 'Trystan Ashley', label: 'Trystan Ashley', count: 0 },
  { value: 'Elvis Downs', label: 'Elvis Downs', count: 0 },
  { value: 'Naomi French', label: 'Naomi French', count: 0 },
]);

const [optionSched21, setOptionSched21] = useState([
  { value: 'MThF 7:00 AM - 9:00 AM', label: 'MThF 7:00 AM - 9:00 AM' },
  { value: 'MThF 1:00 AM - 4:00 AM', label: 'MThF 1:00 AM - 4:00 AM' },
  { value: 'TW 1:30 PM - 4:30 PM', label: 'TW 1:30 PM - 4:30 PM' },
]);



//SECOND YEAR SECOND SEM
const [optionSubSSSem, setSubSSSem] = useState ([
  { value: 'Information Management', label: 'Information Management' },
  { value: 'Networking 1', label: 'Networking 1' },
  { value: 'Web Systems and Technolgies', label: 'Web Systems and Technolgies' }
]);

const [optionFacInfoMan, setOptionFacInfoMan] = useState([
  { value: 'Franklin Daugherty', label: 'Franklin Daugherty', count: 0 },
  { value: 'Taylor Ingram', label: 'Taylor Ingram', count: 0 },
  { value: 'Colin Glass', label: 'Colin Glass', count: 0 },
]);

const [optionFacNet1, setOptionFacNet1] = useState([
  { value: 'Addisyn Sampson', label: 'Addisyn Sampson', count: 0 },
  { value: 'Rachael Campos', label: 'Rachael Campos', count: 0 },
  { value: 'Desiree Juarez', label: 'Desiree Juarez', count: 0 },
]);

const [optionWST, setOptionWST] = useState([
  { value: 'Trystan Ashley', label: 'Trystan Ashley', count: 0 },
  { value: 'Elvis Downs', label: 'Elvis Downs', count: 0 },
  { value: 'Naomi French', label: 'Naomi French', count: 0 },
]);

const [optionSched22, setOptionSched22] = useState([
  { value: 'MThF 7:00 AM - 9:00 AM', label: 'MThF 7:00 AM - 9:00 AM' },
  { value: 'MThF 1:00 AM - 4:00 AM', label: 'MThF 1:00 AM - 4:00 AM' },
  { value: 'TW 1:30 PM - 4:30 PM', label: 'TW 1:30 PM - 4:30 PM' },
]);

//THIRD YEAR FIRST SEM
  const [optionSub, setOptionSub] = useState ([
    { value: 'Information Assurance and Security', label: 'Information Assurance and Security' },
    { value: 'Computer Programing 1', label: 'Computer Programing 1' },
    { value: 'Mobile Programming', label: '	Mobile Programming' }
  ]);

  const [optionFac, setOptionFac] = useState([
    { value: 'Dr. Smith', label: 'Dr. Smith', count: 0 },
    { value: 'Prof. Johnson', label: 'Prof. Johnson', count: 0 },
    { value: 'Ms. Davis', label: 'Ms. Davis', count: 0 },
  ]);

  const [optionFacIAS, setOptionFacIAS] = useState([
    { value: 'Emanuel Jackson', label: 'Emanuel Jackson', count: 0 },
    { value: 'Kathryn Lyons', label: 'Kathryn Lyons', count: 0 },
    { value: 'Deanna Price', label: 'Deanna Price', count: 0 },
  ]);

  const [optionMobProg, setoptionMobProg] = useState([
    { value: 'Jaylen Hutchinson', label: 'Jaylen Hutchinson', count: 0 },
    { value: 'Kaleigh Chambers', label: 'Kaleigh Chambers', count: 0 },
    { value: 'William Berg', label: 'William Berg', count: 0 },
  ]);

  const [optionSched, setOptionSched] = useState([
    { value: 'MWF 9:00 AM - 10:00 AM', label: 'MWF 9:00 AM - 10:00 AM' },
    { value: 'MWF 10:00 AM - 11:00 AM', label: 'MWF 10:00 AM - 11:00 AM' },
    { value: 'TTH 1:00 PM - 2:30 PM', label: 'TTH 1:00 PM - 2:30 PM' },
  ]);

  //THIRD YEAR SECOND SEM
  const [optionSubTSSem, setOptionSubTSSem] = useState ([
    { value: 'CAPSTONE Project and Research 1', label: 'CAPSTONE Project and Research 1' },
    { value: 'Integrative Programming and Technologies', label: 'Integrative Programming and Technologies' },
    { value: 'Applications Development and Emerging Technologies', label: 'Applications Development and Emerging Technologies' }
  ]);

  const [optionFacCapstone, setOptionFacCapstone] = useState([
    { value: 'Dr. Smith', label: 'Dr. Smith', count: 0 },
    { value: 'Prof. Johnson', label: 'Prof. Johnson', count: 0 },
    { value: 'Ms. Davis', label: 'Ms. Davis', count: 0 },
  ]);

  const [optionFacIPT, setOptionFacIPT] = useState([
    { value: 'Jonas Peters', label: 'Jonas Peters', count: 0 },
    { value: 'Colten Meadows', label: 'Colten Meadows', count: 0 },
    { value: 'Laney Murray', label: 'Laney Murray', count: 0 },
  ]);

  const [optionAppDev, setOptionAppDev] = useState([
    { value: 'Haiden Goodwin', label: 'Haiden Goodwin', count: 0 },
    { value: 'Kaleigh Chambers', label: 'Kaleigh Chambers', count: 0 },
    { value: 'Luke Rios', label: 'Luke Rios', count: 0 },
  ]);

  const [optionSched32, setOptionSched32] = useState([
    { value: 'MWF 9:00 AM - 10:00 AM', label: 'MWF 9:00 AM - 10:00 AM' },
    { value: 'MWF 10:00 AM - 11:00 AM', label: 'MWF 10:00 AM - 11:00 AM' },
    { value: 'TTH 1:00 PM - 2:30 PM', label: 'TTH 1:00 PM - 2:30 PM' },
  ]);


 //FOURTH YEAR FIRST SEM
 const [optionSubFourthFSem, setOptionSubFourthFSem] = useState ([
  { value: 'CAPSTONE Project and Research 2', label: 'CAPSTONE Project and Research 2' },
  { value: 'System Administration and Maintenance', label: 'System Administration and Maintenance' },
  { value: 'Social and Professional Issues', label: 'Social and Professional Issues' }
]);

const [optionFacCapstone2, setOptionFacCapstone2] = useState([
  { value: 'Mara Cross', label: 'Dr. Smith', count: 0 },
  { value: 'Jessie Day', label: 'Prof. Johnson', count: 0 },
  { value: 'Savanna Neal', label: 'Ms. Davis', count: 0 },
]);

const [optionFacSAM, setOptionFacSAM] = useState([
  { value: 'Charity Mcgee', label: 'Jonas Peters', count: 0 },
  { value: 'Colten Meadows', label: 'Colten Meadows', count: 0 },
  { value: 'Laney Ponce', label: 'Laney Murray', count: 0 },
]);

const [optionSPI, setOptionSPI] = useState([
  { value: 'Santiago Hopkins', label: 'Haiden Goodwin', count: 0 },
  { value: 'Giovanny Abbott', label: 'Kaleigh Chambers', count: 0 },
  { value: 'Kayla Joseph', label: 'Luke Rios', count: 0 },
]);

const [optionSched41, setOptionSched41] = [
  { value: 'MWF 9:00 AM - 10:00 AM', label: 'MWF 9:00 AM - 10:00 AM' },
  { value: 'MWF 10:00 AM - 11:00 AM', label: 'MWF 10:00 AM - 11:00 AM' },
  { value: 'TTH 1:00 PM - 2:30 PM', label: 'TTH 1:00 PM - 2:30 PM' },
];


  
  return (
      <div>

        {showTable ? (
        <>
            <Confirm onClick={() =>setShowTable(!showTable)}></Confirm>
        <div style={{backgroundColor:"black",  width: "100%", height: '70rem', position:"fixed", display:"flex", zIndex: 5, opacity: "50%", marginTop: "-15rem"}}></div>
        </>
        ) : null}
        <div>
          <div id='outer' className='outer' 
            style= {{backgroundColor:"white", zIndex: 2, width: "100%", height: "150rem", position:"absolute", paddingLeft: 200,}}>
            <form onSubmit={handleSubmit}>
                <div>
                <div>

                    <>
              <div  style={{display:"flex", flexDirection:"row", marginLeft: 50, marginTop: 50}}>
                  
                  <div><CheckBoxes value={PSA} onChange={handlePSA} label="PSA/NSO"></CheckBoxes></div>
                  <div><CheckBoxes value={Card} onChange={handleCard} label="Form 138/ Report Card"></CheckBoxes></div>
                  <div><CheckBoxes value={TOR} onChange={handleTOR} label="TOR"></CheckBoxes></div>
                  <div><CheckBoxes value={COR} onChange={handleCOR} label="COR/ Previous School ID"></CheckBoxes></div>
                  <div><CheckBoxes value={Pic} onChange={handlePic} label="2x2 Picture"></CheckBoxes></div>
              </div>
              <div style={{display:"flex", position:"absolute", marginTop:"-5rem", marginLeft: "102rem"}}>
                    <div style={{backgroundColor:"#ddd", width: "3rem", height:"3rem", borderRadius: 30}}>
                      <Button 
                        onClick={handleClickDown}
                        style={{ display: 'block',  marginLeft:"-13px", marginTop: 7, borderRadius: 50 }}
                        endIcon={<FaArrowDown/>}
                      />
                    </div>
                  </div>

              <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                  <div><InputBoxFinal value={studno} onChange={handlestudno} label="Student No."/> </div>
                  <div><InputBoxFinal value={balance} onChange={handlebalance} type="number" label="Balance"/></div>
              </div>

              <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                  <div><InputBoxFinal value={lastname} onChange={handleLnameChange} label="Last name"/></div>
                  <div><InputBoxFinal value={firstname} onChange={handleFnameChange} label="First name"/> </div> 
              </div>
              <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                  <div><InputBoxFinal value={middlename} onChange={handlemiddlename} label="Middle Name"/></div>  
                  <div><SelectionForm value={year} onChange={handleyear} label="Year Level" Label="Year Level" data={YearLevel}></SelectionForm></div>
              </div>
              <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                  <div><InputBoxFinal value={email} onChange={handleemail} label="Email Address"/></div>
                  <div><InputBoxFinal value={bday} onChange={handlebday} label="Birthday" id="date" type="date" InputLabelProps={{shrink: true}}/></div>
              </div>
                                  
              <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                  <div><InputBoxFinal value={address} onChange={handleAdd} label="Address"/></div>
                  <div><InputBoxFinal value={perAdd} onChange={handleperAdd} label="Permanent Address"/></div>
              </div>

              <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                  <div><InputBoxFinal value={postalcode} onChange={handlepostalcode} label="Postal Code"/></div>
                  <div><InputBoxFinal value={contactno} onChange={handlecontactno} type="number" label="Contact Number"/></div>
              </div>
              
              <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                  
                  <div><SelectionForm value={religion} onChange={handlereligion} label="Religion" Label="Religion" data={Religion}/></div>
                  <div style={{marginLeft: 10,}}><SelectionForm value={gender} onChange={handlegender} label="Gender" Label="Gender" data={Gender}/></div>
              </div>
              
              <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                  <div >
                    <SelectionForm value={status} onChange={handlestatus} label="Status" Label="Status" data={Status}></SelectionForm>
                  </div>
              </div>
                    </>
            </div>
                  <MaternalInfo 
                  parentalFName ={handleMfirstname}
                  parentalLName ={handleMlastname}
                  parentalAge ={handleMage}
                  parentalEducAttain ={handleMeducAttain}
                  parentalAdd ={handleMaddres}
                  parentalIncome ={handleMincome}
                  parentalEmail ={handleMEmail}
                  parentalContact ={handleMContact}
                  title="Maternal Information" 
                  valueFName ={Mfirstname}
                  valueLName ={Mlastname}
                  valueAge ={Mage}
                  valueEducAttain ={MeducAttain}
                  valueAdd ={Maddres}
                  valueIncome ={Mincome}
                  valueEmail ={MEmail}
                  valueContact ={MContact}
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
                  valueFName ={Pfirstname}
                  valueLName ={Plastname}
                  valueAge ={Page}
                  valueEducAttain ={PeducAttain}
                  valueAdd ={Paddres}
                  valueIncome ={Pincome}
                  valueEmail ={PEmail}
                  valueContact ={PContact}

                  />
                  <div style={{marginLeft: 46, marginTop: 50}}>
                      <text style={{fontSize: 30}}>Schools Attended by the Applicant</text>
                  </div>
                  <div style={{display:"flex", flexDirection:"row", marginBottom: -20}}>
                      <SchoolAttended value1={ElemName} value2={ElemAdd} onChangeName={handleElemName} onChangeAdd={handleElemAdd} label1="School name" label2="Address" title="ELEMENTARY"></SchoolAttended>
                      <SchoolAttended value1={JunioName} value2={JuniorAdd}  onChangeName={handleJunioName} onChangeAdd={handleJuniorAdd} label1="School name" label2="Address" title="JUNIOR HIGH SCHOOL"></SchoolAttended>
                  </div>
                  <div style={{display:"flex", flexDirection:"row"}}>
                      <SchoolAttended value1={SeniorName} value2={SeniorAdd} onChangeName={handleSeniorName} onChangeAdd={handleSeniorAdd} label1="School name" label2="Address" title="SENIOR JUNIOR HIGH SCHOOL"></SchoolAttended>
                      <SchoolAttended value1={CollageName} value2={CollegeAdd} onChangeName={handleCollageName} onChangeAdd={handleCollegeAdd} label1="School name" label2="Address" title="COLLEGE"></SchoolAttended>
                  </div>

                  <div className='inner'>
                      <div>
                        <div style={{marginLeft: "3rem"}}>
                          <h1>ADDING OF SUBJECTS</h1>
                        </div>
                        <div style={{marginLeft: "20rem"}}>
                        <div style={{marginTop: 50, marginLeft: 50}}>
                          <FacultyText title="YEAR LEVEL"></FacultyText>
                          <FacultyText title="SEMESTER"></FacultyText>
                          <FacultyText title="SUBJECT"></FacultyText>
                          <FacultyText title="FACULTY"></FacultyText>
                          <FacultyText title="SCHEDULE"></FacultyText>
                        </div>
                        
                          <div style={{marginTop: "-19rem"}}>
                              <SelectionSub  name="year"  className="year" value={yearLevel} options={yearlevelSelection} title="Year" onChange={setYearLevel}></SelectionSub>
                              <SelectionSub  name="semester"  className="semester" value={semester} options={semesterSelection} title="Semester" onChange={setSemester}></SelectionSub>
                              <SelectionSub  name="subject"  className="subject" value={selectedOptionSub} options={optionSubjects} title="Subject" onChange={handleSubjectChange}></SelectionSub>
                              <SelectionSub  name="faculty"  className="faculty" value={selectedOptionFac}  options={optionFacSub} title="Faculty" onChange={handleFacultyChange}></SelectionSub>
                              <SelectionSub  name="schedule" className="sched"  value={selectedOptionSched}  options={optionSched} title="Schedule" onChange={setSelectedOptionSched}></SelectionSub>
                              
                          </div>
                          <div style={{display:"flex", marginTop: 50, marginLeft: "38.5rem"}}>
                              <Button onClick={handleAddToTable} variant='contained'>Add</Button>
                          </div>
                        </div>
                        <div className='tableDesign'>
                          <h1 style={{marginBottom: 20}}>Subjects Enrolled</h1>
                          <table>
                            <thead>
                              <tr>
                                <th>Year Level</th>
                                <th>Semester</th>
                                <th>Subject</th>
                                <th>Faculty</th>
                                <th>Schedule</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {tableData.map((data, index) => (
                                <tr key={data}>
                                  <td>{data.YearLevel}</td>
                                  <td>{data.Semester}</td>
                                  <td>{data.subData}</td>
                                  <td>{data.facultyData}</td>
                                  <td>{data.schedData}</td>
                                  <td><Button style={{backgroundColor:"red", borderRadius: 50, paddingRight: 30}} endIcon={<FaTrashAlt/>} onClick={() => handleRemoveFromTable(index)} variant='contained'></Button></td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>  
                    </div>

                  <div style={{display:"flex", flexDirection:"row", marginLeft: "73rem", marginTop: "5rem", paddingBottom:"2rem"}}>
                      <PropsBtn backgroundColor='red' onClick={clearForm} props="CANCEL"></PropsBtn>
                      <PropsBtn type="submit" onClick={() =>handleSubmit} backgroundColor='#00B050' props="ENROLL STUDENT"></PropsBtn>
                  </div>
                  <div style={{display:"flex", position:"absolute", marginTop:"-10rem", marginLeft: "102rem"}}>
                    <div style={{backgroundColor:"#ddd", width: "3rem", height:"3rem", borderRadius: 30}}>
                      <Button
                        onClick={handleClickUp}
                        style={{ display: isVisible ? 'block' : 'none', marginLeft:"-13px", marginTop: 7, borderRadius: 50}}
                        endIcon={<FaArrowUp/>}
                      ></Button>
                    </div>
                  </div>
                  
                  
                </div>
              </form>
            </div>
        </div>
  </div>
  );
}



