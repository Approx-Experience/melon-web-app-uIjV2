import React from "react";
import ProductInfo from "../ProductInfo/ProductInfo";

export default function BestSellers() {
  return (
    <div className="">
      <div className="new-arrivals d-flex flex-column align-items-center p-4">
        <h2 className="fs-3 fw-bold mb-4">best sellers</h2>
        <h3 className="font-14">The hottest trends in fashion today</h3>
      </div>
<div className="container-fluid">
      <div className="row">
        <div className="col-6 col-md-3 mb-4">
          <img
            src="./shorts.png"
            alt="New Arrival 1"
            className="img-fluid"
          />
          <ProductInfo />
        </div>

        <div className="col-6 col-md-3 mb-4">
          <img
            src="./shorts.png"
            alt="New Arrival 1"
            className="img-fluid"
          />
          <ProductInfo />
        </div>

        <div className="col-6 col-md-3 mb-4">
          <img
            src="./shorts.png"
            alt="New Arrival 1"
            className="img-fluid"
          />
          <ProductInfo />
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img
            src="./shorts.png"
            alt="New Arrival 1"
            className="img-fluid"
          />
          <ProductInfo />
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img
            src="./shorts.png"
            alt="New Arrival 1"
            className="img-fluid"
          />
          <ProductInfo />
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img
            src="./shorts.png"
            alt="New Arrival 1"
            className="img-fluid"
          />
          <ProductInfo />
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img
            src="./shorts.png"
            alt="New Arrival 1"
            className="img-fluid"
          />
          <ProductInfo />
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img
            src="./shorts.png"
            alt="New Arrival 1"
            className="img-fluid"
          />
          <ProductInfo />
        </div>
      </div>
</div>

    </div>
  );
}
