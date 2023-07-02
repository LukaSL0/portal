import '../style/home/posts.css';
import '../style/home/ultimosposts.css';
import Header from '../components/header.js';
import Posts from '../components/home/posts.js';
import UltimosPosts from '../components/home/ultimosposts.js';

export default function Home() {

    return (
        <div className="Home">
            <Header />
            <Posts />
            <UltimosPosts />
        </div>
    )
}