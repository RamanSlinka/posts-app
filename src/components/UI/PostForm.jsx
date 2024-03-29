import React, {useState} from 'react';
import MyInput from "./input/MyInput";
import MyButton from "./button/MyButton";
import   "./../../styles/App.css"

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
      const newPost = {
            ...post, id: Date.now()
      }
        create(newPost)
        setPost({title: '', body: ''})

    }

    return (

            <form>
                <MyInput
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder="post title"/>
                <MyInput
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text"
                    placeholder="post description"/>
               <div className={"postFormBtn"}>
                <MyButton onClick={addNewPost}>Create post</MyButton>
               </div>
            </form>

    );
};

export default PostForm;