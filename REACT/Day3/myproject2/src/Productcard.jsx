import "./ProductCard.css";
import localImage from "./assets/headph.jpg";

const Productcard = ()=>{

    return (<>
     <div className="product-card">

      <img
        src={localImage}
        alt="Local Product"
        className="product-image"
      />

      <img
        src="./public/mobile.jpg"
        alt="Mobile"
        className="product-image"
      />

      <h2>Head Phone</h2>

      <p className="price">₹2,00,999</p>

      <button className="buy-button">
        Buy Now
      </button>

    </div>
    </>)
}
export default Productcard