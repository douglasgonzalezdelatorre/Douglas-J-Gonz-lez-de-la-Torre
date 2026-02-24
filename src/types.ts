import { LucideIcon, Globe, Video, Search, GraduationCap, Star, ThumbsUp, ThumbsDown, Send, ArrowLeft, ArrowRight, Bell, User, Home, BookOpen, Mail, CheckCircle2, MessageSquare, Share2, Bookmark, Type, MoreHorizontal, Edit, Check, X, PlayCircle, Rocket, History, Languages } from 'lucide-react';

export type Page = 'home' | 'services' | 'testimonials' | 'article' | 'submit-testimonial' | 'admin' | 'about' | 'contact';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
  date: string;
  category: string;
  avatar: string;
  likes: number;
  status: 'pending' | 'approved' | 'rejected';
  isVideo?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  authorAvatar: string;
}
