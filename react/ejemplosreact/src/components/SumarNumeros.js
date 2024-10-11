import './SumarNumeros.css';


export function SumarNumeros(props) {
    const realizarSuma = (n1, n2) => {
        var suma = parseInt(props.numero1) + parseInt(props.numero2);
        console.log("Suma prop: " + suma);
    }

    const sumar = (numero1, numero2) => {
        var suma = numero1 + numero2;
        console.log(suma);
    }

    return (
        <>
            <button onClick={() => realizarSuma(5, 6)}>Sumar 5 y 6</button>
            <h1 className="clasePrueba">Ejemplo métodos parámetros</h1>
            <button onClick={() => sumar(2, 4)}>Sumar 2 y 4 </button>
            <button onClick={() => sumar(5, 6)}>Sumar 5 y 6</button>
        </>
    );
}
