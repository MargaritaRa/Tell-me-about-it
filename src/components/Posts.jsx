import {useState, useEffect} from "react"
import PostsItem from "./PostsItem";

function Posts(){

    const[posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/Posts')
        .then(response => response.json())
        .then(data => setPosts(data))
    },[])

    const postsList =
        posts.map(({Image, Title, category, decription}, index)=> <PostsItem key={index} Image={Image} category={category} />)

    return(
        <section className="posts">
            {postsList}
        </section>
    )
}

export default Posts