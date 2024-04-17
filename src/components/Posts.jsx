import React, { useState, useEffect } from 'react';
import PostsItem from './PostsItem';


function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/Posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const postsList = posts.map(post => (
    <PostsItem
      key={post.id}
      image={post.Image}
      category={post.Category}
      title={post.Title}
      description={post.Decription}
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

