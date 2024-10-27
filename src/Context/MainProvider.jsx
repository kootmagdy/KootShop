import React, { useState, useEffect } from "react";
import { MainContext } from "./MainContext";

export default function MainProvider(props) {
  //my codes goes here
  let [count, setCount] = useState(0);

  let [productCanv, setProductCanv] = useState([]);

  let increase = () => {
    setCount(count + 1);
  };

  let decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    } else if (count == 0 || count < 0) {
      setCount(0);
    }
  };

  let pushProduct = (_id, title, price, imgSrc) => {
    setProductCanv((productCanv) => [
      ...productCanv,
      {
        _id,
        title,
        price,
        imgSrc
      },
    ]);
  };

  let deleteProduct = (_id) => {
    const filteredItems = productCanv.filter((prod) => prod._id !== _id);
    setProductCanv(filteredItems);
    setCount(filteredItems.length);
  };

  // used to show the product array
  // useEffect(() => {
  //   console.log("updated");
  //   console.log(productCanv);
  // }, [productCanv]);

  //login token
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [tempProduct, setTempProduct] = useState(null);
  const [pros, setPros] = useState([]);

  let myval = {
    pros, setPros,
    count,
    increase,
    decrease,
    productCanv,
    pushProduct,
    deleteProduct,
    token,
    tempProduct,
    setTempProduct,
    setToken,
    user,
    setUser
  };
  return (
    <MainContext.Provider value={myval}>{props.children}</MainContext.Provider>
  );
}
