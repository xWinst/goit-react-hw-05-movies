import { Link } from 'react-router-dom';
import s from './MoviesList.module.css';

const MoviesList = ({ list }) => {
    return (
        <ul className={s.list}>
            {list.map(movie => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </ul>
    );
};

export default MoviesList;
