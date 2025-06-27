import React from "react";
import Button from "react-bootstrap/Button";
import "./MobileBanner.css";

export default function Banner() {
  return (

    <div
      className="banner bannerimage d-flex align-items-center justify-content-around align-items-center p-5"
    >
      <div className="d-flex flex-column align-items-center">
        <h1 className="fs-6 mb-4 summerMobile textMobile">SUMMER 2025</h1>
        <h2 className="bannerMobileTitle textMobile">NEW <br/>
        COLLECTION</h2>
        <p className="fs-6 pb-5 mb-5 textMobile">shorts, tees, tanks & more!</p>
        <Button
          style={{ backgroundColor: "#176be7", color: "white" }}
          size="md"
          className="px-4 py-2 mt-5 textMobile"
        >
          SHOP NOW
        </Button>
      </div>

      {/* <img src="./banner-1.png" alt="banner" className="img-fluid w-25 mt-3" /> */}
    </div>
  );
}