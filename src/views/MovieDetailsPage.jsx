import { useEffect, useState } from 'react';
import {
    Route,
    Routes,
    useLocation,
    useNavigate,
    useParams,
} from 'react-router';
import { NavLink } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import * as apiService from '../ApiService/apiService';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';
import Trailer from '../components/Trailer/Trailer';
import s from '../components/MovieDetails/MovieDetails.module.scss';

export default function MovieDetailsPage() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const goBack = () => {
        if (location.pathname === `/movies/${movieId}`) {
            navigate(-1);
        }
        if (location.pathname === `/movies/${movieId}/cast`) {
            navigate(-2);
        }
        if (location.pathname === `/movies/${movieId}/reviews`) {
            navigate(-2);
        }
        if (location.pathname === `/movies/${movieId}/trailer`) {
            navigate(-2);
        }
    };

    useEffect(() => {
        apiService
            .getDetailsofFilm(movieId)
            .then(res => setMovie(res), console.log(movieId));
    }, [movieId]);

    return (
        <>
            <div className="container">
                <button className={s.btnBack} type="button" onClick={goBack}>
                    Back to results
                </button>
                {movie && <MovieDetails movie={movie} />}

                <NavLink to="cast" className={s.bottomLink}>
                    Cast
                </NavLink>
                <NavLink to="reviews" className={s.bottomLink}>
                    Reviews
                </NavLink>
                <NavLink to="trailer" className={s.bottomLink}>
                    Trailer
                </NavLink>
                <Routes>
                    <Route path="/cast" element={<Cast />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/trailer" element={<Trailer />} />
                </Routes>
            </div>
        </>
    );
}
