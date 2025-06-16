// TopicList.tsx
import React, { useState } from 'react';
import { Topic } from './Forum';
import './TopicList.css';

interface TopicListProps {
  topics: Topic[];
}

const TopicList: React.FC<TopicListProps> = ({ topics }) => {
  const [sortBy, setSortBy] = useState<'date' | 'views' | 'posts'>('date');
  
  const sortedTopics = [...topics].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime();
    }
    if (sortBy === 'views') {
      return b.views - a.views;
    }
    return b.postsCount - a.postsCount;
  });

  return (
    <div className="topicContainer">
      <div className="topicHeader">
        <h2>Темы для обсуждения</h2>
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value as 'date' | 'views' | 'posts')}
          className="sortSelect"
        >
          <option value="date">По дате</option>
          <option value="views">По просмотрам</option>
          <option value="posts">По количеству сообщений</option>
        </select>
      </div>
      <div className="">
        {sortedTopics.map(topic => (
          <div key={topic.id} className="topicCard">
            <div className="">
              <h3>{topic.title}</h3>
              <div className="topicMeta">
                <span>Автор: {topic.author}</span>
                <span>Сообщений: {topic.postsCount}</span>
                <span>Просмотров: {topic.views}</span>
                <span>Последняя активность: {topic.lastActivity}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicList;