export default function BuscaResLayout(props) {



    return (
        <div className="buscares__encontrados__resultado">
            <img src={props.imagem} alt="" />
            <div className="buscares__encontrados__resultado__textos">
                <a href={`/noticia?slug=${props.slug}`}><h1>{props.titulo}</h1></a>
                <p>{props.desc}...</p>
            </div>
        </div>
    )
}