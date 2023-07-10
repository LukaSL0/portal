import MaisLidas from "../maislidas.js";
import Postagem from "./modules/postagem.js";
import axios from "axios";
import { useEffect, useState } from "react";

export default function UltimosPosts() {

    const data = {
        "senha": "1YNzm1zPIlMdQON6oChlnF58"
    }

    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        axios.post("http://localhost:5000/portal", data)
            .then((res) => {
                const info = res.data;
                for (let i = 1; i < info.length; i++) {
                    setNoticias(prevNoticia => [...prevNoticia, <Postagem imagem={info[i].imagem} tipo={info[i].categoria} titulo={info[i].titulo} desc={info[i].shortheader} redirect="" />]);
                }
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
                            noticias
                        }
                    </div>
                    <MaisLidas />
                </div>
            </div>
        </section>
    )
}