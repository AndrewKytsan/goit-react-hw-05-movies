import Searchbar from '../components/Searchbar/Searchbar';
import Gallery from '../components/Gallery/Gallery';
import * as apiService from '../ApiService/apiService';
import { useLocation, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';

export default function MoviePage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [query, setQuery] = useState(null);
    const [result, setResult] = useState([]);
    const [queryURL] = useState(() =>
        new URLSearchParams(location.search).get('query'),
    );
    const allQuery = query || queryURL;
    const onSubmit = query => {
        setQuery(query);
        navigate({ search: `query=${query}` });
    };
    useEffect(() => {
        if (!allQuery) {
            return;
        }
        apiService
            .getFilmsByQuery(allQuery)
            .then(res => setResult(res.results));
    });

    return (
        <>
            <Searchbar onSubmit={onSubmit} />
            {result && <Gallery items={result} />}
        </>
    );
}
