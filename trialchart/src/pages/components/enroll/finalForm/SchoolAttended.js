import React from 'react';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';



function SchoolAttended({inputProps, disabled, editable, id, label1, label2, type, InputLabelProps, title, schoolName, schoolAddress, name1, name2, onChangeName, onChangeAdd, defaultValueAddress, defaultValueName}) {
    return (
        <div style={{display:"flex", flexDirection:"row"}}>
            <div>
                <div style={{marginLeft: 46, marginTop: 50, marginBottom: 20}}>
                    <text style={{fontSize: 25}}>{title}</text>
                </div>
                <div style={{marginBottom: 30}}>
                    <Box sx={{marginLeft: 6.2}}>
                        <TextField inputProps={inputProps} defaultValue={defaultValueName} editable={editable} disabled={disabled} onChange={onChangeName}  name={name1} value={schoolName} disableUnderline label={label1} id={id} type={type} sx= {{display:"flex", fontSize: 20, width: "40rem"}} InputLabelProps={InputLabelProps}></TextField>
                    </Box>
                </div>
                <div style={{marginBottom: 30}}>
                    <Box sx={{marginLeft: 6.2}}>
                        <TextField editable={editable} defaultValue={defaultValueAddress}  disabled={disabled} onChange={onChangeAdd}  name={name2} value={schoolAddress} disableUnderline label={label2} id={id} type={type} sx= {{display:"flex", fontSize: 20, width: "40rem"}} InputLabelProps={InputLabelProps}></TextField>
                    </Box>
                </div>
             </div>
        </div>
    );
}

export default SchoolAttended;