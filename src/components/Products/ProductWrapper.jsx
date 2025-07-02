import ProductPage from "./ProductPage.jsx";
import ProductPageMobile from "./ProductpageMobile.jsx";

import { useWindowWidth } from "../../App"; // adjust path if needed

export default function ProductWrapper() {
    const width = useWindowWidth();
    return width >= 1050 ? <ProductPage /> : <ProductPageMobile />;
    }