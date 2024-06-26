import React, { useState } from 'react';
import Post from './Post';
import './post.css';

const App = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    };

    return (
        <div>
            <button onClick={fetchPosts}>GET POSTS</button>
            <div className="posts-container">
                {posts.map(post => (
                    <Post key={post.id} title={post.title} body={post.body} />
                ))}
            </div>
        </div>
    );
};

export default App;
//jhgff
