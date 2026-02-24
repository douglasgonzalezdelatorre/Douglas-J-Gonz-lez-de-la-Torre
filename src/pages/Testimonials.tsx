import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Star, ThumbsUp, ThumbsDown, MoreHorizontal, SquarePen, ArrowRight, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { Page } from '../types';

interface TestimonialsProps {
  onNavigate: (page: Page) => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Blogs', 'YouTube', 'Diseño Web', 'Freelance'];

  const filteredTestimonials = TESTIMONIALS.filter(t => 
    t.status === 'approved' && (filter === 'Todos' || t.category === filter)
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col min-h-screen"
    >
      <header className="sticky top-0 z-50 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-200 dark:border-white/5">
        <button onClick={() => onNavigate('services')} className="text-gray-900 dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-2">
          Todos los Testimonios
        </h2>
        <button onClick={() => onNavigate('submit-testimonial')} className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1 font-semibold text-sm">
          <SquarePen size={20} />
        </button>
      </header>

      <div className="sticky top-[69px] z-40 bg-background-light dark:bg-background-dark pt-2 pb-4">
        <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-all active:scale-95 ${
                filter === cat 
                  ? 'bg-primary text-background-dark font-bold shadow-sm shadow-primary/20' 
                  : 'bg-gray-200 dark:bg-[#23482f] text-gray-700 dark:text-white font-medium border border-transparent hover:border-primary/50'
              }`}
            >
              <span className="text-sm leading-normal">{cat}</span>
            </button>
          ))}
        </div>
      </div>

      <main className="flex flex-col gap-6 p-4 pt-0 pb-32">
        {filteredTestimonials.map((testimonial) => (
          <article key={testimonial.id} className="flex flex-col gap-3 bg-white dark:bg-card-dark p-4 rounded-xl shadow-sm border border-gray-100 dark:border-white/5">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 ring-2 ring-primary/20" style={{ backgroundImage: `url(${testimonial.avatar})` }}></div>
                <div>
                  <p className="text-gray-900 dark:text-white text-base font-bold leading-tight">{testimonial.author}</p>
                  <p className="text-gray-500 dark:text-[#92c9a4] text-xs font-medium uppercase tracking-wide">{testimonial.date} • {testimonial.category}</p>
                </div>
              </div>
              <MoreHorizontal className="text-gray-300 dark:text-gray-600" size={20} />
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={20} 
                  className={`${i < Math.floor(testimonial.rating) ? 'text-primary fill-current' : 'text-gray-300 dark:text-gray-600'}`} 
                />
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-200 text-base font-normal leading-relaxed">
              {testimonial.content}
            </p>
            <div className="flex items-center gap-6 mt-1 pt-3 border-t border-gray-100 dark:border-white/5">
              <button className="flex items-center gap-2 text-gray-400 dark:text-[#92c9a4] hover:text-primary transition-colors group">
                <ThumbsUp size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{testimonial.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-gray-400 dark:text-[#92c9a4] hover:text-red-400 transition-colors group">
                <ThumbsDown size={20} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </article>
        ))}
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark dark:to-transparent pb-6 max-w-md mx-auto flex flex-col gap-3">
        <button onClick={() => onNavigate('submit-testimonial')} className="w-full flex items-center justify-center gap-2 rounded-lg h-12 bg-gray-200 dark:bg-card-dark border border-transparent hover:border-primary/50 text-gray-900 dark:text-white text-base font-bold transition-all active:scale-[0.98]">
          <MessageSquare size={20} />
          <span>Enviar Testimonio</span>
        </button>
        <button onClick={() => onNavigate('contact')} className="w-full flex items-center justify-center gap-2 rounded-lg h-14 bg-primary text-background-dark text-lg font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary/90 transition-all active:scale-[0.98]">
          <span>¡Sé nuestra próxima historia de éxito!</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </motion.div>
  );
};
