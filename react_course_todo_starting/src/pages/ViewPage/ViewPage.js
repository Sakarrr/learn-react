import { Link, useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"
import NavBar from "../NavBar"
import AuthCheckBoolean from "../../middleware/AuthCheckBoolean";

const ViewPage = () => {

    const history = useHistory();

    const getParams = useParams();

    const getID = getParams.id;

    const getStorage = localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : [];

    const getData = getStorage[getID];

    const cssData = {
        background:"#e7e7e7",
        padding: "20px",
        fontSize: "20px",
        margin: "20px",
    };

    const deleteTodo = () => {
        getStorage.splice(getID, 1)

        localStorage.setItem("todo", JSON.stringify(getStorage));
        
        history.replace("/");
    }

   
    return <> 
    
    <NavBar />

    <div className="todo_container">

        <button onClick={()=> { history.push("/") }} style={{background: "#e7e7e7", color: "#666"}}>Go Back</button>

    <div style={cssData} >

        {getData}

    </div>

    {
        AuthCheckBoolean() ? <>
        <button style={{background: "red"}}  onClick={deleteTodo}> Delete To-Do </button>
        </> : <>
        <p>Login to see more options <Link to="/login"> Login </Link></p>
        </>
    }

        

    </div>
   
    
     </>
}

export default ViewPage