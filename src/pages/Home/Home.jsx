import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSpring, animated } from '@react-spring/web';
import Navbar from '../../components/Navbar/Navbar';
import Feed from '../../components/Feed/Feed';
import { fetchTopNews } from '../../services/api';
import { setNews } from '../../state/actions';
import './Home.css';

function Home() {
    const dispatch = useDispatch();
    const newsItems = useSelector(state => state.news.news_items);

    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 300,
    });

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const country = 'us'; // Replace with user's country or a default value
                const response = await fetchTopNews(country);
                dispatch(setNews(response.data.articles));
            } catch (error) {
                console.error('An error occurred while fetching the news:', error);
            }
        };

        fetchNews();
    }, [dispatch]);

    return (
        <div className="home">
            <Navbar />
            <animated.div style={fade}>
                <Feed newsItems={newsItems} />
            </animated.div>
        </div>
    );
}

export default Home;
