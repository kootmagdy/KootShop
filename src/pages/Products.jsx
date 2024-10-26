import React, { useEffect, useState, useContext } from "react";
import MyCard from "../components/MyCard";
import ProductSwiper from "../components/ProductSwiper";
import { productAPI } from "../API/productAPI";
import { MainContext } from "../Context/MainContext";

export default function Products() {
  let [products, setProducts] = useState([]);
  let {token} = useContext(MainContext);
  let getallproducts = () => {
    productAPI
      .getProducts(token)
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
            return <MyCard productInfo={products} key={products._id} />;
          })}
        </div>
      </div>
    </div>
  );
}
