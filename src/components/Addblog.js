import { useState } from "react";
import { useHistory } from "react-router";

const Addblog = () => {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [body, setBody] = useState("")
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newBlog = {title, author, body}
        try{
            fetch("http://localhost:5000/blogs", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(newBlog)
        })
        .then(res => history.push("/"))
        }
        catch(err) {
            console.log(err)
        }
        // .catch(err => console.log(err))
    }

    return (
        <div className="addblog">
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <br />
                <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                /> <br />

                <label>Author</label>
                <br />
                <input 
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                /> <br />

                <label>Body</label>
                <br />
                <input 
                type="text"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                /> <br /> <br />

                <button>Save Blog</button>
            </form>
        </div>
    );
}
 
export default Addblog;