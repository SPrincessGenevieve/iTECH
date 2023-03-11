import React from 'react';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
function InputLong({label, disabled, value, type}) {
    return (
        <div>
            <Box sx={{marginLeft: 5}}>
                <TextField disabled={disabled} focused color="grey" value={value} type={type} disableUnderline sx={{display:"flex", fontSize: 20, width: "70rem"}} label={label}></TextField>
              </Box>
        </div>
    );
}

export default InputLong;