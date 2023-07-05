import '../../style/noticia.css';
import MaisLidas from '../maislidas.js';

export default function NoticiaInfo() {

    const autor = "LUKA";

    return (
        <section>
            <div className="noticiainfo">
                <div className="noticiacompleta">
                    <div className="noticiaheader">
                        <h1>Dez principais habilidades para se tornar um desenvolvedor full-stack em 2021</h1>
                        <div className="autor">
                            <img src="assets/icon.png" alt="" />
                            <p>POR {autor}</p>
                        </div>
                        <p>Ullamco sint non culpa enim.
        Et Lorem nulla proident irure magna enim.
        Amet nulla adipisicing enim dolor sint esse consectetur nostrud amet.
        Et anim voluptate voluptate elit quis cillum deserunt reprehenderit sit occaecat.
        Consectetur dolor laborum incididunt minim sint. Est ad dolor quis laboris minim proident culpa velit exercitation.
        Tempor dolore sint laboris dolore nisi quis. Laboris elit laboris laboris ut quis nostrud anim deserunt amet.
        Id aliqua dolore veniam anim voluptate amet pariatur quis amet laborum irure officia.
        Consequat adipisicing proident ut sint laborum labore duis et anim mollit.</p>
                    </div>
                    <div className="noticiadesc">
                        <h2>Quem é um desenvolvedor Full Stack?</h2>
                        <p>Excepteur eu ullamco quis non veniam. Minim exercitation ullamco et occaecat dolore dolor mollit aliqua elit. Incididunt nisi non sit id est labore ad. Consectetur eu dolore Lorem pariatur dolor magna Lorem consectetur aliqua officia Lorem aliqua consectetur. Nostrud labore officia proident dolor irure cupidatat sint anim. Nostrud nulla nostrud laboris in esse minim anim nulla ut voluptate. Nisi quis enim reprehenderit ipsum mollit amet duis in excepteur. Fugiat incididunt officia culpa in mollit excepteur occaecat fugiat esse. Nisi esse aute reprehenderit adipisicing nisi qui amet consectetur dolore sint elit ea labore. Ut nostrud culpa aliqua in sunt aliquip proident exercitation sint. Commodo quis ipsum ipsum non aute sunt et.Ad veniam ex est reprehenderit dolore esse. Ex esse irure qui sit sint officia nostrud adipisicing elit duis consequat consectetur reprehenderit aliqua. Aliquip pariatur pariatur minim quis ex cillum magna adipisicing voluptate dolor irure in fugiat pariatur. Sunt esse reprehenderit quis in cupidatat culpa nostrud. Non proident enim id nulla amet. Consectetur ipsum nisi minim ut dolor duis qui ea in in reprehenderit.Commodo excepteur sunt duis eiusmod culpa duis elit cillum pariatur ipsum est fugiat. Eiusmod consectetur aliqua cupidatat incididunt commodo voluptate fugiat. Cupidatat amet velit ad qui ut commodo consequat ad cillum incididunt. Sint mollit irure ad sit duis enim consequat aliqua duis tempor fugiat deserunt duis quis.Deserunt irure est sunt deserunt. Est est eiusmod aute dolore dolore ea amet dolore ea aute ea. Nulla eu quis mollit ullamco exercitation deserunt tempor laboris fugiat dolore ut. Consequat laborum commodo et ullamco tempor enim ex enim quis sunt ipsum fugiat laborum proident. Aliqua ex culpa id aliqua dolor aute cillum nulla eu consectetur.Ullamco fugiat fugiat ipsum fugiat occaecat veniam reprehenderit irure eu consectetur laborum. Proident quis commodo qui esse Lorem nisi labore et reprehenderit laborum sunt magna labore. Pariatur occaecat exercitation commodo laboris. Eu excepteur dolore ex dolore mollit ut sint magna.</p>
                    </div>
                </div>
                <MaisLidas />
            </div>
        </section>
    )
}