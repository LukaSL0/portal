export default function Header() {

    return (
        <header>
            <nav>
                <div className="menu">
                    <img src="assets/menu.svg" alt="" />
                </div>
                <a href="/"><p>Portal<strong>MCZ</strong></p></a>
                <form action="">
                    {
                        (window.innerWidth > "550")?
                            <input type="text" name="busca" placeholder="Buscar" />:
                            <input type="text" name="busca" placeholder="" />
                    }
                </form>
            </nav>
        </header>
    )
}