import React, { useEffect, useState, useContext } from "react";
import MyCard from "../components/MyCard";
import ProductSwiper from "../components/ProductSwiper";
import { productAPI } from "../API/productAPI";
import { MainContext } from "../Context/MainContext";
import {
  CModal,
  CModalBody,
} from "@coreui/bootstrap-react";


export default function Products() {
  const [products, setProducts] = useState([]);
  const [visibleLg, setVisibleLg] = useState(false);
  const { tempProduct, setTempProduct, pros, setPros } = useContext(MainContext);

  const getallproducts = () => {
    console.log("i'm called getallproducts");
    productAPI
      .getProducts()
      .then((r) => {
        // setProducts(r.data.data.products);
        setPros(r.data.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //    getallproducts();
  // }, []);

  useEffect(() => {
    if (pros.length === 0) { // Checks if the array is empty
      getallproducts();
    }
  }, []);

  useEffect(() => {
    if (tempProduct?._id) {
      setVisibleLg(true);
      setTimeout(() => {
        setVisibleLg(false);
        setTempProduct(null);
      }, 1100);
    }
  }, [tempProduct]);

  return (
    <div>
      <ProductSwiper />
      <div className="mt-5 mb-5 container">
        <div className="row">
          {/* {products.map((products) => {
            return <MyCard productInfo={products} key={products._id} />;
          })} */}
          {pros.map((pros) => {
            return <MyCard productInfo={pros} key={pros._id} />;
          })}
        </div>
      </div>
      <CModal size="lg" visible={visibleLg} onClose={() => setVisibleLg(false)}>
        <CModalBody>
          <div className="text-center text-success fw-bold">
            <span className="me-2">
              <i className="fa-solid fa-circle-check fs-3"></i>
            </span>
            <span className="fs-3 fw-bolder">
              The{" "}
              <span className="text-capitalize color-primary">
                {tempProduct?.title}
              </span>{" "}
              Successfully Added To Cart
            </span>
          </div>
        </CModalBody>
      </CModal>
    </div>
  );
}
