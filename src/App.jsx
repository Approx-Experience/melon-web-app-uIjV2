import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root.jsx";
import "./App.css";
import Banner from "./components/Banner.jsx";
import NewArrivals from "./components/NewArrivals.jsx";
import BestSellers from "./components/BestSellers.jsx";

function Home() {
  return (
    <>
      <Banner />
      <NewArrivals />
      <BestSellers />
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
            <Route index element={<Home />} />

    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;

}

export default App;