import { useState } from 'react';

type CategoriesProps = {
  value: number;
  onChangeCategory: (i: number) => void;
};

const categories = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
];

const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="categories">
      <ul>
        {categories.map((el, i) => {
          return (
            <li
              key={el}
              onClick={() => onChangeCategory(i)}
              className={value == i ? 'active' : ''}
            >
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
