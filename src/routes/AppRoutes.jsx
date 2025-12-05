import { lazy } from "react";
import Loadable from "../utils/Loadable";



const AdminPage = Loadable( lazy ( () => import("../pages/AdminPage")));

const AppRoutes = [
   
    {
        path: '/admin',
        element: <AdminPage />
    }

];


export default AppRoutes;