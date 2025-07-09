import Button from "react-bootstrap/Button";
import "./DesktopBanner.css";
import { Link } from "react-router-dom";


export default function Banner() {
  return (
    <section className="banner desktop-banner-bg d-flex align-items-center justify-content-around p-5">
      <div className="d-flex flex-column align-items-start">
        <h1 className="fs-6">SUMMER 2025</h1>
        <h2 className="fs-1 fw-bold">NEW COLLECTION</h2>
        <p className="fs-6">shorts, tees, tanks & more!</p>
        <Link to ="/browse"><Button variant="primary" className="desktop-button">
          SHOP NOW
        </Button>
    </Link>
      </div>

      <img
        src="./banner-1.png"
        alt="banner image in desktop showing two girls lying in a field, laughing"
        className="img-fluid w-25 mt-3"
      />
    </section>
  );
}
