import React from "react";


export default function Container({ title, amount }) {
    return (
        <>
            <div className='Box' style={{ backgroundColor: "white", height: "15rem", width: "25rem", borderRadius: 25, marginRight: 45 }}>
                <div className='text' style={{ paddingTop: 5 }}>
                    <h1 style={{ textAlign: "center", fontSize: 50 }}>{amount}</h1>
                    <h3 style={{ fontWeight: "lighter", textAlign: "center", fontSize: 25 }}>{title}</h3>
                </div>
            </div>
        </>
    )
}