import React from 'react';
import { Link } from 'react-router-dom';

function PostsItem({ image, category, title, description, post, posts, setPosts }) {

    // function handleUpdateLikes() {
    //     fetch( `http://localhost:3000/Posts/${post.id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify({ likes: post.likes + 1 })
    //     })
    //     .then (response => response.json())
    //     .then (updatedPost => {
    //         const updatedPostData = posts.map(post => {
    //             if (post.id !== updatedPost.id) {
    //                 return post
    //             } else {
    //                 return updatedPost
    //             }
    //         })
    //         setPosts ( updatedPostData );
    //     })
    // }

  return (
    <article className="post">
      <div className="post-image">
        <img src={image} alt="" />
      </div>
      <div className="post-content">
        <Link to={`/posts/${title}`}>
          <h3>{title}</h3>
        </Link>
        <p>{description}</p>
        <div className="post-footer">
          <Link to={`/post/categories/${category}`} className='btn btn-category'>{category}</Link>
          {/* <button onClick={handleUpdateLikes}>{post.likes} Likes</button> */}
        </div>
      </div>
    </article>
  );
}

export default PostsItem;
