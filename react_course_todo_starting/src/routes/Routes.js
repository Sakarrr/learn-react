import { Route } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import AppToDo from "../pages/add-todo/AppToDo";
import ViewPage from "../pages/ViewPage/ViewPage";

const Routes = () => {
    return <>
    <Route path="/" component={MainPage}  exact/>
    <Route path="/add" component={AppToDo} />

    <Route path="/view/:id" component={ ViewPage } exact />
    </>
}

export default Routes;