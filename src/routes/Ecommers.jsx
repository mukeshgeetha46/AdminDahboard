import AddFormEcommerse from "../components/Ecommerse/AddForm";
import Checkout from "../components/Ecommerse/Checkout";
import ShopDetails from "../components/Ecommerse/ShopDetails";
import ShopOne from "../components/Ecommerse/ShopOne";
import MainLayout from "../layouts/MainLayout";

// import other ecommerce pages...

const EcommerceRoutes = {
  path: '/',
  element: <MainLayout />, // Wrap all ecommerce pages in MainLayout
  children: [
    {
      path: 'ecommerce/products-one',
      element: <ShopOne />,
    },
    {
      path: 'ecommerce/product/detail/:name',
      element: <ShopDetails />,
    },
    {
      path: 'ecommerce/checkout',
      element: <Checkout />,
    },
    {
      path: 'ecommerce/add-product',
      element: <AddFormEcommerse />,
    },
    // add other product routes here...
  ],
};

export default [EcommerceRoutes];
