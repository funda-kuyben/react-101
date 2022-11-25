import React, { useEffect, useState } from 'react';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3004/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return posts.map((post) => (
        <div
            key={post.id}
            // @ts-ignore
            style={styles.container}
        >
            <img src={post.image} alt={post.title} style={styles.image}></img>
            <div
                // @ts-ignore
                style={styles.textsContainer}
            >
                <h2>{post.title}</h2>
                <p>{post.author}</p>
            </div>
        </div>
    ));
};
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: '10px',
    },
    textsContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: '10px',
        gap: '10px',
    },
    image: {
        width: '100px',
        height: '150px',
    },
};

export default Posts;
