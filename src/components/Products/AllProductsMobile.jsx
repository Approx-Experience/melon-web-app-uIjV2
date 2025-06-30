import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard.jsx";
import "./AllProductsMobile.css"; // Assuming you have a CSS file for styling

function AllProducts() {
  const { products } = useLoaderData();
  if (!products || products.length === 0) {
    return <div className="text-center p-4">No products available.</div>;
  }

  return (
    <div>
      <div className="">
        <div className="d-flex flex-column align-items-center p-4">
          <h2 className="fs-3 fw-bold mb-4 browse-title">
            best sellers
          </h2>
          <h3 className="font-14 browse-secondary-title">these things are sellin like hotcakes</h3>
        </div>
        <div className="container-fluid">
          <div className="row">
            {products.map((product) => {
              return (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-3"
                  key={product.productId}
                >
                  <ProductCard {...product} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
