import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components';
import delivery from 'services/delivery';
import icons from 'images/icons.svg';
import s from './MovieSearch.module.css';

const MovieSearch = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [moviesList, setMoviesList] = useState([]);
    const [status, setStatus] = useState('');

    useEffect(() => {
        const renderGallery = async () => {
            setStatus('loading');
            try {
                const data = await delivery.search();
                setMoviesList(data.results);
                if (!data.results.length) setStatus('noResults');
                else setStatus('');
            } catch (error) {
                console.log('error: ', error);
            }
        };

        const query = searchParams.get('query');
        if (query) {
            delivery.query = query;
            renderGallery();
        }
    }, [searchParams, setSearchParams]);

    const onSubmit = event => {
        event.preventDefault();
        const query = event.target[1].value.trim();
        event.target[1].value = '';
        if (delivery.query !== query) {
            setSearchParams({ query });
        }
    };

    return (
        <>
            <form className={s.searchForm} onSubmit={onSubmit}>
                <button type="submit" className={s.button}>
                    {status === 'loading' ? (
                        <svg className={s.load}>
                            <use href={`${icons}#load`} />
                        </svg>
                    ) : (
                        <svg className={s.icon}>
                            <use href={`${icons}#search`} />
                        </svg>
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
            {status === 'noResults' && (
                <div className={s.noResults}>
                    Sorry, there are no movies matching your search query.
                    Please try again.
                </div>
            )}

            {moviesList.length && <MoviesList list={moviesList} />}
        </>
    );
};

export default MovieSearch;
