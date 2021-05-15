import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Blogs = () => {

    const {blogs, pending, error} = useFetch("http://localhost:5000/blogs")

    return (
        <div className="blogs">
            {pending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} />}
            {error && <div> {error} </div>}
        </div>
    );
}
 
export default Blogs;