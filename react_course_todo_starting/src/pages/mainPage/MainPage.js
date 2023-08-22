import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const MainPage = () => {

     const history = useHistory();

     const login = () => {
          // Logic....

          // Success...
          // history.push("/add");

          history.replace("/add");
     }
     return <> This is Main Page
     <Link to="/add">Go To Add Page </Link>


     <button onClick={ login }> Login </button>
     </>
}

export default MainPage;