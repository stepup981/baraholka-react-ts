import { IStateCategories } from "./typeCategories";
import { IStateProducts } from "./typeProducts";
import { IStateLoader } from "./typeLoader";
import { IStateBag } from "./typeBag";

export interface IRootState {
  categories: IStateCategories;
  products: IStateProducts;
  loader: IStateLoader;
  bag: IStateBag;
}
