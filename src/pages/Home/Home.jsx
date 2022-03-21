import React from "react";
import Products from "../../components/Products/Products";
import Transactions from "../../components/Transactions/Transactions";
import "./Home.css";

export default function Home({ toggleVal }) {
  return (
    <div className="homepage">
      {toggleVal ? <Transactions /> : <Products />}
    </div>
  );
}
