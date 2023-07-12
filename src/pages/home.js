import Header from '../components/header.js';
import Posts from '../components/home/posts.js';
import UltimosPosts from '../components/home/ultimosposts.js';
import Footer from '../components/footer.js';

export default function Home() {

    return (
        <div className="Home">
            <Header />
            <Posts />
            <UltimosPosts />
            <Footer />
        </div>
    )
}