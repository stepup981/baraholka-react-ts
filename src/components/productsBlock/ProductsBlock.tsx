import ProductCard from "@components/productCard/ProductCard";

import { IProducts, IStateProducts } from "../../types/typeProducts";

import "@components/productsBlock/productsBlock.scss";

const ProductsBlock = ({ products }: IStateProducts) => {
  const renderProducts = (arr: IProducts[]) => {
    return arr.map(({ ...props }) => <ProductCard key={props.id} {...props}></ProductCard>);
  };

  const cards = renderProducts(products);

  return (
    <>
      <div className="products-block">{cards}</div>
    </>
  );
};

export default ProductsBlock;
