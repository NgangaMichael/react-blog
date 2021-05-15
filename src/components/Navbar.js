import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <h2>Nairobian</h2>
                <div className="link">
                    <Link to="/">Blogs</Link>
                    <Link to="/addblog">Add Blog</Link>
                </div>
        </div>
    );
}
 
export default Navbar;