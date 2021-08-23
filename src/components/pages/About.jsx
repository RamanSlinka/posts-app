import React from 'react';
import st from "./Login.module.css"

const About = () => {
    return (
        <div className={st.aboutPage}>
        <h1>
            This application is made using technologies such as:
        </h1>
            <ul>
                <li>Managed input.</li>
                <li>Hooks: useState, useEffect, useMemo, useContext, useHistory, useParams.</li>
                <li>Working with lists. Converting an array of objects to an array of React elements.</li>
                <li>Post creation form. Managed and unmanaged components.</li>
                <li>Creation of a UI library. CSS modules. Children props.</li>
                <li>Prevent the page from being refreshed on form submit.</li>
                <li>Conditional rendering.</li>
                <li>Sorting. Drop-down list.
                    Search. Filtration.</li>
                <li>Modal window.</li>
                <li>Animations. React transition group.</li>
                <li>Decomposition. Custom hooks.</li>
                <li>Working with the server. Axios. Indication of loading data from the server.</li>
                <li>Loader component. Animations.</li>
                <li>Paged output. Pagination</li>
                <li>React router. Page navigation. BrowserRouter, Route, Switch, Redirect.</li>
                <li>Dynamic navigation. useHistory, useParams.</li>
                <li>useContext. Global data.</li>
                <li> User authorization.</li>
                <li> Use Formik and validation authorization. </li>
            </ul>
        </div>
    );
};

export default About;