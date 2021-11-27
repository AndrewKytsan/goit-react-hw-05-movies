import { useEffect, useState } from 'react';
import * as apiService from '../ApiService/apiService';
import Gallery from '../components/Gallery/Gallery';
export default function Home() {
    const [trendFilms, setTrendFilms] = useState(null);
    useEffect(() => {
        apiService.getTrendFilms().then(res => setTrendFilms(res.results));
    }, []);
    return (
        <>
            <h1 className="title">Top movies</h1>
            {trendFilms && <Gallery items={trendFilms} />}
        </>
    );
}
