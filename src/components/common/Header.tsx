import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  GraduationCap, 
  Search, 
  UserCheck, 
  Menu, 
  X, 
  PhoneCall, 
  Award, 
  LogOut,
  ChevronRight
} from 'lucide-react';
import { usePortal } from '../../context/PortalContext';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { 
    currentUser, 
    logoutUser, 
    setIsSearchOpen, 
    setIsPortalOpen, 
    setPortalTab 
  } = usePortal();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Courses', path: '/courses' },
    { label: 'Admissions', path: '/admissions' },
    { label: 'Faculty & Life', path: '/faculty' },
    { label: 'Facilities', path: '/facilities' },
    { label: 'News & Events', path: '/news-events' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Announcement Ribbon */}
      <div className="bg-slate-900 text-slate-200 text-xs px-4 py-2 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold uppercase tracking-wider text-[11px]">
              <Award className="w-3.5 h-3.5" />
              NAAC A++ Accredited
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="truncate">
              Admissions Open 2026-27 · Early Application Deadline June 30
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <a 
              href="tel:+18002228324" 
              className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-amber-400" />
              <span>+1 (800) 222-TECH</span>
            </a>

            {currentUser ? (
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-medium">
                  {currentUser.role === 'student' ? 'Student: ' : 'Faculty: '} {currentUser.name.split(' ')[0]}
                </span>
                <button
                  onClick={logoutUser}
                  className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-3 h-3" />
                  <span>Exit</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-slate-300">
                <button
                  onClick={() => { setPortalTab('student'); setIsPortalOpen(true); }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Student Portal
                </button>
                <span className="text-slate-600">/</span>
                <button
                  onClick={() => { setPortalTab('faculty'); setIsPortalOpen(true); }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Faculty ERP
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Top Bar: Contract Zone 1 (Wordmark) - Zone 2 (Links) - Zone 3 (CTA & Tools) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-6">
          {/* Zone 1: Single element brand mark */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group text-slate-900 shrink-0"
            aria-label="ABC College of Technology Home"
          >
            <div className="w-11 h-11 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 shadow-xs group-hover:bg-slate-800 transition-colors">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-950 font-display uppercase leading-tight">
                ABC College of Technology
              </span>
              <span className="text-[11px] font-medium tracking-wide text-slate-500 uppercase">
                Autonomous Institution · Estd. 1996
              </span>
            </div>
          </Link>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-700">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`whitespace-nowrap transition-colors relative py-1 ${
                    active 
                      ? 'text-slate-950 font-semibold' 
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Utility */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5"
              aria-label="Search courses, faculty, and notices"
              title="Search (Cmd+K)"
            >
              <Search className="w-4 h-4" />
              <span className="hidden xl:inline text-xs text-slate-400 font-mono">⌘K</span>
            </button>

            {!currentUser && (
              <button
                onClick={() => { setPortalTab('student'); setIsPortalOpen(true); }}
                className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors whitespace-nowrap"
              >
                <UserCheck className="w-3.5 h-3.5 text-slate-500" />
                <span>Portal</span>
              </button>
            )}

            <Link
              to="/admissions"
              className="px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 active:bg-slate-900 border border-slate-800 rounded-lg shadow-xs transition-all whitespace-nowrap flex items-center gap-1.5"
            >
              <span>Apply Now</span>
              <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                    active
                      ? 'bg-slate-900 text-white font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsSearchOpen(true);
              }}
              className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-lg text-left"
            >
              <Search className="w-4 h-4 text-slate-400" />
              <span>Search directory, courses & notices</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsPortalOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium text-slate-800 bg-white border border-slate-200 rounded-lg hover:bg-slate-50"
            >
              <UserCheck className="w-4 h-4 text-amber-600" />
              <span>Student & Faculty Portal Login</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
