import '../style/home.css';
import Header from '../components/header.js';
import Posts from '../components/home/posts.js';

export default function Home() {

    return (
        <div className="Home">
            <Header />
            <Posts />
        </div>
    )
}