import {useState, useEffect} from "react"
import PostsItem from "./PostsItem";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/Posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    const postsList = posts.map((post, index) => (
        <PostsItem
            key={index}
            Image={post.Image}
            category={post.category}
            Title={post.Title}
            decription={decription}
        />
    ));

    return (
        <section className="posts">
            <div className="container posts-container">
                {postsList}
            </div>
        </section>
    );
}

export default Posts;
