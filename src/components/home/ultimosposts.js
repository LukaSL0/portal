import MaisLidas from "../maislidas.js";
import Postagem from "./modules/postagem.js";
import { useEffect, useState } from "react";
import Api from "../../Api.js";

export default function UltimosPosts() {

    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await Api.get("/portal");
            const info = res.data;
            
            for (let i = 1; i < info.length; i++) {
              let titulo;
              if (info[i].titulo.split(' ').length > 7) {
                titulo = `${info[i].titulo.split(' ').slice(0, 7).join(' ')}...`;
              } else {
                titulo = info[i].titulo;
              }
              
              setNoticias(prevNoticia => [...prevNoticia,
                <Postagem
                  imagem={info[i].imagem}
                  tipo={info[i].categoria}
                  titulo={titulo}
                  desc={info[i].shortheader}
                  redirect={`/noticia?slug=${info[i].slug}`}
                />
              ]);
            }
        }
        fetchData();
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