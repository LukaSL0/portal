export default function Postagem(props) {

    return (
        <div className="postagem">
            <img src={props.imagem} alt="" />
            <div className="post-textos">
                <a href={props.linkdanoticia}>{props.tipo}</a>
                <h1>{props.titulo}</h1>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}