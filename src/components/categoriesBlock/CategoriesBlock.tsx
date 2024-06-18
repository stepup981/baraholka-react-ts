import CategoryCard from "@components/categoryCard/CategoryCard";

import { ICategories, IStateCategoriesOnly } from "../../types/typeCategories";

import "@components/categoriesBlock/categoriesBlock.scss";

const CategoriesBlock = ({ categories }: IStateCategoriesOnly) => {
  const renderCategories = (arr: ICategories[]) => {
    return arr.map(({ ...props }) => {
      return <CategoryCard key={props.id} {...props}></CategoryCard>;
    });
  };

  const categoriesEl = renderCategories(categories);

  return <div className="categories-block">{categoriesEl}</div>;
};

export default CategoriesBlock;
