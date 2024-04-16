
import { useState } from 'react'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

function PostForm({posts, setPosts}) {

    const [image, setImage] = useState("")
    const [category, setCategory] = useState('')
    const [title, setTitle] = useState('')
    const [decription, setDescription] = useState('')



    const modules = {
        toolbar: [
            [{'header' : [1,2,3, 4, 5,false]}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': "ordered"}, {'list': "bullet"}, {'indent': "+1"},{'indent': "-1"}],
            ['link', 'image'],
            ['clean']
        ]
    }

    const formats =[
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]

    function handleSubmit(event) {
        event.preventDefault()

        fetch('http://localhost:3000/Posts', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify( {
                title,
                image,
                category,
                decription,
                // likes:0
            })
        })
        .then (response => response.json())
        .then (newPostObj => {
            setPosts([...posts, newPostObj])
        })
    }

    return(
        <form onSubmit={handleSubmit} className="form createPosts-form">
            <h2>Create a New Post</h2>
            <p className="form-message"> Go ahead, add your favorite book and let's talk all about it</p>

            <input type='text'
            name='title'
            placeholder='Title'
            onChange={event => setTitle(event.target.value)}
            value={title} />

            <input type='text'
            name='category'
            placeholder='Category'
            onChange={event => setCategory(event.target.value)}
            value={category} />

            {/* <textarea type='text'
            name='decription'
            placeholder='Decription'
            onChange={event => setDescription(event.target.value)}
            value={category}> Type your description here </textarea> */}

            <ReactQuill 
            modules={modules} 
            formats={formats} 
            value={decription}
            onChange={setDescription}
            />

            <input type="file" 
            name="image" 
            value={image} 
            onChange={event => setImage(event.target.value)} 
            accept="png, jpg, jpeg" />

            <button type="submit" value="Add Post">Create</button>

        </form>
    )
}

export default PostForm