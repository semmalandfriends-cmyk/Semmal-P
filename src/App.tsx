/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { PortalProvider } from './context/PortalContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { BackToTop } from './components/common/BackToTop';
import { QuickSearchModal } from './components/common/QuickSearchModal';
import { PortalModal } from './components/common/PortalModal';
import { CourseDetailModal } from './components/common/CourseDetailModal';
import { EventDetailModal } from './components/common/EventDetailModal';
import { NotificationToast } from './components/common/NotificationToast';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoursesPage } from './pages/CoursesPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { FacultyPage } from './pages/FacultyPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { NewsEventsPage } from './pages/NewsEventsPage';
import { ContactPage } from './pages/ContactPage';
import { GalleryPage } from './pages/GalleryPage';

// Scroll to top automatically when route changes
const ScrollToTopOnNavigation: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <PortalProvider>
      <HashRouter>
        <ScrollToTopOnNavigation />
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased font-sans selection:bg-amber-400 selection:text-slate-950">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/admissions" element={<AdmissionsPage />} />
              <Route path="/faculty" element={<FacultyPage />} />
              <Route path="/facilities" element={<FacilitiesPage />} />
              <Route path="/news-events" element={<NewsEventsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />

          {/* Interactive Modals and Floating Tools */}
          <QuickSearchModal />
          <PortalModal />
          <CourseDetailModal />
          <EventDetailModal />
          <BackToTop />
          <NotificationToast />
        </div>
      </HashRouter>
    </PortalProvider>
  );
}
