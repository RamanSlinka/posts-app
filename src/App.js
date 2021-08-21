import React, {useMemo, useState} from "react";
import "./styles/App.css"
import PostList from "./components/UI/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/UI/PostFilter";
import MyModals from "./components/UI/myModal/MyModals";
import {usePosts} from "./components/hooks/usePost";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: '1TypeScript', body: 'TypeScript DescriptionDescriptionDescriptionDescription'},
        {id: 3, title: 'JS', body: 'DS'}
    ])
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
        <div className="App">
            <MyButton
                style={{marginTop: "30px"}}
                onClick={()=> setModal(true)}>
                Create post
            </MyButton>
            <MyModals
                visible={modal}
            setVisible={setModal}
            >
                <PostForm create={createPost}/>
            </MyModals>

            <hr style={{margin: "15px 0"}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />

            < PostList
                remove={removePost}
                posts={sortedAndSearchedPosts} title="List of posts"/>

        </div>
    );
}

export default App;
