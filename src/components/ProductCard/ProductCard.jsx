import React from "react";
import Card from "react-bootstrap/Card";
import "./ProductCard.css";

export default function ProductCard({
  title,
  description,
  image,
  price,
  productId,
}) {
  return (
    <div className="product-card">
      <Card>
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Body>
          <div className="fw-bold text-start">{title}</div>
          <div className="product-price text-start">${price + ".00"}</div>

          <div className="text-start text-primary ">{description}</div>

          <div className="product-card-footer">
            <span className="product-id">ID: {productId}</span>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
