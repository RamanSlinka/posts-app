import React from 'react';
import MyInput from "./input/MyInput";
import MySelect from "./select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                placeholder="Search..."
                value={filter.query}
                onChange={(e) => setFilter({...filter,query: e.target.value})}
            />

            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Sort by"
                options={[
                    {value: "title", name: "By title"},
                    {value: "body", name: "By description"}
                ]}
            />
            <span > Filter</span>
        </div>
    );
};

export default PostFilter;