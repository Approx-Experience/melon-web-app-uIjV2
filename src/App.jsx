import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root.jsx";
import "./App.css";
import Banner from "./components/Banner.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Banner />} /> 
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;

}

export default App;