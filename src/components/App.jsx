import { Switch, Route, Routes } from 'react-router-dom';
import { Header } from '../components';
import { MoviesList } from '../components';
import { MovieInfo } from '../components';
import { PageNotFound } from '../components';

export const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<MoviesList />} />
                <Route path="/movies" element={<MovieInfo />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
};
