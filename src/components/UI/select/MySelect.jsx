import React from 'react';
import st from "./MySelect.module.css"

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (

            <select className={st.select}
                value={value}
                onChange={e => onChange(e.target.value)}
            >
                <option disabled value="">{defaultValue}</option>
                {options.map(option =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )}
            </select>

    );
};

export default MySelect;