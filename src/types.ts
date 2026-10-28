export type PageView = 'home' | 'blog' | 'article' | 'game' | 'privacy' | '404' | 'newsletter' | 'publisher' | 'eduraxr';

export interface Article {
  id: string;
  title: string;
  category: 'products' | 'services' | 'engineering';
  categoryLabel: string;
  description: string;
  image: string;
  author: string;
  authorInitials: string;
  date: string;
  readTime: string;
  link?: string;
}

export interface CommentItem {
  id: string;
  name: string;
  text: string;
  date: string;
  avatar?: string;
  initials?: string;
}
