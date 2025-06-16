// App.tsx
import React, { useState } from 'react';
import ForumSidebar from './ForumSidebar';
import NewsList from './NewsList';
import TopicList from './TopicList';
import './Forum.css';

// Типы данных
export  interface ForumSection {
  id: number;
  title: string;
  subsections: string[];
}

export interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: string;
  category: 'IT' | 'Security';
}

export interface Topic {
  id: number;
  title: string;
  author: string;
  postsCount: number;
  lastActivity: string;
  views: number;
}

const Forum: React.FC = () => {
  const [sections] = useState<ForumSection[]>([
    {
      id: 1,
      title: 'Программирование',
      subsections: ['Web разработка', 'Мобильные приложения', 'ИИ и Машинное обучение']
    },
    {
      id: 2,
      title: 'Кибербезопасность',
      subsections: ['Этичный хакинг', 'Пентест', 'Forensic']
    }
  ]);

  const [news] = useState<NewsItem[]>([
    {
      id: 1,
      title: 'Новый уязвимость в OpenSSL',
      content: 'Обнаружена критическая уязвимость в популярной библиотеке...',
      date: '2024-03-20',
      category: 'Security'
    },
    {
      id: 2,
      title: 'Релиз React 19',
      content: 'Команда React анонсировала новую версию фреймворка...',
      date: '2024-03-19',
      category: 'IT'
    }
  ]);

  const [topics] = useState<Topic[]>([
    {
      id: 1,
      title: 'Лучшие практики Rust для безопасного кода',
      author: 'rust_dev',
      postsCount: 45,
      lastActivity: '2024-03-20 14:30',
      views: 1200
    },
    {
      id: 2,
      title: 'Анализ уязвимости CVE-2024-1234',
      author: 'sec_researcher',
      postsCount: 32,
      lastActivity: '2024-03-20 12:45',
      views: 890
    }
  ]);

  return (
    <div className='app'>
      <ForumSidebar sections={sections} />
      <div className='content'>
        <NewsList news={news} />
        <TopicList topics={topics} />
      </div>
    </div>
  );
};
export {}
export default Forum;

export {}