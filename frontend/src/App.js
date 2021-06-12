import logo from './logo.svg';
import './App.css';
import Search from './search';
import { useState } from 'react';
import background from "./background.jpg";
const posts = [
    { id: '1', name: 'BTC' },
    { id: '2', name: 'ETH' },
    { id: '3', name: 'USDT' },
    { id: '4', name: 'BNB' },
];

const filterPosts = (posts, query) => {
    if (!query) {
        return posts;
    }

    return posts.filter((post) => {
        const postName = post.name.toLowerCase();
        return postName.includes(query);
    });
};

function App() {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterPosts(posts, searchQuery);

    return (
        <div className="App-header" >
            <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <ul className="vvvv" >
                {filteredPosts.map(post => (
                    <li key={post.key}>{post.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
