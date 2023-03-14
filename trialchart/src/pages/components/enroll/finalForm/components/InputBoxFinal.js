import * as React from 'react';
import { Input, TextField } from '@mui/material';
import { Box } from '@mui/system';

export default function InputBoxFinal({disabled, classnameL, label, id, type, InputLabelProps, onChange, value, name, key}) {
    return(
      <div>

        <div className={classnameL} style={{}}>
          <div style={{marginRight: 10, display:"flex"}}>
            <div>
              <Box sx={{marginLeft: 5}}>
                <TextField disabled={disabled} name={name} value={value} onChange={onChange} disableUnderline label={label} id={id} type={type} key={key} sx= {{display:"flex", fontSize: 20, width: "40rem"}} InputLabelProps={InputLabelProps}></TextField>
              </Box>
            </div>

          </div>
        </div>
      </div>
    )
}


