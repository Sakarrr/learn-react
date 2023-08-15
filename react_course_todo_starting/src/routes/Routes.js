import { Route } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import AppToDo from "../pages/add-todo/AppToDo";

const Routes = () => {
    return <>
    <Route path="/" component={MainPage}  exact/>
    <Route path="/add" component={AppToDo} />
    </>
}

export default Routes;