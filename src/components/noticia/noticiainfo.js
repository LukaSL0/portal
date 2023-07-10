import { useEffect, useState } from 'react';
import '../../style/noticia.css';
import MaisLidas from '../maislidas.js';
import Api from '../../Api';

export default function NoticiaInfo() {

    const [titulo , setTitulo] = useState("");
    const [header , setHeader] = useState("");
    const [desc , setDesc] = useState("");
    const [paragrafo , setParagrafo] = useState("");

    useEffect(() => {
        const currentUrl = window.location.href;
        Api.post(`/portal/noticia?${currentUrl.split('noticia?')[1]}`)
            .then((res) => {
                const info = res.data;
                setTitulo(info.titulo);
                setHeader(info.noticiaheader);
                setDesc(info.noticiadesc);
                setParagrafo(info.noticiaparagrafo);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [])

    const autor = "LUKA";

    return (
        <section>
            <div className="noticiainfo">
                <div className="noticiacompleta">
                    <div className="noticiaheader">
                        <h1>{titulo}</h1>
                        <div className="autor">
                            <img src="assets/icon.png" alt="" />
                            <p>POR {autor}</p>
                        </div>
                        <p>{header}</p>
                    </div>
                    <div className="noticiadesc">
                        <h2>{paragrafo}</h2>
                        <p>{desc}</p>
                    </div>
                </div>
                <MaisLidas />
            </div>
        </section>
    )
}