import React, {useContext} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import {AuthContext} from "../../context";
import st from "./Login.module.css"
import {useFormik} from "formik";

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);


    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''

        },
        validate: (values) => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 6) {
                errors.password = 'Password must be 6 characters or more'
            }


            return errors;
        },
        onSubmit: values => {
        //  event.preventDefault()
            setIsAuth(true);
            localStorage.setItem('auth', 'true')
            formik.resetForm();
        },
    })


    return (
        <div className={st.login__wrapper}>
            <h1 className={st.title}>Login</h1>
            <div className={st.condition}> * To run the application - enter any E-MAIL and PASSWORD in the fields</div>
            <form onSubmit={formik.handleSubmit}>
                <MyInput type="email"
                         name="email"
                         {...formik.getFieldProps('email')}
                         placeholder="Login"/>
                {formik.touched.email && formik.errors.email &&
                <div style={{'color': 'red'}}>{formik.errors.email}</div>}

                <MyInput type="password"
                         name="password"
                         {...formik.getFieldProps('password')}
                         placeholder="Password"/>
                {formik.touched.password && formik.errors.password &&
                <div style={{'color': 'red'}}>{formik.errors.password}</div>}

                <div className={st.btn}>
                    <MyButton>Sign in</MyButton>
                </div>
            </form>
        </div>
    );
};

export default Login;