import React, {useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: '1TypeScript', body: 'TypeScript DescriptionDescriptionDescriptionDescription'},
        {id: 3, title: 'JS', body: 'DS'}
    ])
const [selectedSort, setSelectedSort] = useState('')
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a, b)=> a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: "15px 0"}}/>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts }
                    defaultValue="Sort by"
                    options={[
                    {value: "title", name: "By title"},
                    {value: "body", name: "By description"}
                ]}
                />
            </div>
            {posts.length
                ?
                < PostList
                    remove={removePost}
                    posts={posts} title="List of posts"/>

                :
                <h1 style={{textAlign: "center"}}> Posts not found</h1>
            }


        </div>
    );
}

export default App;
