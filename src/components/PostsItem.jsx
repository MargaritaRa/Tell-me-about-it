import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function PostsItem() {

    const {id} = useParams()

    const [item, setItem] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/Posts/${id}`)
        .then(res => res.json())
        .then(data => setItem(data))
    }, [id])

    const [image, title, decription, category] = item;

    return (
        <article className='post'>
            <div className='post-image'>
                <img src={item.image} alt='' />
            </div>
            <div className="post-content">
                <Link to={`posts/${id}`}> 
                    <h3>{title}</h3>
                </Link>
                <p>{item.description}</p>
                <div className="post-footer">
                    <Link to={`/post/categories/${category}`}>{category}</Link>
                </div>
            </div>
        </article>
    )

}

export default PostsItem