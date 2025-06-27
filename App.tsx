import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import CatalogPage from './pages/CatalogPage';
import AdminPage from './pages/AdminPage';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />} />
                <Route path="catalog" element={<CatalogPage />} />
                <Route path="admin" element={<AdminPage />} />
            </Route>
        </Routes>
    );
};

export default App;