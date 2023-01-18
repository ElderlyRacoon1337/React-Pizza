import { useState } from "react";

const Categories = ({ value, onChangeCategory }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((el, i) => {
          return (
            <li
              key={el}
              onClick={() => onChangeCategory(i)}
              className={value == i ? "active" : ""}
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
