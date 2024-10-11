function SaludoHijo(props) {
    var ejecutarPadre = props.metodoPadre;
    var idhijo = props.idhijo;

    return (<div>

        <h1 style={{ color: "blue" }}>
            Saludo HIJO
        </h1>

        <button onClick={() => ejecutarPadre('Luke' + idhijo)}>

            Llamar al Parent

        </button>

    </div>)

}

export default SaludoHijo; 