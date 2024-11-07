import React, {useState} from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Greeting from "./Greeting";



function LoginControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick=()=> {
        setIsLoggedIn(true);
    }

    const handleLogoutClick=()=> {
        setIsLoggedIn(false);
    }

    let btn;
    if(isLoggedIn){
        btn = <LogoutButton onClick={handleLogoutClick}/>

    }else{
        btn = <LoginButton onClick={handleLoginClick}/>

        }

    return(
        <div>
            <Greeting isLogedIn={isLoggedIn}/>
            {btn}
        </div>
    );
}

export default LoginControl



