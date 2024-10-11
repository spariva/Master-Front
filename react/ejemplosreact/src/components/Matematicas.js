// Enunciado: Uno de los botones será para mostrar el doble de un número, el otro botoón será para mostrar el triple de un número. El componente Matemáticas recibirá un número mediante Props del parent MatemáticasPadre. El componente Matemáticas mostrará el doble y el triple del número recibido.
function Matematicas(props) {
    var mostrarTriple = props.mostrarTriple;
    var num = props.numero;
    const mostrarDoble = (n) => {
        var doble = n * 2;
        console.log("Doble: " + doble);
    }


    return (
        <div>
            <button onClick={() => mostrarDoble(num)}>Doble</button>
            <button onClick={() => mostrarTriple(num)}>Triple</button>
        </div>
    );
}

export default Matematicas;