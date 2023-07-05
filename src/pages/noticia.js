import '../style/noticia.css';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import NoticiaInfo from '../components/noticia/noticiainfo.js';

export default function Noticia() {

    return (
        <div className='noticia'>
            <Header />
            <NoticiaInfo />
            <Footer />
        </div>
    )
}