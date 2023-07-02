export default function Header() {

    return (
        <header>
            <nav>
                <div className="menu">
                    <img src="assets/menu.svg" alt="" />
                </div>
                <a href="/"><p>Portal<strong>MCZ</strong></p></a>
                <form method="post">
                    <input type="text" id="busca" name="busca" placeholder="Buscar" />
                </form>
            </nav>
        </header>
    )
}