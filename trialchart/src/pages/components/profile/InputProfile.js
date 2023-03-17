import React from 'react';
import { FormHelperText, TextField } from '@mui/material';
import { Box } from '@mui/system';
function InputProfile({label, disabled, value, type, defaultValue, focused}) {
    return (
        <div>
            <Box sx={{marginLeft: 5}}>
                <TextField defaultValue={defaultValue} focused={focused} value={value} type={type} disabled={disabled} color="grey" disableUnderline sx={{display:"flex", fontSize: 20, width: "160%"}} label={label}>

                </TextField>
              </Box>
        </div>
    );
}

export default InputProfile;