import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MoviesList.module.css';

const MoviesList = ({ list }) => {
    const location = useLocation();
    return (
        <ul className={s.list}>
            {list.map(movie => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                        {movie.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default MoviesList;

MoviesList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};
