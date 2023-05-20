import React from 'react';
import InputBoxFinal from './components/InputBoxFinal';

function MaternalInfo({title, parentalFName, parentalLName, parentalAge, parentalEducAttain, parentalAdd, parentalIncome, parentalEmail, parentalContact,
    valueFName, valueLName, valueAge, valueEducAttain, valueAdd, valueIncome, valueEmail, valueContact, onChange
}) {
    return (
        <div>
            <div style={{marginLeft: 46, marginTop: 50}}>
                <text style={{fontSize: 30}}>{title}</text>
            </div>
            <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div>
                    <InputBoxFinal value={valueFName} onChange={parentalFName} name="maternalLastname" label="Last name"></InputBoxFinal>
                </div>
                <div>
                    <InputBoxFinal value={valueLName} onChange={parentalLName} name="maternalFirstname" label="First name"></InputBoxFinal>
                </div>
            </div>

            <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div>
                    <InputBoxFinal value={valueAge} onChange={parentalAge} name="maternalAge" type="number" label="Age"></InputBoxFinal>
                </div>
                <div>
                    <InputBoxFinal value={valueEducAttain} onChange={parentalEducAttain} name="maternalEducAttain" label="Educational Attainment"></InputBoxFinal>
                </div>
            </div>
            
            <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div>
                    <InputBoxFinal value={valueAdd} onChange={parentalAdd} name="maternalAddress" label="Address"></InputBoxFinal>
                </div>
                <div>
                    <InputBoxFinal value={valueContact} onChange={parentalContact} name="maternalContact" type="number" label="Contact No."></InputBoxFinal>
                </div>
            </div>

            <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div>
                    <InputBoxFinal value={valueEmail} onChange={parentalEmail} name="maternalEmail" label="Email Address"></InputBoxFinal>
                </div>
                <div>
                    <InputBoxFinal value={valueIncome} onChange={parentalIncome} name="maternalIncome" type="number" label="Average Income"></InputBoxFinal>
                </div>
            </div>
        </div>
    );
}

export default MaternalInfo;