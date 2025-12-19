import { useState } from "react";
import Navbar from "../components/Navbar";
import Bittergourd from '../assets/img/bittergourd.jpg';
import Blueberry from '../assets/img/blueberry.jpg';
import Brinjal from '../assets/img/brinjal.jpg';
import Cabbage from '../assets/img/cabbage.jpg';
import Cauliflower from '../assets/img/cauliflower.jpg';
import Custardapple from '../assets/img/custardapple.jpg';
import Kiwi from '../assets/img/kiwi.jpeg';
import Orange from '../assets/img/orange.jpg';
import Pomegranate from '../assets/img/pomegranate.jpeg';
import Pumpkin from '../assets/img/pumpkin.jpg';
import Strawberry from '../assets/img/Strawberry.jpg';
import Tomato from '../assets/img/tomato.jpg';
import Footer from "../components/Footer";

function Shop() {
  const [qty, setQty] = useState(Array(12).fill(0));

  const cartControls = (i:any) =>
    qty[i] === 0 ? (
      <button
        type="button"
        className="btn btn-success btn-sm"
        onClick={() => {
          const copy = [...qty];
          copy[i] = 1;
          setQty(copy);
        }}
      >
        Add To Cart
      </button>
    ) : (
      <div className="d-flex justify-content-center align-items-center gap-2">
        <button
          type="button"
          className="btn btn-outline-success btn-sm"
          onClick={() => {
            const copy = [...qty];
            copy[i] = copy[i] - 1;
            setQty(copy);
          }}
        >
          -
        </button>
        <span style={{ fontWeight: "bold" }}>{qty[i]}</span>
        <button
          type="button"
          className="btn btn-outline-success btn-sm"
          onClick={() => {
            const copy = [...qty];
            copy[i] = copy[i] + 1;
            setQty(copy);
          }}
        >
          +
        </button>
      </div>
    );

  const products = [
    { name: "Strawberry", price: "Rs. 400", img: Strawberry },
    { name: "Blueberry", price: "Rs. 650", img: Blueberry },
    { name: "Orange", price: "Rs. 100", img: Orange },
    { name: "Kiwi", price: "Rs. 350", img: Kiwi },
    { name: "Custard Apple", price: "Rs. 160", img: Custardapple },
    { name: "Pomegranate", price: "Rs. 140", img: Pomegranate },
    
    { name: "Brinjal", price: "Rs. 20", img: Brinjal },
    { name: "Tomato", price: "Rs. 40", img: Tomato },
    { name: "Bitter Gourd", price: "Rs. 60", img: Bittergourd },
    { name: "Cabbage", price: "Rs. 30", img: Cabbage },
    { name: "Pumpkin", price: "Rs. 45", img: Pumpkin },
    { name: "Cauliflower", price: "Rs. 50", img: Cauliflower }
  ];

  return (
    <>
      <Navbar />

      <div className="container py-5 my-5">
        <h1 className="text-center text-capitalize mb-5">Shop Our Plants</h1>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {products.map((product, index) => (
            <div className="col" key={index}>
              <div className="card shadow-sm h-100">
                <img
                  src={product.img}
                  className="card-img-top"
                  alt={product.name}
                  style={{ objectFit: "cover", height: "200px" }}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center">{product.name}</h5>
                  <p className="card-text text-center">{product.price}</p>

                  <div className="mt-auto d-flex justify-content-center">
                    {cartControls(index)}
                  </div>

                  <div className="d-flex justify-content-center mt-2">
                    <button className="btn btn-outline-success btn-sm">
                      View Details
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Shop;
