// NewsList.tsx
import React from 'react';
import { NewsItem } from './Forum';
import './NewsList.css';

interface NewsListProps {
  news: NewsItem[];
}

const NewsList: React.FC<NewsListProps> = ({ news }) => {
  return (
    <div className="newsContainer">
      <h2>Последние новости</h2>
      <div className="newsGrid">
        {news.map(item => (
          <div key={item.id} className="newsCard">
            <div className="newsCategory">{item.category}</div>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <div className="newsDate">{item.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;