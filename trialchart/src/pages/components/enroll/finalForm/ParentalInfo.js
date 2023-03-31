import React from 'react';
import InputBoxFinal from './components/InputBoxFinal';

function ParentalInfo({title, parentalFName, parentalLName, parentalAge, parentalEducAttain, parentalAdd, parentalIncome, parentalEmail, parentalContact,
    NparentalFName, NparentalLName, NparentalAge, NparentalEducAttain, NparentalAdd, NparentalIncome, NparentalEmail, NparentalContact, onChange
}) {
    return (
        <div>
            <div style={{marginLeft: 46, marginTop: 50}}>
                <text style={{fontSize: 30}}>{title}</text>
            </div>
            <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div>
                    <InputBoxFinal onChange={parentalFName} name="paternalLastname" label="Last name"></InputBoxFinal>
                </div>
                <div>
                    <InputBoxFinal onChange={parentalLName} name="paternalFirstname" label="First name"></InputBoxFinal>
                </div>
            </div>

            <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div>
                    <InputBoxFinal onChange={parentalAge} name="paternalAge" type="number" label="Age"></InputBoxFinal>
                </div>
                <div>
                    <InputBoxFinal onChange={parentalEducAttain} name="paternalEducAttain" label="Educational Attainment"></InputBoxFinal>
                </div>
            </div>
            
            <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div>
                    <InputBoxFinal onChange={parentalAdd} name="paternalAddress" label="Address"></InputBoxFinal>
                </div>
                <div>
                    <InputBoxFinal onChange={parentalContact} name="paternalContact" type="number" label="Contact No."></InputBoxFinal>
                </div>
            </div>

            <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div>
                    <InputBoxFinal onChange={parentalEmail} name="paternalEmail" label="Email Address"></InputBoxFinal>
                </div>
                <div>
                    <InputBoxFinal onChange={parentalIncome} name="paternalIncome" type="number" label="Average Income"></InputBoxFinal>
                </div>
            </div>
        </div>
    );
}

export default ParentalInfo;