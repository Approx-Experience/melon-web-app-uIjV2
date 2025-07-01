import ProductCard from "../ProductCard/ProductCard";

export default function BestSellers({ products }) {
  if (!products || products.length === 0) {
    return <div className="text-center p-4">No best sellers available.</div>
  }

  return (
    <div>
      <div className="new-arrivals d-flex flex-column align-items-center p-4">
        <h2 className="fs-3 fw-bold mb-4">best sellers</h2>
        <h3 className="font-14">The hottest trends in fashion today</h3>
      </div>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div
    className="col-6 col-md-4 col-lg-3"
              key={product.productId}
            >
              <ProductCard {...product} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
