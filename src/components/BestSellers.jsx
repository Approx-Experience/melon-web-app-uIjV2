import React from "react";
import ProductInfo from "./ProductInfo";

export default function BestSellers() {
    return (
        <div className="py-10">
        <div className="new-arrivals d-flex flex-column align-items-center p-4">
        <h2 className="fs-3 fw-bold mb-4">best sellers</h2>
        <h3 className="fs-6">The hottest trends in fashion today</h3>
        </div>

     <div className="row px-5">
  <div className="col-6 col-md-3 mb-4">
          <img src="./shorts.png" alt="New Arrival 1" className="img-fluid p-2" />
          <ProductInfo />
        </div>

  <div className="col-6 col-md-3 mb-4">
            <img src="./shorts.png" alt="New Arrival 1" className="img-fluid p-2" />
            <ProductInfo />
            </div>
                        
  <div className="col-6 col-md-3 mb-4">
            <img src="./shorts.png" alt="New Arrival 1" className="img-fluid p-2" />
            <ProductInfo />
            </div>
  <div className="col-6 col-md-3 mb-4">
            <img src="./shorts.png" alt="New Arrival 1" className="img-fluid p-2" />
            <ProductInfo />
            </div>
  <div className="col-6 col-md-3 mb-4">
            <img src="./shorts.png" alt="New Arrival 1" className="img-fluid p-2" />
            <ProductInfo />
            </div>
  <div className="col-6 col-md-3 mb-4">
            <img src="./shorts.png" alt="New Arrival 1" className="img-fluid p-2" />
            <ProductInfo />
            </div>
  <div className="col-6 col-md-3 mb-4">
            <img src="./shorts.png" alt="New Arrival 1" className="img-fluid p-2" />
            <ProductInfo />
            </div>
  <div className="col-6 col-md-3 mb-4">
            <img src="./shorts.png" alt="New Arrival 1" className="img-fluid p-2" />
            <ProductInfo />
            </div>
            </div>
        </div>
    );
    }