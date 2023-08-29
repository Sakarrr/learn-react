import { Route } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import AppToDo from "../pages/add-todo/AppToDo";
import ViewPage from "../pages/ViewPage/ViewPage";
import { BrowserRouter, Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "../pages/Login/Login";
import NotFound from "../pages/notFound/NotFound";

const Routes = () => {
    return (
     <BrowserRouter>
    <Switch>

    <Route path="/" exact>
        <Redirect to ="/home" />
    </Route>

    <Route path="/home" component={MainPage}  exact/>

    <Route path="/add" exact >
        <AppToDo />
    </Route>

    <Route path="/login" component={Login} />

    {/* <Route path ="/add" exact >
        <AppToDo />
    </Route> */}

    <Route path="/view/:id" component={ ViewPage } exact />

    {/* <Route path="/view" component={ ViewPage } exact /> */}

    <Route path="*" >
        <NotFound />
    </Route>
    </Switch>
  </BrowserRouter>
    );
}

export default Routes;