import { useParams, Link, NavLink, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import delivery from 'services/delivery';
import s from './MovieCard.module.css';
import poster from 'images/noposter.jpg';
import { CastInfo, ReviewsInfo } from 'components';

const MovieCard = () => {
    // const path = useLocation().pathname;
    // console.log('match: ', path);
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        delivery.signal = controller.signal;

        async function getMovie() {
            try {
                const data = await delivery.getMovie(movieId);
                console.log('data_movie: ', data);
                data.poster = data.poster_path
                    ? `https://image.tmdb.org/t/p/w300/${data.poster_path}`
                    : poster;
                data.genres = data.genres.map(genre => genre.name).join(', ');
                setMovie(data);
            } catch (error) {
                console.log(error);
            }
        }

        getMovie();

        return () => {
            controller.abort();
        };
    }, []);

    return (
        movie && (
            <div className={s.container}>
                <Link to="/">Go Back</Link>
                <div className={s.info}>
                    <img src={movie.poster} alt={movie.title} />
                    <div>
                        <h2>
                            {movie.original_title} (
                            {movie.release_date.slice(0, 4)})
                        </h2>
                        <span>
                            User score: {Math.round(movie.vote_average * 10)}%
                        </span>
                        <h3>Overview</h3>
                        <p>{movie.overview}</p>
                        <h3>Genres</h3>
                        <p>{movie.genres}</p>
                    </div>
                </div>
                <div className={s.line}></div>
                <h4>Additional information</h4>
                <div className={s.thumb}>
                    <NavLink to="cast">Cast</NavLink>
                    <NavLink to="reviews">Reviews</NavLink>
                </div>
                <div className={s.line}></div>

                <Routes>
                    <Route path="cast" element={<CastInfo />} />
                    <Route path="reviews" element={<ReviewsInfo />} />
                </Routes>
            </div>
        )
    );
};

export default MovieCard;
