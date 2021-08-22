import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../API/PostService";
import Loader from "../UI/loader/Loader";

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
        <div>
            <h3>3245 dfghh ID = {params.id}</h3>
            {isLoading
                ? <Loader/>
                : <div>{post.id}.{post.title} </div>
            }
            <h2>
                Comments
            </h2>
            {isComLoading
                ? <Loader/>
                : <div>
                    {comments.map(comm =>
                         <div key={comm.id} style={{marginTop: "15px"}}>
                             <h5>{comm.email}</h5>
                             <div>{comm.body}</div>
                         </div>
                    )}
                </div>

            }
        </div>
    );
};

export default PostIdPage;