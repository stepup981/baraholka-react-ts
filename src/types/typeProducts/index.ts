export interface IProducts {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  onBag: false;
}

export interface IStateProducts {
  products: IProducts[];
  searchInput: string;
}

export interface IRootState {
  products: IStateProducts;
}
