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


import { useState, useEffect } from "react";

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

  return (
    <>
    {width <= 768 ? <MobileNavigationBar/> : <NavigationBar />}
    {width >= 1050 ? <DesktopBanner /> : <MobileBanner />} 
     {width >= 1050 ? <NewArrivals /> : <NewArrivalsMobile />} 
      <BestSellers />
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
