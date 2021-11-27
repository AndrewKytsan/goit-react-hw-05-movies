import { useParams } from 'react-router';
import { useEffect, useState } from 'react/cjs/react.development';
import * as apiService from '../../ApiService/apiService';
export default function Reviews() {
    const [reviews, setRewiews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        apiService.getReviews(movieId).then(res => setRewiews(res.results));
    }, [movieId]);

    if (reviews.length === 0) {
        return <p>No reviews yet</p>;
    }
    return (
        <>
            <ul>
                {reviews.map(el => {
                    return (
                        <li key={el.id}>
                            <h4>Author: {el.author}</h4>
                            <p>{el.content}</p>
                        </li>
                    );
                })}
            </ul>
            ;
        </>
    );
}
