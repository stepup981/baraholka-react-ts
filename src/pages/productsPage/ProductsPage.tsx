import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProducts } from "@store/productsSlice/productsActions";
import { filteredProducts } from "@store/productsSlice/productsSelector";
import { getCategories } from "@store/categoriesSlice/categoriesAction";
import { clearActiveCategories } from "../../store/categoriesSlice/categoriesSlice";

import ProductsBlock from "@components/productsBlock/ProductsBlock";
import FilterProducts from "@components/filterProducts/FilterProducts";
import Loader from "@components/UI/loader/Loader";

import { IRootState } from "../../types";
import { AppDispatch } from "@store/store";

import "@pages/productsPage/productsPage.scss";

const ProductsPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const categories = useSelector((state: IRootState) => state.categories.categories);
  const isLoading = useSelector((state: IRootState) => state.loader.isLoading);
  const productsFiltered = useSelector(filteredProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // useEffect(() => {
  //   return () => {
  //     console.log('типо размонтирован')
  //     dispatch(clearActiveCategories())
  //   }
  // }, [])

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="products">
          <FilterProducts categories={categories} />
          <ProductsBlock products={productsFiltered} />
        </section>
      )}
    </>
  );
};

export default ProductsPage;
