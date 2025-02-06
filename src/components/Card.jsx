import React from "react";
import "./Card.css";
import pas from "../assets/pas2.svg";
import rasm from "../assets/rasm.svg";
import yurak from "../assets/qizilyurak.svg";

export default function Card() {
  return (
    <section className="card">
      <div className="container">
        <div className="card-parent">
          <div className="up">
            <p>571,632 items</p>
            <div className="btn">
              <button>
                All Items <img src={pas} alt="" />
              </button>
              <button>
                Sort By <img src={pas} alt="" />
              </button>
            </div>
          </div>

          <div className="down-parent">
            <div className="down">
              <img src={rasm} alt="" />
              <div className="categories">
                <h3>Categories</h3>
                <h5>Rating-3.7</h5>
              </div>
              <div className="price">
                <h3>iPhone 16 pro</h3>
                <h3>1144$</h3>
              </div>

              <div className="btn2">
                <img src={yurak} alt="" />
                <button>Buy Now</button>
              </div>
            </div>

            <div className="down">
              <img src={rasm} alt="" />
              <div className="categories">
                <h3>Categories</h3>
                <h5>Rating-3.7</h5>
              </div>
              <div className="price">
                <h3>iPhone 16 pro</h3>
                <h3>1144$</h3>
              </div>

              <div className="btn2">
                <img src={yurak} alt="" />
                <button>Buy Now</button>
              </div>
            </div>

            <div className="down">
              <img src={rasm} alt="" />
              <div className="categories">
                <h3>Categories</h3>
                <h5>Rating-3.7</h5>
              </div>
              <div className="price">
                <h3>iPhone 16 pro</h3>
                <h3>1144$</h3>
              </div>

              <div className="btn2">
                <img src={yurak} alt="" />
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
