import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";
import st from "./Navbar.module.css"

const Navbar = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }


    return (
        <div className={st.navbar}>
            <div className={st.navbar__btn}>
                <MyButton onClick={logout}>Sign Up</MyButton>
            </div>

            <div className={st.navbar__links}>

                <Link style={{textDecoration: "none"}} to="/about">
                    <span className={st.link}>ABOUT APP</span>
                </Link>

                <Link style={{textDecoration: "none"}} to="/posts">
                    <span className={st.link}>POSTS</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;