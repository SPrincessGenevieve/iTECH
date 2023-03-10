import React from 'react';
import PropsBtn from './PropsBtn';
import { FaArrowCircleRight } from 'react-icons/fa';

function Confirm({props, onClick}) {
    return (

            <div>
            <div>
                <div style={{padding: 35, borderRadius: 30, width: "25%", height: "30%", color: "black", display:"flex", position:"fixed", zIndex: 6, backgroundColor:"white", marginLeft:"37%", marginTop:"10%"}}>
                    <h2 style={{marginTop: "-5%",display:"flex", width:"100%", justifyContent:"center"}}>SUCCESSFULLY ENROLLED</h2>
                    <img style={{display:"flex", position:"fixed", width: 100, height: 100, marginLeft:138, marginTop: 30}} src={require('./../../../Images/success.gif')}></img>
                    <div style={{display:"flex", position:"fixed", padding: 120, marginTop: 30,}}>
                        <PropsBtn endIcon={<FaArrowCircleRight/>} props="Proceed" onClick={onClick} backgroundColor="#00B050"></PropsBtn>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Confirm;