import * as React from 'react';
import { FormGroup, Checkbox, FormControlLabel } from '@mui/material';

export default function CheckBox({label}) {
    return(
      <div>
        <FormGroup>
          <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 35} }}/>} label={label} />
        </FormGroup>
      </div>
    )
}


