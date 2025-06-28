import React from "react";

import "./NewArrivalsMobile.css";

export default function NewArrivals() {
  return (
    <div className="new-arrivals d-flex flex-column align-items-center justify-content-center">
      <h2 className="fs-3 fw-bold m-4">new arrivals MOBILE</h2>
      <h3 className="font-14">Fashionable threads for your eyes to see</h3>
      <div className="d-flex">
        <div className="d-flex flex-wrap justify-content-center new-arrivals-photos">
          <img
            src="./shirts.png"
            alt="New Arrival 1"
            className="img-fluid m-2"
          />
          <img
            src="./shorts.png"
            alt="New Arrival 2"
            className="img-fluid m-2"
          />
       

        <div className="d-flex flex-column">
          <img
            src="./hats.png"
            alt="New Arrival 3"
            className="img-fluid m-2"
          />
          <img
            src="./athleisure.png"
            alt="New Arrival 4"
            className="img-fluid m-2"
          />
        </div>
        </div>
      </div>
    </div>
  );
}
