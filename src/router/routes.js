import About from "../components/pages/About";
import Posts from "../components/pages/Posts";
import PostIdPage from "../components/pages/PostIdPage";
import Login from "../components/pages/Login";


export const privateRoutes = [
    {path: '/about', component: About, exact: true },
    {path: '/posts', component: Posts, exact: true },
    {path: '/posts/:id', component: PostIdPage, exact: true }
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true }

]