import { useRef } from "react";
import NavBar from "../NavBar";
import { useHistory } from "react-router-dom";
import AuthCheck from "../../middleware/AuthCheck";

const AppToDo = () => {

    const todoText = useRef();

    const history = useHistory();

    // Auth Check.
    AuthCheck();

    const addTodo = (e) => {
        e.preventDefault();
        const todoString = todoText.current.value;

     
        const initialToDo = localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : [];

        initialToDo.push(todoString);

        localStorage.setItem( "todo", JSON.stringify(initialToDo) );

        history.push("/");
    }
    return <> 
        <NavBar />

    <div className="todo_container">

        <h1>Add to-do: </h1><br />

        <form onSubmit={addTodo}>
            <input type="text" ref={todoText} />
            <button>Save to-do</button>
        
        </form>

    </div>
    </>
}

export default AppToDo;