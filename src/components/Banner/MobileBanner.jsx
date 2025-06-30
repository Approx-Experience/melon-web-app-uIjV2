import React from "react";
import Button from "react-bootstrap/Button";
import "./MobileBanner.css";

export default function Banner() {
  return (
    <div className="banner bannerimage d-flex align-items-center justify-content-around align-items-center p-5">
      <div className="d-flex flex-column align-items-center banner-content">
        <h1 className="fs-6 mb-4 summerMobile textMobile">SUMMER 2025</h1>
        <h2 className="bannerMobileTitle textMobile">
          NEW <br />
          COLLECTION
        </h2>
        <p className="fs-6 pb-5 mb-5 textMobile">shorts, tees, tanks & more!</p>
        <Button variant="none" className="mobile-banner-button">
          SHOP NOW
        </Button>
      </div>
    </div>
  );
}
