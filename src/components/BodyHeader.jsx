/* eslint-disable react/prop-types */

export default function AppBodyHeader({ image, titulo, descripcion }) {
    return (
        <div className="app_bodyheader" style={{ backgroundImage: `url(${image})` }}>
            <div className="contenido">
                <h2>{titulo}</h2>
                <h3>{descripcion}</h3>
            </div>

        </div>
    )
}