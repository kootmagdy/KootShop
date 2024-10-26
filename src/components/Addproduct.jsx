import React, { useContext, useRef, useState } from "react";
import { MainContext } from "../Context/MainContext";
import { productAPI } from "../API/productAPI";
import { useNavigate } from "react-router-dom";

export default function Addproduct() {
  let { token } = useContext(MainContext);
  const titleRef = useRef(null);
  const priceRef = useRef(null);
  const imgRef = useRef(null);
  const navigateTo = useNavigate();
  const [error, setError] = useState(null); // State variable for error message
  const [confirm, setConfirm] = useState(null);

  const btnSubmit = async (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const price = priceRef.current.value;
    const image = imgRef.current.value;

    if (title && price && image) {
      try {
        const result = await productAPI.addProduct(
          token,
          title,
          price,
          image,
        );
        console.log(result);
        setConfirm(result.data.data)
        navigateTo("/products");
      } catch (err) {
        console.log(err.response.data.message);
        setError(err.response.data.message);
      }
    }
  };

  return (
    <div className="mt-5 mb-5">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <form className="w-50">
          <div className="vstack gap-3">
            <h3 className="text-center">Add product:</h3>

            <div className="form-group">
              <input
                ref={titleRef}
                type="text"
                className="form-control"
                placeholder="full title"
              />
            </div>

            <div className="form-group">
              <input
                ref={priceRef}
                type="text"
                className="form-control"
                placeholder="price"
              />
            </div>

            <div className="form-group">
              <input
                ref={imgRef}
                type="text"
                className="form-control"
                placeholder="Image Src"
              />
            </div>

            {error && <div className="text-danger">{error}</div>}
            {confirm && <div >{confirm}</div>}
            <button
              type="submit"
              onClick={btnSubmit}
              className="btn btn-success btn-lg btn-block"
            >
              ADD PRODUCT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
