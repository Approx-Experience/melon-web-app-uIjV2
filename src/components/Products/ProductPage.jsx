import { useLoaderData } from "react-router-dom";
import "./ProductPage.css"; 

function ProductPage() {
    const { products } = useLoaderData();
    if (!products || products.length === 0) {
        return <div className="text-center p-4">No products available.</div>;
    }
    
    return (
  <div className="product-page-wrapper">


 <div className="product-grid-container p-4">
        <div className="menu-nav">home / men / shirts / tees</div>
        <div className="main-image">
          <img src="shirts.png" alt="Main product" className="main-product-img" />
        </div>
        <div className="secondary-images">
          <img src="shirts.png" alt="Secondary 1" />
          <img src="shirts.png" alt="Secondary 2" />
          <img src="shirts.png" alt="Secondary 3" />
        </div>
</div>
<div className="product-details-container">
    <p className="new-arrival">new arrival</p>
<h1 className="product-title">product title</h1>
<h2 className="product-price">$10.00</h2>
<p className="product-description">Product description. You can do a lot of cool stuff while wearing this piece. People will
    like you more and you'll be more confident. Stop limiting yourself and buy this thing. You need it and you want it.
</p>
<p className="color-title">available colors:</p>
<div className="color-options">
    <div className="color-dark-green"></div>
    <div className="color-dark-red"></div>
    <div className="color-sand"></div>
</div>
<p className="size-title">size:</p>
<div className="size-options">
    <div>xs</div>
    <div>s</div>
    <div>m</div>
    <div>l</div>
    <div>xl</div>
    </div>

    <div className="product-cta">
<button className="add-to-cart-btn">Add to Cart</button>
<div className="heart-button"><img src="./favorite.svg"></img></div>
</div>
</div>
</div>

 
    )}
export default ProductPage;