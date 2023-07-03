import { useEffect } from "react";

export default function MaisLidas() {

    useEffect(() => {
        const maislidas = document.querySelectorAll('.maislida');
        const ultimo = maislidas[maislidas.length - 1];
        ultimo.style.borderRadius = '0 0 10px 10px';
        ultimo.style.padding = '5%';
        ultimo.style.marginBottom = '10px';
    }, [])

    return (
        <div className="maislida">
            <img src="assets/maislidas.png" alt="" />
            <div className="maislida-textos">
                <h2>NATUREZA</h2>
                <p>A importância da floresta do ártico para a biodiversidade mundial. Qual o impacto o degelo na fauna e flora?</p>
            </div>
        </div>
    )
}