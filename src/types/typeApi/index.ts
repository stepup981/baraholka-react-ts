type TMethod = "GET" | "POST" | "PATCH" | "DELETE";

export interface IRequestParams {
  endpoint: string;
  method?: TMethod;
  includeQuery?: boolean;
  data?: any;
}

export interface ICategories {
  id: number;
  name: string;
  image: string;
}

export interface IProducts {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  onBag: false;
}
