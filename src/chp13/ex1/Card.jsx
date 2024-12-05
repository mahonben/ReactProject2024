import React from "react";

// function Card({ title, className, children }) {
//
//     return (
//         <div className={`card ${className}`}>
//             {title && <h2>{title}</h2>}
//             {children}
//         </div>
//     );
// }
function Card(props) {
    const {title, backgroundColor, children} = props;

    return (
        <div style={{
            margin: 8,
            padding: 8,
            borderRadius: 8,
            boxShadow: "0px 0px 4px grey",
            backgroundColor: backgroundColor || "red",
        }}>
            { title && <h1>{title}</h1>}
            {children}
        </div>
    );
}
export default Card