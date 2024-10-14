export function DobleNumero() {
    var ejemplo = "DobleNumero";

    const cambiarVariable = () => {
        console.log("Antes: " + ejemplo);
        ejemplo = "Otro valor";
        console.log("Después: " + ejemplo);
    }
    const numeroDoble = (numero) => {
        console.log(numero * 2);
    }

    return (
        <>
            <h1>Ejemplo métodos parámetros</h1>
            <button onClick={ ()=> numeroDoble(7)}>Doble 7 </button>
            <button onClick={ ()=> numeroDoble(20)}>Doble 20</button>
            <button onClick={ ()=> cambiarVariable()}>Cambiar variable</button>
            <p>{ejemplo}</p>

        </>
    );
}