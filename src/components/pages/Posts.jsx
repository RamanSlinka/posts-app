import React, {useEffect,  useState} from "react";
import "./../../styles/App.css"
import {usePosts} from "../../hooks/usePost";
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../API/PostService";
import {getPageCount} from "../../utils/pages";
import MyButton from "../UI/button/MyButton";
import MyModals from "../UI/myModal/MyModals";
import PostForm from "../UI/PostForm";
import PostFilter from "../UI/PostFilter";
import PostList from "../UI/PostList";
import Loader from "../UI/loader/Loader";
import Pagination from "../UI/pagination/Pagination";


function Posts() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);


    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    });

    useEffect(() => {
        fetchPosts()
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }


    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)

    }

    return (
        <div className="App">
            <MyButton
                style={{marginTop: "30px"}}
                onClick={() => setModal(true)}>
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
            {postError &&
            <h2> Error ${postError}</h2>
            }
            {isPostsLoading
                ? <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}><Loader/></div>
                : < PostList
                    remove={removePost}
                    posts={sortedAndSearchedPosts} title="List of posts"/>
            }
            <Pagination changePage={changePage}
                        page={page}
                        totalPages={totalPages}
            />
        </div>
    );
}

export default Posts;
