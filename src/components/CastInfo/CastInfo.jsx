import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import delivery from 'services/delivery';
import s from './CastInfo.module.css';
import nofoto from 'images/nofoto.jpg';

const CastInfo = () => {
    const [castList, setCastList] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const controller = new AbortController();
        delivery.signal = controller.signal;

        async function getInfo() {
            const data = await delivery.getCredits(movieId);
            console.log('data_cast: ', data);
            setCastList(data.cast);
        }

        getInfo();

        return () => {
            controller.abort();
        };
    }, [movieId]);

    return (
        <ul className={s.list}>
            {castList.map(cast => (
                <li key={'cast' + cast.id} className={s.item}>
                    <img
                        src={
                            cast.profile_path
                                ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
                                : nofoto
                        }
                        alt={cast.name}
                        width="100"
                    />
                    <span className={s.name}>{cast.name}</span>
                </li>
            ))}
        </ul>
    );
};

export default CastInfo;
