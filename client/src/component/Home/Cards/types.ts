export type Product = {
  id?: number; // сделаем необязательным, если нет в данных
  title: string; // заменим name на title
  date: string; // добавим новое поле
  summary: string; // заменим description на summary
  link: string; // добавим новое поле
  // Удалим неиспользуемые поля из предыдущего примера
  // price?: number;
  // imageUrl?: string;
  // rating?: number;
  // category?: string;
};

export type ProductCardProps = {
  product: Product;
 
};

export type ProductListProps = {
  products: Product[];

};