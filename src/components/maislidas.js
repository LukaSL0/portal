import { useEffect, useState } from "react";
import Api from '../Api.js';
import MaisLida from "./maislida.js";

export default function MaisLidas() {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await Api.get('/portal');
                const data = res.data;

                data.sort((a, b) => {
                    return b.views - a.views;
                })

                setNoticias(data);
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchData();
    }, [])

    return (
        <section className="maislidas">
            <h1>AS MAIS LIDAS</h1>
            <div className="maislidas__lista">
                {
                    noticias.slice(0, 5).map(( noticia, i ) => (
                        <MaisLida key={i} categoria={noticia.categoria} shortheader={noticia.shortheader} imagem={noticia.imagem} />
                    ))
                }
            </div>
        </section>
    )
}