import { HashRouter, Route, Routes } from "react-router-dom";
import AppHome from "../pages";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import AppError404 from "../pages/error404";

export default function AppRoutes() {
    return (
        <HashRouter>
            <AppHeader />
            <div className="app_contenido">
                <Routes>
                    <Route path="/">
                        <Route index element={(<AppHome />)} />
                        <Route path="nosotros" element={(<AppError404 />)} />
                        <Route path="destinos" element={(<AppError404 />)} />
                        {/* <Route path="destinos/:destino" element={(<AppDestinosCustom />)} /> */}
                        <Route path="contactanos" element={(<AppError404 />)} />
                    </Route>
                </Routes>
            </div>
            <AppFooter />
        </HashRouter>
    )
}