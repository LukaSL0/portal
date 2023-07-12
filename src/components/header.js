import { useEffect } from "react";

export default function Header() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const buscaValue = e.target.busca.value;
        window.location.href = `/busca?busca=${buscaValue}`;
    }

    return (
        <header>
            <nav>
                <div className="menu">
                    <img src="assets/menu.svg" alt="" />
                </div>
                <a href="/"><p>Portal<strong>MCZ</strong></p></a>
                <form onSubmit={handleSubmit}>
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