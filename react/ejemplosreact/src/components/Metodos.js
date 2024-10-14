function Metodos() {
    const mostrarMensaje = () => {
        console.log("Mensaje");
    }

    return (
        <>
            <h1>Metodos</h1>
            <button onClick={() => mostrarMensaje()}>Mostrar mensaje</button>
        </>
    );
}

export default Metodos;