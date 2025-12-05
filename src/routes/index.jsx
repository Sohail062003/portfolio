import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import AuthRoutes from "./AuthRoutes";
import AppRoutes from "./AppRoutes";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthLayout />,
        children: AuthRoutes
    },
    {
        path: '/',
        element: <MainLayout />,
        children: AppRoutes
    }
]);