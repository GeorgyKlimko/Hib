import React from 'react';
import { Product } from './types';
import "./cards.css"
type CardInfoProps = {
  product: Product;
};

const CardInfo: React.FC<CardInfoProps> = ({ product }) => {
  return (
    <div className="card__new-info">
      <h3 className="card__titel">
        {product.title} {/* Теперь title существует в типе Product */}
      </h3>
      <p className="card__text">
        {product.summary} {/* summary вместо description */}
      </p>
      <span className="card__date">
        {product.date} {/* добавим отображение даты */}
      </span>
      <a href={product.link} className="card__link">
        Read more
      </a>
    </div>
  );
};

export default CardInfo;