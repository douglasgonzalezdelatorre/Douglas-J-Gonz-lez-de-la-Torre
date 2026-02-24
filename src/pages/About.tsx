import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Globe, PlayCircle, Rocket, History, Languages, Check } from 'lucide-react';
import { Page } from '../types';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex flex-col min-h-screen pb-24"
    >
      <header className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-white/5">
        <div className="flex items-center justify-between px-4 py-4 max-w-md mx-auto w-full">
          <button onClick={() => onNavigate('home')} className="flex items-center justify-center size-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-lg font-bold tracking-tight">Sobre Mí</h1>
          <div className="size-10"></div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-md mx-auto flex flex-col">
        <section className="flex flex-col items-center pt-8 px-6">
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-br from-primary to-emerald-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative size-32 rounded-full border-4 border-background-light dark:border-background-dark overflow-hidden bg-slate-200 dark:bg-surface-dark">
              <img alt="Douglas González" className="w-full h-full object-cover" src="https://picsum.photos/seed/douglas/300/300" />
            </div>
            <div className="absolute bottom-1 right-1 bg-primary text-black rounded-full p-1 border-4 border-background-light dark:border-background-dark flex items-center justify-center">
              <Check size={16} strokeWidth={3} />
            </div>
          </div>
          <div className="mt-5 text-center space-y-1">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Douglas González</h2>
            <p className="text-slate-500 dark:text-emerald-100/70 text-sm font-medium">Fundador de Blogdoucode & Desarrollador</p>
          </div>
          <div className="flex gap-3 mt-4">
            <a className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-200 dark:bg-surface-dark hover:bg-slate-300 dark:hover:bg-white/10 transition text-xs font-semibold text-slate-700 dark:text-emerald-100" href="#">
              <Globe size={16} /> blogdoucode.com
            </a>
            <a className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-200 dark:bg-surface-dark hover:bg-slate-300 dark:hover:bg-white/10 transition text-xs font-semibold text-slate-700 dark:text-emerald-100" href="#">
              <PlayCircle size={16} /> YouTube
            </a>
          </div>
        </section>

        <section className="px-4 mt-8">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-surface-dark border border-slate-100 dark:border-white/5 shadow-sm">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">5+</span>
              <span className="text-xs text-slate-500 dark:text-emerald-100/60 font-medium uppercase tracking-wider mt-1">Años Exp.</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-surface-dark border border-slate-100 dark:border-white/5 shadow-sm">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">10k+</span>
              <span className="text-xs text-slate-500 dark:text-emerald-100/60 font-medium uppercase tracking-wider mt-1">Estudiantes</span>
            </div>
          </div>
        </section>

        <section className="px-5 mt-8 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <History className="text-primary" size={20} />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Mi Historia</h3>
          </div>
          <div className="prose prose-sm prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              ¡Hola! Soy un apasionado por la tecnología. Comencé mi camino en la programación buscando libertad financiera y ahora comparto todo lo que sé.
            </p>
            <p>
              Al principio, el código parecía un laberinto sin salida. Pasé noches enteras frustrado, pero cada error me enseñó una lección valiosa. Esa persistencia me llevó a dominar el desarrollo web y descubrir cómo <span className="text-primary font-medium">monetizar mi conocimiento</span>.
            </p>
          </div>
        </section>

        <section className="px-4 mt-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface-dark to-black border border-white/10 p-6">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 size-32 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex flex-col gap-3">
              <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-1">
                <Rocket size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Misión de Blogdoucode</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Democratizar el acceso a la educación tecnológica y enseñar estrategias reales para generar ingresos pasivos a través de internet.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 mt-8 mb-4">
          <h3 className="text-sm font-semibold text-slate-500 dark:text-emerald-100/50 uppercase tracking-wider mb-4">Especialidades</h3>
          <div className="flex flex-wrap gap-2">
            {['Desarrollo Web', 'SEO', 'Monetización', 'YouTube Growth', 'Marketing Digital'].map(skill => (
              <span key={skill} className="px-3 py-1.5 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 text-xs font-medium text-slate-700 dark:text-slate-200">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 w-full z-40 px-4 py-4 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark dark:to-transparent pointer-events-none">
        <div className="max-w-md mx-auto pointer-events-auto">
          <button onClick={() => onNavigate('home')} className="w-full bg-primary hover:bg-[#0fdc52] active:scale-[0.98] transition-all duration-200 text-black font-bold text-base py-4 rounded-xl shadow-[0_0_20px_rgba(19,236,91,0.3)] flex items-center justify-center gap-2">
            <span>Ver mis tutoriales</span>
            <PlayCircle size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
