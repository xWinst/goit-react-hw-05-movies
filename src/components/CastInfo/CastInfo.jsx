import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components';
import delivery from 'services/delivery';
import s from './CastInfo.module.css';
import nofoto from 'images/nofoto.jpg';

const CastInfo = () => {
    const [castList, setCastList] = useState([]);
    const [status, setStatus] = useState('');
    const { movieId } = useParams();

    useEffect(() => {
        const controller = new AbortController();
        delivery.signal = controller.signal;

        async function getInfo() {
            setStatus('loading');
            try {
                const data = await delivery.getCredits(movieId);
                setCastList(data.cast);

                if (!data.cast.length) setStatus('noResults');
                else setStatus('resolved');
            } catch (error) {
                console.log('error: ', error);
            }
        }

        getInfo();

        return () => {
            controller.abort();
        };
    }, [movieId]);

    return (
        <>
            {status === 'loading' && <Loader />}
            {status === 'resolved' && (
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
            )}
            {status === 'noResults' && (
                <h3 className={s.text}>
                    We don't have information about the cast for this movie
                    &#9785;
                </h3>
            )}
        </>
    );
};

export default CastInfo;
