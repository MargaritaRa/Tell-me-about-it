
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
                Title: title,
                Image: image,
                Category: category,
                Decription: decription,
                // likes:0
            })
        })
        .then (response => response.json())
        .then (newPost => {
            setPosts(posts => [...posts, newPost]); 
            setTitle('');
            setImage('');
            setCategory('');
            setDescription('');
            alert('Post created successfully!');
        })
        .catch(error => {
            console.error('Error creating post:', error);
        });
    };
  

    const handleChange = (html) => {
        const strippedHtml = html.replace(/<p>/g, '').replace(/<\/p>/g, '');
        setDescription(strippedHtml);
      };

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

        
            
            <ReactQuill 
            modules={modules} 
            formats={formats} 
            value={decription}
            // onChange={setDescription}
            onChange = {handleChange}
            />
            

            <input type="file" 
            name="image" 
            value={image} 
            onChange={event => setImage(event.target.value)} />
            <button type="submit" value="Add Post" className='btn-danger'>Create</button>

        </form>
    )
}

export default PostForm