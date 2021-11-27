import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import * as apiService from '../../ApiService/apiService';
export default function Trailer() {
    const [trailer, setTrailer] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        apiService.getTrailer(movieId).then(res => setTrailer(res.results));
    }, [movieId]);

    return (
        <>
            <div>
                {trailer.map(el => (
                    <iframe
                        key={el.id}
                        src={`https://www.youtube.com/embed/${el.key}`}
                        title={el.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                ))}
            </div>
        </>
    );
}
