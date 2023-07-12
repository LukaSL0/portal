export default function Postagem(props) {

    return (
        <div className="ultimosposts__boxes__lista__postagem">
            <img src={props.imagem} alt="" />
            <div className="ultimosposts__boxes__lista__postagem__textos">
                <h2>{props.tipo}</h2>
                <h1>{props.titulo}</h1>
                <p>{props.desc}</p>
                <a href={props.redirect}>Saiba mais</a>
            </div>
        </div>
    )
}