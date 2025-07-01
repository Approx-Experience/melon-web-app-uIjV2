import AllProducts from "./AllProducts.jsx";
import AllProductsMobile from "./AllProductsMobile.jsx";
import { useWindowWidth } from "../../App"; // adjust path if needed

export default function BrowseWrapper() {
  const width = useWindowWidth();
  return width >= 1050 ? <AllProducts /> : <AllProductsMobile />;
}