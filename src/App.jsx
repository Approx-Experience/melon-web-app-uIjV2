import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root.jsx";
import "./App.css";
import DesktopBanner from "./components/Banner/DesktopBanner.jsx";
import MobileBanner from "./components/Banner/MobileBanner.jsx";
import NewArrivals from "./components/NewArrivals/NewArrivals.jsx";
import NewArrivalsMobile from "./components/NewArrivals/NewArrivalsMobile.jsx";
import BestSellers from "./components/BestSellers/BestSellers.jsx";
import NavigationBar from "./components/NavBar/NavigationBar.jsx";
import MobileNavigationBar from "./components/NavBar/MobileNavigationBar.jsx";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./components/ProductCard/ProductCard.jsx";
import { homeLoader } from "./loaders/homeLoader"; // adjust path as needed
import AllProducts from "./components/Products/AllProducts.jsx";
import AllProductsMobile from "./components/Products/AllProductsMobile.jsx";
import BrowseWrapper from "./components/Products/BrowseWrapper.jsx";
import ProductWrapper from "./components/Products/ProductWrapper.jsx";

import { useState, useEffect } from "react";

//function to get the window width
// this is used to determine which components to render based on the screen size

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}

function Home() {
  const width = useWindowWidth();
  const { products } = useLoaderData();
  // console.log(products);

  return (
    <>
      {width <= 1050 ? <MobileNavigationBar /> : <NavigationBar />}
      {width >= 1050 ? <DesktopBanner /> : <MobileBanner />}
      {width >= 1050 ? <NewArrivals /> : <NewArrivalsMobile />}
      <BestSellers products={products}/>
  
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} loader={homeLoader} />
      <Route path="browse" element={<BrowseWrapper />} loader={homeLoader} /> 
      <Route path="products" element={<ProductWrapper />} loader={homeLoader} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
