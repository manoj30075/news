import React, { useEffect } from 'react';

function InfiniteScroll({ onLoadMore }) {
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                onLoadMore();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [onLoadMore]);

    return (
        <div>
            Loading more content...
        </div>
    );
}

export default InfiniteScroll;
