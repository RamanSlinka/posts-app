import React from 'react';
import st from './MyModal.module.css';


const MyModals = ({children, visible, setVisible}) => {

    const rootClasses = [st.myModal]
    if(visible) {
        rootClasses.push(st.active)
    }

    return (
        <div className={rootClasses.join(' ')}
        onClick = {() => setVisible(false)}
        >
            <div className={st.myModalContent}
            onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default MyModals;