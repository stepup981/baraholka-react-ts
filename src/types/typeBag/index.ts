import { IProducts } from "../../types/typeProducts";

export interface IBag extends IProducts {}

export interface IStateBag {
  bag: IBag[];
}
