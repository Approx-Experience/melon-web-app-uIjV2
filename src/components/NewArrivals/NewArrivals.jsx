import React from "react";
import "./NewArrivals.css";

export default function NewArrivals() {
  return (
    <div className="new-arrivals d-flex flex-column align-items-center justify-content-center p-4">
      <h2 className="fs-3 fw-bold m-4">new arrivals</h2>
      <h3 className="font-14">Fashionable threads for your eyes to see</h3>
      <div className="d-flex">
        <div className="d-flex flex-wrap justify-content-center">
          <img
            src="./shirts.png"
            alt="New Arrival 1"
            className=" m-2 main-image"
          />
          <img
            src="./shorts.png"
            alt="New Arrival 2"
            className="m-2 main-image"
          />
        </div>

        <div className="d-flex flex-column flex-wrap">
          <img
            src="./hats.png"
            alt="New Arrival 3"
            className="m-2 secondary-image"
          />
          <img
            src="./athleisure.png"
            alt="New Arrival 4"
            className=" m-2 secondary-image"
          />
        </div>
      </div>
    </div>
  );
}
