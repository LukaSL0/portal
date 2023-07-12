import BuscaResLayout from "./modules/buscares-layout.js";
import { useState, useEffect } from "react";
import Api from "../../Api.js";

export default function BuscaRes() {

    const [quantidade, setQuantidade] = useState();
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const query = new URLSearchParams(window.location.search).toString();
                const res = await Api.get(`/portal/busca?${query}`);
                const data = res.data;
                setResultados(data);
                setQuantidade(data.length);
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchData();
    }, [])

    return (
        <section className="buscares">
            <div className="buscares__header">
                <h1>{quantidade} Resultados</h1>
            </div>
            <div className="buscares_encontrados">
                {
                    resultados.map((resultado, i) => (
                        <BuscaResLayout
                            key={i}
                            imagem={resultado.imagem}
                            titulo={resultado.titulo}
                            desc={resultado.shortheader}
                            slug={resultado.slug}
                        />
                    ))
                }
            </div>
        </section>
    )
}