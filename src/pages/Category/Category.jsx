import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Feed from '../../components/Feed/Feed';
import './Category.css';

function Category() {
    // Example: Replace this with an API call to fetch the actual news items for a category
    const newsItems = [
        { id: 1, title: 'Category Title 1', description: 'Description 1', url: '#' },
        // ...
    ];

    return (
        <div className="category">
            <Navbar />
            <Feed newsItems={newsItems} />
        </div>
    );
}

export default Category;
