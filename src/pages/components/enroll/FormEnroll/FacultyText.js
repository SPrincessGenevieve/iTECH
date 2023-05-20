import React from 'react';

function FacultyText({title}) {
    return (
        <div style={{fontSize: 20, marginBottom: 30, fontWeight:"lighter"}}>
            <div>
                <text>{title}</text>
            </div>
        </div>
    );
}

export default FacultyText;