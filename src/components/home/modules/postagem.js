export default function Postagem(props) {

    return (
        <div className="postagem">
            <img src={props.imagem} alt="" />
            <div className="post-textos">
                <h2>{props.tipo}</h2>
                <h1>{props.titulo}</h1>
                <p>{props.desc}</p>
                <div className="redirect">
                    <a href={props.redirect}>Saiba mais</a>
                </div>
            </div>
        </div>
    )
}