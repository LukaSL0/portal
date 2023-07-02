export default function Posts() {

    const autor = "LUKA";

    return (
        <section>
            <div className="posts">
                <div className="post">
                    <div className="autor">
                        <img src="assets/icon.png" alt="" />
                        <p>POR {autor}</p>
                    </div>
                    <div className="textos">
                        <h1>Quer fugir das praias no verão?</h1>
                        <p>Veja os melhores destinos para uma viagem a dois, com seu grupo ou até mesmo sozinho. Aproveite o calor longe das praias, curta lagos, cachoeiras e muito mais nesses destinos incríveis.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}