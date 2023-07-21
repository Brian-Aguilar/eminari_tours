import AppBodyHeader from "../components/BodyHeader";
import lima from "@/assets/lima_total.jpg"
import couster from "@/assets/couster.jpg"


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
                    <h2>Nuestra movilidad</h2>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nisi repellat numquam earum at nam! Explicabo nam expedita voluptatibus, repellat exercitationem sapiente corrupti odit, inventore temporibus consectetur obcaecati beatae? Labore!</p>
                    </div>
                </div>
            </div>

            <div className="home">
                <div className="contenido">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sapiente eveniet veniam blanditiis dignissimos repudiandae, beatae nulla, optio ducimus molestiae pariatur. Recusandae, aut. Quibusdam modi a, illo quam doloribus quos.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellendus ratione ab reiciendis velit esse accusantium numquam praesentium deserunt. Tenetur repellat ea in eius alias dolorum asperiores beatae nostrum vel.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam vero quas itaque animi minima laborum eligendi, nobis et praesentium perspiciatis iure voluptas repellendus delectus facere aperiam. Odio vero magni quos?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex libero qui corporis iure dolorum consequuntur, eveniet quis eum possimus repudiandae eius omnis voluptas aliquid numquam totam sunt distinctio mollitia! Facere.
                    </p>
                </div>
            </div>

        </div>
    </>
    )
}