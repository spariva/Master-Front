// Enunciado: Uno de los botones será para mostrar el doble de un número, el otro botoón será para mostrar el triple de un número. El componente Matemáticas recibirá un número mediante Props del parent MatemáticasPadre. El componente Matemáticas mostrará el doble y el triple del número recibido.
import Matematicas from "./Matematicas";

function MatematicasPadre() {
    var n = "5";
    const mostrarTriple = (numero) => {
        var triple = numero * 3;
        console.log("Triple: " + triple);
    }

    return (
        <div>
            <h1>Matemáticas Padre</h1>
            <Matematicas numero={n} mostrarTriple={mostrarTriple}/>
            <Matematicas numero="2" mostrarTriple={mostrarTriple}/>
        </div>
    );
}

export default MatematicasPadre;
