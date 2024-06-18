import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "@store/categoriesSlice/categoriesAction";

import Loader from "@components/UI/loader/Loader";
import CategoriesBlock from "@components/categoriesBlock/CategoriesBlock";

import { IRootState } from "../../types";
import { AppDispatch } from "@store/store";

import "@pages/categoriesPage/categoriesPage.scss";

const CategoriesPage = () => {
  const categories = useSelector((state: IRootState) => state.categories.categories);
  const isLoading = useSelector((state: IRootState) => state.loader.isLoading);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="categories">
          <CategoriesBlock categories={categories} />
        </section>
      )}
    </>
  );
};

export default CategoriesPage;
