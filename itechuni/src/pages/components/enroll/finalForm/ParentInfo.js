import React from 'react';
import InputBoxFinal from './components/InputBoxFinal';

function ParentInfo({title}) {
    return (
        <div>
            <div style={{marginLeft: 46, marginTop: 50}}>
                <text style={{fontSize: 30}}>{title}</text>
            </div>
            <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div>
                    <InputBoxFinal label="Last name"></InputBoxFinal>
                </div>
                <div>
                    <InputBoxFinal label="First name"></InputBoxFinal>
                </div>
            </div>

            <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div>
                    <InputBoxFinal type="number" label="Age"></InputBoxFinal>
                </div>
                <div>
                    <InputBoxFinal label="Educational Attainment"></InputBoxFinal>
                </div>
            </div>
            
            <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div>
                    <InputBoxFinal label="Address"></InputBoxFinal>
                </div>
                <div>
                    <InputBoxFinal type="number" label="Contact No."></InputBoxFinal>
                </div>
            </div>

            <div style={{display:"flex", flexDirection:"row", marginLeft: 10, marginTop: 30}}>
                <div>
                    <InputBoxFinal label="Email Address"></InputBoxFinal>
                </div>
                <div>
                    <InputBoxFinal type="number" label="Average Income"></InputBoxFinal>
                </div>
            </div>
        </div>
    );
}

export default ParentInfo;