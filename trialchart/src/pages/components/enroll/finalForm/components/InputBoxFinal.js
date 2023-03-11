import * as React from 'react';
import { Input, TextField } from '@mui/material';
import { Box } from '@mui/system';

export default function InputBoxFinal({classnameL, label, id, type, InputLabelProps}) {
    return(
      <div>

        <div className={classnameL} style={{}}>
          <div style={{marginRight: 10, display:"flex"}}>
            <div>
              <Box sx={{marginLeft: 5}}>
                <TextField disableUnderline label={label} id={id} type={type} sx= {{display:"flex", fontSize: 20, width: "40rem"}} InputLabelProps={InputLabelProps}></TextField>
              </Box>
            </div>

          </div>
        </div>
      </div>
    )
}


