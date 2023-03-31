import { Button } from '@mui/material';
import React from 'react';

function PropsBtn({props, onClick, backgroundColor, startIcon, endIcon, type}) {
    return (
        <div>
            <Button type={type} endIcon={endIcon} startIcon={startIcon} onClick={onClick} sx={{borderColor:"#3A302A", padding: 2, color: "white", backgroundColor: {backgroundColor}, marginLeft: 1}} variant='contained'>{props}</Button>
        </div>
    );
}

export default PropsBtn;