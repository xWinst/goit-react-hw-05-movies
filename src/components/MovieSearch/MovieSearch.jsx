import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components';
import delivery from 'services/delivery';
import load from 'images/loading.svg';
import search from 'images/search.svg';
import s from './MovieSearch.module.css';

const MovieSearch = () => {
    const [moviesList, setMoviesList] = useState([]);
    const [status, setStatus] = useState('');

    // const location = useLocation();
    // const history = useHistory();
    const [searchParams, setSearchParams] = useSearchParams();
    // useEffect(() => {});

    const onSubmit = event => {
        event.preventDefault();
        const query = event.target[1].value.trim();
        if (query && delivery.query !== query) {
            delivery.query = query;
            setSearchParams({ query: delivery.query });
            renderGallery();
            event.target[1].value = '';
        }
    };

    const renderGallery = async () => {
        setStatus('loading');
        try {
            const data = await delivery.search();
            setMoviesList(data.results);
            console.log('data ', data); ///////////////////
        } catch (error) {
            console.log('error: ', error);
        } finally {
            setStatus('');
            console.log('searchParams.query: ', searchParams.get('query')); //////////
        }
    };

    return (
        <>
            <form className={s.searchForm} onSubmit={onSubmit}>
                <button type="submit" className={s.button}>
                    {status === 'loading' ? (
                        <img className={s.load} src={load} alt="loading" />
                    ) : (
                        <img className={s.icon} src={search} alt="search" />
                    )}
                </button>

                <input
                    className={s.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                />
            </form>

            {!moviesList.length && searchParams.get('query') ? (
                <div className={s.noResults}>
                    Sorry, there are no movies matching your search query.
                    Please try again.
                </div>
            ) : (
                <MoviesList list={moviesList} />
            )}
        </>
    );
};

export default MovieSearch;
