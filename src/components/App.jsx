import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, Loader } from 'components';

const TrendList = lazy(() => import('components/TrendList/TrendList'));
const MovieSearch = lazy(() => import('components/MovieSearch/MovieSearch'));
const MovieCard = lazy(() => import('components/MovieCard/MovieCard'));
const PageNotFound = lazy(() => import('components/PageNotFound/PageNotFound'));

export const App = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<TrendList />} />
                    <Route path="movies" element={<MovieSearch />} />
                    <Route path="movies/:movieId/*" element={<MovieCard />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Suspense>
        </>
    );
};
