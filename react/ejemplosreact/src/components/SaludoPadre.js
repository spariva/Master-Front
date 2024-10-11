import SaludoHijo from "./SaludoHijo";

function SaludoPadre() {
    const metodoPadre = (nombre) => {
        console.log("Ejecutando método del PARENT" + nombre);
    }
    return (<div>
        <h1 style={{ color: "red" }}>
            Saludo Padre
        </h1>

        <SaludoHijo idhijo="1" metodoPadre={metodoPadre} />
        <SaludoHijo idhijo="2" metodoPadre={metodoPadre} />
    </div>)
}

export default SaludoPadre; 