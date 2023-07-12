export default function MaisLida(props) {

    return (
        <div className="maislidas__lista__maislida">
            <div className="maislidas__lista__maislida__imagem">
                <img src={props.imagem} alt="" />
            </div>
            <div className="maislidas__lista__maislida__textos">
                <h2>{props.categoria}</h2>
                <p>{props.shortheader}</p>
            </div>
        </div>
    )
}