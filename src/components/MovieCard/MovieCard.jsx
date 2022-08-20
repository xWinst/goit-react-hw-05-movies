import {
    useParams,
    NavLink,
    Route,
    Routes,
    useLocation,
    useNavigate,
} from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';
import { ImArrowLeft } from 'react-icons/im';
import delivery from 'services/delivery';
import s from './MovieCard.module.css';
import poster from 'images/noposter.jpg';

const CastInfo = lazy(() => import('components/CastInfo/CastInfo'));
const ReviewsInfo = lazy(() => import('components/ReviewsInfo/ReviewsInfo'));

const MovieCard = () => {
    const location = useLocation();
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();
    const from = location.state?.from || '/';

    useEffect(() => {
        const controller = new AbortController();
        delivery.signal = controller.signal;

        async function getMovie() {
            try {
                const data = await delivery.getMovie(movieId);
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
    }, [movieId]);

    return (
        movie && (
            <div className={s.container}>
                <button className={s.button} onClick={() => navigate(from)}>
                    <ImArrowLeft /> Go Back
                </button>
                <div className={s.info}>
                    <img src={movie.poster} alt={movie.title} width="300" />
                    <div>
                        <h2>
                            {movie.original_title} (
                            {movie.release_date.slice(0, 4) ||
                                'release date is unknown'}
                            )
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
                    <NavLink to="cast" state={{ from }}>
                        Cast
                    </NavLink>
                    <NavLink to="reviews" state={{ from }}>
                        Reviews
                    </NavLink>
                </div>
                <div className={s.line}></div>

                <Suspense>
                    <Routes>
                        <Route path="cast" element={<CastInfo />} />
                        <Route path="reviews" element={<ReviewsInfo />} />
                    </Routes>
                </Suspense>
            </div>
        )
    );
};

export default MovieCard;
