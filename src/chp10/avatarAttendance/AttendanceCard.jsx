import React from "react";
import './AttendanceCard2.css'
import img1 from '../imgs/11.png'

const students = [
    {id:1, name:"마현빈", grade:2, major:"인공", avatar: "https://randomuser.me/api/portraits/men/1.jpg"},
    {id:2, name:"현빈", grade:3, major:"전기", avatar: "https://randomuser.me/api/portraits/women/2.jpg"},
    {id:3, name:"마빈", grade:3, major:"그린", avatar: "https://randomuser.me/api/portraits/men/3.jpg"},
    {id:4, name:"마현", grade:4, major:"시각", avatar: "https://randomuser.me/api/portraits/women/4.jpg"},
    {id:5, name:"마마~", grade:4, major:"컴공", avatar: "https://randomuser.me/api/portraits/men/5.jpg"},
    {id:6, name:"우우우~", grade:4, major:"우주", avatar: "https://randomuser.me/api/portraits/women/6.jpg"},
    {id:7, name:"빈현", grade:1, major:"강한", avatar: "https://randomuser.me/api/portraits/women/7.jpg"},
    {id:8, name:"빈살만", grade:2, major:"약한", avatar: "https://randomuser.me/api/portraits/women/8.jpg"},
    {id:9, name:"만빈", grade:4, major:"약한", avatar: img1}
];

function AttendanceCard() {
    return(
        <div className="attendance-container">
            <h2 className="attendance-title">학생 사진 출석부</h2>
            <div className="card-container">
                {
                    students.map((student) => (
                        <div className="student-card">
                            <img src={student.avatar} alt={student.name} className="student-avatar"/>
                            <div className="student-info">
                                <h3>{student.name}</h3>
                                <p>{student.grade}학년 | {student.major}전공</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default AttendanceCard;