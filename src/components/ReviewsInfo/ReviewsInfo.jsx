import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components';
import delivery from 'services/delivery';
import s from './ReviewsInfo.module.css';

const ReviewsInfo = () => {
    const [reviewsList, setReviewsList] = useState([]);
    const [status, setStatus] = useState('');
    const { movieId } = useParams();

    useEffect(() => {
        const controller = new AbortController();
        delivery.signal = controller.signal;

        async function getInfo() {
            setStatus('loading');
            try {
                const data = await delivery.getReviews(movieId);
                setReviewsList(data.results);
                if (!data.results.length) setStatus('noResults');
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
                    {reviewsList.map(review => (
                        <li key={review.created_at} className={s.item}>
                            <h3>Author: {review.author}</h3>
                            <p className={s.name}>{review.content}</p>
                        </li>
                    ))}
                </ul>
            )}
            {status === 'noResults' && (
                <h3 className={s.item}>
                    We don't have any reviews for this movie
                </h3>
            )}
        </>
    );
};

export default ReviewsInfo;
