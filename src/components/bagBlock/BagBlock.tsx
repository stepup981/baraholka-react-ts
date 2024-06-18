import ProductCard from "@components/productCard/ProductCard";

import "@components/bagBlock/bagBlock.scss";

import { IBag, IStateBag } from "../../types/typeBag";

const BagBlock = ({ productsBag }: any) => {
  console.log(productsBag);
  const renderCards = (arr: IBag[]) => {
    return arr.map(({ ...props }) => <ProductCard key={props.id} {...props}></ProductCard>);
  };
  const cardElem = renderCards(productsBag);

  return <div className="bag-block">{cardElem}</div>;
};

export default BagBlock;
