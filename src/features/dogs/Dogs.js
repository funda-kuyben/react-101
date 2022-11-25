import React, { useEffect, useState } from 'react';

const Dogs = () => {
    const [dogs, setDogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3004/dogs')
            .then((res) => res.json())
            .then((data) => setDogs(data));
    }, []);

    return dogs.map((dogs) => (
        <div
            key={dogs.id}
            // @ts-ignore
            style={styles.container}
        >
            <img src={dogs.image} alt={dogs.title} style={styles.image}></img>
            <div
                // @ts-ignore
                style={styles.textsContainer}
            >
                <h2>{dogs.title}</h2>
                <p>{dogs.author}</p>
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

export default Dogs;
