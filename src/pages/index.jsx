import AppBodyHeader from "../components/BodyHeader";
import lima from "@/assets/lima_total.jpg"
import couster from "@/assets/couster.jpg"
import couster2 from "@/assets/couster2.jpg"
import couster3 from "@/assets/couster3.jpg"
import lima_mar from "@/assets/lima_mar.jpg"
import { FcApproval, FcCellPhone } from "react-icons/fc"
import { LuCar } from "react-icons/lu";


export default function AppHome() {
    return (<>
        <AppBodyHeader
            image={lima}
            titulo="Servicio de Transporte Turístico en Lima Perú"
            descripcion="Brindamos una gran variedad de opciones en nuestro servicio de transporte turístico privado dentro y fuera de la ciudad de Lima."
        />
        <div className="app_home">
            <div className="home">
                <div className="contenido">
                    <div>
                        <h2>Transporte Turístico en Lima Perú</h2>
                        <p>
                            El servicio de transporte para viajes turísticos, nos encargamos de impulsar nuestro patrimonio cultural y natural, ofreciendo a todos nuestros clientes el servicio de transporte turístico en Lima - Perú con variadas formas de conocer los recursos y atractivos turísticos que tenemos en nuestro país, Nuestra empresa de transporte turísticos ofrece un variada alternativas de servicio de movilidad custer o auto movil  para diferentes paquetes turísticos como son: los Full days, city tours, viajes de Promoción, paseos y excursiones.<br />
                            Para mayor información sobre el servicio de transporte, no dude en contactarnos para que se informe de los precios de compañía de transporte turístico.
                        </p> <br />
                        <button>
                            Cotizar ahora
                        </button>
                    </div>
                    <picture>
                        <img src={couster} alt="imagen de couster" />
                    </picture>
                </div>
            </div>
            <div className="calidad">
                <div className="contenido">
                    <h2 className="titulo">Calidad y seguridad</h2>
                    <div className="app_cards">
                        <div className="app_card">
                            <span>
                                <FcApproval size="1.7em" />
                                <h3>PERSONAL ALTAMENTE CALIFICADO</h3>
                            </span>
                            <p>Contamos con personal calificado para cumplir las exigencias de nuestros clientes. Conductores debidamente uniformados con todos los documentos en regla.</p>
                        </div>
                        <div className="app_card">
                            <span>
                                <FcApproval size="1.7rem" />
                                <h3>AMPLIA Y MODERNA FLOTA VEHÍCULAR</h3>
                            </span>
                            <p>Todos los vehículos de nuestra flota poseen las condiciones adecuadas para el transporte de personal hacia cualquier destino.</p>
                        </div>
                        <div className="app_card">
                            <span>
                                <FcApproval size="1.2em" />
                                <h3>SERVICIO VIP</h3>
                            </span>
                            <p>Ante todo nuestra responsabilidad es con los usuarios de nuestros vehículos, por lo que su confort es nuestra prioridad.</p>
                        </div>
                        <div className="app_card">
                            <span>
                                <FcApproval size="1.2em" />
                                <h3>SEGURIDAD</h3>
                            </span>
                            <p>Cada vehículo en circulación cuenta con sus respectivos documentos en regla y, sobre todo, mantenimiento preventivo, el vehículo es revisado en cada servicio antes de ser utilizado.</p>
                        </div>
                        <div className="app_card">
                            <span>
                                <FcApproval size="1.2em" />
                                <h3>COMODIDAD</h3>
                            </span>
                            <p>Nuestra flota cuenta con asientos reclinables, cinturón de seguridad y se mantienen en perfectas condiciones para ser utilizados.</p>
                        </div>
                        <div className="app_card">
                            <span>
                                <FcApproval size="1.2em" />
                                <h3>FLEXIBILIDAD</h3>
                            </span>
                            <p>Nos acoplamos al horario y en la mayoría de rutas de cada cliente necesite para el traslado ocasional o permanente de personas.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="movilidad">
                <div className="contenido">
                    <h2 className="titulo">Nuestra movilidad</h2>
                    <div className="app_cards">
                        <div className="app_card">
                            <picture><img src={couster2} alt="Imagen de couster 2" /></picture>
                            <h4>Mini van</h4>
                            <span>
                                <LuCar />
                                <p>Capacidad: 5 pasajeros</p>
                            </span>
                        </div>
                        <div className="app_card">
                            <picture><img src={couster3} alt="Imagen de couster 3" /></picture>
                            <h4>Van Lujo</h4>
                            <span>
                                <LuCar />
                                <p>Capacidad: 16 pasajeros</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contactanos" style={{backgroundImage: `url(${lima_mar})`}} id="contactanos">
                <div className="contenido">
                    <h2 className="titulo">¡Elige nuestro servicio de Transporte Turístico en Lima Perú!</h2>
                    <p>Solicite nuestro servicio de transporte para eventos llamando al:</p>

                    <span><FcCellPhone size="3em" /><p>+51 999-999-999</p></span>
                </div>
            </div>

        </div>
    </>
    )
}