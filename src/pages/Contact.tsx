import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, MessageSquare, Mail, Send, Video, Instagram, Globe } from 'lucide-react';
import { Page } from '../types';

interface ContactProps {
  onNavigate: (page: Page) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark"
    >
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-50">
        <button onClick={() => onNavigate('home')} className="text-[#111418] dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12">Contacto</h2>
      </div>

      <div className="flex px-4 py-6">
        <div className="flex w-full flex-col gap-4 items-center">
          <div className="flex gap-4 flex-col items-center">
            <div className="bg-center bg-no-repeat bg-cover rounded-full h-32 w-32 shadow-lg ring-4 ring-surface-dark dark:ring-[#23482f]" style={{ backgroundImage: 'url("https://picsum.photos/seed/douglas/300/300")' }}></div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-[#111418] dark:text-white text-[22px] font-bold leading-tight tracking-tight text-center">Douglas | Blogdoucode</p>
              <p className="text-gray-600 dark:text-[#92c9a4] text-base font-normal leading-normal text-center mt-1">¿Listo para monetizar? Escríbeme.</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-[#111418] dark:text-white tracking-tight text-xl font-bold leading-tight px-4 text-left pb-3 pt-2">Acceso Rápido</h3>
      <div className="flex justify-stretch w-full px-4 pb-6">
        <div className="grid grid-cols-2 gap-3 w-full">
          <button className="group flex flex-col items-center justify-center overflow-hidden rounded-xl h-24 px-5 bg-white dark:bg-surface-dark border border-transparent dark:border-[#23482f] shadow-sm hover:border-primary/50 transition-all active:scale-95">
            <MessageSquare className="text-green-600 dark:text-primary mb-2 group-hover:scale-110 transition-transform" size={32} />
            <span className="truncate text-sm font-bold leading-normal">WhatsApp</span>
          </button>
          <button className="group flex flex-col items-center justify-center overflow-hidden rounded-xl h-24 px-5 bg-white dark:bg-surface-dark border border-transparent dark:border-[#23482f] shadow-sm hover:border-primary/50 transition-all active:scale-95">
            <Mail className="text-blue-500 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform" size={32} />
            <span className="truncate text-sm font-bold leading-normal">Email</span>
          </button>
        </div>
      </div>

      <h3 className="text-[#111418] dark:text-white tracking-tight text-xl font-bold leading-tight px-4 text-left pb-3 pt-2">Formulario de contacto</h3>
      <div className="flex flex-col px-4 gap-4 pb-8">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-[#92c9a4]" htmlFor="name">Tu Nombre</label>
          <input className="w-full h-12 rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-[#23482f] text-[#111418] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary transition-all px-4" id="name" placeholder="Ej. Juan Pérez" type="text"/>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-[#92c9a4]" htmlFor="email">Tu Correo</label>
          <input className="w-full h-12 rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-[#23482f] text-[#111418] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary transition-all px-4" id="email" placeholder="ejemplo@correo.com" type="email"/>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-[#92c9a4]" htmlFor="topic">¿Cómo te ayudo?</label>
          <select className="w-full h-12 rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-[#23482f] text-[#111418] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all px-4" id="topic">
            <option>Diseño Web</option>
            <option>Coaching YouTube</option>
            <option>Monetización Blogs</option>
            <option>Consulta General</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-[#92c9a4]" htmlFor="message">Mensaje</label>
          <textarea className="w-full rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-[#23482f] text-[#111418] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary transition-all p-4 resize-none" id="message" placeholder="Escribe tu mensaje aquí..." rows={4}></textarea>
        </div>
        <button className="mt-2 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary hover:bg-[#0fd650] text-[#102216] text-base font-bold leading-normal tracking-[0.015em] transition-colors shadow-[0_0_15px_rgba(19,236,91,0.3)]">
          <Send className="mr-2" size={20} />
          Enviar Mensaje
        </button>
      </div>

      <div className="mt-auto flex flex-col items-center justify-center pb-8 pt-4 border-t border-gray-200 dark:border-[#23482f]">
        <p className="text-sm font-medium text-gray-500 dark:text-[#92c9a4] mb-4">Sígueme en redes sociales para más tips</p>
        <div className="flex gap-6">
          <a aria-label="YouTube" className="text-gray-400 hover:text-red-500 transition-colors" href="#"><Video size={32} /></a>
          <a aria-label="Instagram" className="text-gray-400 hover:text-pink-500 transition-colors" href="#"><Instagram size={32} /></a>
          <a aria-label="Web" className="text-gray-400 hover:text-blue-400 transition-colors" href="#"><Globe size={32} /></a>
        </div>
      </div>
    </motion.div>
  );
};
