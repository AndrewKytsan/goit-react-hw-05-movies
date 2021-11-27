import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import Navigation from './components/Navigations/Navigations';
import Loader from 'react-loader-spinner';

const HomePage = lazy(() => import('./views/HomePage'));
const MoviePage = lazy(() => import('./views/MoviePage'));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage'));

export default function App() {
    return (
        <>
            <Suspense
                fallback={
                    <Loader
                        type="Bars"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000}
                        className="loader"
                    />
                }
            >
                <Routes>
                    <Route path="/" element={<Navigation />}>
                        <Route index element={<HomePage />} />
                        <Route path="/movies" element={<MoviePage />} />
                        <Route
                            path="/movies/:movieId/*"
                            element={<MovieDetailsPage />}
                        />
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
}
