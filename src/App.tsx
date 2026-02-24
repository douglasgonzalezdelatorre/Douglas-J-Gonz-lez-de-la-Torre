/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Home as HomeIcon, LayoutGrid, BookOpen, User, ShieldCheck, Mail } from 'lucide-react';
import { Page } from './types';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Testimonials } from './pages/Testimonials';
import { ArticleDetail } from './pages/ArticleDetail';
import { SubmitTestimonial } from './pages/SubmitTestimonial';
import { Admin } from './pages/Admin';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'services':
        return <Services onNavigate={setCurrentPage} />;
      case 'testimonials':
        return <Testimonials onNavigate={setCurrentPage} />;
      case 'article':
        return <ArticleDetail onNavigate={setCurrentPage} />;
      case 'submit-testimonial':
        return <SubmitTestimonial onNavigate={setCurrentPage} />;
      case 'admin':
        return <Admin onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  const navItems = [
    { id: 'home', label: 'Inicio', icon: HomeIcon },
    { id: 'services', label: 'Servicios', icon: LayoutGrid },
    { id: 'article', label: 'Blog', icon: BookOpen },
    { id: 'about', label: 'Sobre Mí', icon: User },
    { id: 'admin', label: 'Admin', icon: ShieldCheck },
  ];

  // Hide bottom nav on certain pages for a cleaner look
  const hideBottomNav = ['submit-testimonial', 'article', 'contact'].includes(currentPage);

  return (
    <div className="min-h-screen bg-[#f6f8f6] dark:bg-background-dark flex justify-center">
      <div className="w-full max-w-md bg-white dark:bg-background-dark shadow-2xl relative min-h-screen overflow-x-hidden">
        <AnimatePresence mode="wait">
          <div key={currentPage}>
            {renderPage()}
          </div>
        </AnimatePresence>

        {!hideBottomNav && (
          <nav className="fixed bottom-0 z-50 w-full max-w-md bg-white/90 dark:bg-[#102216]/90 backdrop-blur-lg border-t border-slate-200 dark:border-white/10 pb-safe">
            <div className="flex justify-around items-center h-16">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id as Page)}
                  className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
                    currentPage === item.id ? 'text-primary' : 'text-slate-400 hover:text-primary'
                  }`}
                >
                  <item.icon size={24} className={currentPage === item.id ? 'fill-current' : ''} />
                  <span className="text-[10px] font-medium mt-0.5">{item.label}</span>
                </button>
              ))}
            </div>
            <div className="h-1 bg-transparent w-full"></div>
          </nav>
        )}
      </div>
    </div>
  );
}
