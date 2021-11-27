import s from './Gallery.module.scss';
import GalleryItem from '../GalleryItem/GalleryItem';

function Gallery({ items }) {
    return (
        <ul className={s.Gallery}>
            {items.map(item => (
                <GalleryItem key={item.id} item={item} />
            ))}
        </ul>
    );
}

export default Gallery;
