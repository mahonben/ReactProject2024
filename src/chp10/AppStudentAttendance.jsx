import React from "react";
import StudentAttendance from "./StudentAttendance";

const students1 = [
    {id:1, name:"마현빈", grade:2, major:"인공지능소프트웨어"},
    {id:2, name:"현빈", grade:3, major:"전기"},
    {id:3, name:"마빈", grade:3, major:"그린에너지"},
    {id:4, name:"마현", grade:4, major:"시각디자인"},
    {id:5, name:"빈마", grade:1, major:"인공지능소프트웨어"}
];

const students2 = [
    {id:1, name:"마빈", grade:2, major:"인공지능소프트웨어"},
    {id:2, name:"마현빈", grade:3, major:"전기"},
    {id:3, name:"마현", grade:3, major:"그린에너지"},
    {id:4, name:"빈마", grade:4, major:"시각디자인"},
    {id:5, name:"현마", grade:1, major:"인공지능소프트웨어"}
];

function AppStudentAttendance() {
    return(
        <div>
            <StudentAttendance students={students1}/>
            <hr/>
            <StudentAttendance students={students2}/>
        </div>
    );
}

export default AppStudentAttendance;