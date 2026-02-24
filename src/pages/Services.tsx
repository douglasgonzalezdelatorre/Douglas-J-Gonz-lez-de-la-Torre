import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, BadgeCheck, ChevronRight, Star, ArrowRight, Quote } from 'lucide-react';
import { SERVICES, TESTIMONIALS } from '../constants';
import { Page } from '../types';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col pb-28"
    >
      <div className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-black/5 dark:border-white/5">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <button onClick={() => onNavigate('home')} className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Mis Servicios</h2>
        </div>
      </div>

      <div className="px-4 pt-6 flex flex-col gap-6">
        <div className="flex flex-col gap-6 items-center text-center">
          <div className="relative">
            <div className="size-28 rounded-full border-4 border-primary/20 bg-cover bg-center shadow-xl shadow-primary/5" style={{ backgroundImage: 'url("https://picsum.photos/seed/douglas/200/200")' }}></div>
            <div className="absolute bottom-0 right-0 bg-primary rounded-full p-1.5 border-4 border-background-light dark:border-background-dark flex items-center justify-center">
              <BadgeCheck className="text-background-dark" size={16} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Douglas González</h1>
            <p className="text-slate-500 dark:text-emerald-100/70 text-base font-normal leading-relaxed max-w-[280px] mx-auto">
              Impulsa tu presencia digital con soluciones a medida para blogs y YouTube.
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-slate-900 dark:text-white tracking-tight text-xl font-bold leading-tight pb-2 border-b border-black/5 dark:border-white/5">
            Lo que ofrezco
          </h3>
        </div>

        <div className="flex flex-col gap-3">
          {SERVICES.map((service) => (
            <div key={service.id} className="group relative flex gap-4 bg-white dark:bg-surface-dark p-4 rounded-xl border border-transparent dark:border-white/5 shadow-sm hover:border-primary/50 transition-all active:scale-[0.99] cursor-pointer">
              <div className="flex items-start gap-4 w-full">
                <div className="flex items-center justify-center rounded-lg bg-primary/10 dark:bg-emerald-900/30 text-primary shrink-0 size-12 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                  <service.icon size={24} />
                </div>
                <div className="flex flex-1 flex-col justify-center">
                  <p className="text-slate-900 dark:text-white text-base font-bold leading-normal mb-1">{service.title}</p>
                  <p className="text-slate-500 dark:text-emerald-100/60 text-sm font-normal leading-relaxed">{service.description}</p>
                </div>
                <div className="shrink-0 self-center">
                  <ChevronRight className="text-slate-400 dark:text-white/30 group-hover:text-primary transition-colors" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pb-6">
          <h3 className="text-slate-900 dark:text-white tracking-tight text-xl font-bold leading-tight pb-4 px-1">
            Clientes Satisfechos
          </h3>
          <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar -mx-4 px-4 snap-x">
            {TESTIMONIALS.filter(t => t.status === 'approved').map((testimonial) => (
              <div key={testimonial.id} className="shrink-0 snap-center w-[290px] bg-white dark:bg-surface-dark p-6 rounded-2xl border border-black/5 dark:border-white/5 shadow-lg shadow-black/5 dark:shadow-none flex flex-col gap-4 relative overflow-hidden group">
                <Quote className="absolute -top-2 -right-2 text-[100px] text-black/[0.03] dark:text-white/[0.03] select-none pointer-events-none group-hover:scale-110 transition-transform duration-500" />
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-12 border-2 border-primary shadow-sm" style={{ backgroundImage: `url(${testimonial.avatar})` }}></div>
                    <div>
                      <p className="text-sm font-bold dark:text-white text-slate-900 leading-tight">{testimonial.author}</p>
                      <p className="text-[11px] text-slate-500 dark:text-emerald-100/60 uppercase tracking-wide font-semibold mt-0.5">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-primary bg-primary/5 px-2.5 py-1 rounded-full border border-primary/10">
                    <Star size={14} className="fill-current" />
                    <span className="font-bold ml-1 text-xs">{testimonial.rating.toFixed(1)}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-emerald-100/90 leading-relaxed italic relative z-10 line-clamp-3">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
          <button onClick={() => onNavigate('testimonials')} className="w-full mt-2 py-3 bg-white dark:bg-surface-dark border border-black/5 dark:border-white/5 rounded-xl text-slate-900 dark:text-white font-semibold text-sm hover:bg-slate-50 dark:hover:bg-white/5 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group">
            <span>Ver todos los testimonios</span>
            <ArrowRight className="text-slate-400 dark:text-white/30 group-hover:text-primary transition-colors" size={18} />
          </button>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark dark:to-transparent pt-10 pb-6 px-4">
        <div className="max-w-md mx-auto">
          <button onClick={() => onNavigate('contact')} className="w-full bg-primary hover:bg-emerald-400 text-background-dark font-bold text-lg py-4 px-6 rounded-xl shadow-[0_0_20px_-5px_rgba(19,236,91,0.4)] transition-all active:scale-[0.98] flex items-center justify-center gap-2">
            <span>Hablemos de tu proyecto</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
