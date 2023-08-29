import { Link, Route, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "../NavBar";

const Login = () => {

   const history = useHistory();
     return <> 
        <NavBar /> 

        <div className="todo_container">

   {
   localStorage.getItem("loggedIn") ? <> You are already logged In.<b onClick={() => {
      localStorage.removeItem("loggedIn")
      history.push("/");
   }} style={{color:"red", cursor:"pointer"}}>Logout</b></> : <>
        <button onClick={() => { alert("You are succesfully logged in.!");
        history.replace("/");
        localStorage.setItem("loggedIn", true)}}>Login! </button>
        </>}
       

        <br />
        <br />

        <Link to="/login/showInfo">
         Nested Route Show Info
        </Link> 

<br />
<br />

        <Route path="/login/showInfo">
            <div>
               This is Dummy login and does not communicate with server
            </div>
        </Route>
      
        </div>
     </>
}

export default Login;