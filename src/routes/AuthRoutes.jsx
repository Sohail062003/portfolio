import { lazy } from "react"
import Loadable from "../utils/Loadable"

const HomePage = Loadable( lazy (() => import("../pages/HomePage")) );
const AboutPage = Loadable( lazy (() => import("../pages/AboutPage")) );
const ContactPage = Loadable( lazy (() => import("../pages/ContactPage")));
const ProjectPage = Loadable( lazy (() => import("../pages/ProjectPage")));
const LoginPage = Loadable( lazy (() => import("../pages/LoginPage"))); 

const AuthRoutes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/about',
        element: <AboutPage />
    },
    {
        path: '/contact',
        element: <ContactPage />
    },
    {
        path: '/project',
        element: <ProjectPage />
    },
    {
        path: '/login',
        element: <LoginPage />
    }
];

export default AuthRoutes;