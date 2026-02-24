import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Camera } from 'lucide-react';
import { Page } from '../types';

interface SubmitTestimonialProps {
  onNavigate: (page: Page) => void;
}

export const SubmitTestimonial: React.FC<SubmitTestimonialProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark"
    >
      <header className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-50 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90">
        <button onClick={() => onNavigate('testimonials')} aria-label="Cancelar" className="text-gray-900 dark:text-white flex size-12 shrink-0 items-center justify-start hover:opacity-70 transition-opacity">
          <X size={28} />
        </button>
        <h1 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12">Enviar Testimonio</h1>
      </header>

      <main className="flex-1 overflow-y-auto px-4 pb-32">
        <div className="pt-4 pb-2">
          <h2 className="text-gray-900 dark:text-white tracking-tight text-[28px] font-bold leading-tight text-left">Comparte tu Éxito</h2>
          <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed pt-2">
            Tu historia inspira a otros emprendedores. Cuéntanos cómo te ayudó Blogdoucode a generar ingresos.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-6">
          <div className="flex flex-col gap-2">
            <label className="text-gray-900 dark:text-white text-base font-medium leading-normal">Nombre completo</label>
            <input 
              className="form-input flex w-full resize-none overflow-hidden rounded-xl text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-200 dark:border-surface-highlight bg-white dark:bg-surface-dark focus:border-primary h-14 placeholder:text-gray-400 dark:placeholder:text-[#92c9a4] px-4 text-base font-normal leading-normal transition-all duration-200" 
              placeholder="Ej. Juan Pérez" 
              type="text" 
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-900 dark:text-white text-base font-medium leading-normal">Tu historia</label>
            <textarea 
              className="form-input flex w-full resize-none rounded-xl text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-200 dark:border-surface-highlight bg-white dark:bg-surface-dark focus:border-primary min-h-40 placeholder:text-gray-400 dark:placeholder:text-[#92c9a4] p-4 text-base font-normal leading-normal transition-all duration-200" 
              placeholder="Cuéntanos cómo lograste tus primeros ingresos, qué estrategias usaste y cuánto tiempo te tomó..."
              required
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-900 dark:text-white text-base font-medium leading-normal">Foto o captura (Opcional)</span>
            <label className="group relative flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 dark:border-surface-highlight rounded-xl cursor-pointer bg-gray-50 dark:bg-surface-dark/50 hover:bg-gray-100 dark:hover:bg-surface-dark hover:border-primary/50 transition-all duration-300">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Camera className="text-gray-400 dark:text-[#92c9a4] group-hover:text-primary transition-colors mb-2" size={32} />
                <p className="mb-1 text-sm text-gray-500 dark:text-gray-300"><span className="font-semibold text-primary">Haz clic para subir</span></p>
                <p className="text-xs text-gray-400 dark:text-gray-500">PNG, JPG (MAX. 5MB)</p>
              </div>
              <input accept="image/*" className="hidden" type="file"/>
            </label>
          </div>
          
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-lg border-t border-gray-200 dark:border-white/5 z-40 max-w-md mx-auto">
            <button type="submit" className="flex items-center justify-center w-full h-14 rounded-full bg-primary hover:bg-[#0fdc53] active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_rgba(19,236,91,0.2)]">
              <span className="text-background-dark text-base font-bold tracking-wide">Enviar Testimonio</span>
              <Send className="ml-2 text-background-dark" size={20} />
            </button>
          </div>
        </form>
      </main>

      <AnimatePresence>
        {submitted && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full max-w-sm bg-white dark:bg-surface-dark border border-gray-200 dark:border-surface-highlight rounded-2xl shadow-2xl p-6 flex flex-col items-center text-center transform transition-all"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">¡Testimonio enviado!</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                Tu testimonio ha sido enviado exitosamente y está pendiente de revisión y aprobación antes de ser publicado.
              </p>
              <button 
                onClick={() => onNavigate('testimonials')}
                className="w-full py-3.5 rounded-xl bg-primary hover:bg-[#0fdc53] text-background-dark font-bold text-base transition-all duration-200 shadow-lg shadow-primary/20"
              >
                Entendido
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
