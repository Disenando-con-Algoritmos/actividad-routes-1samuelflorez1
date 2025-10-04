import { createBrowserRouter } from "react-router";

import Landing from "../pages/landing/Landing";
import PageRegister from "../pages/register/register";
import PageLogin from "../pages/login/Login";
import CatalogProducts from "../pages/products-catalog/Products";

const router = createBrowserRouter(
    [
        {
            path: "/landing",
            Component: Landing,
        },
        {
            path: "/register",
            Component: PageRegister,
        },
        {
            path: "login",
            Component: PageLogin,
        },
        {
            path: "/auth",

            children: [
                {
                    path: "catalog",
                    element: <CatalogProducts />,
                },
            ],
        },
    ],
    { basename: "/dmi" }
);

export default router;
