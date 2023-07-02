import Postagem from "./modules/postagem.js";

export default function UltimosPosts() {
    
    return (
        <section>
            <div className="ultimosposts">
                <h1>Últimas publicações</h1>
                <div className="boxes">
                    <div className="lista">
                        <Postagem imagem="assets/postagem1.png" tipo="DICA DE AVENTURA" titulo="Como encarar o surf mesmo no frio" desc="A água gelada e o vento pode acabar com a sua felicidade de ir para a água. Cientistas afirmam que a chance de hipotermia é real e você precisa se cuidar. Veja como." linkdanoticia="" />
                        <Postagem imagem="assets/postagem1.png" tipo="DICA DE AVENTURA" titulo="Como encarar o surf mesmo no frio" desc="A água gelada e o vento pode acabar com a sua felicidade de ir para a água. Cientistas afirmam que a chance de hipotermia é real e você precisa se cuidar. Veja como." linkdanoticia="" />
                    </div>
                    <div className="maislidas">
                        <h1>AS MAIS LIDAS</h1>

                    </div>
                </div>
            </div>
        </section>
    )
}