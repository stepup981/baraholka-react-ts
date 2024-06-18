export interface ICategories {
  id: number;
  name: string;
  image: string;
}

export interface IStateCategories {
  categories: ICategories[];
  activeCategories: string[];
}

export interface IStateCategoriesOnly {
  categories: ICategories[];
}
