import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function PostsItem() {

    const params = useParams()

    const [item, setItem] = useState( {} )

    useEffect(() => {
        fetch(`http://localhost:3000/Posts/${params.id}`)
        .then(res => res.json())
        .then(data => setItem(data))
    }, [])

    return (
        <article className='post'>
            <div className='post-image'>
                <img src={item.image} alt='' />
            </div>
        </article>
    )

}

export default PostsItem