export interface IProducts {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  onBag: boolean;
}

export interface IStateProducts {
  products: IProducts[];
  searchInput?: string;
}
