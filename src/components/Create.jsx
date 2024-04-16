import { useState } from "react"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'


function Create({ postsList }){
    const[title, setTitle] = useState('')
    const[category, setCategory] = useState('uncatergorized')
    const[description, setDescription] = useState('')
    const[image, setImage] = useState('')

    const postCategories = [Education, Entertainment, Art, Business, Fashion, SelfHelp, Music]

    const modules = {
        toolbar: [
            [{'header' : [1,2,false]}],
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

    return(
        <section className="createPosts">
            <div className="container createPosts-container">
                <h2>Create Posts</h2>
                    <form action="" className="form createPosts-form">
                        <p className="form-message">This is the invalid message</p>
                        <input type="text" placeholder="Title" name="title" value={title} 
                        onChange={event => setTitle(event.target.value)} autoFocus />
                        <select name="category" value={category} onChange={event => setCategory(event.target.value)}>
                            {
                                postCategories.map(categ => <option key={categ}>{categ}</option>)
                            }
                        </select>

                            <ReactQuill modules={modules} formats={formats} value={description}
                            onChange={event => setDescription(event.target.value)}
                            />

                        <input type="file" name="title" value={image} 
                        onChange={event => setImage(event.target.value)} accept="png, jpg, jpeg" />

                        <button type="submit" className="">Create</button>
                    </form>
            </div>
        </section>
    )
}

export default Create