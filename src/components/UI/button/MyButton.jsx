import React from 'react';
import st from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={st.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;