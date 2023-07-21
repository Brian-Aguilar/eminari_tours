import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppHome from "../pages";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <AppHeader />
            <div className="app_contenido">
                <Routes>
                    <Route path="/">
                        <Route index element={(<AppHome />)} />
                        {/* <Route path="nosotros" element={(<AppNosotros />)} />
                    <Route path="destinos" element={(<AppDestinos />)} />
                    <Route path="destinos/:destino" element={(<AppDestinosCustom />)} />
                    <Route path="eventos" element={(<AppEventos />)} />
                    <Route path="vision-mision" element={(<AppMisionVision />)} /> */}
                    </Route>
                </Routes>
            </div>
            <AppFooter />
        </BrowserRouter>
    )
}