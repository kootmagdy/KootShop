import React, { useEffect, useState, useContext } from "react";
import MyAdminCard from "../components/MyAdminCard";
import ProductSwiper from "../components/ProductSwiper";
import { productAPI } from "../API/productAPI";
import { MainContext } from "../Context/MainContext";

export default function ProductsAdmin() {
  let [products, setProducts] = useState([]);
  let getallproducts = () => {
    productAPI
      .getProducts()
      .then((r) => {
        setProducts(r.data.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getallproducts();
  }, []);

  return (
    <div>
      <ProductSwiper />
      <div className="mt-5 mb-5 container">
        <div className="row">
          {products.map((products) => {
            return <MyAdminCard productInfo={products} key={products._id} />;
          })}
        </div>
      </div>
    </div>
  );
}
