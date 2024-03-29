import * as React from 'react';
import { FormGroup, Checkbox, FormControlLabel } from '@mui/material';

export default function CheckBox({label, key, onChange, checked, value, disabled}) {
    return(
      <div>
        <FormGroup>
          <FormControlLabel value={value} control={<Checkbox disabled={disabled} checked={checked} onChange={onChange} key={key} sx={{ '& .MuiSvgIcon-root': { fontSize: 35} }}/>} label={label} />
        </FormGroup>
      </div>
    )
}


