import { useState } from "react"

export default function Car(props) {
    const [state, setState] = useState(false);
    const [speed, setSpeed] = useState(0);
    var coche = { state: props.state, maxspeed: parseInt(props.maxspeed), aceleration: parseInt(props.aceleration), marca: props.marca };
    const checkState = () => {
        if (state == true) {
            return (<p>Estado verdadero</p>);
        } else {
            return (<p>Estado falso</p>);
        }
    }

    const changeSpeed = () => {
        if (state == false) {
            setSpeed(0);
        } else if (coche.maxspeed <= speed) {
            setSpeed(coche.maxspeed);
        } else {
            setSpeed(speed + parseInt(coche.aceleration))
        }
    }

    return (
    <div>
        <h1>Car</h1>
        <h2>Velocidad actual: {speed}</h2>
        <h2>{checkState()}</h2>
        <button onClick={() => { setState(!state) }}>Arrancar/Detener</button>
        <button onClick={() => { changeSpeed() }}>Acelerar</button>
    </div>);
}