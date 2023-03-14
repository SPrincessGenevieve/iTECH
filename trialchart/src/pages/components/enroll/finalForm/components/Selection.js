import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { OutlinedInput } from '@mui/material';
import { MenuProps } from '@mui/material';

export default function SelectionForm({disabled, key, InputLabelID, Label, id, options, value, onChange, name, getOptionLabel, getOptionValue, data, label, defaultValue, placeholder, MenuProps}) {

  return (
    <FormControl sx={{minWidth: "40rem", marginLeft: 5}}>
        <InputLabel id={InputLabelID}>{Label}</InputLabel>
        <Select
        key={key}
        disabled={disabled}
          id={id}
          value={value}
          label={label}
          onChange={onChange}
        >{data.map((SUB1) => (
          <MenuItem key={SUB1.value} value={SUB1.value}>
          {SUB1.label}
          </MenuItem>
      ))}</Select>
      </FormControl>
  );

}
