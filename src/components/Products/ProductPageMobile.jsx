import React from "react";
import { useLoaderData } from "react-router-dom";
import "./ProductPageMobile.css"; 
import { useSelector, useDispatch } from "react-redux";
import { setSelectedSize } from "../../redux/productSizeSlice.js";

const sizes = ["xs", "s", "m", "l", "xl"];

function ProductPageMobile() {
    const { products } = useLoaderData();
    const selectedSize = useSelector((state) => state.productSizeReducer.selectedSize);
    const dispatch = useDispatch();

    if (!products || products.length === 0) {
        return <div className="text-center p-4">No products available.</div>;
    }


  // Place your handler here, before return
  function handleSizeChange(size) {
    dispatch(setSelectedSize(size));
  }

    return (
  <div className="product-page-wrapper-mobile">
 <div className="product-grid-container-mobile">
        {/* <div className="menu-nav">home / men / shirts / tees/mobile</div> */}
        <div className="main-image-mobile">
          <img src="shirts.png" alt="Main product" className="main-product-img" />
        </div>
</div>

<div className="product-details-container-mobile">
  <h1 className="product-title-mobile">product title placeholder</h1>
  <h2 className="product-price">$10.00</h2>
  <p className="product-description-mobile">Product description. You can do a lot of cool stuff while wearing this piece. People will
      like you more and you'll be more confident. Stop limiting yourself and buy this thing. You need it and you want it.
  </p>
<p className="color-title">available colors:</p>
<div className="color-options-mobile">
    <div className="color-dark-green"></div>
    <div className="color-dark-red"></div>
    <div className="color-sand"></div>
</div>


<p className="size-title-mobile">size:</p>
<div className="size-options-mobile">
{sizes.map((size) => (
  <button
    key={size}
    onClick={() => handleSizeChange(size)}
    className={`border px-4 py-2 rounded-full size-button-mobile ${
      selectedSize === size ? "selected" : ""
    }`}
  >
    {size}
  </button>
))}


    </div>

    <div className="product-cta">
<button className="add-to-cart-btn-mobile">Add to Cart</button>
<div className="heart-button"><img src="./favorite.svg"></img></div>
</div>
</div>


</div>

 
    );
}
export default ProductPageMobile;