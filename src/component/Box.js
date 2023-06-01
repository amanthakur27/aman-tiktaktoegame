import React from "react";
function Box({onClick,value}) {
    return (
        <>
            <div onClick={onClick} style={{
                border: "1px solid red", 
                height: "70px", 
                width: "70px", 
                display: "flex",
                justifyContent: "center",
                alignItems: "center" ,
                // backgroundColor: 'black'
                }}>
            <h5>{value}</h5>
        </div >
        </>
    )
}
export default Box