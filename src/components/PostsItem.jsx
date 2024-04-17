import React from 'react';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.bubble.css"

function PostsItem({ image, category, title, description}) {

console.log(description)
  return (
    <article className="post">
      <div className="post-image">
        <img src={image} alt="" />
      </div>
      <div className="post-content">
        <Link to={`/posts/${title}`}>
          <h3>{title}</h3>
        </Link>
        <ReactQuill
        value={description}
        readOnly= {true}
        theme='bubble' />
        <div className="post-footer">
          <h4 className='btn btn-category'>{category}</h4>
        </div>
      </div>
    </article>
  );
}

export default PostsItem;
