import React from 'react';
import st from './MyInput.module.css'

const MyInput =React.forwardRef((props,ref) => {
    return (
        <div>
            <input className={st.myInput} {...props}/>
        </div>
    );
});

export default MyInput;