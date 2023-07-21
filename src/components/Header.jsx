// import logo from "@/assets/Logo_eminari_tours.png"

import { useState } from "react";
import { LuAlignRight, LuX } from "react-icons/lu";

export default function AppHeader() {
    const [openMenu, setOpenMenu] = useState(false);

    const onChangeStatusMenu = () => {
        setOpenMenu(!openMenu)
    }
    return (
        <>
            <div className="app_header">
                <div className="contenido">
                    <h1 id="logo">Eminari Tours S.R.L</h1>

                    <LuAlignRight size="2em" className="app_icon_menu_open" onClick={onChangeStatusMenu} />
                    <ul className="nav">
                        <li>Inicio</li>
                        <li>Destinos</li>
                        <li>Nosotros</li>
                        <li>Contactanos</li>
                    </ul>
                </div>
            </div>
            <nav>
                <ul className={`nav-mobile ${openMenu ? "active" : ""}`}>
                    <LuX size="2em" className="app_icon_menu_close" onClick={onChangeStatusMenu} />
                    <li>Inicio</li>
                    <li>Destinos</li>
                    <li>Nosotros</li>
                    <li>Contactanos</li>
                </ul>
            </nav>
        </>
    )
}