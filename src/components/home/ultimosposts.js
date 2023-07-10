import MaisLidas from "../maislidas.js";
import Postagem from "./modules/postagem.js";
import axios from "axios";
import { useEffect } from "react";

export default function UltimosPosts() {

    const data = {
        "senha": "1YNzm1zPIlMdQON6oChlnF58"
    }

    const Noticias = [];

    useEffect(() => {
        axios.post("http://localhost:5000/portal", data)
            .then((res) => {
                const info = res.data;
                for (let i = 1; i < info.length; i++) {
                    Noticias.push(<Postagem imagem="assets/postagem1.png" tipo="DICA DE AVENTURA" titulo="Como encarar o surf mesmo no frio" desc="A água gelada e o vento pode acabar com a sua felicidade de ir para a água. Cientistas afirmam que a chance de hipotermia é real e você precisa se cuidar. Veja como." redirect="" />);
                }
                console.log(Noticias);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [])
    
    return (
        <section>
            <div className="ultimosposts">
                <h1>Últimas publicações</h1>
                <div className="boxes">
                    <div className="lista">
                        {
                            
                        }
                    </div>
                    <MaisLidas />
                </div>
            </div>
        </section>
    )
}