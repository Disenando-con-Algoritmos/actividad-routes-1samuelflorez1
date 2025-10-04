import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
// import PageRegister from "./pages/register/register";
// import PageLogin from "./pages/login/Login";
import CatalogProducts from "./pages/products-catalog/Products";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* <PageRegister/> */}
        {/* <PageLogin/> */}
        <CatalogProducts />
    </StrictMode>
);
