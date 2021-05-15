import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Addblog from "./components/Addblog";
import Blogs from "./components/Blogs";
import Details from "./components/Details";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Blogs />
                        </Route>
                        <Route path="/addblog">
                            <Addblog />
                        </Route>
                        <Route path="/details/:id">
                            <Details />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}
 
export default App;