import { Route, Routes } from "react-router-dom";
import Forum from "../component/Forum/Forum";
import Home from "../component/Home/Home";

 

const AppRoutes = () => {
    const navRoutes = [
        {path: '/', element: <Home/> },
        {path: '/forum', element: <Forum/>}

    ]

    return <Routes>{navRoutes.map((rout) => (<Route key={rout.path} path={rout.path} element={rout.element}/>))}</Routes>
}

export default AppRoutes;