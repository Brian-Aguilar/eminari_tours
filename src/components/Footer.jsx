import { LuAtSign, LuMapPin, LuPhone } from "react-icons/lu"

export default function AppFooter() {
    return (<div className="footer">
        <div className="contenido">
            <ul>
                <li><h2>EMINARI TOURS S.R.L</h2></li>
                <li>Empresa servicio especializado de transporte turístico.</li>
                <li><LuMapPin /><span>Mz.x Lt.xx xxxxxxxxxxxxxxxxxx - Callao, Lima - Perú</span></li>
                <li><LuAtSign /><span>xxxxxxxx@gmail.com</span></li>
                <li><LuPhone /><span>Movil: +51 xxxxxxxxx - +51 xxxxxxxxx</span></li>
            </ul>

            <ul>
                <li><h2>Servicios de transporte</h2></li>
                <li>Transporte Turístico en Lima Perú</li>
                <li>City Tours Lima Perú</li>
                <li>Transporte para Eventos en Lima</li>
                <li>Full Day Lima</li>
            </ul>
            <ul>
                <li><h2>La Empresa</h2></li>
                <li>Página de inicio</li>
                <li>Sobre Nosotros</li>
                <li>Vehículos de Transporte Tours Lima</li>
                <li>Contáctenos</li>
            </ul>
        </div>
    </div>)
}