import { useParams } from 'react-router';
import { useEffect, useState } from 'react/cjs/react.development';
import * as apiService from '../../ApiService/apiService';
import s from './Cast.module.scss';
export default function Cast() {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();
    useEffect(() => {
        apiService.getCredits(movieId).then(res => setCast(res.cast));
    }, [movieId]);
    if (cast.length < 1) {
        return <p>No information</p>;
    }
    return (
        <>
            <ul className={s.cast}>
                {cast.map(el => {
                    return (
                        <li key={el.id} className={s.castItem}>
                            <img
                                src={
                                    el.profile_path
                                        ? `https://image.tmdb.org/t/p/w185/${el.profile_path}`
                                        : `https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png`
                                }
                                alt={el.name}
                            />
                            <h4 className={s.castName}>{el.name}</h4>
                            <p className={s.castName}>{el.character}</p>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
