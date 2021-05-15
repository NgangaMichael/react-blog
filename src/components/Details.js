import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Details = () => {

    const history = useHistory()
    const {id} = useParams()
    const {blogs: blog, pending, error} = useFetch("http://localhost:5000/blogs/"+id)

    const deleteBlog = () => {
        fetch("http://localhost:5000/blogs/"+id, {
            method: "DELETE"
        })
        .then(results => history.push("/"))
        .catch(err => console.log(err))
    }

    return (
        <div className="details">
            {pending && <div>Loading...</div>}
            {error && <div> {error} </div>}
            {blog && (
                <article>
                    <h2>Title: {blog.title} </h2>
                    <p>Written By: {blog.author} </p>
                    <p> {blog.body} </p>
                    <button onClick={deleteBlog}>Delete Blog</button>
                </article>
            )}

        </div>
    );
}
 
export default Details;