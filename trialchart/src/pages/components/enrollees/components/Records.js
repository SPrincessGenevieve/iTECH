import React, { useState, useEffect } from 'react';
import Navbar from '../../../../Navbar';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Button, TextField } from '@material-ui/core';
import { Edit, Delete, KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import TextFieldProps from '../TextFieldProps';
import CheckBox from '../../enroll/finalForm/components/CheckBoxes';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: '#3A302A !important',
      color:'white !important'
    },
  },
});

function Record() {

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClickColor = (buttonName) => {
    setActiveButton(buttonName);
  };

  const getButtonStyle = (buttonName) => {
    if (buttonName === activeButton) {
      return { ...buttonStyles, backgroundColor: '#00FF00' };
    } else {
      return buttonStyles;
    }
  };

  const buttonStyles = {
    borderRadius: 0,
    width: '29.2rem',
    border: 1,
    borderColor: '#3A302A',
    borderRight: 0,
    backgroundColor: '',
  };



  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const classes = useStyles();
  const [activeTab, setActiveTab] = useState('student');
  const [userData, setUserData] = useState({});
  const [row, setRow] = useState({});
  const [open, setOpen] = useState({});
  const [editingRow, setEditingRow] = useState(null);

  const [newStudno, setNewStudno] = useState("");
  const [newFirsttname, setNewFirsttname] = useState("");
  const [newLastname, setNewLastname] = useState("");
  const [newMiddleName, setNewMiddleName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newBday, setNewBday] = useState("");
  const [newAddres, setNewAddres] = useState("");
  const [newPreAddres, setNewPerAddres] = useState("");
  const [newPostalCode, setNewPostalCode] = useState("");
  const [newContact, setNewContact] = useState("");
  const [newReligion, setNewReligion] = useState("");
  const [newGender, setNewGender] = useState("");
  const [newStatus, setNewStatus] = useState("");
  
  const [newMlastname, setnewMlastname] = useState("");
  const [newMfirstname, setnewMfirstname] = useState("");
  const [newMage, setnewMage] = useState("");
  const [newMeducation, setnewMeducation] = useState("");
  const [newMaddress, setnewMaddress] = useState("");
  const [newMincome, setnewMincome] = useState("");
  const [newMemail, setnewMemail] = useState("");
  const [newMcontact, setnewMcontact] = useState("");

  const [newPlastname, setnewPlastname] = useState("");
  const [newPfirstname, setnewPfirstname] = useState("");
  const [newPage, setnewPage] = useState("");
  const [newPeducation, setnewPeducation] = useState("");
  const [newPaddress, setnewPaddress] = useState("");
  const [newPincome, setnewPincome] = useState("");
  const [newPemail, setnewPemail] = useState("");
  const [newPcontact, setnewPcontact] = useState("");

  const [newElemName, setnewElemName] = useState("");
  const [newElemAdd, setnewElemAdd] = useState("");
  const [newJunioName, setnewJunioName] = useState("");
  const [newJuniorAdd, setnewJuniorAdd] = useState("");
  const [newSeniorName, setnewSeniorName] = useState("");
  const [newSeniorAdd, setnewSeniorAdd] = useState("");
  const [newCollageName, setnewCollageName] = useState("");
  const [newCollegeAdd, setnewCollegeAdd] = useState("");

  const isTORChecked = row.TOR === true || row.TOR === "on";
  const isCardChecked = row.Card === true || row.Card === "on";
  const isCORChecked = row.COR === true || row.COR === "on";
  const isPicChecked = row.Pic === true || row.Pic === "on";
  const isPSAChecked = row.PSA === true || row.PSA === "on";
  




  const [isEditing, setIsEditing] = useState(false);
  const [editedRow, setEditedRow] = useState(row);

// Declare state variables for edited student data
const [editedStudno, setEditedStudno] = useState('');
const [editedName, setEditedName] = useState('');
const [editedBalance, setEditedBalance] = useState('');
const [editedYear, setEditedYear] = useState('');
const [editedemail, setEditedemail] = useState('');
const [editedbday, setEditedbday] = useState('');
const [editedperAdd, setEditedperAdd] = useState('');
const [editedpostalcode, setEditedpostalcode] = useState('');
const [editedcontactno, setEditedcontactno] = useState('');
const [editedreligion, setEditedreligion] = useState('');
const [editedgender, setEditedgender] = useState('');
const [editedstatus, setEditedstatus] = useState('');

const [editedMlastname, setEditedMlastname] = useState('');
const [editedMfirstname, setEditedMfirstname] = useState('');
const [editedMage, setEditedMage] = useState('');
const [editedMeducAttain, setEditedMeducAttain] = useState('');
const [editedMaddres, setEditedMaddres] = useState('');
const [editedMincome, setEditedMincome] = useState('');
const [editedMEmail, setEditedMEmail] = useState('');
const [editedMContact, setEditedMContact] = useState('');
const [editedPlastname, setEditedPlastname] = useState('');
const [editedPfirstname, setEditedPfirstname] = useState('');
const [editedPage, setEditedPage] = useState('');
const [editedPeducAttain, setEditedPeducAttain] = useState('');
const [editedPaddres, setEditedPaddres] = useState('');
const [editedPincome, setEditedPincome] = useState('');
const [editedPEmail, setEditedPEmail] = useState('');
const [editedPContact, setEditedPContact] = useState('');
const [editedElemName, setEditedElemName] = useState('');
const [editedElemAdd, setEditedElemAdd] = useState('');
const [editedJunioName, setEditedJunioName] = useState('');
const [editedJuniorAdd, setEditedJuniorAdd] = useState('');
const [editedSeniorName, setEditedSeniorName] = useState('');
const [editedSeniorAdd, setEditedSeniorAdd] = useState('');
const [editedCollageName, setEditedCollageName] = useState('');
const [editedCollegeAdd, setEditedCollegeAdd] = useState('');

// Define a function to handle canceling the edit mode
const handleCancelEdit = () => {
  setEditingRow(null);
  setEditedStudno('');
  setEditedName('');
  setEditedYear('');
  setEditedBalance('');
  setEditedemail('');
  setEditedbday('');
  setEditedperAdd('');
  setEditedpostalcode('');
  setEditedcontactno('');
  setEditedreligion('');
  setEditedgender('');
  setEditedstatus('');
  setEditedMlastname('');
  setEditedMfirstname('');
  setEditedMage('');
  setEditedMeducAttain('');
  setEditedMaddres('');
  setEditedMincome('');
  setEditedMEmail('');
  setEditedMContact('');
  setEditedPlastname('');
  setEditedPfirstname('');
  setEditedPage('');
  setEditedPeducAttain('');
  setEditedPaddres('');
  setEditedPincome('');
  setEditedPEmail('');
  setEditedPContact('');
  setEditedElemName('');
  setEditedElemAdd('');
  setEditedJunioName('');
  setEditedJuniorAdd('');
  setEditedSeniorName('');
  setEditedSeniorAdd('');
  setEditedCollageName('');
  setEditedCollegeAdd('');
};

  useEffect(() => {
    fetchData();
  }, []);


  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

 
 
  const handleButtonClick = (tab, button) => {
    setActiveTab(tab);
  };
 
  const filteredData = data.filter(row =>
  `${row.firstname} ${row.middlename} ${row.lastname} ${row.year}`
    .toLowerCase()
    .includes(searchTerm.toLowerCase())
);
  const toggleDetails = (studno) => {
    setOpen((prevState) => ({ ...prevState, [studno]: !prevState[studno] }));
  };

  const renderSubjectRows = (subjects) => {
    return subjects.map((subject, index) => (
      <TableRow key={`${subject.subData}-${index}`}>
        <TableCell>{subject.subData}</TableCell>
        <TableCell>{subject.facultyData}</TableCell>
        <TableCell>{subject.schedData}</TableCell>
      </TableRow>
    ));
  };

  
  const handleSave = (editedRow) => {
  setIsEditing(false);
  const newData = { ...editedRow, 
    studno: editedStudno || editedRow.studno, 
    firstname: editedName.split(' ')[0] || editedRow.firstname,
    middlename: editedName.split(' ')[1] || editedRow.middlename,
    lastname: editedName.split(' ')[2] || editedRow.lastname,
    year: editedYear || editedRow.year, 
    balance: editedBalance || editedRow.balance,
    email: editedemail || editedRow.email,
    bdayaddress: editedbday || editedRow.bdayaddress,
    perAdd: editedperAdd || editedRow.perAdd,
    postalcode: editedpostalcode || editedRow.postalcode,
    contactno: editedcontactno || editedRow.contactno,
    religion: editedreligion || editedRow.religion,
    gender: editedgender || editedRow.gender,
    status: editedstatus || editedRow.status,
    Mlastname: editedMlastname || editedRow.Mlastname,
    Mfirstname: editedMfirstname || editedRow.Mfirstname,
    Mage: editedMage || editedRow.Mage,
    MeducAttain: editedMeducAttain || editedRow.MeducAttain,
    Maddres: editedMaddres || editedRow.Maddres,
    Mincome: editedMincome || editedRow.Mincome,
    MEmail: editedMEmail || editedRow.MEmail,
    MContact: editedMContact || editedRow.MContact,
    Plastname: editedPlastname || editedRow.Plastname,
    Pfirstname: editedPfirstname || editedRow.Pfirstname,
    Page: editedPage || editedRow.Page,
    PeducAttain: editedPeducAttain || editedRow.PeducAttain,
    Paddres: editedPaddres || editedRow.Paddres,
    Pincome: editedPincome || editedRow.Pincome,
    PEmail: editedPEmail || editedRow.PEmail,
    PContact: editedPContact || editedRow.PContact,
    ElemName: editedElemName || editedRow.ElemName,
    ElemAdd: editedElemAdd || editedRow.ElemAdd,
    JunioName: editedJunioName || editedRow.JunioName,
    JuniorAdd: editedJuniorAdd || editedRow.JuniorAdd,
    SeniorName: editedSeniorName || editedRow.SeniorName,
    SeniorAdd: editedSeniorAdd || editedRow.SeniorAdd,
    CollegeName: editedCollageName || editedRow.CollegeName,
    CollegeAdd: editedCollegeAdd || editedRow.CollegeAdd

  };
  axios.put(`http://localhost:3000/posts/${editedRow.id}`, newData)
    .then(response => {
      console.log(response.data);
      setData(data.map(record => record.id === editedRow.id ? response.data : record));
    })
    .catch(error => {
      console.log(error);
    });
};

  const handleCancel = () => {
    setEditedRow(row);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedRow((prevState) => ({ ...prevState, [name]: value }));
  };


  const handleSaveMain = () => {
    const newData = { ...row, studno: newStudno };
    axios
      .put(`http://localhost:3000/posts/${row.id}`, newData)
      .then(response => {
        console.log(response.data);
        setRow(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };


  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/posts");
      const data = response.data[0];
      setRow(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .get('http://localhost:3000/posts')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleEdit = (row) => {
    setEditingRow(row);
  };

  const handleDelete = row => {
    axios
      .delete(`http://localhost:3000/posts/${row.id}`)
      .then(response => {
        console.log(response.data);
        setData(data.filter(record => record.id !== row.id));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditingRow((prevRow) => ({
      ...prevRow,
      [name]: value,
    }));
  };
  









  



  return (
    <>
      <div style={{marginTop:50}}>
        <div>
        <input
          style={{padding: 20, borderColor: "grey", margin: 10, marginBottom: 20, display:"flex", width:"20%", borderRadius: 20, borderWidth: 1}}
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Student No.</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Year Level</TableCell>
                <TableCell>Balance</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((row) => (
                <React.Fragment key={row.studno}>
                  <TableRow>
                  {editingRow === row ? (
                    <React.Fragment>
                      <TableCell><TextField label={row.studno} value={editedStudno} onChange={(e) => setEditedStudno(e.target.value)} /></TableCell>
                      <TableCell><TextField label={`${row.firstname} ${row.middlename} ${row.lastname} `} value={editedName} onChange={(e) => setEditedName(e.target.value)} /></TableCell>
                      <TableCell><TextField label={row.year} value={editedYear} onChange={(e) => setEditedYear(e.target.value)} /></TableCell>
                      <TableCell><TextField sx={{backgroundColor:"red"}} label={row.balance} value={editedBalance} onChange={(e) => setEditedBalance(e.target.value)} /></TableCell>
                      <TableCell>
                        <Button onClick={() => handleSave(row)}>Save</Button>
                        <Button onClick={() => handleCancelEdit()}>Cancel</Button>
                      </TableCell>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <TableCell>{row.studno}</TableCell>
                      <TableCell>{`${row.firstname} ${row.middlename} ${row.lastname}`}</TableCell>
                      <TableCell>{row.year}</TableCell>
                      <TableCell>₱ {row.balance}</TableCell>
                      <TableCell>
                        <Button onClick={() => handleEdit(row)}>
                          <Edit />
                        </Button>
                        <Button onClick={() => handleDelete(row)}>
                          <Delete />
                        </Button>
                        <KeyboardArrowDown onClick={() => toggleDetails(row.studno)} />
                      </TableCell>
                    </React.Fragment>
                  )}
                </TableRow>

                  {open[row.studno] && (
                    <div style={{backgroundColor:"white", position:"absolute", width:"99%", zIndex: 1, display:"flex", justifyContent:"center"}}>
                       <div style={{marginTop: -10}}>
                        <div style={{marginTop: 30, display:"flex", flexDirection:"row"}}>
                          <div style={{marginRight: 20}}><button className={classes.root} variant='contained' onClick={() => handleButtonClick('student')} style={{backgroundColor: activeTab === "student" ? '#3A302A' : "white", color: activeTab === "student" ? 'white' : "#3A302A", borderRadius: 0, width: "25rem", borderRadius: 10, height:"3rem", border: 1, borderColor:"#3A302A", borderRight: 0}}>STUDENT INFORMATION</button></div>
                          <div style={{marginRight: 20}}><button className={classes.root} variant='contained' onClick={() => handleButtonClick('subject')} style={{backgroundColor: activeTab === "subject" ? '#3A302A' : "white", color: activeTab === "subject" ? 'white' : "#3A302A", borderRadius: 0, width: "25rem", borderRadius: 10, height:"3rem", border: 1, borderColor:"#3A302A", borderRight: 0}}>SUBJECTS ENROLLED</button></div>
                          <div style={{marginRight: 20}}><button className={classes.root} variant='contained' onClick={() => handleButtonClick('parents')} style={{backgroundColor: activeTab === "parents" ? '#3A302A' : "white", color: activeTab === "parents" ? 'white' : "#3A302A", borderRadius: 0, width: "25rem", borderRadius: 10, height:"3rem", border: 1, borderColor:"#3A302A", borderRight: 0}}>PARENT INFORMATION</button></div>
                          <div style={{marginRight: 20}}><button className={classes.root} variant='contained' onClick={() => handleButtonClick('school')} style={{backgroundColor: activeTab === "school" ? '#3A302A' : "white", color: activeTab === "school" ? 'white' : "#3A302A", borderRadius: 0, width: "25rem", borderRadius: 10, height:"3rem", border: 1, borderColor:"#3A302A"}} >SCHOOL ATTENDED</button></div>
                       </div>
                       
                       {activeTab === "student" &&
                        <div style={{marginLeft: "30rem", marginTop: "2rem"}}>
                          <div style={{display:"flex", flexDirection:"row", marginLeft: "10rem", marginBottom:"2rem"}}>
                              <div style={{marginRight: 30}}>
                                <CheckBox checked={row.PSA}  disabled label="PSA/NSO"></CheckBox>
                              </div>
                              <div style={{marginRight: 30}}>
                                <CheckBox checked={row.Card}  disabled label="Card"></CheckBox>
                              </div>
                              <div style={{marginRight: 30}}>
                                <CheckBox checked={row.TOR} disabled label="TOR"></CheckBox>
                              </div>
                              <div style={{marginRight: 30}}>
                                <CheckBox checked={row.COR} disabled label="COR"></CheckBox>
                              </div>
                              <div style={{marginRight: 30}}>
                                <CheckBox checked={row.Pic} disabled label="2x2 Picture"></CheckBox>
                              </div>
                            </div>
                          <div style={{flexDirection:"row", display:"flex"}}>
                            <TextFieldProps
                            label={row.bday}
                            placeholder={row.bday}
                            value={newBday}
                            onChange={(e) => setNewBday(e.target.value)}
                            helperText="Birth Date"
                            disabled
                            />
                            <TextFieldProps
                              label={row.email}
                              placeholder={row.email}
                              value={newEmail}
                              onChange={(e) => setNewEmail(e.target.value)}
                              helperText="Email Address"
                              disabled
                            />
                            </div>

                            <div style={{flexDirection:"row", display:"flex"}}>
                            <TextFieldProps
                              label={row.perAdd}
                              placeholder={row.perAdd}
                              value={newPreAddres}
                              onChange={(e) => setNewPerAddres(e.target.value)}
                              helperText="Permanent Address"
                              disabled
                            />
                            <TextFieldProps
                              label={row.postalcode}
                              placeholder={row.postalcode}
                              value={newPostalCode}
                              onChange={(e) => setNewPostalCode(e.target.value)}
                              helperText="Postal Code"
                              disabled
                            />
                            </div>

                            <div style={{flexDirection:"row", display:"flex"}}>
                              <TextFieldProps
                              label={row.contactno}
                              placeholder={row.contactno}
                              value={newContact}
                              onChange={(e) => setNewContact(e.target.value)}
                              helperText="Contact No."
                              disabled
                              />
                              <TextFieldProps
                                label={row.religion}
                                placeholder={row.religion}
                                value={newReligion}
                                onChange={(e) => setNewReligion(e.target.value)}
                                helperText="Religion"
                                disabled
                              />
                              </div>

                              <div style={{flexDirection:"row", display:"flex"}}>
                              <TextFieldProps
                                label={row.gender}
                                placeholder={row.gender}
                                value={newGender}
                                onChange={(e) => setNewGender(e.target.value)}
                                helperText="Gender"
                                disabled
                              />
                              <TextFieldProps
                                label={row.status}
                                placeholder={row.status}
                                value={newStatus}
                                onChange={(e) => setNewStatus(e.target.value)}
                                helperText="Status"
                                disabled
                              />
                            </div>
                            
                        </div>
                      }

                        {activeTab === 'parents' && (
                          <div style={{marginTop: "2rem", display:"flex", flexDirection:"column", alignItems:"center"}}>
                          <div style={{marginBottom: 20}}>
                            <h2>MATERNAL INFORMATION</h2>
                          </div>
                          <div>
                          <div style={{flexDirection:"row", display:"flex"}}>
                            <TextFieldProps
                            label={row.Mlastname}
                            placeholder={row.Mlastname}
                            value={newMlastname}
                            onChange={(e) => setnewMlastname(e.target.value)}
                            helperText="Last name"
                            disabled
                            />
                            <TextFieldProps
                              label={row.Mfirstname}
                              placeholder={row.Mfirstname}
                              value={newMfirstname}
                              onChange={(e) => setnewMfirstname(e.target.value)}
                              helperText="First name"
                              disabled
                            />
                            </div>

                            <div style={{flexDirection:"row", display:"flex"}}>
                            <TextFieldProps
                              label={row.Mage}
                              placeholder={row.Mage}
                              value={newMage}
                              onChange={(e) => setnewMage(e.target.value)}
                              helperText="Age"
                              disabled
                            />
                            <TextFieldProps
                              label={row.MeducAttain}
                              placeholder={row.MeducAttain}
                              value={newMeducation}
                              onChange={(e) => setnewMeducation(e.target.value)}
                              helperText="Educational Attainment"
                              disabled
                            />
                            </div>

                            <div style={{flexDirection:"row", display:"flex"}}>
                              <TextFieldProps
                              label={row.Maddres}
                              placeholder={row.Maddres}
                              value={newMaddress}
                              onChange={(e) => setnewMaddress(e.target.value)}
                              helperText="Address"
                              disabled
                              />
                              <TextFieldProps
                                label={row.Mincome}
                                placeholder={row.Mincome}
                                value={newMincome}
                                onChange={(e) => setnewMincome(e.target.value)}
                                helperText="Average Income"
                                disabled
                              />
                              </div>

                              <div style={{flexDirection:"row", display:"flex"}}>
                              <TextFieldProps
                                label={row.MEmail}
                                placeholder={row.MEmail}
                                value={newMemail}
                                onChange={(e) => setnewMemail(e.target.value)}
                                helperText="Email"
                                disabled
                              />
                               <TextFieldProps
                                label={row.MContact}
                                placeholder={row.MContact}
                                value={newMcontact}
                                onChange={(e) => setnewMcontact(e.target.value)}
                                helperText="Contact"
                                disabled
                              />
                            </div>
                            </div>
                            <div style={{marginBottom: 20}}>
                              <h2>PATERNAL INFORMATION</h2>
                            </div>
                            <div style={{}}>
                            <div style={{flexDirection:"row", display:"flex"}}>
                            <TextFieldProps
                            label={row.Plastname}
                            placeholder={row.Plastname}
                            value={newPlastname}
                            onChange={(e) => setnewPlastname(e.target.value)}
                            helperText="Last name"
                            disabled
                            />
                            <TextFieldProps
                              label={row.Mfirstname}
                              placeholder={row.Mfirstname}
                              value={newPfirstname}
                              onChange={(e) => setnewPfirstname(e.target.value)}
                              helperText="First name"
                              disabled
                            />
                            </div>

                            <div style={{flexDirection:"row", display:"flex"}}>
                            <TextFieldProps
                              label={row.Mage}
                              placeholder={row.Mage}
                              value={newPage}
                              onChange={(e) => setnewPage(e.target.value)}
                              helperText="Age"
                              disabled
                            />
                            <TextFieldProps
                              label={row.PeducAttain}
                              placeholder={row.PeducAttain}
                              value={newPeducation}
                              onChange={(e) => setnewPeducation(e.target.value)}
                              helperText="Educational Attainment"
                              disabled
                            />
                            </div>

                            <div style={{flexDirection:"row", display:"flex"}}>
                              <TextFieldProps
                              label={row.Paddres}
                              placeholder={row.Paddres}
                              value={newPaddress}
                              onChange={(e) => setnewPaddress(e.target.value)}
                              helperText="Address"
                              disabled
                              />
                              <TextFieldProps
                                label={row.Mincome}
                                placeholder={row.Mincome}
                                value={newPincome}
                                onChange={(e) => setnewPincome(e.target.value)}
                                helperText="Average Income"
                                disabled
                              />
                              </div>

                              <div style={{flexDirection:"row", display:"flex"}}>
                              <TextFieldProps
                                label={row.PEmail}
                                placeholder={row.PEmail}
                                value={newPemail}
                                onChange={(e) => setnewPemail(e.target.value)}
                                helperText="Email"
                                disabled
                              />
                               <TextFieldProps
                                label={row.PContact}
                                placeholder={row.PContact}
                                value={newPcontact}
                                onChange={(e) => setnewPcontact(e.target.value)}
                                helperText="Contact"
                                disabled
                              />
                            </div>
                            </div>
                        </div>
                        )}

                        {activeTab === 'subject' && (
                          <div>
                            <div style={{display:"flex", position:"absolute", backgroundColor:"white", width: "80%", marginBottom:"10rem"}}>
                              <div>
                            <TableBody>
                              {filteredData.map((row) => (
                                <React.Fragment key={row.studno} >
                                  {open[row.studno] && (
                                    <TableRow>
                                      <div style={{backgroundColor:"white", width: "121rem", height:"100rem", marginLeft:"-10rem", position:"absolute"}}></div>
                                      <TableCell style={{ paddingBottom: 0, paddingTop: 30, width:"100rem", position:"absolute", display:"flex"}} colSpan={5}>
                                        <div>
                                          <Table>
                                            <TableHead>
                                              <TableRow>
                                                <TableCell style={{backgroundColor:"#342A24", color: "white", textAlign:"center", width:"40rem"}}>Subject</TableCell>
                                                <TableCell style={{backgroundColor:"#342A24", color: "white", textAlign:"center", width:"40rem"}}>Faculty</TableCell>
                                                <TableCell style={{backgroundColor:"#342A24", color: "white", textAlign:"center", width:"40rem"}}>Schedule</TableCell>
                                              </TableRow>
                                            </TableHead>
                                            <TableBody>
                                              {renderSubjectRows(row.subjectsEnrolled)}
                                            </TableBody>
                                          </Table>
                                        </div>
                                      </TableCell>
                                    </TableRow>
                                  )}
                                </React.Fragment>
                              ))}
                            </TableBody>
                            </div>
                          </div>
                          </div>
                        )}

                        {activeTab === 'school' && (
                          <div style={{marginTop: "2rem", display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <div style={{marginBottom:"4rem"}}>
                              <div style={{position:"absolute", display:"flex", marginLeft:"-26.3rem"}}>
                                <h2>ELEMENTARY</h2>
                              </div>
                              <div style={{position:"absolute", marginLeft:20}}>
                                <h2>JUNIOR HIGH</h2>
                              </div>
                            </div>
                            <div style={{flexDirection:"row", display:"flex"}}>
                             <TextFieldProps
                            label={row.ElemName}
                            placeholder={row.ElemName}
                            value={newElemName}
                            onChange={(e) => setnewElemName(e.target.value)}
                            helperText="School Name"
                            disabled
                            />
                            <TextFieldProps
                              label={row.JunioName}
                              placeholder={row.JunioName}
                              value={newJunioName}
                              onChange={(e) => setnewJunioName(e.target.value)}
                              helperText="School Name"
                              disabled
                            />
                            </div>

                            <div style={{flexDirection:"row", display:"flex"}}>
                            <TextFieldProps
                              label={row.ElemAdd}
                              placeholder={row.ElemAdd}
                              value={newElemAdd}
                              onChange={(e) => setnewElemAdd(e.target.value)}
                              helperText="School Address"
                              disabled
                            />
                            <TextFieldProps
                              label={row.JuniorAdd}
                              placeholder={row.JuniorAdd}
                              value={newJuniorAdd}
                              onChange={(e) => setnewJuniorAdd(e.target.value)}
                              helperText="School Address"
                              disabled
                            />
                            </div>

                            <div style={{marginBottom:"4rem"}}>
                              <div style={{position:"absolute", display:"flex", marginLeft:"-26.3rem"}}>
                                <h2>SENIOR HIGH</h2>
                              </div>
                              <div style={{position:"absolute", marginLeft:20}}>
                                <h2>COLLEGE</h2>
                              </div>
                            </div>

                            <div style={{flexDirection:"row", display:"flex"}}>
                              <TextFieldProps
                              label={row.SeniorName}
                              placeholder={row.SeniorName}
                              value={newSeniorName}
                              onChange={(e) => setnewSeniorName(e.target.value)}
                              helperText="School Name"
                              disabled
                              />
                              <TextFieldProps
                                label={row.CollageName}
                                placeholder={row.CollageName}
                                value={newCollageName}
                                onChange={(e) => setnewCollageName(e.target.value)}
                                helperText="School Name"
                                disabled
                              />
                              </div>

                              <div style={{flexDirection:"row", display:"flex"}}>
                              <TextFieldProps
                                label={row.SeniorAdd}
                                placeholder={row.SeniorAdd}
                                value={newSeniorAdd}
                                onChange={(e) => setnewSeniorAdd(e.target.value)}
                                helperText="School Address"
                                disabled
                              />
                              <TextFieldProps
                                label={row.CollegeAdd}
                                placeholder={row.CollegeAdd}
                                value={newCollegeAdd}
                                onChange={(e) => setnewCollegeAdd(e.target.value)}
                                helperText="School Address"
                                disabled
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

    </>
  );
}

export default Record;
