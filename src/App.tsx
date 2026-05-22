import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import AcademicsPage from '@/pages/AcademicsPage';
import TeachersPage from '@/pages/TeachersPage';
import TimeTablePage from '@/pages/TimeTablePage';
import GalleryPage from '@/pages/GalleryPage';
import EventsPage from '@/pages/EventsPage';
import ContactPage from '@/pages/ContactPage';

function DevRedirect() {
  useEffect(() => {
    window.location.replace('https://www.vikashdubey.com/');
  }, []);
  return null;
}

export default function App() {
  useEffect(() => {
    if ((window as Window & { __devBranded?: boolean }).__devBranded) return;
    (window as Window & { __devBranded?: boolean }).__devBranded = true;

    console.log('%cVikash Dubey', 'color:#ffffff;background:#111827;font-size:15px;font-weight:600;padding:4px 10px;border-radius:4px;');
    console.log('%chttps://www.vikashdubey.com/', 'color:#3b82f6;font-size:12px;');
    console.log('%c2026', 'color:#6b7280;font-size:11px;');
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/developer" element={<DevRedirect />} />
          <Route
            path="/*"
            element={
              <>
                <Header />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/academics" element={<AcademicsPage />} />
                    <Route path="/teachers" element={<TeachersPage />} />
                    <Route path="/timetable" element={<TimeTablePage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/events" element={<EventsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                  </Routes>
                </main>
                <Footer />
                <FloatingButtons />
              </>
            }
          />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}
