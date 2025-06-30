import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard.jsx";
import "./AllProducts.css"; // Assuming you have a CSS file for styling

function AllProducts() {
  const { products } = useLoaderData();
  if (!products || products.length === 0) {
    return <div className="text-center p-4">No products available.</div>;
    }
    
    return (
        <div>
             <div className="sidebar-menu">
      <ul>
        <li className="menu-items"><a href="/">shirts</a></li>
        <li><a href="/">polos</a></li>
        <li><a href="/">tees</a></li>
        <li><a href="/">long sleeves</a></li>
        <li className="menu-items"><a href="/">shop by category</a></li>
        <li><a href="/">men</a></li>
        <li><a href="/">women</a></li>
        <li><a href="/">accessories</a></li>
        <li><a href="/">shoes</a></li>
        <li><a href="/">sale</a></li>
      </ul>
    </div>
        <div className="all-products">
        <div className="new-arrivals d-flex flex-column align-items-start p-4">
            <h2 className="fs-3 fw-bold mb-4">the hottest threads for staying cool</h2>
            <h3 className="font-14">these things are sellin like hotcakes</h3>
        </div>
        <div className="container-fluid">
          <div className="row">
          {products.map((product) => {
            console.log("product:", product); // <-- See each product in the console
            return (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.productId}>
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