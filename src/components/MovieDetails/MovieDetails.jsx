import s from './MovieDetails.module.scss';

export default function MovieDetails(details) {
    const base_img_url = 'https://image.tmdb.org/t/p/w342/';
    console.log(details);
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.movie_img}>
                    <img
                        src={`${base_img_url}${details.movie.poster_path}`}
                        alt={details.movie.title}
                        width={345}
                        height={500}
                    ></img>
                </div>
                <div className={s.movie_info}>
                    <h1 className={s.movie_title}>
                        {details.movie.title || details.movie.name}
                    </h1>
                    <h2 className={s.movie_release}>
                        Release:{details.movie.release_date}
                    </h2>
                    <p>{details.movie.overview}</p>
                    <h3>Genres</h3>
                    <ul>
                        {details.movie.genres.map(el => (
                            <li className={s.genres} key={el.id}>
                                {el.name}
                            </li>
                        ))}
                    </ul>
                    <p>
                        <span>IMDb:{details.movie.vote_average}</span>
                    </p>
                </div>
            </div>
        </>
    );
}
