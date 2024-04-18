
import { useState } from 'react'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'


function PostForm({setPosts}) {

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

    const handleSubmit = (event) => {
        event.preventDefault();
    
        fetch('http://localhost:3000/Posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            Title: title,
            Image: image,
            Category: category,
            Description: decription
          })
        })
          .then((response) => response.json())
          .then((newPost) => {
            setTitle('');
            setImage('');
            setCategory('');
            setDescription('');
            setPosts((prevPosts) => [...prevPosts, newPost]);
          })
          .catch((error) => {
            console.error('Error creating post:', error);
          });
      };
      
      

    return(
        <form onSubmit={handleSubmit} className="form createPosts-form">
            <h2>Create a New Post</h2>
            <p className="form-message"> Add your favorite book and let's chat about it.</p>

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
            onChange = {setDescription}
            placeholder="Write your post here..."
            element = "textarea"
            />
            

            <input  
            name="image" 
            type='text'
            placeholder='Type image URL'
            value={image} 
            onChange={event => setImage(event.target.value)} />
            <button type="submit" value="Add Post" className='btn-danger'>Create</button>

        </form>
    )
}

export default PostForm