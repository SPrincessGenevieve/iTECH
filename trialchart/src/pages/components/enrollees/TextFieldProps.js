import React from 'react';
import { TextField } from '@material-ui/core';


function TextFieldProps({label, placeholder, value, onChange, variant, fullWidth, helperText, disabled}) {
    return (
        <div>
            <TextField
            label={label}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            variant="outlined"
            style={{width: "25rem", marginLeft: 20, marginRight: 20, marginBottom: 20}}
            helperText={helperText}
            disabled={disabled}
            
        />            
        </div>
    );
}

export default TextFieldProps;