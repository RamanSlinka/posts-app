import React, {useContext} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import {AuthContext} from "../../context";

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault()
        setIsAuth(true);
        localStorage.setItem('auth' , 'true')
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Login"/>
                <MyInput type="password" placeholder="Password"/>
                <MyButton >Sign in</MyButton>
            </form>
        </div>
    );
};

export default Login;