import { Link } from "react-router-dom"

const BlogList = ({blogs}) => {
    return (
        <div className="bloglist">
            {blogs.map(blog => (
                <div className="blog" key={blog.id}>
                    <Link to={`/details/${blog.id}`} 
                    style={{
                        textDecoration: "none",
                        color: "black"            
                        }}>
                        <h3> {blog.title} </h3>
                        <p>Written by: {blog.author} </p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;