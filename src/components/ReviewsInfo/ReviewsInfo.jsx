import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import delivery from 'services/delivery';
import s from './ReviewsInfo.module.css';

const ReviewsInfo = () => {
    const [reviewsList, setReviewsList] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const controller = new AbortController();
        delivery.signal = controller.signal;

        async function getInfo() {
            const data = await delivery.getReviews(movieId);
            console.log('data_reviews: ', data);
            setReviewsList(data.results);
        }

        getInfo();

        return () => {
            controller.abort();
        };
    }, [movieId]);

    return reviewsList.length ? (
        <ul className={s.list}>
            {reviewsList.map(review => (
                <li key={review.created_at} className={s.item}>
                    <h3>Author: {review.author}</h3>
                    <p className={s.name}>{review.content}</p>
                </li>
            ))}
        </ul>
    ) : (
        <h3 className={s.item}>We don't have any reviews for this movie</h3>
    );
};

export default ReviewsInfo;
