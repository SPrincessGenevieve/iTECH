import * as React from 'react';
import { Input, TextField } from '@mui/material';
import { Box } from '@mui/system';

export default function InputBox({classnameL, label}) {
    return(
      <div>

        <div className={classnameL} >
          <div style={{marginRight: 10, display:"flex"}}>
            <div>
              <Box sx={{marginLeft: 5}}>
                <TextField disableUnderline sx={{display:"flex", fontSize: 20, width: "97%"}} label={label}></TextField>
              </Box>
            </div>

          </div>
        </div>
      </div>
    )
}


