import '../App.css';

export function Saludo (props) {
    const { nombre, edad } = props;
    return (
    <header className="App-header">
        <h1 style={{color:"blue", style: "italic"}}>Hola {nombre}</h1>
        <h2> edad: {edad}</h2>
    </header>
    );
}

