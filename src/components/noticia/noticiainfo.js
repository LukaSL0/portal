import '../../style/noticiainfo.css';

export default function NoticiaInfo() {

    const autor = "LUKA";

    return (
        <section>
            <div className="noticiainfo">
                <div className="noticiaheader">
                    <h1>Dez principais habilidades para se tornar um desenvolvedor full-stack em 2021</h1>
                    <div className="autor">
                        <img src="assets/icon.png" alt="" />
                        <p>POR {autor}</p>
                    </div>
                    <p>Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
                </div>
                <div className="noticiadesc">

                </div>
            </div>
        </section>
    )
}