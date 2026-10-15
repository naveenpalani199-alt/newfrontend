import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import GlobalSearchModal from './components/GlobalSearchModal';

import HomeDashboard from './pages/HomeDashboard';
import TechnologyDashboard from './pages/TechnologyDashboard';
import DayTasksDashboard from './pages/DayTasksDashboard';
import ProjectsPage from './pages/ProjectsPage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Global Ctrl+K / Cmd+K search listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans antialiased transition-colors duration-200">
      {/* Sidebar Navigation */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content Area (offset by sidebar on desktop) */}
      <div className="lg:pl-72 flex flex-col min-h-screen">
        {/* Top Sticky Navbar */}
        <Navbar
          onOpenSearch={() => setSearchOpen(true)}
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
        />

        {/* Page Viewports */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            {/* 1. Home Dashboard */}
            <Route path="/" element={<HomeDashboard />} />

            {/* 2. Standalone Projects & Articles */}
            <Route path="/projects" element={<ProjectsPage />} />

            {/* 3. Settings & Data Manager */}
            <Route path="/settings" element={<SettingsPage />} />

            {/* 4. Technology Dashboard (e.g. /html, /css, /javascript, /tailwind, /react, /sql) */}
            <Route path="/:courseId" element={<TechnologyDashboard />} />

            {/* 5. Day Task Dashboard (e.g. /html/day/1, /css/day/3) */}
            <Route path="/:courseId/day/:dayId" element={<DayTasksDashboard />} />

            {/* 6. 404 Not Found */}
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </main>

        {/* Clean Modern Footer */}
        <Footer />
      </div>

      {/* Global Search Dialog Modal */}
      <GlobalSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </div>
  );
}
