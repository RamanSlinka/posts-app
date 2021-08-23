import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../API/PostService";
import Loader from "../UI/loader/Loader";
import st from "./Post.module.css"

const PostIdPage = () => {

    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(params.id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div className={st.postIdPageWrapper}>
            <div className={st.postIdWrapper}>
                <h5>You open post with ID = {params.id}</h5>
                {isLoading
                    ? <Loader/>
                    : <div>{post.id}.{post.title} </div>
                }
                <h2>
                    Comments:
                </h2>
                {isComLoading
                    ? <Loader/>
                    : <div>
                        {comments.map(comm =>
                            <div key={comm.id}>
                                <h4 className={st.mailFromComments}>{comm.email}</h4>
                                <div>{comm.body}</div>
                            </div>
                        )}
                    </div>
                }
            </div>
        </div>
    );
};

export default PostIdPage;