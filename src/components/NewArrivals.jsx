import React from "react";

export default function NewArrivals() {
    return (
        <div className="new-arrivals d-flex flex-column align-items-center justify-content-center p-4">
        <h2 className="fs-3 fw-bold mb-4">new arrivals</h2>
        <h3 className="fs-6">Fashionable threads for your eyes to see</h3>
        <div className="d-flex flex-wrap justify-content-center">
            <img src="./shirts.png" alt="New Arrival 1" className="img-fluid m-2 w-25" />
            <img src="./shorts.png" alt="New Arrival 2" className="img-fluid m-2 w-25" />
            <img src="./hats.png" alt="New Arrival 3" className="img-fluid m-2 w-25" />
            <img src="./athleisure.png" alt="New Arrival 4" className="img-fluid m-2 w-25" />
        </div>
        </div>
    );
    }