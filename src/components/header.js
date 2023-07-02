export default function Header() {

    return (
        <header>
            <nav>
                <div className="menu">
                    <i class="fa-solid fa-bars"></i>
                </div>
                <a href="/"><p>Portal<strong>MCZ</strong></p></a>
                <input type="text" name="busca" placeholder="Buscar" />
            </nav>
        </header>
    )
}