import * as React from 'react';
import { TextField, MenuItem, Box} from '@mui/material';

export default function Selection({data, helperText, id, defaultValue, label}) {

    return(
        <div>
             <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
            <TextField
            id={id}
            select
            label={label}
            helperText={helperText}
            defaultValue={defaultValue}
            >
            {data.map((SUB1) => (
                <MenuItem key={SUB1.value} value={SUB1.value}>
                {SUB1.label}
                </MenuItem>
            ))}
            </TextField>
        </Box>
        </div>
        )
}
