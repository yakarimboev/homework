import React from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Card from "./components/Card";
import './App.css'

export default function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="filter">
        <Filter />
        <Card />
      </div>
    </div>
  );
}
