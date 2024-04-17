import React from 'react';
import { Link } from 'react-router-dom';

function PostsItem({ id,image, category, title, description, onDelete }) {


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
          <h4 className='btn btn-category'>{category}</h4>
        </div>
      </div>
    </article>
  );
}

export default PostsItem;
