import s from './GalleryItem.module.scss';
import { Link } from 'react-router-dom';
function GalleryItem({ item }) {
    const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

    return (
        <Link to={`/movies/${item.id}`}>
            <li className={s.GalleryItem}>
                <img
                    className={s.GalleryItemImage}
                    src={`${IMG_BASE_URL}${item.poster_path}`}
                    alt={item.title}
                />
                <h4 className={s.GalleryItemTitle}>
                    {item.title || item.name}
                </h4>
            </li>
        </Link>
    );
}

export default GalleryItem;
