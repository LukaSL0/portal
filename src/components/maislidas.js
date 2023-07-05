import { useEffect } from "react";
import MaisLida from "./maislida.js";

export default function MaisLidas() {

    useEffect(() => {
        const maislidas = document.querySelectorAll('.maislida');
        const ultimo = maislidas[maislidas.length - 1];
        ultimo.style.borderRadius = '0 0 10px 10px';
        ultimo.style.padding = '5%';
        ultimo.style.marginBottom = '10px';
    }, [])

    return (
        <div className="maislidas">
            <h1>AS MAIS LIDAS</h1>
            <div className="lista2">
                <MaisLida />
                <MaisLida />
                <MaisLida />
                <MaisLida />
            </div>
        </div>
    )
}