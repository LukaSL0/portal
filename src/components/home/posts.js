import { useEffect, useState } from "react";
import Api from "../../Api.js";

export default function Posts() {

    const [titulo, setTitulo] = useState("");
    const [shortdesc, setShortdesc] = useState("");
    const [imagem, setImagem] = useState("");
    const [slug, setSlug] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await Api.post("/portal");
                const info = res.data[0];
                setTitulo(info.titulo);
                setShortdesc(info.shortheader);
                setImagem(info.imagem);
                setSlug(info.slug);
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchData();
    }, [])

    const autor = "LUKA";

    return (
        <section>
            <div className="posts">
            <img src={imagem} alt="background"></img>
                <div className="post">
                    <div className="autor">
                        <img src="assets/icon.png" alt="" />
                        <p>POR {autor}</p>
                    </div>
                    <div className="textos">
                        <a href={`/noticia?slug=${slug}`}><h1>{titulo}</h1></a>
                        <p>{shortdesc}...</p>
                    </div>
                </div>
            </div>
        </section>
    )
}