import { useRef } from "react";
import NavBar from "../NavBar";

const AppToDo = () => {

    const todoText = useRef();

    const addTodo = (e) => {
        e.preventDefault();
         
         console.log(todoText.current.value);
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