import React from 'react';
import { motion } from 'motion/react';
import { Play, Eye, ArrowRight, Bell, User, Globe, Search, GraduationCap } from 'lucide-react';
import { BLOG_POSTS, SERVICES } from '../constants';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col pb-24"
    >
      {/* Welcome Section */}
      <section className="px-5 pt-6 pb-2">
        <p className="text-slate-500 dark:text-gray-400 text-sm font-medium mb-1">Bienvenido de nuevo</p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Hola, Emprendedor</h2>
      </section>

      {/* Featured YouTube Card */}
      <section className="p-5">
        <div className="flex flex-col rounded-xl overflow-hidden shadow-sm bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 group cursor-pointer transition-all hover:scale-[1.01]">
          <div className="relative w-full aspect-video bg-center bg-cover" style={{ backgroundImage: 'url("https://picsum.photos/seed/tech/800/450")' }}>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <Play className="text-white fill-current ml-1" size={24} />
              </div>
            </div>
            <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide shadow-md">
              Nuevo Video
            </div>
          </div>
          <div className="p-4 flex flex-col gap-3">
            <div>
              <h3 className="text-lg font-bold leading-tight text-slate-900 dark:text-white mb-1">Cómo ganar tus primeros $100 online</h3>
              <p className="text-slate-500 dark:text-gray-400 text-sm line-clamp-2">Descubre la estrategia paso a paso para monetizar tu blog en tiempo récord sin inversión inicial.</p>
            </div>
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-gray-400">
                <Eye size={16} />
                <span>12k vistas</span>
              </div>
              <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-primary text-black text-sm font-semibold hover:bg-opacity-90 transition-colors">
                Ver en YouTube
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-2">
        <div className="flex items-center justify-between px-5 mb-3">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Servicios</h3>
          <button onClick={() => onNavigate('services')} className="text-primary text-sm font-medium hover:underline">Ver todos</button>
        </div>
        <div className="flex overflow-x-auto pb-6 px-5 gap-4 snap-x no-scrollbar">
          {SERVICES.map((service) => (
            <div key={service.id} className="flex-shrink-0 snap-center w-60 p-4 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 flex flex-col gap-3">
              <div className={`w-12 h-12 rounded-lg bg-${service.color}-500/20 text-${service.color}-400 flex items-center justify-center`}>
                <service.icon size={24} />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">{service.title}</h4>
                <p className="text-xs text-slate-500 dark:text-gray-400 mt-1 line-clamp-1">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Articles List */}
      <section className="px-5 pb-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Lo último en el blog</h3>
        <div className="flex flex-col gap-4">
          {BLOG_POSTS.map((post) => (
            <button
              key={post.id}
              onClick={() => onNavigate('article')}
              className="flex gap-4 p-3 rounded-xl bg-white dark:bg-surface-dark/50 hover:bg-slate-50 dark:hover:bg-surface-dark border border-transparent dark:border-white/5 hover:border-slate-200 dark:hover:border-white/10 transition-all text-left"
            >
              <div className="w-24 h-24 flex-shrink-0 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}></div>
              <div className="flex flex-col justify-center flex-1 min-w-0">
                <span className="text-primary text-xs font-semibold mb-1 uppercase tracking-wider">{post.category}</span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug line-clamp-2 mb-1">{post.title}</h4>
                <p className="text-xs text-slate-500 dark:text-gray-400">{post.readTime}</p>
              </div>
            </button>
          ))}
        </div>
      </section>
    </motion.div>
  );
};
