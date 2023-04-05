import React from 'react';
import InputBoxFinal from './components/InputBoxFinal';

function ParentalInfo({title, parentalFName, parentalLName, parentalAge, parentalEducAttain, parentalAdd, parentalIncome, parentalEmail, parentalContact,
    valueFName, valueLName, valueAge, valueEducAttain, valueAdd, valueIncome, valueEmail, valueContact, onChange
}) {
    return (
        <div>
            <div style={{marginLeft: 46, marginTop: 50}}>
                <text style={{fontSize: 30}}>{title}</text>
            </div>
            <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div>
                    <InputBoxFinal value={valueFName}  onChange={parentalFName} name="paternalLastname" label="Last name"></InputBoxFinal>
                </div>
                <div>
                    <InputBoxFinal value={valueLName} onChange={parentalLName} name="paternalFirstname" label="First name"></InputBoxFinal>
                </div>
            </div>

            <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div>
                    <InputBoxFinal value={valueAge} onChange={parentalAge} name="paternalAge" type="number" label="Age"></InputBoxFinal>
                </div>
                <div>
                    <InputBoxFinal value={valueEducAttain} onChange={parentalEducAttain} name="paternalEducAttain" label="Educational Attainment"></InputBoxFinal>
                </div>
            </div>
            
            <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div>
                    <InputBoxFinal value={valueAdd} onChange={parentalAdd} name="paternalAddress" label="Address"></InputBoxFinal>
                </div>
                <div>
                    <InputBoxFinal value={valueContact} onChange={parentalContact} name="paternalContact" type="number" label="Contact No."></InputBoxFinal>
                </div>
            </div>

            <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div>
                    <InputBoxFinal value={valueEmail} onChange={parentalEmail} name="paternalEmail" label="Email Address"></InputBoxFinal>
                </div>
                <div>
                    <InputBoxFinal value={valueIncome} onChange={parentalIncome} name="paternalIncome" type="number" label="Average Income"></InputBoxFinal>
                </div>
            </div>
        </div>
    );
}

export default ParentalInfo;