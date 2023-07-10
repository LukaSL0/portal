import MaisLidas from "../maislidas.js";
import Postagem from "./modules/postagem.js";
import { useEffect, useState } from "react";
import Api from "../../Api.js";

export default function UltimosPosts() {

    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        Api.post("/portal")
            .then((res) => {
                const info = res.data;
                for (let i = 1; i < info.length; i++) {
                    if (info[i].titulo.split(' ').length > 7) {
                        var titulo = `${info[i].titulo.split(' ')[0]}
                        ${info[i].titulo.split(' ')[1]}
                        ${info[i].titulo.split(' ')[2]}
                        ${info[i].titulo.split(' ')[3]}
                        ${info[i].titulo.split(' ')[4]}
                        ${info[i].titulo.split(' ')[5]}
                        ${info[i].titulo.split(' ')[6]}...`;
                    } else {
                        // eslint-disable-next-line
                        var titulo = info[i].titulo;
                    }
                    // eslint-disable-next-line
                    setNoticias(prevNoticia => [...prevNoticia, <Postagem imagem={info[i].imagem} tipo={info[i].categoria} titulo={titulo} desc={info[i].shortheader} redirect={`/noticia?slug=${info[i].slug}`} />]);
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
                        {noticias}
                    </div>
                    <MaisLidas />
                </div>
            </div>
        </section>
    )
}