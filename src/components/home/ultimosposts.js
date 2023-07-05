import MaisLidas from "./modules/maislidas.js";
import Postagem from "./modules/postagem.js";

export default function UltimosPosts() {
    
    return (
        <section>
            <div className="ultimosposts">
                <h1>Últimas publicações</h1>
                <div className="boxes">
                    <div className="lista">
                        <Postagem imagem="assets/postagem1.png" tipo="DICA DE AVENTURA" titulo="Como encarar o surf mesmo no frio" desc="A água gelada e o vento pode acabar com a sua felicidade de ir para a água. Cientistas afirmam que a chance de hipotermia é real e você precisa se cuidar. Veja como." redirect="" />
                        <Postagem imagem="assets/postagem1.png" tipo="DICA DE AVENTURA" titulo="Como encarar o surf mesmo no frio" desc="A água gelada e o vento pode acabar com a sua felicidade de ir para a água. Cientistas afirmam que a chance de hipotermia é real e você precisa se cuidar. Veja como." redirect="" />
                    </div>
                    <MaisLidas />
                </div>
            </div>
        </section>
    )
}