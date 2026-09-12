import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GourmetPage from './pages/GourmetPage';
import SacolaDrawer from './components/SacolaDrawer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gourmet" element={<GourmetPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <SacolaDrawer />
    </>
  );
}