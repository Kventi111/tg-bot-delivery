import { ContentInner } from "../../components/layout/ContentInner";
import { Footer } from "../../components/layout/Footer";

import { Products } from "./components/Products";
import { Categories } from "./components/Categories";
import { TotalPrice } from "./components/TotalPrice";

export const Home = () => {
  return (
    <>
      <Categories />
      <ContentInner>
        <Products />
      </ContentInner>
      <Footer>
        <TotalPrice />
      </Footer>
    </>
  );
};
