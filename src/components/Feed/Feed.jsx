import React from 'react';
import './Feed.css';

function Feed({ newsItems }) {
    return (
        <div className="feed">
            {newsItems.map((item) => (
                <div className="news-item" key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <a href={item.url} target="_blank">Read More</a>
                </div>
            ))}
        </div>
    );
}

export default Feed;
