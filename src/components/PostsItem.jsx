import React from 'react';
import { Link } from 'react-router-dom';

function PostsItem({ image, category, title, description }) {
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
          <Link to={`/post/categories/${category}`}>{category}</Link>
        </div>
      </div>
    </article>
  );
}

export default PostsItem;
