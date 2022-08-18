import { useState, useEffect } from 'react';
import { MoviesList } from 'components';
import s from './TrendList.module.css';
import delivery from 'services/delivery';

const TrendList = () => {
    const [trendList, setTrendList] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        delivery.signal = controller.signal;

        async function getTrand() {
            const data = await delivery.getTrend();
            console.log('data_list: ', data);
            setTrendList(data.results);
        }

        getTrand();

        return () => {
            controller.abort();
        };
    }, []);
    return (
        <div className={s.container}>
            <h2>Trending today</h2>
            <MoviesList list={trendList} />
        </div>
    );
};

export default TrendList;
