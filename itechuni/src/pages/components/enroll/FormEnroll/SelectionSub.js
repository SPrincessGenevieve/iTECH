import React from 'react';
import Select from 'react-select';

function SelectionSub({options, className, value, onChange, name, getOptionLabel, getOptionValue}) {
    return (
        <div style={{marginTop: 50, display:"flex", flexDirection:"row"}}>
            <div style={{marginLeft: 200, width: "30rem", marginBottom: -30}}>
                <Select name={name} value={value} className={className} options={options} onChange={onChange} getOptionLabel={getOptionLabel} getOptionValue={getOptionValue}/>
            </div>

        </div>
    );
}

export default SelectionSub;