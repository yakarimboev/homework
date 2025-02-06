import React from "react";
import "./Filter.css";
import logo from "../assets/logo2.svg";
import filter from "../assets/Filters.svg";
import pas from "../assets/pas2.svg";

export default function Filter() {
  return (
    <section className="filter">
      <div className="container">
        <div className="parent">
          <div className="logo">
            <img src={logo} alt="" />
            <img src={filter} alt="" />
          </div>
          <div className="narsa">
            <div className="hal">
              <h3>Status</h3>
              <img src={pas} alt="" />
            </div>

            <div className="hal">
              <h3>Status</h3>
              <img src={pas} alt="" />
            </div>

            <div className="hal">
              <h3>Status</h3>
              <img src={pas} alt="" />
            </div>

            <div className="hal">
              <h3>Status</h3>
              <img src={pas} alt="" />
            </div>

            <div className="hal">
              <h3>Status</h3>
              <img src={pas} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
