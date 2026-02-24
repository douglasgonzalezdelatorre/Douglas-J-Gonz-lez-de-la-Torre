import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Type, Bookmark, CheckCircle2, Share2, Heart, MessageSquare } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import { Page } from '../types';

interface ArticleDetailProps {
  onNavigate: (page: Page) => void;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({ onNavigate }) => {
  const post = BLOG_POSTS[0];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="flex flex-col min-h-screen pb-20"
    >
      <div className="sticky top-0 z-50 flex items-center bg-white/90 dark:bg-[#102216]/90 backdrop-blur-md p-4 justify-between border-b border-gray-200 dark:border-white/5">
        <button onClick={() => onNavigate('home')} className="text-gray-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <ArrowLeft size={24} />
        </button>
        <div className="flex items-center gap-2">
          <button className="flex size-10 items-center justify-center rounded-full text-gray-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <Type size={24} />
          </button>
          <button className="flex size-10 items-center justify-center rounded-full text-gray-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <Bookmark size={24} />
          </button>
        </div>
      </div>

      <div className="w-full h-64 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-60 z-10"></div>
        <div className="w-full h-full bg-center bg-no-repeat bg-cover transform transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${post.image})` }}></div>
        <div className="absolute bottom-4 left-4 z-20">
          <span className="bg-primary text-background-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{post.category}</span>
        </div>
      </div>

      <div className="px-5 pt-6 pb-2">
        <h1 className="text-gray-900 dark:text-white tracking-tight text-3xl font-extrabold leading-[1.2] mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 py-2 border-b border-gray-200 dark:border-white/10 pb-6">
          <div className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 ring-2 ring-primary/30" style={{ backgroundImage: `url(${post.authorAvatar})` }}></div>
          <div className="flex flex-col">
            <p className="text-gray-900 dark:text-white text-sm font-semibold">{post.author}</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs font-medium flex items-center gap-1">
              <span>{post.date}</span>
              <span className="size-0.5 rounded-full bg-gray-500 dark:bg-gray-400"></span>
              <span>{post.readTime}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 pb-8 space-y-6">
        <p className="text-gray-700 dark:text-gray-300 text-[17px] font-normal leading-relaxed">
          {post.excerpt}
        </p>

        <div>
          <h2 className="text-gray-900 dark:text-white text-xl font-bold mb-3 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full"></span>
            1. Marketing de Afiliados
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-[17px] font-normal leading-relaxed">
            Esta es probablemente la forma más rápida de empezar. Recomienda productos que ya utilizas y amas. Cuando tus lectores compran a través de tu enlace, ganas una comisión.
          </p>
        </div>

        <blockquote className="border-l-4 border-primary pl-4 py-1 my-6 bg-gray-100 dark:bg-surface-dark rounded-r-lg">
          <p className="text-gray-800 dark:text-gray-200 italic font-medium text-lg">
            "La confianza es la moneda del internet. No la gastes recomendando productos malos solo por dinero."
          </p>
        </blockquote>

        <div>
          <h2 className="text-gray-900 dark:text-white text-xl font-bold mb-3 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full"></span>
            2. Venta de Plantillas Web
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-[17px] font-normal leading-relaxed mb-4">
            Si sabes programar, crea componentes reutilizables. Aquí tienes un ejemplo simple de un botón de compra que podrías vender como parte de un UI Kit:
          </p>
          <div className="bg-[#1e1e1e] rounded-lg p-4 overflow-x-auto no-scrollbar border border-white/10 shadow-inner">
            <div className="flex gap-1.5 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-xs font-mono leading-5">
              <span className="text-blue-400">.btn-primary</span> {'{'}<br />
              {'  '}<span className="text-purple-400">background-color</span>: <span className="text-orange-400">#13ec5b</span>;<br />
              {'  '}<span className="text-purple-400">color</span>: <span className="text-orange-400">#000</span>;<br />
              {'  '}<span className="text-purple-400">padding</span>: <span className="text-orange-400">12px 24px</span>;<br />
              {'  '}<span className="text-purple-400">border-radius</span>: <span className="text-orange-400">8px</span>;<br />
              {'  '}<span className="text-purple-400">font-weight</span>: <span className="text-orange-400">bold</span>;<br />
              {'}'}
            </pre>
          </div>
        </div>

        <div>
          <h2 className="text-gray-900 dark:text-white text-xl font-bold mb-3 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full"></span>
            3. Contenido Patrocinado
          </h2>
          <ul className="space-y-3 mt-2">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={20} />
              <span className="text-gray-700 dark:text-gray-300 text-[16px]">Contacta marcas directamente.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={20} />
              <span className="text-gray-700 dark:text-gray-300 text-[16px]">Crea un Media Kit profesional.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={20} />
              <span className="text-gray-700 dark:text-gray-300 text-[16px]">Mantén tu ética editorial.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#102216]/95 backdrop-blur-lg border-t border-gray-200 dark:border-white/10 p-4 max-w-md mx-auto">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <button className="flex flex-col items-center justify-center w-12 h-12 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
              <Heart size={24} />
              <span className="text-[10px] mt-0.5">1.2k</span>
            </button>
            <button className="flex flex-col items-center justify-center w-12 h-12 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
              <MessageSquare size={24} />
              <span className="text-[10px] mt-0.5">48</span>
            </button>
          </div>
          <button className="flex-1 bg-primary text-background-dark font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-[0_0_15px_rgba(19,236,91,0.3)]">
            <Share2 size={20} />
            <span>Compartir</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
