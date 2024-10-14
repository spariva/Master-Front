import { useState } from "react"

export function Contador(){
    const [count, setCount] = useState(0);

    const contar = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1 style={{color:"turquoise"}}>
                Contador {count}
            </h1>
            <button onClick={ () => contar() }>Sumas cuenta</button>
            <button onClick={ () => {
                setCount(count - 1);
            } }>Restar cuenta</button>

        </div>
    )
}