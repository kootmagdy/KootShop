import React, { useContext } from "react";
import { MainContext } from "../Context/MainContext";

export default function MyOffCanvCard(props) {
  let { productInfo } = props;

  let { deleteProduct } = useContext(MainContext);

  let Del = () => {
    deleteProduct(productInfo?._id);
  };

  return (
    <div className="container mt-2 mb-3">
      <div className="row oc-row p-1 rounded gx-5">
        <div className="col-4 ps-0 pe-2">
          <img src={productInfo?.imgSrc} className="oc-img" />
        </div>
        <div className="col-8  text-white fs-3 text-center rounded fw-bold">
          <p className="text-capitalize">{productInfo?.title}</p>
          <h2 className="text-warning">{productInfo?.price}$</h2>
          <button onClick={Del} className="btn btn-danger">
            Delete From Cart
          </button>
        </div>
      </div>
    </div>
  );
}
