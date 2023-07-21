// import logo from "@/assets/Logo_eminari_tours.png"

import { useEffect, useState } from "react";
import { LuAlignRight, LuX } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function AppHeader() {
    const [isMenuAc, setIsMenuAc] = useState(false)
    const [openMenu, setOpenMenu] = useState(false);

    const onChangeStatusMenu = () => {
        setOpenMenu(!openMenu)
    }

    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 700) {
                if (isMenuAc == false) {
                    setIsMenuAc(true)
                }
            } else {
                setIsMenuAc(false)
            }
        })
        return () => { }

    }, [isMenuAc])
    return (
        <>
            <div className={`app_header ${isMenuAc ? "active" : ""}`}>
                <div className="contenido">
                    <h1 id="logo">Eminari Tours S.R.L</h1>

                    <LuAlignRight size="2em" className="app_icon_menu_open" onClick={onChangeStatusMenu} />
                    <ul className="nav">
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/destinos">Destinos</Link></li>
                        <li><Link to="/nosotros">Nosotros</Link></li>
                        <li><Link to="/contactanos">Contactanos</Link></li>
                    </ul>
                </div>
            </div >
            <nav>
                <ul className={`nav-mobile ${openMenu ? "active" : ""}`}>
                    <LuX size="2em" className="app_icon_menu_close" onClick={onChangeStatusMenu} />
                    <li><Link to="/" onClick={onChangeStatusMenu}>Inicio</Link></li>
                    <li><Link to="/destinos" onClick={onChangeStatusMenu}>Destinos</Link></li>
                    <li><Link to="/nosotros" onClick={onChangeStatusMenu}>Nosotros</Link></li>
                    <li><Link to="/contactanos" onClick={onChangeStatusMenu}>Contactanos</Link></li>
                </ul>
            </nav>
        </>
    )
}