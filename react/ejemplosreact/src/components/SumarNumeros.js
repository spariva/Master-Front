import './SumarNumeros.css';

export function SumarNumeros() {
    var suma = 0;
    const sumar = (numero1, numero2) => {
        suma = numero1 + numero2;
        console.log(suma);
    }
    return (
        <>
            <h1 className="clasePrueba">Ejemplo métodos parámetros</h1>
            <button onClick={ ()=> sumar(2, 4)}>Sumar 2 y 4 </button>
            <button onClick={ ()=> sumar(5, 6)}>Sumar 5 y 6</button>
        </>
    );
}