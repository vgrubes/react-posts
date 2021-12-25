import { Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <h1>Test</h1>

            <nav>
                <Link to="/posts">posts</Link>
                <Link to="/post">post</Link>
            </nav>
        </div>
    );
}

export default App;
