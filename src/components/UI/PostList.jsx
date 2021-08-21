import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {
if (!posts.length) {
    return <h2
        style={{textAlign: "center"}}> Posts not found
    </h2>
}
    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((posts, index) =>
                    <CSSTransition
                        key={posts.id}
                    timeout={500}
                    classNames="post"
                    >
                < PostItem
                    remove={remove}
                    number={index + 1}
                    post={posts}
                    key={posts.id}/>
                    </CSSTransition>

                )}
            </TransitionGroup>

        </div>
    );
};

export default PostList;