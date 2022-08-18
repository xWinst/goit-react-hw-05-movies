import { Switch, Route, Routes } from 'react-router-dom';
import {
    Header,
    TrendList,
    MovieSearch,
    MovieCard,
    PageNotFound,
} from 'components';

export const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<TrendList />} />
                <Route path="/movies" element={<MovieSearch />} />
                <Route path="/movies/:movieId/*" element={<MovieCard />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
};
