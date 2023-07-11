export default function MaisLida(props) {

    return (
        <div className="maislida">
            <div className="imagem">
                <img src={props.imagem} alt="" />
            </div>
            <div className="maislida-textos">
                <h2>{props.categoria}</h2>
                <p>{props.shortheader}</p>
            </div>
        </div>
    )
}