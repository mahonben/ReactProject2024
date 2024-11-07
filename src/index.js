import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './chp03/Book.css'
// import './chp04/Button.css'
//import './chp04/Clack.css'
//import './chp06/NotificationCss.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from "./chp03/Library";
import Button from "./chp04/Button";
import ConfirmDialog from "./chp04/ConfirmDialog";
import Clock from "./chp04/Clock";
import CommentList from "./chp05/CommentList";
import NotificationList from "./chp06/NotificationList";
import Accommodate from "./chp07/Accommodate";
import Toggle from "./chp08/Toggle";
import MyButton from "./chp08/MyButton";
import Toggle2 from "./chp08/Toggle2";
import ClickButton from "./chp08/ClickButton";
import Counter from "./chp08/Counter";
import InputTest from "./chp08/InputTest";
import ConfirmButton from "./chp08/ConfirmButton";
import ConfirmButton2 from "./chp08/ConfirmButton2";
import ConfirmButton3 from "./chp08/ConfirmButton3";
import Greeting from "./chp09/Greeting";
import LoginControl from "./chp09/LoginControl";

const root = ReactDOM.createRoot(document.getElementById('root'));

        root.render(
            <React.StrictMode>
                <LoginControl/>
            </React.StrictMode>
        );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
