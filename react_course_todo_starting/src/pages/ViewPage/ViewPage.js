import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"
import NavBar from "../NavBar"

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

    console.log(getParams);
   
    return <> 
    
    <NavBar />

    <div className="todo_container">

        <button onClick={()=> { history.push("/") }} style={{background: "#e7e7e7", color: "#666"}}>Go Back</button>

    <div style={cssData} >
        {getData}
    </div>
    </div>
   
    
     </>
}

export default ViewPage