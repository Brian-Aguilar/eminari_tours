import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppHome from "../pages";

export default function AppRoutes() {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    )
}