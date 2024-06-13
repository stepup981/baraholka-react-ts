import {
  IRequestParams,
  ICategories,
} from "../types/typeApi";

import { IProducts } from "../types/typeProducts"

class Api {
  domain: string;

  constructor(domain: string) {
    this.domain = domain;
  }

  async makeRequest({
    endpoint,
    method = "GET",
    includeQuery = true,
    data = null,
  }: IRequestParams) {
    const query = window.location.search;
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: data,
    };

    const response = await fetch(
      includeQuery
        ? `${this.domain}/${endpoint}`
        : `${this.domain}/${endpoint}${query}`,
      options
    );
    if (response.ok) return response.json();

    return alert("Что-то не так");
  }

  getCategories(): Promise<ICategories[]> {
    return this.makeRequest({ endpoint: "categories" });
  }

  getProducts(): Promise<IProducts[]>{
    const statusQuery = false;
    return this.makeRequest({
      endpoint: "products",
      method: "GET",
      includeQuery: statusQuery,
    });
  }

  rebaseStatusOnBag(statusOnBag: { id: number; onBag: boolean }) {
    const { id, onBag } = statusOnBag;
    return this.makeRequest({
      endpoint: `products/${id}`,
      method: "PATCH",
      includeQuery: true,
      data: JSON.stringify({ onBag: onBag }),
    });
  }

  getBag() {
    return this.makeRequest({ endpoint: "bag" });
  }

  addProductOnBag(product: object) {
    return this.makeRequest({
      endpoint: "bag",
      method: "POST",
      includeQuery: true,
      data: JSON.stringify(product),
    });
  }

  removeProductOnBag(productId: number) {
    return this.makeRequest({
      endpoint: `bag/${productId}`,
      method: "DELETE",
      includeQuery: true,
      data: JSON.stringify({ id: productId }),
    });
  }
}

export default new Api(`https://1889268ad06ce1f2.mokky.dev`);

console.log('test')
