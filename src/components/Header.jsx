import React from "react";
import logo from "../assets/Logo.svg";
import poisk from "../assets/poisk.svg";
import kalakolchik from "../assets/kalakolchik.svg";
import sms from "../assets/sms.svg";
import pas from "../assets/pas.svg";
import bashara from "../assets/bashara.svg";
import "./Header.css";

export default function Header() {
  return (
    <section className="header">
      <div className="container">
        <div className="header-parent">
          <div className="header-left">
            <img src={logo} alt="" />
            <div className="input">
              <img src={poisk} alt="" />
              <input type="text" />
            </div>
            <a href="">Home</a>
            <a href="">Explore</a>
          </div>
          <div className="header-right">
            <img src={kalakolchik} alt="" />
            <img src={sms} alt="" />
            <button>Wallet</button>
            <img src={pas} alt="" />
            <img src={bashara} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
