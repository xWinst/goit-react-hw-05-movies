import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import s from './MoviesList.module.css';
import delivery from 'js/delivery';

const MoviesList = () => {
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        async function getTrand() {
            const data = await delivery.getTrend();
            console.log('data_now: ', data);
            setMoviesList(data.results);
        }

        getTrand();
    }, []);
    return (
        <ul>
            {moviesList.map(movie => (
                <li key={movie.id}>
                    <Link to="/movies">{movie.title}</Link>
                </li>
            ))}
        </ul>
    );
};

export default MoviesList;
