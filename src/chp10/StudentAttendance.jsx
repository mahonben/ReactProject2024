import React from "react";

const students = [
    {id:1, name:"마현빈", grade:2, major:"인공지능소프트웨어"},
    {id:2, name:"현빈", grade:3, major:"전기"},
    {id:3, name:"마빈", grade:3, major:"그린에너지"},
    {id:4, name:"마현", grade:4, major:"시각디자인"},
    {id:5, name:"빈마", grade:1, major:"인공지능소프트웨어"}
];

function StudentAttendance(){
    return(
        <div>
            <h1>학생 출석부</h1>
            <ul>
                {
                    students.map((student) => (
                    <li key={student.id}>
                        <b>{student.name}</b> - {student.grade}학년, {student.major}전공
                    </li>
                ))
            }
            </ul>
        </div>

    );
}


export default StudentAttendance;