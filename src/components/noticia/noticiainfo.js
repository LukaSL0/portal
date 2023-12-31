import { useEffect, useState } from 'react';
import MaisLidas from '../maislidas.js';
import Api from '../../Api';

export default function NoticiaInfo() {

    const [titulo , setTitulo] = useState("");
    const [header , setHeader] = useState("");
    const [desc , setDesc] = useState("");
    const [paragrafo , setParagrafo] = useState("");

    const alerta = () => {
        document.querySelector('.autor').style.display = 'none';
        setParagrafo("A Notícia que você buscava não foi encontrada em nosso banco de dados. Caso isso seja um erro, contate um membro da equipe.");
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const query = new URLSearchParams(window.location.search).toString();
                const res = await Api.get(`/portal/noticia?${query}`);
                const info = res.data;
                if (!info) {
                    alerta();
                } else {
                    setTitulo(info.titulo);
                    setHeader(info.noticiaheader);
                    setDesc(info.noticiadesc);
                    setParagrafo(info.noticiaparagrafo);
                }
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchData();
    }, [])

    const autor = "LUKA";

    return (
        <section className="noticiainfo">
            <div className="noticiainfo__noticiacompleta">
                <div className="noticiainfo__noticiacompleta__noticiaheader">
                    <h1>{titulo}</h1>
                    <div className="noticiainfo__noticiacompleta__noticiaheader__autor">
                        <img src="assets/icon.png" alt="" />
                        <p>POR {autor}</p>
                    </div>
                    <p>{header}</p>
                </div>
                <div className="noticiainfo__noticiacompleta__noticiadesc">
                    <h2>{paragrafo}</h2>
                    <p>{desc}</p>
                </div>
            </div>
            <MaisLidas />
        </section>
    )
}