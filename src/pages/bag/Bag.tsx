import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "@store/productsSlice/productsActions";
// import { getBag } from "@store/bagSlice/bagActions";

import { IRootState } from "../../types";
import { AppDispatch } from "@store/store";

import BagBlock from "@components/bagBlock/BagBlock";

const Bag = () => {
  const dispatch: AppDispatch = useDispatch();
  // const bag = useSelector((state) => state.bag.bag)
  const products = useSelector((state: IRootState) => state.products.products);

  const productsOnBag = products.filter((item) => item.onBag);

  // useEffect(() => {
  //   dispatch(getBag());
  // }, []);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <section className="bag">
      <BagBlock productsBag={productsOnBag} />
    </section>
  );
};

export default Bag;
