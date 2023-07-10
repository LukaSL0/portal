import { useEffect, useState } from "react";
import axios from "axios";

export default function Posts() {

    const [titulo, setTitulo] = useState("");
    const [shortdesc, setShortdesc] = useState("");
    const [imagem, setImagem] = useState("");
    const [slug, setSlug] = useState("");

    const data = {
        "senha": "1YNzm1zPIlMdQON6oChlnF58"
    }

    useEffect(() => {
        axios.post("http://localhost:5000/portal", data)
            .then((res) => {
                const info = res.data[0];
                setTitulo(info.titulo);
                setShortdesc(info.shortheader);
                setImagem(info.imagem);
                setSlug(info.slug);
            })
            .catch((err) => {
                console.log(err.message);
            })
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