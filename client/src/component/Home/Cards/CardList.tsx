import React, { useState } from 'react';
import CardInfo from './CardInfo';
import { Product } from './types';
import "./cards.css"

const CardList: React.FC = () => {
  const [products] = useState<Product[]>([
    {
      title: "React 19 Released!",
      date: "May 13, 2025",
      summary: "The React team has officially released React 19 with new hooks, improved performance, and better TypeScript support.",
      link: "#"
    },
    {
      title: "VS Code Gets AI Coding Assistant",
      date: "May 10, 2025",
      summary: "Visual Studio Code now integrates AI-powered code suggestions, making development faster and smarter.",
      link: "#"
    },
    {
      title: "TypeScript 5.5 Announced",
      date: "May 8, 2025",
      summary: "TypeScript 5.5 brings new language features and improved tooling for large-scale applications.",
      link: "#"
    }
  ]);

  return (
    <div className="card__list">
      {products.map((product, index) => (
        <CardInfo key={index} product={product} />
      ))}
    </div>
  );
};

export default CardList;